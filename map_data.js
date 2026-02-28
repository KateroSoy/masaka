import { readFileSync, writeFileSync } from 'fs';

const rawData = readFileSync('data.json', 'utf8');
const data = JSON.parse(rawData);

const mapRegion = (origin) => {
    const norm = (origin || '').toLowerCase();
    if (norm.includes('sumatera') || norm.includes('aceh') || norm.includes('jambi') || norm.includes('palembang') || norm.includes('padang')) return 'Sumatera';
    if (norm.includes('jawa') || norm.includes('yogyakarta') || norm.includes('jakarta') || norm.includes('sunda')) return 'Jawa';
    if (norm.includes('bali') || norm.includes('tenggara')) return 'Bali-Nusra';
    if (norm.includes('kalimantan')) return 'Kalimantan';
    if (norm.includes('sulawesi') || norm.includes('gorontalo') || norm.includes('makassar') || norm.includes('manado')) return 'Sulawesi';
    if (norm.includes('papua') || norm.includes('maluku')) return 'Papua/Maluku';
    return 'Nasional';
};

const mapCategory = (cats) => {
    if (!cats || cats.length === 0) return 'Utama';
    const str = cats.join(' ').toLowerCase();
    if (str.includes('kuah') || str.includes('sup') || str.includes('soto')) return 'Sup';
    if (str.includes('sayur') || str.includes('salad')) return 'Sayur';
    if (str.includes('lauk') || str.includes('ikan') || str.includes('ayam')) return 'Lauk';
    if (str.includes('jajanan') || str.includes('cemilan')) return 'Cemilan';
    if (str.includes('minum')) return 'Minuman';
    return 'Utama';
};

const mapDifficulty = (diff) => {
    if (!diff) return 'Sedang';
    const d = diff.toLowerCase();
    if (d.includes('mudah')) return 'Mudah';
    if (d.includes('sulit')) return 'Sulit';
    return 'Sedang';
};

const guessIngCategory = (name) => {
    const n = name.toLowerCase();
    if (n.includes('daging') || n.includes('ayam') || n.includes('ikan') || n.includes('telur') || n.includes('udang')) return 'Protein';
    if (n.includes('bawang') || n.includes('cabai') || n.includes('cabe') || n.includes('jahe') || n.includes('kunyit') || n.includes('lengkuas') || n.includes('serai') || n.includes('daun') || n.includes('garam') || n.includes('gula') || n.includes('merica') || n.includes('ketumbar')) return 'Bumbu';
    if (n.includes('kol') || n.includes('tauge') || n.includes('tomat') || n.includes('bayam') || n.includes('kangkung') || n.includes('kacang panjang') || n.includes('labu') || n.includes('timun')) return 'Sayur';
    return 'Lainnya';
};

const nutritionMap = {
    menusa_0001: { calories: 450, protein: 30, carbs: 12, fat: 30 }, // Rendang
    menusa_0002: { calories: 400, protein: 15, carbs: 55, fat: 15 }, // Mie Aceh
    menusa_0003: { calories: 350, protein: 22, carbs: 8, fat: 25 }, // Gulai Ikan Patin
    menusa_0004: { calories: 320, protein: 14, carbs: 40, fat: 12 }, // Pempek
    menusa_0005: { calories: 250, protein: 15, carbs: 30, fat: 8 }, // Tekwan
    menusa_0006: { calories: 220, protein: 25, carbs: 8, fat: 10 }, // Arsik
    menusa_0007: { calories: 330, protein: 20, carbs: 30, fat: 14 }, // Soto Banjar
    menusa_0008: { calories: 300, protein: 28, carbs: 10, fat: 16 }, // Ayam Cincane
    menusa_0009: { calories: 280, protein: 28, carbs: 8, fat: 14 }, // Ayam Taliwang
    menusa_0010: { calories: 310, protein: 26, carbs: 10, fat: 18 }, // Ayam Betutu
    menusa_0011: { calories: 260, protein: 20, carbs: 8, fat: 15 }, // Sate Lilit
    menusa_0012: { calories: 480, protein: 30, carbs: 15, fat: 32 }, // Coto Makassar
    menusa_0013: { calories: 190, protein: 24, carbs: 6, fat: 7 }, // Ikan Woku
    menusa_0014: { calories: 210, protein: 6, carbs: 42, fat: 2 }, // Tinutuan
    menusa_0015: { calories: 230, protein: 12, carbs: 38, fat: 4 }, // Binte Biluhuta
    menusa_0016: { calories: 360, protein: 20, carbs: 58, fat: 6 }, // Papeda Kuah Kuning
    menusa_0017: { calories: 350, protein: 28, carbs: 12, fat: 20 }, // Rawon
    menusa_0018: { calories: 380, protein: 10, carbs: 45, fat: 20 }, // Gudeg
    menusa_0019: { calories: 500, protein: 26, carbs: 15, fat: 38 }, // Soto Betawi
    menusa_0020: { calories: 180, protein: 8, carbs: 20, fat: 10 }  // Karedok
};

const estimateNutrition = (id) => {
    if (nutritionMap[id]) return nutritionMap[id];
    return { calories: 300, protein: 15, carbs: 20, fat: 12 };
}

const guessImageUrl = (title, category) => {
    const t = title.toLowerCase();

    // Minuman & Es
    if (t.includes('es') || t.includes('jus') || category === 'Minuman' || t.includes('wedang') || t.includes('kopi') || t.includes('sirup')) {
        return "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80"; // Drink image
    }

    // Nasi
    if (t.includes('nasi goreng')) return "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80";
    if (t.includes('nasi')) return "https://images.unsplash.com/photo-1555126634-ae231a4a8c2a?w=800&q=80";

    // Sate
    if (t.includes('sate') || t.includes('satay')) return "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80";

    // Mie / Soto / Kuah
    if (t.includes('mie') || t.includes('bakmi')) return "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80";
    if (t.includes('soto') || t.includes('sup') || t.includes('bakso') || t.includes('rawon') || t.includes('kuah')) return "https://images.unsplash.com/photo-1548943487-a2e4142f5f19?w=800&q=80";

    // Ayam / Unggas
    if (t.includes('ayam') || t.includes('bebek')) {
        if (t.includes('goreng') || t.includes('bakar')) return "https://images.unsplash.com/photo-1606683403264-fa065fa1a221?w=800&q=80"; // Fried/Grilled chicken
        return "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=80"; // Curry/general chicken
    }

    // Daging Sapi / Kambing
    if (t.includes('rendang') || t.includes('sapi') || t.includes('kambing') || t.includes('daging')) return "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80";

    // Ikan / Seafood
    if (t.includes('ikan') || t.includes('udang') || t.includes('cumi') || t.includes('seafood')) return "https://images.unsplash.com/photo-1615141982883-c7da0e698d28?w=800&q=80";

    // Sayur / Tahu / Tempe
    if (t.includes('sayur') || t.includes('salad') || t.includes('gado') || t.includes('karedok') || category === 'Sayur') return "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80";
    if (t.includes('tahu') || t.includes('tempe')) return "https://images.unsplash.com/photo-1627308595229-7830ceeb6386?w=800&q=80";

    // Jajanan / Kue / Cemilan / Takjil
    if (t.includes('kue') || t.includes('pisang') || t.includes('ubi') || t.includes('takjil') || category === 'Cemilan' || t.includes('kolak')) {
        return "https://images.unsplash.com/photo-1529973625058-a665431328fb?w=800&q=80"; // Sweets / pastries
    }

    // Fallback generic food image
    const fallbacks = [
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
        "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&q=80",
        "https://images.unsplash.com/photo-1476224203421-9ce39362ea08?w=800&q=80"
    ];
    // Simple deterministic pick based on title length
    return fallbacks[title.length % fallbacks.length];
};

const mappedRecipes = data.map((item, index) => {
    const region = mapRegion(item.origin_region);
    const category = mapCategory(item.categories);
    const difficulty = mapDifficulty(item.difficulty);
    const nutrition = estimateNutrition(item.id);

    const ingredients = (item.ingredients || []).map((ing, idx) => ({
        id: "ing_" + item.id + "_" + idx,
        name: ing.name + (ing.preparation ? " (" + ing.preparation + ")" : ""),
        qty: ing.quantity || 1,
        unit: ing.unit || "secukupnya",
        category: guessIngCategory(ing.name)
    }));

    const steps = (item.steps || []).map(step => ({
        text: step.text
    }));

    const tips = item.notes ? [item.notes] : [];

    return {
        id: item.id,
        title: item.title,
        description: "Resep " + item.title + " khas " + (item.origin_region || "Nusantara") + ".",
        region,
        category,
        difficulty,
        totalTimeMin: item.total_time || 60,
        servingsDefault: item.servings || 4,
        tags: item.tags || [],
        heroImageUrl: guessImageUrl(item.title, category),
        ingredients,
        steps,
        tips,
        isPremium: false,
        nutrition
    };
});

const tsCode = `export type Difficulty = 'Mudah' | 'Sedang' | 'Sulit';
export type Category = 'Lauk' | 'Sayur' | 'Sup' | 'Sambal' | 'Cemilan' | 'Minuman' | 'Utama';
export type Region = 'Sumatera' | 'Jawa' | 'Bali-Nusra' | 'Kalimantan' | 'Sulawesi' | 'Papua/Maluku' | 'Nasional';

export interface Ingredient {
  id: string;
  name: string;
  qty: number;
  unit: string;
  notes?: string;
  optionalSubstitute?: string;
  category: 'Sayur' | 'Protein' | 'Bumbu' | 'Lainnya';
}

export interface Step {
  text: string;
  timerSuggestedSec?: number;
}

export interface Nutrition {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  region: Region;
  category: Category;
  difficulty: Difficulty;
  totalTimeMin: number;
  servingsDefault: number;
  tags: string[];
  heroImageUrl: string;
  ingredients: Ingredient[];
  steps: Step[];
  tips: string[];
  isPremium: boolean;
  nutrition?: Nutrition;
}

export const recipes: Recipe[] = ${JSON.stringify(mappedRecipes, null, 2)};
`;

writeFileSync('src/data/recipes.ts', tsCode);
console.log('Successfully mapped data.json to src/data/recipes.ts with Nutrition!');
