import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useAccountStore } from "@/hooks/useAccountStore";
import { useI18n } from "@/i18n";
import { AccountListing } from "@/data/accounts";
import { getAccountLevel } from "@/lib/accountFilters";
import { formatPrice, meaningfulBadge } from "@/lib/price";
import { getHighlights } from "@/lib/highlights";

interface AccountCardProps {
  account: AccountListing;
  /** Abre a prévia. Sem ele, o título vira link para a página da conta. */
  onSelect?: () => void;
  onImageZoom?: () => void;
}

/**
 * Card de conta: o print é a prova, então ele ocupa o topo inteiro, sem filtros por cima.
 * Uma ação visível (ver detalhes). Interesse e oferta continuam na prévia e na página da conta.
 *
 * O título é o botão que abre a prévia; o ::after dele cobre o card inteiro (clique em
 * qualquer lugar) e os outros controles ficam por cima com z-10.
 */
export const AccountCard: React.FC<AccountCardProps> = ({ account, onSelect, onImageZoom }) => {
  const { lang, withLang } = useI18n();
  const { isFavorite, toggleFavorite } = useAccountStore();

  const level = getAccountLevel(account);
  const favorited = isFavorite(account.id);
  const price = formatPrice(account, lang);
  const badge = meaningfulBadge(account.badge);

  const detailsHref = withLang(`/accounts/${account.id}`);
  // O ::after do título cobre o card inteiro (clique em qualquer lugar); o anel de foco vai nele
  const titleClass =
    "line-clamp-2 text-left transition-colors after:absolute after:inset-0 after:rounded-md after:content-[''] group-hover:text-link-light focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-primary";

  const meta = [account.className, level ? `Lv ${level}` : null].filter(Boolean).join(" · ");
  const fact = getHighlights(account, 1)[0];

  const image = (
    <img
      src={account.image}
      alt=""
      loading="lazy"
      width={640}
      height={360}
      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
    />
  );

  return (
    <article className="group relative flex h-full flex-col">
      {/* Sem zoom, o print fica por baixo do clique do card (abre a conta) */}
      <div className={`relative aspect-video overflow-hidden rounded-md bg-surface-soft ${onImageZoom ? "z-10" : ""}`}>
        {onImageZoom ? (
          <button
            type="button"
            onClick={onImageZoom}
            aria-label={`${lang === "pt" ? "Ampliar print de" : "Enlarge screenshot of"} ${account.title}`}
            className="block h-full w-full cursor-zoom-in focus-visible:[outline-offset:-3px]"
          >
            {image}
          </button>
        ) : (
          image
        )}
        {badge && <span className="badge-info pointer-events-none absolute left-sm top-sm">{badge}</span>}
        <button
          type="button"
          onClick={() => toggleFavorite(account.id)}
          aria-pressed={favorited}
          aria-label={lang === "pt" ? "Salvar nos interesses" : "Save to interests"}
          className={`absolute right-sm top-sm z-10 flex h-10 w-10 items-center justify-center rounded-full transition-[background-color,transform] duration-200 active:scale-90 ${
            favorited ? "bg-primary text-on-primary hover:bg-primary-pressed" : "bg-canvas-dark/70 text-on-dark hover:bg-canvas-dark"
          }`}
        >
          <Heart size={16} aria-hidden="true" className={favorited ? "fill-current" : ""} />
        </button>
      </div>

      <div className="flex flex-1 flex-col pt-md">
        <h3 className="text-heading-md text-ink sm:min-h-[2.7em]">
          {onSelect ? (
            <button type="button" onClick={onSelect} className={titleClass}>
              {account.title}
            </button>
          ) : (
            <Link to={detailsHref} className={titleClass}>
              {account.title}
            </Link>
          )}
        </h3>
        <p className="mt-xs flex flex-wrap gap-x-sm text-caption-md text-mute-light" translate="no">
          <span>{meta}</span>
          {fact && <span>{fact}</span>}
        </p>

        <div className="mt-auto flex items-end justify-between gap-3 pt-md">
          <p className="tabular text-price-md text-ink">
            {price.amount}
            {price.unit && <span className="ml-1.5 text-caption-md text-mute-light">{price.unit}</span>}
          </p>
          <Link to={detailsHref} className="link-light relative z-10 shrink-0 text-caption-md">
            {lang === "pt" ? "Ver detalhes" : "View Details"}
          </Link>
        </div>
      </div>
    </article>
  );
};
