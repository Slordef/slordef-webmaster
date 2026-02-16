import posthog from 'posthog-js'
import type { App } from 'vue'
import type { Router } from '@inertiajs/vue3'

export default {
  install(app: App, options: { router: Router }) {
    const posthogKey = import.meta.env.VITE_POSTHOG_KEY
    const posthogHost = import.meta.env.VITE_POSTHOG_HOST || 'https://eu.i.posthog.com'

    if (!posthogKey) {
      console.warn('PostHog key not configured')
      return
    }

    posthog.init(posthogKey, {
      api_host: posthogHost,
      capture_pageview: false, // We'll capture manually on route change
      persistence: 'localStorage',
    })

    // Track page views on navigation
    options.router.on('navigate', (event) => {
      posthog.capture('$pageview', {
        $current_url: event.detail.page.url,
      })
    })

    // Make posthog available globally
    app.config.globalProperties.$posthog = posthog
    app.provide('posthog', posthog)
  },
}
