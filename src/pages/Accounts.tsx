import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, MessageCircle, X, Filter, HandCoins, Sparkles } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ACCOUNTS, CLASS_OPTIONS, getClassCounts } from "@/data/accounts";
import type { AccountListing } from "@/data/accounts";
import AccountAssistantModal from "@/components/AccountAssistantModal";
import HeroSection from "@/components/HeroSection";
import FiltersPanel from "@/components/FiltersPanel";
import {
  filterByPriceRange,
  getPriceRange,
  getAvailableLevelBuckets,
  filterByLevelBuckets,
} from "@/lib/accountFilters";
import { loadPrefs, savePrefs } from "@/lib/userPrefs";
import { useI18n } from "@/i18n";

const WHATSAPP = "5575981382799";

const buildWa = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

function OfferButton({ title, className = "" }: { title: string; className?: string }) {
  const { t } = useI18n();
  return (
    <a
      href={buildWa(t("wa.offer", { title }))}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className={`group relative inline-flex items-center justify-center gap-2 py-2.5 rounded-lg border border-primary/40 bg-primary/5 text-primary text-xs font-semibold backdrop-blur-sm hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_20px_hsla(33,100%,50%,0.35)] transition-all overflow-hidden ${className}`}
    >
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <HandCoins size={14} /> {t("acc.makeOffer")}
    </a>
  );
}

function AccountDetail({ account }: { account: AccountListing }) {
  const [imageZoomed, setImageZoomed] = useState(false);
  const { t, withLang } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-2xl py-8 px-4">
        <Link to={withLang("/accounts")} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft size={16} /> {t("acc.backToAccounts")}
        </Link>

        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="relative">
            <img
              src={account.image}
              alt={account.title}
              className="w-full h-64 object-cover cursor-zoom-in hover:brightness-110 transition-all"
              onClick={() => setImageZoomed(true)}
            />
            <span className={`absolute top-3 left-3 ${account.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-md`}>
              {account.badge}
            </span>
          </div>

          <div className="p-6 space-y-5">
            <div>
              <h1 className="text-xl font-bold text-card-foreground">{account.title}</h1>
              <div className="flex gap-3 mt-2 flex-wrap">
                {account.prices.map((p, pi) => (
                  <span key={pi} className="text-sm font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-lg">
                    {p.label}: {p.value}
                  </span>
                ))}
              </div>
            </div>

            {account.sections.map((sec, si) => (
              <div key={si}>
                <h3 className={`text-sm font-semibold mb-2 ${
                  si === 0 ? "text-amber-500" : si === 1 ? "text-purple-500" : si === 2 ? "text-blue-500" : "text-muted-foreground"
                }`}>
                  {sec.title}
                </h3>
                <ul className="space-y-1">
                  {sec.items.map((item, ii) => (
                    <li key={ii} className="text-sm text-card-foreground/80 pl-3 border-l-2 border-border">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="space-y-2">
              <a
                href={buildWa(t("wa.interest", { title: account.title }))}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={16} /> {t("acc.interestedContact")}
              </a>
              <OfferButton title={account.title} className="w-full" />
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
            className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setImageZoomed(false)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={account.image}
              alt={account.title}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AccountsList() {
  const prefs = loadPrefs();
  const [selected, setSelected] = useState<AccountListing | null>(null);
  const [imageZoomed, setImageZoomed] = useState(false);
  const [classFilter, setClassFilter] = useState<string | null>(prefs.classFilter ?? null);
  const priceRange = useMemo(() => getPriceRange(ACCOUNTS), []);
  const [priceMin, setPriceMin] = useState<number>(priceRange[0]);
  const [priceMax, setPriceMax] = useState<number>(priceRange[1]);
  const [levelKeys, setLevelKeys] = useState<string[]>([]);
  const [assistantOpen, setAssistantOpen] = useState(false);
  const navigate = useNavigate();
  const { t, withLang } = useI18n();

  // Auto-open assistant on first visit
  useEffect(() => {
    if (!prefs.assistantSeen) {
      const to = setTimeout(() => setAssistantOpen(true), 500);
      return () => clearTimeout(to);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    savePrefs({ classFilter, budgetK: priceMax === priceRange[1] ? null : priceMax, lastVisited: "/" });
  }, [classFilter, priceMax, priceRange]);

  const classCounts = useMemo(() => getClassCounts(ACCOUNTS), []);
  const levelBuckets = useMemo(() => getAvailableLevelBuckets(ACCOUNTS), []);

  const priceIsDefault = priceMin === priceRange[0] && priceMax === priceRange[1];

  const { filtered, fallbackUsed } = useMemo(() => {
    let list = ACCOUNTS;
    if (classFilter) list = list.filter((a) => a.className === classFilter);
    list = filterByPriceRange(list, priceIsDefault ? null : priceMin, priceIsDefault ? null : priceMax);
    list = filterByLevelBuckets(list, levelKeys);

    if (classFilter && list.length === 0 && levelKeys.length === 0) {
      const fallback = filterByPriceRange(
        ACCOUNTS,
        priceIsDefault ? null : priceMin,
        priceIsDefault ? null : priceMax
      ).filter((a) => a.className !== classFilter).slice(0, 8);
      return { filtered: fallback, fallbackUsed: true };
    }
    return { filtered: list, fallbackUsed: false };
  }, [classFilter, priceMin, priceMax, priceIsDefault, levelKeys]);

  const handleAssistantApply = (b: number | null, c: string | null) => {
    if (b != null) setPriceMax(b);
    setClassFilter(c);
    savePrefs({ assistantSeen: true });
  };

  const clearAll = () => {
    setPriceMin(priceRange[0]);
    setPriceMax(priceRange[1]);
    setClassFilter(null);
    setLevelKeys([]);
  };

  const activeCount =
    (classFilter ? 1 : 0) + (priceIsDefault ? 0 : 1) + levelKeys.length;
  const hasAny = activeCount > 0;

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      <div className="container max-w-6xl py-8 px-4">
        <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">{t("acc.title")}</h1>
            <p className="text-sm text-muted-foreground mt-1 max-w-xl">
              {t("acc.subtitle")}
            </p>
          </div>
          <button
            onClick={() => setAssistantOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/30 hover:opacity-95 transition"
          >
            <Sparkles size={14} /> {t("acc.assistant")}
          </button>
        </div>

        {/* Single-row filter bar: class pills + Filtros button */}
        <div className="flex items-center gap-2 flex-wrap mb-4">
          <FiltersPanel
            priceMin={priceMin}
            priceMax={priceMax}
            priceRange={priceRange}
            onPriceChange={([a, b]) => {
              setPriceMin(a);
              setPriceMax(b);
            }}
            levelBuckets={levelBuckets}
            selectedLevels={levelKeys}
            onLevelsChange={setLevelKeys}
            activeCount={activeCount}
            onClear={clearAll}
          />

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setClassFilter(null)}
              className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                !classFilter
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:border-primary/40"
              }`}
            >
              <Filter size={12} /> {t("acc.all")} ({ACCOUNTS.length})
            </button>
            {CLASS_OPTIONS.map((cls) => {
              const count = classCounts[cls];
              if (!count) return null;
              return (
                <button
                  key={cls}
                  onClick={() => setClassFilter(classFilter === cls ? null : cls)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                    classFilter === cls
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border hover:border-primary/40"
                  }`}
                >
                  {cls} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Active filter pills summary */}
        {hasAny && (
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-muted-foreground">{t("acc.filters")}</span>
            {!priceIsDefault && (
              <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 font-medium">
                {priceMin}k – {priceMax}k CPs
              </span>
            )}
            {classFilter && (
              <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 font-medium">
                {classFilter}
              </span>
            )}
            {levelKeys.map((k) => (
              <span key={k} className="px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 font-medium">
                {levelBuckets.find((b) => b.key === k)?.label ?? k}
              </span>
            ))}
            <button onClick={clearAll} className="text-muted-foreground hover:text-foreground underline underline-offset-2">
              {t("acc.clearFiltersLower")}
            </button>
          </div>
        )}



        {/* Results count */}
        <div className="mb-4 flex items-center justify-between gap-3 flex-wrap">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
            {filtered.length === 1 ? t("acc.foundOne") : t("acc.foundMany")}
          </p>
          {hasAny && (
            <button
              onClick={clearAll}
              className="text-xs font-medium text-primary hover:underline underline-offset-2"
            >
              {t("acc.clearFilters")}
            </button>
          )}
        </div>

        {fallbackUsed && (
          <div className="mb-6 p-4 rounded-xl border border-primary/30 bg-primary/5 text-sm text-card-foreground">
            {t("acc.classSoldOut")}
            <br />
            <span className="text-muted-foreground">{t("acc.classSoldOutHint")}</span>
          </div>
        )}

        {filtered.length === 0 && !fallbackUsed && (
          <div className="my-10 p-10 rounded-2xl border border-dashed border-border bg-card/40 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
              <Filter size={20} />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1">{t("acc.emptyTitle")}</h3>
            <p className="text-sm text-muted-foreground mb-5">{t("acc.emptyHint")}</p>
            <button
              onClick={clearAll}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
            >
              {t("acc.clearFilters")}
            </button>
          </div>
        )}


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((acc, i) => (
            <motion.div
              key={acc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i, 8) * 0.05 }}
              className="bg-card border border-border rounded-xl overflow-hidden flex flex-col hover:border-primary/30 hover:shadow-[0_10px_30px_-10px_hsla(33,100%,50%,0.35)] transition-all cursor-pointer group"
              onClick={() => setSelected(acc)}
            >
              <div className="relative h-48 overflow-hidden">
                <img src={acc.image} alt={acc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <span className={`absolute top-3 left-3 ${acc.badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-md`}>
                  {acc.badge}
                </span>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-sm font-semibold text-card-foreground line-clamp-2 mb-2">{acc.title}</h3>
                <div className="mt-auto space-y-1.5">
                  {acc.prices.map((p, pi) => (
                    <p key={pi} className="text-xs font-bold text-emerald-500">{p.label}: {p.value}</p>
                  ))}
                </div>
                <button
                  className="mt-3 w-full py-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(withLang(`/accounts/${acc.id}`));
                  }}
                >
                  {t("acc.viewDetails")}
                </button>
                <a
                  href={buildWa(t("wa.interest", { title: acc.title }))}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-2 w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 text-xs font-medium hover:bg-emerald-500/20 transition"
                >
                  <MessageCircle size={12} /> {t("acc.interested")}
                </a>
                <OfferButton title={acc.title} className="mt-2 w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AccountAssistantModal
        open={assistantOpen}
        onClose={() => {
          setAssistantOpen(false);
          savePrefs({ assistantSeen: true });
        }}
        onApply={handleAssistantApply}
        initialBudget={priceIsDefault ? null : priceMax}
        initialClass={classFilter}
      />

      {/* Image zoom overlay */}
      <AnimatePresence>
        {imageZoomed && selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setImageZoomed(false)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selected.image}
              alt={selected.title}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && !imageZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 flex items-start justify-center overflow-y-auto p-4 pt-12"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className="bg-card border border-border rounded-xl w-full max-w-2xl overflow-hidden mb-12"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-64 object-cover cursor-zoom-in hover:brightness-110 transition-all"
                  onClick={() => setImageZoomed(true)}
                />
                <button onClick={() => setSelected(null)} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70">
                  <X size={16} />
                </button>
                <span className={`absolute top-3 left-3 ${selected.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-md`}>
                  {selected.badge}
                </span>
              </div>

              <div className="p-6 space-y-5">
                <div>
                  <h2 className="text-xl font-bold text-card-foreground">{selected.title}</h2>
                  <div className="flex gap-3 mt-2 flex-wrap">
                    {selected.prices.map((p, pi) => (
                      <span key={pi} className="text-sm font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-lg">
                        {p.label}: {p.value}
                      </span>
                    ))}
                  </div>
                </div>

                {selected.sections.map((sec, si) => (
                  <div key={si}>
                    <h3 className={`text-sm font-semibold mb-2 ${
                      si === 0 ? "text-amber-500" : si === 1 ? "text-purple-500" : si === 2 ? "text-blue-500" : "text-muted-foreground"
                    }`}>
                      {sec.title}
                    </h3>
                    <ul className="space-y-1">
                      {sec.items.map((item, ii) => (
                        <li key={ii} className="text-sm text-card-foreground/80 pl-3 border-l-2 border-border">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="space-y-2">
                  <div className="flex gap-3">
                    <a
                      href={buildWa(t("wa.interest", { title: selected.title }))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
                    >
                      <MessageCircle size={16} /> {t("acc.interested")}
                    </a>
                    <button
                      onClick={() => {
                        navigate(withLang(`/accounts/${selected.id}`));
                        setSelected(null);
                      }}
                      className="px-4 py-3 rounded-lg border border-border text-card-foreground text-sm font-medium hover:bg-muted transition-colors"
                    >
                      {t("acc.directLink")}
                    </button>
                  </div>
                  <OfferButton title={selected.title} className="w-full py-3" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
    return <AccountDetail account={account} />;
  }

  return <AccountsList />;
}

function AccountNotFound() {
  const { t, withLang } = useI18n();
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-foreground mb-2">{t("acc.notFound")}</h1>
        <Link to={withLang("/accounts")} className="text-primary hover:underline text-sm">{t("acc.backToAccounts")}</Link>
      </div>
    </div>
  );
}
