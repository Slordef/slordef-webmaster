import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class AuthController {
  async showLogin({ inertia }: HttpContext) {
    return inertia.render('admin/Login', {})
  }

  async login({ request, auth, response, session }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    try {
      const user = await User.verifyCredentials(email, password)
      await auth.use('web').login(user)
      // @ts-expect-error Route types not configured for v7
      return response.redirect().toRoute('admin.dashboard')
    } catch {
      session.flash('error', 'Invalid credentials')
      return response.redirect().back()
    }
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    // @ts-expect-error Route types not configured for v7
    return response.redirect().toRoute('admin.login')
  }
}
