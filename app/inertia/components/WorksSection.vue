<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

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

const props = defineProps<{
  projects: Project[]
}>()

const { locale } = useI18n()

function getTranslation(project: Project) {
  return (
    project.translations.find((t) => t.locale === locale.value) ||
    project.translations.find((t) => t.locale === 'en')
  )
}

const workProjects = props.projects.filter((p) => p.category === 'work')
</script>

<template>
  <section id="my-works">
    <div class="container">
      <h2>{{ t('works.title') }}</h2>
      <p class="intro">{{ t('works.subtitle') }}</p>
    </div>
    <div v-for="project in workProjects" :key="project.id" class="project">
      <div class="content">
        <div class="project-inner">
          <div v-if="project.imageList.length > 0" class="project-images">
            <img
              v-for="(img, index) in project.imageList"
              :key="index"
              :src="img"
              :alt="`${getTranslation(project)?.title} - ${index + 1}`"
            />
          </div>
          <div class="project-info">
            <h3>{{ getTranslation(project)?.title }}</h3>
            <div
              v-if="getTranslation(project)?.description"
              class="description"
              v-html="getTranslation(project)?.description"
            ></div>
            <a v-if="project.url" :href="project.url" target="_blank" rel="noreferrer" class="btn">
              {{ t('common.viewProject') }}
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#my-works {
  background-color: #1a1a1a;
  padding: 80px 0;
  color: #fff;
}

#my-works .container {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding: 0 20px;
}

#my-works h2 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #f4a460;
  font-weight: 700;
}

#my-works .intro {
  font-size: 1.15em;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  max-width: 800px;
  margin: 0 auto 60px;
}

.project {
  margin: 0;
  padding: 60px 20px;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(244, 164, 96, 0.1);
}

.project .content {
  max-width: 1080px;
  box-sizing: border-box;
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  padding: 40px;
  border-radius: 12px;
  border: 1px solid rgba(244, 164, 96, 0.2);
  transition: all 0.3s ease;
}

.project .content:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(244, 164, 96, 0.4);
  box-shadow: 0 8px 20px rgba(244, 164, 96, 0.1);
  transform: translateY(-3px);
}

.project-inner {
  display: flex;
  gap: 40px;
  align-items: center;
}

.project-images {
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.project-images img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

.project-info {
  flex: 1;
}

.project-info h3 {
  font-size: 1.8em;
  color: #f4a460;
  margin: 0 0 15px;
  font-weight: 600;
}

.project-info .description {
  font-size: 1.1em;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  margin: 0 0 20px;
}

.project-info .description :deep(p) {
  margin: 0.5em 0;
}

.project-info .description :deep(ul),
.project-info .description :deep(ol) {
  padding-left: 1.5em;
  margin: 0.5em 0;
}

.project-info .description :deep(a) {
  color: #f4a460;
  text-decoration: underline;
}

.project-info .description :deep(strong) {
  font-weight: 600;
}

.project-info .description :deep(blockquote) {
  border-left: 3px solid #f4a460;
  padding-left: 1em;
  margin: 0.5em 0;
  opacity: 0.9;
}

.project-info .btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #f4a460;
  color: #1a1a1a;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.project-info .btn:hover {
  background: #fff;
  transform: translateX(5px);
}

@media (max-width: 768px) {
  #my-works {
    padding: 60px 0;
  }

  #my-works h2 {
    font-size: 2em;
  }

  #my-works .intro {
    font-size: 1.05em;
  }

  .project {
    padding: 40px 15px;
  }

  .project .content {
    padding: 25px;
  }

  .project-inner {
    flex-direction: column;
    gap: 25px;
  }

  .project-images {
    flex: none;
    width: 100%;
  }

  .project-info h3 {
    font-size: 1.5em;
  }
}
</style>
