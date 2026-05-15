import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Trophy, RotateCcw, Play, Rocket } from "lucide-react";
import bgImg from "@/assets/pinball-bg.png";
import ballImg from "@/assets/pinball-ball.png";
import meteorImg from "@/assets/pinball-meteor.png";
import boneImg from "@/assets/pinball-bone.png";
import jiangImg from "@/assets/pinball-jiang.png";

const W = 480;
const H = 720;
const RECORD_KEY = "sb_pinball_record";

interface Bumper {
  x: number;
  y: number;
  r: number;
  pts: number;
  img: HTMLImageElement;
  flash: number;
}

export default function Antitedio() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(1);
  const [record, setRecord] = useState<number>(() => {
    try { return parseInt(localStorage.getItem(RECORD_KEY) || "0", 10) || 0; } catch { return 0; }
  });
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // refs to avoid stale closures inside the rAF loop
  const runningRef = useRef(false);
  const gameOverRef = useRef(false);
  const recordRef = useRef(record);
  const scoreRef = useRef(0);
  const comboRef = useRef(1);
  const lastHitRef = useRef(0);
  const keysRef = useRef<Record<string, boolean>>({});
  const launchRef = useRef<() => void>(() => {});

  useEffect(() => { runningRef.current = running; }, [running]);
  useEffect(() => { gameOverRef.current = gameOver; }, [gameOver]);
  useEffect(() => { recordRef.current = record; }, [record]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const ballI = new Image(); ballI.src = ballImg;
    const bgI = new Image(); bgI.src = bgImg;
    const meteorI = new Image(); meteorI.src = meteorImg;
    const boneI = new Image(); boneI.src = boneImg;
    const jiangI = new Image(); jiangI.src = jiangImg;

    const ball = { x: W * 0.7, y: H * 0.3, vx: 0, vy: 0, r: 16, angle: 0 };
    const gravity = 0.32;
    const friction = 0.998;

    const bumpers: Bumper[] = [
      { x: 120, y: 180, r: 32, pts: 50, img: jiangI, flash: 0 },
      { x: 360, y: 220, r: 32, pts: 50, img: jiangI, flash: 0 },
      { x: 240, y: 300, r: 36, pts: 50, img: jiangI, flash: 0 },
      { x: 90,  y: 380, r: 26, pts: 25, img: boneI, flash: 0 },
      { x: 390, y: 380, r: 26, pts: 25, img: boneI, flash: 0 },
      { x: 160, y: 470, r: 22, pts: 10, img: meteorI, flash: 0 },
      { x: 320, y: 470, r: 22, pts: 10, img: meteorI, flash: 0 },
      { x: 240, y: 130, r: 22, pts: 10, img: meteorI, flash: 0 },
    ];

    const flipperLen = 90;
    const flipperW = 18;
    const leftBase = { x: 130, y: H - 80 };
    const rightBase = { x: W - 130, y: H - 80 };
    let leftAngle = 0.35;
    let rightAngle = 0.35;

    // particles
    const particles: { x: number; y: number; vx: number; vy: number; life: number; color: string }[] = [];
    const burst = (x: number, y: number, color: string) => {
      for (let i = 0; i < 14; i++) {
        const a = Math.random() * Math.PI * 2;
        const s = 1 + Math.random() * 4;
        particles.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1, color });
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      keysRef.current[e.key.toLowerCase()] = true;
      if (e.key === " ") {
        e.preventDefault();
        if (!runningRef.current) launchRef.current();
      }
    };
    const onKeyUp = (e: KeyboardEvent) => { keysRef.current[e.key.toLowerCase()] = false; };

    const setSideKey = (clientX: number, down: boolean) => {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      if (x < rect.width / 2) keysRef.current["a"] = down;
      else keysRef.current["l"] = down;
    };
    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      for (const t of Array.from(e.touches)) setSideKey(t.clientX, true);
    };
    const onTouchEnd = (e: TouchEvent) => {
      e.preventDefault();
      keysRef.current["a"] = false; keysRef.current["l"] = false;
      for (const t of Array.from(e.touches)) setSideKey(t.clientX, true);
    };
    const onMouseDown = (e: MouseEvent) => setSideKey(e.clientX, true);
    const onMouseUp = () => { keysRef.current["a"] = false; keysRef.current["l"] = false; };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    canvas.addEventListener("touchstart", onTouchStart, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd, { passive: false });
    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    const launch = () => {
      ball.x = W - 30;
      ball.y = H - 100;
      ball.vx = -2 - Math.random() * 2;
      ball.vy = -16;
      scoreRef.current = 0;
      comboRef.current = 1;
      setScore(0);
      setCombo(1);
      setGameOver(false);
      setRunning(true);
    };
    launchRef.current = launch;

    const addPts = (pts: number) => {
      const now = performance.now();
      if (now - lastHitRef.current < 1500) {
        comboRef.current = Math.min(comboRef.current + 1, 8);
      } else {
        comboRef.current = 1;
      }
      lastHitRef.current = now;
      scoreRef.current += pts * comboRef.current;
      setScore(scoreRef.current);
      setCombo(comboRef.current);
    };

    let raf = 0;
    const loop = () => {
      ctx.fillStyle = "#0a0a14";
      ctx.fillRect(0, 0, W, H);
      if (bgI.complete) {
        ctx.globalAlpha = 0.45;
        ctx.drawImage(bgI, 0, 0, W, H);
        ctx.globalAlpha = 1;
      }
      const grad = ctx.createRadialGradient(W/2, H/2, H/3, W/2, H/2, H);
      grad.addColorStop(0, "rgba(0,0,0,0)");
      grad.addColorStop(1, "rgba(0,0,0,0.7)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // walls
      ctx.strokeStyle = "hsl(33 100% 50%)";
      ctx.lineWidth = 3;
      ctx.shadowColor = "hsl(33 100% 50%)";
      ctx.shadowBlur = 14;
      ctx.beginPath();
      ctx.moveTo(2, 60); ctx.lineTo(2, H - 40);
      ctx.moveTo(W - 2, 60); ctx.lineTo(W - 2, H - 40);
      ctx.moveTo(2, 60); ctx.quadraticCurveTo(W/2, 0, W - 2, 60);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, H - 40); ctx.lineTo(leftBase.x - 30, H - 90);
      ctx.moveTo(W, H - 40); ctx.lineTo(rightBase.x + 30, H - 90);
      ctx.stroke();
      ctx.shadowBlur = 0;

      const isRunning = runningRef.current;
      const keys = keysRef.current;

      if (isRunning) {
        ball.vy += gravity;
        ball.vx *= friction;
        ball.vy *= friction;
        ball.x += ball.vx;
        ball.y += ball.vy;
        ball.angle += ball.vx * 0.05;

        if (ball.x < 10 + ball.r) { ball.x = 10 + ball.r; ball.vx = Math.abs(ball.vx) * 0.85; }
        if (ball.x > W - 10 - ball.r) { ball.x = W - 10 - ball.r; ball.vx = -Math.abs(ball.vx) * 0.85; }
        if (ball.y < ball.r + 10) { ball.y = ball.r + 10; ball.vy = Math.abs(ball.vy) * 0.85; }

        for (const b of bumpers) {
          const dx = ball.x - b.x, dy = ball.y - b.y;
          const d = Math.hypot(dx, dy);
          const min = b.r + ball.r;
          if (d < min) {
            const nx = dx / (d || 1), ny = dy / (d || 1);
            ball.x = b.x + nx * min;
            ball.y = b.y + ny * min;
            const dot = ball.vx * nx + ball.vy * ny;
            ball.vx = (ball.vx - 2 * dot * nx) * 1.15 + nx * 2;
            ball.vy = (ball.vy - 2 * dot * ny) * 1.15 + ny * 2;
            b.flash = 1;
            burst(b.x, b.y, "hsl(33 100% 60%)");
            addPts(b.pts);
          }
        }
      }

      // flippers always animate
      const target = 0.35;
      const up = -0.7;
      const leftActive = !!(keys["a"] || keys["arrowleft"]);
      const rightActive = !!(keys["l"] || keys["arrowright"]);
      leftAngle += ((leftActive ? up : target) - leftAngle) * 0.4;
      rightAngle += ((rightActive ? up : target) - rightAngle) * 0.4;

      if (isRunning) {
        const flipperHit = (base: {x:number;y:number}, angle: number, dir: 1 | -1, active: boolean) => {
          const ex = base.x + Math.cos(angle) * flipperLen * dir;
          const ey = base.y + Math.sin(angle) * flipperLen;
          const vx = ex - base.x, vy = ey - base.y;
          const wx = ball.x - base.x, wy = ball.y - base.y;
          const len2 = vx*vx + vy*vy;
          let t = (wx*vx + wy*vy) / len2;
          t = Math.max(0, Math.min(1, t));
          const cx = base.x + vx * t, cy = base.y + vy * t;
          const dx = ball.x - cx, dy = ball.y - cy;
          const d = Math.hypot(dx, dy);
          const min = ball.r + flipperW / 2;
          if (d < min) {
            const nx = dx / (d || 1), ny = dy / (d || 1);
            ball.x = cx + nx * min;
            ball.y = cy + ny * min;
            const dot = ball.vx * nx + ball.vy * ny;
            ball.vx = (ball.vx - 2 * dot * nx) * 0.9;
            ball.vy = (ball.vy - 2 * dot * ny) * 0.9;
            if (active) {
              ball.vy -= 11;
              ball.vx += dir * 5;
            }
          }
        };
        flipperHit(leftBase, leftAngle, 1, leftActive);
        flipperHit(rightBase, rightAngle, -1, rightActive);

        if (ball.y > H + 40) {
          setRunning(false);
          setGameOver(true);
          if (scoreRef.current > recordRef.current) {
            recordRef.current = scoreRef.current;
            setRecord(scoreRef.current);
            try { localStorage.setItem(RECORD_KEY, String(scoreRef.current)); } catch {}
          }
        }
      }

      // particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy; p.vy += 0.15; p.life -= 0.025;
        if (p.life <= 0) { particles.splice(i, 1); continue; }
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        ctx.beginPath(); ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2); ctx.fill();
      }
      ctx.globalAlpha = 1;

      // bumpers
      for (const b of bumpers) {
        if (b.flash > 0) {
          ctx.beginPath();
          ctx.fillStyle = `hsla(33,100%,60%,${b.flash * 0.5})`;
          ctx.arc(b.x, b.y, b.r + 8, 0, Math.PI * 2);
          ctx.fill();
          b.flash *= 0.85;
        }
        ctx.shadowColor = "hsl(33 100% 50%)";
        ctx.shadowBlur = 12;
        if (b.img.complete) {
          ctx.drawImage(b.img, b.x - b.r, b.y - b.r, b.r * 2, b.r * 2);
        } else {
          ctx.beginPath();
          ctx.fillStyle = "hsl(33 100% 50%)";
          ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.shadowBlur = 0;
      }

      // flippers
      const drawFlipper = (base: {x:number;y:number}, angle: number, dir: 1 | -1) => {
        ctx.save();
        ctx.translate(base.x, base.y);
        ctx.rotate(angle * dir);
        ctx.fillStyle = "hsl(33 100% 55%)";
        ctx.shadowColor = "hsl(33 100% 50%)";
        ctx.shadowBlur = 10;
        ctx.beginPath();
        if (dir === 1) {
          (ctx as any).roundRect ? (ctx as any).roundRect(0, -flipperW/2, flipperLen, flipperW, 8) : ctx.rect(0, -flipperW/2, flipperLen, flipperW);
        } else {
          (ctx as any).roundRect ? (ctx as any).roundRect(-flipperLen, -flipperW/2, flipperLen, flipperW, 8) : ctx.rect(-flipperLen, -flipperW/2, flipperLen, flipperW);
        }
        ctx.fill();
        ctx.restore();
      };
      drawFlipper(leftBase, leftAngle, 1);
      drawFlipper(rightBase, rightAngle, -1);

      // ball with rotation
      ctx.save();
      ctx.shadowColor = "hsl(280 90% 60%)";
      ctx.shadowBlur = 18;
      ctx.translate(ball.x, ball.y);
      ctx.rotate(ball.angle);
      if (ballI.complete) {
        ctx.drawImage(ballI, -ball.r, -ball.r, ball.r * 2, ball.r * 2);
      } else {
        ctx.beginPath();
        ctx.fillStyle = "hsl(280 90% 60%)";
        ctx.arc(0, 0, ball.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      ctx.shadowBlur = 0;

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchend", onTouchEnd);
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const launch = () => launchRef.current();

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl py-8 px-4">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft size={16} /> Voltar à Loja
        </Link>

        <h1 className="text-2xl font-bold text-foreground">Antitédio · Conquer Pinball</h1>
        <p className="text-sm text-muted-foreground mb-6">
          <kbd className="px-1.5 py-0.5 rounded bg-muted text-foreground text-xs">A</kbd>/<kbd className="px-1.5 py-0.5 rounded bg-muted text-foreground text-xs">←</kbd> e{" "}
          <kbd className="px-1.5 py-0.5 rounded bg-muted text-foreground text-xs">L</kbd>/<kbd className="px-1.5 py-0.5 rounded bg-muted text-foreground text-xs">→</kbd> = flippers ·{" "}
          <kbd className="px-1.5 py-0.5 rounded bg-muted text-foreground text-xs">Espaço</kbd> = lançar. No celular toque nos lados.
        </p>

        <div className="grid md:grid-cols-[1fr_220px] gap-6 items-start">
          <div className="relative mx-auto rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/20">
            <canvas
              ref={canvasRef}
              width={W}
              height={H}
              className="block w-full max-w-[480px] h-auto touch-none select-none"
              style={{ aspectRatio: `${W} / ${H}` }}
            />
            {!running && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/70 backdrop-blur-sm">
                <button
                  onClick={launch}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg shadow-primary/40 hover:scale-105 transition"
                >
                  {gameOver ? <RotateCcw size={16} /> : <Play size={16} />}
                  {gameOver ? "Jogar de novo" : "Lançar bola"}
                </button>
              </div>
            )}
          </div>

          <aside className="space-y-3">
            <div className="rounded-xl border border-border bg-card p-4">
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Pontuação</p>
              <p className="text-3xl font-bold text-primary">{score}</p>
              {combo > 1 && (
                <p className="text-xs font-semibold text-accent mt-1">Combo x{combo}</p>
              )}
            </div>
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
              <p className="text-[11px] uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
                <Trophy size={12} className="text-primary" /> Recorde
              </p>
              <p className="text-2xl font-bold text-foreground">{record}</p>
            </div>
            <button
              onClick={launch}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg shadow-primary/30 hover:scale-[1.02] transition md:hidden"
            >
              <Rocket size={14} /> Lançar bola
            </button>
            <div className="rounded-xl border border-border bg-card p-4 text-xs text-muted-foreground space-y-1.5">
              <p className="font-semibold text-card-foreground">Pontos por alvo</p>
              <p>🟣 Meteoro · <span className="text-primary font-semibold">+10</span></p>
              <p>🦴 Bone · <span className="text-primary font-semibold">+25</span></p>
              <p>💎 Jiang · <span className="text-primary font-semibold">+50</span></p>
              <p className="pt-1 text-[11px]">Encadeie acertos para multiplicar (até x8).</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
