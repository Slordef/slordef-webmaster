"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { locales, defaultLocale, type Locale, type Translations } from "./locales";

interface I18nContextType {
  locale: Locale;
  t: Translations;
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

  const value: I18nContextType = {
    locale,
    t: locales[locale],
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
