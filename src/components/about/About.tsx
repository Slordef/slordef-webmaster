"use client";

import "./About.css";
import { useI18n } from "@/i18n/context";

export function About() {
  const { t } = useI18n();

  return (
    <section id="about">
      <div className="container">
        <h2>{t('about.title')}</h2>
        <div className="content">
          <div className="value-proposition">
            <p className="intro">
              {t('about.intro')}
            </p>
            <p className="description">
              {t('about.description')}
            </p>
            <p className="approach">
              {t('about.approach')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
