import { ShieldCheck, MessageCircle, Zap, Trophy } from "lucide-react";

const ITEMS = [
  { icon: Trophy, label: "+200 contas vendidas" },
  { icon: MessageCircle, label: "Atendimento via WhatsApp" },
  { icon: ShieldCheck, label: "Verificação garantida" },
  { icon: Zap, label: "Entrega imediata" },
];

export default function TrustStrip() {
  return (
    <div className="relative border-y border-primary/10 bg-[linear-gradient(90deg,hsl(var(--card))_0%,hsl(var(--muted))_50%,hsl(var(--card))_100%)]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="container max-w-6xl px-4 py-3">
        <ul className="flex items-center justify-between gap-3 sm:gap-6 overflow-x-auto no-scrollbar">
          {ITEMS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2 shrink-0 text-xs sm:text-sm text-foreground/85"
            >
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-primary/10 text-primary ring-1 ring-primary/20">
                <Icon size={14} />
              </span>
              <span className="font-medium whitespace-nowrap">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
