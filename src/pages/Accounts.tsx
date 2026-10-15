import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowRight, ChevronRight, MessageCircle, X } from "lucide-react";
import { Link, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ACCOUNTS } from "@/data/accounts";
import type { AccountListing } from "@/data/accounts";
import HeroSection from "@/components/HeroSection";
import { StickyFilterBar } from "@/components/StickyFilterBar";
import { FilterDrawer } from "@/components/FilterDrawer";
import { AccountCard } from "@/components/AccountCard";
import { EmptyState } from "@/components/EmptyState";
import { getMinCpsK, getAccountLevel, filterAccounts } from "@/lib/accountFilters";
import { useAccountStore } from "@/hooks/useAccountStore";
import { useI18n } from "@/i18n";
import { toast } from "sonner";
import { Footer } from "@/components/Footer";
import { AccountDetailPage } from "@/components/AccountDetailPage";
import { formatLastUpdated } from "@/lib/lastUpdated";
import { formatPrice, meaningfulBadge } from "@/lib/price";
import { buildWa } from "@/lib/whatsapp";
import { returnFocusProps } from "@/lib/dialogFocus";
import { ImageZoomDialog } from "@/components/ImageZoomDialog";
import { getHighlights } from "@/lib/highlights";
import { BENTO_CROPS, cropStyle } from "@/lib/printCrops";

/** A prévia aberta fica na URL (?conta=acc-83): dá para compartilhar e o Voltar do navegador fecha. */
const PREVIEW_PARAM = "conta";

function AccountsList() {
  const { lang, t, withLang } = useI18n();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const previewId = searchParams.get(PREVIEW_PARAM);
  const selected = previewId ? ACCOUNTS.find((a) => a.id === previewId) ?? null : null;

  // Estados locais para dialogs
  const [zoomed, setZoomed] = useState<AccountListing | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Quem abriu a prévia recebe o foco de volta ao fechar (ver returnFocusProps)
  const previewOpener = useRef<HTMLElement | null>(null);

  const {
    searchQuery,
    selectedClass,
    minPrice,
    maxPrice,
    includeNegotiable,
    levelFilter,
    sortBy,
    clearFilters,
  } = useAccountStore();

  const openPreview = (acc: AccountListing) => {
    const next = new URLSearchParams(searchParams);
    next.set(PREVIEW_PARAM, acc.id);
    setSearchParams(next, { state: { preview: true } });
  };

  // Aberta por aqui: volta uma entrada no histórico. Aberta por link direto: só tira o parâmetro.
  const closePreview = () => {
    if ((location.state as { preview?: boolean } | null)?.preview) {
      navigate(-1);
      return;
    }
    const next = new URLSearchParams(searchParams);
    next.delete(PREVIEW_PARAM);
    setSearchParams(next, { replace: true });
  };

  // Filtragem (mesma regra da contagem da gaveta, em lib/accountFilters) e ordenação
  const { filtered, fallbackUsed } = useMemo(() => {
    const list = filterAccounts(ACCOUNTS, {
      search: searchQuery,
      className: selectedClass,
      minPrice,
      maxPrice,
      includeNegotiable,
      levels: levelFilter,
    });

    // Fallback: se o filtro por classe resultou em 0 contas, traz sugestões alternativas
    if (selectedClass && list.length === 0 && levelFilter.length === 0) {
      const fallback = ACCOUNTS.filter((a) => a.className !== selectedClass).slice(0, 4);
      return { filtered: fallback, fallbackUsed: true };
    }

    // 5. Ordenação Dinâmica
    list.sort((a, b) => {
      if (sortBy === "price-asc") {
        const pA = getMinCpsK(a) ?? Infinity;
        const pB = getMinCpsK(b) ?? Infinity;
        return pA - pB;
      }
      if (sortBy === "price-desc") {
        const pA = getMinCpsK(a) ?? -Infinity;
        const pB = getMinCpsK(b) ?? -Infinity;
        return pB - pA;
      }
      if (sortBy === "level-desc") {
        const lA = getAccountLevel(a) ?? 0;
        const lB = getAccountLevel(b) ?? 0;
        return lB - lA;
      }
      // "newest": anúncio novo entra no topo do arquivo de dados, então a ordem do arquivo já é a mais recente primeiro
      return ACCOUNTS.indexOf(a) - ACCOUNTS.indexOf(b);
    });

    return { filtered: list, fallbackUsed: false };
  }, [searchQuery, selectedClass, minPrice, maxPrice, includeNegotiable, levelFilter, sortBy]);

  const handleClearFilters = () => {
    clearFilters();
    toast.info(lang === "pt" ? "Filtros limpos!" : "Filters cleared!");
  };

  const handleWhatsAppRedirect = () => {
    toast.success(lang === "pt" ? "Redirecionando para o WhatsApp… 📲" : "Redirecting to WhatsApp… 📲");
  };

  const heading = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-10% 0px" },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  const zoomLabel = lang === "pt" ? "Ampliar print de" : "Enlarge screenshot of";
  const closeLabel = lang === "pt" ? "Fechar" : "Close";
  const selectedPrice = selected ? formatPrice(selected, lang) : null;
  const selectedBadge = selected ? meaningfulBadge(selected.badge) : null;
  const selectedLevel = selected ? getAccountLevel(selected) : null;
  const selectedMeta = selected
    ? [selected.className, selectedLevel ? `Lv ${selectedLevel}` : null, ...getHighlights(selected)].filter(Boolean).join(" · ")
    : "";
  // Os primeiros itens da primeira seção são os destaques que o vendedor escolheu
  const selectedFacts = selected ? (selected.sections[0]?.items ?? []).slice(0, 5) : [];

  return (
    <div>
      {/* Capítulo 1 (faixa escura): conta em destaque */}
      <HeroSection />

      {/* Capítulo 2 (faixa clara): catálogo */}
      <section className="band-light" aria-labelledby="todas-as-contas-titulo">
        {/* No desktop o scroll-padding do <html> já conta a barra de filtros, que aqui ainda não está colada no topo */}
        <div
          id="todas-as-contas"
          className="page-container grid gap-md pb-xl pt-section-mobile md:pt-section-tablet lg:-scroll-mt-16 lg:grid-cols-12 lg:items-end lg:gap-x-lg lg:pt-section"
        >
          <motion.h2 {...heading(0)} id="todas-as-contas-titulo" className="text-display-lg text-ink lg:col-span-6">
            {lang === "pt" ? "Todas as contas" : "All Accounts"}
          </motion.h2>
          <motion.div {...heading(0.08)} className="lg:col-span-5 lg:col-start-8">
            <p className="max-w-[52ch] text-body-sm text-body-light">
              {lang === "pt"
                ? "Cada conta com os próprios prints. Preço em CPs, conversa direta pelo WhatsApp."
                : "Every account with its own screenshots. Prices in CPs, straight talk on WhatsApp."}
            </p>
            <p className="tabular mt-xs text-caption-md text-mute-light">
              {lang === "pt"
                ? `Atualizado em ${formatLastUpdated(lang)} (Brasília)`
                : `Updated ${formatLastUpdated(lang)} (Brasília time)`}
            </p>
          </motion.div>
        </div>

        <StickyFilterBar
          onOpenFilters={() => setFiltersOpen(true)}
          filtersOpen={filtersOpen}
          filteredCount={filtered.length}
        />

        <div
          id="accounts-listing"
          className="page-container pb-section-mobile pt-xl md:pb-section-tablet lg:pb-section"
        >
          {fallbackUsed && (
            <div className="mb-xl rounded-md bg-surface-card p-lg">
              <p className="text-heading-md text-ink">{t("acc.classSoldOut")}</p>
              <p className="mt-1 text-body-sm text-body-light">{t("acc.classSoldOutHint")}</p>
            </div>
          )}

          {filtered.length === 0 ? (
            <EmptyState onClear={handleClearFilters} />
          ) : (
            <div className="rhythm-grid">
              {filtered.map((acc, i) => (
                <motion.div
                  key={acc.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                  transition={{ duration: 0.6, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  <AccountCard account={acc} onSelect={() => openPreview(acc)} onImageZoom={() => setZoomed(acc)} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Gaveta de filtros */}
      <FilterDrawer open={filtersOpen} onOpenChange={setFiltersOpen} />

      {/* Prévia da conta (dialog-card): print + closes à esquerda, decisão à direita. Radix cuida de
          Esc, foco preso, devolução do foco e trava de scroll */}
      <DialogPrimitive.Root open={selected !== null} onOpenChange={(open) => !open && closePreview()}>
        {selected && selectedPrice && (
          <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay className="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-canvas-dark/80 p-4 pt-12 data-[state=open]:animate-in data-[state=open]:fade-in-0 sm:pt-16">
              <DialogPrimitive.Content
                aria-describedby={undefined}
                {...returnFocusProps(previewOpener)}
                className="band-light relative mx-auto mb-12 grid w-full max-w-[1120px] overflow-hidden rounded-lg shadow-[0_24px_64px_rgba(0,0,0,0.35)] outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-10 data-[state=open]:duration-500 lg:grid-cols-12"
              >
                <DialogPrimitive.Close
                  aria-label={closeLabel}
                  className="absolute right-md top-md z-10 flex h-10 w-10 items-center justify-center rounded-full bg-canvas-dark/70 text-on-dark transition-colors hover:bg-canvas-dark lg:right-lg lg:top-lg lg:border lg:border-ash-light lg:bg-canvas-light lg:text-ink lg:hover:border-ink lg:hover:bg-canvas-light"
                >
                  <X size={18} aria-hidden="true" />
                </DialogPrimitive.Close>

                {/* Galeria: print + três closes num bento sem vão */}
                <div className="p-md sm:p-lg lg:col-span-7">
                  <button
                    type="button"
                    onClick={() => setZoomed(selected)}
                    aria-label={`${zoomLabel} ${selected.title}`}
                    className="block aspect-video w-full cursor-zoom-in overflow-hidden rounded-t-md bg-surface-soft focus-visible:[outline-offset:-3px]"
                  >
                    <img src={selected.image} alt="" width={1280} height={720} className="h-full w-full object-cover" />
                  </button>
                  <div aria-hidden="true" className="mt-0.5 grid grid-cols-3 gap-0.5 overflow-hidden rounded-b-md">
                    {BENTO_CROPS.map((crop, i) => (
                      <div key={i} className="aspect-square bg-surface-soft bg-no-repeat" style={cropStyle(selected.image, crop)} />
                    ))}
                  </div>
                </div>

                {/* Decisão: o que é, quanto custa, o que tem de melhor, e como falar */}
                <div className="flex flex-col px-lg pb-lg lg:col-span-5 lg:py-xl lg:pl-xs lg:pr-xl">
                  {selectedBadge && <span className="badge-info mb-md self-start">{selectedBadge}</span>}
                  <DialogPrimitive.Title className="text-heading-xl text-ink lg:pr-12">{selected.title}</DialogPrimitive.Title>
                  <p className="mt-1 text-caption-md text-mute-light" translate="no">
                    {selectedMeta}
                  </p>
                  <p className="tabular mt-lg text-price-lg text-ink">
                    {selectedPrice.amount}
                    {selectedPrice.unit && <span className="ml-1.5 text-body-sm text-mute-light">{selectedPrice.unit}</span>}
                  </p>

                  <ul className="mt-lg">
                    {selectedFacts.map((item, i) => (
                      <li key={i} className="break-words border-b border-hairline-light py-sm text-body-sm text-body-light last:border-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link to={withLang(`/accounts/${selected.id}`)} className="link-light mt-sm self-start text-caption-md">
                    {lang === "pt" ? "Ver todos os atributos" : "See All Attributes"}
                  </Link>

                  <div className="mt-auto space-y-sm pt-xl">
                    <a
                      href={buildWa(t("wa.interest", { title: selected.title }))}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleWhatsAppRedirect}
                      className="btn btn-commerce w-full"
                    >
                      <MessageCircle size={16} aria-hidden="true" />
                      <span>{t("acc.interested")}</span>
                    </a>
                    <Link to={withLang(`/accounts/${selected.id}`)} className="btn btn-secondary-light w-full">
                      <span>{t("acc.directLink")}</span>
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                    <a
                      href={buildWa(t("wa.offer", { title: selected.title }))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-light block py-xs text-center text-caption-md"
                    >
                      {t("acc.makeOffer")}
                    </a>
                  </div>
                </div>
              </DialogPrimitive.Content>
            </DialogPrimitive.Overlay>
          </DialogPrimitive.Portal>
        )}
      </DialogPrimitive.Root>

      {/* Print ampliado: abre por cima da prévia (ou direto do card) */}
      <ImageZoomDialog
        image={zoomed && { src: zoomed.image, title: zoomed.title }}
        onClose={() => setZoomed(null)}
      />

      {/* Capítulo 3 (faixa da marca) */}
      <Footer />
    </div>
  );
}

export default function Accounts() {
  const { accountId } = useParams();

  if (accountId) {
    const account = ACCOUNTS.find((a) => a.id === accountId);
    if (!account) {
      return <AccountNotFound />;
    }
    return <AccountDetailPage account={account} />;
  }

  return <AccountsList />;
}

function AccountNotFound() {
  const { t, withLang } = useI18n();
  return (
    <div>
      <section className="band-dark">
        <div className="page-container flex min-h-[calc(100svh-theme(spacing.nav-height))] flex-col items-start justify-center py-section-mobile md:py-section-tablet lg:py-section">
          <h1 className="max-w-[20ch] text-display-lg text-on-dark">{t("acc.notFound")}</h1>
          <p className="mt-md max-w-[46ch] text-body-md text-body-dark">
            {t("acc.notFoundHint")}
          </p>
          <Link to={withLang("/")} className="btn btn-primary mt-xl">
            <span>{t("acc.backToAccounts")}</span>
            <ChevronRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
