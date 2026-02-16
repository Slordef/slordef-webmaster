<script setup lang="ts">
import { Head, Link, useForm, router } from '@inertiajs/vue3'

interface ProjectTranslation {
  id: number
  locale: 'en' | 'fr'
  title: string
  description: string | null
}

interface Project {
  id: number
  slug: string
  images: string | null
  imageList: string[]
  firstImage: string | null
  url: string | null
  isPublished: boolean
  order: number
  category: 'work' | 'side-project'
  translations: ProjectTranslation[]
}

defineProps<{
  projects: Project[]
}>()

const logoutForm = useForm({})

const logout = () => {
  logoutForm.post('/admin/logout')
}

const deleteProject = (id: number) => {
  if (confirm('Are you sure you want to delete this project?')) {
    router.delete(`/admin/projects/${id}`)
  }
}

const getTitle = (project: Project, locale: 'en' | 'fr' = 'en') => {
  const translation = project.translations.find((t) => t.locale === locale)
  return translation?.title || project.slug
}
</script>

<template>
  <Head title="Admin - Projects" />

  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <span class="text-xl font-bold">Admin</span>
            <div class="ml-10 flex items-center space-x-4">
              <Link href="/admin" class="text-gray-700 hover:text-gray-900">Dashboard</Link>
              <Link href="/admin/projects" class="text-gray-900 font-semibold">Projects</Link>
            </div>
          </div>
          <div class="flex items-center">
            <button @click="logout" class="text-gray-700 hover:text-gray-900">Logout</button>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Projects</h1>
        <Link
          href="/admin/projects/create"
          class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Add Project
        </Link>
      </div>

      <div class="bg-white shadow rounded-lg overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="project in projects" :key="project.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ project.order }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ getTitle(project) }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ project.category }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  :class="project.isPublished ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'"
                  class="px-2 py-1 text-xs rounded-full"
                >
                  {{ project.isPublished ? 'Published' : 'Draft' }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
                <Link :href="`/admin/projects/${project.id}/edit`" class="text-blue-600 hover:text-blue-900 mr-4">
                  Edit
                </Link>
                <button @click="deleteProject(project.id)" class="text-red-600 hover:text-red-900">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>
