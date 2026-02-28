import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BottomNav } from './components/BottomNav';
import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { RecipeDetail } from './pages/RecipeDetail';
import { CookingMode } from './pages/CookingMode';
import { Saved } from './pages/Saved';
import { ShoppingList } from './pages/ShoppingList';
import { Profile } from './pages/Profile';
import { Paywall } from './pages/Paywall';

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-orange-200">
      {children}
      <BottomNav />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout><Home /></AppLayout>} />
        <Route path="/search" element={<AppLayout><Search /></AppLayout>} />
        <Route path="/saved" element={<AppLayout><Saved /></AppLayout>} />
        <Route path="/shopping" element={<AppLayout><ShoppingList /></AppLayout>} />
        <Route path="/profile" element={<AppLayout><Profile /></AppLayout>} />
        <Route path="/recipe/:id" element={<AppLayout><RecipeDetail /></AppLayout>} />

        {/* Fullscreen Routes without BottomNav */}
        <Route path="/cook/:id" element={<CookingMode />} />
        <Route path="/paywall" element={<Paywall />} />
      </Routes>
    </Router>
  );
}
