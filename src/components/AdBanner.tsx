import React, { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n";

export type AdBannerVariant = "horizontal" | "sidebar" | "footer" | "inline";

interface AdBannerProps {
  variant?: AdBannerVariant;
  className?: string;
  scriptSrc?: string;
}

export const AdBanner: React.FC<AdBannerProps> = ({
  variant = "horizontal",
  className = "",
  scriptSrc,
}) => {
  const { lang } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lazy loading com IntersectionObserver para zerar CLS e evitar cargas desnecessárias
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "150px" } // Carrega pouco antes de entrar na tela
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Simular / Carregar o script do anúncio quando estiver visível
  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 600);

    return () => clearTimeout(timer);
  }, [isVisible]);

  // Dimensões reservadas para CLS próximo de zero
  const getContainerDimensions = () => {
    switch (variant) {
      case "sidebar":
        return "w-full max-w-[300px] h-[250px]";
      case "footer":
      case "horizontal":
      case "inline":
      default:
        return "w-full max-w-[970px] min-h-[100px] sm:min-h-[90px]";
    }
  };

  return (
    <div
      ref={containerRef}
      className={`my-6 sm:my-8 px-4 flex flex-col items-center justify-center ${className}`}
    >
      <div
        className={`relative ${getContainerDimensions()} bg-[#12121a] border border-zinc-800/80 hover:border-zinc-700/60 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center shadow-lg shadow-black/40 transition-all duration-300 overflow-hidden group`}
      >
        {/* Glow sutil ao redor do card de anúncio */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-violet-500/5 to-emerald-500/5 opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" />

        {/* Badge discreto de transparência UX / CRO */}
        <div className="w-full flex items-center justify-between pb-2 mb-1 border-b border-zinc-850 z-10">
          <span className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase">
            {lang === "pt" ? "Anúncio Patrocinado" : "Sponsored Ad"}
          </span>
          <span className="text-[8px] font-semibold text-zinc-600 uppercase bg-zinc-900/80 px-2 py-0.5 rounded-full border border-zinc-800">
            HilltopAds
          </span>
        </div>

        {/* ÁREA DO ANÚNCIO (Com pré-reserva de espaço para CLS = 0) */}
        <div className="relative w-full flex-1 flex items-center justify-center z-10 min-h-[70px] sm:min-h-[60px]">
          {!isLoaded ? (
            /* Skeleton Loading Harmonioso com o tema */
            <div className="w-full h-full flex flex-col items-center justify-center space-y-2 animate-pulse py-3">
              <div className="h-3 w-48 bg-zinc-800/60 rounded-md" />
              <div className="h-2 w-32 bg-zinc-800/40 rounded-md" />
            </div>
          ) : (
            /* Container do Anúncio Responsivo Desktop (728x90/970x90) / Mobile (320x100) */
            <div className="w-full flex items-center justify-center text-center">
              {scriptSrc ? (
                <div
                  id={`hilltop-ad-${variant}`}
                  className="w-full flex justify-center items-center"
                />
              ) : (
                /* Layout responsivo visual integrado do Banner HilltopAds */
                <div className="flex flex-col sm:flex-row items-center justify-between w-full px-4 py-2 bg-zinc-900/40 border border-zinc-800/50 rounded-xl gap-3">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                      <span className="text-amber-400 font-black text-xs">⚡</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-200 leading-tight">
                        {lang === "pt"
                          ? "Ofertas Especiais & Parceiros HilltopAds"
                          : "Special Offers & HilltopAds Partners"}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-0.5">
                        {lang === "pt"
                          ? "Confira oportunidades exclusivas no ecossistema Conquer"
                          : "Check exclusive opportunities in the Conquer ecosystem"}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <span className="inline-flex items-center justify-center text-[11px] font-bold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 px-3 py-1.5 rounded-xl transition-colors cursor-pointer">
                      {lang === "pt" ? "Saiba Mais" : "Learn More"}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
