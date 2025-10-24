"use client";

import './LastWords.css';
import { useI18n } from '@/i18n/context';

const LastWords = () => {
  const { t } = useI18n();

  return (
    <section id={'last-words'}>
      <div className="container">
        <h2>{t.lastWords.title}</h2>
        <p className="cta-text">
          {t.lastWords.description}
        </p>
        <div className="cta-buttons">
          <a href="#contact" className="btn-primary">
            <i className="fa-solid fa-envelope"></i>
            {t.lastWords.getInTouch}
          </a>
          <a
            href="https://www.linkedin.com/in/maximilien-v-576625172/"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <i className="fa-brands fa-linkedin"></i>
            {t.lastWords.connectLinkedIn}
          </a>
        </div>
      </div>
    </section>
  );
};

export default LastWords;
