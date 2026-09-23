import { configApp } from '@adonisjs/eslint-config'
import { vue } from '@adonisjs/eslint-config/vue'

export default configApp({ ignores: ['public/assets/**', '.adonisjs/**'] }, ...vue, {
  name: 'Inertia frontend overrides',
  files: ['inertia/**/*.{ts,vue}'],
  rules: { '@unicorn/filename-case': 'off' },
})
