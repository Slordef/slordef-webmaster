<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <section id="last-words">
    <div class="container">
      <h2>{{ t('lastWords.title') }}</h2>
      <p class="cta-text">{{ t('lastWords.description') }}</p>
      <div class="cta-buttons">
        <a href="#contact" class="btn-primary">
          <i class="fa-solid fa-envelope"></i>
          {{ t('lastWords.getInTouch') }}
        </a>
        <a
          href="https://www.linkedin.com/in/maximilien-v-576625172/"
          target="_blank"
          rel="noreferrer"
          class="btn-secondary"
        >
          <i class="fa-brands fa-linkedin"></i>
          {{ t('lastWords.connectLinkedIn') }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
#last-words {
  background: linear-gradient(135deg, #f4a460 0%, #9b7d68 100%);
  padding: 100px 20px;
  color: #fff;
}

#last-words .container {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

#last-words h2 {
  font-size: 2.8em;
  margin-bottom: 25px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.cta-text {
  font-size: 1.25em;
  line-height: 1.8;
  margin-bottom: 40px;
  color: rgba(255, 255, 255, 0.95);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  font-size: 1.1em;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn-primary {
  background-color: #fff;
  color: #8b7049;
}

.btn-primary:hover {
  background-color: #f1f0d8;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.btn-secondary {
  background-color: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.8);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

#last-words i {
  font-size: 1.2em;
}

@media (max-width: 768px) {
  #last-words {
    padding: 70px 20px;
  }

  #last-words h2 {
    font-size: 2em;
    margin-bottom: 20px;
  }

  .cta-text {
    font-size: 1.1em;
    margin-bottom: 30px;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 15px;
  }

  .btn-primary,
  .btn-secondary {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 14px 24px;
    font-size: 1em;
  }
}
</style>
