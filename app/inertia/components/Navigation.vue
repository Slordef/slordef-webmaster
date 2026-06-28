<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { router } from '@inertiajs/vue3'
import { useI18n, availableLocales, type Locale } from '../composables/useI18n'

const { t, locale } = useI18n()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const mounted = ref(false)

const navLinks = [
  { href: '#home', key: 'nav.home' },
  { href: '#about', key: 'nav.about' },
  { href: '#expertise', key: 'nav.expertise' },
  { href: '#services', key: 'nav.services' },
  { href: '#experience', key: 'nav.experience' },
  { href: '#my-works', key: 'nav.works' },
  { href: '#contact', key: 'nav.contact' },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

function handleLinkClick() {
  isMobileMenuOpen.value = false
}

function setLocale(newLocale: Locale) {
  router.post(
    '/locale',
    { locale: newLocale },
    {
      preserveScroll: true,
      preserveState: true,
    }
  )
}

onMounted(() => {
  mounted.value = true
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav :class="['navigation', { scrolled: isScrolled }]">
    <div class="nav-container">
      <div class="t-dots nav-dots" aria-hidden="true">
        <span class="t-dot min"></span><span class="t-dot max"></span><span class="t-dot close"></span>
      </div>

      <div class="nav-brand">
        <a href="#home" @click="handleLinkClick">
          <span class="brand-name">slordef<span class="at">@arch</span></span>
        </a>
      </div>

      <button
        :class="['mobile-menu-toggle', { open: isMobileMenuOpen }]"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div :class="['nav-links', { open: isMobileMenuOpen }]">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="nav-link"
          @click="handleLinkClick"
        >
          {{ t(link.key) }}
        </a>
      </div>

      <div class="nav-language-switcher">
        <button
          v-for="lang in availableLocales"
          :key="lang"
          :class="['lang-btn', { active: mounted && locale === lang }]"
          :aria-label="`Switch to ${lang.toUpperCase()}`"
          :disabled="!mounted"
          @click="setLocale(lang)"
        >
          {{ lang.toUpperCase() }}
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(13, 20, 22, 0.82);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  transition: background 0.3s ease;
}

.navigation.scrolled {
  background: rgba(13, 20, 22, 0.96);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 18px;
  height: 60px;
}

.nav-dots {
  margin-right: 2px;
  pointer-events: none;
}

.nav-brand a {
  display: flex;
  align-items: center;
  transition: opacity 0.3s ease;
}

.nav-brand a:hover {
  opacity: 0.85;
}

.brand-name {
  font-family: var(--mono);
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--white);
  letter-spacing: -0.01em;
  white-space: nowrap;
}

.brand-name .at {
  color: var(--accent);
}

.nav-links {
  margin-left: auto;
  display: flex;
  gap: 22px;
  align-items: center;
  font-family: var(--mono);
  font-size: 0.85rem;
}

.nav-link {
  color: var(--muted);
  position: relative;
  transition:
    color 0.18s ease,
    text-shadow 0.18s ease;
}

.nav-link::before {
  content: './';
  color: var(--border-bright);
}

.nav-link:hover {
  color: var(--accent);
  text-shadow: var(--glow);
}

.nav-language-switcher {
  display: flex;
  border: 1px solid var(--border-bright);
  border-radius: 5px;
  overflow: hidden;
  font-family: var(--mono);
  font-size: 0.74rem;
}

.lang-btn {
  background: transparent;
  border: none;
  padding: 5px 10px;
  color: var(--muted);
  cursor: pointer;
  transition: all 0.18s ease;
}

.lang-btn:hover:not(:disabled) {
  color: var(--accent);
}

.lang-btn.active {
  background: var(--accent);
  color: #06210f;
  font-weight: 600;
}

.lang-btn:disabled {
  cursor: default;
  opacity: 0.6;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 26px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
}

.mobile-menu-toggle span {
  width: 100%;
  height: 2px;
  background-color: var(--accent);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.mobile-menu-toggle.open span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.mobile-menu-toggle.open span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.open span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

@media (max-width: 820px) {
  .nav-dots {
    display: none;
  }

  .mobile-menu-toggle {
    display: flex;
    margin-left: auto;
  }

  .nav-links {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    margin-left: 0;
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    flex-direction: column;
    gap: 0;
    padding: 8px 0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: all 0.3s ease;
  }

  .nav-links.open {
    max-height: 500px;
    opacity: 1;
  }

  .nav-link {
    padding: 14px 24px;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid var(--border);
  }

  .nav-link:last-child {
    border-bottom: none;
  }

  .nav-link:hover {
    background-color: rgba(74, 222, 128, 0.08);
  }
}
</style>
