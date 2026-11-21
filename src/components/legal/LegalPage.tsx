import { useEffect, type ReactNode } from "react";
import { useI18n } from "@/i18n";
import { Footer } from "@/components/Footer";
import { formatLegalDate, LEGAL_UPDATED } from "@/lib/legal";

export interface LegalSection {
  id: string;
  title: string;
  body: ReactNode;
}

interface LegalPageProps {
  title: string;
  /** Título da aba em inglês (o documento em si é em português) */
  titleEn: string;
  intro: ReactNode;
  /** Resumo curto em inglês, mostrado nas rotas /en */
  summaryEn: string[];
  sections: LegalSection[];
}

/**
 * Molde das páginas legais: faixa escura com título e data, faixa clara com índice e o texto em
 * colunas de ~60 caracteres, rodapé da marca. O texto vale em português (CDC, art. 31); nas rotas
 * /en entra um resumo em inglês e o documento segue marcado como pt-BR para leitor de tela.
 */
export function LegalPage({ title, titleEn, intro, summaryEn, sections }: LegalPageProps) {
  const { lang } = useI18n();
  const en = lang === "en";

  useEffect(() => {
    const previous = document.title;
    document.title = `${en ? titleEn : title} | SellNBuyCO`;
    window.scrollTo({ top: 0 });
    // Ao sair pelo roteador, a aba volta ao título de antes
    return () => {
      document.title = previous;
    };
  }, [en, title, titleEn]);

  return (
    <div>
      <section className="band-dark">
        <div className="page-container band-y">
          <h1 className="max-w-[20ch] text-display-lg text-on-dark" lang="pt-BR">
            {title}
          </h1>
          <p className="tabular mt-md text-caption-md text-mute-dark">
            {en ? "Last updated: " : "Última atualização: "}
            {formatLegalDate(LEGAL_UPDATED)}
          </p>
          <div className="mt-md max-w-[60ch] text-body-md text-body-dark" lang="pt-BR">
            {intro}
          </div>
        </div>
      </section>

      <section className="band-light">
        <div className="page-container band-y grid gap-xl lg:grid-cols-12 lg:gap-x-lg">
          <nav aria-label={en ? "On this page" : "Nesta página"} className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(theme(spacing.nav-height)+2rem)]">
              <h2 className="text-caption-sm uppercase text-mute-light">{en ? "On this page" : "Nesta página"}</h2>
              <ol className="mt-sm space-y-xs" lang="pt-BR">
                {sections.map((s, i) => (
                  <li key={s.id} className="text-caption-md">
                    <a href={`#${s.id}`} className="text-body-light underline-offset-4 hover:text-ink hover:underline">
                      <span className="tabular text-mute-light">{i + 1}.</span> {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <article className="min-w-0 lg:col-span-8" lang="pt-BR">
            {en && (
              <div lang="en" className="mb-xl rounded-md bg-surface-card p-lg">
                <h2 className="text-heading-md text-ink">English Summary</h2>
                <p className="mt-xs text-body-sm text-body-light">
                  The full document below is in Portuguese, which is the governing version under Brazilian consumer law.
                </p>
                <ul className="mt-sm list-disc space-y-1 pl-5 text-body-sm text-body-light">
                  {summaryEn.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            )}

            {sections.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                aria-labelledby={`${s.id}-titulo`}
                className="border-t border-hairline-light py-xl first-of-type:border-t-0 first-of-type:pt-0"
              >
                <h2 id={`${s.id}-titulo`} className="text-heading-xl text-ink">
                  <span className="tabular text-mute-light">{i + 1}.</span> {s.title}
                </h2>
                <div className="legal-body mt-md max-w-[68ch] space-y-sm text-body-sm text-body-light">{s.body}</div>
              </section>
            ))}
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/** Dado do responsável que ainda não foi informado (ver src/lib/legal.ts). */
export function Pending({ children }: { children: ReactNode }) {
  return (
    <mark className="rounded-sm bg-[#fff4d6] px-1 py-0.5 text-ink [box-decoration-break:clone]">
      [a preencher: {children}]
    </mark>
  );
}

/** Mostra o valor informado em src/lib/legal.ts ou a marca de pendência. */
export function OperatorField({ value, missing }: { value: string | null; missing: string }) {
  return value ? <>{value}</> : <Pending>{missing}</Pending>;
}

/** Tabela simples e legível no celular (rola na horizontal dentro do próprio bloco). */
export function LegalTable({ head, rows, caption }: { head: string[]; rows: ReactNode[][]; caption: string }) {
  return (
    <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0" role="region" aria-label={caption} tabIndex={0}>
      <table className="w-full min-w-[560px] border-collapse text-left text-caption-md">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-ash-light text-ink">
            {head.map((h) => (
              <th key={h} scope="col" className="py-xs pr-md align-bottom font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-hairline-light align-top last:border-0">
              {row.map((cell, j) =>
                j === 0 ? (
                  <th key={j} scope="row" className="py-sm pr-md font-semibold text-ink">
                    {cell}
                  </th>
                ) : (
                  <td key={j} className="py-sm pr-md text-body-light">
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
