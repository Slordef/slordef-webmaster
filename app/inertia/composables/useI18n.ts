import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'

export type Locale = 'en' | 'fr'
export const availableLocales: Locale[] = ['en', 'fr']

export function useI18n() {
  const page = usePage()

  const locale = computed(() => (page.props.locale as Locale) || 'en')
  const translations = computed(() => (page.props.translations as Record<string, string>) || {})

  const t = (key: string): string => {
    return translations.value[key] ?? key
  }

  return {
    t,
    locale,
    availableLocales,
  }
}
