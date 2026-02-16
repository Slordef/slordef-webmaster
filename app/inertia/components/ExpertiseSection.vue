<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const expertiseAreas = [
  { key: 'architecture', icon: 'fa-solid fa-code', items: 4 },
  { key: 'security', icon: 'fa-solid fa-shield-halved', items: 4 },
  { key: 'leadership', icon: 'fa-solid fa-users', items: 4 },
  { key: 'impact', icon: 'fa-solid fa-leaf', items: 4 },
]
</script>

<template>
  <section id="expertise">
    <div class="container">
      <h2>{{ t('expertise.title') }}</h2>
      <div class="expertise-grid">
        <div v-for="area in expertiseAreas" :key="area.key" class="expertise-card">
          <div class="icon">
            <i :class="area.icon"></i>
          </div>
          <h3>{{ t(`expertise.${area.key}.title`) }}</h3>
          <ul>
            <li v-for="i in area.items" :key="`${area.key}_${i}`">
              {{ t(`expertise.${area.key}.items.${i - 1}`) }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#expertise {
  background-color: #f1f0d8;
  padding: 80px 20px;
  color: #2c2416;
}

#expertise .container {
  max-width: 1200px;
  margin: 0 auto;
}

#expertise h2 {
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 60px;
  color: #8b7049;
  font-weight: 700;
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.expertise-card {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.expertise-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.expertise-card .icon {
  font-size: 3em;
  color: #9b7d68;
  margin-bottom: 20px;
  text-align: center;
}

.expertise-card h3 {
  font-size: 1.4em;
  color: #8b7049;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 600;
}

.expertise-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.expertise-card ul li {
  padding: 8px 0;
  color: #5a4a3a;
  font-size: 1em;
  line-height: 1.6;
  position: relative;
  padding-left: 25px;
}

.expertise-card ul li::before {
  content: '\25b8';
  position: absolute;
  left: 0;
  color: #9b7d68;
  font-weight: bold;
}

@media (max-width: 768px) {
  #expertise {
    padding: 60px 20px;
  }

  #expertise h2 {
    font-size: 2em;
    margin-bottom: 40px;
  }

  .expertise-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .expertise-card {
    padding: 25px;
  }

  .expertise-card .icon {
    font-size: 2.5em;
  }

  .expertise-card h3 {
    font-size: 1.25em;
  }
}
</style>
