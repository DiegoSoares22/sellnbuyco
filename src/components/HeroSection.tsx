import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Play } from "lucide-react";
import { useI18n } from "@/i18n";
import conquerHeroesArt from "@/assets/conquer-heroes.png";

export default function HeroSection() {
  const { lang } = useI18n();

  const handleScrollToGrid = () => {
    const el = document.getElementById("accounts-listing");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHowItWorks = () => {
    // Abrir contato do WhatsApp com pergunta de como funciona
    const WHATSAPP = "5575981382799";
    const msg = lang === "pt"
      ? "Olá! Gostaria de saber como funciona a compra e venda de contas no SellNBuyCO."
      : "Hello! I would like to know how buying and selling accounts works at SellNBuyCO.";
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="relative min-h-[75vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden py-12 lg:py-20 bg-gradient-to-br from-[#0a0a0f] via-[#1e1b4b] to-[#0a0a0f]">
      {/* Luzes de fundo/Orbes de gradiente */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-12 left-1/4 w-[400px] h-[400px] rounded-full bg-amber-500/10 blur-[120px]"
        />
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[150px]"
        />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coluna da Esquerda (55% do grid) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            {/* Badge Premium com Estrela e Animação Pulse */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-xs font-semibold uppercase tracking-wider animate-pulse-glow"
            >
              <Sparkles size={13} className="animate-spin-slow" />
              <span>{lang === "pt" ? "MARKETPLACE PREMIUM" : "PREMIUM MARKETPLACE"}</span>
            </motion.div>

            {/* Headline principal com gradiente dourado na palavra Conquer */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-50 leading-[1.1]"
            >
              {lang === "pt" ? (
                <>
                  Acelere sua evolução no{" "}
                  <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(245,158,11,0.25)]">
                    Conquer
                  </span>
                </>
              ) : (
                <>
                  Accelerate your progress in{" "}
                  <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(245,158,11,0.25)]">
                    Conquer
                  </span>
                </>
              )}
            </motion.h1>

            {/* Subheadline com redução de atrito e hierarquia */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base text-slate-400 max-w-lg leading-relaxed"
            >
              {lang === "pt"
                ? "Compre e venda contas high-level com total segurança. Contas verificadas, suporte dedicado e negociação personalizada para garantir a melhor jornada no jogo."
                : "Buy and sell high-level accounts with complete security. Verified accounts, dedicated support, and personalized negotiation to ensure your best in-game journey."}
            </motion.p>

            {/* Botões CTA duplos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button
                onClick={handleScrollToGrid}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-600 text-black font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-105 active:scale-98"
              >
                <span>{lang === "pt" ? "Explorar Accounts" : "Explore Accounts"}</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={handleHowItWorks}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-zinc-700 hover:border-amber-500/50 bg-zinc-950/40 text-slate-200 hover:text-slate-50 font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-98"
              >
                <Play size={14} className="fill-current" />
                <span>{lang === "pt" ? "Como funciona" : "How it works"}</span>
              </button>
            </motion.div>
          </div>

          {/* Coluna da Direita (45% do grid - lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-md">
              {/* Brilho externo sutil (Glow) */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-amber-500/30 via-violet-500/25 to-emerald-500/25 opacity-70 blur-xl group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Imagem do jogo com efeito glassmorphism e borda glow sutil */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-950/30 backdrop-blur-md shadow-2xl">
                <img
                  src={conquerHeroesArt}
                  alt="Conquer Online Heroes"
                  className="w-full h-full object-contain object-center scale-[1.02] group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay de gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
