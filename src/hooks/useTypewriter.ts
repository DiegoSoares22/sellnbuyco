import { useEffect, useState } from "react";

export function useTypewriter(text: string, speed = 28, startDelay = 200) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setOut("");
    setDone(false);
    let i = 0;
    let timer: number | undefined;
    const start = window.setTimeout(() => {
      timer = window.setInterval(() => {
        i++;
        setOut(text.slice(0, i));
        if (i >= text.length) {
          window.clearInterval(timer);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(start);
      if (timer) window.clearInterval(timer);
    };
  }, [text, speed, startDelay]);

  return { text: out, done };
}
