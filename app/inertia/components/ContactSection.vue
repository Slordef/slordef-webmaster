<script setup lang="ts">
import { useI18n } from '../composables/useI18n'
import TerminalWindow from './TerminalWindow.vue'

const { t } = useI18n()

const currentYear = new Date().getFullYear()
</script>

<template>
  <section id="contact">
    <div class="t-container">
      <div class="t-secthead">
        <span class="user">slordef@arch</span>:<span class="path">~</span><span class="sym">$</span>
        ./connect
      </div>
      <h2 class="t-sectitle">// {{ t('contact.title') }}</h2>
      <p class="intro">{{ t('contact.intro') }}</p>

      <TerminalWindow title="slordef@arch: ~/connect" class="contact-window">
        <div class="t-body">
          <div class="c-cmd">
            <span class="t-prompt"
              ><span class="user">slordef@arch</span><span class="sep">:</span
              ><span class="path">~</span><span class="sym">$</span></span
            >
            cat contact.json
          </div>
          <div class="c-row">
            <span class="k">{{ t('contact.email') }}</span>
            <a href="mailto:contact@slordef-webmaster.ch" class="v mail"
              >contact@slordef-webmaster.ch</a
            >
          </div>
          <div class="c-row">
            <span class="k">{{ t('contact.location') }}</span>
            <span class="v">{{ t('contact.locationValue') }}</span>
          </div>
          <div class="c-row">
            <span class="k">{{ t('contact.availability') }}</span>
            <span class="v avail"><span class="ping"></span>{{ t('contact.availabilityValue') }}</span>
          </div>
        </div>
      </TerminalWindow>

      <div class="connect">
        <h3>{{ t('contact.connectWithMe') }}</h3>
        <div class="socials">
          <a
            href="https://www.linkedin.com/in/maximilien-v-576625172/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-linkedin" />
            LinkedIn
          </a>
          <a href="https://github.com/Slordef" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-github" />
            GitHub
          </a>
          <a href="https://discord.gg/xx5kuQj5Qh" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-discord" />
            Discord
          </a>
          <a href="https://www.facebook.com/SlordefWebmaster/" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-facebook" />
            Facebook
          </a>
        </div>
      </div>

      <footer class="footer">
        <p class="copy">
          &copy; {{ currentYear }} slordef — <span class="t-accent">exit 0</span>
        </p>
        <p class="tagline">
          {{ t('common.allRightsReserved') }} · {{ t('common.builtWithPassion') }}
        </p>
      </footer>
    </div>
  </section>
</template>

<style scoped>
#contact {
  padding: 70px 0 40px;
}

.intro {
  color: var(--muted);
  font-size: 1.05rem;
  max-width: 700px;
  margin: -24px 0 34px;
}

.contact-window .t-body {
  font-family: var(--mono);
  font-size: 0.95rem;
}

.c-cmd {
  color: var(--muted);
  margin-bottom: 16px;
}

.c-row {
  display: flex;
  gap: 12px;
  padding: 7px 0;
  flex-wrap: wrap;
}

.c-row .k {
  color: var(--muted);
  min-width: 120px;
}

.c-row .k::after {
  content: ':';
}

.c-row .v {
  color: var(--white);
}

.c-row .v.mail {
  color: var(--accent);
  text-shadow: var(--glow);
}

.c-row .v.mail:hover {
  text-decoration: underline;
}

.avail {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--accent);
}

.avail .ping {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: var(--glow);
  animation: ping 1.6s ease-out infinite;
}

@keyframes ping {
  0% {
    box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.6);
  }
  70% {
    box-shadow: 0 0 0 9px rgba(74, 222, 128, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(74, 222, 128, 0);
  }
}

.connect {
  margin: 50px 0 40px;
  padding-top: 36px;
  border-top: 1px solid var(--border);
}

.connect h3 {
  font-family: var(--mono);
  font-size: 1.1rem;
  color: var(--white);
  margin-bottom: 20px;
}

.socials {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.socials a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--mono);
  font-size: 0.85rem;
  padding: 10px 16px;
  border: 1px solid var(--border-bright);
  border-radius: 6px;
  color: var(--muted);
  transition: all 0.18s ease;
}

.socials a:hover {
  color: var(--accent);
  border-color: var(--accent);
  text-shadow: var(--glow);
}

.footer {
  padding-top: 30px;
  border-top: 1px solid var(--border);
}

.footer .copy {
  font-family: var(--mono);
  color: var(--muted);
  font-size: 0.9rem;
}

.footer .tagline {
  color: var(--border-bright);
  font-size: 0.82rem;
  margin-top: 6px;
}

@media (max-width: 768px) {
  #contact {
    padding: 56px 0 30px;
  }
}
</style>
