"use client";

import "./Experience.css";
import { useI18n } from "@/i18n/context";

export function Experience() {
  const { t } = useI18n();

  return (
    <section id="experience">
      <div className="container">
        <h2>{t('experience.title')}</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="period">{t('experience.resilio.period')}</div>
              <h3>{t('experience.resilio.position')}</h3>
              <h4>{t('experience.resilio.company')}</h4>
              <ul>
                {t('experience.resilio.items.map')((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="tech-stack">
                {t('experience.resilio.techStack.map')((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="period">{t('experience.freelance.period')}</div>
              <h3>{t('experience.freelance.position')}</h3>
              <h4>{t('experience.freelance.company')}</h4>
              <ul>
                {t('experience.freelance.items.map')((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
