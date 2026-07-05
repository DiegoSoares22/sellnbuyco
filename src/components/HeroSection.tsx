import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle, Sparkles, ArrowRight, LayoutGrid } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ACCOUNTS } from "@/data/accounts";
import { getAccountLevel } from "@/lib/accountFilters";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useI18n } from "@/i18n";

// ─── Constants ────────────────────────────────────────────────────────────────

const WHATSAPP = "5575981382799";

// Use only the first N accounts for the hero to keep it focused
const HERO_ACCOUNTS = ACCOUNTS.slice(0, 8);

// ─── Helpers ──────────────────────────────────────────────────────────────────

function buildInterestUrl(msg: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
}

function parseCpsPrice(prices: { label: string; value: string }[]): string | null {
  for (const p of prices) {
    if (/CPS|CPs/i.test(p.value)) return p.value;
  }
  return null;
}

function parseBrlPrice(prices: { label: string; value: string }[]): string | null {
  for (const p of prices) {
    if (/R\$/.test(p.value)) return p.value;
  }
  return null;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function BadgePill({ badge, badgeColor }: { badge: string; badgeColor: string }) {
  return (
    <span
      className={`inline-block ${badgeColor} text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider shadow-md`}
    >
      {badge}
    </span>
  );
}

// Rotating headline powered by the existing useTypewriter hook
function RotatingHeadline() {
  const { t } = useI18n();
  const headlines = useMemo(
    () => [t("hero.headline1"), t("hero.headline2"), t("hero.headline3")],
    [t]
  );
  const [index, setIndex] = useState(0);
  const text = headlines[index];
  const { text: typed, done } = useTypewriter(text, 30, 100);

  useEffect(() => {
    if (!done) return;
    const to = setTimeout(() => {
      setIndex((i) => (i + 1) % headlines.length);
    }, 3200);
    return () => clearTimeout(to);
  }, [done, headlines.length]);

  return (
    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.08] tracking-tight min-h-[3.5em] sm:min-h-[2.6em]">
      {typed}
      <span className="animate-pulse text-primary">|</span>
    </h1>
  );
}

// Dot indicator
function Dot({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`transition-all duration-300 rounded-full ${
        active
          ? "w-6 h-2 bg-primary shadow-[0_0_8px_2px_hsla(33,100%,50%,0.6)]"
          : "w-2 h-2 bg-white/30 hover:bg-white/50"
      }`}
    />
  );
}

// Individual slide content
function SlideContent({
  account,
  isActive,
}: {
  account: (typeof ACCOUNTS)[0];
  isActive: boolean;
}) {
  const navigate = useNavigate();
  const { t, withLang } = useI18n();
  const level = useMemo(() => getAccountLevel(account), [account]);
  const cpsPrice = useMemo(() => parseCpsPrice(account.prices), [account]);
  const brlPrice = useMemo(() => parseBrlPrice(account.prices), [account]);
  const interestUrl = useMemo(
    () => buildInterestUrl(t("wa.interestAccount", { title: account.title })),
    [t, account.title]
  );

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full">
      {/* ── Left: Text content ── */}
      <div className="flex-1 flex flex-col gap-5 text-center lg:text-left order-2 lg:order-1">
        {/* Top badge */}
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              key="top-badge"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center justify-center lg:justify-start gap-2"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm text-primary text-[11px] uppercase tracking-[0.22em] font-semibold">
                <Sparkles size={11} />
                {t("hero.badge")}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Rotating headline */}
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              key={`headline-${account.id}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <RotatingHeadline />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Description */}
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.p
              key={`desc-${account.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="text-white/65 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              {t("hero.description")}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Account info card */}
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              key={`info-${account.id}`}
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 flex flex-col gap-3 mx-auto lg:mx-0 w-full max-w-sm lg:max-w-none"
            >
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div className="flex flex-col gap-1 text-left">
                  <h2 className="text-white font-bold text-base sm:text-lg leading-tight line-clamp-2">
                    {account.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 text-white/60 text-xs">
                    <span className="font-medium text-white/80">{account.className}</span>
                    {level && (
                      <>
                        <span>·</span>
                        <span>{t("hero.level")} {level}</span>
                      </>
                    )}
                  </div>
                </div>
                <BadgePill badge={account.badge} badgeColor={account.badgeColor} />
              </div>

              {/* Prices */}
              <div className="flex flex-wrap gap-2">
                {cpsPrice && (
                  <span className="text-sm font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-3 py-1 rounded-lg">
                    {cpsPrice}
                  </span>
                )}
                {brlPrice && (
                  <span className="text-sm font-bold text-sky-300 bg-sky-500/10 border border-sky-500/25 px-3 py-1 rounded-lg">
                    {brlPrice}
                  </span>
                )}
                {!cpsPrice && !brlPrice && account.prices[0] && (
                  <span className="text-sm font-bold text-amber-300 bg-amber-500/10 border border-amber-500/25 px-3 py-1 rounded-lg">
                    {account.prices[0].value}
                  </span>
                )}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate(withLang(`/accounts/${account.id}`))}
                  className="group relative flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold overflow-hidden shadow-[0_0_20px_hsla(33,100%,50%,0.35)] hover:shadow-[0_0_28px_hsla(33,100%,50%,0.55)] transition-shadow"
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <ArrowRight size={14} />
                  {t("hero.viewDetails")}
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={interestUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-sm font-semibold hover:bg-emerald-500/20 hover:border-emerald-500/60 transition-all"
                >
                  <MessageCircle size={14} />
                  {t("hero.interested")}
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* See all accounts */}
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              key={`all-${account.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.28 }}
              className="flex justify-center lg:justify-start"
            >
              <Link
                to={withLang("/accounts")}
                className="inline-flex items-center gap-2 text-white/50 text-xs hover:text-white/80 transition-colors group"
              >
                <LayoutGrid size={13} />
                {t("hero.viewAll")}
                <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Right: Account image ── */}
      <div className="flex-shrink-0 order-1 lg:order-2 w-full lg:w-auto flex justify-center lg:justify-end">
        <AnimatePresence mode="wait">
          {isActive && (
            <motion.div
              key={`img-${account.id}`}
              initial={{ opacity: 0, scale: 0.94, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.96, x: -10 }}
              transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative group"
            >
              {/* Outer glow ring */}
              <motion.div
                animate={{ opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary/30 via-violet-500/20 to-cyan-500/20 blur-xl pointer-events-none"
              />

              {/* Image container with glassmorphism border */}
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-[260px] sm:w-[300px] lg:w-[340px] xl:w-[380px] aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] bg-black/30"
              >
                <img
                  src={account.image}
                  alt={account.title}
                  loading="lazy"
                  decoding="async"
                  fetchPriority={isActive ? "high" : "low"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Glass overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Badge overlay */}
                <div className="absolute top-3 left-3">
                  <BadgePill badge={account.badge} badgeColor={account.badgeColor} />
                </div>

                {/* Price badge overlay */}
                {cpsPrice && (
                  <div className="absolute bottom-3 right-3">
                    <span className="text-xs font-bold text-white bg-black/60 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-lg">
                      {cpsPrice}
                    </span>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─── Main Hero Slider ─────────────────────────────────────────────────────────

export default function HeroSection() {
  const { t } = useI18n();
  const autoplayRef = useRef(
    Autoplay({ delay: 5000, stopOnMouseEnter: true, stopOnInteraction: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", dragFree: false },
    [autoplayRef.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      aria-label="Hero — Accounts em destaque"
      className="relative min-h-[85vh] md:min-h-[90vh] overflow-hidden bg-[#04060f] flex flex-col"
    >
      {/* ── Background gradient layers ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#04060f] via-[#080c1a] to-[#04060f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(124,58,237,0.18),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_60%,rgba(6,182,212,0.10),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_70%,rgba(251,146,60,0.08),transparent)]" />

      {/* ── Animated glow orbs ── */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-violet-600/15 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="pointer-events-none absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent"
      />

      {/* ── Particles ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute block rounded-full bg-white/30"
            style={{
              width: i % 3 === 0 ? 2 : 1,
              height: i % 3 === 0 ? 2 : 1,
              left: `${(i * 57 + 5) % 100}%`,
              top: `${(i * 37 + 10) % 100}%`,
            }}
            animate={{ y: [0, -22, 0], opacity: [0.15, 0.7, 0.15] }}
            transition={{
              duration: 4 + (i % 6),
              repeat: Infinity,
              delay: i * 0.25,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ── Carousel ── */}
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="overflow-hidden flex-1" ref={emblaRef}>
          <div className="flex h-full">
            {HERO_ACCOUNTS.map((account, index) => (
              <div
                key={account.id}
                className="flex-[0_0_100%] min-w-0 flex items-center"
              >
                <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16 w-full">
                  <SlideContent
                    account={account}
                    isActive={selectedIndex === index}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Navigation row ── */}
        <div className="relative z-10 container max-w-6xl mx-auto px-4 sm:px-6 pb-10 flex items-center justify-between gap-4">
          {/* Prev arrow — desktop only */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollPrev}
            aria-label={t("hero.prev")}
            className="hidden md:flex w-10 h-10 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-white/70 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all items-center justify-center flex-shrink-0"
          >
            <ChevronLeft size={18} />
          </motion.button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-1.5 flex-1">
            {scrollSnaps.map((_, index) => (
              <Dot
                key={index}
                active={index === selectedIndex}
                onClick={() => scrollTo(index)}
                label={`${t("hero.goToSlide")} ${index + 1}`}
              />
            ))}
          </div>

          {/* Next arrow — desktop only */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollNext}
            aria-label={t("hero.next")}
            className="hidden md:flex w-10 h-10 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-white/70 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all items-center justify-center flex-shrink-0"
          >
            <ChevronRight size={18} />
          </motion.button>
        </div>
      </div>

      {/* ── Bottom fade into page ── */}
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
}
