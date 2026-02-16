import type { HttpContext } from '@adonisjs/core/http'
import Project from '#models/project'

export default class HomeController {
  async index({ inertia }: HttpContext) {
    const projects = await Project.query()
      .where('isPublished', true)
      .preload('translations')
      .orderBy('order', 'asc')

    return inertia.render('Home', { projects })
  }
}
