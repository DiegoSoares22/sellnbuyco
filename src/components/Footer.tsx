import React from "react";
import { Link } from "react-router-dom";
import { useI18n } from "@/i18n";
import { buildWa } from "@/lib/whatsapp";
import sellnbuycoLogo from "@/assets/sellnbuyco-logo.png";

const linkClass =
  "text-caption-md text-on-primary underline decoration-on-primary/40 decoration-1 underline-offset-4 transition-colors hover:decoration-on-primary hover:decoration-2";

/**
 * Faixa da marca (footer-section): o único bloco violeta de ponta a ponta da página.
 * Nome grande (footer-wordmark) como fechamento, frase à esquerda, links em colunas separadas
 * por linhas de ritmo à direita, linha fina com © no fim.
 */
export const Footer: React.FC = () => {
  const { lang, withLang, switchLang } = useI18n();

  const waHref = buildWa(
    lang === "pt"
      ? "Olá! Vim pelo site SellNBuyCO e gostaria de tirar uma dúvida."
      : "Hello! I came from SellNBuyCO website and have a question.",
  );

  return (
    <footer className="band-brand">
      <div className="page-container pb-xl pt-section-mobile md:pt-section-tablet lg:pt-section">
        <div className="flex items-center gap-md lg:gap-lg">
          <img
            src={sellnbuycoLogo}
            alt=""
            width={96}
            height={81}
            loading="lazy"
            className="w-14 shrink-0 sm:w-20 lg:w-24"
          />
          <p translate="no" className="text-display-wordmark text-on-primary">
            SellNBuyCO
          </p>
        </div>

        <div className="mt-xxl grid gap-xl lg:grid-cols-12 lg:gap-x-lg">
          <p className="max-w-[46ch] text-body-md text-on-primary/80 lg:col-span-5">
            {lang === "pt"
              ? "Cada conta aqui é mostrada com os prints dela mesma. Quer saber algo antes de fechar? Pergunte pelo WhatsApp."
              : "Every account here is shown with its own screenshots. Want to know something before you close? Ask on WhatsApp."}
          </p>

          <nav
            aria-label={lang === "pt" ? "Rodapé" : "Footer"}
            className="grid grid-cols-2 gap-x-xxl lg:col-span-5 lg:col-start-8"
          >
            <div>
              <h2 className="text-caption-sm text-on-primary/80">{lang === "pt" ? "Loja" : "Store"}</h2>
              <ul className="mt-sm space-y-sm">
                <li>
                  <Link to={withLang("/")} className={linkClass}>
                    {lang === "pt" ? "Todas as contas" : "All Accounts"}
                  </Link>
                </li>
                <li>
                  <Link to={withLang("/recompensas")} className={linkClass}>
                    {lang === "pt" ? "Recompensas" : "Rewards"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="relative before:absolute before:-left-6 before:bottom-0 before:top-0 before:w-px before:bg-on-primary/20">
              <h2 className="text-caption-sm text-on-primary/80">{lang === "pt" ? "Atendimento" : "Support"}</h2>
              <ul className="mt-sm space-y-sm">
                <li>
                  <a href={waHref} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    WhatsApp
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => switchLang(lang === "pt" ? "en" : "pt")}
                    lang={lang === "pt" ? "en" : "pt-BR"}
                    className={linkClass}
                  >
                    {lang === "pt" ? "Read in English" : "Ler em português"}
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-xxl flex flex-wrap items-center justify-between gap-sm border-t border-on-primary/20 pt-lg text-caption-md text-on-primary/80">
          <p>
            © {new Date().getFullYear()} <span translate="no">SellNBuyCO</span>
          </p>
          <p>{lang === "pt" ? "Bom jogo." : "Good game."}</p>
        </div>
      </div>
    </footer>
  );
};
