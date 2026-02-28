import React, { useState } from 'react';
import { Search, Flame, Clock, Utensils, ChevronRight, Sparkles, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { recipes } from '../data/recipes';
import { RecipeCard } from '../components/RecipeCard';
import { Input } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { useAppStore } from '../store/useAppStore';
import { GoogleGenAI } from '@google/genai';

export function Home() {
  const navigate = useNavigate();
  const { isLifetimeUnlocked } = useAppStore();
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiSuggestion, setAiSuggestion] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('q');
    if (query) {
      navigate(`/search?q=${query}`);
    }
  };

  const handleAiSuggest = async () => {
    if (!aiPrompt.trim()) return;

    setIsAiLoading(true);
    setAiSuggestion('');

    try {
      const apiKey = (import.meta as any).env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY || '';
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Saya ingin memasak hari ini. Bahan atau keinginan saya: "${aiPrompt}". Berikan 1 saran masakan Nusantara yang cocok, singkat saja (maksimal 2 kalimat), dan sebutkan nama masakannya dengan jelas.`,
      });

      setAiSuggestion(response.text || 'Maaf, saya tidak bisa memberikan saran saat ini.');
    } catch (error) {
      console.error('Error generating AI suggestion:', error);
      setAiSuggestion('Terjadi kesalahan saat meminta saran. Coba lagi nanti.');
    } finally {
      setIsAiLoading(false);
    }
  };

  const quickFilters = ['Ramadhan', 'Takjil', 'Mudah', 'Hemat', 'Pedas', 'Tanpa Santan', 'Ayam', 'Ikan', 'Sayur'];

  const recommended = recipes.slice(0, 3);
  const popular = recipes.slice(3, 5);
  const quickMeals = recipes.filter(r => r.totalTimeMin <= 30);

  return (
    <div className="pb-24 pt-6 px-4 max-w-md md:max-w-2xl lg:max-w-4xl mx-auto min-h-screen bg-stone-50">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-stone-900 mb-1">Masak apa hari ini?</h1>
        <p className="text-stone-500 text-sm">Temukan resep Nusantara favoritmu.</p>
      </header>

      <form onSubmit={handleSearch} className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5" />
        <Input
          name="q"
          placeholder="Cari rendang, soto, sambal..."
          className="pl-12 bg-white shadow-sm border-stone-200 rounded-2xl h-14"
        />
      </form>

      <div className="flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide -mx-4 px-4">
        {quickFilters.map((filter) => (
          <Badge
            key={filter}
            variant="outline"
            className="whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full cursor-pointer hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-colors"
            onClick={() => navigate(`/search?tag=${filter}`)}
          >
            {filter}
          </Badge>
        ))}
      </div>

      {!isLifetimeUnlocked && (
        <div className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl p-5 text-white mb-8 shadow-md flex justify-between items-center cursor-pointer" onClick={() => navigate('/paywall')}>
          <div>
            <h3 className="font-bold text-lg mb-1">Buka Semua Resep</h3>
            <p className="text-orange-100 text-sm">Akses selamanya, tanpa langganan.</p>
          </div>
          <div className="bg-white/20 p-2 rounded-full">
            <ChevronRight className="w-6 h-6" />
          </div>
        </div>
      )}

      <section className="mb-8">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <Flame className="w-5 h-5 text-orange-500" />
            Rekomendasi Hari Ini
          </h2>
          <Link to="/search" className="text-sm font-medium text-orange-600">Lihat semua</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recommended.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <Clock className="w-5 h-5 text-green-600" />
            30 Menit Jadi
          </h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x">
          {quickMeals.map(recipe => (
            <div key={recipe.id} className="min-w-[160px] snap-start">
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-stone-700" />
            Masakan Daerah
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['Sumatera', 'Jawa', 'Bali-Nusra', 'Sulawesi'].map(region => (
            <div
              key={region}
              onClick={() => navigate(`/search?region=${region}`)}
              className="bg-white border border-stone-200 rounded-xl p-4 flex items-center justify-center font-medium text-stone-700 shadow-sm cursor-pointer hover:border-orange-300 hover:text-orange-600 transition-colors"
            >
              {region}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-stone-700" />
            Kategori Resep
          </h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-7 gap-3">
          {['Lauk', 'Utama', 'Sayur', 'Sup', 'Sambal', 'Cemilan', 'Minuman'].map(category => (
            <div
              key={category}
              onClick={() => navigate(`/search?category=${category}`)}
              className="bg-white border border-stone-200 rounded-xl p-3 flex flex-col items-center justify-center font-medium text-stone-700 shadow-sm cursor-pointer hover:border-orange-300 hover:text-orange-600 transition-colors text-sm text-center leading-tight"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-indigo-900 flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-indigo-500" />
            Masak apa hari ini?
          </h2>
          <p className="text-sm text-indigo-700/80 mb-4">
            Tanya AI untuk saran resep berdasarkan bahan yang kamu punya.
          </p>

          <div className="flex gap-2">
            <Input
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              placeholder="Misal: Ada ayam dan santan..."
              className="flex-1 bg-white border-indigo-200 focus:border-indigo-400 focus:ring-indigo-400"
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleAiSuggest();
              }}
            />
            <Button
              onClick={handleAiSuggest}
              disabled={isAiLoading || !aiPrompt.trim()}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 shrink-0"
            >
              {isAiLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Tanya'}
            </Button>
          </div>

          {aiSuggestion && (
            <div className="mt-4 p-4 bg-white rounded-xl border border-indigo-100 text-sm text-stone-700 leading-relaxed animate-in fade-in slide-in-from-top-2">
              {aiSuggestion}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
