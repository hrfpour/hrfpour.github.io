"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { STRINGS, type Lang, type LT, type StringKey } from "@/lib/content";

interface LanguageContextValue {
  lang: Lang;
  dir: "rtl" | "ltr";
  setLang: (lang: Lang) => void;
  /** Translate a UI string key */
  t: (key: StringKey) => string;
  /** Resolve a bilingual content value */
  tr: (value: LT) => string;
  /** Format numbers for the active locale (Persian digits in FA) */
  num: (value: number | string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "hf-lang";

/* ------------------------------------------------------------------ */
/* External language store (localStorage + pub/sub)                    */
/* Kept outside React state to avoid setState-in-effect patterns and   */
/* to stay hydration-safe via useSyncExternalStore.                    */
/* ------------------------------------------------------------------ */

const listeners = new Set<() => void>();

let cachedLang: Lang | null = null;

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function getSnapshot(): Lang {
  if (cachedLang) return cachedLang;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    cachedLang = saved === "fa" ? "fa" : "en";
  } catch {
    cachedLang = "en";
  }
  return cachedLang;
}

function getServerSnapshot(): Lang {
  return "en";
}

function writeLang(next: Lang) {
  cachedLang = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* storage unavailable — keep in-memory only */
  }
  listeners.forEach((fn) => fn());
}

function toPersianDigits(value: number | string): string {
  const digits = "۰۱۲۳۴۵۶۷۸۹";
  return String(value).replace(/[0-9]/g, (d) => digits[Number(d)]);
}

/* ------------------------------------------------------------------ */

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Sync the external system (document element) with React state
  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "fa" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = useCallback((next: Lang) => writeLang(next), []);

  const t = useCallback(
    (key: StringKey) => STRINGS[key]?.[lang] ?? String(key),
    [lang]
  );

  const tr = useCallback((value: LT) => value[lang] ?? value.en, [lang]);

  const num = useCallback(
    (value: number | string) =>
      lang === "fa" ? toPersianDigits(value) : String(value),
    [lang]
  );

  const value = useMemo(
    () => ({
      lang,
      dir: lang === "fa" ? ("rtl" as const) : ("ltr" as const),
      setLang,
      t,
      tr,
      num,
    }),
    [lang, setLang, t, tr, num]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
