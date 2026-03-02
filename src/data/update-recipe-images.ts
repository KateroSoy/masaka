/**
 * Update heroImageUrl in recipes.ts using Wikimedia (Wikipedia + Commons)
 */

import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

type Recipe = { id: string; title: string; heroImageUrl: string };

const RECIPE_FILE = process.argv[2];
if (!RECIPE_FILE) {
  console.error("Usage: npx tsx update-recipe-images.ts <path/to/recipes.ts>");
  process.exit(1);
}

const THUMB_WIDTH = 1200;
const CONCURRENCY = 4;
const SLEEP_MS = 100;

/**
 * MANUAL OVERRIDES for recipes that consistently get misidentified.
 */
const MANUAL_OVERRIDES: Record<string, string> = {
  "menusa_0036": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Rujak_Cingur.jpg",
  "menusa_0057": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Gadon_daging.JPG",
  "menusa_0061": "https://upload.wikimedia.org/wikipedia/commons/3/36/Lontong_Sayur_Medan.JPG",
  "menusa_0073": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Ayam_panggang_%281%29.JPG",
  "menusa_0076": "https://upload.wikimedia.org/wikipedia/commons/9/91/Mangut_Ikan_Pe.jpg",
  "menusa_0079": "https://upload.wikimedia.org/wikipedia/commons/d/df/Gulai_Ketam.JPG",
  "menusa_0083": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Soto_Kesawan_Medan.jpg",
  "menusa_0100": "https://upload.wikimedia.org/wikipedia/commons/2/2a/Pastel_Goreng.jpg",
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, { headers: { "user-agent": "recipe-bot/1.0" } });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`);
  return await res.json() as T;
}

async function searchWiki(query: string, lang: string): Promise<string | null> {
  try {
    const url = `https://${lang}.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(query)}&origin=*`;
    const data = await fetchJson<any>(url);
    const results = data.query?.search || [];

    const exclude = ['temple', 'mosque', 'masjid', 'candi', 'kecamatan', 'kabupaten', 'provinsi', 'village', 'administrative', 'history', 'geography'];

    for (const res of results) {
      const lowerSnippet = res.snippet.toLowerCase();
      const hasExclude = exclude.some(word => lowerSnippet.includes(word));
      if (!hasExclude || res.title.toLowerCase().includes(query.toLowerCase())) {
        return res.title;
      }
    }
    return results[0]?.title || null;
  } catch (e) {
    return null;
  }
}

async function wikiPageImage(title: string, lang: string, originalTitle: string): Promise<string | null> {
  try {
    const url = `https://${lang}.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages|images&pithumbsize=${THUMB_WIDTH}&titles=${encodeURIComponent(title)}&origin=*`;
    const data = await fetchJson<any>(url);
    const page: any = Object.values(data.query.pages)[0];

    // 1. Try PageImage
    if (page.thumbnail?.source) {
      const src = page.thumbnail.source.toLowerCase();
      const exclude = ['icon', 'logo', 'map', 'temple', 'mosque', 'candi', 'masjid', 'stamps', 'document', 'medical', 'flag', 'location', 'administrative'];
      if (!exclude.some(word => src.includes(word))) return page.thumbnail.source;
    }

    // 2. Try all images on page
    if (page.images) {
      const candidates = [];
      const exclude = ['icon', 'logo', 'map', 'temple', 'mosque', 'candi', 'masjid', 'stamps', 'document', 'medical', 'flag', 'street', 'mountain', 'university', 'school', 'hospital'];

      for (const img of page.images) {
        const lower = img.title.toLowerCase();
        if (exclude.some(word => lower.includes(word))) continue;
        if (!/\.(jpg|jpeg|png)$/i.test(lower)) continue;

        let score = 0;
        const kw = ['masakan', 'makanan', 'food', 'dish', 'recipe', 'cook', 'soto', 'nasi', 'ayam', 'ikan', 'sayur', 'kue', 'minuman', 'es'];
        kw.forEach(w => { if (lower.includes(w)) score += 2; });

        const titleWords = originalTitle.toLowerCase().split(' ');
        titleWords.forEach(w => { if (w.length > 3 && lower.includes(w)) score += 5; });

        candidates.push({ title: img.title, score });
      }

      candidates.sort((a, b) => b.score - a.score);

      for (const cand of candidates) {
        const iUrl = `https://${lang}.wikipedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url&titles=${encodeURIComponent(cand.title)}&origin=*`;
        const iData = await fetchJson<any>(iUrl);
        const imgUrl = Object.values(iData.query.pages)[0] as any;
        const res = imgUrl.imageinfo?.[0]?.url;
        if (res) return res;
      }
    }
    return null;
  } catch (e) {
    return null;
  }
}

async function bestImageFor(rTitle: string): Promise<string | null> {
  // ID Wiki
  const idT = await searchWiki(rTitle, 'id');
  if (idT) {
    const img = await wikiPageImage(idT, 'id', rTitle);
    if (img) return img;
  }

  // Simple ID
  const simple = rTitle.split('(')[0].trim();
  if (simple !== rTitle) {
    const st = await searchWiki(simple, 'id');
    if (st) {
      const img = await wikiPageImage(st, 'id', rTitle);
      if (img) return img;
    }
  }

  // EN Wiki
  const enT = await searchWiki(rTitle, 'en');
  if (enT) {
    const img = await wikiPageImage(enT, 'en', rTitle);
    if (img) return img;
  }

  return null;
}

async function mapLimit<T, R>(items: T[], limit: number, fn: (item: T) => Promise<R>): Promise<R[]> {
  const results = new Array<R>(items.length);
  let next = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i]);
    }
  });
  await Promise.all(workers);
  return results;
}

function replaceRecipesBlock(source: string, updated: Recipe[]): string {
  const startMarker = "export const recipes: Recipe[] = [";
  const startIdx = source.indexOf(startMarker);
  if (startIdx === -1) throw new Error("Marker not found");

  const endMarker = "];";
  const endIdx = source.indexOf(endMarker, startIdx);
  if (endIdx === -1) throw new Error("End marker not found");

  const before = source.slice(0, startIdx);
  const after = source.slice(endIdx + endMarker.length);
  const newContent = `${startMarker}\n${updated.map(r => JSON.stringify(r, null, 2)).join(',\n')}\n];`;

  return before + newContent + after;
}

async function main() {
  const fullPath = path.resolve(RECIPE_FILE);
  const mod = await import(pathToFileURL(fullPath).href);
  const recipes: Recipe[] = mod.recipes;

  console.log(`Processing ${recipes.length} recipes...`);

  let updatedCount = 0;

  const updated = await mapLimit(recipes, CONCURRENCY, async (r) => {
    try {
      // Override?
      if (MANUAL_OVERRIDES[r.id]) {
        console.log(`[OVERRIDE] ${r.id}: ${r.title}`);
        updatedCount++;
        return { ...r, heroImageUrl: MANUAL_OVERRIDES[r.id] };
      }

      // Unsplash update?
      if (r.heroImageUrl.includes("unsplash.com") || !r.heroImageUrl) {
        const img = await bestImageFor(r.title);
        if (img) {
          console.log(`[FOUND] ${r.id}: ${r.title} -> ${img.slice(0, 50)}...`);
          updatedCount++;
          return { ...r, heroImageUrl: img };
        }
        console.log(`[NOT_FOUND] ${r.id}: ${r.title}`);
      }

      return r;
    } catch (err) {
      console.error(`Error processing recipe ${r.id} (${r.title}):`, err);
      return r;
    }
  });

  console.log(`Finished processing. Total updated: ${updatedCount}`);

  if (updatedCount > 0) {
    try {
      const source = await fs.readFile(fullPath, "utf8");
      const nextSource = replaceRecipesBlock(source, updated);
      await fs.writeFile(fullPath, nextSource, "utf8");
      console.log(`Successfully updated ${fullPath}`);
    } catch (err) {
      console.error("Error writing updated recipes file:", err);
    }
  } else {
    console.log("No images found to update.");
  }
}

main().catch((err) => {
  console.error("FATAL ERROR in main:", err);
  process.exit(1);
});
