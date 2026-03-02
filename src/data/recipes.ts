export type Difficulty = 'Mudah' | 'Sedang' | 'Sulit';
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

export const recipes: Recipe[] = [
  {
    "id": "menusa_0001",
    "title": "Rendang Daging Sapi",
    "description": "Resep Rendang Daging Sapi khas Sumatera Barat.",
    "region": "Sumatera",
    "category": "Utama",
    "difficulty": "Sulit",
    "totalTimeMin": 270,
    "servingsDefault": 6,
    "tags": [
      "pedas",
      "santan",
      "daging"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0001_0",
        "name": "daging sapi (paha/sandung lamur) (potong kotak besar)",
        "qty": 1000,
        "unit": "g",
        "category": "Protein"
      },
      {
        "id": "ing_menusa_0001_1",
        "name": "santan kental",
        "qty": 1000,
        "unit": "ml",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0001_2",
        "name": "santan encer",
        "qty": 1000,
        "unit": "ml",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0001_3",
        "name": "cabai merah keriting",
        "qty": 12,
        "unit": "buah",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0001_4",
        "name": "bawang merah",
        "qty": 12,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0001_5",
        "name": "bawang putih",
        "qty": 6,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0001_6",
        "name": "jahe",
        "qty": 30,
        "unit": "g",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0001_7",
        "name": "lengkuas (memarkan)",
        "qty": 40,
        "unit": "g",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0001_8",
        "name": "serai (memarkan)",
        "qty": 2,
        "unit": "batang",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0001_9",
        "name": "daun jeruk",
        "qty": 6,
        "unit": "lembar",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0001_10",
        "name": "asam kandis (opsional)",
        "qty": 2,
        "unit": "buah",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0001_11",
        "name": "garam",
        "qty": 1,
        "unit": "secukupnya",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Haluskan cabai, bawang merah, bawang putih, jahe (boleh blender dengan sedikit santan encer)."
      },
      {
        "text": "Masukkan bumbu halus ke wajan besar. Tambahkan santan encer, serai, lengkuas, daun jeruk, dan asam kandis."
      },
      {
        "text": "Masak dengan api sedang sambil diaduk sampai mendidih dan bumbu matang (tidak langu)."
      },
      {
        "text": "Masukkan daging. Masak pelan hingga daging mulai empuk dan kuah menyusut."
      },
      {
        "text": "Tambahkan santan kental. Kecilkan api, aduk berkala agar santan tidak pecah."
      },
      {
        "text": "Teruskan memasak hingga minyak keluar, warna menggelap, dan bumbu melekat kering pada daging. Koreksi garam."
      }
    ],
    "tips": [
      "Api kecil dan aduk berkala adalah kunci agar santan tidak pecah dan hasil kering berminyak."
    ],
    "isPremium": false,
    "nutrition": {
      "calories": 450,
      "protein": 30,
      "carbs": 12,
      "fat": 30
    }
  },
  {
    "id": "menusa_0002",
    "title": "Mie Aceh (Goreng/Basah)",
    "description": "Resep Mie Aceh (Goreng/Basah) khas Aceh.",
    "region": "Sumatera",
    "category": "Utama",
    "difficulty": "Sedang",
    "totalTimeMin": 35,
    "servingsDefault": 4,
    "tags": [
      "berbumbu",
      "mie"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0002_0",
        "name": "mie kuning basah (seduh sebentar, tiriskan)",
        "qty": 500,
        "unit": "g",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0002_1",
        "name": "daging sapi atau udang (opsional) (iris tipis)",
        "qty": 200,
        "unit": "g",
        "category": "Protein"
      },
      {
        "id": "ing_menusa_0002_2",
        "name": "kol (iris)",
        "qty": 200,
        "unit": "g",
        "category": "Sayur"
      },
      {
        "id": "ing_menusa_0002_3",
        "name": "tauge",
        "qty": 150,
        "unit": "g",
        "category": "Sayur"
      },
      {
        "id": "ing_menusa_0002_4",
        "name": "tomat (potong)",
        "qty": 2,
        "unit": "buah",
        "category": "Sayur"
      },
      {
        "id": "ing_menusa_0002_5",
        "name": "bawang merah",
        "qty": 8,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0002_6",
        "name": "bawang putih",
        "qty": 4,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0002_7",
        "name": "cabai merah",
        "qty": 6,
        "unit": "buah",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0002_8",
        "name": "kari bubuk",
        "qty": 2,
        "unit": "sdm",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0002_9",
        "name": "jintan (opsional)",
        "qty": 0.5,
        "unit": "sdt",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0002_10",
        "name": "kecap manis",
        "qty": 2,
        "unit": "sdm",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0002_11",
        "name": "kaldu/air (untuk versi basah)",
        "qty": 250,
        "unit": "ml",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0002_12",
        "name": "garam",
        "qty": 1,
        "unit": "secukupnya",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Haluskan bawang merah, bawang putih, cabai. Tumis sampai harum."
      },
      {
        "text": "Masukkan kari bubuk (dan jintan bila pakai), aduk hingga bumbu matang."
      },
      {
        "text": "Masukkan daging/udang, masak sampai berubah warna."
      },
      {
        "text": "Masukkan kol, tomat. Tambahkan kecap, garam. Untuk versi basah, tuang kaldu/air."
      },
      {
        "text": "Masukkan mie dan tauge. Aduk cepat sampai rata dan mie menyerap bumbu."
      },
      {
        "text": "Koreksi rasa, angkat. Sajikan hangat."
      }
    ],
    "tips": [
      "Aduk cepat setelah mie masuk agar tidak lembek dan bumbu merata."
    ],
    "isPremium": false,
    "nutrition": {
      "calories": 400,
      "protein": 15,
      "carbs": 55,
      "fat": 15
    }
  },
  {
    "id": "menusa_0003",
    "title": "Gulai Ikan Patin",
    "description": "Resep Gulai Ikan Patin khas Jambi.",
    "region": "Sumatera",
    "category": "Utama",
    "difficulty": "Sedang",
    "totalTimeMin": 40,
    "servingsDefault": 4,
    "tags": [
      "santan",
      "ikan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1615141982883-c7da0e698d28?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0003_0",
        "name": "ikan patin (potong, lumuri sedikit garam dan jeruk nipis)",
        "qty": 700,
        "unit": "g",
        "category": "Protein"
      },
      {
        "id": "ing_menusa_0003_1",
        "name": "santan",
        "qty": 800,
        "unit": "ml",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0003_2",
        "name": "bawang merah",
        "qty": 8,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0003_3",
        "name": "bawang putih",
        "qty": 4,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0003_4",
        "name": "cabai merah",
        "qty": 5,
        "unit": "buah",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0003_5",
        "name": "kunyit",
        "qty": 20,
        "unit": "g",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0003_6",
        "name": "jahe",
        "qty": 15,
        "unit": "g",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0003_7",
        "name": "lengkuas (memarkan)",
        "qty": 20,
        "unit": "g",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0003_8",
        "name": "serai (memarkan)",
        "qty": 1,
        "unit": "batang",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0003_9",
        "name": "daun salam",
        "qty": 2,
        "unit": "lembar",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0003_10",
        "name": "asam jawa (larutkan dengan sedikit air)",
        "qty": 1,
        "unit": "sdm",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0003_11",
        "name": "garam",
        "qty": 1,
        "unit": "secukupnya",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Haluskan bawang merah, bawang putih, cabai, kunyit, jahe."
      },
      {
        "text": "Tumis bumbu halus hingga harum. Masukkan serai, lengkuas, daun salam."
      },
      {
        "text": "Tuang santan perlahan sambil diaduk sampai mendidih kecil."
      },
      {
        "text": "Masukkan ikan patin. Masak api kecil hingga ikan matang."
      },
      {
        "text": "Tambahkan larutan asam jawa, koreksi garam. Masak 2–3 menit, angkat."
      }
    ],
    "tips": [
      "Aduk santan sebelum ikan masuk agar tidak pecah; setelah ikan masuk, aduk pelan."
    ],
    "isPremium": false,
    "nutrition": {
      "calories": 350,
      "protein": 22,
      "carbs": 8,
      "fat": 25
    }
  },
  {
    "id": "menusa_0004",
    "title": "Pempek Kapal Selam",
    "description": "Resep Pempek Kapal Selam khas Sumatera Selatan.",
    "region": "Sumatera",
    "category": "Cemilan",
    "difficulty": "Sedang",
    "totalTimeMin": 75,
    "servingsDefault": 6,
    "tags": [
      "ikan",
      "kukus/rebus"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1529973625058-a665431328fb?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0004_0",
        "name": "ikan tenggiri giling (dingin)",
        "qty": 400,
        "unit": "g",
        "category": "Protein"
      },
      {
        "id": "ing_menusa_0004_1",
        "name": "tepung sagu/tapioka",
        "qty": 500,
        "unit": "g",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0004_2",
        "name": "air es",
        "qty": 250,
        "unit": "ml",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0004_3",
        "name": "garam",
        "qty": 2,
        "unit": "sdt",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0004_4",
        "name": "gula",
        "qty": 1,
        "unit": "sdt",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0004_5",
        "name": "bawang putih (haluskan)",
        "qty": 3,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0004_6",
        "name": "telur ayam (untuk isi)",
        "qty": 6,
        "unit": "butir",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Campur ikan giling, garam, gula, bawang putih. Tuang air es sedikit-sedikit hingga adonan lembut."
      },
      {
        "text": "Masukkan tepung sagu bertahap, aduk sampai bisa dipulung (jangan diuleni keras)."
      },
      {
        "text": "Bentuk adonan seperti kantong, isi 1 butir telur, rapatkan."
      },
      {
        "text": "Rebus air banyak hingga mendidih. Masukkan pempek, rebus sampai mengapung dan 5 menit tambahan."
      },
      {
        "text": "Angkat, tiriskan. Sajikan dengan kuah cuko (dibuat terpisah)."
      }
    ],
    "tips": [
      "Kunci pempek kenyal: adonan dingin dan tidak diuleni berlebihan."
    ],
    "isPremium": false,
    "nutrition": {
      "calories": 320,
      "protein": 14,
      "carbs": 40,
      "fat": 12
    }
  },
  {
    "id": "menusa_0005",
    "title": "Tekwan Palembang",
    "description": "Resep Tekwan Palembang khas Sumatera Selatan.",
    "region": "Sumatera",
    "category": "Sup",
    "difficulty": "Sedang",
    "totalTimeMin": 60,
    "servingsDefault": 5,
    "tags": [
      "sup",
      "ikan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0005_0",
        "name": "ikan tenggiri giling",
        "qty": 300,
        "unit": "g",
        "category": "Protein"
      },
      {
        "id": "ing_menusa_0005_1",
        "name": "tepung tapioka",
        "qty": 250,
        "unit": "g",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0005_2",
        "name": "bawang putih (haluskan)",
        "qty": 3,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0005_3",
        "name": "garam",
        "qty": 1.5,
        "unit": "sdt",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0005_4",
        "name": "kaldu ikan/air",
        "qty": 1500,
        "unit": "ml",
        "category": "Protein"
      },
      {
        "id": "ing_menusa_0005_5",
        "name": "jamur kuping (rendam, iris)",
        "qty": 30,
        "unit": "g",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0005_6",
        "name": "bengkuang (serut)",
        "qty": 150,
        "unit": "g",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0005_7",
        "name": "daun bawang (iris)",
        "qty": 2,
        "unit": "batang",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0005_8",
        "name": "seledri (iris)",
        "qty": 2,
        "unit": "batang",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0005_9",
        "name": "merica",
        "qty": 0.5,
        "unit": "sdt",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Buat adonan tekwan: campur ikan, bawang putih, garam, lalu masukkan tapioka sampai bisa dipulung."
      },
      {
        "text": "Didihkan air. Bentuk adonan dengan sendok (bulat kecil), rebus sampai mengapung. Tiriskan."
      },
      {
        "text": "Didihkan kaldu ikan/air. Masukkan merica, koreksi garam."
      },
      {
        "text": "Masukkan jamur kuping dan bengkuang, masak 3–5 menit."
      },
      {
        "text": "Masukkan tekwan, daun bawang, seledri. Angkat dan sajikan."
      }
    ],
    "tips": [
      "Kaldu ikan membuat rasa lebih ‘Palembang’. Jika tidak ada, gunakan air dan tambahkan sedikit ikan rebus."
    ],
    "isPremium": false,
    "nutrition": {
      "calories": 250,
      "protein": 15,
      "carbs": 30,
      "fat": 8
    }
  },
  {
    "id": "menusa_0006",
    "title": "Arsik Ikan Mas",
    "description": "Resep Arsik Ikan Mas khas Sumatera Utara.",
    "region": "Sumatera",
    "category": "Utama",
    "difficulty": "Sedang",
    "totalTimeMin": 60,
    "servingsDefault": 4,
    "tags": [
      "ikan",
      "berbumbu"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1615141982883-c7da0e698d28?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0006_0",
        "name": "ikan mas (bersihkan, kerat)",
        "qty": 800,
        "unit": "g",
        "category": "Protein"
      },
      {
        "id": "ing_menusa_0006_1",
        "name": "andaliman (opsional tapi khas)",
        "qty": 1,
        "unit": "sdt",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0006_2",
        "name": "kunyit",
        "qty": 25,
        "unit": "g",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0006_3",
        "name": "bawang merah",
        "qty": 10,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0006_4",
        "name": "bawang putih",
        "qty": 4,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0006_5",
        "name": "jahe",
        "qty": 15,
        "unit": "g",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0006_6",
        "name": "serai (memarkan)",
        "qty": 2,
        "unit": "batang",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0006_7",
        "name": "daun bawang (potong 3 cm)",
        "qty": 2,
        "unit": "batang",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0006_8",
        "name": "asam cikala/kecombrang muda (opsional) (iris)",
        "qty": 1,
        "unit": "buah",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0006_9",
        "name": "air",
        "qty": 600,
        "unit": "ml",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0006_10",
        "name": "garam",
        "qty": 1,
        "unit": "secukupnya",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Haluskan bawang merah, bawang putih, kunyit, jahe (dan andaliman bila pakai)."
      },
      {
        "text": "Susun ikan dalam panci. Olesi/tuang bumbu halus merata."
      },
      {
        "text": "Tambahkan serai, daun bawang, dan kecombrang/asam cikala."
      },
      {
        "text": "Tuang air, masak api sedang sampai mendidih, lalu kecilkan."
      },
      {
        "text": "Masak sampai kuah menyusut dan bumbu meresap. Koreksi garam, angkat."
      }
    ],
    "tips": [
      "Jangan sering dibalik agar ikan tidak hancur; goyangkan panci perlahan bila perlu."
    ],
    "isPremium": false,
    "nutrition": {
      "calories": 220,
      "protein": 25,
      "carbs": 8,
      "fat": 10
    }
  },
  {
    "id": "menusa_0007",
    "title": "Soto Banjar",
    "description": "Resep Soto Banjar khas Kalimantan Selatan.",
    "region": "Kalimantan",
    "category": "Sup",
    "difficulty": "Sedang",
    "totalTimeMin": 80,
    "servingsDefault": 6,
    "tags": [
      "soto",
      "ayam"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1548943487-a2e4142f5f19?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0007_0",
        "name": "ayam (kampung lebih wangi) (potong)",
        "qty": 1,
        "unit": "ekor",
        "category": "Protein"
      },
      {
        "id": "ing_menusa_0007_1",
        "name": "air",
        "qty": 2000,
        "unit": "ml",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0007_2",
        "name": "bawang merah",
        "qty": 10,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0007_3",
        "name": "bawang putih",
        "qty": 5,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0007_4",
        "name": "jahe",
        "qty": 20,
        "unit": "g",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0007_5",
        "name": "pala bubuk",
        "qty": 0.25,
        "unit": "sdt",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0007_6",
        "name": "kayu manis (opsional)",
        "qty": 1,
        "unit": "batang",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0007_7",
        "name": "cengkeh (opsional)",
        "qty": 3,
        "unit": "butir",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0007_8",
        "name": "garam",
        "qty": 1,
        "unit": "secukupnya",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0007_9",
        "name": "bihun (seduh)",
        "qty": 200,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Rebus ayam hingga matang. Angkat ayam, suwir. Saring kaldu."
      },
      {
        "text": "Haluskan bawang merah, bawang putih, jahe. Tumis sampai harum."
      },
      {
        "text": "Masukkan tumisan ke kaldu. Tambahkan pala, kayu manis, cengkeh (bila pakai)."
      },
      {
        "text": "Masak 10–15 menit. Koreksi garam."
      },
      {
        "text": "Sajikan: bihun + suwiran ayam, siram kuah soto."
      }
    ],
    "tips": [
      "Bumbu rempah hangat (pala) adalah ciri khas kuah soto Banjar."
    ],
    "isPremium": false,
    "nutrition": {
      "calories": 330,
      "protein": 20,
      "carbs": 30,
      "fat": 14
    }
  },
  {
    "id": "menusa_0008",
    "title": "Ayam Cincane (Ayam Bakar Samarinda)",
    "description": "Resep Ayam Cincane (Ayam Bakar Samarinda) khas Kalimantan Timur.",
    "region": "Kalimantan",
    "category": "Utama",
    "difficulty": "Sedang",
    "totalTimeMin": 60,
    "servingsDefault": 4,
    "tags": [
      "bakar",
      "ayam"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1606683403264-fa065fa1a221?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0008_0",
        "name": "ayam (belah dan pipihkan)",
        "qty": 1,
        "unit": "ekor",
        "category": "Protein"
      },
      {
        "id": "ing_menusa_0008_1",
        "name": "bawang merah",
        "qty": 8,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0008_2",
        "name": "bawang putih",
        "qty": 4,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0008_3",
        "name": "cabai merah",
        "qty": 6,
        "unit": "buah",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0008_4",
        "name": "kemiri (sangrai)",
        "qty": 4,
        "unit": "butir",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0008_5",
        "name": "ketumbar",
        "qty": 1,
        "unit": "sdt",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0008_6",
        "name": "gula merah (serut)",
        "qty": 1,
        "unit": "sdm",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0008_7",
        "name": "asam jawa (larutkan)",
        "qty": 1,
        "unit": "sdm",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0008_8",
        "name": "garam",
        "qty": 1,
        "unit": "secukupnya",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Haluskan bawang merah, bawang putih, cabai, kemiri, ketumbar."
      },
      {
        "text": "Tumis bumbu hingga harum. Tambahkan gula merah dan larutan asam jawa, masak sampai mengental."
      },
      {
        "text": "Lumuri ayam dengan bumbu. Diamkan 15 menit."
      },
      {
        "text": "Panggang/bakar ayam sambil diolesi sisa bumbu hingga matang dan berkilau."
      },
      {
        "text": "Koreksi rasa (garam), sajikan hangat."
      }
    ],
    "tips": [
      "Oles berulang agar bumbu membentuk glaze dan wangi asapnya keluar."
    ],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 28,
      "carbs": 10,
      "fat": 16
    }
  },
  {
    "id": "menusa_0009",
    "title": "Ayam Taliwang",
    "description": "Resep Ayam Taliwang khas Nusa Tenggara Barat.",
    "region": "Bali-Nusra",
    "category": "Utama",
    "difficulty": "Sedang",
    "totalTimeMin": 45,
    "servingsDefault": 4,
    "tags": [
      "pedas",
      "bakar"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0009_0",
        "name": "ayam kampung muda (belah dua)",
        "qty": 1,
        "unit": "ekor",
        "category": "Protein"
      },
      {
        "id": "ing_menusa_0009_1",
        "name": "cabai merah",
        "qty": 8,
        "unit": "buah",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0009_2",
        "name": "cabai rawit (opsional)",
        "qty": 8,
        "unit": "buah",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0009_3",
        "name": "bawang merah",
        "qty": 8,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0009_4",
        "name": "bawang putih",
        "qty": 4,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0009_5",
        "name": "terasi (bakar sebentar)",
        "qty": 0.5,
        "unit": "sdt",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0009_6",
        "name": "gula merah",
        "qty": 1,
        "unit": "sdm",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0009_7",
        "name": "jeruk limau/nipis (ambil airnya)",
        "qty": 1,
        "unit": "buah",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0009_8",
        "name": "garam",
        "qty": 1,
        "unit": "secukupnya",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Rebus ayam sebentar (opsional) agar cepat empuk, tiriskan."
      },
      {
        "text": "Haluskan cabai, bawang, terasi. Tumis sampai harum."
      },
      {
        "text": "Tambahkan gula merah, garam, air jeruk. Aduk rata."
      },
      {
        "text": "Lumuri ayam dengan bumbu. Diamkan 10–15 menit."
      },
      {
        "text": "Bakar ayam hingga matang sambil diolesi bumbu. Sajikan."
      }
    ],
    "tips": [
      "Bumbu harus matang (tidak langu) sebelum dipakai oles agar aroma sedap keluar."
    ],
    "isPremium": false,
    "nutrition": {
      "calories": 280,
      "protein": 28,
      "carbs": 8,
      "fat": 14
    }
  },
  {
    "id": "menusa_0010",
    "title": "Ayam Betutu (Sederhana)",
    "description": "Resep Ayam Betutu (Sederhana) khas Bali.",
    "region": "Bali-Nusra",
    "category": "Utama",
    "difficulty": "Sedang",
    "totalTimeMin": 150,
    "servingsDefault": 6,
    "tags": [
      "rempah",
      "ayam"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0010_0",
        "name": "ayam utuh",
        "qty": 1,
        "unit": "ekor",
        "category": "Protein"
      },
      {
        "id": "ing_menusa_0010_1",
        "name": "bawang merah",
        "qty": 12,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0010_2",
        "name": "bawang putih",
        "qty": 6,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0010_3",
        "name": "cabai merah",
        "qty": 6,
        "unit": "buah",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0010_4",
        "name": "kunyit",
        "qty": 25,
        "unit": "g",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0010_5",
        "name": "jahe",
        "qty": 20,
        "unit": "g",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0010_6",
        "name": "kencur (opsional)",
        "qty": 10,
        "unit": "g",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0010_7",
        "name": "serai (memarkan)",
        "qty": 2,
        "unit": "batang",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0010_8",
        "name": "daun salam",
        "qty": 3,
        "unit": "lembar",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0010_9",
        "name": "garam",
        "qty": 1,
        "unit": "secukupnya",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Haluskan bawang merah, bawang putih, cabai, kunyit, jahe, kencur (jika ada)."
      },
      {
        "text": "Tumis bumbu halus hingga harum. Tambahkan serai dan daun salam."
      },
      {
        "text": "Lumuri ayam (luar-dalam) dengan bumbu, beri garam secukupnya."
      },
      {
        "text": "Masak ayam dalam panci tertutup dengan sedikit air (±200 ml) api kecil 60–90 menit hingga empuk."
      },
      {
        "text": "Panggang sebentar (opsional) agar kulit lebih wangi. Sajikan."
      }
    ],
    "tips": [
      "Masak api kecil lama membuat bumbu meresap sampai ke serat ayam."
    ],
    "isPremium": false,
    "nutrition": {
      "calories": 310,
      "protein": 26,
      "carbs": 10,
      "fat": 18
    }
  },
  {
    "id": "menusa_0011",
    "title": "Sate Lilit Ikan",
    "description": "Resep Sate Lilit Ikan khas Bali.",
    "region": "Bali-Nusra",
    "category": "Lauk",
    "difficulty": "Mudah",
    "totalTimeMin": 40,
    "servingsDefault": 5,
    "tags": [
      "sate",
      "ikan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0011_0",
        "name": "ikan (tenggiri/tuna) cincang halus",
        "qty": 400,
        "unit": "g",
        "category": "Protein"
      },
      {
        "id": "ing_menusa_0011_1",
        "name": "kelapa parut (sangrai ringan)",
        "qty": 100,
        "unit": "g",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0011_2",
        "name": "bawang merah",
        "qty": 6,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0011_3",
        "name": "bawang putih",
        "qty": 3,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0011_4",
        "name": "cabai merah",
        "qty": 3,
        "unit": "buah",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0011_5",
        "name": "kunyit",
        "qty": 10,
        "unit": "g",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0011_6",
        "name": "serai (haluskan bagian putihnya)",
        "qty": 1,
        "unit": "batang",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0011_7",
        "name": "garam",
        "qty": 1,
        "unit": "sdt",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0011_8",
        "name": "tusuk serai/bambu (untuk melilit)",
        "qty": 10,
        "unit": "batang",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Haluskan bawang merah, bawang putih, cabai, kunyit, dan serai."
      },
      {
        "text": "Campur ikan, bumbu halus, kelapa parut, garam. Aduk rata."
      },
      {
        "text": "Ambil adonan, lilitkan memanjang pada batang serai/bambu."
      },
      {
        "text": "Panggang di atas bara/pan grill sambil dibalik sampai matang."
      },
      {
        "text": "Sajikan hangat."
      }
    ],
    "tips": [
      "Kelapa sangrai memberi aroma khas dan membantu adonan ‘set’ saat dipanggang."
    ],
    "isPremium": false,
    "nutrition": {
      "calories": 260,
      "protein": 20,
      "carbs": 8,
      "fat": 15
    }
  },
  {
    "id": "menusa_0012",
    "title": "Coto Makassar",
    "description": "Resep Coto Makassar khas Sulawesi Selatan.",
    "region": "Sulawesi",
    "category": "Sup",
    "difficulty": "Sedang",
    "totalTimeMin": 115,
    "servingsDefault": 6,
    "tags": [
      "berkuah",
      "daging"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0012_0",
        "name": "daging sapi (potong)",
        "qty": 600,
        "unit": "g",
        "category": "Protein"
      },
      {
        "id": "ing_menusa_0012_1",
        "name": "air",
        "qty": 2500,
        "unit": "ml",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0012_2",
        "name": "kacang tanah (sangrai, haluskan)",
        "qty": 80,
        "unit": "g",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0012_3",
        "name": "bawang merah",
        "qty": 10,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0012_4",
        "name": "bawang putih",
        "qty": 5,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0012_5",
        "name": "ketumbar",
        "qty": 1,
        "unit": "sdt",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0012_6",
        "name": "jintan (opsional)",
        "qty": 0.5,
        "unit": "sdt",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0012_7",
        "name": "serai (memarkan)",
        "qty": 2,
        "unit": "batang",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0012_8",
        "name": "daun salam",
        "qty": 2,
        "unit": "lembar",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0012_9",
        "name": "garam",
        "qty": 1,
        "unit": "secukupnya",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Rebus daging sampai empuk. Angkat daging, iris. Simpan kaldu."
      },
      {
        "text": "Haluskan bawang merah, bawang putih, ketumbar (dan jintan bila pakai). Tumis hingga harum."
      },
      {
        "text": "Masukkan tumisan ke kaldu. Tambahkan serai dan daun salam."
      },
      {
        "text": "Masukkan kacang tanah halus. Aduk hingga kuah sedikit kental."
      },
      {
        "text": "Masukkan irisan daging, masak 10 menit. Koreksi garam, sajikan."
      }
    ],
    "tips": [
      "Kacang sangrai memberi body kuah dan aroma khas."
    ],
    "isPremium": false,
    "nutrition": {
      "calories": 480,
      "protein": 30,
      "carbs": 15,
      "fat": 32
    }
  },
  {
    "id": "menusa_0013",
    "title": "Ikan Woku Belanga",
    "description": "Resep Ikan Woku Belanga khas Sulawesi Utara.",
    "region": "Sulawesi",
    "category": "Utama",
    "difficulty": "Mudah",
    "totalTimeMin": 40,
    "servingsDefault": 4,
    "tags": [
      "pedas",
      "aromatik",
      "ikan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1615141982883-c7da0e698d28?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0013_0",
        "name": "ikan (kakap/cakalang) (potong)",
        "qty": 700,
        "unit": "g",
        "category": "Protein"
      },
      {
        "id": "ing_menusa_0013_1",
        "name": "tomat (potong)",
        "qty": 2,
        "unit": "buah",
        "category": "Sayur"
      },
      {
        "id": "ing_menusa_0013_2",
        "name": "daun kemangi",
        "qty": 1,
        "unit": "ikat",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0013_3",
        "name": "daun bawang (iris)",
        "qty": 2,
        "unit": "batang",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0013_4",
        "name": "cabai rawit (sesuai selera)",
        "qty": 10,
        "unit": "buah",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0013_5",
        "name": "bawang merah",
        "qty": 8,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0013_6",
        "name": "bawang putih",
        "qty": 3,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0013_7",
        "name": "kunyit",
        "qty": 10,
        "unit": "g",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0013_8",
        "name": "jahe",
        "qty": 10,
        "unit": "g",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0013_9",
        "name": "air",
        "qty": 400,
        "unit": "ml",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0013_10",
        "name": "garam",
        "qty": 1,
        "unit": "secukupnya",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Haluskan bawang merah, bawang putih, kunyit, jahe."
      },
      {
        "text": "Tumis bumbu halus hingga harum."
      },
      {
        "text": "Masukkan tomat dan cabai rawit, aduk 1–2 menit."
      },
      {
        "text": "Masukkan ikan dan air. Masak hingga ikan matang."
      },
      {
        "text": "Masukkan daun bawang dan kemangi, koreksi garam, angkat."
      }
    ],
    "tips": [
      "Kemangi dimasukkan terakhir agar wangi segar tidak hilang."
    ],
    "isPremium": false,
    "nutrition": {
      "calories": 190,
      "protein": 24,
      "carbs": 6,
      "fat": 7
    }
  },
  {
    "id": "menusa_0014",
    "title": "Tinutuan (Bubur Manado)",
    "description": "Resep Tinutuan (Bubur Manado) khas Sulawesi Utara.",
    "region": "Sulawesi",
    "category": "Utama",
    "difficulty": "Mudah",
    "totalTimeMin": 60,
    "servingsDefault": 6,
    "tags": [
      "sayur",
      "bubur"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1476224203421-9ce39362ea08?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0014_0",
        "name": "beras (cuci)",
        "qty": 250,
        "unit": "g",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0014_1",
        "name": "air",
        "qty": 2000,
        "unit": "ml",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0014_2",
        "name": "labu kuning (potong kecil)",
        "qty": 300,
        "unit": "g",
        "category": "Sayur"
      },
      {
        "id": "ing_menusa_0014_3",
        "name": "jagung manis pipil",
        "qty": 150,
        "unit": "g",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0014_4",
        "name": "bayam",
        "qty": 1,
        "unit": "ikat",
        "category": "Protein"
      },
      {
        "id": "ing_menusa_0014_5",
        "name": "kangkung",
        "qty": 1,
        "unit": "ikat",
        "category": "Sayur"
      },
      {
        "id": "ing_menusa_0014_6",
        "name": "daun kemangi (opsional)",
        "qty": 1,
        "unit": "genggam",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0014_7",
        "name": "garam",
        "qty": 1,
        "unit": "sdt",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Masak beras dan air hingga menjadi bubur."
      },
      {
        "text": "Masukkan labu kuning dan jagung, masak sampai empuk dan bubur kental."
      },
      {
        "text": "Masukkan kangkung lalu bayam. Aduk sebentar."
      },
      {
        "text": "Tambahkan garam. Matikan api, masukkan kemangi bila pakai."
      },
      {
        "text": "Sajikan hangat."
      }
    ],
    "tips": [
      "Sayur dimasukkan terakhir agar warna dan tekstur tetap segar."
    ],
    "isPremium": false,
    "nutrition": {
      "calories": 210,
      "protein": 6,
      "carbs": 42,
      "fat": 2
    }
  },
  {
    "id": "menusa_0015",
    "title": "Binte Biluhuta (Milu Siram)",
    "description": "Resep Binte Biluhuta (Milu Siram) khas Gorontalo.",
    "region": "Sulawesi",
    "category": "Sup",
    "difficulty": "Mudah",
    "totalTimeMin": 30,
    "servingsDefault": 4,
    "tags": [
      "jagung",
      "segar",
      "pedas"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0015_0",
        "name": "jagung manis pipil",
        "qty": 400,
        "unit": "g",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0015_1",
        "name": "ikan cakalang suwir (opsional)",
        "qty": 150,
        "unit": "g",
        "category": "Protein"
      },
      {
        "id": "ing_menusa_0015_2",
        "name": "udang (opsional) (kupas)",
        "qty": 150,
        "unit": "g",
        "category": "Protein"
      },
      {
        "id": "ing_menusa_0015_3",
        "name": "air",
        "qty": 800,
        "unit": "ml",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0015_4",
        "name": "bawang merah (iris)",
        "qty": 6,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0015_5",
        "name": "cabai rawit (iris)",
        "qty": 8,
        "unit": "buah",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0015_6",
        "name": "daun kemangi",
        "qty": 1,
        "unit": "genggam",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0015_7",
        "name": "jeruk nipis (ambil airnya)",
        "qty": 1,
        "unit": "buah",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0015_8",
        "name": "garam",
        "qty": 1,
        "unit": "secukupnya",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Rebus jagung sampai empuk. Masukkan udang bila pakai sampai matang."
      },
      {
        "text": "Tambahkan bawang merah, cabai rawit, dan garam. Didihkan 2 menit."
      },
      {
        "text": "Matikan api, masukkan kemangi dan suwir ikan (bila pakai)."
      },
      {
        "text": "Siram/beri air jeruk nipis saat akan disajikan."
      }
    ],
    "tips": [
      "Jeruk nipis ditambahkan terakhir agar aromanya segar dan tidak pahit."
    ],
    "isPremium": false,
    "nutrition": {
      "calories": 230,
      "protein": 12,
      "carbs": 38,
      "fat": 4
    }
  },
  {
    "id": "menusa_0016",
    "title": "Papeda Kuah Kuning",
    "description": "Resep Papeda Kuah Kuning khas Papua.",
    "region": "Papua/Maluku",
    "category": "Utama",
    "difficulty": "Sedang",
    "totalTimeMin": 45,
    "servingsDefault": 4,
    "tags": [
      "sagu",
      "ikan",
      "berkuah"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1548943487-a2e4142f5f19?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0016_0",
        "name": "sagu (larutkan dengan air dingin)",
        "qty": 200,
        "unit": "g",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0016_1",
        "name": "air (600 ml untuk papeda, 600 ml untuk kuah)",
        "qty": 1200,
        "unit": "ml",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0016_2",
        "name": "ikan (kakap/ikan laut) (potong)",
        "qty": 500,
        "unit": "g",
        "category": "Protein"
      },
      {
        "id": "ing_menusa_0016_3",
        "name": "kunyit",
        "qty": 20,
        "unit": "g",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0016_4",
        "name": "bawang merah",
        "qty": 6,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0016_5",
        "name": "bawang putih",
        "qty": 3,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0016_6",
        "name": "serai (memarkan)",
        "qty": 1,
        "unit": "batang",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0016_7",
        "name": "daun jeruk",
        "qty": 4,
        "unit": "lembar",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0016_8",
        "name": "jeruk nipis",
        "qty": 1,
        "unit": "buah",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0016_9",
        "name": "garam",
        "qty": 1,
        "unit": "secukupnya",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Kuah: haluskan bawang merah, bawang putih, kunyit. Tumis hingga harum."
      },
      {
        "text": "Tambahkan air, serai, daun jeruk. Didihkan."
      },
      {
        "text": "Masukkan ikan, masak hingga matang. Tambahkan garam dan perasan jeruk nipis secukupnya."
      },
      {
        "text": "Papeda: didihkan 600 ml air. Tuang larutan sagu sedikit-sedikit sambil diaduk cepat sampai kental bening."
      },
      {
        "text": "Sajikan papeda dengan kuah kuning panas."
      }
    ],
    "tips": [
      "Aduk sagu konstan agar tidak menggumpal; hasil ideal bening dan elastis."
    ],
    "isPremium": false,
    "nutrition": {
      "calories": 360,
      "protein": 20,
      "carbs": 58,
      "fat": 6
    }
  },
  {
    "id": "menusa_0017",
    "title": "Rawon",
    "description": "Resep Rawon khas Jawa Timur.",
    "region": "Jawa",
    "category": "Sup",
    "difficulty": "Sedang",
    "totalTimeMin": 110,
    "servingsDefault": 6,
    "tags": [
      "berkuah",
      "kluwek"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1548943487-a2e4142f5f19?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0017_0",
        "name": "daging sapi (potong)",
        "qty": 700,
        "unit": "g",
        "category": "Protein"
      },
      {
        "id": "ing_menusa_0017_1",
        "name": "air",
        "qty": 2500,
        "unit": "ml",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0017_2",
        "name": "kluwek (ambil isi, rendam air hangat)",
        "qty": 5,
        "unit": "buah",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0017_3",
        "name": "bawang merah",
        "qty": 10,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0017_4",
        "name": "bawang putih",
        "qty": 5,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0017_5",
        "name": "ketumbar",
        "qty": 1,
        "unit": "sdt",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0017_6",
        "name": "kunyit",
        "qty": 10,
        "unit": "g",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0017_7",
        "name": "serai (memarkan)",
        "qty": 2,
        "unit": "batang",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0017_8",
        "name": "daun salam",
        "qty": 3,
        "unit": "lembar",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0017_9",
        "name": "garam",
        "qty": 1,
        "unit": "secukupnya",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Rebus daging sampai setengah empuk, angkat. Simpan kaldu."
      },
      {
        "text": "Haluskan bawang merah, bawang putih, ketumbar, kunyit, dan isi kluwek."
      },
      {
        "text": "Tumis bumbu halus hingga harum. Masukkan serai dan daun salam."
      },
      {
        "text": "Masukkan tumisan ke kaldu, masukkan daging. Masak hingga empuk."
      },
      {
        "text": "Koreksi garam. Sajikan."
      }
    ],
    "tips": [
      "Pastikan kluwek tidak pahit (cicip sedikit) sebelum dimasukkan."
    ],
    "isPremium": false,
    "nutrition": {
      "calories": 350,
      "protein": 28,
      "carbs": 12,
      "fat": 20
    }
  },
  {
    "id": "menusa_0018",
    "title": "Gudeg (Sederhana)",
    "description": "Resep Gudeg (Sederhana) khas DI Yogyakarta.",
    "region": "Jawa",
    "category": "Utama",
    "difficulty": "Sedang",
    "totalTimeMin": 200,
    "servingsDefault": 6,
    "tags": [
      "manis-gurih",
      "santan",
      "nangka"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1476224203421-9ce39362ea08?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0018_0",
        "name": "nangka muda (rebus 10 menit, tiriskan)",
        "qty": 1000,
        "unit": "g",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0018_1",
        "name": "santan",
        "qty": 1000,
        "unit": "ml",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0018_2",
        "name": "gula merah (serut)",
        "qty": 150,
        "unit": "g",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0018_3",
        "name": "bawang merah",
        "qty": 10,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0018_4",
        "name": "bawang putih",
        "qty": 5,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0018_5",
        "name": "kemiri (sangrai)",
        "qty": 4,
        "unit": "butir",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0018_6",
        "name": "daun salam",
        "qty": 4,
        "unit": "lembar",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0018_7",
        "name": "lengkuas (memarkan)",
        "qty": 30,
        "unit": "g",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0018_8",
        "name": "garam",
        "qty": 1,
        "unit": "sdt",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Haluskan bawang merah, bawang putih, kemiri."
      },
      {
        "text": "Masukkan nangka ke panci. Tambahkan bumbu halus, daun salam, lengkuas, gula merah."
      },
      {
        "text": "Tuang santan. Masak api kecil hingga mendidih pelan."
      },
      {
        "text": "Masak lama api kecil sampai nangka empuk dan kuah menyusut. Aduk sesekali."
      },
      {
        "text": "Tambahkan garam, koreksi manis-gurih, angkat."
      }
    ],
    "tips": [
      "Semakin lama dimasak api kecil, rasa semakin ‘nendang’ dan warna makin pekat."
    ],
    "isPremium": false,
    "nutrition": {
      "calories": 380,
      "protein": 10,
      "carbs": 45,
      "fat": 20
    }
  },
  {
    "id": "menusa_0019",
    "title": "Soto Betawi",
    "description": "Resep Soto Betawi khas DKI Jakarta.",
    "region": "Jawa",
    "category": "Sup",
    "difficulty": "Sedang",
    "totalTimeMin": 110,
    "servingsDefault": 6,
    "tags": [
      "soto",
      "creamy"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1548943487-a2e4142f5f19?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0019_0",
        "name": "daging sapi (potong)",
        "qty": 600,
        "unit": "g",
        "category": "Protein"
      },
      {
        "id": "ing_menusa_0019_1",
        "name": "air",
        "qty": 2000,
        "unit": "ml",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0019_2",
        "name": "santan atau susu evaporasi (pilih salah satu)",
        "qty": 600,
        "unit": "ml",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0019_3",
        "name": "bawang merah",
        "qty": 10,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0019_4",
        "name": "bawang putih",
        "qty": 5,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0019_5",
        "name": "kemiri (sangrai)",
        "qty": 4,
        "unit": "butir",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0019_6",
        "name": "jahe",
        "qty": 15,
        "unit": "g",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0019_7",
        "name": "pala bubuk",
        "qty": 0.25,
        "unit": "sdt",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0019_8",
        "name": "daun salam",
        "qty": 2,
        "unit": "lembar",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0019_9",
        "name": "serai (memarkan)",
        "qty": 1,
        "unit": "batang",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0019_10",
        "name": "garam",
        "qty": 1,
        "unit": "secukupnya",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Rebus daging sampai empuk. Angkat daging, potong kecil. Simpan kaldu."
      },
      {
        "text": "Haluskan bawang merah, bawang putih, kemiri, jahe. Tumis hingga harum."
      },
      {
        "text": "Masukkan tumisan ke kaldu. Tambahkan serai, daun salam, pala."
      },
      {
        "text": "Masukkan daging. Masak 10 menit."
      },
      {
        "text": "Tuang santan/susu evaporasi perlahan, aduk. Koreksi garam, jangan sampai mendidih keras."
      }
    ],
    "tips": [
      "Setelah santan/susu masuk, api kecil agar tidak pecah."
    ],
    "isPremium": false,
    "nutrition": {
      "calories": 500,
      "protein": 26,
      "carbs": 15,
      "fat": 38
    }
  },
  {
    "id": "menusa_0020",
    "title": "Karedok",
    "description": "Resep Karedok khas Jawa Barat.",
    "region": "Jawa",
    "category": "Sayur",
    "difficulty": "Mudah",
    "totalTimeMin": 20,
    "servingsDefault": 4,
    "tags": [
      "segar",
      "lalap",
      "kacang"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0020_0",
        "name": "kacang panjang (iris)",
        "qty": 150,
        "unit": "g",
        "category": "Sayur"
      },
      {
        "id": "ing_menusa_0020_1",
        "name": "kol (iris)",
        "qty": 150,
        "unit": "g",
        "category": "Sayur"
      },
      {
        "id": "ing_menusa_0020_2",
        "name": "tauge",
        "qty": 150,
        "unit": "g",
        "category": "Sayur"
      },
      {
        "id": "ing_menusa_0020_3",
        "name": "timun (iris)",
        "qty": 1,
        "unit": "buah",
        "category": "Sayur"
      },
      {
        "id": "ing_menusa_0020_4",
        "name": "terong bulat (opsional) (iris tipis)",
        "qty": 1,
        "unit": "buah",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0020_5",
        "name": "kacang tanah (goreng/sangrai, haluskan)",
        "qty": 120,
        "unit": "g",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0020_6",
        "name": "bawang putih",
        "qty": 2,
        "unit": "siung",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0020_7",
        "name": "cabai rawit (sesuai selera)",
        "qty": 6,
        "unit": "buah",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0020_8",
        "name": "kencur",
        "qty": 10,
        "unit": "g",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0020_9",
        "name": "gula merah",
        "qty": 1,
        "unit": "sdm",
        "category": "Bumbu"
      },
      {
        "id": "ing_menusa_0020_10",
        "name": "asam jawa (larutkan)",
        "qty": 1,
        "unit": "sdt",
        "category": "Lainnya"
      },
      {
        "id": "ing_menusa_0020_11",
        "name": "garam",
        "qty": 0.5,
        "unit": "sdt",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Siapkan sayuran mentah, cuci bersih dan tiriskan."
      },
      {
        "text": "Ulek bumbu: bawang putih, cabai, kencur, garam sampai halus."
      },
      {
        "text": "Masukkan kacang tanah halus, gula merah, dan larutan asam. Ulek sampai jadi bumbu kental."
      },
      {
        "text": "Campur sayuran dengan bumbu. Aduk rata, sajikan."
      }
    ],
    "tips": [
      "Bumbu diulek manual memberi aroma kencur lebih keluar dibanding blender."
    ],
    "isPremium": false,
    "nutrition": {
      "calories": 180,
      "protein": 8,
      "carbs": 20,
      "fat": 10
    }
  },
  {
    "id": "menusa_0021",
    "title": "Nasi Liwet Solo",
    "description": "Resep Nasi Liwet Solo khas Jawa Tengah.",
    "region": "Jawa",
    "category": "Utama",
    "difficulty": "Sedang",
    "totalTimeMin": 65,
    "servingsDefault": 4,
    "tags": [
      "santan",
      "nasi"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1555126634-ae231a4a8c2a?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0021_0",
        "name": "beras",
        "qty": 500,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Panaskan daun pisang di atas api kecil perlahan agar layu dan tidak mudah sobek saat membungkus nasi. Sisihkan daun yang sudah layu dan bersihkan permukaannya."
      },
      {
        "text": "Panaskan 3 sendok makan minyak goreng di wajan dengan api sedang. Tumis bumbu halus (bawang merah, bawang putih, cabai, kemiri) hingga harum dan matang. Aduk terus selama 4-5 menit agar bumbu tidak gosong dan mengeluarkan aroma wangi."
      },
      {
        "text": "Masukkan daun jeruk, serai memar, dan lengkuas ke dalam tumisan bumbu. Masak hingga dedaunan layu dan minyak mulai terpisah dari bumbu, menandakan bumbu sudah benar-benar matang."
      },
      {
        "text": "Masukkan suwiran ikan cakalang asap ke dalam wajan. Aduk rata hingga seluruh suwiran ikan terbalut bumbu. Tuangkan sedikit air agar bumbu meresap, masak hingga agak kering selama kurang lebih 5-7 menit."
      },
      {
        "text": "Siapkan selembar daun pisang, letakkan sekepal nasi putih matang di atasnya, ratakan perlahan. Letakkan tumisan cakalang di tengah nasi, pastikan isian tertutup rapi oleh nasi. Gulung dan sematkan lidi di kedua ujungnya."
      },
      {
        "text": "Panaskan pemanggang atau teflon datar dengan api sedang. Bakar bungkusan nasi selama 10-15 menit sambil sesekali dibalik hingga daun pisang terlihat kecokelatan kehitaman dan mengeluarkan aroma sedap terbakar. Sajikan selagi hangat."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0022",
    "title": "Sate Lilit Ayam",
    "description": "Resep Sate Lilit Ayam khas Bali.",
    "region": "Bali-Nusra",
    "category": "Lauk",
    "difficulty": "Sedang",
    "totalTimeMin": 50,
    "servingsDefault": 5,
    "tags": [
      "sate",
      "ayam"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0022_0",
        "name": "daging ayam giling",
        "qty": 400,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Bersihkan satu ekor ayam utuh dari kotoran dan jeroan, lalu lumuri dengan perasan air jeruk nipis dan garam secukupnya. Diamkan selama 15 menit agar bau amis hilang, kemudian bilas hingga bersih dan tiriskan."
      },
      {
        "text": "Haluskan bumbu base genep khas Bali yang terdiri dari bawang merah, bawang putih, cabai rawit, cabai merah, kunyit bakar, jahe, kencur, lengkuas, serai, terasi bakar, ketumbar, dan merica. Tambahkan 2 sendok makan minyak kelapa dan aduk rata."
      },
      {
        "text": "Balurkan seluruh bumbu halus ke permukaan luar dan dalam perut ayam secara merata. Pijat-pijat perlahan agar bumbu lebih meresap ke dalam pori-pori kulit ayam."
      },
      {
        "text": "Bungkus ayam yang sudah dibumbui menggunakan daun pisang atau daun pinang. Pastikan bungkusan rapat dan ikat kuat menggunakan tali serat pisang agar uap dan bumbu tidak keluar saat proses memasak."
      },
      {
        "text": "Kukus ayam yang telah dibungkus daun dalam kukusan yang sudah dipanaskan dengan api sedang selama 1,5 hingga 2 jam. Pastikan air kukusan cukup agar ayam matang sempurna dan bumbu meresap hingga ke tulang."
      },
      {
        "text": "Setelah dikukus, keluarkan ayam dan panggang di atas bara api sedang atau teflon selama 15-20 menit hingga daun pembungkus agak kering dan aroma panggang keluar. Buka daunnya perlahan dan sajikan Betutu dalam keadaan hangat."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0023",
    "title": "Ayam Penyet",
    "description": "Resep Ayam Penyet khas Jawa Timur.",
    "region": "Jawa",
    "category": "Lauk",
    "difficulty": "Mudah",
    "totalTimeMin": 45,
    "servingsDefault": 4,
    "tags": [
      "pedas",
      "ayam"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0023_0",
        "name": "ayam",
        "qty": 500,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Siapkan daging ikan tenggiri giling, ayam giling, atau daging babi giling laut segar. Cincang halus hingga teksturnya lembut dan mudah menempel saat dililit."
      },
      {
        "text": "Panaskan 2 sendok makan minyak kelapa dengan api sedang, lalu tumis bumbu halus (bawang merah, bawang putih, kunyit, jahe, kencur, cabai merah, dan terasi) selama 4-5 menit. Tumis hingga harum dan bumbu benar-benar matang agar sate tidak langu."
      },
      {
        "text": "Campurkan bumbu basah ke dalam daging giling, lalu tambahkan kelapa parut setengah tua, santan kental, garam, dan irisan tipis daun jeruk. Aduk menggunakan tangan perlahan hingga adonan kalis dan rempah tercampur sempurna."
      },
      {
        "text": "Ambil sejumput adonan daging (sekitar 30-40 gram), lalu kepalkan dan lilitkan dengan kokoh pada sebatang serai utuh atau tusuk sate pipih besar. Tekan pelan-pelan sambil diputar agar lilitan menempel sempurna dan tidak mudah lepas."
      },
      {
        "text": "Siapkan pemanggang arang atau teflon panas, olesi sedikit minyak. Panggang sate lilit dengan api sedang. Bolak-balik setiap 2-3 menit agar matang berlahan dan daging tidak gosong di satu sisi saja."
      },
      {
        "text": "Panggang hingga permukaan sate berubah warna kecokelatan, sedikit terkaramelisasi, dan serai mulai mengeluarkan aroma sitrus yang harum. Angkat sate perlahan, dan sajikan bersama sambal matah segar."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0024",
    "title": "Ikan Bakar Jimbaran",
    "description": "Resep Ikan Bakar Jimbaran khas Bali.",
    "region": "Bali-Nusra",
    "category": "Lauk",
    "difficulty": "Sedang",
    "totalTimeMin": 50,
    "servingsDefault": 4,
    "tags": [
      "bakar",
      "ikan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1615141982883-c7da0e698d28?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0024_0",
        "name": "ikan laut",
        "qty": 600,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Belah satu ekor ayam kampung muda pada bagian dada hingga terbuka lebar (bekakak), lalu tekan dan lebarkan. Lumuri ayam dengan perasan jeruk nipis dan garam, lalu diamkan 15 menit."
      },
      {
        "text": "Bakar ayam setengah matang di atas bara api sedang selama kurang lebih 10 menit. Bolak-balik hingga permukaan kulitnya kaku dan sedikit berubah warna, lalu angkat."
      },
      {
        "text": "Haluskan bahan bumbu: bawang merah, bawang putih, cabai merah besar, cabai rawit pedas, terasi Lombok bakar, kemiri sangrai, kencur, garam, dan gula merah. Panaskan 3 sendok makan minyak dan tumis bumbu halus tersebut hingga harum dan matang dengan api sedang-kecil (sekitar 5-7 menit)."
      },
      {
        "text": "Tuangkan sedikit air atau air perasan jeruk limau ke dalam tumisan bumbu, lalu masak kembali hingga mengental. Angkat bumbu dan biarkan hangat."
      },
      {
        "text": "Oleskan bumbu matang secara merata ke seluruh permukaan ayam yang sudah dibakar setengah matang, pastikan bagian dalam dan celah-celahnya terlumuri bumbu tebal."
      },
      {
        "text": "Bakar kembali ayam berbumbu di atas bara api kecil-sedang. Terus olesi sisa bumbu setiap kali membalik ayam. Masak sekitar 15-20 menit hingga bumbu meresap sempurna, keriting, dan kulitnya harum terpanggang. Sajikan bersama plecing kangkung."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0025",
    "title": "Soto Kudus",
    "description": "Resep Soto Kudus khas Jawa Tengah.",
    "region": "Jawa",
    "category": "Sup",
    "difficulty": "Sedang",
    "totalTimeMin": 80,
    "servingsDefault": 4,
    "tags": [
      "soto",
      "kuah"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1548943487-a2e4142f5f19?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0025_0",
        "name": "ayam kampung",
        "qty": 500,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Bersihkan potongan bebek dari kotoran dan bulu-bulu halus. Rebus bebek dalam air mendidih bersama beberapa lembar daun jeruk, jahe memar, dan lengkuas memar selama 15 menit untuk menghilangkan bau amis, lalu buang air rebusan pertama dan tiriskan bebek."
      },
      {
        "text": "Haluskan bumbu ungkep: bawang merah, bawang putih, ketumbar sangrai, kemiri, kunyit, jahe, lengkuas, serai, daun jeruk purut, garam, dan bubuk kaldu ayam. Pastikan bumbu dihaluskan dengan sempurna agar bisa meresap ke serat daging."
      },
      {
        "text": "Campurkan potongan bebek dengan bumbu halus di dalam wajan atau panci presto. Tuangkan air secukupnya hingga menutupi permukaan bebek. Masak dengan api sedang selama 1 jam hingga 1,5 jam (atau 30 menit jika menggunakan presto) hingga daging bebek benar-benar empuk dan air menyusut habis."
      },
      {
        "text": "Panaskan banyak minyak goreng di wajan besar dengan api sedang menjurus besar. Setelah minyak benar-benar panas, masukkan potongan bebek yang telah diungkep secara perlahan agar minyak tidak terpercik."
      },
      {
        "text": "Goreng bebek hingga permukaan luar terlihat garing, berwarna kecokelatan tua, namun tidak sampai gosong (berkisar 5-7 menit setiap sisinya). Angkat dan tiriskan di atas kertas tisu makanan agar sisa minyak terserap."
      },
      {
        "text": "Untuk membuat sambal pencit: ulek kasar cabai rawit, terasi bakar, dan sedikit garam. Kupas mangga muda (pencit), cincang atau serut kasar daging buahnya, lalu campur rata dengan ulekan cabai. Sajikan bebek goreng hangat beserta serundeng bumbu dan sambal pencit."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0026",
    "title": "Rujak Cingur",
    "description": "Resep Rujak Cingur khas Jawa Timur.",
    "region": "Jawa",
    "category": "Cemilan",
    "difficulty": "Mudah",
    "totalTimeMin": 30,
    "servingsDefault": 4,
    "tags": [
      "rujak",
      "khas"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1529973625058-a665431328fb?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0026_0",
        "name": "cingur sapi",
        "qty": 200,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Siapkan potongan iga sapi lokal, lalu cuci bersih di bawah air mengalir. Rebus iga dengan air mendidih selama 5-10 menit, setelah itu buang air rebusan kotor untuk menghilangkan darah yang membeku."
      },
      {
        "text": "Panaskan kembali 1,5 liter air hingga mendidih di dalam panci. Masukkan iga sapi, tambahkan serai memar, daun jeruk, jahe memar, dan lengkuas. Rebus iga dengan api kecil-sedang (simmer) sampai daging menempel pada tulang menjadi sangat empuk (bisa memakan waktu 1,5 hingga 2 jam)."
      },
      {
        "text": "Kupas buah kluwek, ambil isinya dan rendam dalam air panas selama 10 menit agar lunak. Haluskan bawang merah, bawang putih, cabai merah, ketumbar sangrai, merica, jintan, pala, dan isi kluwek tersebut hingga berbentuk pasta halus."
      },
      {
        "text": "Panaskan 3 sendok makan minyak dengan api sedang. Tumis bumbu halus di dalam wajan selama sekitar 5-8 menit hingga benar-benar harum, tidak langu, dan warna bumbunya menjadi gelap mengkilap. Matikan api dan angkat."
      },
      {
        "text": "Tuangkan bumbu tumis ke dalam panci berisi rebusan iga yang sudah empuk. Aduk rata agar kaldu menyatu dengan bumbu kluwek. Bumbui dengan garam, gula pasir, dan kaldu sapi bubuk sesuai selera. Masak kembali selama 20 menit dengan api kecil agar kuahnya kental dan meresap ke dalam daging iga."
      },
      {
        "text": "Koreksi rasa kuah agar gurih rempahnya terasa pas. Angkat dari kompor, lalu tuang Rawon ke dalam mangkuk saji. Beri taburan tauge pendek (kecambah rawon), irisan daun bawang, taburan bawang goreng, dan sajikan dengan telur asin serta sambal terasi matang."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0027",
    "title": "Mie Celor",
    "description": "Resep Mie Celor khas Sumatera Selatan.",
    "region": "Sumatera",
    "category": "Utama",
    "difficulty": "Sedang",
    "totalTimeMin": 50,
    "servingsDefault": 4,
    "tags": [
      "mie",
      "kuah"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0027_0",
        "name": "mie kuning",
        "qty": 400,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Cuci bersih daging sapi sandung lamur, lalu potong membentuk dadu dengan ketebalan 2 cm agar mudah empuk namun tetap memberikan tekstur. Rebus daging pertama kali dan buang air rebusan untuk membuang kotoran."
      },
      {
        "text": "Haluskan bumbu inti yang terdiri dari rempah-rempah: selasih (kencur), kunyit sangrai, sedikit jahe, terasi bakar, bawang merah, bawang putih, dan sedikit cabai. Pastikan campuran ini sangat halus sebelum proses penumisan."
      },
      {
        "text": "Siapkan wajan dengan minyak panas, tumis bumbu halus dengan api sedang hingga harum semerbak, perlahan masukkan daun salam dan serai memar. Aduk konsisten sampai campuran rempah ini berubah warna lebih gelap tanpa ada yang hangus."
      },
      {
        "text": "Masukkan perlahan potongan daging sapi ke dalam tumisan bumbu, aduk perlahan agar permukaan daging mulai berubah warna memutih, tandanya tertutup dan tidak akan mengeluarkan banyak kaldu prematur."
      },
      {
        "text": "Tuangkan sedikit demi sedikit kaldu sapi encer dan juga sentuhan santan encer. Rebus dengan api relatif kecil, tutup pancinya, dan masak perlahan selama kurang lebih satu jam hingga empuk."
      },
      {
        "text": "Masuki sentuhan terakhir berupa belimbing wuluh yang diiris bulat dan irisan tomat hijau. Masak 5 menit saja hingga belimbing layu lalu diangkat. Sajikan ke dalam piring."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0028",
    "title": "Ayam Geprek",
    "description": "Resep Ayam Geprek khas DI Yogyakarta.",
    "region": "Jawa",
    "category": "Lauk",
    "difficulty": "Mudah",
    "totalTimeMin": 40,
    "servingsDefault": 4,
    "tags": [
      "pedas",
      "ayam"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0028_0",
        "name": "ayam goreng tepung",
        "qty": 500,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Cuci dan bersihkan beras pera tahan lama, masak di pengukus atau periuk hingga menjadi nasi aron bertekstur kering, lalu diamkan."
      },
      {
        "text": "Ulek cabai, bawang merah, terasi bakar, kencur dan terasi sedikit hingga cukup halus. Tumis sebentar dan matangkan bumbu."
      },
      {
        "text": "Aduk nasi basah dengan bumbu yang sudah jadi, irisan ayam yang dipotong dadu atau suwiran tipis."
      },
      {
        "text": "Tuang juga satu butir telur ayam ras ke dalam penggorengan yang dicincang acak-acak sebagai bahan orak-arik sebelum nasi masuk."
      },
      {
        "text": "Goreng bersamaan bumbu pedas manis dan nasi putin merata sehingga berwarna kuning kecoklatan di seluruh permukaannya."
      },
      {
        "text": "Goreng hingga kering, jika sudah matang tercium bau terasi panggang dan kemiri angkat ke atas alas piring bersih lengkapi dengan krupuk putih."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0029",
    "title": "Sate Padang",
    "description": "Resep Sate Padang khas Sumatera Barat.",
    "region": "Sumatera",
    "category": "Lauk",
    "difficulty": "Sulit",
    "totalTimeMin": 75,
    "servingsDefault": 4,
    "tags": [
      "sate",
      "daging"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0029_0",
        "name": "daging sapi",
        "qty": 500,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Bersihkan nangka muda kualitas super, potong seukuran 5x5 cm. Rebus nangka dengan air mendidih sekitar 15 menit agar getahnya hilang, tiriskan dan sisihkan."
      },
      {
        "text": "Siapkan panci beralas tebal, letakkan beberapa lembar daun jati, sobekan daun salam, dan lengkuas memar di dasar panci sebagai penyumbang warna dan penahan panas agar tidak mudah gosong."
      },
      {
        "text": "Haluskan bawang merah, bawang putih, ketumbar sangrai, sedikit kemiri, dan lumuri dengan paduan gula merah sisir. Susun potongan nangka, ayam kampung, dan telur rebus utuh di atas dedaunan dasar secara rapat."
      },
      {
        "text": "Larutkan bumbu halus, gula aren sisir yang banyak, sedikit garam ke dalam santan encer. Tuangkan santan tersebut ke dalam panci hingga menutupi seluruh nangka."
      },
      {
        "text": "Tutup rapat panci dan masak gudeg menggunakan api paling kecil atau hangat-hangat kuku selama 3-4 jam tanpa diaduk-aduk. Biarkan daun jati mengeluarkan pigmen kemerahan yang akan diresap nangka dan perlahan menyusut menjadi tekstur empuk cokelat manis."
      },
      {
        "text": "Jika airnya hampir habis, taburkan secukupnya santan kental, ratakan pelan agar tidak pecah. Teruskan masak selama 1-2 jam lagi secara tertutup semalaman (diinapkan) supaya rasanya lebih otentik dan teksturnya legit kesat di lidah."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0030",
    "title": "Pecel Lele",
    "description": "Resep Pecel Lele khas Jawa Timur.",
    "region": "Jawa",
    "category": "Lauk",
    "difficulty": "Mudah",
    "totalTimeMin": 35,
    "servingsDefault": 4,
    "tags": [
      "goreng",
      "ikan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0030_0",
        "name": "ikan lele",
        "qty": 500,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Kupas ubi jalar atau talas (bisa singkong), lalu potong kubus besar dengan pisau besar agar bentuknya tetap bertahan ketika dikukus bersama."
      },
      {
        "text": "Kukus bongkahan ubi singkong yang dikuliti ini berdampingan dengan jagung pipil setengah tua hingga tiga perempat matang (kurang lebih 15 menit dalam kukusan)."
      },
      {
        "text": "Didihkan sepanci besar air segar lalu masukkan perlahan kukusan ubi dan juga beras, aduk jangan hingga kerak terbentuk pada dasar panci."
      },
      {
        "text": "Tumis bumbu halus bawang serta garam dalam tumisan secukupnya untuk memberi rasa. Masukkan irisan sayur kangkung utuh dan seledri secara perlahan."
      },
      {
        "text": "Masak seluruh campuran bersama-sama di dalam air hingga mengental menyerupai pasta cair namun berserat tinggi dengan warna yang dominan pucat hijau dan putih."
      },
      {
        "text": "Cicipi tekstur ubi, jika sudah empuk dan mengental layaknya bubur kaldu lezat matikan api dan hidangkan dengan ikan asin balado atau sambal roa sedap."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0031",
    "title": "Nasi Uduk",
    "description": "Resep Nasi Uduk khas DKI Jakarta.",
    "region": "Jawa",
    "category": "Utama",
    "difficulty": "Mudah",
    "totalTimeMin": 55,
    "servingsDefault": 4,
    "tags": [
      "nasi",
      "santan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1555126634-ae231a4a8c2a?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0031_0",
        "name": "beras",
        "qty": 500,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama beras dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Nasi Uduk."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti beras, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Nasi Uduk dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0032",
    "title": "Seblak",
    "description": "Resep Seblak khas Jawa Barat.",
    "region": "Jawa",
    "category": "Cemilan",
    "difficulty": "Mudah",
    "totalTimeMin": 30,
    "servingsDefault": 2,
    "tags": [
      "pedas",
      "kuah"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1529973625058-a665431328fb?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0032_0",
        "name": "kerupuk mentah",
        "qty": 150,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Mulai dengan mempersiapkan area kerja dan menimbang seluruh bahan dengan akurat, khususnya kerupuk mentah dan bahan tambahan. Ketelitian dalam takaran sangat krusial dalam pembuatan kudapan ini agar tekstur akhir yang dihasilkan bisa konsisten, baik itu kenyal, lembut, maupun renyah."
      },
      {
        "text": "Siapkan adonan dasar dengan mencampur bahan kering dan bahan basah secara bertahap. Gunakan teknik pengadukan yang lembut namun rata agar tidak terbentuk gumpalan (lumpy). Jika resep memerlukan proses fermentasi atau pendiaman, pastikan adonan disimpan di tempat yang hangat selama waktu yang ditentukan."
      },
      {
        "text": "Siapkan peralatan memasak utama seperti cetakan khusus, kukusan yang sudah beruap banyak, atau wajan penggorengan dengan minyak yang cukup. Untuk teknik goreng, pastikan minyak sudah mencapai suhu yang stabil agar kudapan tidak menyerap minyak berlebih saat dimasukkan."
      },
      {
        "text": "Ambil sebagian adonan atau bahan kerupuk mentah lalu bentuk atau masukkan ke dalam cetakan dengan hati-hati. Jika menggunakan isian seperti bahan tambahan, letakkan tepat di tengah agar saat matang nanti posisinya simetris dan bumbu atau pemanis tidak bocor keluar dari kulit adonan."
      },
      {
        "text": "Proses pematangan dilakukan dengan api sedang yang stabil. Jika dikukus, jangan terlalu sering membuka tutup kukusan agar uap panas tidak terbuang. Jika digoreng, balik kudapan hanya sekali saja saat satu sisi sudah terlihat kokoh dan berwarna kuning keemasan yang cantik."
      },
      {
        "text": "Setelah matang, angkat dan tiriskan kudapan di atas rak kawat atau kertas penyerap minyak selama beberapa menit agar suhunya stabil dan teksturnya lebih set. Sajikan Seblak di atas piring saji yang bersih. Kudapan ini sangat cocok dinikmati sebagai teman minum teh atau kopi di sore hari."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0033",
    "title": "Babi Guling",
    "description": "Resep Babi Guling khas Bali.",
    "region": "Bali-Nusra",
    "category": "Utama",
    "difficulty": "Sulit",
    "totalTimeMin": 300,
    "servingsDefault": 10,
    "tags": [
      "babi",
      "panggang"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1476224203421-9ce39362ea08?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0033_0",
        "name": "babi utuh",
        "qty": 5000,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama babi utuh dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Babi Guling."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti babi utuh, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Babi Guling dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0034",
    "title": "Selat Solo",
    "description": "Resep Selat Solo khas Jawa Tengah.",
    "region": "Jawa",
    "category": "Sup",
    "difficulty": "Sedang",
    "totalTimeMin": 90,
    "servingsDefault": 4,
    "tags": [
      "daging",
      "kuah manis"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0034_0",
        "name": "daging sapi",
        "qty": 400,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama daging sapi dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Selat Solo."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti daging sapi, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Selat Solo dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0035",
    "title": "Pindang Patin",
    "description": "Resep Pindang Patin khas Sumatera Selatan.",
    "region": "Sumatera",
    "category": "Sup",
    "difficulty": "Sedang",
    "totalTimeMin": 50,
    "servingsDefault": 4,
    "tags": [
      "ikan",
      "asam segar"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0035_0",
        "name": "ikan patin",
        "qty": 600,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama ikan patin dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Pindang Patin."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti ikan patin, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Pindang Patin dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0036",
    "title": "Ayam Goreng Kalasan",
    "description": "Resep Ayam Goreng Kalasan khas DI Yogyakarta.",
    "region": "Jawa",
    "category": "Lauk",
    "difficulty": "Sedang",
    "totalTimeMin": 60,
    "servingsDefault": 4,
    "tags": [
      "goreng",
      "manis gurih"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1606683403264-fa065fa1a221?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0036_0",
        "name": "ayam",
        "qty": 800,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama ayam dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Ayam Goreng Kalasan."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti ayam, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Ayam Goreng Kalasan dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0037",
    "title": "Ketoprak",
    "description": "Resep Ketoprak khas DKI Jakarta.",
    "region": "Jawa",
    "category": "Cemilan",
    "difficulty": "Mudah",
    "totalTimeMin": 20,
    "servingsDefault": 2,
    "tags": [
      "kacang",
      "sayur"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1529973625058-a665431328fb?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0037_0",
        "name": "tahu, bihun, tauge",
        "qty": 300,
        "unit": "g",
        "category": "Sayur"
      }
    ],
    "steps": [
      {
        "text": "Mulai dengan mempersiapkan area kerja dan menimbang seluruh bahan dengan akurat, khususnya tahu, bihun, tauge dan bahan tambahan. Ketelitian dalam takaran sangat krusial dalam pembuatan kudapan ini agar tekstur akhir yang dihasilkan bisa konsisten, baik itu kenyal, lembut, maupun renyah."
      },
      {
        "text": "Siapkan adonan dasar dengan mencampur bahan kering dan bahan basah secara bertahap. Gunakan teknik pengadukan yang lembut namun rata agar tidak terbentuk gumpalan (lumpy). Jika resep memerlukan proses fermentasi atau pendiaman, pastikan adonan disimpan di tempat yang hangat selama waktu yang ditentukan."
      },
      {
        "text": "Siapkan peralatan memasak utama seperti cetakan khusus, kukusan yang sudah beruap banyak, atau wajan penggorengan dengan minyak yang cukup. Untuk teknik goreng, pastikan minyak sudah mencapai suhu yang stabil agar kudapan tidak menyerap minyak berlebih saat dimasukkan."
      },
      {
        "text": "Ambil sebagian adonan atau bahan tahu, bihun, tauge lalu bentuk atau masukkan ke dalam cetakan dengan hati-hati. Jika menggunakan isian seperti bahan tambahan, letakkan tepat di tengah agar saat matang nanti posisinya simetris dan bumbu atau pemanis tidak bocor keluar dari kulit adonan."
      },
      {
        "text": "Proses pematangan dilakukan dengan api sedang yang stabil. Jika dikukus, jangan terlalu sering membuka tutup kukusan agar uap panas tidak terbuang. Jika digoreng, balik kudapan hanya sekali saja saat satu sisi sudah terlihat kokoh dan berwarna kuning keemasan yang cantik."
      },
      {
        "text": "Setelah matang, angkat dan tiriskan kudapan di atas rak kawat atau kertas penyerap minyak selama beberapa menit agar suhunya stabil dan teksturnya lebih set. Sajikan Ketoprak di atas piring saji yang bersih. Kudapan ini sangat cocok dinikmati sebagai teman minum teh atau kopi di sore hari."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0038",
    "title": "Tongseng Kambing",
    "description": "Resep Tongseng Kambing khas Jawa Tengah.",
    "region": "Jawa",
    "category": "Sup",
    "difficulty": "Sedang",
    "totalTimeMin": 65,
    "servingsDefault": 4,
    "tags": [
      "kambing",
      "kuah kental"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0038_0",
        "name": "daging kambing",
        "qty": 400,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama daging kambing dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Tongseng Kambing."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti daging kambing, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Tongseng Kambing dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0039",
    "title": "Sate Taichan",
    "description": "Resep Sate Taichan khas DKI Jakarta.",
    "region": "Jawa",
    "category": "Lauk",
    "difficulty": "Mudah",
    "totalTimeMin": 35,
    "servingsDefault": 4,
    "tags": [
      "sate",
      "pedas"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0039_0",
        "name": "dada ayam",
        "qty": 400,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama dada ayam dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Sate Taichan."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti dada ayam, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Sate Taichan dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0040",
    "title": "Soto Mie Bogor",
    "description": "Resep Soto Mie Bogor khas Jawa Barat.",
    "region": "Jawa",
    "category": "Sup",
    "difficulty": "Sedang",
    "totalTimeMin": 120,
    "servingsDefault": 4,
    "tags": [
      "soto",
      "kuah bening"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0040_0",
        "name": "daging sapi & mie kuning",
        "qty": 500,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama daging sapi & mie kuning dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Soto Mie Bogor."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti daging sapi & mie kuning, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Soto Mie Bogor dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0041",
    "title": "Empal Gentong",
    "description": "Resep Empal Gentong khas Jawa Barat.",
    "region": "Jawa",
    "category": "Sup",
    "difficulty": "Sedang",
    "totalTimeMin": 120,
    "servingsDefault": 4,
    "tags": [
      "santan",
      "berkuah"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0041_0",
        "name": "daging sapi",
        "qty": 400,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama daging sapi dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Empal Gentong."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti daging sapi, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Empal Gentong dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0042",
    "title": "Nasi Kuning",
    "description": "Resep Nasi Kuning khas Nasional.",
    "region": "Nasional",
    "category": "Utama",
    "difficulty": "Mudah",
    "totalTimeMin": 65,
    "servingsDefault": 6,
    "tags": [
      "nasi",
      "gurih"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1555126634-ae231a4a8c2a?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0042_0",
        "name": "beras",
        "qty": 600,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama beras dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Nasi Kuning."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti beras, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Nasi Kuning dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0043",
    "title": "Iga Penyet",
    "description": "Resep Iga Penyet khas Jawa Timur.",
    "region": "Jawa",
    "category": "Lauk",
    "difficulty": "Sedang",
    "totalTimeMin": 120,
    "servingsDefault": 4,
    "tags": [
      "daging",
      "pedas"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0043_0",
        "name": "iga sapi",
        "qty": 500,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama iga sapi dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Iga Penyet."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti iga sapi, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Iga Penyet dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0044",
    "title": "Sayur Lodeh",
    "description": "Resep Sayur Lodeh khas Jawa.",
    "region": "Jawa",
    "category": "Sayur",
    "difficulty": "Mudah",
    "totalTimeMin": 50,
    "servingsDefault": 5,
    "tags": [
      "sayur",
      "santan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0044_0",
        "name": "sayuran campur",
        "qty": 400,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama sayuran campur dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Sayur Lodeh."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti sayuran campur, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Sayur Lodeh dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0045",
    "title": "Opor Ayam",
    "description": "Resep Opor Ayam khas Jawa.",
    "region": "Jawa",
    "category": "Lauk",
    "difficulty": "Sedang",
    "totalTimeMin": 65,
    "servingsDefault": 6,
    "tags": [
      "ayam",
      "santan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0045_0",
        "name": "ayam",
        "qty": 800,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama ayam dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Opor Ayam."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti ayam, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Opor Ayam dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0046",
    "title": "Sate Buntel",
    "description": "Resep Sate Buntel khas Jawa Tengah.",
    "region": "Jawa",
    "category": "Lauk",
    "difficulty": "Sedang",
    "totalTimeMin": 60,
    "servingsDefault": 4,
    "tags": [
      "sate",
      "kambing"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0046_0",
        "name": "daging kambing cincang",
        "qty": 400,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama daging kambing cincang dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Sate Buntel."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti daging kambing cincang, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Sate Buntel dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0047",
    "title": "Tengkleng",
    "description": "Resep Tengkleng khas Jawa Tengah.",
    "region": "Jawa",
    "category": "Sup",
    "difficulty": "Sulit",
    "totalTimeMin": 120,
    "servingsDefault": 4,
    "tags": [
      "kambing",
      "kuah pedas"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0047_0",
        "name": "tulang kambing",
        "qty": 500,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama tulang kambing dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Tengkleng."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti tulang kambing, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Tengkleng dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0048",
    "title": "Asinan Betawi",
    "description": "Resep Asinan Betawi khas DKI Jakarta.",
    "region": "Jawa",
    "category": "Sayur",
    "difficulty": "Mudah",
    "totalTimeMin": 30,
    "servingsDefault": 4,
    "tags": [
      "sayur",
      "segar"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0048_0",
        "name": "sayuran segar",
        "qty": 400,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama sayuran segar dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Asinan Betawi."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti sayuran segar, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Asinan Betawi dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0049",
    "title": "Kerak Telor",
    "description": "Resep Kerak Telor khas DKI Jakarta.",
    "region": "Jawa",
    "category": "Cemilan",
    "difficulty": "Sedang",
    "totalTimeMin": 35,
    "servingsDefault": 2,
    "tags": [
      "telur",
      "panggang"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1529973625058-a665431328fb?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0049_0",
        "name": "beras ketan & telur bebek",
        "qty": 200,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Mulai dengan mempersiapkan area kerja dan menimbang seluruh bahan dengan akurat, khususnya beras ketan & telur bebek dan bahan tambahan. Ketelitian dalam takaran sangat krusial dalam pembuatan kudapan ini agar tekstur akhir yang dihasilkan bisa konsisten, baik itu kenyal, lembut, maupun renyah."
      },
      {
        "text": "Siapkan adonan dasar dengan mencampur bahan kering dan bahan basah secara bertahap. Gunakan teknik pengadukan yang lembut namun rata agar tidak terbentuk gumpalan (lumpy). Jika resep memerlukan proses fermentasi atau pendiaman, pastikan adonan disimpan di tempat yang hangat selama waktu yang ditentukan."
      },
      {
        "text": "Siapkan peralatan memasak utama seperti cetakan khusus, kukusan yang sudah beruap banyak, atau wajan penggorengan dengan minyak yang cukup. Untuk teknik goreng, pastikan minyak sudah mencapai suhu yang stabil agar kudapan tidak menyerap minyak berlebih saat dimasukkan."
      },
      {
        "text": "Ambil sebagian adonan atau bahan beras ketan & telur bebek lalu bentuk atau masukkan ke dalam cetakan dengan hati-hati. Jika menggunakan isian seperti bahan tambahan, letakkan tepat di tengah agar saat matang nanti posisinya simetris dan bumbu atau pemanis tidak bocor keluar dari kulit adonan."
      },
      {
        "text": "Proses pematangan dilakukan dengan api sedang yang stabil. Jika dikukus, jangan terlalu sering membuka tutup kukusan agar uap panas tidak terbuang. Jika digoreng, balik kudapan hanya sekali saja saat satu sisi sudah terlihat kokoh dan berwarna kuning keemasan yang cantik."
      },
      {
        "text": "Setelah matang, angkat dan tiriskan kudapan di atas rak kawat atau kertas penyerap minyak selama beberapa menit agar suhunya stabil dan teksturnya lebih set. Sajikan Kerak Telor di atas piring saji yang bersih. Kudapan ini sangat cocok dinikmati sebagai teman minum teh atau kopi di sore hari."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0050",
    "title": "Gohu Ikan",
    "description": "Resep Gohu Ikan khas Maluku.",
    "region": "Papua/Maluku",
    "category": "Lauk",
    "difficulty": "Mudah",
    "totalTimeMin": 15,
    "servingsDefault": 3,
    "tags": [
      "ikan mentah",
      "segar"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1615141982883-c7da0e698d28?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0050_0",
        "name": "ikan tuna segar",
        "qty": 300,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama ikan tuna segar dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Gohu Ikan."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti ikan tuna segar, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Gohu Ikan dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0051",
    "title": "Gepuk Daging Sapi",
    "description": "Resep Gepuk Daging Sapi khas Jawa Barat.",
    "region": "Jawa",
    "category": "Lauk",
    "difficulty": "Sedang",
    "totalTimeMin": 110,
    "servingsDefault": 4,
    "tags": [
      "daging",
      "manis gurih"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0051_0",
        "name": "daging sapi",
        "qty": 500,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama daging sapi dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Gepuk Daging Sapi."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti daging sapi, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Gepuk Daging Sapi dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0052",
    "title": "Soto Banjar",
    "description": "Resep Soto Banjar khas Kalimantan Selatan.",
    "region": "Kalimantan",
    "category": "Sup",
    "difficulty": "Sedang",
    "totalTimeMin": 90,
    "servingsDefault": 5,
    "tags": [
      "soto",
      "rempah"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1548943487-a2e4142f5f19?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0052_0",
        "name": "ayam kampung",
        "qty": 600,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama ayam kampung dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Soto Banjar."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti ayam kampung, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Soto Banjar dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0053",
    "title": "Ayam Tangkap",
    "description": "Resep Ayam Tangkap khas Aceh.",
    "region": "Sumatera",
    "category": "Lauk",
    "difficulty": "Mudah",
    "totalTimeMin": 45,
    "servingsDefault": 4,
    "tags": [
      "goreng",
      "rempah daun"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0053_0",
        "name": "ayam",
        "qty": 500,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama ayam dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Ayam Tangkap."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti ayam, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Ayam Tangkap dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0054",
    "title": "Cakalang Fufu",
    "description": "Resep Cakalang Fufu khas Sulawesi Utara.",
    "region": "Sulawesi",
    "category": "Lauk",
    "difficulty": "Mudah",
    "totalTimeMin": 30,
    "servingsDefault": 4,
    "tags": [
      "ikan asap",
      "pedas"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0054_0",
        "name": "ikan cakalang asap",
        "qty": 300,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama ikan cakalang asap dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Cakalang Fufu."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti ikan cakalang asap, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Cakalang Fufu dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0055",
    "title": "Ayam Woku",
    "description": "Resep Ayam Woku khas Sulawesi Utara.",
    "region": "Sulawesi",
    "category": "Lauk",
    "difficulty": "Sedang",
    "totalTimeMin": 60,
    "servingsDefault": 5,
    "tags": [
      "pedas",
      "kemangi"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0055_0",
        "name": "ayam",
        "qty": 600,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama ayam dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Ayam Woku."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti ayam, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Ayam Woku dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0056",
    "title": "Soto Lamongan",
    "description": "Resep Soto Lamongan khas Jawa Timur.",
    "region": "Jawa",
    "category": "Sup",
    "difficulty": "Sedang",
    "totalTimeMin": 90,
    "servingsDefault": 5,
    "tags": [
      "soto",
      "bubuk koya"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1548943487-a2e4142f5f19?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0056_0",
        "name": "ayam",
        "qty": 500,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama ayam dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Soto Lamongan."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti ayam, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Soto Lamongan dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0057",
    "title": "Gadon Daging",
    "description": "Resep Gadon Daging khas Jawa Tengah.",
    "region": "Jawa",
    "category": "Lauk",
    "difficulty": "Mudah",
    "totalTimeMin": 50,
    "servingsDefault": 4,
    "tags": [
      "kukus",
      "santan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0057_0",
        "name": "daging sapi cincang",
        "qty": 300,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama daging sapi cincang dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Gadon Daging."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti daging sapi cincang, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Gadon Daging dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0058",
    "title": "Sambal Goreng Krecek",
    "description": "Resep Sambal Goreng Krecek khas DI Yogyakarta.",
    "region": "Jawa",
    "category": "Sayur",
    "difficulty": "Sedang",
    "totalTimeMin": 45,
    "servingsDefault": 4,
    "tags": [
      "santan",
      "pedas"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0058_0",
        "name": "kerupuk rambak/krecek",
        "qty": 150,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama kerupuk rambak/krecek dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Sambal Goreng Krecek."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti kerupuk rambak/krecek, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Sambal Goreng Krecek dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0059",
    "title": "Sate Ambal",
    "description": "Resep Sate Ambal khas Jawa Tengah.",
    "region": "Jawa",
    "category": "Lauk",
    "difficulty": "Sedang",
    "totalTimeMin": 50,
    "servingsDefault": 4,
    "tags": [
      "sate",
      "saus tempe"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0059_0",
        "name": "ayam",
        "qty": 400,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama ayam dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Sate Ambal."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti ayam, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Sate Ambal dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0060",
    "title": "Nasi Campur Bali",
    "description": "Resep Nasi Campur Bali khas Bali.",
    "region": "Bali-Nusra",
    "category": "Utama",
    "difficulty": "Sulit",
    "totalTimeMin": 120,
    "servingsDefault": 4,
    "tags": [
      "nasi",
      "lengkap"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1555126634-ae231a4a8c2a?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0060_0",
        "name": "beras dan aneka lauk bali",
        "qty": 500,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama beras dan aneka lauk bali dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Nasi Campur Bali."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti beras dan aneka lauk bali, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Nasi Campur Bali dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0061",
    "title": "Lontong Sayur Medan",
    "description": "Resep Lontong Sayur Medan khas Sumatera Utara.",
    "region": "Sumatera",
    "category": "Utama",
    "difficulty": "Sedang",
    "totalTimeMin": 100,
    "servingsDefault": 6,
    "tags": [
      "santan",
      "lontong"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0061_0",
        "name": "lontong, nangka muda, pakis",
        "qty": 500,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama lontong, nangka muda, pakis dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Lontong Sayur Medan."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti lontong, nangka muda, pakis, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Lontong Sayur Medan dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0062",
    "title": "Gulai Daun Singkong",
    "description": "Resep Gulai Daun Singkong khas Sumatera Barat.",
    "region": "Sumatera",
    "category": "Sayur",
    "difficulty": "Mudah",
    "totalTimeMin": 50,
    "servingsDefault": 5,
    "tags": [
      "sayur",
      "gulai"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0062_0",
        "name": "daun singkong muda",
        "qty": 300,
        "unit": "g",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama daun singkong muda dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Gulai Daun Singkong."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti daun singkong muda, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Gulai Daun Singkong dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0063",
    "title": "Nasi Grombyang",
    "description": "Resep Nasi Grombyang khas Jawa Tengah.",
    "region": "Jawa",
    "category": "Utama",
    "difficulty": "Sedang",
    "totalTimeMin": 120,
    "servingsDefault": 4,
    "tags": [
      "nasi",
      "kuah daging"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1555126634-ae231a4a8c2a?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0063_0",
        "name": "daging kerbau/sapi",
        "qty": 400,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama daging kerbau/sapi dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Nasi Grombyang."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti daging kerbau/sapi, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Nasi Grombyang dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0064",
    "title": "Sate Maranggi",
    "description": "Resep Sate Maranggi khas Jawa Barat.",
    "region": "Jawa",
    "category": "Lauk",
    "difficulty": "Sedang",
    "totalTimeMin": 60,
    "servingsDefault": 4,
    "tags": [
      "sate",
      "manis"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0064_0",
        "name": "daging sapi",
        "qty": 400,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama daging sapi dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Sate Maranggi."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti daging sapi, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Sate Maranggi dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0065",
    "title": "Lontong Balap",
    "description": "Resep Lontong Balap khas Jawa Timur.",
    "region": "Jawa",
    "category": "Utama",
    "difficulty": "Sedang",
    "totalTimeMin": 70,
    "servingsDefault": 4,
    "tags": [
      "lontong",
      "segar"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0065_0",
        "name": "tauge, tahu, lontong, lentho",
        "qty": 500,
        "unit": "g",
        "category": "Sayur"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama tauge, tahu, lontong, lentho dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Lontong Balap."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti tauge, tahu, lontong, lentho, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Lontong Balap dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0066",
    "title": "Ayam Iloni",
    "description": "Resep Ayam Iloni khas Gorontalo.",
    "region": "Sulawesi",
    "category": "Lauk",
    "difficulty": "Sedang",
    "totalTimeMin": 65,
    "servingsDefault": 4,
    "tags": [
      "ayam",
      "santan bakar"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0066_0",
        "name": "ayam",
        "qty": 600,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama ayam dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Ayam Iloni."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti ayam, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Ayam Iloni dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0067",
    "title": "Kupat Tahu",
    "description": "Resep Kupat Tahu khas Jawa Tengah.",
    "region": "Jawa",
    "category": "Utama",
    "difficulty": "Mudah",
    "totalTimeMin": 30,
    "servingsDefault": 3,
    "tags": [
      "ketupat",
      "tahu"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1627308595229-7830ceeb6386?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0067_0",
        "name": "ketupat, tahu goreng, tauge",
        "qty": 300,
        "unit": "g",
        "category": "Sayur"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama ketupat, tahu goreng, tauge dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Kupat Tahu."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti ketupat, tahu goreng, tauge, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Kupat Tahu dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0068",
    "title": "Sup Konro",
    "description": "Resep Sup Konro khas Sulawesi Selatan.",
    "region": "Sulawesi",
    "category": "Sup",
    "difficulty": "Sulit",
    "totalTimeMin": 140,
    "servingsDefault": 4,
    "tags": [
      "berkuah",
      "iga"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1548943487-a2e4142f5f19?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0068_0",
        "name": "iga sapi utuh",
        "qty": 800,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama iga sapi utuh dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Sup Konro."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti iga sapi utuh, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Sup Konro dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0069",
    "title": "Nasi Jagung",
    "description": "Resep Nasi Jagung khas Jawa Timur.",
    "region": "Jawa",
    "category": "Utama",
    "difficulty": "Mudah",
    "totalTimeMin": 60,
    "servingsDefault": 4,
    "tags": [
      "nasi",
      "jagung kering"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1555126634-ae231a4a8c2a?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0069_0",
        "name": "beras dan beras jagung",
        "qty": 400,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama beras dan beras jagung dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Nasi Jagung."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti beras dan beras jagung, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Nasi Jagung dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0070",
    "title": "Plecing Kangkung",
    "description": "Resep Plecing Kangkung khas Nusa Tenggara Barat.",
    "region": "Bali-Nusra",
    "category": "Sayur",
    "difficulty": "Mudah",
    "totalTimeMin": 25,
    "servingsDefault": 4,
    "tags": [
      "sayur",
      "pedas segar"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0070_0",
        "name": "kangkung segar",
        "qty": 200,
        "unit": "g",
        "category": "Sayur"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama kangkung segar dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Plecing Kangkung."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti kangkung segar, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Plecing Kangkung dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0071",
    "title": "Nasi Krawu",
    "description": "Resep Nasi Krawu khas Jawa Timur.",
    "region": "Jawa",
    "category": "Utama",
    "difficulty": "Sedang",
    "totalTimeMin": 60,
    "servingsDefault": 4,
    "tags": [
      "nasi",
      "daging kelapa"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1555126634-ae231a4a8c2a?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0071_0",
        "name": "daging sapi",
        "qty": 500,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama daging sapi dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Nasi Krawu."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti daging sapi, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Nasi Krawu dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0072",
    "title": "Rujak Soto",
    "description": "Resep Rujak Soto khas Jawa Timur.",
    "region": "Jawa",
    "category": "Utama",
    "difficulty": "Sulit",
    "totalTimeMin": 90,
    "servingsDefault": 4,
    "tags": [
      "rujak",
      "soto"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1548943487-a2e4142f5f19?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0072_0",
        "name": "potongan babat dan tulang sapi",
        "qty": 400,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama potongan babat dan tulang sapi dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Rujak Soto."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti potongan babat dan tulang sapi, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Rujak Soto dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0073",
    "title": "Ayam Panggang Klaten",
    "description": "Resep Ayam Panggang Klaten khas Jawa Tengah.",
    "region": "Jawa",
    "category": "Lauk",
    "difficulty": "Sedang",
    "totalTimeMin": 80,
    "servingsDefault": 4,
    "tags": [
      "ayam",
      "panggang santan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0073_0",
        "name": "ayam",
        "qty": 600,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama ayam dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Ayam Panggang Klaten."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti ayam, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Ayam Panggang Klaten dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0074",
    "title": "Lapis Daging Sapi",
    "description": "Resep Lapis Daging Sapi khas Jawa Timur.",
    "region": "Jawa",
    "category": "Lauk",
    "difficulty": "Sedang",
    "totalTimeMin": 80,
    "servingsDefault": 4,
    "tags": [
      "daging",
      "lapis kecap"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0074_0",
        "name": "daging sapi",
        "qty": 500,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama daging sapi dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Lapis Daging Sapi."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti daging sapi, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Lapis Daging Sapi dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0075",
    "title": "Garang Asem Ayam",
    "description": "Resep Garang Asem Ayam khas Jawa Tengah.",
    "region": "Jawa",
    "category": "Lauk",
    "difficulty": "Sedang",
    "totalTimeMin": 65,
    "servingsDefault": 5,
    "tags": [
      "ayam",
      "asam segar"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0075_0",
        "name": "ayam",
        "qty": 500,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama ayam dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Garang Asem Ayam."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti ayam, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Garang Asem Ayam dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0076",
    "title": "Ikan Pe Asap Kuah Santan",
    "description": "Resep Ikan Pe Asap Kuah Santan khas Jawa Timur.",
    "region": "Jawa",
    "category": "Sup",
    "difficulty": "Mudah",
    "totalTimeMin": 45,
    "servingsDefault": 4,
    "tags": [
      "ikan asap",
      "santan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1548943487-a2e4142f5f19?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0076_0",
        "name": "ikan pari/pe asap",
        "qty": 400,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama ikan pari/pe asap dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Ikan Pe Asap Kuah Santan."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti ikan pari/pe asap, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Ikan Pe Asap Kuah Santan dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0077",
    "title": "Tahu Tek",
    "description": "Resep Tahu Tek khas Jawa Timur.",
    "region": "Jawa",
    "category": "Utama",
    "difficulty": "Mudah",
    "totalTimeMin": 35,
    "servingsDefault": 3,
    "tags": [
      "tahu goreng",
      "petis"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1627308595229-7830ceeb6386?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0077_0",
        "name": "tahu, telur, lontong",
        "qty": 400,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama tahu, telur, lontong dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Tahu Tek."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti tahu, telur, lontong, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Tahu Tek dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0078",
    "title": "Ayam Bumbu Rujak",
    "description": "Resep Ayam Bumbu Rujak khas Jawa Timur.",
    "region": "Jawa",
    "category": "Lauk",
    "difficulty": "Sedang",
    "totalTimeMin": 60,
    "servingsDefault": 4,
    "tags": [
      "ayam",
      "bumbu rujak"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0078_0",
        "name": "ayam",
        "qty": 500,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama ayam dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Ayam Bumbu Rujak."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti ayam, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Ayam Bumbu Rujak dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0079",
    "title": "Kare Rajungan",
    "description": "Resep Kare Rajungan khas Jawa Timur.",
    "region": "Jawa",
    "category": "Sup",
    "difficulty": "Sedang",
    "totalTimeMin": 50,
    "servingsDefault": 4,
    "tags": [
      "kepiting",
      "kare"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0079_0",
        "name": "kepiting rajungan",
        "qty": 600,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama kepiting rajungan dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Kare Rajungan."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti kepiting rajungan, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Kare Rajungan dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0080",
    "title": "Nasi Bejeg",
    "description": "Resep Nasi Bejeg khas Bali.",
    "region": "Bali-Nusra",
    "category": "Utama",
    "difficulty": "Sedang",
    "totalTimeMin": 60,
    "servingsDefault": 4,
    "tags": [
      "nasi",
      "ayam suwir"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1555126634-ae231a4a8c2a?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0080_0",
        "name": "ayam suwir, nasi pucat",
        "qty": 500,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama ayam suwir, nasi pucat dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Nasi Bejeg."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti ayam suwir, nasi pucat, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Nasi Bejeg dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0081",
    "title": "Mie Kocok",
    "description": "Resep Mie Kocok khas Jawa Barat.",
    "region": "Jawa",
    "category": "Sup",
    "difficulty": "Sedang",
    "totalTimeMin": 110,
    "servingsDefault": 4,
    "tags": [
      "mie",
      "kikil sapi"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0081_0",
        "name": "mie kuning lurus, kikil",
        "qty": 500,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama mie kuning lurus, kikil dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Mie Kocok."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti mie kuning lurus, kikil, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Mie Kocok dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0082",
    "title": "Sate Buntel Sapi",
    "description": "Resep Sate Buntel Sapi khas Jawa Tengah.",
    "region": "Jawa",
    "category": "Lauk",
    "difficulty": "Sedang",
    "totalTimeMin": 50,
    "servingsDefault": 4,
    "tags": [
      "sate",
      "sapi cincang"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0082_0",
        "name": "daging sapi cincang berlapis lemak",
        "qty": 400,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama daging sapi cincang berlapis lemak dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Sate Buntel Sapi."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti daging sapi cincang berlapis lemak, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Sate Buntel Sapi dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0083",
    "title": "Soto Kesawan",
    "description": "Resep Soto Kesawan khas Sumatera Utara.",
    "region": "Sumatera",
    "category": "Sup",
    "difficulty": "Sedang",
    "totalTimeMin": 80,
    "servingsDefault": 4,
    "tags": [
      "soto berkuah",
      "udang"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0083_0",
        "name": "udang, bihun",
        "qty": 400,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama udang, bihun dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Soto Kesawan."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti udang, bihun, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Soto Kesawan dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0084",
    "title": "Nasi Tiwul",
    "description": "Resep Nasi Tiwul khas Jawa.",
    "region": "Jawa",
    "category": "Utama",
    "difficulty": "Mudah",
    "totalTimeMin": 45,
    "servingsDefault": 5,
    "tags": [
      "nasi tradisional",
      "singkong"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1555126634-ae231a4a8c2a?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0084_0",
        "name": "tepung gaplek singkong",
        "qty": 400,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama tepung gaplek singkong dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Nasi Tiwul."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti tepung gaplek singkong, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Nasi Tiwul dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0085",
    "title": "Doclang",
    "description": "Resep Doclang khas Jawa Barat.",
    "region": "Jawa",
    "category": "Utama",
    "difficulty": "Mudah",
    "totalTimeMin": 30,
    "servingsDefault": 3,
    "tags": [
      "bumbu kacang",
      "jajanan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0085_0",
        "name": "ketupat, tahu, kentang",
        "qty": 400,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama ketupat, tahu, kentang dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Doclang."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti ketupat, tahu, kentang, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Doclang dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0086",
    "title": "Burgo",
    "description": "Resep Burgo khas Sumatera Selatan.",
    "region": "Sumatera",
    "category": "Utama",
    "difficulty": "Sedang",
    "totalTimeMin": 50,
    "servingsDefault": 4,
    "tags": [
      "dadar tepung",
      "santan gurih"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1476224203421-9ce39362ea08?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0086_0",
        "name": "tepung beras dadar gulung",
        "qty": 400,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama tepung beras dadar gulung dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Burgo."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti tepung beras dadar gulung, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Burgo dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0087",
    "title": "Pacri Nanas",
    "description": "Resep Pacri Nanas khas Sumatera, Kalimantan.",
    "region": "Sumatera",
    "category": "Sayur",
    "difficulty": "Mudah",
    "totalTimeMin": 30,
    "servingsDefault": 3,
    "tags": [
      "buah",
      "asam manis pendamping"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0087_0",
        "name": "buah nanas matang",
        "qty": 400,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama buah nanas matang dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Pacri Nanas."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti buah nanas matang, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Pacri Nanas dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0088",
    "title": "Semur Jengkol",
    "description": "Resep Semur Jengkol khas DKI Jakarta.",
    "region": "Jawa",
    "category": "Lauk",
    "difficulty": "Sedang",
    "totalTimeMin": 105,
    "servingsDefault": 4,
    "tags": [
      "jengkol",
      "kecap manis"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0088_0",
        "name": "jengkol tua yang diempukkan",
        "qty": 400,
        "unit": "g",
        "category": "Sayur"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama jengkol tua yang diempukkan dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Semur Jengkol."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti jengkol tua yang diempukkan, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Semur Jengkol dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0089",
    "title": "Pindang Tulang",
    "description": "Resep Pindang Tulang khas Sumatera Selatan.",
    "region": "Sumatera",
    "category": "Sup",
    "difficulty": "Sedang",
    "totalTimeMin": 110,
    "servingsDefault": 5,
    "tags": [
      "iga tulang",
      "segar nanas"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1476224203421-9ce39362ea08?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0089_0",
        "name": "tulang rusuk sapi",
        "qty": 700,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama tulang rusuk sapi dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Pindang Tulang."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti tulang rusuk sapi, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Pindang Tulang dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0090",
    "title": "Ayam Pop",
    "description": "Resep Ayam Pop khas Sumatera Barat.",
    "region": "Sumatera",
    "category": "Lauk",
    "difficulty": "Sedang",
    "totalTimeMin": 45,
    "servingsDefault": 4,
    "tags": [
      "ayam pucat",
      "minang kelapa"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0090_0",
        "name": "Ayam kampung tanpa kulit",
        "qty": 500,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama Ayam kampung tanpa kulit dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Ayam Pop."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti Ayam kampung tanpa kulit, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Ayam Pop dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0091",
    "title": "Kue Pukis",
    "description": "Resep Kue Pukis khas Jawa Tengah.",
    "region": "Jawa",
    "category": "Cemilan",
    "difficulty": "Sedang",
    "totalTimeMin": 80,
    "servingsDefault": 10,
    "tags": [
      "kue manis",
      "jajanan pasar"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1529973625058-a665431328fb?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0091_0",
        "name": "tepung terigu, santan, ragi",
        "qty": 500,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Mulai dengan mempersiapkan area kerja dan menimbang seluruh bahan dengan akurat, khususnya tepung terigu, santan, ragi dan bahan tambahan. Ketelitian dalam takaran sangat krusial dalam pembuatan kudapan ini agar tekstur akhir yang dihasilkan bisa konsisten, baik itu kenyal, lembut, maupun renyah."
      },
      {
        "text": "Siapkan adonan dasar dengan mencampur bahan kering dan bahan basah secara bertahap. Gunakan teknik pengadukan yang lembut namun rata agar tidak terbentuk gumpalan (lumpy). Jika resep memerlukan proses fermentasi atau pendiaman, pastikan adonan disimpan di tempat yang hangat selama waktu yang ditentukan."
      },
      {
        "text": "Siapkan peralatan memasak utama seperti cetakan khusus, kukusan yang sudah beruap banyak, atau wajan penggorengan dengan minyak yang cukup. Untuk teknik goreng, pastikan minyak sudah mencapai suhu yang stabil agar kudapan tidak menyerap minyak berlebih saat dimasukkan."
      },
      {
        "text": "Ambil sebagian adonan atau bahan tepung terigu, santan, ragi lalu bentuk atau masukkan ke dalam cetakan dengan hati-hati. Jika menggunakan isian seperti bahan tambahan, letakkan tepat di tengah agar saat matang nanti posisinya simetris dan bumbu atau pemanis tidak bocor keluar dari kulit adonan."
      },
      {
        "text": "Proses pematangan dilakukan dengan api sedang yang stabil. Jika dikukus, jangan terlalu sering membuka tutup kukusan agar uap panas tidak terbuang. Jika digoreng, balik kudapan hanya sekali saja saat satu sisi sudah terlihat kokoh dan berwarna kuning keemasan yang cantik."
      },
      {
        "text": "Setelah matang, angkat dan tiriskan kudapan di atas rak kawat atau kertas penyerap minyak selama beberapa menit agar suhunya stabil dan teksturnya lebih set. Sajikan Kue Pukis di atas piring saji yang bersih. Kudapan ini sangat cocok dinikmati sebagai teman minum teh atau kopi di sore hari."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0092",
    "title": "Lemper Ayam",
    "description": "Resep Lemper Ayam khas Jawa.",
    "region": "Jawa",
    "category": "Cemilan",
    "difficulty": "Sedang",
    "totalTimeMin": 80,
    "servingsDefault": 8,
    "tags": [
      "ketan",
      "kue asin"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0092_0",
        "name": "ketan, ayam suwir berbumbu",
        "qty": 600,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Mulai dengan mempersiapkan area kerja dan menimbang seluruh bahan dengan akurat, khususnya ketan, ayam suwir berbumbu dan bahan tambahan. Ketelitian dalam takaran sangat krusial dalam pembuatan kudapan ini agar tekstur akhir yang dihasilkan bisa konsisten, baik itu kenyal, lembut, maupun renyah."
      },
      {
        "text": "Siapkan adonan dasar dengan mencampur bahan kering dan bahan basah secara bertahap. Gunakan teknik pengadukan yang lembut namun rata agar tidak terbentuk gumpalan (lumpy). Jika resep memerlukan proses fermentasi atau pendiaman, pastikan adonan disimpan di tempat yang hangat selama waktu yang ditentukan."
      },
      {
        "text": "Siapkan peralatan memasak utama seperti cetakan khusus, kukusan yang sudah beruap banyak, atau wajan penggorengan dengan minyak yang cukup. Untuk teknik goreng, pastikan minyak sudah mencapai suhu yang stabil agar kudapan tidak menyerap minyak berlebih saat dimasukkan."
      },
      {
        "text": "Ambil sebagian adonan atau bahan ketan, ayam suwir berbumbu lalu bentuk atau masukkan ke dalam cetakan dengan hati-hati. Jika menggunakan isian seperti bahan tambahan, letakkan tepat di tengah agar saat matang nanti posisinya simetris dan bumbu atau pemanis tidak bocor keluar dari kulit adonan."
      },
      {
        "text": "Proses pematangan dilakukan dengan api sedang yang stabil. Jika dikukus, jangan terlalu sering membuka tutup kukusan agar uap panas tidak terbuang. Jika digoreng, balik kudapan hanya sekali saja saat satu sisi sudah terlihat kokoh dan berwarna kuning keemasan yang cantik."
      },
      {
        "text": "Setelah matang, angkat dan tiriskan kudapan di atas rak kawat atau kertas penyerap minyak selama beberapa menit agar suhunya stabil dan teksturnya lebih set. Sajikan Lemper Ayam di atas piring saji yang bersih. Kudapan ini sangat cocok dinikmati sebagai teman minum teh atau kopi di sore hari."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0093",
    "title": "Kue Lumpur Surga",
    "description": "Resep Kue Lumpur Surga khas Kalimantan Selatan.",
    "region": "Kalimantan",
    "category": "Cemilan",
    "difficulty": "Mudah",
    "totalTimeMin": 50,
    "servingsDefault": 5,
    "tags": [
      "kue basah",
      "santan gurih"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1529973625058-a665431328fb?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0093_0",
        "name": "santan, pandan, telur",
        "qty": 400,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Mulai dengan mempersiapkan area kerja dan menimbang seluruh bahan dengan akurat, khususnya santan, pandan, telur dan bahan tambahan. Ketelitian dalam takaran sangat krusial dalam pembuatan kudapan ini agar tekstur akhir yang dihasilkan bisa konsisten, baik itu kenyal, lembut, maupun renyah."
      },
      {
        "text": "Siapkan adonan dasar dengan mencampur bahan kering dan bahan basah secara bertahap. Gunakan teknik pengadukan yang lembut namun rata agar tidak terbentuk gumpalan (lumpy). Jika resep memerlukan proses fermentasi atau pendiaman, pastikan adonan disimpan di tempat yang hangat selama waktu yang ditentukan."
      },
      {
        "text": "Siapkan peralatan memasak utama seperti cetakan khusus, kukusan yang sudah beruap banyak, atau wajan penggorengan dengan minyak yang cukup. Untuk teknik goreng, pastikan minyak sudah mencapai suhu yang stabil agar kudapan tidak menyerap minyak berlebih saat dimasukkan."
      },
      {
        "text": "Ambil sebagian adonan atau bahan santan, pandan, telur lalu bentuk atau masukkan ke dalam cetakan dengan hati-hati. Jika menggunakan isian seperti bahan tambahan, letakkan tepat di tengah agar saat matang nanti posisinya simetris dan bumbu atau pemanis tidak bocor keluar dari kulit adonan."
      },
      {
        "text": "Proses pematangan dilakukan dengan api sedang yang stabil. Jika dikukus, jangan terlalu sering membuka tutup kukusan agar uap panas tidak terbuang. Jika digoreng, balik kudapan hanya sekali saja saat satu sisi sudah terlihat kokoh dan berwarna kuning keemasan yang cantik."
      },
      {
        "text": "Setelah matang, angkat dan tiriskan kudapan di atas rak kawat atau kertas penyerap minyak selama beberapa menit agar suhunya stabil dan teksturnya lebih set. Sajikan Kue Lumpur Surga di atas piring saji yang bersih. Kudapan ini sangat cocok dinikmati sebagai teman minum teh atau kopi di sore hari."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0094",
    "title": "Biji Salak (Kolak)",
    "description": "Resep Biji Salak (Kolak) khas Sumatera Barat.",
    "region": "Sumatera",
    "category": "Cemilan",
    "difficulty": "Sedang",
    "totalTimeMin": 60,
    "servingsDefault": 5,
    "tags": [
      "manis",
      "ubi jalar"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1529973625058-a665431328fb?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0094_0",
        "name": "ubi jalar kuning, tepung sagu",
        "qty": 500,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Mulai dengan mempersiapkan area kerja dan menimbang seluruh bahan dengan akurat, khususnya ubi jalar kuning, tepung sagu dan bahan tambahan. Ketelitian dalam takaran sangat krusial dalam pembuatan kudapan ini agar tekstur akhir yang dihasilkan bisa konsisten, baik itu kenyal, lembut, maupun renyah."
      },
      {
        "text": "Siapkan adonan dasar dengan mencampur bahan kering dan bahan basah secara bertahap. Gunakan teknik pengadukan yang lembut namun rata agar tidak terbentuk gumpalan (lumpy). Jika resep memerlukan proses fermentasi atau pendiaman, pastikan adonan disimpan di tempat yang hangat selama waktu yang ditentukan."
      },
      {
        "text": "Siapkan peralatan memasak utama seperti cetakan khusus, kukusan yang sudah beruap banyak, atau wajan penggorengan dengan minyak yang cukup. Untuk teknik goreng, pastikan minyak sudah mencapai suhu yang stabil agar kudapan tidak menyerap minyak berlebih saat dimasukkan."
      },
      {
        "text": "Ambil sebagian adonan atau bahan ubi jalar kuning, tepung sagu lalu bentuk atau masukkan ke dalam cetakan dengan hati-hati. Jika menggunakan isian seperti bahan tambahan, letakkan tepat di tengah agar saat matang nanti posisinya simetris dan bumbu atau pemanis tidak bocor keluar dari kulit adonan."
      },
      {
        "text": "Proses pematangan dilakukan dengan api sedang yang stabil. Jika dikukus, jangan terlalu sering membuka tutup kukusan agar uap panas tidak terbuang. Jika digoreng, balik kudapan hanya sekali saja saat satu sisi sudah terlihat kokoh dan berwarna kuning keemasan yang cantik."
      },
      {
        "text": "Setelah matang, angkat dan tiriskan kudapan di atas rak kawat atau kertas penyerap minyak selama beberapa menit agar suhunya stabil dan teksturnya lebih set. Sajikan Biji Salak (Kolak) di atas piring saji yang bersih. Kudapan ini sangat cocok dinikmati sebagai teman minum teh atau kopi di sore hari."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0095",
    "title": "Pempek Dos",
    "description": "Resep Pempek Dos khas Sumatera Selatan.",
    "region": "Sumatera",
    "category": "Cemilan",
    "difficulty": "Sedang",
    "totalTimeMin": 60,
    "servingsDefault": 4,
    "tags": [
      "gurih kenyal",
      "tanpa ikan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1529973625058-a665431328fb?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0095_0",
        "name": "tepung sagu, terigu, tanpa ikan",
        "qty": 400,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Mulai dengan mempersiapkan area kerja dan menimbang seluruh bahan dengan akurat, khususnya tepung sagu, terigu, tanpa ikan dan bahan tambahan. Ketelitian dalam takaran sangat krusial dalam pembuatan kudapan ini agar tekstur akhir yang dihasilkan bisa konsisten, baik itu kenyal, lembut, maupun renyah."
      },
      {
        "text": "Siapkan adonan dasar dengan mencampur bahan kering dan bahan basah secara bertahap. Gunakan teknik pengadukan yang lembut namun rata agar tidak terbentuk gumpalan (lumpy). Jika resep memerlukan proses fermentasi atau pendiaman, pastikan adonan disimpan di tempat yang hangat selama waktu yang ditentukan."
      },
      {
        "text": "Siapkan peralatan memasak utama seperti cetakan khusus, kukusan yang sudah beruap banyak, atau wajan penggorengan dengan minyak yang cukup. Untuk teknik goreng, pastikan minyak sudah mencapai suhu yang stabil agar kudapan tidak menyerap minyak berlebih saat dimasukkan."
      },
      {
        "text": "Ambil sebagian adonan atau bahan tepung sagu, terigu, tanpa ikan lalu bentuk atau masukkan ke dalam cetakan dengan hati-hati. Jika menggunakan isian seperti bahan tambahan, letakkan tepat di tengah agar saat matang nanti posisinya simetris dan bumbu atau pemanis tidak bocor keluar dari kulit adonan."
      },
      {
        "text": "Proses pematangan dilakukan dengan api sedang yang stabil. Jika dikukus, jangan terlalu sering membuka tutup kukusan agar uap panas tidak terbuang. Jika digoreng, balik kudapan hanya sekali saja saat satu sisi sudah terlihat kokoh dan berwarna kuning keemasan yang cantik."
      },
      {
        "text": "Setelah matang, angkat dan tiriskan kudapan di atas rak kawat atau kertas penyerap minyak selama beberapa menit agar suhunya stabil dan teksturnya lebih set. Sajikan Pempek Dos di atas piring saji yang bersih. Kudapan ini sangat cocok dinikmati sebagai teman minum teh atau kopi di sore hari."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0096",
    "title": "Cireng Bumbu Rujak",
    "description": "Resep Cireng Bumbu Rujak khas Jawa Barat.",
    "region": "Jawa",
    "category": "Cemilan",
    "difficulty": "Mudah",
    "totalTimeMin": 40,
    "servingsDefault": 4,
    "tags": [
      "kenyal",
      "gorengan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1529973625058-a665431328fb?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0096_0",
        "name": "tepung tapioka, bawang putih",
        "qty": 300,
        "unit": "g",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Mulai dengan mempersiapkan area kerja dan menimbang seluruh bahan dengan akurat, khususnya tepung tapioka, bawang putih dan bahan tambahan. Ketelitian dalam takaran sangat krusial dalam pembuatan kudapan ini agar tekstur akhir yang dihasilkan bisa konsisten, baik itu kenyal, lembut, maupun renyah."
      },
      {
        "text": "Siapkan adonan dasar dengan mencampur bahan kering dan bahan basah secara bertahap. Gunakan teknik pengadukan yang lembut namun rata agar tidak terbentuk gumpalan (lumpy). Jika resep memerlukan proses fermentasi atau pendiaman, pastikan adonan disimpan di tempat yang hangat selama waktu yang ditentukan."
      },
      {
        "text": "Siapkan peralatan memasak utama seperti cetakan khusus, kukusan yang sudah beruap banyak, atau wajan penggorengan dengan minyak yang cukup. Untuk teknik goreng, pastikan minyak sudah mencapai suhu yang stabil agar kudapan tidak menyerap minyak berlebih saat dimasukkan."
      },
      {
        "text": "Ambil sebagian adonan atau bahan tepung tapioka, bawang putih lalu bentuk atau masukkan ke dalam cetakan dengan hati-hati. Jika menggunakan isian seperti bahan tambahan, letakkan tepat di tengah agar saat matang nanti posisinya simetris dan bumbu atau pemanis tidak bocor keluar dari kulit adonan."
      },
      {
        "text": "Proses pematangan dilakukan dengan api sedang yang stabil. Jika dikukus, jangan terlalu sering membuka tutup kukusan agar uap panas tidak terbuang. Jika digoreng, balik kudapan hanya sekali saja saat satu sisi sudah terlihat kokoh dan berwarna kuning keemasan yang cantik."
      },
      {
        "text": "Setelah matang, angkat dan tiriskan kudapan di atas rak kawat atau kertas penyerap minyak selama beberapa menit agar suhunya stabil dan teksturnya lebih set. Sajikan Cireng Bumbu Rujak di atas piring saji yang bersih. Kudapan ini sangat cocok dinikmati sebagai teman minum teh atau kopi di sore hari."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0097",
    "title": "Pastel Sayur Telur",
    "description": "Resep Pastel Sayur Telur khas Nusantara.",
    "region": "Nasional",
    "category": "Cemilan",
    "difficulty": "Sedang",
    "totalTimeMin": 75,
    "servingsDefault": 10,
    "tags": [
      "goreng ranyah",
      "jajanan gurih"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0097_0",
        "name": "tepung terigu, wortel, bihun, telur",
        "qty": 600,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Mulai dengan mempersiapkan area kerja dan menimbang seluruh bahan dengan akurat, khususnya tepung terigu, wortel, bihun, telur dan bahan tambahan. Ketelitian dalam takaran sangat krusial dalam pembuatan kudapan ini agar tekstur akhir yang dihasilkan bisa konsisten, baik itu kenyal, lembut, maupun renyah."
      },
      {
        "text": "Siapkan adonan dasar dengan mencampur bahan kering dan bahan basah secara bertahap. Gunakan teknik pengadukan yang lembut namun rata agar tidak terbentuk gumpalan (lumpy). Jika resep memerlukan proses fermentasi atau pendiaman, pastikan adonan disimpan di tempat yang hangat selama waktu yang ditentukan."
      },
      {
        "text": "Siapkan peralatan memasak utama seperti cetakan khusus, kukusan yang sudah beruap banyak, atau wajan penggorengan dengan minyak yang cukup. Untuk teknik goreng, pastikan minyak sudah mencapai suhu yang stabil agar kudapan tidak menyerap minyak berlebih saat dimasukkan."
      },
      {
        "text": "Ambil sebagian adonan atau bahan tepung terigu, wortel, bihun, telur lalu bentuk atau masukkan ke dalam cetakan dengan hati-hati. Jika menggunakan isian seperti bahan tambahan, letakkan tepat di tengah agar saat matang nanti posisinya simetris dan bumbu atau pemanis tidak bocor keluar dari kulit adonan."
      },
      {
        "text": "Proses pematangan dilakukan dengan api sedang yang stabil. Jika dikukus, jangan terlalu sering membuka tutup kukusan agar uap panas tidak terbuang. Jika digoreng, balik kudapan hanya sekali saja saat satu sisi sudah terlihat kokoh dan berwarna kuning keemasan yang cantik."
      },
      {
        "text": "Setelah matang, angkat dan tiriskan kudapan di atas rak kawat atau kertas penyerap minyak selama beberapa menit agar suhunya stabil dan teksturnya lebih set. Sajikan Pastel Sayur Telur di atas piring saji yang bersih. Kudapan ini sangat cocok dinikmati sebagai teman minum teh atau kopi di sore hari."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0098",
    "title": "Klepon Ketan",
    "description": "Resep Klepon Ketan khas Jawa Tengah.",
    "region": "Jawa",
    "category": "Cemilan",
    "difficulty": "Mudah",
    "totalTimeMin": 50,
    "servingsDefault": 6,
    "tags": [
      "manis legit",
      "kue basah"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1529973625058-a665431328fb?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0098_0",
        "name": "tepung ketan, pandan, gula merah",
        "qty": 400,
        "unit": "g",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Mulai dengan mempersiapkan area kerja dan menimbang seluruh bahan dengan akurat, khususnya tepung ketan, pandan, gula merah dan bahan tambahan. Ketelitian dalam takaran sangat krusial dalam pembuatan kudapan ini agar tekstur akhir yang dihasilkan bisa konsisten, baik itu kenyal, lembut, maupun renyah."
      },
      {
        "text": "Siapkan adonan dasar dengan mencampur bahan kering dan bahan basah secara bertahap. Gunakan teknik pengadukan yang lembut namun rata agar tidak terbentuk gumpalan (lumpy). Jika resep memerlukan proses fermentasi atau pendiaman, pastikan adonan disimpan di tempat yang hangat selama waktu yang ditentukan."
      },
      {
        "text": "Siapkan peralatan memasak utama seperti cetakan khusus, kukusan yang sudah beruap banyak, atau wajan penggorengan dengan minyak yang cukup. Untuk teknik goreng, pastikan minyak sudah mencapai suhu yang stabil agar kudapan tidak menyerap minyak berlebih saat dimasukkan."
      },
      {
        "text": "Ambil sebagian adonan atau bahan tepung ketan, pandan, gula merah lalu bentuk atau masukkan ke dalam cetakan dengan hati-hati. Jika menggunakan isian seperti bahan tambahan, letakkan tepat di tengah agar saat matang nanti posisinya simetris dan bumbu atau pemanis tidak bocor keluar dari kulit adonan."
      },
      {
        "text": "Proses pematangan dilakukan dengan api sedang yang stabil. Jika dikukus, jangan terlalu sering membuka tutup kukusan agar uap panas tidak terbuang. Jika digoreng, balik kudapan hanya sekali saja saat satu sisi sudah terlihat kokoh dan berwarna kuning keemasan yang cantik."
      },
      {
        "text": "Setelah matang, angkat dan tiriskan kudapan di atas rak kawat atau kertas penyerap minyak selama beberapa menit agar suhunya stabil dan teksturnya lebih set. Sajikan Klepon Ketan di atas piring saji yang bersih. Kudapan ini sangat cocok dinikmati sebagai teman minum teh atau kopi di sore hari."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0099",
    "title": "Risol Mayo",
    "description": "Resep Risol Mayo khas DKI Jakarta.",
    "region": "Jawa",
    "category": "Cemilan",
    "difficulty": "Sedang",
    "totalTimeMin": 50,
    "servingsDefault": 8,
    "tags": [
      "gorengan",
      "gurih creamy"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1529973625058-a665431328fb?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0099_0",
        "name": "kulit lumpia/risol, mayo, smoke beef, telur",
        "qty": 600,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Mulai dengan mempersiapkan area kerja dan menimbang seluruh bahan dengan akurat, khususnya kulit lumpia/risol, mayo, smoke beef, telur dan bahan tambahan. Ketelitian dalam takaran sangat krusial dalam pembuatan kudapan ini agar tekstur akhir yang dihasilkan bisa konsisten, baik itu kenyal, lembut, maupun renyah."
      },
      {
        "text": "Siapkan adonan dasar dengan mencampur bahan kering dan bahan basah secara bertahap. Gunakan teknik pengadukan yang lembut namun rata agar tidak terbentuk gumpalan (lumpy). Jika resep memerlukan proses fermentasi atau pendiaman, pastikan adonan disimpan di tempat yang hangat selama waktu yang ditentukan."
      },
      {
        "text": "Siapkan peralatan memasak utama seperti cetakan khusus, kukusan yang sudah beruap banyak, atau wajan penggorengan dengan minyak yang cukup. Untuk teknik goreng, pastikan minyak sudah mencapai suhu yang stabil agar kudapan tidak menyerap minyak berlebih saat dimasukkan."
      },
      {
        "text": "Ambil sebagian adonan atau bahan kulit lumpia/risol, mayo, smoke beef, telur lalu bentuk atau masukkan ke dalam cetakan dengan hati-hati. Jika menggunakan isian seperti bahan tambahan, letakkan tepat di tengah agar saat matang nanti posisinya simetris dan bumbu atau pemanis tidak bocor keluar dari kulit adonan."
      },
      {
        "text": "Proses pematangan dilakukan dengan api sedang yang stabil. Jika dikukus, jangan terlalu sering membuka tutup kukusan agar uap panas tidak terbuang. Jika digoreng, balik kudapan hanya sekali saja saat satu sisi sudah terlihat kokoh dan berwarna kuning keemasan yang cantik."
      },
      {
        "text": "Setelah matang, angkat dan tiriskan kudapan di atas rak kawat atau kertas penyerap minyak selama beberapa menit agar suhunya stabil dan teksturnya lebih set. Sajikan Risol Mayo di atas piring saji yang bersih. Kudapan ini sangat cocok dinikmati sebagai teman minum teh atau kopi di sore hari."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0100",
    "title": "Kue Talam Pandan",
    "description": "Resep Kue Talam Pandan khas Betawi.",
    "region": "Nasional",
    "category": "Cemilan",
    "difficulty": "Sedang",
    "totalTimeMin": 60,
    "servingsDefault": 8,
    "tags": [
      "kue talam",
      "pandan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1529973625058-a665431328fb?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0100_0",
        "name": "tepung beras, santan, pandan",
        "qty": 500,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Mulai dengan mempersiapkan area kerja dan menimbang seluruh bahan dengan akurat, khususnya tepung beras, santan, pandan dan bahan tambahan. Ketelitian dalam takaran sangat krusial dalam pembuatan kudapan ini agar tekstur akhir yang dihasilkan bisa konsisten, baik itu kenyal, lembut, maupun renyah."
      },
      {
        "text": "Siapkan adonan dasar dengan mencampur bahan kering dan bahan basah secara bertahap. Gunakan teknik pengadukan yang lembut namun rata agar tidak terbentuk gumpalan (lumpy). Jika resep memerlukan proses fermentasi atau pendiaman, pastikan adonan disimpan di tempat yang hangat selama waktu yang ditentukan."
      },
      {
        "text": "Siapkan peralatan memasak utama seperti cetakan khusus, kukusan yang sudah beruap banyak, atau wajan penggorengan dengan minyak yang cukup. Untuk teknik goreng, pastikan minyak sudah mencapai suhu yang stabil agar kudapan tidak menyerap minyak berlebih saat dimasukkan."
      },
      {
        "text": "Ambil sebagian adonan atau bahan tepung beras, santan, pandan lalu bentuk atau masukkan ke dalam cetakan dengan hati-hati. Jika menggunakan isian seperti bahan tambahan, letakkan tepat di tengah agar saat matang nanti posisinya simetris dan bumbu atau pemanis tidak bocor keluar dari kulit adonan."
      },
      {
        "text": "Proses pematangan dilakukan dengan api sedang yang stabil. Jika dikukus, jangan terlalu sering membuka tutup kukusan agar uap panas tidak terbuang. Jika digoreng, balik kudapan hanya sekali saja saat satu sisi sudah terlihat kokoh dan berwarna kuning keemasan yang cantik."
      },
      {
        "text": "Setelah matang, angkat dan tiriskan kudapan di atas rak kawat atau kertas penyerap minyak selama beberapa menit agar suhunya stabil dan teksturnya lebih set. Sajikan Kue Talam Pandan di atas piring saji yang bersih. Kudapan ini sangat cocok dinikmati sebagai teman minum teh atau kopi di sore hari."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0101",
    "title": "Es Dawet Ayu",
    "description": "Resep Es Dawet Ayu khas Banjarnegara, Jawa Tengah.",
    "region": "Jawa",
    "category": "Minuman",
    "difficulty": "Sedang",
    "totalTimeMin": 45,
    "servingsDefault": 4,
    "tags": [
      "es",
      "manis segar"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0101_0",
        "name": "tepung beras, pandan, santan, gula merah",
        "qty": 600,
        "unit": "g",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Langkah awal, persiapkan seluruh komponen penyusun minuman segar ini, terutama tepung beras, pandan, santan, gula merah sebagai bahan inti dan bahan tambahan sebagai pelengkap. Pastikan kualitas bahan dalam kondisi prima, misalnya buah yang matang sempurna atau rempah yang masih kuat aromanya, demi menghasilkan citarasa Es Dawet Ayu yang otentik."
      },
      {
        "text": "Jika masakan berupa minuman hangat, siapkan panci berisi air bersih sesuai takaran dan didihkan di atas api sedang. Masukkan komponen rempah atau bahan dasar satu per satu sembari diaduk perlahan hingga sari dan warnanya keluar secara maksimal ke dalam air rebusan."
      },
      {
        "text": "Untuk varian minuman dingin, siapkan sirup atau pemanis alami dari gula aren atau gula pasir yang sudah dicairkan. Pastikan tekstur cairan manis ini cukup kental agar saat dicampur dengan es batu nantinya, rasa manis Es Dawet Ayu tidak menjadi terlalu hambar akibat proses pencairan es."
      },
      {
        "text": "Masukkan bahan isian utama yakni tepung beras, pandan, santan, gula merah ke dalam wadah atau gelas saji yang sudah disiapkan. Jika bahan perlu diolah terlebih dahulu (seperti dipotong-potong atau diserut), lakukan dengan ukuran yang seragam agar tampilannya terlihat cantik dan profesional saat disajikan."
      },
      {
        "text": "Tuangkan perlahan kuah atau cairan pendukung (seperti santan gurih, susu, atau air rempah) ke dalam gelas. Pastikan perbandingan antara isian dan cairan seimbang, sehingga setiap tegukan memberikan paduan rasa yang sempurna antara manis, gurih, dan kesegaran khas Nusantara."
      },
      {
        "text": "Sebagai sentuhan akhir, tambahkan bongkahan es batu secukupnya atau sajikan dalam keadaan panas mengepul sesuai jenisnya. Hiasi bagian atas minuman dengan garnish sederhana seperti daun pandan atau irisan jeruk nipis untuk memperkuat aroma. Nikmati Es Dawet Ayu segera selagi suhu dan kesegarannya masih terjaga secara optimal."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0102",
    "title": "Wedang Ronde",
    "description": "Resep Wedang Ronde khas Jawa Tengah.",
    "region": "Jawa",
    "category": "Minuman",
    "difficulty": "Sedang",
    "totalTimeMin": 50,
    "servingsDefault": 4,
    "tags": [
      "wedang hangat",
      "jahe"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0102_0",
        "name": "tepung ketan, kacang tanah, jahe",
        "qty": 500,
        "unit": "g",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Langkah awal, persiapkan seluruh komponen penyusun minuman segar ini, terutama tepung ketan, kacang tanah, jahe sebagai bahan inti dan bahan tambahan sebagai pelengkap. Pastikan kualitas bahan dalam kondisi prima, misalnya buah yang matang sempurna atau rempah yang masih kuat aromanya, demi menghasilkan citarasa Wedang Ronde yang otentik."
      },
      {
        "text": "Jika masakan berupa minuman hangat, siapkan panci berisi air bersih sesuai takaran dan didihkan di atas api sedang. Masukkan komponen rempah atau bahan dasar satu per satu sembari diaduk perlahan hingga sari dan warnanya keluar secara maksimal ke dalam air rebusan."
      },
      {
        "text": "Untuk varian minuman dingin, siapkan sirup atau pemanis alami dari gula aren atau gula pasir yang sudah dicairkan. Pastikan tekstur cairan manis ini cukup kental agar saat dicampur dengan es batu nantinya, rasa manis Wedang Ronde tidak menjadi terlalu hambar akibat proses pencairan es."
      },
      {
        "text": "Masukkan bahan isian utama yakni tepung ketan, kacang tanah, jahe ke dalam wadah atau gelas saji yang sudah disiapkan. Jika bahan perlu diolah terlebih dahulu (seperti dipotong-potong atau diserut), lakukan dengan ukuran yang seragam agar tampilannya terlihat cantik dan profesional saat disajikan."
      },
      {
        "text": "Tuangkan perlahan kuah atau cairan pendukung (seperti santan gurih, susu, atau air rempah) ke dalam gelas. Pastikan perbandingan antara isian dan cairan seimbang, sehingga setiap tegukan memberikan paduan rasa yang sempurna antara manis, gurih, dan kesegaran khas Nusantara."
      },
      {
        "text": "Sebagai sentuhan akhir, tambahkan bongkahan es batu secukupnya atau sajikan dalam keadaan panas mengepul sesuai jenisnya. Hiasi bagian atas minuman dengan garnish sederhana seperti daun pandan atau irisan jeruk nipis untuk memperkuat aroma. Nikmati Wedang Ronde segera selagi suhu dan kesegarannya masih terjaga secara optimal."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0103",
    "title": "Es Kuwut",
    "description": "Resep Es Kuwut khas Bali.",
    "region": "Bali-Nusra",
    "category": "Minuman",
    "difficulty": "Mudah",
    "totalTimeMin": 15,
    "servingsDefault": 4,
    "tags": [
      "es segar",
      "jeruk nipis"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0103_0",
        "name": "kelapa muda, melon, jeruk nipis, selasih",
        "qty": 600,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Langkah awal, persiapkan seluruh komponen penyusun minuman segar ini, terutama kelapa muda, melon, jeruk nipis, selasih sebagai bahan inti dan bahan tambahan sebagai pelengkap. Pastikan kualitas bahan dalam kondisi prima, misalnya buah yang matang sempurna atau rempah yang masih kuat aromanya, demi menghasilkan citarasa Es Kuwut yang otentik."
      },
      {
        "text": "Jika masakan berupa minuman hangat, siapkan panci berisi air bersih sesuai takaran dan didihkan di atas api sedang. Masukkan komponen rempah atau bahan dasar satu per satu sembari diaduk perlahan hingga sari dan warnanya keluar secara maksimal ke dalam air rebusan."
      },
      {
        "text": "Untuk varian minuman dingin, siapkan sirup atau pemanis alami dari gula aren atau gula pasir yang sudah dicairkan. Pastikan tekstur cairan manis ini cukup kental agar saat dicampur dengan es batu nantinya, rasa manis Es Kuwut tidak menjadi terlalu hambar akibat proses pencairan es."
      },
      {
        "text": "Masukkan bahan isian utama yakni kelapa muda, melon, jeruk nipis, selasih ke dalam wadah atau gelas saji yang sudah disiapkan. Jika bahan perlu diolah terlebih dahulu (seperti dipotong-potong atau diserut), lakukan dengan ukuran yang seragam agar tampilannya terlihat cantik dan profesional saat disajikan."
      },
      {
        "text": "Tuangkan perlahan kuah atau cairan pendukung (seperti santan gurih, susu, atau air rempah) ke dalam gelas. Pastikan perbandingan antara isian dan cairan seimbang, sehingga setiap tegukan memberikan paduan rasa yang sempurna antara manis, gurih, dan kesegaran khas Nusantara."
      },
      {
        "text": "Sebagai sentuhan akhir, tambahkan bongkahan es batu secukupnya atau sajikan dalam keadaan panas mengepul sesuai jenisnya. Hiasi bagian atas minuman dengan garnish sederhana seperti daun pandan atau irisan jeruk nipis untuk memperkuat aroma. Nikmati Es Kuwut segera selagi suhu dan kesegarannya masih terjaga secara optimal."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0104",
    "title": "Es Pisang Ijo",
    "description": "Resep Es Pisang Ijo khas Makassar, Sulawesi Selatan.",
    "region": "Sulawesi",
    "category": "Minuman",
    "difficulty": "Sulit",
    "totalTimeMin": 75,
    "servingsDefault": 5,
    "tags": [
      "es pisang",
      "manis dingin"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0104_0",
        "name": "pisang raja, tepung beras, pandan, sirup DHT",
        "qty": 800,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Langkah awal, persiapkan seluruh komponen penyusun minuman segar ini, terutama pisang raja, tepung beras, pandan, sirup DHT sebagai bahan inti dan bahan tambahan sebagai pelengkap. Pastikan kualitas bahan dalam kondisi prima, misalnya buah yang matang sempurna atau rempah yang masih kuat aromanya, demi menghasilkan citarasa Es Pisang Ijo yang otentik."
      },
      {
        "text": "Jika masakan berupa minuman hangat, siapkan panci berisi air bersih sesuai takaran dan didihkan di atas api sedang. Masukkan komponen rempah atau bahan dasar satu per satu sembari diaduk perlahan hingga sari dan warnanya keluar secara maksimal ke dalam air rebusan."
      },
      {
        "text": "Untuk varian minuman dingin, siapkan sirup atau pemanis alami dari gula aren atau gula pasir yang sudah dicairkan. Pastikan tekstur cairan manis ini cukup kental agar saat dicampur dengan es batu nantinya, rasa manis Es Pisang Ijo tidak menjadi terlalu hambar akibat proses pencairan es."
      },
      {
        "text": "Masukkan bahan isian utama yakni pisang raja, tepung beras, pandan, sirup DHT ke dalam wadah atau gelas saji yang sudah disiapkan. Jika bahan perlu diolah terlebih dahulu (seperti dipotong-potong atau diserut), lakukan dengan ukuran yang seragam agar tampilannya terlihat cantik dan profesional saat disajikan."
      },
      {
        "text": "Tuangkan perlahan kuah atau cairan pendukung (seperti santan gurih, susu, atau air rempah) ke dalam gelas. Pastikan perbandingan antara isian dan cairan seimbang, sehingga setiap tegukan memberikan paduan rasa yang sempurna antara manis, gurih, dan kesegaran khas Nusantara."
      },
      {
        "text": "Sebagai sentuhan akhir, tambahkan bongkahan es batu secukupnya atau sajikan dalam keadaan panas mengepul sesuai jenisnya. Hiasi bagian atas minuman dengan garnish sederhana seperti daun pandan atau irisan jeruk nipis untuk memperkuat aroma. Nikmati Es Pisang Ijo segera selagi suhu dan kesegarannya masih terjaga secara optimal."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0105",
    "title": "Bandrek",
    "description": "Resep Bandrek khas Jawa Barat.",
    "region": "Jawa",
    "category": "Minuman",
    "difficulty": "Mudah",
    "totalTimeMin": 30,
    "servingsDefault": 4,
    "tags": [
      "wedang",
      "rempah kencang"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0105_0",
        "name": "jahe bakar, gula merah, kayu manis, cengkeh",
        "qty": 300,
        "unit": "g",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Langkah awal, persiapkan seluruh komponen penyusun minuman segar ini, terutama jahe bakar, gula merah, kayu manis, cengkeh sebagai bahan inti dan bahan tambahan sebagai pelengkap. Pastikan kualitas bahan dalam kondisi prima, misalnya buah yang matang sempurna atau rempah yang masih kuat aromanya, demi menghasilkan citarasa Bandrek yang otentik."
      },
      {
        "text": "Jika masakan berupa minuman hangat, siapkan panci berisi air bersih sesuai takaran dan didihkan di atas api sedang. Masukkan komponen rempah atau bahan dasar satu per satu sembari diaduk perlahan hingga sari dan warnanya keluar secara maksimal ke dalam air rebusan."
      },
      {
        "text": "Untuk varian minuman dingin, siapkan sirup atau pemanis alami dari gula aren atau gula pasir yang sudah dicairkan. Pastikan tekstur cairan manis ini cukup kental agar saat dicampur dengan es batu nantinya, rasa manis Bandrek tidak menjadi terlalu hambar akibat proses pencairan es."
      },
      {
        "text": "Masukkan bahan isian utama yakni jahe bakar, gula merah, kayu manis, cengkeh ke dalam wadah atau gelas saji yang sudah disiapkan. Jika bahan perlu diolah terlebih dahulu (seperti dipotong-potong atau diserut), lakukan dengan ukuran yang seragam agar tampilannya terlihat cantik dan profesional saat disajikan."
      },
      {
        "text": "Tuangkan perlahan kuah atau cairan pendukung (seperti santan gurih, susu, atau air rempah) ke dalam gelas. Pastikan perbandingan antara isian dan cairan seimbang, sehingga setiap tegukan memberikan paduan rasa yang sempurna antara manis, gurih, dan kesegaran khas Nusantara."
      },
      {
        "text": "Sebagai sentuhan akhir, tambahkan bongkahan es batu secukupnya atau sajikan dalam keadaan panas mengepul sesuai jenisnya. Hiasi bagian atas minuman dengan garnish sederhana seperti daun pandan atau irisan jeruk nipis untuk memperkuat aroma. Nikmati Bandrek segera selagi suhu dan kesegarannya masih terjaga secara optimal."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0106",
    "title": "Es Selendang Mayang",
    "description": "Resep Es Selendang Mayang khas DKI Jakarta.",
    "region": "Jawa",
    "category": "Minuman",
    "difficulty": "Sedang",
    "totalTimeMin": 45,
    "servingsDefault": 5,
    "tags": [
      "es",
      "hunkwe manis"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0106_0",
        "name": "tepung hunkwe, santan, sirup merah",
        "qty": 500,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Langkah awal, persiapkan seluruh komponen penyusun minuman segar ini, terutama tepung hunkwe, santan, sirup merah sebagai bahan inti dan bahan tambahan sebagai pelengkap. Pastikan kualitas bahan dalam kondisi prima, misalnya buah yang matang sempurna atau rempah yang masih kuat aromanya, demi menghasilkan citarasa Es Selendang Mayang yang otentik."
      },
      {
        "text": "Jika masakan berupa minuman hangat, siapkan panci berisi air bersih sesuai takaran dan didihkan di atas api sedang. Masukkan komponen rempah atau bahan dasar satu per satu sembari diaduk perlahan hingga sari dan warnanya keluar secara maksimal ke dalam air rebusan."
      },
      {
        "text": "Untuk varian minuman dingin, siapkan sirup atau pemanis alami dari gula aren atau gula pasir yang sudah dicairkan. Pastikan tekstur cairan manis ini cukup kental agar saat dicampur dengan es batu nantinya, rasa manis Es Selendang Mayang tidak menjadi terlalu hambar akibat proses pencairan es."
      },
      {
        "text": "Masukkan bahan isian utama yakni tepung hunkwe, santan, sirup merah ke dalam wadah atau gelas saji yang sudah disiapkan. Jika bahan perlu diolah terlebih dahulu (seperti dipotong-potong atau diserut), lakukan dengan ukuran yang seragam agar tampilannya terlihat cantik dan profesional saat disajikan."
      },
      {
        "text": "Tuangkan perlahan kuah atau cairan pendukung (seperti santan gurih, susu, atau air rempah) ke dalam gelas. Pastikan perbandingan antara isian dan cairan seimbang, sehingga setiap tegukan memberikan paduan rasa yang sempurna antara manis, gurih, dan kesegaran khas Nusantara."
      },
      {
        "text": "Sebagai sentuhan akhir, tambahkan bongkahan es batu secukupnya atau sajikan dalam keadaan panas mengepul sesuai jenisnya. Hiasi bagian atas minuman dengan garnish sederhana seperti daun pandan atau irisan jeruk nipis untuk memperkuat aroma. Nikmati Es Selendang Mayang segera selagi suhu dan kesegarannya masih terjaga secara optimal."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0107",
    "title": "Wedang Uwuh",
    "description": "Resep Wedang Uwuh khas DI Yogyakarta.",
    "region": "Jawa",
    "category": "Minuman",
    "difficulty": "Mudah",
    "totalTimeMin": 20,
    "servingsDefault": 4,
    "tags": [
      "rempah",
      "minuman kesehatan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0107_0",
        "name": "daun cengkeh, kayu secang, jahe, daun pala",
        "qty": 150,
        "unit": "g",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Langkah awal, persiapkan seluruh komponen penyusun minuman segar ini, terutama daun cengkeh, kayu secang, jahe, daun pala sebagai bahan inti dan bahan tambahan sebagai pelengkap. Pastikan kualitas bahan dalam kondisi prima, misalnya buah yang matang sempurna atau rempah yang masih kuat aromanya, demi menghasilkan citarasa Wedang Uwuh yang otentik."
      },
      {
        "text": "Jika masakan berupa minuman hangat, siapkan panci berisi air bersih sesuai takaran dan didihkan di atas api sedang. Masukkan komponen rempah atau bahan dasar satu per satu sembari diaduk perlahan hingga sari dan warnanya keluar secara maksimal ke dalam air rebusan."
      },
      {
        "text": "Untuk varian minuman dingin, siapkan sirup atau pemanis alami dari gula aren atau gula pasir yang sudah dicairkan. Pastikan tekstur cairan manis ini cukup kental agar saat dicampur dengan es batu nantinya, rasa manis Wedang Uwuh tidak menjadi terlalu hambar akibat proses pencairan es."
      },
      {
        "text": "Masukkan bahan isian utama yakni daun cengkeh, kayu secang, jahe, daun pala ke dalam wadah atau gelas saji yang sudah disiapkan. Jika bahan perlu diolah terlebih dahulu (seperti dipotong-potong atau diserut), lakukan dengan ukuran yang seragam agar tampilannya terlihat cantik dan profesional saat disajikan."
      },
      {
        "text": "Tuangkan perlahan kuah atau cairan pendukung (seperti santan gurih, susu, atau air rempah) ke dalam gelas. Pastikan perbandingan antara isian dan cairan seimbang, sehingga setiap tegukan memberikan paduan rasa yang sempurna antara manis, gurih, dan kesegaran khas Nusantara."
      },
      {
        "text": "Sebagai sentuhan akhir, tambahkan bongkahan es batu secukupnya atau sajikan dalam keadaan panas mengepul sesuai jenisnya. Hiasi bagian atas minuman dengan garnish sederhana seperti daun pandan atau irisan jeruk nipis untuk memperkuat aroma. Nikmati Wedang Uwuh segera selagi suhu dan kesegarannya masih terjaga secara optimal."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0108",
    "title": "Es Cendol",
    "description": "Resep Es Cendol khas Jawa Barat.",
    "region": "Jawa",
    "category": "Minuman",
    "difficulty": "Sedang",
    "totalTimeMin": 50,
    "servingsDefault": 4,
    "tags": [
      "es cendol",
      "gula aren"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0108_0",
        "name": "tepung hunkwe/beras, pandan suji",
        "qty": 500,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Langkah awal, persiapkan seluruh komponen penyusun minuman segar ini, terutama tepung hunkwe/beras, pandan suji sebagai bahan inti dan bahan tambahan sebagai pelengkap. Pastikan kualitas bahan dalam kondisi prima, misalnya buah yang matang sempurna atau rempah yang masih kuat aromanya, demi menghasilkan citarasa Es Cendol yang otentik."
      },
      {
        "text": "Jika masakan berupa minuman hangat, siapkan panci berisi air bersih sesuai takaran dan didihkan di atas api sedang. Masukkan komponen rempah atau bahan dasar satu per satu sembari diaduk perlahan hingga sari dan warnanya keluar secara maksimal ke dalam air rebusan."
      },
      {
        "text": "Untuk varian minuman dingin, siapkan sirup atau pemanis alami dari gula aren atau gula pasir yang sudah dicairkan. Pastikan tekstur cairan manis ini cukup kental agar saat dicampur dengan es batu nantinya, rasa manis Es Cendol tidak menjadi terlalu hambar akibat proses pencairan es."
      },
      {
        "text": "Masukkan bahan isian utama yakni tepung hunkwe/beras, pandan suji ke dalam wadah atau gelas saji yang sudah disiapkan. Jika bahan perlu diolah terlebih dahulu (seperti dipotong-potong atau diserut), lakukan dengan ukuran yang seragam agar tampilannya terlihat cantik dan profesional saat disajikan."
      },
      {
        "text": "Tuangkan perlahan kuah atau cairan pendukung (seperti santan gurih, susu, atau air rempah) ke dalam gelas. Pastikan perbandingan antara isian dan cairan seimbang, sehingga setiap tegukan memberikan paduan rasa yang sempurna antara manis, gurih, dan kesegaran khas Nusantara."
      },
      {
        "text": "Sebagai sentuhan akhir, tambahkan bongkahan es batu secukupnya atau sajikan dalam keadaan panas mengepul sesuai jenisnya. Hiasi bagian atas minuman dengan garnish sederhana seperti daun pandan atau irisan jeruk nipis untuk memperkuat aroma. Nikmati Es Cendol segera selagi suhu dan kesegarannya masih terjaga secara optimal."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0109",
    "title": "Bajigur",
    "description": "Resep Bajigur khas Jawa Barat.",
    "region": "Jawa",
    "category": "Minuman",
    "difficulty": "Mudah",
    "totalTimeMin": 30,
    "servingsDefault": 4,
    "tags": [
      "santan hangat",
      "kopi"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0109_0",
        "name": "santan, kopi hitam bubuk, gula aren, jahe",
        "qty": 400,
        "unit": "g",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Langkah awal, persiapkan seluruh komponen penyusun minuman segar ini, terutama santan, kopi hitam bubuk, gula aren, jahe sebagai bahan inti dan bahan tambahan sebagai pelengkap. Pastikan kualitas bahan dalam kondisi prima, misalnya buah yang matang sempurna atau rempah yang masih kuat aromanya, demi menghasilkan citarasa Bajigur yang otentik."
      },
      {
        "text": "Jika masakan berupa minuman hangat, siapkan panci berisi air bersih sesuai takaran dan didihkan di atas api sedang. Masukkan komponen rempah atau bahan dasar satu per satu sembari diaduk perlahan hingga sari dan warnanya keluar secara maksimal ke dalam air rebusan."
      },
      {
        "text": "Untuk varian minuman dingin, siapkan sirup atau pemanis alami dari gula aren atau gula pasir yang sudah dicairkan. Pastikan tekstur cairan manis ini cukup kental agar saat dicampur dengan es batu nantinya, rasa manis Bajigur tidak menjadi terlalu hambar akibat proses pencairan es."
      },
      {
        "text": "Masukkan bahan isian utama yakni santan, kopi hitam bubuk, gula aren, jahe ke dalam wadah atau gelas saji yang sudah disiapkan. Jika bahan perlu diolah terlebih dahulu (seperti dipotong-potong atau diserut), lakukan dengan ukuran yang seragam agar tampilannya terlihat cantik dan profesional saat disajikan."
      },
      {
        "text": "Tuangkan perlahan kuah atau cairan pendukung (seperti santan gurih, susu, atau air rempah) ke dalam gelas. Pastikan perbandingan antara isian dan cairan seimbang, sehingga setiap tegukan memberikan paduan rasa yang sempurna antara manis, gurih, dan kesegaran khas Nusantara."
      },
      {
        "text": "Sebagai sentuhan akhir, tambahkan bongkahan es batu secukupnya atau sajikan dalam keadaan panas mengepul sesuai jenisnya. Hiasi bagian atas minuman dengan garnish sederhana seperti daun pandan atau irisan jeruk nipis untuk memperkuat aroma. Nikmati Bajigur segera selagi suhu dan kesegarannya masih terjaga secara optimal."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0110",
    "title": "Teh Talua (Teh Telur)",
    "description": "Resep Teh Talua (Teh Telur) khas Sumatera Barat.",
    "region": "Sumatera",
    "category": "Minuman",
    "difficulty": "Mudah",
    "totalTimeMin": 15,
    "servingsDefault": 2,
    "tags": [
      "teh",
      "penambah stamina"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0110_0",
        "name": "teh hitam pekat, kuning telur ayam kampung, jeruk nipis",
        "qty": 200,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Langkah awal, persiapkan seluruh komponen penyusun minuman segar ini, terutama teh hitam pekat, kuning telur ayam kampung, jeruk nipis sebagai bahan inti dan bahan tambahan sebagai pelengkap. Pastikan kualitas bahan dalam kondisi prima, misalnya buah yang matang sempurna atau rempah yang masih kuat aromanya, demi menghasilkan citarasa Teh Talua (Teh Telur) yang otentik."
      },
      {
        "text": "Jika masakan berupa minuman hangat, siapkan panci berisi air bersih sesuai takaran dan didihkan di atas api sedang. Masukkan komponen rempah atau bahan dasar satu per satu sembari diaduk perlahan hingga sari dan warnanya keluar secara maksimal ke dalam air rebusan."
      },
      {
        "text": "Untuk varian minuman dingin, siapkan sirup atau pemanis alami dari gula aren atau gula pasir yang sudah dicairkan. Pastikan tekstur cairan manis ini cukup kental agar saat dicampur dengan es batu nantinya, rasa manis Teh Talua (Teh Telur) tidak menjadi terlalu hambar akibat proses pencairan es."
      },
      {
        "text": "Masukkan bahan isian utama yakni teh hitam pekat, kuning telur ayam kampung, jeruk nipis ke dalam wadah atau gelas saji yang sudah disiapkan. Jika bahan perlu diolah terlebih dahulu (seperti dipotong-potong atau diserut), lakukan dengan ukuran yang seragam agar tampilannya terlihat cantik dan profesional saat disajikan."
      },
      {
        "text": "Tuangkan perlahan kuah atau cairan pendukung (seperti santan gurih, susu, atau air rempah) ke dalam gelas. Pastikan perbandingan antara isian dan cairan seimbang, sehingga setiap tegukan memberikan paduan rasa yang sempurna antara manis, gurih, dan kesegaran khas Nusantara."
      },
      {
        "text": "Sebagai sentuhan akhir, tambahkan bongkahan es batu secukupnya atau sajikan dalam keadaan panas mengepul sesuai jenisnya. Hiasi bagian atas minuman dengan garnish sederhana seperti daun pandan atau irisan jeruk nipis untuk memperkuat aroma. Nikmati Teh Talua (Teh Telur) segera selagi suhu dan kesegarannya masih terjaga secara optimal."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0111",
    "title": "Kolak Pisang Ubi",
    "description": "Resep Kolak Pisang Ubi khas Nusantara.",
    "region": "Nasional",
    "category": "Minuman",
    "difficulty": "Mudah",
    "totalTimeMin": 45,
    "servingsDefault": 6,
    "tags": [
      "takjil",
      "manis hangat",
      "ramadhan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0111_0",
        "name": "pisang kepok, ubi kuning, gula aren, santan, pandan",
        "qty": 800,
        "unit": "g",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Langkah awal, persiapkan seluruh komponen penyusun minuman segar ini, terutama pisang kepok, ubi kuning, gula aren, santan, pandan sebagai bahan inti dan bahan tambahan sebagai pelengkap. Pastikan kualitas bahan dalam kondisi prima, misalnya buah yang matang sempurna atau rempah yang masih kuat aromanya, demi menghasilkan citarasa Kolak Pisang Ubi yang otentik."
      },
      {
        "text": "Jika masakan berupa minuman hangat, siapkan panci berisi air bersih sesuai takaran dan didihkan di atas api sedang. Masukkan komponen rempah atau bahan dasar satu per satu sembari diaduk perlahan hingga sari dan warnanya keluar secara maksimal ke dalam air rebusan."
      },
      {
        "text": "Untuk varian minuman dingin, siapkan sirup atau pemanis alami dari gula aren atau gula pasir yang sudah dicairkan. Pastikan tekstur cairan manis ini cukup kental agar saat dicampur dengan es batu nantinya, rasa manis Kolak Pisang Ubi tidak menjadi terlalu hambar akibat proses pencairan es."
      },
      {
        "text": "Masukkan bahan isian utama yakni pisang kepok, ubi kuning, gula aren, santan, pandan ke dalam wadah atau gelas saji yang sudah disiapkan. Jika bahan perlu diolah terlebih dahulu (seperti dipotong-potong atau diserut), lakukan dengan ukuran yang seragam agar tampilannya terlihat cantik dan profesional saat disajikan."
      },
      {
        "text": "Tuangkan perlahan kuah atau cairan pendukung (seperti santan gurih, susu, atau air rempah) ke dalam gelas. Pastikan perbandingan antara isian dan cairan seimbang, sehingga setiap tegukan memberikan paduan rasa yang sempurna antara manis, gurih, dan kesegaran khas Nusantara."
      },
      {
        "text": "Sebagai sentuhan akhir, tambahkan bongkahan es batu secukupnya atau sajikan dalam keadaan panas mengepul sesuai jenisnya. Hiasi bagian atas minuman dengan garnish sederhana seperti daun pandan atau irisan jeruk nipis untuk memperkuat aroma. Nikmati Kolak Pisang Ubi segera selagi suhu dan kesegarannya masih terjaga secara optimal."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0112",
    "title": "Es Buah Segar",
    "description": "Resep Es Buah Segar khas Nusantara.",
    "region": "Nasional",
    "category": "Minuman",
    "difficulty": "Mudah",
    "totalTimeMin": 30,
    "servingsDefault": 10,
    "tags": [
      "takjil",
      "es manis",
      "ramadhan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0112_0",
        "name": "aneka buah (semangka, melon, apel, anggur), sirup cocopandan, susu kental manis",
        "qty": 1500,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Langkah awal, persiapkan seluruh komponen penyusun minuman segar ini, terutama aneka buah (semangka, melon, apel, anggur), sirup cocopandan, susu kental manis sebagai bahan inti dan bahan tambahan sebagai pelengkap. Pastikan kualitas bahan dalam kondisi prima, misalnya buah yang matang sempurna atau rempah yang masih kuat aromanya, demi menghasilkan citarasa Es Buah Segar yang otentik."
      },
      {
        "text": "Jika masakan berupa minuman hangat, siapkan panci berisi air bersih sesuai takaran dan didihkan di atas api sedang. Masukkan komponen rempah atau bahan dasar satu per satu sembari diaduk perlahan hingga sari dan warnanya keluar secara maksimal ke dalam air rebusan."
      },
      {
        "text": "Untuk varian minuman dingin, siapkan sirup atau pemanis alami dari gula aren atau gula pasir yang sudah dicairkan. Pastikan tekstur cairan manis ini cukup kental agar saat dicampur dengan es batu nantinya, rasa manis Es Buah Segar tidak menjadi terlalu hambar akibat proses pencairan es."
      },
      {
        "text": "Masukkan bahan isian utama yakni aneka buah (semangka, melon, apel, anggur), sirup cocopandan, susu kental manis ke dalam wadah atau gelas saji yang sudah disiapkan. Jika bahan perlu diolah terlebih dahulu (seperti dipotong-potong atau diserut), lakukan dengan ukuran yang seragam agar tampilannya terlihat cantik dan profesional saat disajikan."
      },
      {
        "text": "Tuangkan perlahan kuah atau cairan pendukung (seperti santan gurih, susu, atau air rempah) ke dalam gelas. Pastikan perbandingan antara isian dan cairan seimbang, sehingga setiap tegukan memberikan paduan rasa yang sempurna antara manis, gurih, dan kesegaran khas Nusantara."
      },
      {
        "text": "Sebagai sentuhan akhir, tambahkan bongkahan es batu secukupnya atau sajikan dalam keadaan panas mengepul sesuai jenisnya. Hiasi bagian atas minuman dengan garnish sederhana seperti daun pandan atau irisan jeruk nipis untuk memperkuat aroma. Nikmati Es Buah Segar segera selagi suhu dan kesegarannya masih terjaga secara optimal."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0113",
    "title": "Sop Buah Kuah Susu",
    "description": "Resep Sop Buah Kuah Susu khas Bandung, Jawa Barat.",
    "region": "Jawa",
    "category": "Minuman",
    "difficulty": "Mudah",
    "totalTimeMin": 25,
    "servingsDefault": 8,
    "tags": [
      "takjil",
      "es buah",
      "ramadhan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0113_0",
        "name": "naga merah, alpukat, stroberi, jelly, susu evaporasi",
        "qty": 1000,
        "unit": "g",
        "category": "Lainnya"
      }
    ],
    "steps": [
      {
        "text": "Langkah awal, persiapkan seluruh komponen penyusun minuman segar ini, terutama naga merah, alpukat, stroberi, jelly, susu evaporasi sebagai bahan inti dan bahan tambahan sebagai pelengkap. Pastikan kualitas bahan dalam kondisi prima, misalnya buah yang matang sempurna atau rempah yang masih kuat aromanya, demi menghasilkan citarasa Sop Buah Kuah Susu yang otentik."
      },
      {
        "text": "Jika masakan berupa minuman hangat, siapkan panci berisi air bersih sesuai takaran dan didihkan di atas api sedang. Masukkan komponen rempah atau bahan dasar satu per satu sembari diaduk perlahan hingga sari dan warnanya keluar secara maksimal ke dalam air rebusan."
      },
      {
        "text": "Untuk varian minuman dingin, siapkan sirup atau pemanis alami dari gula aren atau gula pasir yang sudah dicairkan. Pastikan tekstur cairan manis ini cukup kental agar saat dicampur dengan es batu nantinya, rasa manis Sop Buah Kuah Susu tidak menjadi terlalu hambar akibat proses pencairan es."
      },
      {
        "text": "Masukkan bahan isian utama yakni naga merah, alpukat, stroberi, jelly, susu evaporasi ke dalam wadah atau gelas saji yang sudah disiapkan. Jika bahan perlu diolah terlebih dahulu (seperti dipotong-potong atau diserut), lakukan dengan ukuran yang seragam agar tampilannya terlihat cantik dan profesional saat disajikan."
      },
      {
        "text": "Tuangkan perlahan kuah atau cairan pendukung (seperti santan gurih, susu, atau air rempah) ke dalam gelas. Pastikan perbandingan antara isian dan cairan seimbang, sehingga setiap tegukan memberikan paduan rasa yang sempurna antara manis, gurih, dan kesegaran khas Nusantara."
      },
      {
        "text": "Sebagai sentuhan akhir, tambahkan bongkahan es batu secukupnya atau sajikan dalam keadaan panas mengepul sesuai jenisnya. Hiasi bagian atas minuman dengan garnish sederhana seperti daun pandan atau irisan jeruk nipis untuk memperkuat aroma. Nikmati Sop Buah Kuah Susu segera selagi suhu dan kesegarannya masih terjaga secara optimal."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0114",
    "title": "Biji Salak Ubi Ungu",
    "description": "Resep Biji Salak Ubi Ungu khas Nusantara.",
    "region": "Nasional",
    "category": "Cemilan",
    "difficulty": "Sedang",
    "totalTimeMin": 55,
    "servingsDefault": 5,
    "tags": [
      "takjil",
      "kue basah",
      "ramadhan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1529973625058-a665431328fb?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0114_0",
        "name": "ubi ungu, tepung sagu, gula merah, santan kental",
        "qty": 600,
        "unit": "g",
        "category": "Bumbu"
      }
    ],
    "steps": [
      {
        "text": "Mulai dengan mempersiapkan area kerja dan menimbang seluruh bahan dengan akurat, khususnya ubi ungu, tepung sagu, gula merah, santan kental dan bahan tambahan. Ketelitian dalam takaran sangat krusial dalam pembuatan kudapan ini agar tekstur akhir yang dihasilkan bisa konsisten, baik itu kenyal, lembut, maupun renyah."
      },
      {
        "text": "Siapkan adonan dasar dengan mencampur bahan kering dan bahan basah secara bertahap. Gunakan teknik pengadukan yang lembut namun rata agar tidak terbentuk gumpalan (lumpy). Jika resep memerlukan proses fermentasi atau pendiaman, pastikan adonan disimpan di tempat yang hangat selama waktu yang ditentukan."
      },
      {
        "text": "Siapkan peralatan memasak utama seperti cetakan khusus, kukusan yang sudah beruap banyak, atau wajan penggorengan dengan minyak yang cukup. Untuk teknik goreng, pastikan minyak sudah mencapai suhu yang stabil agar kudapan tidak menyerap minyak berlebih saat dimasukkan."
      },
      {
        "text": "Ambil sebagian adonan atau bahan ubi ungu, tepung sagu, gula merah, santan kental lalu bentuk atau masukkan ke dalam cetakan dengan hati-hati. Jika menggunakan isian seperti bahan tambahan, letakkan tepat di tengah agar saat matang nanti posisinya simetris dan bumbu atau pemanis tidak bocor keluar dari kulit adonan."
      },
      {
        "text": "Proses pematangan dilakukan dengan api sedang yang stabil. Jika dikukus, jangan terlalu sering membuka tutup kukusan agar uap panas tidak terbuang. Jika digoreng, balik kudapan hanya sekali saja saat satu sisi sudah terlihat kokoh dan berwarna kuning keemasan yang cantik."
      },
      {
        "text": "Setelah matang, angkat dan tiriskan kudapan di atas rak kawat atau kertas penyerap minyak selama beberapa menit agar suhunya stabil dan teksturnya lebih set. Sajikan Biji Salak Ubi Ungu di atas piring saji yang bersih. Kudapan ini sangat cocok dinikmati sebagai teman minum teh atau kopi di sore hari."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0115",
    "title": "Ayam Kecap Sahur Praktis",
    "description": "Resep Ayam Kecap Sahur Praktis khas Nusantara.",
    "region": "Nasional",
    "category": "Utama",
    "difficulty": "Mudah",
    "totalTimeMin": 30,
    "servingsDefault": 4,
    "tags": [
      "sahur",
      "praktis",
      "ayam",
      "ramadhan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0115_0",
        "name": "ayam potong kecil, kecap manis, bawang bombay",
        "qty": 500,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama ayam potong kecil, kecap manis, bawang bombay dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Ayam Kecap Sahur Praktis."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti ayam potong kecil, kecap manis, bawang bombay, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Ayam Kecap Sahur Praktis dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0116",
    "title": "Tumis Telur Tomat Sahur",
    "description": "Resep Tumis Telur Tomat Sahur khas Nusantara.",
    "region": "Nasional",
    "category": "Lauk",
    "difficulty": "Mudah",
    "totalTimeMin": 15,
    "servingsDefault": 2,
    "tags": [
      "sahur",
      "praktis",
      "telur",
      "ramadhan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1476224203421-9ce39362ea08?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0116_0",
        "name": "telur ayam kocok, buah tomat, saus tiram, daun bawang",
        "qty": 250,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama telur ayam kocok, buah tomat, saus tiram, daun bawang dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Tumis Telur Tomat Sahur."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti telur ayam kocok, buah tomat, saus tiram, daun bawang, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Tumis Telur Tomat Sahur dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0117",
    "title": "Opor Ayam Lebaran",
    "description": "Resep Opor Ayam Lebaran khas Jawa Timur.",
    "region": "Jawa",
    "category": "Utama",
    "difficulty": "Sedang",
    "totalTimeMin": 90,
    "servingsDefault": 8,
    "tags": [
      "buka puasa",
      "hari raya",
      "ramadhan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0117_0",
        "name": "ayam kampung, santan cair, santan kental, bumbu kuning",
        "qty": 1200,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama ayam kampung, santan cair, santan kental, bumbu kuning dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Opor Ayam Lebaran."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti ayam kampung, santan cair, santan kental, bumbu kuning, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Opor Ayam Lebaran dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0118",
    "title": "Sambal Goreng Ati Kentang",
    "description": "Resep Sambal Goreng Ati Kentang khas Jawa Tengah.",
    "region": "Jawa",
    "category": "Lauk",
    "difficulty": "Sedang",
    "totalTimeMin": 70,
    "servingsDefault": 6,
    "tags": [
      "lauk berat",
      "pedas",
      "ramadhan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0118_0",
        "name": "ati ampela ayam, kentang dadu, cabai merah petai",
        "qty": 600,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama ati ampela ayam, kentang dadu, cabai merah petai dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Sambal Goreng Ati Kentang."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti ati ampela ayam, kentang dadu, cabai merah petai, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Sambal Goreng Ati Kentang dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0119",
    "title": "Es Campur Sirup Merah",
    "description": "Resep Es Campur Sirup Merah khas Nusantara.",
    "region": "Nasional",
    "category": "Minuman",
    "difficulty": "Mudah",
    "totalTimeMin": 30,
    "servingsDefault": 5,
    "tags": [
      "takjil",
      "es campur",
      "ramadhan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0119_0",
        "name": "cincau hitam, tape singkong, kolang-kaling, es serut, sirup",
        "qty": 800,
        "unit": "g",
        "category": "Sayur"
      }
    ],
    "steps": [
      {
        "text": "Langkah awal, persiapkan seluruh komponen penyusun minuman segar ini, terutama cincau hitam, tape singkong, kolang-kaling, es serut, sirup sebagai bahan inti dan bahan tambahan sebagai pelengkap. Pastikan kualitas bahan dalam kondisi prima, misalnya buah yang matang sempurna atau rempah yang masih kuat aromanya, demi menghasilkan citarasa Es Campur Sirup Merah yang otentik."
      },
      {
        "text": "Jika masakan berupa minuman hangat, siapkan panci berisi air bersih sesuai takaran dan didihkan di atas api sedang. Masukkan komponen rempah atau bahan dasar satu per satu sembari diaduk perlahan hingga sari dan warnanya keluar secara maksimal ke dalam air rebusan."
      },
      {
        "text": "Untuk varian minuman dingin, siapkan sirup atau pemanis alami dari gula aren atau gula pasir yang sudah dicairkan. Pastikan tekstur cairan manis ini cukup kental agar saat dicampur dengan es batu nantinya, rasa manis Es Campur Sirup Merah tidak menjadi terlalu hambar akibat proses pencairan es."
      },
      {
        "text": "Masukkan bahan isian utama yakni cincau hitam, tape singkong, kolang-kaling, es serut, sirup ke dalam wadah atau gelas saji yang sudah disiapkan. Jika bahan perlu diolah terlebih dahulu (seperti dipotong-potong atau diserut), lakukan dengan ukuran yang seragam agar tampilannya terlihat cantik dan profesional saat disajikan."
      },
      {
        "text": "Tuangkan perlahan kuah atau cairan pendukung (seperti santan gurih, susu, atau air rempah) ke dalam gelas. Pastikan perbandingan antara isian dan cairan seimbang, sehingga setiap tegukan memberikan paduan rasa yang sempurna antara manis, gurih, dan kesegaran khas Nusantara."
      },
      {
        "text": "Sebagai sentuhan akhir, tambahkan bongkahan es batu secukupnya atau sajikan dalam keadaan panas mengepul sesuai jenisnya. Hiasi bagian atas minuman dengan garnish sederhana seperti daun pandan atau irisan jeruk nipis untuk memperkuat aroma. Nikmati Es Campur Sirup Merah segera selagi suhu dan kesegarannya masih terjaga secara optimal."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  },
  {
    "id": "menusa_0120",
    "title": "Sayur Sop Sosis Sahur",
    "description": "Resep Sayur Sop Sosis Sahur khas Nusantara.",
    "region": "Nasional",
    "category": "Sup",
    "difficulty": "Mudah",
    "totalTimeMin": 35,
    "servingsDefault": 4,
    "tags": [
      "sahur",
      "kuah segar",
      "ramadhan"
    ],
    "heroImageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80",
    "ingredients": [
      {
        "id": "ing_menusa_0120_0",
        "name": "wortel, buncis, kentang, sosis sapi, kaldu ayam",
        "qty": 400,
        "unit": "g",
        "category": "Protein"
      }
    ],
    "steps": [
      {
        "text": "Tahap pertama, siapkan dan bersihkan secara saksama semua bahan utama yang dibutuhkan, terutama wortel, buncis, kentang, sosis sapi, kaldu ayam dan bahan tambahan. Pastikan semua bahan yang akan dimasak dalam keadaan segar dan higienis. Potong-potong bahan sesuai selera atau panduan resep (misalnya diiris tipis, dipotong dadu, atau dibiarkan utuh), agar nantinya bumbu dapat meresap lebih mudah saat proses pematangan Sayur Sop Sosis Sahur."
      },
      {
        "text": "Selanjutnya, siapkan bumbu halus pokok yang akan menjadi dasar cita rasa masakan ini. Anda dapat menghaluskan bumbu dasar menggunakan ulekan batu tradisional agar minyak alami rempah keluar maksimal, atau menggunakan blender dengan sedikit minyak goreng. Hindari menambahkan terlalu banyak air saat menghaluskan agar bumbu tidak menjadi encer dan lebih cepat matang saat ditumis."
      },
      {
        "text": "Panaskan 3 hingga 4 sendok makan minyak goreng di dalam wajan berukuran memadai menggunakan nyala api sedang. Setelah minyak dirasa cukup panas, masukkan perlahan bumbu yang telah dihaluskan tadi. Tumis secara teratur selama 4-6 menit hingga bumbu terlihat layu, pinggirannya sedikit berubah kecoklatan, dan mengeluarkan aroma wangi yang khas menyebar ke seluruh dapur. Pastikan terus diaduk bagian bawahnya agar tidak ada sisi yang hangus."
      },
      {
        "text": "Setelah bumbu dipastikan matang sempurna dan tidak mengeluarkan aroma langu sisa rempah mentah, masukkan perlahan bahan utama, seperti wortel, buncis, kentang, sosis sapi, kaldu ayam, ke dalam wajan. Aduk-aduk secara konsisten namun perlahan agar seluruh permukaan bahan masakan tertutup rata sepenuhnya oleh bumbu tumisan. Masak dan aduk beberapa saat hingga tekstur atau warna bahan mulai menunjukkan perubahan awal, pertanda bumbu mulai merasuk."
      },
      {
        "text": "Tuangkan cairan pengempuk atau pembentuk kuah (seperti air bersih, kaldu, atau santan jika resep mengharuskan) ke dalam wajan secukupnya sesuai takaran. Tambahkan juga bumbu perasa standar yakni sejumput garam, gula, dan penyedap jika suka. Kecilkan api satu tingkat, lalu tutup wajan atau panci tersebut. Biarkan masakan mendidih secara perlahan (simmering) selama 15 hingga 25 menit. Selama waktu ini, buka tutup sesekali untuk mengaduk ringan agar bahan di dasar tidak lengket atau gosong."
      },
      {
        "text": "Sebagai langkah terakhir, buka tutup wajan dan periksa kembali tingkat kematangan serta keempukan bahan secara menyeluruh. Cermati indikator visual matang, seperti volume kuah yang menyusut mengental atau minyak yang mulai terpisah dari bumbu. Lakukan koreksi rasa dengan mencicipi kuahnya. Bila dirasa sudah seimbang dan pas di lidah, matikan kompor segera. Pindahkan Sayur Sop Sosis Sahur dengan hati-hati ke dalam mangkuk atau piring saji, hias permukaannya, dan hidangkan selagi hangat untuk dinikmati."
      }
    ],
    "tips": [],
    "isPremium": false,
    "nutrition": {
      "calories": 300,
      "protein": 15,
      "carbs": 20,
      "fat": 12
    }
  }
];
