"use client";

import { useI18n } from "@/i18n/context";
import { availableLocales, localeNames } from "@/i18n/locales";
import { useEffect, useState } from "react";
import "./LanguageSwitcher.css";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="language-switcher">
        {availableLocales.map((lang) => (
          <button
            key={lang}
            className=""
            aria-label={`Switch to ${localeNames[lang]}`}
            disabled
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="language-switcher">
      {availableLocales.map((lang) => (
        <button
          key={lang}
          onClick={() => setLocale(lang)}
          className={locale === lang ? "active" : ""}
          aria-label={`Switch to ${localeNames[lang]}`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
