import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, CheckCircle2, Circle, Clock, X, List, Play, Pause, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { recipes } from '../data/recipes';
import { Button } from '../components/ui/Button';
import { cn } from '../utils/cn';

export function CookingMode() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const servings = Number(searchParams.get('servings')) || 1;

  const recipe = recipes.find(r => r.id === id);
  const servingsRatio = recipe ? servings / recipe.servingsDefault : 1;

  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [showIngredients, setShowIngredients] = useState(false);
  const [showTimerFinished, setShowTimerFinished] = useState(false);

  // Timer State
  const [timeLeft, setTimeLeft] = useState(0);
  const [initialTime, setInitialTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (recipe && recipe.steps[currentStep].timerSuggestedSec) {
      const time = recipe.steps[currentStep].timerSuggestedSec!;
      setTimeLeft(time);
      setInitialTime(time);
      setIsTimerRunning(false);
      setShowTimerFinished(false);
    } else {
      setTimeLeft(0);
      setInitialTime(0);
      setIsTimerRunning(false);
      setShowTimerFinished(false);
    }
  }, [currentStep, recipe]);

  useEffect(() => {
    if (isTimerRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      setShowTimerFinished(true);
      // Play sound or vibrate
      if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
      try {
        const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
        audio.play();
      } catch (e) {
        console.error("Audio play failed", e);
      }
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isTimerRunning, timeLeft]);

  if (!recipe) return null;

  const handleNext = () => {
    if (currentStep < recipe.steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Finish cooking
      navigate(-1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const toggleStepComplete = () => {
    setCompletedSteps(prev =>
      prev.includes(currentStep)
        ? prev.filter(s => s !== currentStep)
        : [...prev, currentStep]
    );
    if (!completedSteps.includes(currentStep) && currentStep < recipe.steps.length - 1) {
      setTimeout(handleNext, 300); // Auto advance after short delay
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const setTimer = (minutes: number) => {
    const newTime = minutes * 60;
    setTimeLeft(newTime);
    setInitialTime(newTime);
    setIsTimerRunning(false);
  };

  const adjustTimer = (seconds: number) => {
    setTimeLeft(prev => Math.max(0, prev + seconds));
    setInitialTime(prev => Math.max(0, prev + seconds));
  };

  const isCompleted = completedSteps.includes(currentStep);
  const progressPercentage = ((currentStep + 1) / recipe.steps.length) * 100;

  // Calculate timer circle progress
  const timerProgress = initialTime > 0 ? ((initialTime - timeLeft) / initialTime) * 100 : 0;
  const circleRadius = 90;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circleCircumference - (timerProgress / 100) * circleCircumference;

  return (
    <div className="fixed inset-0 bg-stone-950 text-white z-50 flex justify-center">
      <div className="w-full h-[100dvh] flex flex-col max-w-md md:max-w-2xl lg:max-w-4xl relative">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-stone-800">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-stone-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
          <div className="text-center">
            <div className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
              Langkah {currentStep + 1} dari {recipe.steps.length}
              {recipe.steps[currentStep].timerSuggestedSec && (
                <Clock className="w-3 h-3 text-orange-500" />
              )}
            </div>
            <div className="font-bold text-sm truncate max-w-[200px]">{recipe.title}</div>
          </div>
          <button onClick={() => setShowIngredients(true)} className="p-2 -mr-2 text-stone-400 hover:text-white">
            <List className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="h-1 w-full bg-stone-800">
          <div
            className="h-full bg-orange-500 transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col relative">
          <motion.div
            animate={isCompleted ? { opacity: 0.5, scale: 0.98 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center space-y-5 my-auto"
          >
            <div className="flex flex-col items-center gap-3">
              <h2 className={cn(
                "text-xl md:text-2xl font-bold leading-tight transition-all duration-300 flex items-center justify-center gap-2",
                isCompleted ? "text-stone-500 line-through decoration-2 decoration-stone-500/50" : "text-white"
              )}>
                <AnimatePresence>
                  {isCompleted && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <CheckCircle2 className="w-8 h-8 text-green-500 shrink-0" />
                    </motion.div>
                  )}
                </AnimatePresence>
                {recipe.steps[currentStep].text}
              </h2>
              {recipe.steps[currentStep].timerSuggestedSec && (
                <div className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors duration-300",
                  isCompleted ? "bg-stone-800 text-stone-500" : "bg-orange-500/10 text-orange-500"
                )}>
                  <Clock className="w-4 h-4" />
                  Estimasi: {Math.round(recipe.steps[currentStep].timerSuggestedSec / 60)} menit
                </div>
              )}
            </div>
            {/* Timer Module */}
            <div className="bg-stone-900 rounded-2xl p-4 border border-stone-800 max-w-[280px] mx-auto relative">
              <div className="relative w-36 h-36 mx-auto mb-4 flex items-center justify-center">
                {/* Progress Circle Background */}
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 224 224">
                  <circle
                    cx="112"
                    cy="112"
                    r={circleRadius}
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-stone-800"
                  />
                  {/* Progress Circle Foreground */}
                  <circle
                    cx="112"
                    cy="112"
                    r={circleRadius}
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={circleCircumference}
                    strokeDashoffset={strokeDashoffset}
                    className="text-orange-500 transition-all duration-1000 ease-linear"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="flex flex-col items-center justify-center z-10">
                  <div className="text-4xl font-mono font-light tracking-tighter text-orange-500">
                    {formatTime(timeLeft)}
                  </div>
                </div>


              </div>

              <div className="flex justify-center gap-4 mb-4">
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className={cn(
                    "w-14 h-14 rounded-full text-white flex items-center justify-center transition-all shadow-xl",
                    isTimerRunning ? "bg-stone-800 hover:bg-stone-700" : "bg-orange-500 hover:bg-orange-600 shadow-orange-500/20"
                  )}
                >
                  {isTimerRunning ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-1" />}
                </button>
                <button
                  onClick={() => {
                    setIsTimerRunning(false);
                    const time = recipe.steps[currentStep].timerSuggestedSec || 0;
                    setTimeLeft(time);
                    setInitialTime(time);
                  }}
                  className="w-14 h-14 rounded-full bg-stone-800 text-stone-400 flex items-center justify-center hover:bg-stone-700 transition-colors shadow-lg"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
              </div>

              <div className="flex justify-center gap-2">
                {[1, 3, 5, 10].map(m => (
                  <button
                    key={m}
                    onClick={() => setTimer(m)}
                    className="px-3 py-1.5 rounded-lg bg-stone-800 text-stone-300 text-xs font-medium hover:bg-stone-700"
                  >
                    +{m}m
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Controls */}
        <div className="p-6 bg-stone-950 border-t border-stone-800 pb-safe flex flex-col gap-4">
          {/* Persistent Timer Controls */}
          {recipe.steps[currentStep].timerSuggestedSec && (
            <div className="flex items-center justify-between bg-stone-900 border border-stone-800 rounded-2xl p-4">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
                    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-stone-800" />
                    <circle
                      cx="24" cy="24" r="20"
                      stroke="currentColor" strokeWidth="4" fill="transparent"
                      strokeDasharray={125.6}
                      strokeDashoffset={125.6 - (timerProgress / 100) * 125.6}
                      className="text-orange-500 transition-all duration-1000 ease-linear" strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-xs font-mono font-medium text-orange-500">{formatTime(timeLeft)}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">Timer Langkah</span>
                  <span className="text-xs text-stone-400">Sisa waktu</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors"
                >
                  {isTimerRunning ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                </button>
                <button
                  onClick={() => {
                    setIsTimerRunning(false);
                    const time = recipe.steps[currentStep].timerSuggestedSec || 0;
                    setTimeLeft(time);
                    setInitialTime(time);
                  }}
                  className="w-10 h-10 rounded-full bg-stone-800 text-stone-400 flex items-center justify-center hover:bg-stone-700 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleStepComplete}
            className={cn(
              "w-full h-16 rounded-2xl flex items-center justify-center gap-3 text-lg font-bold mb-6 overflow-hidden relative transition-colors duration-300",
              isCompleted
                ? "bg-stone-800 text-stone-500"
                : "bg-green-600 text-white hover:bg-green-500"
            )}
          >
            <AnimatePresence mode="wait">
              {isCompleted ? (
                <motion.div
                  key="completed"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-6 h-6" />
                  Selesai
                </motion.div>
              ) : (
                <motion.div
                  key="incomplete"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="flex items-center gap-3"
                >
                  <Circle className="w-6 h-6" />
                  Tandai Selesai
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <div className="flex justify-between gap-4">
            <Button
              variant="outline"
              className="flex-1 h-14 border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white"
              onClick={handlePrev}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Sebelumnya
            </Button>
            <Button
              className="flex-1 h-14 bg-stone-800 text-white hover:bg-stone-700"
              onClick={handleNext}
            >
              {currentStep === recipe.steps.length - 1 ? 'Selesai Masak' : 'Berikutnya'}
              <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </div>

        {/* Ingredients Bottom Sheet */}
        {showIngredients && (
          <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-stone-900 w-full max-w-md md:max-w-2xl lg:max-w-4xl mx-auto rounded-t-3xl p-6 pb-safe max-h-[70vh] flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Bahan-bahan</h3>
                <button onClick={() => setShowIngredients(false)} className="p-2 bg-stone-800 rounded-full text-stone-400">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="overflow-y-auto flex-1 pr-2">
                <ul className="space-y-4">
                  {recipe.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex justify-between items-center border-b border-stone-800 pb-3 last:border-0">
                      <span className="text-stone-300">{ing.name}</span>
                      <span className="font-semibold text-white">
                        {+(ing.qty * servingsRatio).toFixed(1)} {ing.unit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Timer Finished Modal */}
        {showTimerFinished && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-300">
            <div className="bg-stone-900 border border-orange-500/30 w-full max-w-sm rounded-3xl p-8 text-center shadow-2xl shadow-orange-500/20 animate-in zoom-in-95 duration-300">
              <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-orange-500/20 rounded-full animate-ping" />
                <Clock className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Waktu Habis!</h3>
              <p className="text-stone-400 mb-8">Langkah ini sudah selesai.</p>
              <Button
                className="w-full h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-lg font-bold"
                onClick={() => setShowTimerFinished(false)}
              >
                Oke, Lanjut
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
