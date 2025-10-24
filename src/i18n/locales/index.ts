import { en } from "./en";
import { fr } from "./fr";

export const locales = {
  en,
  fr,
} as const;

export type Locale = keyof typeof locales;
export type { Translations } from "./en";

export const defaultLocale: Locale = "en";
export const availableLocales: Locale[] = ["en", "fr"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
};
