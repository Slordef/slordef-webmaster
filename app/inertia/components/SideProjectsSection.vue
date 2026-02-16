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
    <div class="container">
      <h2>{{ t('sideProjects.title') }}</h2>
      <p class="subtitle">{{ t('sideProjects.subtitle') }}</p>
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.key" class="project-card">
          <div class="project-icon">
            <i :class="project.icon"></i>
          </div>
          <h3>{{ t(`sideProjects.${project.key}.title`) }}</h3>
          <p class="description">{{ t(`sideProjects.${project.key}.description`) }}</p>
          <div class="technologies">
            <span v-for="i in project.techs" :key="`${project.key}_${i}`">
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
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
  padding: 80px 20px;
  color: #fff;
}

#side-projects .container {
  max-width: 1000px;
  margin: 0 auto;
}

#side-projects h2 {
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 15px;
  color: #f4a460;
  font-weight: 700;
}

#side-projects .subtitle {
  text-align: center;
  font-size: 1.15em;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 60px;
  font-style: italic;
  line-height: 1.6;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
}

.project-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 40px;
  border-radius: 15px;
  border: 2px solid rgba(244, 164, 96, 0.2);
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
}

.project-card:hover {
  border-color: #f4a460;
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(244, 164, 96, 0.3);
  background: rgba(255, 255, 255, 0.08);
}

.project-icon {
  font-size: 4em;
  color: #f4a460;
  text-align: center;
  margin-bottom: 25px;
  transition: transform 0.3s ease;
}

.project-card:hover .project-icon {
  transform: scale(1.1) rotate(5deg);
}

.project-card h3 {
  font-size: 1.8em;
  color: #fff;
  margin: 0 0 20px 0;
  font-weight: 600;
  text-align: center;
}

.description {
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.05em;
  line-height: 1.7;
  margin-bottom: 25px;
  text-align: center;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
}

.technologies span {
  background: linear-gradient(135deg, #f4a460 0%, #9b7d68 100%);
  color: #fff;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.technologies span:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(244, 164, 96, 0.4);
}

@media (max-width: 768px) {
  #side-projects {
    padding: 60px 20px;
  }

  #side-projects h2 {
    font-size: 2em;
  }

  #side-projects .subtitle {
    font-size: 1.05em;
    margin-bottom: 40px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .project-card {
    padding: 30px;
  }

  .project-icon {
    font-size: 3em;
  }

  .project-card h3 {
    font-size: 1.5em;
  }

  .description {
    font-size: 1em;
  }
}
</style>
