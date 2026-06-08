import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import type { SharedProps } from '@adonisjs/inertia/types'

export type Locale = 'en' | 'fr'
export const availableLocales: Locale[] = ['en', 'fr']

export function useI18n() {
  const page = usePage<SharedProps>()

  const locale = computed(() => (page.props.locale as Locale) || 'en')
  const translations = computed(() => page.props.translations || {})

  const t = (key: string): string => {
    return translations.value[key] ?? key
  }

  return {
    t,
    locale,
    availableLocales,
  }
}
