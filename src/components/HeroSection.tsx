import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, Pause, Play } from "lucide-react";
import { useI18n } from "@/i18n";
import { ACCOUNTS } from "@/data/accounts";
import { getAccountLevel } from "@/lib/accountFilters";
import { formatPrice, meaningfulBadge } from "@/lib/price";
import { formatLastUpdated } from "@/lib/lastUpdated";
import { buildWa } from "@/lib/whatsapp";
import { getHighlights } from "@/lib/highlights";
import { HERO_CROPS, cropStyle } from "@/lib/printCrops";

/**
 * Contas mostradas em destaque no topo, na ordem em que aparecem.
 * Edite esta lista para trocar o destaque (use o id de src/data/accounts.ts).
 */
const FEATURED_IDS = ["acc-83", "acc-79", "acc-91", "acc-90"];

const HOLD_MS = 6000;

const ease = [0.22, 1, 0.36, 1] as const;

// fetchpriority em minúsculas: o React 18 ainda não conhece fetchPriority e só repassa o atributo assim
const lcpHint = { fetchpriority: "high" } as const;

export default function HeroSection() {
  const { lang, withLang } = useI18n();
  const reduceMotion = useReducedMotion();

  const featured = FEATURED_IDS.map((id) => ACCOUNTS.find((a) => a.id === id)).filter(
    (a): a is (typeof ACCOUNTS)[number] => Boolean(a),
  );
  const slides = featured.length > 0 ? featured : ACCOUNTS.slice(0, 4);

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const pausedRef = useRef(paused);
  pausedRef.current = paused;

  const next = useCallback(() => setActive((i) => (i + 1) % slides.length), [slides.length]);

  const autoplay = !reduceMotion && slides.length > 1;
  const rotating = autoplay && !userPaused && !paused;

  // Troca lenta das contas em destaque; pausa com a aba oculta, com o mouse ou o foco em cima,
  // pelo botão de pausa ou quando o visitante pediu menos movimento.
  useEffect(() => {
    if (!autoplay || userPaused) return;
    const timer = window.setInterval(() => {
      if (!pausedRef.current && document.visibilityState === "visible") next();
    }, HOLD_MS);
    return () => window.clearInterval(timer);
  }, [next, autoplay, userPaused, active]);

  const playToggle = autoplay
    ? {
        playing: !userPaused,
        label: userPaused
          ? lang === "pt" ? "Retomar destaques" : "Resume Featured"
          : lang === "pt" ? "Pausar destaques" : "Pause Featured",
        onToggle: () => setUserPaused((p) => !p),
      }
    : undefined;

  const account = slides[active];
  const price = formatPrice(account, lang);
  const level = getAccountLevel(account);
  const badge = meaningfulBadge(account.badge);
  const total = ACCOUNTS.length;
  const accountHref = withLang(`/accounts/${account.id}`);
  // Enquanto gira sozinho não anuncia; parado (pausa, mouse ou foco), anuncia a troca manual
  const captionLive = rotating ? "off" : "polite";

  const scrollToGrid = () => {
    document.getElementById("todas-as-contas")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  };

  const waHref = buildWa(
    lang === "pt"
      ? "Olá! Gostaria de saber como funciona a compra e venda de contas no SellNBuyCO."
      : "Hello! I would like to know how buying and selling accounts works at SellNBuyCO.",
  );

  const rise = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        };

  return (
    <section
      className="band-dark relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="page-container grid gap-xl pb-section-mobile pt-xl md:pb-section-tablet lg:grid-cols-12 lg:gap-x-lg lg:gap-y-xl lg:pb-xxl">
        {/* Texto (6/12), alinhado à base do print: o título longo cabe em até 3 linhas.
            O pr-xl deixa folga para o close que entra na coluna */}
        <div className="lg:col-span-6 lg:self-end lg:pr-xl">
          <motion.h1 {...rise(0.05)} className="text-display-xl text-on-dark lg:text-display-lg xl:text-display-xl">
            {lang === "pt" ? "Contas disponíveis à venda ou negociação" : "Accounts Available for Sale or Negotiation"}
          </motion.h1>

          <motion.div {...rise(0.13)} className="mt-xl flex flex-wrap items-center gap-sm">
            <button type="button" onClick={scrollToGrid} className="btn btn-primary">
              {lang === "pt" ? `Ver as ${total} contas` : `Browse All ${total} Accounts`}
            </button>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-secondary-dark">
              <MessageCircle size={16} aria-hidden="true" />
              {lang === "pt" ? "Falar no WhatsApp" : "Chat on WhatsApp"}
            </a>
          </motion.div>
        </div>

        {/* O print (6/12), grande, sangrando pela borda direita, com dois closes sobrepostos */}
        <motion.div {...rise(0.2)} className="bleed-right relative lg:col-span-6">
          <Link
            to={accountHref}
            className="group relative block aspect-video overflow-hidden rounded-md bg-surface-dark-card lg:aspect-auto lg:h-[min(600px,calc(100svh-260px))] lg:min-h-[420px] lg:rounded-r-none"
            aria-label={(lang === "pt" ? "Abrir " : "Open ") + account.title}
          >
            <AnimatePresence initial={false}>
              <motion.img
                key={account.id}
                {...lcpHint}
                src={account.image}
                alt=""
                width={1280}
                height={720}
                className="absolute inset-0 h-full w-full object-cover"
                initial={reduceMotion ? false : { opacity: 0, scale: 1.0 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1.06 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 1.6, ease: "easeInOut" },
                  scale: { duration: HOLD_MS / 1000 + 1.6, ease: "linear" },
                }}
              />
            </AnimatePresence>
            {badge && <span className="badge-info absolute left-md top-md">{badge}</span>}
          </Link>

          {/* Closes do próprio print (crop-frame): ancorados à base para não colidir em telas baixas */}
          <AnimatePresence initial={false}>
            <motion.div
              key={account.id}
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden lg:block"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            >
              <div
                className="crop-frame absolute -left-10 bottom-[224px] h-[156px] w-[248px]"
                style={cropStyle(account.image, HERO_CROPS[0])}
              />
              <div
                className="crop-frame absolute bottom-4 left-6 h-[184px] w-[184px]"
                style={cropStyle(account.image, HERO_CROPS[1])}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Miniaturas e pausa, sob o texto */}
        <div className="flex items-center gap-sm lg:col-span-6 lg:col-start-1">
          <FeaturedPicker slides={slides} active={active} onPick={setActive} lang={lang} />
          {playToggle && (
            <button type="button" onClick={playToggle.onToggle} aria-label={playToggle.label} className="paddle ml-xs">
              {playToggle.playing ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
            </button>
          )}
        </div>

        {/* Legenda da conta em destaque, sob o print */}
        <div className="lg:col-span-6 lg:col-start-7">
          <FeaturedCaption
            meta={[account.className, level ? `Lv ${level}` : null, ...getHighlights(account)].filter(Boolean).join(" · ")}
            title={account.title}
            amount={price.amount}
            unit={price.unit}
            cta={lang === "pt" ? "Ver esta conta" : "View This Account"}
            href={accountHref}
            live={captionLive}
          />
        </div>
      </div>
    </section>
  );
}

function FeaturedPicker({
  slides,
  active,
  onPick,
  lang,
}: {
  slides: (typeof ACCOUNTS)[number][];
  active: number;
  onPick: (i: number) => void;
  lang: string;
}) {
  return (
    <div className="flex min-w-0 flex-1 gap-xs" role="group" aria-label={lang === "pt" ? "Contas em destaque" : "Featured accounts"}>
      {slides.map((s, i) => (
        <button
          key={s.id}
          type="button"
          onClick={() => onPick(i)}
          aria-pressed={i === active}
          aria-label={s.title}
          className={`min-w-0 max-w-[96px] flex-1 overflow-hidden rounded-md transition-[opacity,box-shadow] duration-300 active:scale-95 ${
            i === active
              ? "opacity-100 ring-2 ring-on-dark ring-offset-2 ring-offset-canvas-dark"
              : "opacity-50 hover:opacity-100"
          }`}
        >
          <img src={s.image} alt="" width={192} height={108} loading="lazy" className="aspect-video w-full object-cover" />
        </button>
      ))}
    </div>
  );
}

function FeaturedCaption({
  meta,
  title,
  amount,
  unit,
  cta,
  href,
  live,
}: {
  meta: string;
  title: string;
  amount: string;
  unit: string;
  cta: string;
  href: string;
  live: "off" | "polite";
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-lg gap-y-sm" aria-live={live}>
      <div className="min-w-0">
        <p className="line-clamp-1 text-heading-md text-on-dark">{title}</p>
        <p className="mt-0.5 text-caption-md text-mute-dark" translate="no">{meta}</p>
      </div>
      <div className="flex items-baseline gap-lg">
        <p className="tabular text-price-md text-on-dark">
          {amount}
          {unit && <span className="ml-1.5 text-caption-md text-mute-dark">{unit}</span>}
        </p>
        <Link to={href} className="link-dark text-caption-md">
          {cta}
        </Link>
      </div>
    </div>
  );
}
