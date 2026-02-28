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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/66/Potongan_daging_sapi.svg",
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Mie_Aceh_with_beef.jpg",
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/da/Tempoyak_Ikan_Patin_2.JPG",
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Pempek_Kuah_Cuko.jpg",
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/20/Tekwan.JPG",
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Arsik_Ikan_Mas_2.jpg",
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Soto_Banjar_ketupat.jpg",
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Ayam-cincane.jpg",
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Ayam_bakar_khas_Taliwang_2.JPG",
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Ayam_Betutu.jpg",
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Satay_Lilit.jpg",
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c8/Kuliner_Coto_Makassar.jpg",
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/01/Kakap_Woku.JPG",
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/93/Tinutuan_bubur_Manado.JPG",
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Binte_Biluhuta.jpg",
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/01/Papeda%2C_Kuah_Kuning%2C_Ikan_Tude_Bakar_2.jpg",
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7e/Rawon_Setan.jpg",
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/31/Nasi_Gudeg.jpg",
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Soto_Betawi_Jakarta_Street_Side_Food.JPG",
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Karedok_platter.JPG",
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Nasi_Liwet_Solo.jpg",
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
        "text": "Masak beras dengan santan."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Satay_Lilit.jpg",
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
        "text": "Lilitkan ayam pada batang serai."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/57/Ayam_penyet.JPG",
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
        "text": "Goreng ayam lalu penyet dengan sambal."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Gurame_bakar_kecap_1.JPG",
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
        "text": "Bakar ikan dengan bumbu khas Jimbaran."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/11/Soto_Kudus_nasi.JPG",
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
        "text": "Rebus kaldu ayam dan sajikan dengan kuah bening."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Rujak_Cingur.jpg",
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
        "text": "Campur cingur dengan sayuran dan bumbu petis."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/82/Mie_Celor.jpg",
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
        "text": "Siram mie dengan kuah santan kaldu ebi."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/24/Ayam_geprek.png",
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
        "text": "Geprek ayam dengan sambal bawang."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/41/Sate_Padang2.JPG",
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
        "text": "Rebus daging dan siram dengan kuah kental kuning."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/29/Pecel_Lele_1.JPG",
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
        "text": "Goreng lele dan sajikan dengan sambal tomat."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Nasi_uduk_netherlands.jpg",
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
        "text": "Masak beras dengan santan dan serai."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Seblak_3.jpg",
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
        "text": "Rebus kerupuk dengan bumbu kencur pedas."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/08/Babi_guling.jpg",
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
        "text": "Guling babi utuh dengan bumbu rempah Bali."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/58/40._Selat_1.jpg",
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
        "text": "Rebus daging dengan kecap dan bumbu rempah."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Pindang_Patin_Palembang_2.jpg",
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
        "text": "Masak kuah pindang asam segar lalu masukkan patin."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Ayam_goreng_kalasan.JPG",
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
        "text": "Ungkep ayam dengan air kelapa lalu goreng."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Ketoprak_Boplo.JPG",
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
        "text": "Campur bahan dengan bumbu kacang bawang putih."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Tongseng_Dish.jpg",
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
        "text": "Tumis dengan bumbu gulai dan kecap."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/16/Sate_taichan_jakarta.jpg",
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
        "text": "Bakar ayam polos dan sajikan dengan sambal rawit."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/84/Soto_Mie_Bogor_2.JPG",
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
        "text": "Rebus kuah kaldu sapi bening dan tuang ke mie."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Indonesian_soup-Empal_Gentong-01.jpg",
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
        "text": "Masak kuah santan kuning dengan daging sapi."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Nasi_Kuning_Ibu_Sulastri.jpg",
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
        "text": "Masak beras dengan santan dan kunyit."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Iga_Penyet.JPG",
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
        "text": "Presto iga lalu goreng, penyet di atas sambal."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Sayur_lodeh.JPG",
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
        "text": "Masak sayuran dalam kuah santan gurih."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Opor_Ayam_Telur_Pindang.JPG",
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
        "text": "Masak ayam dalam kuah santan kuning pucat."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Sate_Buntel.jpg",
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
        "text": "Buntel daging di tusuk sate dan bakar."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Tengkleng.jpg",
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
        "text": "Masak tulang kambing dengan kuah gulai encer."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Asinan_Betawi_2.jpg",
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
        "text": "Campur dengan kuah bumbu kacang asam pedas."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Kerak_telor_Betawi.jpg",
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
        "text": "Panggang di wajan tanpa minyak dengan serundeng."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Gohu_Ikan_in_Ternate.jpg",
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
        "text": "Aduk ikan mentah dengan jeruk cui, daun kemangi, dan kenari."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/96/Empal_Gepuk.jpg",
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
        "text": "Rebus daging, pukul-pukul, dan ungkep dengan bumbu manis guriih lalu goreng."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Soto_Banjar_ketupat.jpg",
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
        "text": "Rebus kaldu dengan rempah kayu manis dan cengkeh."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Masakan_Khas_Kota_Aceh_Ayam_Tangkap.jpg",
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
        "text": "Goreng ayam bersama daun kari, pandan, dan salam kojak."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Cakalang_fufu.JPG",
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
        "text": "Suwir ikan dan tumis dengan sambal rica-rica."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/01/Kakap_Woku.JPG",
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
        "text": "Masak ayam dengan bumbu kuning pedas dan kemangi berlimpah."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Soto_Lamongan.jpg",
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
        "text": "Sajikan soto dengan taburan koya kerupuk udang."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Actstykker_angaaende_cholera%2C_navnlig_epidemien_i_Christiania_i_1850_%28IA_b24748316%29.pdf/page1-775px-Actstykker_angaaende_cholera%2C_navnlig_epidemien_i_Christiania_i_1850_%28IA_b24748316%29.pdf.jpg",
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
        "text": "Bungkus daging cincang dan santan dalam daun pisang lalu kukus."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/70/Sambal_Goreng_Kentang_Kering.jpg",
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
        "text": "Masak krecek dalam kuah santan kemerahan pedas bersama kacang tolo."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Ciri_Khas_Pedagang_Sate_Ayam_Ambal_Kebumen.jpg",
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
        "text": "Sate ayam yang disajikan dengan saus tempe halus sebagai pengganti kacang."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/25/Plate_of_nasi_campur_%28Mandarin_Oriental_Hotel_Mahapahit%2C_Surabaya%2C_Indonesia%29.png",
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
        "text": "Tata nasi putih dengan sate lilit, lawar, ayam betutu, dan sambal matah."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Great_mosque_in_Medan_cropped.jpg",
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
        "text": "Sajikan lontong dengan sayur gurih pedas, tauco, dan teri kacang."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/da/Gulai_ayam.JPG",
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
        "text": "Rebus daun singkong lalu masak dalam kuah gulai encer."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Grombyang_dan_Lontong_Dekem_-_panoramio.jpg",
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
        "text": "Sajikan nasi dengan kuah daging berempah kluwek pucat dan irisan daging besar."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/52/Sate_Maranggi_1.jpg",
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
        "text": "Marinasi daging dengan ketumbar dan kecap lalu bakar. Sajikan tanpa saus kacang."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Lontong_Balap.jpg",
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
        "text": "Siram bahan dengan kuah bening kaldu dan taburan lentho serta sambal petis."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Tumpeng_Kompas_1.jpg",
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
        "text": "Ungkep ayam dengan bumbu santan pedas lalu bakar."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Kupat_Tahu_12_Pas_Padalarang.jpg",
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
        "text": "Siram bahan dengan kuah kacang encer atau kuah kecap bawang merah."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Sop_Konro.JPG",
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
        "text": "Masak iga lama dengan bumbu rempah hitam berbahan kluwek."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Nasi_dibentuk_bulat.jpg",
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
        "text": "Kukus beras campuran jagung, sajikan dengan urapan dan ikan asin."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Pelecing_kangkung.JPG",
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
        "text": "Rebus kangkung, sajikan dengan sambal tomat terasi yang segar pedas."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/db/Krawu_rice.jpg",
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
        "text": "Sajikan nasi dengan suwiran daging empuk, serundeng, dan sambal terasi."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/id/a/a8/Rujak_soto.jpg",
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
        "text": "Tuang kuah soto panas ke atas sayur rujak cingur petis."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Candi_Plaosan_Lor_%28North_Plaosan_Temple%29_from_Klaten%2C_Central_Java%2C_Indonesia_10.jpg",
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
        "text": "Ungkep ayam dengan santan dan rempah lalu panggang."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Katzs_deli_corned_beef.jpg",
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
        "text": "Masak daging lapis dengan bumbu kecap manis legit."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8b/Garang_asem_Pj.JPG",
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
        "text": "Kukus ayam bersama belimbing wuluh dan santan berbungkus daun pisang."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Indonesia_provinces_blank_map.svg",
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
        "text": "Masak ikan asap dalam kuah santan pedas gurih."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/3/34/Tahu_telur_in_Banyuwangi.jpg",
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
        "text": "Goreng tahu dan telur berbumbu lalu siram saus kacang petis."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/58/Ayam_bumbu_rujak.jpg",
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
        "text": "Panggang ayam berbalut bumbu kemerahan manis pedas."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/42/Stamp_of_Indonesia_-_2004_-_Colnect_280263_-_Traditional_Food_-_Kare_rajungan.jpeg",
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
        "text": "Masak rajungan dengan bumbu kare pedas bersantan."
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
        "text": "Remas/bejeg ayam suwir berbumbu bersama nasi dan rempah."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/22/Mie_Kocok_Bandung.jpg",
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
        "text": "Kocok mie lalu siram kuah tulang sapi kental dan potongan kikil."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Sate_Ponorogo.jpg",
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
        "text": "Buntel/lilit sapi cincang dan bakar, siram dengan saus kecap."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Great_mosque_in_Medan_cropped.jpg",
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
        "text": "Siram udang segar dengan kuah kaldu rempah tanpa santan."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/64/Tiwul-hariadhi.jpg",
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
        "text": "Kukus tepung tiwul dan sajikan bersama parutan kelapa / lauk pauk."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/96/Kadaharan_urang_sunda.jpg",
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
        "text": "Beri irisan potongan ketupat, tahu dan telor, lalu siram bumbu kacang kental."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/46/Burgo_1.jpg",
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
        "text": "Siram potongan dadar gulung tepung beras dengan kuah santan dan kaldu ikan."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Orationes_Nicolai_Avancini_in_tres_partes_divisae_quarum_prima_continet_orationes%2C_De_Deo%2C_et_Deohomine%3B_secunda%2C_De_B._Virgine%2C_et_Sanctis_%28IA_bub_gb_EVcTAAAAQAAJ%29.pdf/page1-625px-thumbnail.pdf.jpg",
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
        "text": "Masak nanas dengan bumbu kayu manis, cengkeh dan cuka."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/7/71/Resep_cara_membuat_semur_jengkol_pedas_yang_yummy.jpg",
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
        "text": "Rebus empuk dengan abu, geprek pipih, lalu masak dalam semur kecap pekat."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Pindang_Patin_Palembang_2.jpg",
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
        "text": "Masak iga tulang dengan nanas segar dan tomat ceri serta bumbu pedas asam manis."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Ayam_pop.JPG",
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
        "text": "Ungkep dengan air kelapa pucat, lalu goreng sekilas saja tidak garing."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Kue_pancong_di_pasar_Rantepao.JPG",
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
        "text": "Diamkan adonan pukis sampai mengembang, lalu tuang pada cetakan panas."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/26/Lemper.jpg",
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
        "text": "Kukus ketan dengan santan, isikan ayam suwir, lalu bungkus daun pisang."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/4/44/Jajan_Pasar_in_Jakarta_edit.JPG",
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
        "text": "Kukus adonan hijau pandan lalu timpa dengan adonan putih santan gurih manis."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/54/JackfruitKolak.jpg",
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
        "text": "Bentuk bulat adonan ubi sagu, rebus, lalu siram dengan kuah gula merah santan."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Pempek_Kuah_Cuko.jpg",
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
        "text": "Rebus adonan pempek tanpa ikan ini, lalu goreng dan sajikan dengan cuko merah."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Cireng_di_kafe.jpg",
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
        "text": "Goreng pipih adonan tapioka biang lalu cocol dengan bumbu rujak pedas manis asam."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Sayur_lodeh.JPG",
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
        "text": "Gilas kulit pastel, isikan sayur basah dan telur, jepit ulir pinggirnya dan goreng."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/50/Klepon_Khas_Tulungagung.jpg",
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
        "text": "Isi bulatan ketan hijau pandan dengan irisan gula merah, rebus sampai mengapung, balur parutan kelapa."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Risole2.jpg",
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
        "text": "Gulung isian mayo daging telur di kulit risol, balur tepung roti lalu goreng."
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
        "text": "Kukus adonan pandan beras lalu tuang adonan santan gurih di atasnya."
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
        "text": "Cetak adonan beras hijau pandan di air es, siram kuah santan dan sirup gula merah wangi nangka."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Pedagang_Wedang_Ronde_DiAlun_Alun_Kebumen.jpg/1280px-Pedagang_Wedang_Ronde_DiAlun_Alun_Kebumen.jpg",
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
        "text": "Sajikan bulatan ketan isi kacang kupas dalam kuah jahe gula merah hangat."
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
        "text": "Campur serutan melon dan kelapa dengan perasan jeruk nipis dan sirup melon segar."
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
        "text": "Balut pisang kukus dengan dadar hijau pandan, sajikan dengan bubur sumsum dan sirup pisang ambon merah."
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
    "heroImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bandrek_Bandung.JPG/1280px-Bandrek_Bandung.JPG",
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
        "text": "Rebus jahe memar dan berbagai rempah kayu manis dengan gula merah, bisa disajikan dengan kerukan kelapa."
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
        "text": "Potong kotak adonan hunkwe lapis tiga warna, siram kuah santan dan sirup merah es."
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
        "text": "Rebus atau seduh dedaunan rempah kering dan kayu secang sampai air kemerahan hangat."
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
        "text": "Cetak cendol dari adonan beras hunkwe hijau pekat, sajikan bersama santan encer dan tebalnya kinca gula aren."
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
        "text": "Masak perlahan santan bersama gula aren, sedikit jahe, dan sejumput bubuk kopi lalu saring."
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
        "text": "Kocok kuning telur dan gula sampai mengembang/kental, seduh dengan teh panas pekat dan kucuran nipis."
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
        "text": "Rebus ubi dan pandan dengan gula aren sampai empuk, masukkan pisang matang dan santan kental, aduk mendidih."
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
        "text": "Potong dadu semua buah, campur dengan bongkahan es, tuang sirup merah dan susu kental pekat."
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
        "text": "Sajikan potongan buah dan jelly kenyal dengan kuah susu evaporasi kental yang manis gurih dingin."
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
        "text": "Buat bulatan kenyal dari ubi ungu, rebus merapung lalu padukan dengan kinca gula merah dan saus santan gurih."
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
        "text": "Tumis bawang bombay, masukkan ayam cepat matang, bumbui kecap tebal berkaramel, masak sebentar di waktu sahur."
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
        "text": "Orak arik telur lembut (jangan terlalu kering), angkat. Tumis potongan tomat sampai layu berair, masukkan kembali telur lalu aduk rata saus tiram."
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
        "text": "Masak ayam kampung perlahan di bumbu kuning kuah santan cair memanjang sampai empuk, kentalkan dengan santan tebal di akhir."
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
        "text": "Goreng dadu kentang dan rebus ati ampela. Tumis bumbu pedas manis pekat bersantan, masukkan hati dan kentang bersama petai."
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
        "text": "Tata semua isian campur kaya tekstur, taburi es serut gunung lantas guyur dengan sirup frambozen dan kental manis."
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
        "text": "Rebus sayuran padat dan sosis secara bertahap dalam bening kaldu sedap bernuansa pala dan merica untuk menyegarkan perut sahur."
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


