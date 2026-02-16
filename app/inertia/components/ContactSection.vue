<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <section id="contact">
    <div class="container">
      <h2>{{ t('contact.title') }}</h2>
      <p class="intro">{{ t('contact.intro') }}</p>

      <div class="contact-methods">
        <div class="contact-card">
          <div class="icon">
            <i class="fa-solid fa-envelope"></i>
          </div>
          <h3>{{ t('contact.email') }}</h3>
          <a href="mailto:contact@slordef-webmaster.ch">contact@slordef-webmaster.ch</a>
        </div>

        <div class="contact-card">
          <div class="icon">
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <h3>{{ t('contact.location') }}</h3>
          <p>{{ t('contact.locationValue') }}</p>
        </div>

        <div class="contact-card">
          <div class="icon">
            <i class="fa-solid fa-clock"></i>
          </div>
          <h3>{{ t('contact.availability') }}</h3>
          <p>{{ t('contact.availabilityValue') }}</p>
        </div>
      </div>

      <div class="social-section">
        <h3>{{ t('contact.connectWithMe') }}</h3>
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

      <footer class="footer">
        <p>&copy; {{ new Date().getFullYear() }} Slordef. {{ t('common.allRightsReserved') }}</p>
        <p class="tagline">{{ t('common.builtWithPassion') }}</p>
      </footer>
    </div>
  </section>
</template>

<style scoped>
#contact {
  background-color: #1a1a1a;
  padding: 80px 20px 40px 20px;
  color: #fff;
}

#contact .container {
  max-width: 1000px;
  margin: 0 auto;
}

#contact h2 {
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 20px;
  color: #f4a460;
  font-weight: 700;
}

#contact .intro {
  text-align: center;
  font-size: 1.15em;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 60px;
  line-height: 1.7;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.contact-card {
  background: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid rgba(244, 164, 96, 0.2);
  transition: all 0.3s ease;
}

.contact-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: #f4a460;
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(244, 164, 96, 0.15);
}

.contact-card .icon {
  font-size: 2.5em;
  color: #f4a460;
  margin-bottom: 20px;
}

.contact-card h3 {
  font-size: 1.3em;
  color: #fff;
  margin: 15px 0;
  font-weight: 600;
}

.contact-card p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1em;
  margin: 10px 0;
}

.contact-card a {
  color: #f4a460;
  text-decoration: none;
  font-size: 1em;
  transition: color 0.3s ease;
  word-break: break-all;
}

.contact-card a:hover {
  color: #fff;
  text-decoration: underline;
}

.social-section {
  text-align: center;
  margin-bottom: 60px;
  padding-top: 40px;
  border-top: 1px solid rgba(244, 164, 96, 0.2);
}

.social-section h3 {
  font-size: 1.5em;
  color: #f4a460;
  margin-bottom: 30px;
  font-weight: 600;
}

.socials {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 25px;
}

.socials a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(244, 164, 96, 0.3);
  border-radius: 50%;
  color: #9b7d68;
  font-size: 1.8em;
  transition: all 0.3s ease;
}

.socials a:hover {
  background: #f4a460;
  color: #fff;
  border-color: #f4a460;
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 8px 15px rgba(244, 164, 96, 0.3);
}

.footer {
  text-align: center;
  padding-top: 40px;
  border-top: 1px solid rgba(244, 164, 96, 0.2);
}

.footer p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95em;
  margin: 8px 0;
}

.footer .tagline {
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.85em;
  font-style: italic;
}

@media (max-width: 768px) {
  #contact {
    padding: 60px 20px 30px 20px;
  }

  #contact h2 {
    font-size: 2em;
  }

  #contact .intro {
    font-size: 1.05em;
    margin-bottom: 40px;
  }

  .contact-methods {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 40px;
  }

  .contact-card {
    padding: 25px;
  }

  .contact-card .icon {
    font-size: 2em;
  }

  .contact-card h3 {
    font-size: 1.2em;
  }

  .social-section {
    margin-bottom: 40px;
  }

  .socials a {
    width: 55px;
    height: 55px;
    font-size: 1.6em;
  }
}
</style>
