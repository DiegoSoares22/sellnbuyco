import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, Search, Heart, Trash2, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n";
import { useAccountStore } from "@/hooks/useAccountStore";
import { ACCOUNTS } from "@/data/accounts";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import sellnbuycoLogo from "@/assets/sellnbuyco-logo.png";

const WHATSAPP = "5575981382799";
const buildWa = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const location = useLocation();
  const { t, lang, withLang, switchLang } = useI18n();

  const {
    searchQuery,
    setSearchQuery,
    favorites,
    toggleFavorite,
  } = useAccountStore();



  const links = [
    { to: withLang("/"), label: t("nav.accounts") },
  ];

  const isActive = (to: string) => location.pathname === to;

  // Filtrar as contas que estão nos favoritos
  const favoriteAccounts = ACCOUNTS.filter((acc) => favorites.includes(acc.id));

  // Criar mensagem consolidada de interesses
  const getConsolidatedInterestLink = () => {
    if (favoriteAccounts.length === 0) return "#";
    const titles = favoriteAccounts.map((a) => a.title).join(", ");
    const msg = lang === "pt"
      ? `Olá, Diego! Tudo bem? Fiquei interessado nestas contas: ${titles}. Gostaria de mais informações.`
      : `Hi Diego! How are you? I'm interested in these accounts: ${titles}. Could you share more info?`;
    return buildWa(msg);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border py-2.5">
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <Link
          to={withLang("/")}
          className="flex items-center group"
        >
          <img
            src={sellnbuycoLogo}
            alt="SellNBuyCO"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Search Bar Expansível - Desktop */}
        <div className="hidden md:flex items-center relative ml-6 mr-auto">
          <Search
            size={16}
            className={cn(
              "absolute left-3 transition-colors",
              searchFocused ? "text-amber-500" : "text-slate-400"
            )}
          />
          <input
            type="text"
            placeholder={lang === "pt" ? "Buscar contas..." : "Search accounts..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className={cn(
              "pl-9 pr-8 py-1.5 rounded-full text-xs bg-secondary border border-border focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 text-foreground placeholder-muted-foreground transition-all duration-300",
              searchFocused ? "w-72 shadow-lg shadow-amber-500/5" : "w-48"
            )}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 text-slate-500 hover:text-slate-300"
            >
              <X size={12} />
            </button>
          )}
        </div>

        {/* Ações Navbar */}
        <div className="flex items-center gap-3">
          {/* Seletor de Idioma PT/EN com Bandeirinhas */}
          <div className="hidden sm:flex items-center gap-1 bg-secondary/80 border border-border p-0.5 rounded-full">
            <button
              onClick={() => switchLang("pt")}
              className={cn(
                "px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transition-colors",
                lang === "pt"
                  ? "bg-amber-500 text-black shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              )}
            >
              <span>🇧🇷</span> PT
            </button>
            <button
              onClick={() => switchLang("en")}
              className={cn(
                "px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transition-colors",
                lang === "en"
                  ? "bg-amber-500 text-black shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              )}
            >
              <span>🇺🇸</span> EN
            </button>
          </div>

          <button
            onClick={() => switchLang(lang === "pt" ? "en" : "pt")}
            className="sm:hidden w-9 h-9 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors text-xs font-bold"
            title={t("nav.language")}
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>

          {/* Carrinho de Interesses (Popover) */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="relative rounded-full border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:text-slate-100 text-slate-300"
              >
                <Heart
                  size={16}
                  className={cn(favorites.length > 0 ? "fill-red-500 text-red-500" : "")}
                />
                <AnimatePresence>
                  {favorites.length > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm"
                    >
                      {favorites.length}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              className="w-80 p-0 bg-[#12121a] border-zinc-800 text-slate-100 shadow-xl shadow-black/40 rounded-2xl"
            >
              <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
                <h4 className="font-semibold text-sm flex items-center gap-1.5">
                  <Heart size={14} className="fill-red-500 text-red-500" />
                  {lang === "pt" ? "Interesses Salvos" : "Saved Interests"}
                </h4>
                <Badge variant="secondary" className="bg-zinc-800 text-slate-300 text-[10px] px-2 py-0.5 rounded-full">
                  {favorites.length} {favorites.length === 1 ? (lang === "pt" ? "conta" : "account") : (lang === "pt" ? "contas" : "accounts")}
                </Badge>
              </div>

              <div className="max-h-64 overflow-y-auto divide-y divide-zinc-800">
                {favoriteAccounts.length === 0 ? (
                  <div className="py-8 px-4 text-center">
                    <Heart size={24} className="mx-auto mb-2 text-zinc-700" />
                    <p className="text-xs text-slate-500">
                      {lang === "pt" ? "Seu carrinho de interesses está vazio." : "Your interests list is empty."}
                    </p>
                    <p className="text-[10px] text-slate-600 mt-1">
                      {lang === "pt" ? "Clique no coração nos cards das contas." : "Click the heart icon on any account card."}
                    </p>
                  </div>
                ) : (
                  favoriteAccounts.map((acc) => (
                    <div key={acc.id} className="p-3 flex items-center justify-between gap-3 hover:bg-zinc-800/20 transition-colors">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <img
                          src={acc.image}
                          alt={acc.title}
                          className="w-10 h-10 object-cover rounded-lg bg-zinc-800"
                        />
                        <div className="min-w-0">
                          <p className="text-xs font-semibold truncate text-slate-200">{acc.title}</p>
                          <p className="text-[10px] text-slate-400 mt-0.5 flex items-center gap-1">
                            <span className="text-amber-500 font-bold">
                              {acc.prices[0]?.value || "Consultar"}
                            </span>
                            <span>•</span>
                            <span>{acc.className}</span>
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleFavorite(acc.id)}
                        className="h-7 w-7 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-full shrink-0"
                      >
                        <Trash2 size={12} />
                      </Button>
                    </div>
                  ))
                )}
              </div>

              {favoriteAccounts.length > 0 && (
                <div className="p-3 bg-zinc-900/50 border-t border-zinc-800">
                  <a
                    href={getConsolidatedInterestLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-xs shadow-md shadow-emerald-500/10 transition-colors"
                  >
                    <MessageCircle size={14} />
                    {lang === "pt" ? "Enviar todos no WhatsApp" : "Send all to WhatsApp"}
                  </a>
                </div>
              )}
            </PopoverContent>
          </Popover>

          {/* Toggle Dark/Light */}
          <ThemeToggle />

          {/* Menu Hambúrguer (Mobile) */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="md:hidden w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-slate-300 hover:bg-zinc-800 transition-colors"
          >
            {menuOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-zinc-800 bg-[#0a0a0f] px-4 py-4 space-y-4"
          >
            {/* Search Input Mobile */}
            <div className="relative">
              <Search size={14} className="absolute left-3 top-2.5 text-slate-500" />
              <input
                type="text"
                placeholder={lang === "pt" ? "Buscar contas..." : "Search accounts..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-xl text-xs bg-zinc-900 border border-zinc-800 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 text-slate-100 placeholder-slate-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2 text-slate-500"
                >
                  <X size={12} />
                </button>
              )}
            </div>

            {/* Links Mobile */}
            <div className="space-y-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "block text-xs font-semibold py-2 px-3 rounded-lg transition-colors",
                    isActive(l.to)
                      ? "bg-zinc-900 text-amber-500"
                      : "text-slate-400 hover:text-slate-200"
                  )}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
