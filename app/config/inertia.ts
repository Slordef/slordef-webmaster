import { defineConfig } from '@adonisjs/inertia'
import type Project from '#models/project'

export default defineConfig({
  /**
   * Path to the Edge view that will be used as the root view for Inertia responses
   */
  rootView: 'inertia_layout',

  /**
   * Options for the server-side rendering
   */
  ssr: {
    enabled: true,
    entrypoint: 'inertia/ssr.ts'
  }
})

/**
 * Inertia pages type definitions for type-safe rendering
 */
declare module '@adonisjs/inertia/types' {
  export interface InertiaPages {
    'Home': { projects: Project[] }
    'admin/Login': {}
    'admin/Dashboard': { stats: { projects: number | string } }
    'admin/Projects': { projects: Project[] }
    'admin/ProjectForm': { project: Project | null }
    'errors/not_found': { error: { message: string; status?: number } }
    'errors/server_error': { error: { message: string; status?: number } }
  }
}
