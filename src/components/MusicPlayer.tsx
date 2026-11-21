import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Volume2, VolumeX } from "lucide-react";
import { useI18n } from "@/i18n";
import { NO_OPTIONAL, saveConsent, useConsent } from "@/lib/consent";
import { returnFocusProps } from "@/lib/dialogFocus";

const VIDEO_ID = "B0xna59xvgg";
// youtube-nocookie: o YouTube não grava cookies de rastreamento enquanto o vídeo não é reproduzido.
const YT_ORIGIN = "https://www.youtube-nocookie.com";
const MUSIC_URL = `${YT_ORIGIN}/embed/${VIDEO_ID}?autoplay=1&loop=1&playlist=${VIDEO_ID}&controls=0&rel=0&modestbranding=1&enablejsapi=1`;

/**
 * Música de fundo desligada por padrão: o iframe só é criado no primeiro clique
 * (o gesto do visitante libera o autoplay com som). Depois, pausar/retomar vai pela
 * API do player via postMessage, sem recarregar o iframe nem reiniciar a faixa.
 *
 * O player é do YouTube (Google), que grava cookies ao tocar: sem consentimento de
 * "marketing e conteúdo de terceiros", o primeiro clique pergunta antes de criar o iframe,
 * e retirar o consentimento remove o iframe.
 */
export default function MusicPlayer() {
  const { lang, withLang } = useI18n();
  const { record, granted } = useConsent();
  const allowed = granted("marketing");
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [asking, setAsking] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const pt = lang === "pt";

  useEffect(() => {
    if (!allowed) {
      setStarted(false);
      setPlaying(false);
    }
  }, [allowed]);

  const command = (func: "playVideo" | "pauseVideo") => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      YT_ORIGIN,
    );
  };

  const start = () => {
    setStarted(true);
    setPlaying(true);
  };

  const handleToggle = () => {
    if (!allowed) {
      setAsking(true);
      return;
    }
    if (!started) {
      start();
      return;
    }
    command(playing ? "pauseVideo" : "playVideo");
    setPlaying((p) => !p);
  };

  // Permite só esta categoria; as outras ficam como estavam (ou desligadas, se ainda não houve escolha)
  const allowAndPlay = () => {
    saveConsent({ ...(record?.choices ?? NO_OPTIONAL), marketing: true });
    setAsking(false);
    start();
  };

  return (
    <>
      <PopoverPrimitive.Root open={asking} onOpenChange={setAsking}>
        <PopoverPrimitive.Anchor asChild>
          <button
            type="button"
            onClick={handleToggle}
            aria-pressed={playing}
            aria-label={pt ? "Música de fundo" : "Background Music"}
            className={`paddle fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-[max(1rem,env(safe-area-inset-left))] z-50 shadow-[0_8px_24px_rgba(0,0,0,0.35)] [--focus-ring:theme(colors.primary.DEFAULT)] ${
              playing ? "bg-primary hover:bg-primary-pressed" : ""
            }`}
          >
            {playing ? <Volume2 size={16} aria-hidden="true" /> : <VolumeX size={16} aria-hidden="true" />}
          </button>
        </PopoverPrimitive.Anchor>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            side="top"
            align="start"
            sideOffset={12}
            collisionPadding={16}
            aria-labelledby="music-consent-title"
            {...returnFocusProps(opener)}
            className="band-dark z-[60] w-[min(20rem,calc(100vw-2rem))] rounded-md border border-hairline-dark !bg-surface-dark-card p-md text-on-dark shadow-[0_24px_64px_rgba(0,0,0,0.35)] outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0"
          >
            <h2 id="music-consent-title" className="text-heading-md">
              {pt ? "Tocar pelo YouTube?" : "Play via YouTube?"}
            </h2>
            <p className="mt-xs text-caption-md text-body-dark">
              {pt
                ? "A música vem do YouTube (Google), que pode gravar cookies de publicidade no seu navegador enquanto ela toca. "
                : "The music comes from YouTube (Google), which may set advertising cookies in your browser while it plays. "}
              <Link to={withLang("/cookies")} onClick={() => setAsking(false)} className="link-dark">
                {pt ? "Saiba mais" : "Learn more"}
              </Link>
            </p>
            <div className="mt-md flex gap-xs">
              <PopoverPrimitive.Close className="btn btn-md btn-secondary-dark flex-1">
                {pt ? "Agora não" : "Not Now"}
              </PopoverPrimitive.Close>
              <button type="button" onClick={allowAndPlay} className="btn btn-md btn-primary flex-1">
                {pt ? "Permitir e tocar" : "Allow & Play"}
              </button>
            </div>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>

      {started && allowed && (
        <iframe
          ref={iframeRef}
          src={MUSIC_URL}
          className="hidden"
          allow="autoplay"
          tabIndex={-1}
          title={pt ? "Música de fundo" : "Background music"}
        />
      )}
    </>
  );
}
