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

  <div class="admin-container">
    <nav class="admin-nav">
      <div class="nav-content">
        <div class="nav-left">
          <span class="nav-brand">Admin</span>
          <div class="nav-links">
            <Link href="/admin" class="nav-link active">Dashboard</Link>
            <Link href="/admin/projects" class="nav-link">Projects</Link>
          </div>
        </div>
        <div class="nav-right">
          <button @click="logout" class="logout-btn">Logout</button>
        </div>
      </div>
    </nav>

    <main class="admin-main">
      <h1 class="page-title">Dashboard</h1>

      <div class="stats-grid">
        <div class="stat-card">
          <h2 class="stat-label">Projects</h2>
          <p class="stat-value">{{ stats.projects }}</p>
        </div>
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

.page-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 24px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
}

.stat-card {
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.stat-label {
  font-size: 1rem;
  font-weight: 600;
  color: #4b5563;
  margin: 0;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #111;
  margin: 8px 0 0 0;
}
</style>
