<script setup lang="ts">
import { useI18n } from '../composables/useI18n'
import TerminalWindow from './TerminalWindow.vue'

const { t } = useI18n()

const services = [
  { key: 'fractional', file: 'cto.sh', icon: 'fa-solid fa-clock', items: 4 },
  { key: 'audits', file: 'audit.sh', icon: 'fa-solid fa-magnifying-glass-chart', items: 4 },
  { key: 'missions', file: 'missions.sh', icon: 'fa-solid fa-rocket', items: 4 },
]
</script>

<template>
  <section id="services">
    <div class="t-container">
      <div class="t-secthead">
        <span class="user">slordef@arch</span>:<span class="path">~</span><span class="sym">$</span>
        ./services --list
      </div>
      <h2 class="t-sectitle">// {{ t('services.title') }}</h2>
      <p class="subtitle">{{ t('services.subtitle') }}</p>

      <div class="services-grid">
        <TerminalWindow
          v-for="service in services"
          :key="service.key"
          :title="service.file"
          class="service"
        >
          <div class="t-body">
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
        </TerminalWindow>
      </div>
    </div>
  </section>
</template>

<style scoped>
#services {
  padding: 70px 0;
}

.subtitle {
  color: var(--muted);
  font-size: 1.05rem;
  margin: -24px 0 34px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  align-items: start;
}

.service {
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.18s ease;
}

.service:hover {
  transform: translateY(-3px);
  border-color: var(--border-bright);
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.45);
}

.service-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.service-header i {
  font-size: 1.5rem;
  color: var(--accent);
}

.service-header h3 {
  font-family: var(--mono);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--white);
}

.description {
  color: var(--muted);
  font-size: 0.96rem;
  margin-bottom: 18px;
}

#services ul {
  list-style: none;
}

#services ul li {
  padding: 6px 0 6px 24px;
  color: var(--muted);
  font-size: 0.94rem;
  line-height: 1.5;
  position: relative;
}

#services ul li::before {
  content: '\2713';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: bold;
}

@media (max-width: 768px) {
  #services {
    padding: 56px 0;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
