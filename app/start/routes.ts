/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const HomeController = () => import('#controllers/home_controller')
const LocaleController = () => import('#controllers/locale_controller')
const AuthController = () => import('#controllers/Admin/auth_controller')
const DashboardController = () => import('#controllers/Admin/dashboard_controller')
const ProjectsController = () => import('#controllers/Admin/projects_controller')

// Public routes
router.get('/', [HomeController, 'index']).as('home')
router.post('/locale', [LocaleController, 'update']).as('locale.update')

// Admin routes
router
  .group(() => {
    // Auth (guest only)
    router.get('/login', [AuthController, 'showLogin']).as('admin.login').use(middleware.guest())
    router.post('/login', [AuthController, 'login']).use(middleware.guest())

    // Protected routes
    router
      .group(() => {
        router.post('/logout', [AuthController, 'logout']).as('admin.logout')
        router.get('/', [DashboardController, 'index']).as('admin.dashboard')

        // Projects CRUD
        router.get('/projects', [ProjectsController, 'index']).as('admin.projects.index')
        router.get('/projects/create', [ProjectsController, 'create']).as('admin.projects.create')
        router.post('/projects', [ProjectsController, 'store']).as('admin.projects.store')
        router.get('/projects/:id/edit', [ProjectsController, 'edit']).as('admin.projects.edit')
        router.post('/projects/:id', [ProjectsController, 'update']).as('admin.projects.update')
        router.delete('/projects/:id', [ProjectsController, 'destroy']).as('admin.projects.destroy')
      })
      .use(middleware.auth())
  })
  .prefix('/admin')
