<script setup lang="ts">
import { useI18n } from '../composables/useI18n'
import TerminalWindow from './TerminalWindow.vue'

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
    <div class="t-container">
      <div class="t-secthead">
        <span class="user">slordef@arch</span>:<span class="path">~</span><span class="sym">$</span> ls
        ./work --selected
      </div>
      <h2 class="t-sectitle">// {{ t('works.title') }}</h2>
      <p class="intro">{{ t('works.subtitle') }}</p>

      <div class="works-list">
        <TerminalWindow
          v-for="project in workProjects"
          :key="project.id"
          :title="project.slug"
          class="project"
        >
          <div class="t-body project-inner">
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
              <a
                v-if="project.url"
                :href="project.url"
                target="_blank"
                rel="noreferrer"
                class="t-btn primary"
              >
                {{ t('common.viewProject') }}
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  </section>
</template>

<style scoped>
#my-works {
  padding: 70px 0;
}

.intro {
  color: var(--muted);
  font-size: 1.05rem;
  max-width: 700px;
  margin: -24px 0 34px;
}

.works-list {
  display: flex;
  flex-direction: column;
  gap: 26px;
}

.project {
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.18s ease;
}

.project:hover {
  transform: translateY(-3px);
  border-color: var(--border-bright);
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.5);
}

.project-inner {
  display: flex;
  gap: 34px;
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
  display: block;
  border-radius: 6px;
  border: 1px solid var(--border);
}

.project-info {
  flex: 1;
}

.project-info h3 {
  font-family: var(--mono);
  font-size: 1.4rem;
  color: var(--accent);
  margin: 0 0 12px;
  font-weight: 600;
}

.project-info .description {
  color: var(--muted);
  font-size: 1rem;
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
  color: var(--accent);
  text-decoration: underline;
}

.project-info .description :deep(strong) {
  color: var(--white);
  font-weight: 600;
}

.project-info .description :deep(blockquote) {
  border-left: 3px solid var(--accent);
  padding-left: 1em;
  margin: 0.5em 0;
  opacity: 0.9;
}

@media (max-width: 768px) {
  #my-works {
    padding: 56px 0;
  }

  .project-inner {
    flex-direction: column;
    gap: 22px;
    align-items: stretch;
  }

  .project-images {
    flex: none;
    width: 100%;
  }

  .project-info h3 {
    font-size: 1.25rem;
  }
}
</style>
