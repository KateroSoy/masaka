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
import { motion } from 'motion/react';

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

  const recommended = recipes.slice(0, 4);
  const quickMeals = recipes.filter(r => r.totalTimeMin <= 30);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pb-6 pt-6 px-4 max-w-md md:max-w-2xl lg:max-w-4xl mx-auto min-h-full bg-stone-50"
    >
      <header className="mb-6">
        <motion.h1 variants={itemVariants} className="text-2xl font-bold text-stone-900 mb-1">Masak apa hari ini?</motion.h1>
        <motion.p variants={itemVariants} className="text-stone-500 text-sm">Temukan resep Nusantara favoritmu.</motion.p>
      </header>

      <motion.form variants={itemVariants} onSubmit={handleSearch} className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5" />
        <Input
          name="q"
          placeholder="Cari rendang, soto, sambal..."
          className="pl-12 bg-white shadow-sm border-stone-200 rounded-2xl h-14 focus:ring-orange-500/20"
        />
      </motion.form>

      <motion.div variants={itemVariants} className="flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide -mx-4 px-4">
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
      </motion.div>

      {!isLifetimeUnlocked && (
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl p-5 text-white mb-8 shadow-lg shadow-orange-200 flex justify-between items-center cursor-pointer"
          onClick={() => navigate('/paywall')}
        >
          <div>
            <h3 className="font-bold text-lg mb-1">Buka Semua Resep</h3>
            <p className="text-orange-100 text-sm">Akses selamanya, tanpa langganan.</p>
          </div>
          <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
            <ChevronRight className="w-6 h-6" />
          </div>
        </motion.div>
      )}

      <motion.section variants={itemVariants} className="mb-8">
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
      </motion.section>

      <motion.section variants={itemVariants} className="mb-8">
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
      </motion.section>

      <motion.section variants={itemVariants} className="mb-8">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-stone-700" />
            Masakan Daerah
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {['Sumatera', 'Jawa', 'Bali-Nusra', 'Sulawesi'].map(region => (
            <motion.div
              whileHover={{ y: -2 }}
              key={region}
              onClick={() => navigate(`/search?region=${region}`)}
              className="bg-white border border-stone-200 rounded-xl p-4 flex items-center justify-center font-medium text-stone-700 shadow-sm cursor-pointer hover:border-orange-300 hover:text-orange-600 transition-colors"
            >
              {region}
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="mb-8 p-6 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl text-white shadow-xl shadow-indigo-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <div className="relative z-10">
          <h2 className="text-xl font-bold flex items-center gap-2 mb-2">
            <Sparkles className="w-6 h-6 text-yellow-300 fill-yellow-300" />
            Tanya AI Resep
          </h2>
          <p className="text-indigo-100 text-sm mb-5 leading-relaxed">
            Punya bahan di kulkas tapi bingung masak apa? Tanya AI untuk ide resep Nusantara yang pas!
          </p>

          <div className="flex gap-2">
            <Input
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              placeholder="Misal: Ada ayam dan santan..."
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-indigo-200 focus:bg-white/20 focus:border-white/40 h-12"
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleAiSuggest();
              }}
            />
            <Button
              onClick={handleAiSuggest}
              disabled={isAiLoading || !aiPrompt.trim()}
              className="bg-white text-indigo-600 hover:bg-stone-100 px-6 font-bold h-12 transition-transform active:scale-95 shrink-0"
            >
              {isAiLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Tanya'}
            </Button>
          </div>

          {aiSuggestion && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="mt-6 p-4 bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 text-sm text-white leading-relaxed"
            >
              <p className="font-semibold text-xs uppercase tracking-wider text-indigo-200 mb-1">Saran AI:</p>
              {aiSuggestion}
            </motion.div>
          )}
        </div>
      </motion.section>
    </motion.div>
  );
}
