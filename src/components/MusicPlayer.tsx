import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MUSIC_URL = "https://www.youtube.com/embed/B0xna59xvgg?autoplay=1&loop=1&playlist=B0xna59xvgg&controls=0&showinfo=0&rel=0&modestbranding=1";

export default function MusicPlayer() {
  const [muted, setMuted] = useState(true);
  const [started, setStarted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleToggle = () => {
    if (!started) setStarted(true);
    setMuted((p) => !p);
  };

  return (
    <>
      <button
        onClick={handleToggle}
        className="fixed bottom-4 left-4 z-50 w-10 h-10 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-card-foreground hover:border-primary/50 transition-colors"
        title={muted ? "Ativar música" : "Mutar música"}
      >
        {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>

      {started && (
        <iframe
          ref={iframeRef}
          src={`${MUSIC_URL}&mute=${muted ? 1 : 0}`}
          className="hidden"
          allow="autoplay"
          title="Background Music"
        />
      )}
    </>
  );
}
