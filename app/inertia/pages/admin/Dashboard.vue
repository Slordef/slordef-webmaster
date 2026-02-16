<script setup lang="ts">
import { Head, Link, useForm } from '@inertiajs/vue3'

defineProps<{
  stats: {
    projects: number
  }
}>()

const logoutForm = useForm({})

const logout = () => {
  logoutForm.post('/admin/logout')
}
</script>

<template>
  <Head title="Admin Dashboard" />

  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <span class="text-xl font-bold">Admin</span>
            <div class="ml-10 flex items-center space-x-4">
              <Link href="/admin" class="text-gray-700 hover:text-gray-900">Dashboard</Link>
              <Link href="/admin/projects" class="text-gray-700 hover:text-gray-900">Projects</Link>
            </div>
          </div>
          <div class="flex items-center">
            <button @click="logout" class="text-gray-700 hover:text-gray-900">Logout</button>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 class="text-2xl font-bold mb-6">Dashboard</h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-lg font-semibold text-gray-700">Projects</h2>
          <p class="text-3xl font-bold mt-2">{{ stats.projects }}</p>
        </div>
      </div>
    </main>
  </div>
</template>
