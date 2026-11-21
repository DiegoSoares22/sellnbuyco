import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { X } from "lucide-react";
import { useI18n } from "@/i18n";
import { ALL_OPTIONAL, NO_OPTIONAL, onOpenCookiePreferences, saveConsent, useConsent } from "@/lib/consent";
import { returnFocusProps } from "@/lib/dialogFocus";

/**
 * Aviso de cookies + painel de preferências (Guia de Cookies da ANPD):
 * - aparece até haver uma escolha; não bloqueia a página;
 * - "Aceitar todos" e "Rejeitar opcionais" têm o mesmo peso visual e o mesmo número de cliques;
 * - o painel reabre pelo rodapé, pela página de cookies e pela Política de Privacidade.
 * Hoje a única coisa opcional é a música de fundo (YouTube). Analíticos e preferências aparecem
 * como "não usamos" para o visitante ver o que não está acontecendo.
 */
export default function CookieConsent() {
  const { lang, withLang } = useI18n();
  const { record, decided } = useConsent();
  const [open, setOpen] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const opener = useRef<HTMLElement | null>(null);
  const pt = lang === "pt";

  const openPreferences = () => {
    // O painel sempre abre com a escolha salva; sem escolha, tudo opcional desligado
    setMarketing(record?.choices.marketing === true);
    setOpen(true);
  };

  useEffect(() => onOpenCookiePreferences(openPreferences));

  const save = (choices: typeof NO_OPTIONAL) => {
    saveConsent(choices);
    setOpen(false);
  };

  const decidedAt = record
    ? new Intl.DateTimeFormat(pt ? "pt-BR" : "en-US", { dateStyle: "long", timeStyle: "short" }).format(
        new Date(record.decidedAt),
      )
    : null;

  return (
    <>
      {!decided && (
        <section
          aria-labelledby="cookie-banner-title"
          className="band-dark fixed inset-x-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-[60] rounded-md border border-hairline-dark !bg-surface-dark-card p-md shadow-[0_24px_64px_rgba(0,0,0,0.35)] sm:left-auto sm:w-[440px] sm:p-lg"
        >
          <h2 id="cookie-banner-title" className="text-heading-md text-on-dark">
            {pt ? "Sua privacidade" : "Your Privacy"}
          </h2>
          <p className="mt-xs text-caption-md text-body-dark">
            {pt
              ? "Usamos só o essencial para o site funcionar. A música de fundo vem do YouTube (Google), que pode gravar cookies de publicidade: ela só toca se você permitir. "
              : "We only use what the site needs to work. The background music comes from YouTube (Google), which may set advertising cookies: it only plays if you allow it. "}
            <Link to={withLang("/cookies")} className="link-dark">
              {pt ? "Política de Cookies" : "Cookie Policy"}
            </Link>
          </p>
          <div className="mt-md flex flex-wrap gap-xs">
            <button type="button" onClick={() => save(ALL_OPTIONAL)} className="btn btn-md btn-secondary-dark flex-1">
              {pt ? "Aceitar todos" : "Accept All"}
            </button>
            <button type="button" onClick={() => save(NO_OPTIONAL)} className="btn btn-md btn-secondary-dark flex-1">
              {pt ? "Rejeitar opcionais" : "Reject Optional"}
            </button>
          </div>
          <button type="button" onClick={openPreferences} className="link-dark mt-sm text-caption-md">
            {pt ? "Escolher por categoria" : "Choose by Category"}
          </button>
        </section>
      )}

      <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-[70] overflow-y-auto overscroll-contain bg-canvas-dark/80 p-4 pt-12 data-[state=open]:animate-in data-[state=open]:fade-in-0 sm:pt-16">
            <DialogPrimitive.Content
              {...returnFocusProps(opener)}
              className="band-light relative mx-auto mb-12 w-full max-w-lg rounded-lg p-lg shadow-[0_24px_64px_rgba(0,0,0,0.35)] outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:p-xl"
            >
              <DialogPrimitive.Close
                aria-label={pt ? "Fechar" : "Close"}
                className="absolute right-md top-md flex h-10 w-10 items-center justify-center rounded-full border border-ash-light text-ink hover:border-ink"
              >
                <X size={18} aria-hidden="true" />
              </DialogPrimitive.Close>

              <DialogPrimitive.Title className="pr-12 text-heading-xl text-ink">
                {pt ? "Preferências de cookies" : "Cookie Preferences"}
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="mt-xs text-body-sm text-body-light">
                {pt
                  ? "Escolha o que pode rodar no seu navegador. Dá para mudar quando quiser pelo rodapé do site."
                  : "Choose what can run in your browser. You can change it anytime from the site footer."}
              </DialogPrimitive.Description>

              <ul className="mt-lg">
                <CategoryRow
                  title={pt ? "Essenciais" : "Essential"}
                  status={pt ? "Sempre ativos" : "Always On"}
                  description={
                    pt
                      ? "Guardam esta escolha e a sua lista de interesses (o coração nas contas). Ficam só no seu navegador e não são enviados para nós."
                      : "They store this choice and your interests list (the heart on accounts). They stay in your browser and are not sent to us."
                  }
                />
                <CategoryRow
                  title={pt ? "Preferências" : "Preferences"}
                  status={pt ? "Não usamos" : "Not Used"}
                  description={
                    pt
                      ? "Lembrariam configurações como tema. O idioma vai no endereço da página, então nada é guardado."
                      : "They would remember settings such as theme. Language is part of the page address, so nothing is stored."
                  }
                />
                <CategoryRow
                  title={pt ? "Analíticos" : "Analytics"}
                  status={pt ? "Não usamos" : "Not Used"}
                  description={
                    pt
                      ? "Mediriam visitas e cliques. O site não tem Google Analytics nem ferramenta parecida."
                      : "They would measure visits and clicks. The site has no Google Analytics or similar tool."
                  }
                />
                <li className="border-t border-hairline-light py-md">
                  <div className="flex items-center justify-between gap-md">
                    <label htmlFor="consent-marketing" className="text-body-strong text-ink">
                      {pt ? "Marketing e conteúdo de terceiros" : "Marketing & Third-Party Content"}
                    </label>
                    <SwitchPrimitive.Root
                      id="consent-marketing"
                      checked={marketing}
                      onCheckedChange={setMarketing}
                      aria-describedby="consent-marketing-desc"
                      className="inline-flex h-7 w-12 shrink-0 items-center rounded-full border-2 border-mute-light bg-canvas-light p-0.5 transition-colors data-[state=checked]:border-primary data-[state=checked]:bg-primary"
                    >
                      <SwitchPrimitive.Thumb className="block h-5 w-5 rounded-full bg-mute-light transition-transform data-[state=checked]:translate-x-5 data-[state=checked]:bg-on-primary" />
                    </SwitchPrimitive.Root>
                  </div>
                  <p id="consent-marketing-desc" className="mt-xs text-caption-md text-body-light">
                    {pt
                      ? "Música de fundo pelo YouTube (Google). Ao tocar, o YouTube pode gravar cookies e identificadores que ele usa para publicidade e estatísticas."
                      : "Background music via YouTube (Google). When it plays, YouTube may set cookies and identifiers it uses for advertising and statistics."}
                  </p>
                </li>
              </ul>

              {decidedAt && (
                <p className="text-caption-md text-mute-light">
                  {pt ? `Escolha salva em ${decidedAt}.` : `Choice saved on ${decidedAt}.`}
                </p>
              )}

              <div className="mt-lg flex flex-col gap-sm sm:flex-row">
                <button type="button" onClick={() => save(NO_OPTIONAL)} className="btn btn-md btn-secondary-light flex-1">
                  {pt ? "Rejeitar opcionais" : "Reject Optional"}
                </button>
                <button
                  type="button"
                  onClick={() => save({ ...NO_OPTIONAL, marketing })}
                  className="btn btn-md btn-primary flex-1"
                >
                  {pt ? "Salvar escolhas" : "Save Choices"}
                </button>
              </div>
              <p className="mt-md text-caption-md text-mute-light">
                <Link to={withLang("/cookies")} onClick={() => setOpen(false)} className="link-light">
                  {pt ? "Ver a lista completa na Política de Cookies" : "See the full list in the Cookie Policy"}
                </Link>
              </p>
            </DialogPrimitive.Content>
          </DialogPrimitive.Overlay>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
}

function CategoryRow({ title, status, description }: { title: string; status: string; description: string }) {
  return (
    <li className="border-t border-hairline-light py-md first:border-t-0 first:pt-0">
      <div className="flex items-center justify-between gap-md">
        <p className="text-body-strong text-ink">{title}</p>
        <span className="shrink-0 text-caption-md text-mute-light">{status}</span>
      </div>
      <p className="mt-xs text-caption-md text-body-light">{description}</p>
    </li>
  );
}
