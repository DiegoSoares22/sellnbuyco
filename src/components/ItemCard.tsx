import { useState } from "react";
import { GameItem } from "@/data/items";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface ItemCardProps {
  item: GameItem;
  index: number;
}

export default function ItemCard({ item, index }: ItemCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [imgError, setImgError] = useState(false);

  const whatsappMsg = encodeURIComponent(
    `Olá, Diego. Fiquei interessado pelo ${item.name}. Você poderia me informar o valor e como funciona?`
  );
  const whatsappUrl = `https://wa.me/5575981382799?text=${whatsappMsg}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.03, 0.5), duration: 0.35 }}
      className="card-hover relative bg-card border border-border rounded-xl p-4 flex flex-col items-center gap-3"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={() => setShowTooltip((p) => !p)}
    >
      {/* Tooltip */}
      {showTooltip && item.tooltip_ptbr && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs max-w-[200px] text-center animate-fade-in-up whitespace-pre-line">
          {item.tooltip_ptbr}
        </div>
      )}

      {/* Image */}
      <div className="w-[80px] h-[80px] flex items-center justify-center">
        {item.image && !imgError ? (
          <img
            src={item.image}
            alt={item.name}
            className="max-w-[80px] max-h-[80px] object-contain"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center text-muted-foreground text-xs text-center px-1">
            {imgError ? "Img error" : "No image"}
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="text-sm font-medium text-card-foreground text-center leading-tight line-clamp-2 min-h-[2.5rem]">
        {item.name}
      </h3>

      {/* Price */}
      <p className="text-xs text-muted-foreground">
        {item.price !== null ? `R$ ${item.price.toFixed(2)}` : "Consultar preço"}
      </p>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity"
        onClick={(e) => e.stopPropagation()}
      >
        <MessageCircle size={14} />
        WhatsApp
      </a>
    </motion.div>
  );
}
