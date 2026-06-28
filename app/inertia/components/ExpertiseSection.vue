<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const expertiseAreas = [
  { key: 'architecture', dir: 'architecture', icon: 'fa-solid fa-code', items: 4 },
  { key: 'security', dir: 'security', icon: 'fa-solid fa-shield-halved', items: 4 },
  { key: 'leadership', dir: 'governance', icon: 'fa-solid fa-users', items: 4 },
  { key: 'impact', dir: 'impact', icon: 'fa-solid fa-leaf', items: 4 },
]
</script>

<template>
  <section id="expertise">
    <div class="t-container">
      <div class="t-secthead">
        <span class="user">slordef@arch</span>:<span class="path">~</span><span class="sym">$</span> ls
        ./expertise
      </div>
      <h2 class="t-sectitle">// {{ t('expertise.title') }}</h2>

      <div class="expertise-grid">
        <div v-for="area in expertiseAreas" :key="area.key" class="expertise-card">
          <div class="card-top">
            <i :class="area.icon" class="icon"></i>
            <span class="dir">{{ area.dir }}/</span>
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
  padding: 70px 0;
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
}

.expertise-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent);
  border-radius: 8px;
  padding: 24px;
  transition:
    transform 0.18s ease,
    border-color 0.18s ease,
    box-shadow 0.18s ease;
}

.expertise-card:hover {
  transform: translateY(-3px);
  border-color: var(--border-bright);
  border-left-color: var(--accent);
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.45);
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.card-top .icon {
  font-size: 1.6rem;
  color: var(--accent);
}

.card-top .dir {
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--cyan);
}

.expertise-card h3 {
  font-family: var(--mono);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--white);
  margin-bottom: 14px;
}

.expertise-card ul {
  list-style: none;
}

.expertise-card ul li {
  padding: 6px 0 6px 22px;
  color: var(--muted);
  font-size: 0.96rem;
  line-height: 1.55;
  position: relative;
}

.expertise-card ul li::before {
  content: '\25b8';
  position: absolute;
  left: 0;
  color: var(--accent);
}

@media (max-width: 768px) {
  #expertise {
    padding: 56px 0;
  }

  .expertise-grid {
    grid-template-columns: 1fr;
  }
}
</style>
