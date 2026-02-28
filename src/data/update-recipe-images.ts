/**
 * Update `heroImageUrl` in a recipes .ts file using Wikimedia (Wikipedia + Commons).
 *
 * Strategy:
 * 1) Search id.wikipedia.org for the recipe title (Action API: list=search)
 * 2) Get the page's main image (Action API: prop=pageimages, pithumbsize=...)
 * 3) Fallback to en.wikipedia.org, then Wikimedia Commons (generator=search + prop=imageinfo)
 *
 * Run with:
 *   npm i -D tsx
 *   npx tsx scripts/update-recipe-images.ts ./src/data/recipes.ts
 *
 * Notes:
 * - Creates/updates `image-cache.json` next to the script (can be changed via arg #2).
 * - Keeps existing heroImageUrl if no better image is found.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

type Recipe = { id: string; title: string; heroImageUrl: string };

const RECIPE_FILE = process.argv[2];
const CACHE_FILE = process.argv[3] ?? "image-cache.json";

// You can tune these:
const THUMB_WIDTH = 1200;
const CONCURRENCY = 3;
const SLEEP_MS = 250;

if (!RECIPE_FILE) {
  console.error("Usage: npx tsx update-recipe-images.ts <path/to/recipes.ts> [cache.json]");
  process.exit(1);
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    headers: {
      // Wikimedia recommends identifying your client in UA; keep it simple.
      "user-agent": "recipe-image-updater/1.0",
      "accept": "application/json",
    },
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`HTTP ${res.status} for ${url}\n${body.slice(0, 300)}`);
  }
  return (await res.json()) as T;
}

function normalizeQuery(title: string): string {
  // Remove parentheses + normalize separators.
  return title
    .replace(/\([^)]*\)/g, " ")
    .replace(/[\/|]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function wikiSearchFirstTitle(term: string, lang: "id" | "en"): Promise<string | null> {
  const url =
    `https://${lang}.wikipedia.org/w/api.php` +
    `?action=query&list=search&srlimit=1&format=json&origin=*` +
    `&srsearch=${encodeURIComponent(term)}`;

  const data = await fetchJson<any>(url);
  const first = data?.query?.search?.[0]?.title;
  return typeof first === "string" && first.length ? first : null;
}

async function wikiPageImage(title: string, lang: "id" | "en"): Promise<string | null> {
  const url =
    `https://${lang}.wikipedia.org/w/api.php` +
    `?action=query&prop=pageimages&piprop=original|thumbnail&pithumbsize=${THUMB_WIDTH}` +
    `&format=json&origin=*` +
    `&titles=${encodeURIComponent(title)}`;

  const data = await fetchJson<any>(url);
  const pages = data?.query?.pages ?? {};
  const page = Object.values(pages)[0] as any;
  const img =
    page?.original?.source ||
    page?.thumbnail?.source;

  return typeof img === "string" && img.startsWith("http") ? img : null;
}

async function commonsImage(term: string): Promise<string | null> {
  // Search in File: namespace (6) and return a direct (or thumbnail) URL via imageinfo.
  const url =
    `https://commons.wikimedia.org/w/api.php` +
    `?action=query&generator=search&gsrnamespace=6&gsrlimit=1&format=json&origin=*` +
    `&gsrsearch=${encodeURIComponent(term)}` +
    `&prop=imageinfo&iiprop=url&iiurlwidth=${THUMB_WIDTH}`;

  const data = await fetchJson<any>(url);
  const pages = data?.query?.pages ?? {};
  const page = Object.values(pages)[0] as any;
  const ii = page?.imageinfo?.[0];
  const img = ii?.thumburl || ii?.url;
  return typeof img === "string" && img.startsWith("http") ? img : null;
}

async function bestImageFor(title: string): Promise<string | null> {
  const q = normalizeQuery(title);

  // 1) Indonesian Wikipedia
  try {
    const t = await wikiSearchFirstTitle(q, "id");
    if (t) {
      const img = await wikiPageImage(t, "id");
      if (img) return img;
    }
  } catch {}

  // 2) English Wikipedia
  try {
    const t = await wikiSearchFirstTitle(q, "en");
    if (t) {
      const img = await wikiPageImage(t, "en");
      if (img) return img;
    }
  } catch {}

  // 3) Commons
  try {
    const img = await commonsImage(q);
    if (img) return img;
  } catch {}

  return null;
}

async function mapLimit<T, R>(
  items: T[],
  limit: number,
  fn: (item: T, idx: number) => Promise<R>
): Promise<R[]> {
  const results = new Array<R>(items.length);
  let next = 0;

  async function worker() {
    while (true) {
      const i = next++;
      if (i >= items.length) return;
      results[i] = await fn(items[i], i);
    }
  }

  const workers = Array.from({ length: Math.min(limit, items.length) }, worker);
  await Promise.all(workers);
  return results;
}

async function loadCache(cachePath: string): Promise<Record<string, string>> {
  try {
    const raw = await fs.readFile(cachePath, "utf8");
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

async function saveCache(cachePath: string, cache: Record<string, string>) {
  await fs.writeFile(cachePath, JSON.stringify(cache, null, 2) + "\n", "utf8");
}

function replaceRecipesBlock(source: string, updatedRecipes: Recipe[]): string {
  const startMarker = "export const recipes: Recipe[] =";
  const start = source.indexOf(startMarker);
  if (start < 0) throw new Error("Cannot find `export const recipes: Recipe[] =` block.");

  const openBracket = source.indexOf("[", start);
  if (openBracket < 0) throw new Error("Cannot find `[` for recipes array.");

  const end = source.indexOf("];", openBracket);
  if (end < 0) throw new Error("Cannot find `];` end of recipes array.");

  const before = source.slice(0, start);
  const after = source.slice(end + 2); // keep the trailing semicolon already inside `after`

  const newBlock =
    `export const recipes: Recipe[] = ${JSON.stringify(updatedRecipes, null, 2)};\n`;

  // Ensure we keep exactly one semicolon before the remaining content:
  return before + newBlock + after.replace(/^\s*;/, ";");
}

async function main() {
  const absRecipeFile = path.resolve(RECIPE_FILE);
  const absCacheFile = path.resolve(CACHE_FILE);

  const cache = await loadCache(absCacheFile);

  // Import recipes as real JS objects:
  const mod = await import(pathToFileURL(absRecipeFile).href);
  const recipes: Recipe[] = mod?.recipes;

  if (!Array.isArray(recipes)) {
    throw new Error("The target file does not export `recipes` as an array.");
  }

  console.log(`Loaded ${recipes.length} recipes from ${absRecipeFile}`);
  console.log(`Cache: ${absCacheFile}`);

  const updated = await mapLimit(recipes, CONCURRENCY, async (r, i) => {
    const cacheKey = r.id || r.title;
    if (cache[cacheKey]) return { ...r, heroImageUrl: cache[cacheKey] };

    // Be polite with a small delay:
    if (i > 0) await sleep(SLEEP_MS);

    const img = await bestImageFor(r.title);
    if (img) {
      cache[cacheKey] = img;
      console.log(`[OK]  ${r.title} -> ${img}`);
      return { ...r, heroImageUrl: img };
    }

    console.log(`[SKIP] ${r.title} (keep existing)`);
    return r;
  });

  // Persist cache first:
  await saveCache(absCacheFile, cache);

  // Rewrite TS file block:
  const source = await fs.readFile(absRecipeFile, "utf8");
  const nextSource = replaceRecipesBlock(source, updated);

  await fs.writeFile(absRecipeFile, nextSource, "utf8");

  console.log("Done ✅  recipes file updated.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
