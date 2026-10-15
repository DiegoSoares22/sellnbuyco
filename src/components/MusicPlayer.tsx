import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useI18n } from "@/i18n";

const VIDEO_ID = "B0xna59xvgg";
const MUSIC_URL = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&loop=1&playlist=${VIDEO_ID}&controls=0&rel=0&modestbranding=1&enablejsapi=1`;

/**
 * Música de fundo desligada por padrão: o iframe só é criado no primeiro clique
 * (o gesto do visitante libera o autoplay com som). Depois, pausar/retomar vai pela
 * API do player via postMessage, sem recarregar o iframe nem reiniciar a faixa.
 */
export default function MusicPlayer() {
  const { lang } = useI18n();
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const command = (func: "playVideo" | "pauseVideo") => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      "https://www.youtube.com",
    );
  };

  const handleToggle = () => {
    if (!started) {
      setStarted(true);
      setPlaying(true);
      return;
    }
    command(playing ? "pauseVideo" : "playVideo");
    setPlaying((p) => !p);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleToggle}
        aria-pressed={playing}
        aria-label={lang === "pt" ? "Música de fundo" : "Background Music"}
        className={`paddle fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-[max(1rem,env(safe-area-inset-left))] z-50 shadow-[0_8px_24px_rgba(0,0,0,0.35)] [--focus-ring:theme(colors.primary.DEFAULT)] ${
          playing ? "bg-primary hover:bg-primary-pressed" : ""
        }`}
      >
        {playing ? <Volume2 size={16} aria-hidden="true" /> : <VolumeX size={16} aria-hidden="true" />}
      </button>

      {started && (
        <iframe
          ref={iframeRef}
          src={MUSIC_URL}
          className="hidden"
          allow="autoplay"
          tabIndex={-1}
          title={lang === "pt" ? "Música de fundo" : "Background music"}
        />
      )}
    </>
  );
}
