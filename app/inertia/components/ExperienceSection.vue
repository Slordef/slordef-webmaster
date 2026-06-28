<script setup lang="ts">
import { useI18n } from '../composables/useI18n'
import TerminalWindow from './TerminalWindow.vue'

const { t } = useI18n()

const experiences = [
  { key: 'headOfEngineering', items: 3 },
  { key: 'ciso', items: 3 },
  { key: 'cto', items: 4 },
  { key: 'freelance', items: 5 },
]

// Active when the period is still ongoing ("Present" in EN, "Présent" in FR)
function isActive(key: string): boolean {
  const period = t(`experience.${key}.period`).toLowerCase()
  return period.includes('present') || period.includes('présent')
}
</script>

<template>
  <section id="experience">
    <div class="t-container">
      <div class="t-secthead">
        <span class="user">slordef@arch</span>:<span class="path">~</span><span class="sym">$</span>
        tail -f ./experience.log
      </div>
      <h2 class="t-sectitle">// {{ t('experience.title') }}</h2>

      <TerminalWindow title="experience.log">
        <div class="t-body log">
          <div v-for="exp in experiences" :key="exp.key" class="log-entry">
            <div class="log-head">
              <span class="period">{{ t(`experience.${exp.key}.period`) }}</span>
              <span class="position">{{ t(`experience.${exp.key}.position`) }}</span>
              <span :class="['badge', { live: isActive(exp.key) }]">{{
                isActive(exp.key) ? '● running' : 'exit 0'
              }}</span>
            </div>
            <div class="company">{{ t(`experience.${exp.key}.company`) }}</div>
            <ul>
              <li v-for="i in exp.items" :key="`${exp.key}_item_${i}`">
                {{ t(`experience.${exp.key}.items.${i - 1}`) }}
              </li>
            </ul>
          </div>
        </div>
      </TerminalWindow>
    </div>
  </section>
</template>

<style scoped>
#experience {
  padding: 70px 0;
}

.log {
  font-family: var(--mono);
}

.log-entry {
  padding: 18px 0;
  border-bottom: 1px dashed var(--border);
}

.log-entry:first-child {
  padding-top: 0;
}

.log-entry:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.log-head {
  display: flex;
  align-items: baseline;
  gap: 14px;
  flex-wrap: wrap;
}

.period {
  color: var(--accent);
  font-size: 0.9rem;
  min-width: 130px;
}

.position {
  color: var(--white);
  font-weight: 600;
  font-size: 1.02rem;
}

.badge {
  margin-left: auto;
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid var(--border-bright);
  color: var(--muted);
}

.badge.live {
  color: var(--accent);
  border-color: var(--accent);
}

.company {
  color: var(--cyan);
  font-size: 0.88rem;
  margin: 6px 0 10px;
}

.log ul {
  list-style: none;
}

.log ul li {
  font-family: var(--sans);
  padding: 5px 0 5px 22px;
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.55;
  position: relative;
}

.log ul li::before {
  content: '\25b8';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-family: var(--mono);
}

@media (max-width: 768px) {
  #experience {
    padding: 56px 0;
  }

  .badge {
    margin-left: 0;
  }

  .period {
    min-width: 110px;
  }
}
</style>
