"use client";

import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { locales, defaultLocale, type Locale, type Translations } from "./locales";

type Opts = Record<string, (value: string) => ReactNode>;
interface I18nContextType {
  locale: Locale;
  t: (slug: string, options?: Opts) => ReactNode;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  // Initialize locale on client side only
  useEffect(() => {
    
    // Try to get locale from localStorage
    const stored = localStorage.getItem("locale") as Locale;
    if (stored && stored in locales) {
      setLocaleState(stored);
      document.documentElement.lang = stored;
      return;
    }
    
    // Try to detect browser language
    const browserLang = navigator.language.split("-")[0] as Locale;
    if (browserLang in locales) {
      setLocaleState(browserLang);
      document.documentElement.lang = browserLang;
      return;
    }
    
    // Set default
    document.documentElement.lang = defaultLocale;
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", newLocale);
      // Update HTML lang attribute
      document.documentElement.lang = newLocale;
    }
  }, []);

  const getTranslation = <O extends Opts | undefined>(slug: string, options?: O): O extends undefined ? string : ReactNode => {
    const l = locales[locale];

    let o: unknown = l
    for (const k of slug.split('.')) {
      if (!o || typeof o !== 'object' || !(k in o)) {
        throw new Error(`No ${slug} in translations: stopped at ${k}`)
      }
      o = (o as Record<string, unknown>)[k]
    }
    if (typeof o !== 'string') throw new Error(`Key ${slug} is not a string`)
    const str = o as string;

    if (!options) {
      return str;
    }

    const parts: ReactNode[] = [];
    const re = /\{\{\s*([a-zA-Z0-9_]+)\((.*?)\)\s*\}\}/g;
    let last = 0;
    let m: RegExpExecArray | null;

    while ((m = re.exec(str))) {
      const [full, key, inner] = m;
      if (m.index > last) parts.push(str.slice(last, m.index));
      const fn = (options as Opts)[key];
      parts.push(fn ? fn(inner) : full);
      last = m.index + full.length;
    }
    if (last < str.length) parts.push(str.slice(last));

    let res: ReactNode = <>{parts.map((p) => p)}</>
    if (parts.length) res = parts[0] ?? res
    return res as string
  }

  const value: I18nContextType = {
    locale,
    t: getTranslation,
    setLocale,
  };

  // Render children immediately but with default locale until mounted
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
