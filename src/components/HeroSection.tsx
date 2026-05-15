import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import fundo from "@/assets/fundo.png";

export default function HeroSection() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const bgX = useTransform(sx, (v) => v * -20);
  const bgY = useTransform(sy, (v) => v * -20);
  const fgX = useTransform(sx, (v) => v * 14);
  const fgY = useTransform(sy, (v) => v * 14);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <div
      onMouseMove={onMove}
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#04060f]"
    >
      {/* Parallax bg layer */}
      <motion.div
        aria-hidden
        style={{ x: bgX, y: bgY, backgroundImage: `url(${fundo})` }}
        className="absolute -inset-10 bg-cover bg-center"
      />
      {/* Gradient + scrim */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04060f]/40 via-[#04060f]/70 to-[#04060f]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(4,6,15,0.85)_75%)]" />

      {/* Animated glows */}
      <motion.div
        aria-hidden
        style={{ x: fgX, y: fgY }}
        className="pointer-events-none absolute -top-20 -left-20 w-[460px] h-[460px] rounded-full bg-cyan-500/25 blur-3xl"
      />
      <motion.div
        aria-hidden
        style={{ x: useTransform(sx, (v) => v * -14), y: useTransform(sy, (v) => v * -14) }}
        className="pointer-events-none absolute -bottom-32 -right-20 w-[520px] h-[520px] rounded-full bg-fuchsia-500/20 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent"
      />

      {/* Particles */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 22 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute block w-1 h-1 rounded-full bg-white/40"
            style={{ left: `${(i * 53) % 100}%`, top: `${(i * 31) % 100}%` }}
            animate={{ y: [0, -18, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 max-w-3xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-300/30 bg-white/5 backdrop-blur-md text-amber-200/90 text-[11px] uppercase tracking-[0.25em] mb-6"
        >
          <Sparkles size={12} /> Marketplace Premium
        </motion.div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
          Sua nova era em
          <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-violet-300 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(124,58,237,0.45)]">
            Conquer Online
          </span>
        </h1>
        <p className="mt-5 text-white/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Itens, runas, accounts e recursos premium — selecionados a mão e entregues com atendimento direto via WhatsApp.
        </p>
      </motion.div>

      {/* Bottom fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
