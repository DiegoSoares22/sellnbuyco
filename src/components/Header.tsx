import { useState, type MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Heart, Trash2, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n";
import { useAccountStore } from "@/hooks/useAccountStore";
import { ACCOUNTS } from "@/data/accounts";
import { formatPrice } from "@/lib/price";
import { buildWa } from "@/lib/whatsapp";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { motion, AnimatePresence } from "framer-motion";
import sellnbuycoLogo from "@/assets/sellnbuyco-logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
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

  const searchLabel = lang === "pt" ? "Buscar contas" : "Search accounts";
  const searchPlaceholder = lang === "pt" ? "Buscar, ex.: Ninja…" : "Search, e.g. Ninja…";
  const clearLabel = lang === "pt" ? "Limpar busca" : "Clear search";
  const interestsLabel = lang === "pt" ? "Interesses salvos" : "Saved Interests";

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

  // Remoção imediata, com "Desfazer" no toast
  const removeFavorite = (id: string, title: string) => {
    toggleFavorite(id);
    toast(lang === "pt" ? "Removida dos interesses" : "Removed from interests", {
      description: title,
      action: {
        label: lang === "pt" ? "Desfazer" : "Undo",
        onClick: () => toggleFavorite(id),
      },
    });
  };

  // Leva o foco para o <main id="conteudo"> sem mexer no hash da URL
  const skipToContent = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("conteudo")?.focus();
  };

  return (
    <header className="band-dark sticky top-0 z-50 border-b border-hairline-dark">
      <a
        href="#conteudo"
        onClick={skipToContent}
        className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-3 focus-visible:z-[60] focus-visible:rounded-full focus-visible:bg-primary focus-visible:px-5 focus-visible:py-2.5 focus-visible:text-button-md focus-visible:text-on-primary"
      >
        {lang === "pt" ? "Pular para o conteúdo" : "Skip to Content"}
      </a>

      <div className="page-container flex h-nav-height items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to={withLang("/")}
          className="group flex items-center gap-2.5 rounded-full"
          aria-label="SellNBuyCO"
        >
          <span className="block h-10 w-[66px] overflow-hidden">
            <img
              src={sellnbuycoLogo}
              alt=""
              width={66}
              height={56}
              className="h-14 w-auto max-w-none transition-transform duration-300 group-hover:-rotate-6"
            />
          </span>
          <span translate="no" className="hidden text-heading-md text-on-dark min-[440px]:inline">
            SellNBuyCO
          </span>
        </Link>

        {/* Busca - Desktop (search-bar-dark) */}
        <div className="group relative ml-6 mr-auto hidden items-center md:flex">
          <Search
            size={16}
            aria-hidden="true"
            className="pointer-events-none absolute left-4 text-mute-dark transition-colors group-focus-within:text-link-dark"
          />
          <input
            type="search"
            name="busca"
            autoComplete="off"
            enterKeyHint="search"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label={searchLabel}
            className="h-11 w-72 rounded-full border border-transparent bg-surface-dark-card pl-11 pr-11 text-caption-md text-on-dark placeholder:text-mute-dark hover:border-hairline-dark lg:w-80"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-0.5 flex h-10 w-10 items-center justify-center rounded-full text-mute-dark hover:text-on-dark"
              aria-label={clearLabel}
            >
              <X size={14} aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Ações */}
        <div className="flex items-center gap-2">
          {/* Idioma PT/EN */}
          <div
            className="hidden items-center rounded-full bg-surface-dark-card p-1 sm:flex"
            role="group"
            aria-label={t("nav.language")}
          >
            {(["pt", "en"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => switchLang(l)}
                aria-pressed={lang === l}
                className={cn(
                  "h-8 rounded-full px-3 text-caption-sm transition-colors",
                  lang === l ? "bg-on-dark text-ink" : "text-mute-dark hover:text-on-dark"
                )}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => switchLang(lang === "pt" ? "en" : "pt")}
            lang={lang === "pt" ? "en" : "pt-BR"}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-dark-card text-caption-sm text-on-dark transition-colors hover:bg-paddle-dark sm:hidden"
          >
            {lang === "pt" ? "EN" : "PT"}
            <span className="sr-only">{lang === "pt" ? " (English)" : " (Português)"}</span>
          </button>

          {/* Interesses salvos (popover-dark) */}
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                aria-label={favorites.length > 0 ? `${interestsLabel} (${favorites.length})` : interestsLabel}
                className="relative flex h-10 w-10 items-center justify-center rounded-full bg-surface-dark-card text-on-dark transition-colors hover:bg-paddle-dark"
              >
                <Heart
                  size={16}
                  aria-hidden="true"
                  className={cn(favorites.length > 0 && "fill-link-dark text-link-dark")}
                />
                <AnimatePresence>
                  {favorites.length > 0 && (
                    <motion.span
                      aria-hidden="true"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="badge-info tabular absolute -right-1.5 -top-1.5 h-5 min-w-5 justify-center px-1.5 py-0"
                    >
                      {favorites.length}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              className="w-80 rounded-md border border-hairline-dark bg-surface-dark-card p-0 text-on-dark shadow-[0_24px_64px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-baseline justify-between border-b border-hairline-dark p-md">
                <h2 className="text-heading-md">{interestsLabel}</h2>
                <span className="tabular text-caption-md text-mute-dark">
                  {favorites.length} {favorites.length === 1 ? (lang === "pt" ? "conta" : "account") : (lang === "pt" ? "contas" : "accounts")}
                </span>
              </div>

              <div className="max-h-72 overflow-y-auto overscroll-contain">
                {favoriteAccounts.length === 0 ? (
                  <div className="px-md py-xl">
                    <p className="text-caption-md text-on-dark">
                      {lang === "pt" ? "Sua lista de interesses está vazia." : "Your interests list is empty."}
                    </p>
                    <p className="mt-1 text-caption-md text-mute-dark">
                      {lang === "pt" ? "Toque no coração de uma conta para salvar." : "Tap the heart on any account to save it."}
                    </p>
                  </div>
                ) : (
                  favoriteAccounts.map((acc) => {
                    const price = formatPrice(acc, lang);
                    return (
                      <div key={acc.id} className="flex items-center justify-between gap-3 px-md py-sm transition-colors hover:bg-paddle-dark">
                        <div className="flex min-w-0 items-center gap-3">
                          <img
                            src={acc.image}
                            alt=""
                            width={56}
                            height={32}
                            className="aspect-video w-14 shrink-0 rounded-sm bg-surface-dark-elevated object-cover"
                          />
                          <div className="min-w-0">
                            <p className="truncate text-caption-md text-on-dark">{acc.title}</p>
                            <p className="mt-0.5 flex items-center gap-1 text-caption-md text-mute-dark">
                              <span className="tabular font-semibold text-on-dark">
                                {price.amount}
                                {price.unit && ` ${price.unit}`}
                              </span>
                              <span aria-hidden="true">·</span>
                              <span translate="no">{acc.className}</span>
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFavorite(acc.id, acc.title)}
                          aria-label={`${lang === "pt" ? "Remover" : "Remove"} ${acc.title}`}
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-mute-dark transition-colors hover:bg-hairline-dark hover:text-on-dark"
                        >
                          <Trash2 size={14} aria-hidden="true" />
                        </button>
                      </div>
                    );
                  })
                )}
              </div>

              {favoriteAccounts.length > 0 && (
                <div className="border-t border-hairline-dark p-sm">
                  <a
                    href={getConsolidatedInterestLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-commerce w-full"
                  >
                    <MessageCircle size={16} aria-hidden="true" />
                    {lang === "pt" ? "Enviar todos no WhatsApp" : "Send All to WhatsApp"}
                  </a>
                </div>
              )}
            </PopoverContent>
          </Popover>

          {/* Menu (celular) */}
          <button
            type="button"
            onClick={() => setMenuOpen((p) => !p)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-dark-card text-on-dark transition-colors hover:bg-paddle-dark md:hidden"
          >
            {menuOpen ? <X size={16} aria-hidden="true" /> : <Menu size={16} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="space-y-md border-t border-hairline-dark px-4 pb-lg pt-md md:hidden"
          >
            {/* Busca - Mobile */}
            <div className="group relative">
              <Search
                size={16}
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-4 text-mute-dark group-focus-within:text-link-dark"
              />
              <input
                type="search"
                name="busca"
                autoComplete="off"
                enterKeyHint="search"
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label={searchLabel}
                className="h-12 w-full rounded-full bg-surface-dark-card pl-11 pr-12 text-base text-on-dark placeholder:text-mute-dark"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-0.5 top-0.5 flex h-11 w-11 items-center justify-center rounded-full text-mute-dark hover:text-on-dark"
                  aria-label={clearLabel}
                >
                  <X size={14} aria-hidden="true" />
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
                  aria-current={isActive(l.to) ? "page" : undefined}
                  className={cn(
                    "block rounded-md px-4 py-3 text-body-strong transition-colors",
                    isActive(l.to) ? "bg-surface-dark-card text-on-dark" : "text-body-dark hover:bg-surface-dark-card hover:text-on-dark"
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
