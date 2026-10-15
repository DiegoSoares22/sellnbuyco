import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ChevronRight, HandCoins, MessageCircle, ZoomIn } from "lucide-react";
import { getAccountLevel } from "@/lib/accountFilters";
import { ACCOUNTS, AccountListing } from "@/data/accounts";
import { useI18n } from "@/i18n";
import { toast } from "sonner";
import { Footer } from "@/components/Footer";
import { AccountCard } from "@/components/AccountCard";
import { ImageZoomDialog } from "@/components/ImageZoomDialog";
import { formatPrice, meaningfulBadge } from "@/lib/price";
import { getHighlights } from "@/lib/highlights";
import { SIDE_CROPS, cropStyle } from "@/lib/printCrops";
import { buildWa } from "@/lib/whatsapp";

// fetchpriority em minúsculas: o React 18 ainda não conhece fetchPriority e só repassa o atributo assim
const lcpHint = { fetchpriority: "high" } as const;

interface AccountDetailPageProps {
  account: AccountListing;
}

/**
 * Página da conta (DESIGN.md → "Página da conta"):
 * faixa escura com título em deslocamento editorial, preço e ações à direita (sem caixa) e a
 * galeria em bento sem vão (print + dois closes); faixa clara com atributos em colunas abertas
 * separadas por linhas de ritmo e trilhos de contas relacionadas; faixa da marca no rodapé.
 */
export const AccountDetailPage: React.FC<AccountDetailPageProps> = ({ account }) => {
  const [zoomed, setZoomed] = useState(false);
  const { t, lang, withLang } = useI18n();

  // Volta ao topo e atualiza o título ao trocar de conta
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    document.title = `${account.title} | SellNBuyCO`;
  }, [account]);

  const level = getAccountLevel(account);
  const price = formatPrice(account, lang);
  const badge = meaningfulBadge(account.badge);
  const chips = [account.className, level ? `Level ${level}` : null, ...getHighlights(account)].filter(Boolean) as string[];

  const handleBuyClick = () => {
    toast.success(lang === "pt" ? "Redirecionando para o WhatsApp… 📲" : "Redirecting to WhatsApp… 📲");
  };

  // Recomendação e descoberta de contas
  const similarAccounts = ACCOUNTS.filter((a) => a.className === account.className && a.id !== account.id).slice(0, 4);
  const latestAccounts = ACCOUNTS.filter((a) => a.id !== account.id).slice(0, 4);
  const recommendedAccounts = ACCOUNTS.filter((a) => a.badge === "TOP" || a.badge === "DESTAQUE" || a.badge === "OP KING")
    .filter((a) => a.id !== account.id)
    .slice(0, 4);

  const trust =
    lang === "pt"
      ? ["Intermediação segura", "Vendedor verificado", "Transferência garantida"]
      : ["Secure escrow", "Verified seller", "Guaranteed transfer"];

  return (
    <div>
      {/* Faixa escura: título, preço e galeria */}
      <section className="band-dark">
        <div className="page-container pb-section-mobile pt-lg md:pb-section-tablet lg:pb-section">
          <nav aria-label={lang === "pt" ? "Trilha de navegação" : "Breadcrumb"}>
            <ol className="flex min-w-0 flex-wrap items-center gap-x-xs gap-y-1 text-caption-md text-mute-dark">
              <li>
                <Link to={withLang("/")} className="inline-flex items-center gap-1 rounded-full transition-colors hover:text-on-dark">
                  <ArrowLeft size={14} aria-hidden="true" />
                  {lang === "pt" ? "Contas" : "Accounts"}
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight size={14} />
              </li>
              <li translate="no">{account.className}</li>
              <li aria-hidden="true">
                <ChevronRight size={14} />
              </li>
              <li aria-current="page" className="min-w-0 max-w-[40ch] truncate text-body-dark">
                {account.title}
              </li>
            </ol>
          </nav>

          {/* Deslocamento editorial: título à esquerda (7/12), decisão à direita (4/12), alinhados pela base */}
          <div className="mt-xl grid gap-xl lg:grid-cols-12 lg:items-end lg:gap-x-lg">
            <div className="lg:col-span-7">
              {badge && <span className="badge-info mb-md">{badge}</span>}
              <h1 className="text-display-lg text-on-dark">{account.title}</h1>
              <ul className="mt-lg flex flex-wrap gap-xs">
                {chips.map((chip) => (
                  <li
                    key={chip}
                    translate="no"
                    className="inline-flex h-8 items-center rounded-full border border-hairline-dark px-sm text-caption-md text-body-dark"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-caption-md text-mute-dark">{lang === "pt" ? "Valor" : "Price"}</p>
              <p className="tabular mt-1 text-price-lg text-on-dark">
                {price.amount}
                {price.unit && <span className="ml-1.5 text-body-sm text-mute-dark">{price.unit}</span>}
              </p>
              <div className="mt-lg space-y-sm">
                <a
                  href={buildWa(t("wa.interestAccount", { title: account.title }))}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleBuyClick}
                  className="btn btn-commerce w-full"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  {lang === "pt" ? "Comprar no WhatsApp" : "Buy on WhatsApp"}
                </a>
                <a
                  href={buildWa(t("wa.offer", { title: account.title }))}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleBuyClick}
                  className="btn btn-secondary-dark w-full"
                >
                  <HandCoins size={16} aria-hidden="true" />
                  {lang === "pt" ? "Fazer uma oferta" : "Make an Offer"}
                </a>
              </div>
            </div>
          </div>

          {/* Galeria em bento sem vão: print (2/3) + dois closes do mesmo print (1/3) */}
          <div className="mt-xl grid gap-0.5 overflow-hidden rounded-md lg:grid-cols-3">
            <button
              type="button"
              onClick={() => setZoomed(true)}
              aria-label={`${lang === "pt" ? "Ampliar print de" : "Enlarge screenshot of"} ${account.title}`}
              className="group relative block aspect-video w-full cursor-zoom-in overflow-hidden bg-surface-dark-card focus-visible:[outline-offset:-3px] lg:col-span-2"
            >
              <img
                {...lcpHint}
                src={account.image}
                alt=""
                width={1280}
                height={720}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
              <span aria-hidden="true" className="paddle absolute bottom-md right-md bg-canvas-dark/70 group-hover:bg-canvas-dark">
                <ZoomIn size={18} />
              </span>
            </button>
            <div aria-hidden="true" className="grid grid-cols-2 gap-0.5 lg:grid-cols-1 lg:grid-rows-2">
              {SIDE_CROPS.map((crop, i) => (
                <div key={i} className="aspect-video bg-surface-dark-elevated bg-no-repeat lg:aspect-auto" style={cropStyle(account.image, crop)} />
              ))}
            </div>
          </div>

          <ul className="mt-lg flex flex-wrap gap-x-lg gap-y-xs">
            {trust.map((item) => (
              <li key={item} className="flex items-center gap-xs text-caption-md text-body-dark">
                <CheckCircle2 size={16} aria-hidden="true" className="shrink-0 text-link-dark" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Faixa clara: atributos em colunas abertas + contas relacionadas */}
      <section className="band-light">
        <div className="page-container band-y space-y-section-mobile md:space-y-section-tablet lg:space-y-section">
          <div>
            <h2 className="text-display-md text-ink">{lang === "pt" ? "Descrição e atributos" : "Description & Attributes"}</h2>
            <div className="rhythm-cols mt-xl">
              {account.sections.map((sec, si) => (
                <div key={si}>
                  <h3 className="text-heading-md text-ink">{sec.title}</h3>
                  <ul className="mt-xs">
                    {sec.items.map((item, ii) => (
                      <li key={ii} className="break-words border-b border-hairline-light py-sm text-body-sm text-body-light last:border-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {similarAccounts.length > 0 && (
            <AccountRail
              title={lang === "pt" ? "Contas semelhantes" : "Similar Accounts"}
              note={account.className}
              accounts={similarAccounts}
            />
          )}
          <AccountRail title={lang === "pt" ? "Últimas adicionadas" : "Recently Added"} accounts={latestAccounts} />
          {recommendedAccounts.length > 0 && (
            <AccountRail title={lang === "pt" ? "Recomendadas" : "Recommended"} accounts={recommendedAccounts} />
          )}
        </div>
      </section>

      <ImageZoomDialog image={zoomed ? { src: account.image, title: account.title } : null} onClose={() => setZoomed(false)} />

      <Footer />
    </div>
  );
};

function AccountRail({ title, note, accounts }: { title: string; note?: string; accounts: AccountListing[] }) {
  return (
    <div>
      <h2 className="text-heading-xl text-ink">
        {title}
        {note && (
          <span className="ml-sm text-body-sm text-mute-light" translate="no">
            {note}
          </span>
        )}
      </h2>
      <div className="rhythm-grid mt-lg">
        {accounts.map((acc) => (
          <AccountCard key={acc.id} account={acc} />
        ))}
      </div>
    </div>
  );
}
