<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <section id="about">
    <div class="container">
      <h2>{{ t('about.title') }}</h2>
      <div class="content">
        <div class="value-proposition">
          <p class="intro">{{ t('about.intro') }}</p>
          <p class="description">{{ t('about.description') }}</p>
          <p class="approach">{{ t('about.approach') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#about {
  background-color: #1a1a1a;
  padding: 80px 20px;
  color: #fff;
}

#about .container {
  max-width: 1000px;
  margin: 0 auto;
}

#about h2 {
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 50px;
  color: #f4a460;
  font-weight: 700;
}

#about .content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

#about .value-proposition {
  display: flex;
  flex-direction: column;
  gap: 20px;
  line-height: 1.8;
}

#about .intro {
  font-size: 1.3em;
  color: #f4a460;
  font-weight: 500;
  margin: 0;
}

#about .description {
  font-size: 1.15em;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

#about .approach {
  font-size: 1.1em;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  font-style: italic;
}

@media (max-width: 768px) {
  #about {
    padding: 60px 20px;
  }

  #about h2 {
    font-size: 2em;
  }

  #about .intro {
    font-size: 1.15em;
  }

  #about .description {
    font-size: 1.05em;
  }

  #about .approach {
    font-size: 1em;
  }
}
</style>
