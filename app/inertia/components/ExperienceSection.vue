<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <section id="experience">
    <div class="container">
      <h2>{{ t('experience.title') }}</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="period">{{ t('experience.resilio.period') }}</div>
            <h3>{{ t('experience.resilio.position') }}</h3>
            <h4>{{ t('experience.resilio.company') }}</h4>
            <ul>
              <li v-for="i in 5" :key="`resilio_item_${i}`">
                {{ t(`experience.resilio.items.${i - 1}`) }}
              </li>
            </ul>
            <div class="tech-stack">
              <span v-for="i in 7" :key="`resilio_stack_${i}`">
                {{ t(`experience.resilio.techStack.${i - 1}`) }}
              </span>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <div class="period">{{ t('experience.freelance.period') }}</div>
            <h3>{{ t('experience.freelance.position') }}</h3>
            <h4>{{ t('experience.freelance.company') }}</h4>
            <ul>
              <li v-for="i in 5" :key="`freelance_item_${i}`">
                {{ t(`experience.freelance.items.${i - 1}`) }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#experience {
  background-color: #f1f0d8;
  padding: 80px 20px;
  color: #2c2416;
}

#experience .container {
  max-width: 1000px;
  margin: 0 auto;
}

#experience h2 {
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 60px;
  color: #8b7049;
  font-weight: 700;
}

.timeline {
  position: relative;
  padding-left: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, #9b7d68, #8b7049);
}

.timeline-item {
  position: relative;
  margin-bottom: 50px;
  padding-bottom: 30px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -32px;
  top: 0;
  width: 15px;
  height: 15px;
  background-color: #f4a460;
  border: 3px solid #8b7049;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #f1f0d8;
}

.timeline-content {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.timeline-content:hover {
  transform: translateX(5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.period {
  display: inline-block;
  background-color: #9b7d68;
  color: #fff;
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: 600;
  margin-bottom: 15px;
}

#experience h3 {
  font-size: 1.6em;
  color: #8b7049;
  margin: 10px 0;
  font-weight: 700;
}

#experience h4 {
  font-size: 1.1em;
  color: #9b7d68;
  margin: 5px 0 20px 0;
  font-weight: 500;
  font-style: italic;
}

#experience ul {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

#experience ul li {
  padding: 8px 0;
  color: #5a4a3a;
  font-size: 1.05em;
  line-height: 1.6;
  position: relative;
  padding-left: 25px;
}

#experience ul li::before {
  content: '\25b8';
  position: absolute;
  left: 0;
  color: #9b7d68;
  font-weight: bold;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.tech-stack span {
  background-color: #f4a460;
  color: #fff;
  padding: 6px 14px;
  border-radius: 15px;
  font-size: 0.85em;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.tech-stack span:hover {
  background-color: #9b7d68;
}

@media (max-width: 768px) {
  #experience {
    padding: 60px 20px;
  }

  #experience h2 {
    font-size: 2em;
    margin-bottom: 40px;
  }

  .timeline {
    padding-left: 30px;
  }

  .timeline::before {
    left: 8px;
  }

  .timeline-marker {
    left: -25px;
    width: 12px;
    height: 12px;
  }

  .timeline-content {
    padding: 20px;
  }

  #experience h3 {
    font-size: 1.3em;
  }

  #experience h4 {
    font-size: 1em;
  }

  #experience ul li {
    font-size: 0.95em;
  }
}
</style>
