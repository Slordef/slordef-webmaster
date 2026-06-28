<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <section id="home">
    <div class="hero-inner">
      <div class="t-prompt">
        <span class="user">slordef@arch</span><span class="sep">:</span><span class="path">~</span
        ><span class="sym">$</span> whoami
      </div>
      <h1>{{ t('home.title') }}</h1>
      <h2 class="t-accent t-glow">{{ t('home.subtitle') }}</h2>
      <h3>{{ t('home.tagline') }}</h3>
      <p class="experience">{{ t('home.experience') }}</p>

      <div class="status">
        <span class="t-prompt"
          ><span class="user">slordef@arch</span><span class="sep">:</span><span class="path">~</span
          ><span class="sym">$</span></span
        >
        ./status --check<span class="t-cursor"></span>
      </div>

      <div class="socials">
        <a
          href="https://www.linkedin.com/in/maximilien-v-576625172/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <i class="fa-brands fa-linkedin" />
        </a>
        <a href="https://github.com/Slordef" target="_blank" rel="noreferrer" title="GitHub">
          <i class="fa-brands fa-github" />
        </a>
        <a href="https://discord.gg/xx5kuQj5Qh" target="_blank" rel="noreferrer" title="Discord">
          <i class="fa-brands fa-discord" />
        </a>
        <a
          href="https://www.facebook.com/SlordefWebmaster/"
          target="_blank"
          rel="noreferrer"
          title="Facebook"
        >
          <i class="fa-brands fa-facebook" />
        </a>
      </div>
    </div>

    <a href="#about" class="arrow" aria-label="Scroll down">
      <i class="fa-solid fa-chevron-down" />
    </a>
  </section>
</template>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding: 100px 24px 80px;
}

.hero-inner {
  max-width: var(--maxw);
  width: 100%;
  margin: 0 auto;
}

#home h1 {
  font-family: var(--mono);
  font-size: clamp(2.6rem, 7vw, 4.6rem);
  font-weight: 700;
  line-height: 1.04;
  letter-spacing: -0.02em;
  color: var(--white);
  margin: 14px 0 6px;
}

#home h2 {
  font-family: var(--mono);
  font-size: clamp(1.4rem, 3.4vw, 2.2rem);
  font-weight: 700;
  margin: 0 0 10px;
}

#home h3 {
  font-family: var(--mono);
  font-size: clamp(0.95rem, 2.2vw, 1.25rem);
  font-weight: 500;
  color: var(--cyan);
  margin: 0 0 18px;
  letter-spacing: 0.01em;
}

#home .experience {
  color: var(--muted);
  font-size: 1.08rem;
  max-width: 560px;
  margin: 0 0 26px;
}

.status {
  font-family: var(--mono);
  font-size: 0.9rem;
  color: var(--muted);
  margin-bottom: 30px;
}

#home .socials {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 4px;
}

#home .socials a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: var(--surface);
  border: 1px solid var(--border-bright);
  border-radius: 8px;
  color: var(--muted);
  font-size: 1.4rem;
  transition: all 0.25s ease;
}

#home .socials a:hover {
  color: var(--accent);
  border-color: var(--accent);
  transform: translateY(-4px);
  box-shadow: var(--glow);
}

#home .arrow {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: var(--accent);
  animation: arrow_animation 2s ease-in-out infinite;
}

@keyframes arrow_animation {
  0% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(0.8rem);
  }
  100% {
    transform: translateX(-50%) translateY(0);
  }
}

@media (max-width: 768px) {
  #home {
    padding: 88px 20px 70px;
  }

  #home .experience {
    font-size: 1rem;
  }

  #home .socials a {
    width: 46px;
    height: 46px;
    font-size: 1.25rem;
  }
}
</style>
