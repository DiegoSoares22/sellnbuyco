import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, ShieldCheck, Zap, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "@/i18n";
import { ACCOUNTS } from "@/data/accounts";

export default function HeroSection() {
  const { lang } = useI18n();
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Featured account for slide 2
  const featuredAccount = ACCOUNTS[0];
  const totalAccounts = ACCOUNTS.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, []);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, currentSlide]);

  const handleScrollToGrid = () => {
    const el = document.getElementById("accounts-listing");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleHowItWorks = () => {
    const WHATSAPP = "5575981382799";
    const msg = lang === "pt"
      ? "Olá! Gostaria de saber como funciona a compra e venda de contas no SellNBuyCO."
      : "Hello! I would like to know how buying and selling accounts works at SellNBuyCO.";
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden py-12 lg:py-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#110f2e] to-[#0a0a0f]" />

      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/10 blur-[140px]"
        />
        <motion.div
          animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-violet-600/8 blur-[160px]"
        />
        <motion.div
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-emerald-500/5 blur-[200px]"
        />
      </div>

      {/* Grid overlay pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatePresence mode="wait">
          {/* ===== SLIDE 1: Main Hero ===== */}
          {currentSlide === 0 && (
            <motion.div
              key="slide-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center min-h-[50vh]"
            >
              {/* Left content */}
              <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold"
                >
                  <Zap size={12} className="fill-amber-400" />
                  <span>{lang === "pt" ? "Marketplace Premium" : "Premium Marketplace"}</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-50 leading-[1.08]"
                >
                  {lang === "pt" ? (
                    <>
                      Encontre sua{" "}
                      <span className="text-gradient-premium drop-shadow-[0_2px_15px_rgba(245,158,11,0.25)]">
                        conta perfeita
                      </span>
                    </>
                  ) : (
                    <>
                      Find your{" "}
                      <span className="text-gradient-premium drop-shadow-[0_2px_15px_rgba(245,158,11,0.25)]">
                        perfect account
                      </span>
                    </>
                  )}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="text-sm sm:text-base text-slate-400 max-w-lg leading-relaxed"
                >
                  {lang === "pt"
                    ? "Compre e venda contas high-level com total segurança. Contas verificadas, suporte dedicado e negociação personalizada."
                    : "Buy and sell high-level accounts with total security. Verified accounts, dedicated support, and personalized negotiation."}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
                >
                  <button
                    onClick={handleScrollToGrid}
                    className="group w-full sm:w-auto px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-[1.03] active:scale-[0.98]"
                  >
                    <span>{lang === "pt" ? "Explorar Accounts" : "Explore Accounts"}</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                  </button>
                  <button
                    onClick={handleHowItWorks}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-zinc-700 hover:border-amber-500/40 bg-white/[0.03] hover:bg-white/[0.06] text-slate-200 hover:text-slate-50 font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] backdrop-blur-sm"
                  >
                    <Play size={14} className="fill-current" />
                    <span>{lang === "pt" ? "Como funciona" : "How it works"}</span>
                  </button>
                </motion.div>
              </div>

              {/* Right: Stats grid */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="lg:col-span-5 flex justify-center"
              >
                <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
                  {[
                    {
                      value: `${totalAccounts}+`,
                      label: lang === "pt" ? "Contas Disponíveis" : "Accounts Available",
                      icon: <TrendingUp size={18} className="text-amber-400" />,
                      glow: "from-amber-500/20 to-amber-600/5",
                    },
                    {
                      value: "100%",
                      label: lang === "pt" ? "Segurança" : "Security",
                      icon: <ShieldCheck size={18} className="text-emerald-400" />,
                      glow: "from-emerald-500/20 to-emerald-600/5",
                    },
                    {
                      value: "24h",
                      label: lang === "pt" ? "Suporte Ativo" : "Active Support",
                      icon: <Zap size={18} className="text-violet-400" />,
                      glow: "from-violet-500/20 to-violet-600/5",
                    },
                    {
                      value: "5★",
                      label: lang === "pt" ? "Avaliação" : "Rating",
                      icon: <span className="text-lg">⭐</span>,
                      glow: "from-yellow-500/20 to-yellow-600/5",
                    },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="relative p-5 rounded-2xl bg-white/[0.03] border border-zinc-800/80 hover:border-zinc-700/80 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.05] group"
                    >
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className="relative z-10">
                        <div className="mb-2">{stat.icon}</div>
                        <div className="text-2xl font-black text-slate-50">{stat.value}</div>
                        <div className="text-[11px] text-slate-400 font-medium mt-0.5">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* ===== SLIDE 2: Featured Account ===== */}
          {currentSlide === 1 && featuredAccount && (
            <motion.div
              key="slide-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center min-h-[50vh]"
            >
              {/* Left: Featured image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-5 flex justify-center order-2 lg:order-1"
              >
                <div className="relative group w-full max-w-md">
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-amber-500/20 via-violet-500/15 to-emerald-500/10 opacity-60 blur-xl group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800/60 bg-zinc-950/50 backdrop-blur-md shadow-2xl">
                    <img
                      src={featuredAccount.image}
                      alt={featuredAccount.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-400 text-[10px] font-bold backdrop-blur-sm">
                        ⭐ {lang === "pt" ? "EM DESTAQUE" : "FEATURED"}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right: Featured info */}
              <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold"
                >
                  <span>🔥</span>
                  <span>{lang === "pt" ? "Conta em Destaque" : "Featured Account"}</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-50 leading-[1.1]"
                >
                  {featuredAccount.title}
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="flex flex-wrap gap-2"
                >
                  <span className="px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-bold text-slate-300">
                    {featuredAccount.className}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-400">
                    {featuredAccount.prices[0]?.value || "Consultar"}
                  </span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm text-slate-400 max-w-lg leading-relaxed"
                >
                  {featuredAccount.sections[0]?.items.slice(0, 3).join(" · ")}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
                >
                  <button
                    onClick={handleScrollToGrid}
                    className="group w-full sm:w-auto px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-[1.03] active:scale-[0.98]"
                  >
                    <span>{lang === "pt" ? "Ver Detalhes" : "View Details"}</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* ===== SLIDE 3: Trust & Credibility ===== */}
          {currentSlide === 2 && (
            <motion.div
              key="slide-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-8 min-h-[50vh] justify-center max-w-3xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold"
              >
                <ShieldCheck size={12} />
                <span>{lang === "pt" ? "Confiança Total" : "Total Trust"}</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-50 leading-[1.1]"
              >
                {lang === "pt" ? (
                  <>
                    Negociação{" "}
                    <span className="text-gradient-premium">100% segura</span>
                    <br />
                    do início ao fim
                  </>
                ) : (
                  <>
                    Trading that is{" "}
                    <span className="text-gradient-premium">100% secure</span>
                    <br />
                    from start to finish
                  </>
                )}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed"
              >
                {lang === "pt"
                  ? "Todas as contas são verificadas pela nossa equipe. Oferecemos intermediação segura, suporte 24h via WhatsApp e garantia de satisfação em cada negociação."
                  : "All accounts are verified by our team. We offer secure escrow, 24/7 WhatsApp support, and satisfaction guarantee on every transaction."}
              </motion.p>

              {/* Trust pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="flex flex-wrap justify-center gap-3"
              >
                {[
                  { icon: "🔒", text: lang === "pt" ? "Intermediação Segura" : "Secure Escrow" },
                  { icon: "✅", text: lang === "pt" ? "Contas Verificadas" : "Verified Accounts" },
                  { icon: "💬", text: lang === "pt" ? "Suporte 24h" : "24/7 Support" },
                  { icon: "⚡", text: lang === "pt" ? "Entrega Rápida" : "Fast Delivery" },
                ].map((item, i) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-zinc-800/80 backdrop-blur-sm text-sm text-slate-300 font-medium hover:bg-white/[0.06] hover:border-zinc-700 transition-all duration-300"
                  >
                    <span className="text-base">{item.icon}</span>
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={handleScrollToGrid}
                className="group px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>{lang === "pt" ? "Ver Todas as Contas" : "View All Accounts"}</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ===== Slide Navigation ===== */}
        <div className="flex items-center justify-center gap-4 mt-10 relative z-20">
          {/* Prev button */}
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border border-zinc-800 hover:border-zinc-600 bg-white/[0.03] hover:bg-white/[0.06] text-slate-400 hover:text-slate-200 transition-all duration-200 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Progress indicators */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
                style={{ width: currentSlide === i ? "40px" : "12px" }}
                aria-label={`Go to slide ${i + 1}`}
              >
                <div className="absolute inset-0 bg-zinc-700 rounded-full" />
                {currentSlide === i && (
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-amber-500 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    key={`progress-${currentSlide}-${Date.now()}`}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={nextSlide}
            className="p-2 rounded-full border border-zinc-800 hover:border-zinc-600 bg-white/[0.03] hover:bg-white/[0.06] text-slate-400 hover:text-slate-200 transition-all duration-200 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
