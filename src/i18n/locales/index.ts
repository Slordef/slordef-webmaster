import { en } from "./en";
import { fr } from "./fr";

export const locales = {
  en,
  fr,
} as const;

export type Locale = keyof typeof locales;

export interface Translations { [K: string]: Translations | string | string[] }

export const defaultLocale: Locale = "en";
export const availableLocales: Locale[] = ["en", "fr"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
};
