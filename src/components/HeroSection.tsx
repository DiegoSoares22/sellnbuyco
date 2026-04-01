import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div
      className="relative min-h-[50vh] flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('https://w0.peakpx.com/wallpaper/67/757/HD-wallpaper-video-game-conquer-online.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-background/80 dark:bg-background/70 glass-panel" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-4 max-w-2xl"
      >
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground leading-tight tracking-tight">
          Loja Premium de Itens
          <span className="text-primary text-glow block mt-1">Conquer Online</span>
        </h1>
        <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-lg mx-auto">
          Os melhores itens, runas e recursos para seu personagem. Atendimento direto via WhatsApp.
        </p>
      </motion.div>
    </div>
  );
}
