<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import Navigation from '../components/Navigation.vue'
import HomeSection from '../components/HomeSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ExpertiseSection from '../components/ExpertiseSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import WorksSection from '../components/WorksSection.vue'
import SideProjectsSection from '../components/SideProjectsSection.vue'
import LastWordsSection from '../components/LastWordsSection.vue'
import ContactSection from '../components/ContactSection.vue'

interface ProjectTranslation {
  id: number
  locale: 'en' | 'fr'
  title: string
  description: string | null
}

interface Project {
  id: number
  slug: string
  image: string | null
  url: string | null
  isPublished: boolean
  order: number
  category: 'work' | 'side-project'
  translations: ProjectTranslation[]
}

defineProps<{
  projects: Project[]
}>()
</script>

<template>
  <Head>
    <title>Slordef - CTO & CISO Freelance</title>
    <meta
      name="description"
      content="CTO and CISO Freelance with 15+ years of experience. Architecture, Security, Technical Leadership. Based in Switzerland."
    />
    <meta name="keywords" content="CTO, CISO, Freelance, Architecture, Security, Switzerland, ISO 27001" />
    <meta name="author" content="Slordef" />

    <meta property="og:title" content="Slordef - CTO & CISO Freelance" />
    <meta
      property="og:description"
      content="CTO and CISO Freelance with 15+ years of experience. Architecture, Security, Technical Leadership."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://slordef-webmaster.ch" />
    <meta property="og:image" content="https://slordef-webmaster.ch/template/logo.png" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="Slordef - CTO & CISO Freelance" />
    <meta
      name="twitter:description"
      content="CTO and CISO Freelance with 15+ years of experience. Architecture, Security, Technical Leadership."
    />

    <link rel="canonical" href="https://slordef-webmaster.ch" />
  </Head>

  <div class="main-wrapper">
    <Navigation />
    <HomeSection />
    <AboutSection />
    <ExpertiseSection />
    <ServicesSection />
    <ExperienceSection />
    <WorksSection :projects="projects" />
    <SideProjectsSection />
    <LastWordsSection />
    <ContactSection />
  </div>
</template>

<style>
html {
  scroll-padding-top: 70px;
  scroll-behavior: smooth;
}

@media (max-width: 768px) {
  html {
    scroll-padding-top: 60px;
  }
}

.main-wrapper {
  min-height: 100vh;
  width: 100%;
}
</style>
