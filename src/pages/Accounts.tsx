import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";
import taoistImg from "@/assets/taoist.png";

export default function Accounts() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('https://w0.peakpx.com/wallpaper/67/757/HD-wallpaper-video-game-conquer-online.jpg')`,
      }}
    >
      <div className="min-h-screen bg-background/85 dark:bg-background/80 glass-panel">
        <div className="container max-w-4xl py-8 px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft size={16} /> Voltar à Loja
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <ShieldAlert className="text-primary" size={28} />
              <h1 className="text-2xl font-bold text-foreground">Accounts à Venda</h1>
            </div>

            {/* Robot hint */}
            <div className="flex items-start gap-3 mb-8 bg-card border border-border rounded-xl p-4">
              <img src={taoistImg} alt="Dicas" className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Essa área é exclusiva para contas selecionadas. Normalmente disponíveis para clientes com histórico de compras mais elevado.
              </p>
            </div>

            {/* Empty state */}
            <div className="text-center py-16">
              <p className="text-muted-foreground text-sm">Nenhuma conta disponível no momento.</p>
              <p className="text-xs text-muted-foreground mt-2">Novas contas são adicionadas periodicamente. Fique atento!</p>
              <a
                href={`https://wa.me/5575981382799?text=${encodeURIComponent("Olá, Diego. Gostaria de saber sobre contas disponíveis para venda.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={16} /> Fiquei interessado, entrar em contato
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
