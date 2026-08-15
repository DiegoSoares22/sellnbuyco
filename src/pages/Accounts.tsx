import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  MessageCircle,
  X,
  HandCoins,
  Sparkles,
  ExternalLink,
  ChevronRight,
  ShieldAlert,
} from "lucide-react";
import { getRarityClasses, isTemporalBadge } from "@/lib/rarityBadge";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ACCOUNTS } from "@/data/accounts";
import type { AccountListing } from "@/data/accounts";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import { StickyFilterBar } from "@/components/StickyFilterBar";
import { FilterDrawer } from "@/components/FilterDrawer";
import { AccountCard } from "@/components/AccountCard";
import { AccountCardSkeleton } from "@/components/AccountCardSkeleton";
import { EmptyState } from "@/components/EmptyState";
import { getMinCpsK, getAccountLevel } from "@/lib/accountFilters";
import { useAccountStore } from "@/hooks/useAccountStore";
import { useI18n } from "@/i18n";
import { toast } from "sonner";
import { Footer } from "@/components/Footer";
import { AccountDetailPage } from "@/components/AccountDetailPage";
import { LastUpdatedBadge } from "@/components/LastUpdatedBadge";

const WHATSAPP = "5575981382799";

const buildWa = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

function OfferButton({ title, className = "" }: { title: string; className?: string }) {
  const { t, lang } = useI18n();

  const handleClick = () => {
    toast.success(lang === "pt" ? "Redirecionando para o WhatsApp... 📲" : "Redirecting to WhatsApp... 📲");
  };

  return (
    <a
      href={buildWa(t("wa.offer", { title }))}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
      className={`group relative inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-amber-500/25 bg-amber-500/5 text-amber-400 text-xs font-bold hover:bg-amber-500/15 hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/5 transition-all overflow-hidden ${className}`}
    >
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      <HandCoins size={14} /> {t("acc.makeOffer")}
    </a>
  );
}

function AccountDetail({ account }: { account: AccountListing }) {
  const [imageZoomed, setImageZoomed] = useState(false);
  const { t, lang, withLang } = useI18n();

  const handleInterestClick = () => {
    toast.success(lang === "pt" ? "Redirecionando para o WhatsApp... 📲" : "Redirecting to WhatsApp... 📲");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-8 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-4xl mx-auto">
        <Link
          to={withLang("/")}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-slate-200 transition-colors mb-6 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
          <span>{t("acc.backToAccounts")}</span>
        </Link>

        <div className="bg-[#12121a] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Lado Esquerdo: Imagem da conta */}
            <div className="md:col-span-5 relative bg-zinc-950 min-h-[300px] md:min-h-full">
              <img
                src={account.image}
                alt={account.title}
                className="absolute inset-0 w-full h-full object-cover cursor-zoom-in hover:brightness-110 transition-all duration-300"
                onClick={() => setImageZoomed(true)}
              />
              <span className={`absolute top-4 left-4 ${getRarityClasses(account.badge)} text-[10px] font-bold px-2.5 py-1 rounded-md inline-flex items-center gap-1 border`}>
                {isTemporalBadge(account.badge) && <Sparkles size={10} />}
                {account.badge}
              </span>
            </div>

            {/* Lado Direito: Informações detalhadas */}
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-slate-100 leading-tight">{account.title}</h1>
                <div className="flex flex-wrap gap-2 mt-3">
                  {account.prices.map((p, pi) => (
                    <span key={pi} className="text-xs font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-lg">
                      {p.label}: {p.value}
                    </span>
                  ))}
                  <span className="text-xs font-bold text-slate-400 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-lg">
                    {account.className}
                  </span>
                </div>
              </div>

              {/* Seções de Atributos */}
              <div className="space-y-4 max-h-[320px] overflow-y-auto no-scrollbar pr-1 border-y border-zinc-850 py-4">
                {account.sections.map((sec, si) => (
                  <div key={si} className="space-y-1.5">
                    <h3 className={`text-xs font-bold uppercase tracking-wider ${
                      si === 0 ? "text-amber-500" : si === 1 ? "text-violet-500" : si === 2 ? "text-cyan-500" : "text-slate-400"
                    }`}>
                      {sec.title}
                    </h3>
                    <ul className="space-y-1">
                      {sec.items.map((item, ii) => (
                        <li key={ii} className="text-xs text-slate-300 pl-3 border-l-2 border-zinc-800 leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={buildWa(t("wa.interestAccount", { title: account.title }))}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleInterestClick}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-sm shadow-md shadow-emerald-500/10 transition-colors"
                >
                  <MessageCircle size={16} />
                  <span>{t("acc.interestedContact")}</span>
                </a>
                <OfferButton title={account.title} className="w-full py-3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {imageZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setImageZoomed(false)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={account.image}
              alt={account.title}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

function AccountsList() {
  const { lang, t, withLang } = useI18n();
  const navigate = useNavigate();

  // Estados locais para dialogs
  const [selected, setSelected] = useState<AccountListing | null>(null);
  const [imageZoomed, setImageZoomed] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    searchQuery,
    selectedClass,
    minPrice,
    maxPrice,
    levelFilter,
    sortBy,
    clearFilters,
    setPriceRange,
    setSelectedClass,
    setLevelFilter,
  } = useAccountStore();

  // Ativar shimmer loading temporário ao alterar filtros
  useEffect(() => {
    setLoading(true);
    const to = setTimeout(() => setLoading(false), 450);
    return () => clearTimeout(to);
  }, [searchQuery, selectedClass, minPrice, maxPrice, levelFilter, sortBy]);

  // Lógica de Filtragem e Ordenação das contas
  const { filtered, fallbackUsed } = useMemo(() => {
    let list = [...ACCOUNTS];

    // 1. Busca por Texto (redução de atrito)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter((a) => {
        const matchTitle = a.title.toLowerCase().includes(q);
        const matchClass = a.className.toLowerCase().includes(q);
        const matchSections = a.sections.some((sec) =>
          sec.items.some((item) => item.toLowerCase().includes(q))
        );
        return matchTitle || matchClass || matchSections;
      });
    }

    // 2. Filtro de Classes
    if (selectedClass) {
      list = list.filter((a) => a.className === selectedClass);
    }

    // 3. Filtro de Preço
    list = list.filter((a) => {
      const p = getMinCpsK(a);
      if (p === null) return true; // Negociáveis são sempre mantidas
      const pAbsolute = p * 1000;
      return pAbsolute >= minPrice && pAbsolute <= maxPrice;
    });

    // 4. Filtro de Level
    if (levelFilter.length > 0) {
      list = list.filter((a) => {
        const lvl = getAccountLevel(a);
        if (lvl === null) return false;
        return levelFilter.some((f) => {
          if (f === "99") return lvl >= 99 && lvl < 110;
          if (f === "119") return lvl >= 110 && lvl < 125;
          if (f === "129") return lvl >= 125 && lvl < 130;
          if (f === "130+") return lvl >= 130;
          if (f === "140+") return lvl >= 140;
          return false;
        });
      });
    }

    // Fallback: se o filtro por classe resultou em 0 contas, traz sugestões alternativas
    if (selectedClass && list.length === 0 && levelFilter.length === 0) {
      const fallback = ACCOUNTS.filter((a) => a.className !== selectedClass).slice(0, 4);
      return { filtered: fallback, fallbackUsed: true };
    }

    // 5. Ordenação Dinâmica
    list.sort((a, b) => {
      if (sortBy === "price-asc") {
        const pA = getMinCpsK(a) ?? Infinity;
        const pB = getMinCpsK(b) ?? Infinity;
        return pA - pB;
      }
      if (sortBy === "price-desc") {
        const pA = getMinCpsK(a) ?? -Infinity;
        const pB = getMinCpsK(b) ?? -Infinity;
        return pB - pA;
      }
      if (sortBy === "level-desc") {
        const lA = getAccountLevel(a) ?? 0;
        const lB = getAccountLevel(b) ?? 0;
        return lB - lA;
      }
      // "newest" - Ordem original invertida (mais recentes primeiro)
      const idxA = ACCOUNTS.indexOf(a);
      const idxB = ACCOUNTS.indexOf(b);
      return idxB - idxA;
    });

    return { filtered: list, fallbackUsed: false };
  }, [searchQuery, selectedClass, minPrice, maxPrice, levelFilter, sortBy]);

  const handleClearFilters = () => {
    clearFilters();
    toast.info(lang === "pt" ? "Filtros limpos!" : "Filters cleared!");
  };

  const handleWhatsAppRedirect = () => {
    toast.success(lang === "pt" ? "Redirecionando para o WhatsApp... 📲" : "Redirecting to WhatsApp... 📲");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section e TrustStrip */}
      <HeroSection />
      <TrustStrip />

      {/* Título da Seção */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-50 tracking-tight flex items-center gap-2">
              <span>{t("acc.title")}</span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            </h2>
          </div>
          <LastUpdatedBadge />
        </div>
      </div>

      {/* Sticky Filter Bar */}
      <StickyFilterBar
        onOpenFilters={() => setFiltersOpen(true)}
        filteredCount={filtered.length}
      />

      {/* Corpo principal das Contas */}
      <div id="accounts-listing" className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {fallbackUsed && (
          <div className="mb-8 p-4 rounded-2xl border border-amber-500/20 bg-amber-500/5 text-xs sm:text-sm text-slate-200 flex items-start gap-3">
            <ShieldAlert size={16} className="text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">{t("acc.classSoldOut")}</p>
              <p className="text-slate-400 mt-1">{t("acc.classSoldOutHint")}</p>
            </div>
          </div>
        )}

        {/* Grid de Cards com Skeleton Loading ou Empty State */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <AccountCardSkeleton key={i} />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <EmptyState onClear={handleClearFilters} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((acc, i) => (
              <motion.div
                key={acc.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(i, 8) * 0.05 }}
              >
                <AccountCard
                  account={acc}
                  onSelect={() => setSelected(acc)}
                  onViewDetails={() => navigate(withLang(`/accounts/${acc.id}`))}
                  onImageZoom={() => setZoomedImage(acc.image)}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Drawer Lateral Filtros */}
      <FilterDrawer
        open={filtersOpen}
        onOpenChange={setFiltersOpen}
        filteredCount={filtered.length}
      />

      {/* Modal Detalhes do Produto */}
      <AnimatePresence>
        {selected && !imageZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start justify-center overflow-y-auto p-4 pt-12"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className="bg-[#12121a] border border-zinc-800 rounded-3xl w-full max-w-2xl overflow-hidden mb-12 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/9] bg-zinc-950">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover cursor-zoom-in hover:brightness-110 transition-all duration-300"
                  onClick={() => setImageZoomed(true)}
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/85 text-white flex items-center justify-center backdrop-blur-sm transition-all"
                >
                  <X size={15} />
                </button>
                <span className={`absolute top-4 left-4 ${getRarityClasses(selected.badge)} text-[10px] font-bold px-2.5 py-1 rounded-md inline-flex items-center gap-1 border`}>
                  {isTemporalBadge(selected.badge) && <Sparkles size={9} />}
                  {selected.badge}
                </span>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-100 leading-tight">{selected.title}</h2>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {selected.prices.map((p, pi) => (
                      <span key={pi} className="text-xs font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-lg">
                        {p.label}: {p.value}
                      </span>
                    ))}
                    <span className="text-xs font-bold text-slate-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg">
                      {selected.className}
                    </span>
                  </div>
                </div>

                {/* Detalhes de atributos das abas/seções */}
                <div className="space-y-4 max-h-[250px] overflow-y-auto no-scrollbar border-y border-zinc-850 py-4">
                  {selected.sections.map((sec, si) => (
                    <div key={si} className="space-y-1.5">
                      <h3 className={`text-[11px] font-bold uppercase tracking-wider ${
                        si === 0 ? "text-amber-500" : si === 1 ? "text-violet-500" : si === 2 ? "text-cyan-500" : "text-slate-400"
                      }`}>
                        {sec.title}
                      </h3>
                      <ul className="space-y-1">
                        {sec.items.map((item, ii) => (
                          <li key={ii} className="text-xs text-slate-300 pl-3 border-l-2 border-zinc-800 leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={buildWa(t("wa.interest", { title: selected.title }))}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleWhatsAppRedirect}
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-xs sm:text-sm shadow-md shadow-emerald-500/10 transition-colors"
                    >
                      <MessageCircle size={15} />
                      <span>{t("acc.interested")}</span>
                    </a>
                    <button
                      onClick={() => {
                        navigate(withLang(`/accounts/${selected.id}`));
                        setSelected(null);
                        toast.success(lang === "pt" ? "Link direto aberto!" : "Direct link opened!");
                      }}
                      className="px-4 py-3 rounded-xl border border-zinc-800 hover:bg-zinc-800/80 text-slate-300 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>{t("acc.directLink")}</span>
                      <ExternalLink size={13} />
                    </button>
                  </div>
                  <OfferButton title={selected.title} className="w-full py-3" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setZoomedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={zoomedImage}
              alt="Account preview"
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 7. Discrete Banner above Footer + Footer component */}
      <Footer />
    </div>
  );
}

export default function Accounts() {
  const { accountId } = useParams();

  if (accountId) {
    const account = ACCOUNTS.find((a) => a.id === accountId);
    if (!account) {
      return <AccountNotFound />;
    }
    return <AccountDetailPage account={account} />;
  }

  return <AccountsList />;
}

function AccountNotFound() {
  const { t, withLang } = useI18n();
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-4">
      <div className="text-center max-w-sm">
        <h1 className="text-xl font-bold text-slate-100 mb-2">{t("acc.notFound")}</h1>
        <Link
          to={withLang("/accounts")}
          className="text-amber-500 hover:underline text-xs font-semibold flex items-center justify-center gap-1.5"
        >
          <span>{t("acc.backToAccounts")}</span>
          <ChevronRight size={14} />
        </Link>
      </div>
    </div>
  );
}
