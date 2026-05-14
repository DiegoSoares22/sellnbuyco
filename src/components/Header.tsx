import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const root = document.querySelector(".app-root");
    if (!root) return;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  const links = [
    { to: "/", label: "Shopping Mall" },
    // { to: "/recompensas", label: "Minhas Recompensas" },
    { to: "/accounts", label: "Accounts à Venda" },
    { to: "/antitedio", label: "Antitédio" },
  ];

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
                location.pathname === l.to
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 ml-auto">
          <button
            onClick={() => setDark((p) => !p)}
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary/10 transition-colors"
            title={dark ? "Modo claro" : "Modo escuro"}
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
                location.pathname === l.to
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
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
