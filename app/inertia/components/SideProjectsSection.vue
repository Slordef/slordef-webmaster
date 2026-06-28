<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const projects = [
  { key: 'gamedev', icon: 'fa-solid fa-gamepad', techs: 4 },
  { key: 'music', icon: 'fa-solid fa-music', techs: 4 },
]
</script>

<template>
  <section id="side-projects">
    <div class="t-container">
      <div class="t-secthead">
        <span class="user">slordef@arch</span>:<span class="path">~</span><span class="sym">$</span> ls
        ./side-projects
      </div>
      <h2 class="t-sectitle">// {{ t('sideProjects.title') }}</h2>
      <p class="subtitle">{{ t('sideProjects.subtitle') }}</p>

      <div class="projects-grid">
        <div v-for="project in projects" :key="project.key" class="project-card">
          <div class="card-head">
            <span class="project-icon"><i :class="project.icon"></i></span>
            <h3>{{ t(`sideProjects.${project.key}.title`) }}</h3>
          </div>
          <p class="description">{{ t(`sideProjects.${project.key}.description`) }}</p>
          <div class="technologies">
            <span v-for="i in project.techs" :key="`${project.key}_${i}`" class="t-pill">
              {{ t(`sideProjects.${project.key}.technologies.${i - 1}`) }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#side-projects {
  padding: 70px 0;
}

.subtitle {
  color: var(--muted);
  font-size: 1.05rem;
  margin: -24px 0 34px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
}

.project-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 28px;
  transition:
    transform 0.18s ease,
    border-color 0.18s ease,
    box-shadow 0.18s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-bright);
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.45);
}

.card-head {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.project-icon {
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border: 1px solid var(--border-bright);
  border-radius: 8px;
  color: var(--cyan);
  background: var(--surface-2);
  font-size: 1.4rem;
}

.project-card h3 {
  font-family: var(--mono);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--white);
}

.description {
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 20px;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

@media (max-width: 768px) {
  #side-projects {
    padding: 56px 0;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
