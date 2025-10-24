# Internationalization (i18n)

This directory contains the internationalization setup for the website.

## Structure

```
i18n/
├── locales/          # Translation files
│   ├── en.ts        # English translations
│   ├── fr.ts        # French translations
│   └── index.ts     # Locale exports and configuration
├── context.tsx      # i18n React context provider
└── README.md        # This file
```

## Available Languages

- **English (en)** - Default language
- **French (fr)**

## Usage

### In Components

```tsx
"use client";

import { useI18n } from "@/i18n/context";

export function MyComponent() {
  const { t, locale, setLocale } = useI18n();

  return (
    <div>
      <h1>{t.home.title}</h1>
      <p>{t.home.description}</p>
    </div>
  );
}
```

### Translation Object Structure

Translations are strongly typed using TypeScript. The structure is defined in `locales/en.ts` and all other languages must match this structure.

Example:
```typescript
{
  common: {
    siteTitle: "...",
    readMore: "...",
  },
  home: {
    title: "...",
    subtitle: "...",
  },
  // ... more sections
}
```

## Adding a New Language

1. Create a new file in `locales/` (e.g., `de.ts` for German)
2. Import the `Translations` type and implement all required translations:

```typescript
import type { Translations } from "./en";

export const de: Translations = {
  common: {
    siteTitle: "Slordef - CTO & CISO Freelance",
    // ... all other translations
  },
  // ... implement all sections
};
```

3. Add the new locale to `locales/index.ts`:

```typescript
import { de } from "./de";

export const locales = {
  en,
  fr,
  de, // Add new locale
} as const;

export const availableLocales: Locale[] = ["en", "fr", "de"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  de: "Deutsch", // Add locale name
};
```

## Features

- **Type-safe translations**: Full TypeScript support ensures all translations are present
- **Client-side switching**: Language can be changed without page reload
- **Persistent preference**: Selected language is saved to localStorage
- **Browser detection**: Automatically detects user's browser language on first visit
- **Flexible structure**: Easy to add new languages and translation keys

## Language Switcher

The language switcher is located in the top-right corner of the page. It's implemented as a fixed component that persists across all pages.

Component: `components/LanguageSwitcher/LanguageSwitcher.tsx`

## Context Provider

The i18n context is initialized in `app/layout.tsx` and wraps the entire application, making translations available to all components.

## Best Practices

1. **Always use the `t` object** from `useI18n()` hook - never hardcode strings
2. **Add "use client"** directive to components that use translations
3. **Keep translation keys organized** by section/feature
4. **Use meaningful key names** that describe the content
5. **Test all languages** when adding new translations
