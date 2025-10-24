"use client";

import "./Services.css";
import { useI18n } from "@/i18n/context";

export function Services() {
  const { t } = useI18n();

  return (
    <section id="services">
      <div className="container">
        <h2>{t('services.title')}</h2>
        <p className="subtitle">{t('services.subtitle')}</p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-header">
              <i className="fa-solid fa-clock"></i>
              <h3>{t('services.fractional.title')}</h3>
            </div>
            <p className="description">{t('services.fractional.description')}</p>
            <ul>
              {t('services.fractional.items', (item, index) => (
                <li key={`fractional_${index}`}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="service-card">
            <div className="service-header">
              <i className="fa-solid fa-magnifying-glass-chart"></i>
              <h3>{t('services.audits.title')}</h3>
            </div>
            <p className="description">{t('services.audits.description')}</p>
            <ul>
              {t('services.audits.items', (item, index) => (
                <li key={`audits_${index}`}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="service-card">
            <div className="service-header">
              <i className="fa-solid fa-rocket"></i>
              <h3>{t('services.missions.title')}</h3>
            </div>
            <p className="description">{t('services.missions.description')}</p>
            <ul>
              {t('services.missions.items', (item, index) => (
                <li key={`missions_${index}`}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
