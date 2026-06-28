<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <section id="about">
    <div class="t-container">
      <div class="t-secthead">
        <span class="user">slordef@arch</span>:<span class="path">~</span><span class="sym">$</span> cat
        ./about.md
      </div>
      <h2 class="t-sectitle">// {{ t('about.title') }}</h2>

      <div class="value-proposition">
        <p class="intro">{{ t('about.intro') }}</p>
        <p class="description">{{ t('about.description') }}</p>
        <p class="approach">{{ t('about.approach') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
#about {
  padding: 70px 0;
}

.value-proposition {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 760px;
}

.intro {
  font-family: var(--mono);
  font-size: 1.2rem;
  color: var(--accent);
  font-weight: 500;
}

.description {
  font-size: 1.12rem;
  color: var(--white);
}

.approach {
  font-size: 1.05rem;
  color: var(--muted);
  border-left: 2px solid var(--border-bright);
  padding-left: 18px;
}

@media (max-width: 768px) {
  #about {
    padding: 56px 0;
  }

  .intro {
    font-size: 1.1rem;
  }

  .description {
    font-size: 1.05rem;
  }
}
</style>
