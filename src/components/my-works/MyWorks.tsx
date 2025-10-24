"use client";

import './MyWoks.css';
import { useI18n } from '@/i18n/context';

export function MyWorks() {
  const { t } = useI18n();

  return (
    <section id={'my-works'}>
      <div className="container">
        <h2>{t('works.title')}</h2>
        <p className="intro">
          {t('works.subtitle')}
        </p>
      </div>
    </section>
  );
}
