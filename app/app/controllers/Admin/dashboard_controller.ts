import type { HttpContext } from '@adonisjs/core/http'
import Project from '#models/project'

export default class DashboardController {
  async index({ inertia }: HttpContext) {
    const projectsCount = await Project.query().count('* as total')

    return inertia.render('admin/Dashboard', {
      stats: {
        projects: projectsCount[0].$extras.total,
      },
    })
  }
}
