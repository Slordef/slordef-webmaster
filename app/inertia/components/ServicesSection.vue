<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const services = [
  { key: 'fractional', icon: 'fa-solid fa-clock', items: 4 },
  { key: 'audits', icon: 'fa-solid fa-magnifying-glass-chart', items: 4 },
  { key: 'missions', icon: 'fa-solid fa-rocket', items: 4 },
]
</script>

<template>
  <section id="services">
    <div class="container">
      <h2>{{ t('services.title') }}</h2>
      <p class="subtitle">{{ t('services.subtitle') }}</p>
      <div class="services-grid">
        <div v-for="service in services" :key="service.key" class="service-card">
          <div class="service-header">
            <i :class="service.icon"></i>
            <h3>{{ t(`services.${service.key}.title`) }}</h3>
          </div>
          <p class="description">{{ t(`services.${service.key}.description`) }}</p>
          <ul>
            <li v-for="i in service.items" :key="`${service.key}_${i}`">
              {{ t(`services.${service.key}.items.${i - 1}`) }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#services {
  background-color: #2a2a2a;
  padding: 80px 20px;
  color: #fff;
}

#services .container {
  max-width: 1200px;
  margin: 0 auto;
}

#services h2 {
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 15px;
  color: #f4a460;
  font-weight: 700;
}

#services .subtitle {
  text-align: center;
  font-size: 1.2em;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 60px;
  font-style: italic;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.service-card {
  background: linear-gradient(135deg, #3a3a3a 0%, #2a2a2a 100%);
  padding: 35px;
  border-radius: 12px;
  border: 2px solid #444;
  transition: all 0.3s ease;
}

.service-card:hover {
  border-color: #f4a460;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(244, 164, 96, 0.2);
}

.service-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.service-header i {
  font-size: 3em;
  color: #f4a460;
  margin-bottom: 15px;
}

.service-header h3 {
  font-size: 1.5em;
  color: #fff;
  margin: 0;
  font-weight: 600;
  text-align: center;
}

.description {
  text-align: center;
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.05em;
  margin-bottom: 25px;
  line-height: 1.6;
}

#services ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#services ul li {
  padding: 10px 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1em;
  line-height: 1.5;
  position: relative;
  padding-left: 28px;
}

#services ul li::before {
  content: '\2713';
  position: absolute;
  left: 0;
  color: #f4a460;
  font-weight: bold;
  font-size: 1.2em;
}

@media (max-width: 768px) {
  #services {
    padding: 60px 20px;
  }

  #services h2 {
    font-size: 2em;
  }

  #services .subtitle {
    font-size: 1.05em;
    margin-bottom: 40px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .service-card {
    padding: 28px;
  }

  .service-header i {
    font-size: 2.5em;
  }

  .service-header h3 {
    font-size: 1.3em;
  }
}
</style>
