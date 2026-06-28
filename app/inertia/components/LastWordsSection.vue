<script setup lang="ts">
import { useI18n } from '../composables/useI18n'
import TerminalWindow from './TerminalWindow.vue'

const { t } = useI18n()
</script>

<template>
  <section id="last-words">
    <div class="t-container">
      <TerminalWindow title="hire.sh" class="cta-window">
        <div class="t-body">
          <div class="t-prompt run-line">
            <span class="user">slordef@arch</span><span class="sep">:</span><span class="path">~</span
            ><span class="sym">$</span> ./hire --now
          </div>
          <h2>{{ t('lastWords.title') }}</h2>
          <p class="cta-text">{{ t('lastWords.description') }}</p>
          <div class="cta-buttons">
            <a href="#contact" class="t-btn primary">
              <i class="fa-solid fa-envelope"></i>
              {{ t('lastWords.getInTouch') }}
            </a>
            <a
              href="https://www.linkedin.com/in/maximilien-v-576625172/"
              target="_blank"
              rel="noreferrer"
              class="t-btn ghost"
            >
              <i class="fa-brands fa-linkedin"></i>
              {{ t('lastWords.connectLinkedIn') }}
            </a>
          </div>
        </div>
      </TerminalWindow>
    </div>
  </section>
</template>

<style scoped>
#last-words {
  padding: 70px 0;
}

.cta-window .t-body {
  padding: 36px 32px;
}

.run-line {
  margin-bottom: 18px;
}

.cta-window h2 {
  font-family: var(--mono);
  font-size: clamp(1.6rem, 4vw, 2.3rem);
  font-weight: 700;
  color: var(--white);
  margin-bottom: 16px;
  letter-spacing: -0.01em;
}

.cta-text {
  color: var(--muted);
  font-size: 1.1rem;
  line-height: 1.7;
  max-width: 680px;
  margin-bottom: 28px;
}

.cta-buttons {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  #last-words {
    padding: 56px 0;
  }

  .cta-window .t-body {
    padding: 28px 22px;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .cta-buttons .t-btn {
    justify-content: center;
  }
}
</style>
