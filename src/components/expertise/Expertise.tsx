"use client";

import "./Expertise.css";
import { useI18n } from "@/i18n/context";

export function Expertise() {
  const { t } = useI18n();

  return (
    <section id="expertise">
      <div className="container">
        <h2>{t('expertise.title')}</h2>
        <div className="expertise-grid">
          <div className="expertise-card">
            <div className="icon">
              <i className="fa-solid fa-code"></i>
            </div>
            <h3>{t('expertise.architecture.title')}</h3>
            <ul>
              {t('expertise.architecture.items', (item, index) => (
                <li key={`architecture_${index}`}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="expertise-card">
            <div className="icon">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <h3>{t('expertise.security.title')}</h3>
            <ul>
              {t('expertise.security.items', (item, index) => (
                <li key={`security_${index}`}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="expertise-card">
            <div className="icon">
              <i className="fa-solid fa-users"></i>
            </div>
            <h3>{t('expertise.leadership.title')}</h3>
            <ul>
              {t('expertise.leadership.items', (item, index) => (
                <li key={`leadership_${index}`}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="expertise-card">
            <div className="icon">
              <i className="fa-solid fa-leaf"></i>
            </div>
            <h3>{t('expertise.impact.title')}</h3>
            <ul>
              {t('expertise.impact.items', (item, index) => (
                <li key={`impact_${index}`}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
