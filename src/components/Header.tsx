import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n";

export default function Header() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { t, lang, withLang, switchLang } = useI18n();

  useEffect(() => {
    const root = document.querySelector(".app-root");
    if (!root) return;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  const links = [
    { to: withLang("/"), label: t("nav.accounts") },
  ];

  const isActive = (to: string) => location.pathname === to;

  return (
    <header className="sticky top-0 z-50 bg-card/90 border-b border-border glass-panel">
      <div className="container flex items-center justify-between h-14 px-4">
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive(l.to) ? "text-primary" : "text-muted-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 ml-auto">
          <div
            className="hidden sm:flex items-center gap-1 h-9 px-1 rounded-lg bg-secondary text-secondary-foreground"
            title={t("nav.language")}
          >
            <Globe size={14} className="ml-1 text-muted-foreground" />
            <button
              onClick={() => switchLang("pt")}
              className={cn(
                "px-2 h-7 rounded-md text-xs font-semibold transition-colors",
                lang === "pt"
                  ? "bg-primary text-primary-foreground"
                  : "hover:text-primary"
              )}
              aria-pressed={lang === "pt"}
            >
              PT
            </button>
            <button
              onClick={() => switchLang("en")}
              className={cn(
                "px-2 h-7 rounded-md text-xs font-semibold transition-colors",
                lang === "en"
                  ? "bg-primary text-primary-foreground"
                  : "hover:text-primary"
              )}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => switchLang(lang === "pt" ? "en" : "pt")}
            className="sm:hidden w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary/10 transition-colors text-[11px] font-bold"
            title={t("nav.language")}
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>

          <button
            onClick={() => setDark((p) => !p)}
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary/10 transition-colors"
            title={dark ? t("nav.themeLight") : t("nav.themeDark")}
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="md:hidden w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 py-3 space-y-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "block text-sm font-medium py-2 transition-colors",
                isActive(l.to) ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
