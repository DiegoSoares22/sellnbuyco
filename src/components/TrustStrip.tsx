import { Trophy, MessageCircle, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

export default function TrustStrip() {
  const { lang } = useI18n();

  const items = [
    {
      icon: Trophy,
      label: lang === "pt" ? "+15 accounts vendidas" : "+15 accounts sold",
      desc: lang === "pt" ? "Histórico comprovado" : "Proven history",
      color: "text-amber-500 bg-amber-500/10 border-amber-500/20"
    },
    {
      icon: MessageCircle,
      label: lang === "pt" ? "Atendimento WhatsApp" : "WhatsApp Support",
      desc: lang === "pt" ? "Suporte direto" : "Direct support",
      color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      icon: ShieldCheck,
      label: lang === "pt" ? "Verificação garantida" : "Guaranteed verification",
      desc: lang === "pt" ? "Segurança 100%" : "100% secure",
      color: "text-violet-500 bg-violet-500/10 border-violet-500/20"
    },
    {
      icon: Zap,
      label: lang === "pt" ? "Entrega imediata" : "Instant delivery",
      desc: lang === "pt" ? "Processo automático" : "Automated process",
      color: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20"
    }
  ];

  return (
    <div className="border-y border-zinc-800 bg-[#12121a] py-6 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                className="flex items-center gap-3.5 p-3 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-zinc-700/50 transition-all duration-300 group"
              >
                {/* Ícone */}
                <div className={`p-2.5 rounded-xl border shrink-0 transition-transform duration-300 group-hover:scale-110 ${item.color}`}>
                  <Icon size={18} className="animate-pulse" />
                </div>
                {/* Textos */}
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-100 truncate">{item.label}</h4>
                  <p className="text-[10px] sm:text-xs text-slate-400 truncate mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
