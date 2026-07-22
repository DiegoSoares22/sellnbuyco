import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Inicializar o tema
  useEffect(() => {
    const saved = localStorage.getItem("sellnbuy_theme");
    const initialDark = saved !== "light";
    setIsDark(initialDark);
    
    const html = document.documentElement;
    if (initialDark) {
      html.classList.add("dark");
      html.classList.remove("light");
    } else {
      html.classList.add("light");
      html.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const nextDark = !isDark;
    setIsDark(nextDark);
    
    const html = document.documentElement;
    if (nextDark) {
      html.classList.add("dark");
      html.classList.remove("light");
      localStorage.setItem("sellnbuy_theme", "dark");
    } else {
      html.classList.add("light");
      html.classList.remove("dark");
      localStorage.setItem("sellnbuy_theme", "light");
    }
    
    // Cooldown de 1.5s
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1500);
  };

  return (
    <button
      onClick={toggleTheme}
      disabled={isTransitioning}
      className={`
        relative w-9 h-9 rounded-full flex items-center justify-center
        bg-secondary border border-border
        hover:border-amber-500/50 hover:bg-muted
        transition-all duration-300 shadow-sm
        ${isTransitioning ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
      aria-label="Alternar tema"
    >
      <div className={`
        transition-transform duration-500 ease-in-out
        ${isTransitioning ? "rotate-180 scale-75" : "rotate-0 scale-100"}
      `}>
        {isDark ? (
          <Sun className="h-4 w-4 text-amber-400" />
        ) : (
          <Moon className="h-4 w-4 text-slate-400" />
        )}
      </div>
      
      {/* Indicador de cooldown sutil */}
      {isTransitioning && (
        <div className="absolute inset-0 rounded-full border-2 border-amber-500/30 animate-ping" />
      )}
    </button>
  );
}
