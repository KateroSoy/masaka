import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Flame, Users, Bookmark, ShoppingBag, Share2, ChevronLeft, Play, Info, CheckCircle2, Pause, X, Copy, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { recipes } from '../data/recipes';
import { useAppStore } from '../store/useAppStore';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { RecipeCard } from '../components/RecipeCard';
import { cn } from '../utils/cn';

export function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const recipe = recipes.find(r => r.id === id);

  const { savedRecipeIds, toggleSaveRecipe, addRecipeToShoppingList, isLifetimeUnlocked } = useAppStore();

  const [servings, setServings] = useState(recipe?.servingsDefault || 1);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Timer State
  const [activeTimer, setActiveTimer] = useState<{ id: number, timeLeft: number, isRunning: boolean } | null>(null);
  const [showCustomTimer, setShowCustomTimer] = useState(false);
  const [showNutritionDetail, setShowNutritionDetail] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const relatedRecipes = useMemo(() => {
    if (!recipe) return [];

    // Calculate a score for each recipe
    const scoredRecipes = recipes
      .filter(r => r.id !== recipe.id)
      .map(r => {
        let score = 0;

        // 1. Shared ingredients (highest priority)
        const currentIngredients = recipe.ingredients.map(i => i.name.toLowerCase().trim());
        const sharedIngredients = r.ingredients.filter(i => {
          const ingName = i.name.toLowerCase().trim();
          if (ingName.length < 3) return false; // Ignore very short words like "air" or "garam" if we want, but let's keep it simple
          return currentIngredients.some(ci => ci.includes(ingName) || ingName.includes(ci));
        }).length;
        score += sharedIngredients * 20; // Increased priority for ingredients

        // 2. Same category
        if (r.category === recipe.category) {
          score += 5;
        }

        // 3. Shared tags
        const sharedTags = r.tags.filter(t => recipe.tags.includes(t)).length;
        score += sharedTags * 3;

        return { recipe: r, score };
      });

    // Sort by score descending and take top 3
    return scoredRecipes
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(sr => sr.recipe);
  }, [recipe]);

  useEffect(() => {
    if (activeTimer?.isRunning && activeTimer.timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setActiveTimer(prev => prev ? { ...prev, timeLeft: prev.timeLeft - 1 } : null);
      }, 1000);
    } else if (activeTimer?.timeLeft === 0 && activeTimer.isRunning) {
      setActiveTimer(prev => prev ? { ...prev, isRunning: false } : null);
      if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
      showNotification('Waktu habis! ⏰');
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeTimer?.isRunning, activeTimer?.timeLeft]);

  const startTimer = (seconds: number, stepIdx: number) => {
    setActiveTimer({ id: stepIdx, timeLeft: seconds, isRunning: true });
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (!recipe) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <h2 className="text-xl font-bold mb-2">Resep tidak ditemukan</h2>
        <Button onClick={() => navigate(-1)}>Kembali</Button>
      </div>
    );
  }

  const isSaved = savedRecipeIds.includes(recipe.id);
  const servingsRatio = servings / recipe.servingsDefault;

  const handleSave = () => {
    toggleSaveRecipe(recipe.id);
    showNotification(isSaved ? 'Dihapus dari Simpanan' : 'Disimpan ke Favorit');
  };

  const handleAddToShoppingList = () => {
    if (!isLifetimeUnlocked && recipe.isPremium) {
      navigate('/paywall');
      return;
    }
    addRecipeToShoppingList(recipe.id, recipe.ingredients, servingsRatio);
    showNotification('Masuk ke Belanja ✅');
  };

  const handleStartCooking = () => {
    if (!isLifetimeUnlocked && recipe.isPremium) {
      navigate('/paywall');
      return;
    }
    navigate(`/cook/${recipe.id}?servings=${servings}`);
  };

  const handleCopyIngredients = () => {
    const textToCopy = `Bahan-bahan ${recipe.title} (${servings} porsi):\n` +
      recipe.ingredients.map(ing => `- ${ing.name}: ${+(ing.qty * servingsRatio).toFixed(1)} ${ing.unit}${ing.notes ? ` (${ing.notes})` : ''}`).join('\n');

    navigator.clipboard.writeText(textToCopy)
      .then(() => showNotification('Bahan disalin ke clipboard! 📋'))
      .catch(() => showNotification('Gagal menyalin bahan ❌'));
  };

  const showNotification = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleShare = async () => {
    if (navigator.share && recipe) {
      try {
        await navigator.share({
          title: `Resep ${recipe.title} di Masaka`,
          text: `Coba bikin ${recipe.title} yang enak banget ini!`,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Share failed:', err);
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      setToastMessage('Link resep berhasil disalin! 🔗');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <div className="pb-24 bg-white min-h-screen max-w-md md:max-w-2xl lg:max-w-4xl mx-auto relative overflow-hidden">
      {/* Header Image & Back Button */}
      <div className="relative h-72 w-full bg-stone-200">
        <img
          src={recipe.heroImageUrl}
          alt={recipe.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <button
          onClick={() => navigate(-1)}
          className="absolute top-safe-4 left-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors mt-4"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex gap-2 mb-2">
            <Badge className="bg-orange-500 text-white border-none">{recipe.category}</Badge>
            {recipe.tags.includes('Pedas') && (
              <Badge className="bg-red-500 text-white border-none">Pedas</Badge>
            )}
          </div>
          <h1 className="text-2xl font-bold text-white leading-tight">{recipe.title}</h1>
        </div>
      </div>

      <div className="p-4">
        {/* Quick Info Row */}
        <div className="flex justify-between items-center py-4 border-b border-stone-100 mb-4">
          <div className="flex flex-col items-center gap-1">
            <Clock className="w-5 h-5 text-stone-400" />
            <span className="text-xs font-medium text-stone-600">{recipe.totalTimeMin} mnt</span>
          </div>
          <div className="w-px h-8 bg-stone-200" />
          <div className="flex flex-col items-center gap-1">
            <Users className="w-5 h-5 text-stone-400" />
            <span className="text-xs font-medium text-stone-600">{recipe.servingsDefault} porsi</span>
          </div>
          <div className="w-px h-8 bg-stone-200" />
          <div className="flex flex-col items-center gap-1">
            <Flame className="w-5 h-5 text-orange-500" />
            <span className="text-xs font-medium text-stone-600">{recipe.difficulty}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 mb-6">
          <div className="flex gap-3">
            <Button
              className="flex-1 h-12 rounded-xl text-base font-bold shadow-sm"
              onClick={handleStartCooking}
            >
              <Play className="w-5 h-5 mr-2 fill-current" />
              Mulai Mode Masak
            </Button>
            <Button
              variant="outline"
              className="w-12 h-12 rounded-xl shadow-sm p-0 flex items-center justify-center border-stone-200 shrink-0"
              onClick={() => setShowCustomTimer(true)}
            >
              <Clock className="w-5 h-5 text-stone-600" />
            </Button>
          </div>
          <Button
            variant="outline"
            className="w-full h-12 rounded-xl text-stone-600 border-stone-200 shadow-sm font-medium"
            onClick={handleCopyIngredients}
          >
            <Copy className="w-4 h-4 mr-2" />
            Salin Bahan
          </Button>
        </div>

        <div className="flex gap-4 justify-around mb-8">
          <button onClick={handleSave} className="flex flex-col items-center gap-1.5 text-stone-500 hover:text-orange-500 transition-colors">
            <div className={cn("p-3 rounded-full bg-stone-50", isSaved && "bg-orange-50 text-orange-500")}>
              <Bookmark className={cn("w-5 h-5", isSaved && "fill-current")} />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider">Simpan</span>
          </button>
          <button onClick={handleAddToShoppingList} className="flex flex-col items-center gap-1.5 text-stone-500 hover:text-green-600 transition-colors">
            <div className="p-3 rounded-full bg-stone-50">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider">Belanja</span>
          </button>
          <button onClick={handleShare} className="flex flex-col items-center gap-1.5 text-stone-500 hover:text-blue-500 transition-colors">
            <div className="p-3 rounded-full bg-stone-50">
              <Share2 className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider">Bagikan</span>
          </button>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-stone-900 mb-2">Tentang Resep Ini</h2>
          <p className="text-stone-600 leading-relaxed text-sm">
            {recipe.description}
          </p>
        </div>

        {/* Ingredients */}
        <section className="mb-8">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-xl font-bold text-stone-900">Bahan-bahan</h2>

            {/* Servings Adjuster */}
            <div className="flex items-center bg-stone-100 rounded-full p-1">
              <button
                onClick={() => setServings(Math.max(1, servings - 1))}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm text-stone-600 font-medium"
              >
                -
              </button>
              <span className="w-12 text-center text-sm font-bold text-stone-900">
                {servings}
              </span>
              <button
                onClick={() => setServings(Math.min(20, servings + 1))}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm text-stone-600 font-medium"
              >
                +
              </button>
            </div>
          </div>

          <ul className="space-y-3">
            {recipe.ingredients.map((ing, idx) => (
              <li key={idx} className="flex justify-between items-center py-2 border-b border-stone-100 last:border-0">
                <div className="flex-1">
                  <span className="text-stone-800 font-medium text-sm">{ing.name}</span>
                  {ing.notes && <p className="text-xs text-stone-500 mt-0.5">{ing.notes}</p>}
                </div>
                <div className="text-right font-semibold text-stone-900 text-sm">
                  {+(ing.qty * servingsRatio).toFixed(1)} {ing.unit}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Tips Anti-Gagal */}
        {recipe.tips.length > 0 && (
          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4 mb-8">
            <h3 className="flex items-center gap-2 font-bold text-orange-800 mb-3 text-sm">
              <Info className="w-4 h-4" />
              Tips Anti-Gagal
            </h3>
            <ul className="space-y-2">
              {recipe.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-orange-900/80">
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Steps Preview */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-stone-900 mb-4">Langkah-langkah</h2>
          <div className="space-y-4">
            {recipe.steps.map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-stone-100 text-stone-600 font-bold flex items-center justify-center text-sm shrink-0">
                    {idx + 1}
                  </div>
                  {idx !== recipe.steps.length - 1 && (
                    <div className="w-px h-full bg-stone-100 my-1" />
                  )}
                </div>
                <div className="pb-4 pt-1">
                  <p className="text-stone-700 text-sm leading-relaxed">{step.text}</p>
                  {step.timerSuggestedSec && (
                    <button
                      onClick={() => startTimer(step.timerSuggestedSec!, idx)}
                      className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 bg-orange-100 hover:bg-orange-200 rounded-md text-xs font-medium text-orange-700 transition-colors"
                    >
                      <Clock className="w-3.5 h-3.5" />
                      {Math.round(step.timerSuggestedSec / 60)} menit
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <Button
            className="w-full h-14 mt-6 rounded-2xl text-lg font-bold shadow-sm bg-orange-500 hover:bg-orange-600 text-white"
            onClick={handleStartCooking}
          >
            <Play className="w-6 h-6 mr-2 fill-current" />
            Mulai Mode Masak Sekarang
          </Button>
        </section>

        {/* Nutrition Info */}
        <section className="mb-8 relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 border border-green-100">
          {/* Decorative Stickers */}
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [12, 15, 12] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 text-6xl opacity-20"
          >
            🥑
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [-12, -15, -12] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-4 text-6xl opacity-20"
          >
            🥕
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [45, 50, 45] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/2 right-4 text-4xl opacity-10"
          >
            🥦
          </motion.div>

          <div className="relative z-10">
            <h2 className="text-xl font-bold text-stone-900 mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-2xl inline-block"
                >
                  🥗
                </motion.span>
                Informasi Nilai Gizi
              </div>
            </h2>

            {recipe.nutrition ? (
              <div className="space-y-4">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-20px" }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } }
                  }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-3"
                >
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="text-2xl mb-1"
                    >
                      🔥
                    </motion.div>
                    <div className="text-xs text-stone-500 mb-1 font-medium uppercase tracking-wider">Kalori</div>
                    <div className="font-bold text-stone-900 text-lg">{Math.round(recipe.nutrition.calories * servingsRatio)}<span className="text-xs font-normal text-stone-500 ml-0.5">kkal</span></div>
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <motion.div
                      animate={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                      className="text-2xl mb-1"
                    >
                      🥩
                    </motion.div>
                    <div className="text-xs text-stone-500 mb-1 font-medium uppercase tracking-wider">Protein</div>
                    <div className="font-bold text-stone-900 text-lg">{Math.round(recipe.nutrition.protein * servingsRatio)}<span className="text-xs font-normal text-stone-500 ml-0.5">g</span></div>
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <motion.div
                      animate={{ rotate: [0, 15, -5, 10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="text-2xl mb-1 origin-bottom"
                    >
                      🌾
                    </motion.div>
                    <div className="text-xs text-stone-500 mb-1 font-medium uppercase tracking-wider">Karbo</div>
                    <div className="font-bold text-stone-900 text-lg">{Math.round(recipe.nutrition.carbs * servingsRatio)}<span className="text-xs font-normal text-stone-500 ml-0.5">g</span></div>
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="text-2xl mb-1"
                    >
                      🥑
                    </motion.div>
                    <div className="text-xs text-stone-500 mb-1 font-medium uppercase tracking-wider">Lemak</div>
                    <div className="font-bold text-stone-900 text-lg">{Math.round(recipe.nutrition.fat * servingsRatio)}<span className="text-xs font-normal text-stone-500 ml-0.5">g</span></div>
                  </motion.div>
                </motion.div>

                <Button
                  variant="outline"
                  className="w-full bg-white/50 hover:bg-white border-green-200 text-green-700 h-10 mt-2"
                  onClick={() => setShowNutritionDetail(true)}
                >
                  Lihat Detail Gizi Lengkap
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            ) : (
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-white shadow-sm">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-4xl mb-3"
                >
                  🤔
                </motion.div>
                <p className="text-sm text-stone-600 font-medium">
                  Informasi nilai gizi belum tersedia untuk resep ini.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Related Recipes */}
        {relatedRecipes.length > 0 && (
          <section className="mb-8 pt-6 border-t border-stone-100">
            <h2 className="text-xl font-bold text-stone-900 mb-4">Resep Terkait</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {relatedRecipes.map(related => (
                <RecipeCard key={related.id} recipe={related} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-stone-900 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg z-50 animate-in fade-in slide-in-from-bottom-4">
          {toastMessage}
        </div>
      )}

      {/* Floating Timer */}
      {activeTimer && (
        <div className="fixed bottom-28 right-4 bg-stone-900 text-white p-4 rounded-2xl shadow-xl z-40 flex items-center gap-4 animate-in slide-in-from-bottom-10">
          <div className="flex flex-col">
            <span className="text-[10px] text-stone-400 font-medium uppercase tracking-wider mb-0.5">Timer</span>
            <div className="text-2xl font-mono font-light text-orange-500 leading-none">
              {formatTime(activeTimer.timeLeft)}
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTimer(prev => prev ? { ...prev, isRunning: !prev.isRunning } : null)}
              className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-stone-700"
            >
              {activeTimer.isRunning ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </button>
            <button
              onClick={() => setActiveTimer(null)}
              className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-stone-700 text-stone-400"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Custom Timer Bottom Sheet */}
      {showCustomTimer && (
        <div className="fixed inset-0 z-[60] flex items-end bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md md:max-w-2xl lg:max-w-4xl mx-auto rounded-t-3xl p-6 pb-safe">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-stone-900">Set Timer</h3>
              <button onClick={() => setShowCustomTimer(false)} className="p-2 bg-stone-100 rounded-full text-stone-500">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[5, 10, 15, 20, 30, 45, 60].map(m => (
                <Button
                  key={m}
                  variant="outline"
                  className="h-12 rounded-xl"
                  onClick={() => {
                    startTimer(m * 60, -1);
                    setShowCustomTimer(false);
                  }}
                >
                  {m} Menit
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Nutrition Detail Modal */}
      {showNutritionDetail && recipe.nutrition && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            <div className="p-4 border-b border-stone-100 flex justify-between items-center bg-green-50">
              <h3 className="font-bold text-stone-900 flex items-center gap-2">
                <span className="text-xl">🥗</span> Detail Nilai Gizi
              </h3>
              <button
                onClick={() => setShowNutritionDetail(false)}
                className="p-2 bg-white rounded-full text-stone-500 hover:text-stone-700 shadow-sm"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-100">
                <span className="text-stone-500 font-medium">Takaran Saji</span>
                <span className="font-bold text-stone-900">{servings} Porsi</span>
              </div>

              <div className="flex justify-between items-end mb-2">
                <span className="text-lg font-bold text-stone-900">Total Kalori</span>
                <span className="text-2xl font-black text-stone-900">{Math.round(recipe.nutrition.calories * servingsRatio)} kkal</span>
              </div>

              <div className="h-4 bg-stone-100 rounded-full mb-6 overflow-hidden flex">
                <div className="bg-rose-400 h-full" style={{ width: `${(recipe.nutrition.protein * 4 / recipe.nutrition.calories) * 100}%` }} />
                <div className="bg-amber-400 h-full" style={{ width: `${(recipe.nutrition.carbs * 4 / recipe.nutrition.calories) * 100}%` }} />
                <div className="bg-emerald-400 h-full" style={{ width: `${(recipe.nutrition.fat * 9 / recipe.nutrition.calories) * 100}%` }} />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-stone-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <span className="font-medium text-stone-700">Protein</span>
                  </div>
                  <div className="font-bold text-stone-900">{Math.round(recipe.nutrition.protein * servingsRatio)}g</div>
                </div>

                <div className="flex justify-between items-center p-3 bg-stone-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="font-medium text-stone-700">Karbohidrat</span>
                  </div>
                  <div className="font-bold text-stone-900">{Math.round(recipe.nutrition.carbs * servingsRatio)}g</div>
                </div>

                <div className="flex justify-between items-center p-3 bg-stone-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="font-medium text-stone-700">Lemak</span>
                  </div>
                  <div className="font-bold text-stone-900">{Math.round(recipe.nutrition.fat * servingsRatio)}g</div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-orange-50 rounded-xl flex items-start gap-3">
                <Info className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <p className="text-xs text-orange-800 leading-relaxed">
                  % AKG (Angka Kecukupan Gizi) dapat berbeda-beda tergantung kebutuhan kalori harian Anda. Nilai gizi di atas adalah estimasi per porsi resep.
                </p>
              </div>
            </div>

            <div className="p-4 border-t border-stone-100">
              <Button className="w-full h-12 rounded-xl" onClick={() => setShowNutritionDetail(false)}>
                Tutup
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
