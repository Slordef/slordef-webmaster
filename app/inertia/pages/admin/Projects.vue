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

  <div class="admin-container">
    <nav class="admin-nav">
      <div class="nav-content">
        <div class="nav-left">
          <span class="nav-brand">Admin</span>
          <div class="nav-links">
            <Link href="/admin" class="nav-link">Dashboard</Link>
            <Link href="/admin/projects" class="nav-link active">Projects</Link>
          </div>
        </div>
        <div class="nav-right">
          <button @click="logout" class="logout-btn">Logout</button>
        </div>
      </div>
    </nav>

    <main class="admin-main">
      <div class="page-header">
        <h1 class="page-title">Projects</h1>
        <Link href="/admin/projects/create" class="btn-primary">
          Add Project
        </Link>
      </div>

      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th class="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="project in projects" :key="project.id">
              <td>{{ project.order }}</td>
              <td>{{ getTitle(project) }}</td>
              <td>{{ project.category }}</td>
              <td>
                <span :class="['status-badge', project.isPublished ? 'published' : 'draft']">
                  {{ project.isPublished ? 'Published' : 'Draft' }}
                </span>
              </td>
              <td class="text-right">
                <Link :href="`/admin/projects/${project.id}/edit`" class="action-link edit">
                  Edit
                </Link>
                <button @click="deleteProject(project.id)" class="action-link delete">
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

<style scoped>
.admin-container {
  min-height: 100vh;
  background: #f3f4f6;
}

.admin-nav {
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.nav-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 40px;
}

.nav-brand {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111;
}

.nav-links {
  display: flex;
  gap: 16px;
}

.nav-link {
  color: #4b5563;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.2s;
}

.nav-link:hover {
  color: #111;
  background: #f3f4f6;
}

.nav-link.active {
  color: #111;
  font-weight: 600;
}

.nav-right {
  display: flex;
  align-items: center;
}

.logout-btn {
  background: none;
  border: none;
  color: #4b5563;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.2s;
}

.logout-btn:hover {
  color: #111;
  background: #f3f4f6;
}

.admin-main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.page-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111;
  margin: 0;
}

.btn-primary {
  background: #2563eb;
  color: #fff;
  padding: 10px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s;
}

.btn-primary:hover {
  background: #1d4ed8;
}

.table-container {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th {
  background: #f9fafb;
  padding: 12px 24px;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #e5e7eb;
}

.data-table td {
  padding: 16px 24px;
  font-size: 0.875rem;
  color: #111;
  border-bottom: 1px solid #e5e7eb;
}

.data-table tbody tr:last-child td {
  border-bottom: none;
}

.data-table tbody tr:hover {
  background: #f9fafb;
}

.text-right {
  text-align: right;
}

.status-badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
}

.status-badge.published {
  background: #d1fae5;
  color: #065f46;
}

.status-badge.draft {
  background: #f3f4f6;
  color: #4b5563;
}

.action-link {
  background: none;
  border: none;
  padding: 4px 8px;
  font-size: 0.875rem;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s;
}

.action-link.edit {
  color: #2563eb;
  margin-right: 12px;
}

.action-link.edit:hover {
  color: #1d4ed8;
}

.action-link.delete {
  color: #dc2626;
}

.action-link.delete:hover {
  color: #b91c1c;
}
</style>
