"use client";

import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode, Fragment } from 'react';
import { locales, defaultLocale, type Locale,  } from "./locales";


type ReplacementFns = Record<Exclude<string, "map">, (value: string) => ReactNode>;
type Options = ((value: string, index: number, array: string[]) => ReactNode) | ReplacementFns;

type TFunc = <O extends Options | undefined>(
  slug: string,
  options?: O
) => O extends undefined ? string : ReactNode;

interface I18nContextType {
  locale: Locale;
  t: TFunc;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale | null;
    if (stored && stored in locales) {
      setLocaleState(stored);
      document.documentElement.lang = stored;
      return;
    }
    const browserLang = (navigator.language.split("-")[0] as Locale) || defaultLocale;
    if (browserLang in locales) {
      setLocaleState(browserLang);
      document.documentElement.lang = browserLang;
      return;
    }
    document.documentElement.lang = defaultLocale;
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    document.documentElement.lang = newLocale;
  }, []);

  const t: TFunc = (slug, options?: Options) => {
    let o: unknown = locales[locale] as Record<string, unknown>;
    for (const k of slug.split(".")) {
      if (!o || typeof o !== "object" || !(k in (o as Record<string, unknown>))) {
        throw new Error(`No ${slug} in translations: stopped at ${k}`);
      }
      o = (o as Record<string, unknown>)[k];
    }

    // Array case: allow `map` for arrays of strings
    if (Array.isArray(o)) {
      if (typeof options === 'function') {
        return <>{(o as string[]).map(options)}</> as unknown as string;
      }
      throw new Error(`Key ${slug} is an array but no 'map' provided`);
    }

    if (typeof o !== "string") {
      throw new Error(`Key ${slug} is not a string: ${typeof o}`);
    }

    if (!options) return o;

    const str = o as string;
    const parts: ReactNode[] = [];
    const re = /\{\{\s*([a-zA-Z0-9_]+)\((.*?)\)\s*\}\}/g;
    let last = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(str))) {
      const [full, key, inner] = m;
      if (m.index > last) parts.push(str.slice(last, m.index));
      const fn = (options as Partial<ReplacementFns>)[key as keyof ReplacementFns];
      parts.push(fn ? fn(inner) : full);
      last = m.index + full.length;
    }
    if (last < str.length) parts.push(str.slice(last));

    let res: ReactNode = (
      <>
        {parts.map((p, i) => (
          <Fragment key={i}>{p}</Fragment>
        ))}
      </>
    );
    if (parts.length === 1) res = parts[0] ?? res
    return res as string
  }

  const value: I18nContextType = { locale, t, setLocale };
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}