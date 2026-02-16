<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <section id="home">
    <h1>{{ t('home.title') }}</h1>
    <h2>{{ t('home.subtitle') }}</h2>
    <h3>{{ t('home.tagline') }}</h3>
    <p class="experience">{{ t('home.experience') }}</p>
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
    <div class="arrow">
      <i class="fa-solid fa-chevron-down" />
    </div>
  </section>
</template>

<style scoped>
#home {
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  text-align: center;
  position: relative;
}

#home h1,
#home h2,
#home h3,
#home p {
  margin: 0;
  padding: 0;
  color: #fff;
}

#home h1 {
  font-size: 3em;
  margin: 15px;
  font-weight: 700;
}

#home h2 {
  font-size: 2em;
  margin: 10px 0;
  font-weight: 600;
}

#home h3 {
  font-size: 1.3em;
  margin: 8px 0;
  font-weight: 400;
  color: #f4a460;
}

#home .experience {
  font-size: 1.1em;
  margin: 15px 0;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 300;
}

#home .socials {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 2rem;
}

#home .socials a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.08);
  border: 2px solid rgba(244, 164, 96, 0.4);
  border-radius: 50%;
  color: #9b7d68;
  font-size: 1.6em;
  transition: all 0.4s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

#home .socials a:hover {
  background: #f4a460;
  color: #fff;
  border-color: #f4a460;
  transform: translateY(-8px) scale(1.15);
  box-shadow: 0 10px 25px rgba(244, 164, 96, 0.5);
}

#home .arrow {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 1rem;
  font-size: 3rem;
  color: #fff;
  animation: arrow_animation 2s ease-in-out infinite;
}

@keyframes arrow_animation {
  0% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(1rem);
  }
  100% {
    transform: translateX(-50%) translateY(0);
  }
}

@media (max-width: 768px) {
  #home h1 {
    font-size: 2.5em;
  }

  #home h2 {
    font-size: 1.6em;
  }

  #home h3 {
    font-size: 1.1em;
  }

  #home .experience {
    font-size: 1em;
  }

  #home .socials a {
    width: 55px;
    height: 55px;
    font-size: 1.4em;
  }

  #home .arrow {
    font-size: 2.5rem;
  }
}
</style>
