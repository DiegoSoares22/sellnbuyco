import React, { useEffect, useRef, useState } from "react";

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
  if (!scriptSrc) return null;

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
      { rootMargin: "150px" } // Carrega pouco antes de entrar na viewport
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 400);

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
        className={`relative ${getContainerDimensions()} bg-[#12121a]/80 border border-zinc-800/60 rounded-2xl p-2 flex flex-col items-center justify-center shadow-md shadow-black/30 transition-all duration-300 overflow-hidden`}
      >
        {/* ÁREA DO ANÚNCIO (Com pré-reserva de espaço para CLS = 0) */}
        <div className="relative w-full h-full flex items-center justify-center z-10">
          {!isLoaded ? (
            /* Skeleton Loading Discreto */
            <div className="w-full h-full flex flex-col items-center justify-center space-y-1.5 animate-pulse py-2">
              <div className="h-2.5 w-40 bg-zinc-800/40 rounded-md" />
              <div className="h-2 w-24 bg-zinc-800/20 rounded-md" />
            </div>
          ) : (
            /* Container Dinâmico para HilltopAds */
            <div
              id={`hilltop-ad-${variant}`}
              className="w-full h-full flex justify-center items-center overflow-hidden"
            >
              {scriptSrc && (
                <script
                  src={scriptSrc}
                  async
                  referrerPolicy="no-referrer-when-downgrade"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
