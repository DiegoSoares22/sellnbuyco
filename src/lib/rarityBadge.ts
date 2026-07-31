import { Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─── Rarity tier system for game item quality badges ─────────────────

export interface RarityStyle {
  /** Tailwind gradient classes for badge background */
  bg: string;
  /** Tailwind border class with color-matched glow */
  border: string;
  /** Tailwind box-shadow glow */
  glow: string;
  /** Always "text-white" for legibility */
  text: string;
}

const RARITY: Record<string, RarityStyle> = {
  // ── White / Gray — neutral informative ("DECENTE") ──
  DECENTE: {
    bg: "bg-gradient-to-r from-gray-400/90 to-gray-500/90",
    border: "border border-gray-300/50",
    glow: "shadow-[0_0_8px_hsla(0,0%,75%,0.35)]",
    text: "text-white",
  },

  // ── Green — "INTERMEDIÁRIO" ──
  "INTERMEDIÁRIO": {
    bg: "bg-gradient-to-r from-emerald-500 to-green-600",
    border: "border border-emerald-400/60",
    glow: "shadow-[0_0_10px_hsla(145,72%,44%,0.45)]",
    text: "text-white",
  },
  INTERMEDIARIO: {
    bg: "bg-gradient-to-r from-emerald-500 to-green-600",
    border: "border border-emerald-400/60",
    glow: "shadow-[0_0_10px_hsla(145,72%,44%,0.45)]",
    text: "text-white",
  },

  // ── Blue — "IDEAL" / "OPORTUNIDADE" ──
  IDEAL: {
    bg: "bg-gradient-to-r from-blue-500 to-blue-600",
    border: "border border-blue-400/60",
    glow: "shadow-[0_0_12px_hsla(217,90%,55%,0.5)]",
    text: "text-white",
  },
  OPORTUNIDADE: {
    bg: "bg-gradient-to-r from-sky-500 to-blue-600",
    border: "border border-sky-400/60",
    glow: "shadow-[0_0_12px_hsla(200,90%,50%,0.5)]",
    text: "text-white",
  },

  // ── Purple — "EPIC" / "PREMIUM" ──
  EPIC: {
    bg: "bg-gradient-to-r from-purple-500 to-violet-600",
    border: "border border-purple-400/60",
    glow: "shadow-[0_0_14px_hsla(270,70%,55%,0.55)]",
    text: "text-white",
  },
  PREMIUM: {
    bg: "bg-gradient-to-r from-fuchsia-500 to-purple-600",
    border: "border border-fuchsia-400/60",
    glow: "shadow-[0_0_14px_hsla(290,70%,55%,0.5)]",
    text: "text-white",
  },

  // ── Orange / Gold — "TOP" / "OP" ──
  TOP: {
    bg: "bg-gradient-to-r from-amber-400 to-orange-500",
    border: "border border-amber-300/60",
    glow: "shadow-[0_0_16px_hsla(38,100%,55%,0.6)]",
    text: "text-white",
  },
  OP: {
    bg: "bg-gradient-to-r from-orange-500 to-red-500",
    border: "border border-orange-400/60",
    glow: "shadow-[0_0_16px_hsla(25,100%,50%,0.6)]",
    text: "text-white",
  },
};

// Temporal badges — outside the rarity scale (NEW/NOVO uses teal + sparkle)
const TEMPORAL_BADGES = new Set(["NEW", "NOVO"]);

/**
 * Returns true if the badge is temporal (NEW/NOVO) rather than a rarity tier.
 */
export function isTemporalBadge(badge: string): boolean {
  return TEMPORAL_BADGES.has(badge.toUpperCase());
}

/**
 * Returns the full className string for a rarity badge.
 * For temporal badges (NEW/NOVO), returns a teal + sparkle style.
 * For unknown badges, falls back to a provided Tailwind class or neutral gray.
 */
export function getRarityClasses(badge: string, _fallbackBgColor?: string): string {
  const key = badge.toUpperCase();

  if (TEMPORAL_BADGES.has(key)) {
    return "bg-gradient-to-r from-teal-500 to-cyan-500 border border-teal-400/60 shadow-[0_0_10px_hsla(175,70%,45%,0.45)] text-white font-bold uppercase tracking-wider";
  }

  const r = RARITY[key];
  if (r) {
    return `${r.bg} ${r.border} ${r.glow} ${r.text} font-bold uppercase tracking-wider`;
  }

  // Unknown badge — neutral style
  return "bg-gradient-to-r from-gray-500/80 to-gray-600/80 border border-gray-400/40 shadow-[0_0_6px_hsla(0,0%,50%,0.25)] text-white font-bold uppercase tracking-wider";
}

/**
 * Returns the Sparkles icon reference for temporal badges so callers
 * can render a ✨ sparkle alongside the badge text.
 */
export function getTemporalIcon(): LucideIcon {
  return Sparkles;
}

/**
 * Returns the rarity style object for a given badge, or null for temporal/unknown.
 */
export function getRarityStyle(badge: string): RarityStyle | null {
  return RARITY[badge.toUpperCase()] ?? null;
}
