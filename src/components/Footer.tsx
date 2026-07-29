import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, MessageCircle, Heart } from "lucide-react";
import { useI18n } from "@/i18n";
import { AdBanner } from "@/components/AdBanner";
import sellnbuycoLogo from "@/assets/sellnbuyco-logo.png";

export const Footer: React.FC = () => {
  const { lang, t, withLang } = useI18n();

  const handleWhatsApp = () => {
    const WHATSAPP = "5575981382799";
    const msg =
      lang === "pt"
        ? "Olá! Vim pelo site SellNBuyCO e gostaria de tirar uma dúvida."
        : "Hello! I came from SellNBuyCO website and have a question.";
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <footer className="mt-16 border-t border-zinc-800/80 bg-[#07070b] relative z-10">

      {/* Conteúdo Principal do Footer */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Coluna 1: Logo e Descrição (7 colunas no desktop) */}
          <div className="md:col-span-7 space-y-4">
            <Link to={withLang("/")} className="inline-flex items-center gap-2 group">
              <img
                src={sellnbuycoLogo}
                alt="SellNBuyCO"
                className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              {lang === "pt"
                ? "Plataforma especializada na intermediação segura de contas de alta performance no Conquer Online. Valorizamos seu tempo e investimento."
                : "Specialized platform for secure high-performance account trading in Conquer Online. We value your time and investment."}
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <ShieldCheck size={16} />
              <span>{lang === "pt" ? "Negociação 100% Garantida" : "100% Guaranteed Trade"}</span>
            </div>
          </div>

          {/* Coluna 2: Suporte & Atendimento (5 colunas) */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {lang === "pt" ? "Atendimento" : "Support"}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {lang === "pt"
                ? "Dúvidas ou interessado em uma conta? Fale conosco direto no WhatsApp."
                : "Questions or interested in an account? Contact us directly on WhatsApp."}
            </p>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold transition-all"
            >
              <MessageCircle size={14} />
              <span>WhatsApp Direct</span>
            </button>
          </div>
        </div>

        {/* Rodapé Direitos Autorais */}
        <div className="mt-12 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} SellNBuyCO. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Made for Conquer Online Players</span>
            <Heart size={12} className="text-amber-500 fill-amber-500 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
};
