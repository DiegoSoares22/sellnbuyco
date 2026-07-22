import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowRight, MessageCircle, HandCoins, Swords, Shield, Droplet, Crosshair, Anchor, Circle, Flame, Zap, Star, Compass, HelpCircle } from "lucide-react";
import { useAccountStore } from "@/hooks/useAccountStore";
import { useI18n } from "@/i18n";
import { AccountListing } from "@/data/accounts";
import { getAccountLevel } from "@/lib/accountFilters";
import { getRarityClasses } from "@/lib/rarityBadge";
import { Button } from "@/components/ui/button";

interface AccountCardProps {
  account: AccountListing;
  onSelect: () => void;
  onViewDetails: () => void;
}

const CLASS_ICONS: Record<string, any> = {
  Ninja: Swords,
  Warrior: Shield,
  Taoist: Droplet,
  Archer: Crosshair,
  Pirata: Anchor,
  Monk: Circle,
  DragonWarrior: Flame,
  "Thunder Strike": Zap,
  Trojan: Star,
  "Dune Wanderer": Compass,
};

const WHATSAPP = "5575981382799";
const buildWa = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const AccountCard: React.FC<AccountCardProps> = ({ account, onSelect, onViewDetails }) => {
  const { lang, t } = useI18n();
  const { isFavorite, toggleFavorite } = useAccountStore();

  const level = getAccountLevel(account);
  const favorited = isFavorite(account.id);
  const ClassIcon = CLASS_ICONS[account.className] || HelpCircle;

  // Extrair preço em CPs
  const rawPrice = account.prices[0]?.value || "";
  const priceParts = rawPrice.split(" ");
  const priceValue = priceParts[0] || "Consultar";
  const priceCurrency = priceParts.slice(1).join(" ") || "CPs";

  const interestUrl = buildWa(t("wa.interestAccount", { title: account.title }));
  const offerUrl = buildWa(t("wa.offer", { title: account.title }));

  // Cores personalizadas para os badges
  const getBadgeStyle = (badge: string) => {
    switch (badge.toUpperCase()) {
      case "NOVO":
      case "NEW":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "TOP":
        return "bg-amber-500/10 text-amber-400 border-amber-500/30";
      case "END GAME":
        return "bg-violet-500/10 text-violet-400 border-violet-500/30";
      case "DESTAQUE":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/30";
      default:
        return "bg-zinc-800 text-zinc-300 border-zinc-700";
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative bg-[#12121a] rounded-2xl border border-zinc-800/80 overflow-hidden hover:border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 flex flex-col h-full"
      onClick={onSelect}
    >
      {/* Imagem com Overlay */}
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950">
        <img
          src={account.image}
          alt={account.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Overlay de gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-transparent to-transparent pointer-events-none" />

        {/* Tags no topo esquerdo */}
        <div className="absolute top-3 left-3 flex gap-1.5 z-10 pointer-events-none">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${getBadgeStyle(account.badge)}`}>
            {account.badge}
          </span>
        </div>

        {/* Botão de favorito no topo direito */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(account.id);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-sm text-white transition-all z-10 shadow-sm"
        >
          <Heart size={14} className={favorited ? "fill-red-500 text-red-500" : "text-slate-300 hover:text-white"} />
        </button>

        {/* Classe + Level overlay no rodapé da imagem */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-xl border border-zinc-800 pointer-events-none">
          <ClassIcon size={12} className="text-amber-500" />
          <span className="text-[10px] font-bold text-slate-300">
            {account.className} {level ? `· Lv ${level}` : ""}
          </span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-4 flex flex-col flex-1 space-y-3">
        <h3 className="text-xs sm:text-sm font-semibold text-slate-100 line-clamp-2 min-h-[2.5rem] leading-snug">
          {account.title}
        </h3>

        <div className="flex items-baseline gap-1 mt-auto">
          <span className="text-base sm:text-lg font-black text-amber-500">{priceValue}</span>
          <span className="text-[10px] text-slate-400 font-bold uppercase">{priceCurrency}</span>
        </div>

        {/* Ações */}
        <div className="space-y-2 pt-1.5">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails();
            }}
            className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold text-xs rounded-xl h-9 flex items-center justify-center gap-1.5 shadow-sm"
          >
            <span>{lang === "pt" ? "Ver detalhes" : "View details"}</span>
            <ArrowRight size={13} />
          </Button>

          <div className="flex gap-2">
            <a
              href={interestUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-1 py-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 text-emerald-400 text-[10px] font-bold transition-colors h-8.5"
            >
              <MessageCircle size={12} />
              <span>{lang === "pt" ? "Interesse" : "Interest"}</span>
            </a>

            <a
              href={offerUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-1 py-2 rounded-xl border border-amber-500/20 bg-amber-500/5 hover:bg-amber-500/10 text-amber-400 text-[10px] font-bold transition-colors h-8.5"
            >
              <HandCoins size={12} />
              <span>{lang === "pt" ? "Oferta" : "Offer"}</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
