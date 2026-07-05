import { createContext, ReactNode, useCallback, useContext, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { translations, TranslationKey } from "./translations";

export type Lang = "pt" | "en";

interface I18nCtx {
  lang: Lang;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
  withLang: (path: string) => string;
  switchLang: (to: Lang) => void;
}

const Ctx = createContext<I18nCtx | null>(null);

function detectLang(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pt";
}

function stripLangPrefix(pathname: string): string {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname;
}

function interpolate(str: string, params?: Record<string, string | number>) {
  if (!params) return str;
  return str.replace(/\{(\w+)\}/g, (_, k) => String(params[k] ?? `{${k}}`));
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const lang = detectLang(location.pathname);

  const withLang = useCallback(
    (path: string) => {
      const clean = path.startsWith("/") ? path : `/${path}`;
      if (lang === "en") {
        return clean === "/" ? "/en" : `/en${clean}`;
      }
      return clean;
    },
    [lang]
  );

  const switchLang = useCallback(
    (to: Lang) => {
      const base = stripLangPrefix(location.pathname);
      const search = location.search || "";
      const target =
        to === "en" ? (base === "/" ? "/en" : `/en${base}`) : base;
      navigate(target + search, { replace: false });
    },
    [location.pathname, location.search, navigate]
  );

  const t = useCallback(
    (key: TranslationKey, params?: Record<string, string | number>) => {
      const dict = translations[lang] || translations.pt;
      const raw = (dict as Record<string, string>)[key] ?? (translations.pt as Record<string, string>)[key] ?? key;
      return interpolate(raw, params);
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, t, withLang, switchLang }), [lang, t, withLang, switchLang]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used inside LanguageProvider");
  return ctx;
}
