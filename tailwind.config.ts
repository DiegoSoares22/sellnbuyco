import type { Config } from "tailwindcss";
// Gerado do DESIGN.md com `npm run design:tokens`. Não editar à mão: mude o DESIGN.md e regenere.
import designTokens from "./src/design/tokens.json";

const tokens = designTokens.theme.extend;
const tokenColors = tokens.colors as Record<string, string>;

// O export do DESIGN.md não traz lineHeight nem tamanhos fluidos. Completamos aqui com os
// valores da tabela de Typography do DESIGN.md (ex.: display-xl 54px no desktop → 32px no celular).
const LINE_HEIGHT: Record<string, string> = {
  "display-wordmark": "1",
  "display-xl": "1.15",
  "display-lg": "1.2",
  "display-md": "1.25",
  "heading-xl": "1.25",
  "heading-lg": "1.3",
  "heading-md": "1.35",
  "body-md": "1.5",
  "body-strong": "1.3",
  "body-sm": "1.5",
  "caption-md": "1.5",
  "caption-sm": "1.4",
  "price-lg": "1.1",
  "price-md": "1.1",
  "button-lg": "1.25",
  "button-md": "1.25",
};
const FLUID_SIZE: Record<string, string> = {
  "display-wordmark": "clamp(2.5rem, 1.2rem + 5.8vw, 6.5rem)",
  "display-xl": "clamp(2rem, 1.25rem + 3vw, 3.375rem)",
  "display-lg": "clamp(1.75rem, 1.2rem + 2.2vw, 2.75rem)",
  "display-md": "clamp(1.625rem, 1.25rem + 1.5vw, 2.1875rem)",
  "heading-xl": "clamp(1.375rem, 1.2rem + 0.7vw, 1.75rem)",
  "price-lg": "clamp(1.5rem, 1.35rem + 0.6vw, 1.75rem)",
};
const fontSize = Object.fromEntries(
  Object.entries(tokens.fontSize as Record<string, [string, Record<string, string>]>).map(([name, [size, rest]]) => [
    name,
    [FLUID_SIZE[name] ?? size, { ...rest, lineHeight: LINE_HEIGHT[name] }],
  ]),
);

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Manrope", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      fontSize,
      colors: {
        ...tokenColors,
        primary: {
          DEFAULT: tokenColors.primary,
          foreground: tokenColors["on-primary"],
        },
        // shadcn/ui (popover, select, sheet, toast) segue em HSL; os valores em index.css saem da mesma paleta
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: tokens.borderRadius,
      spacing: tokens.spacing,
      maxWidth: {
        container: tokens.spacing.container,
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
