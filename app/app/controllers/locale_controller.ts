import type { HttpContext } from '@adonisjs/core/http'

export default class LocaleController {
  async update({ request, response, session }: HttpContext) {
    const locale = request.input('locale', 'en')

    if (['en', 'fr'].includes(locale)) {
      session.put('locale', locale)
    }

    return response.redirect().back()
  }
}
