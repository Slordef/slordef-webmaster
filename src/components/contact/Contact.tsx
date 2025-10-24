"use client";

import './Contact.css';
import { useI18n } from '@/i18n/context';

const Contact = () => {
  const { t } = useI18n();

  return (
    <section id={'contact'}>
      <div className="container">
        <h2>{t.contact.title}</h2>
        <p className="intro">
          {t.contact.intro}
        </p>

        <div className="contact-methods">
          <div className="contact-card">
            <div className="icon">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <h3>{t.contact.email}</h3>
            <a href="mailto:contact@slordef-webmaster.ch">
              contact@slordef-webmaster.ch
            </a>
          </div>

          <div className="contact-card">
            <div className="icon">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <h3>{t.contact.location}</h3>
            <p>{t.contact.locationValue}</p>
          </div>

          <div className="contact-card">
            <div className="icon">
              <i className="fa-solid fa-clock"></i>
            </div>
            <h3>{t.contact.availability}</h3>
            <p>{t.contact.availabilityValue}</p>
          </div>
        </div>

        <div className="social-section">
          <h3>{t.contact.connectWithMe}</h3>
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/maximilien-v-576625172/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <i className={'fa-brands fa-linkedin'} />
            </a>
            <a
              href="https://github.com/Slordef"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <i className={'fa-brands fa-github'} />
            </a>
            <a
              href="https://discord.gg/xx5kuQj5Qh"
              target="_blank"
              rel="noreferrer"
              title="Discord"
            >
              <i className={'fa-brands fa-discord'} />
            </a>
            <a
              href="https://www.facebook.com/SlordefWebmaster/"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
            >
              <i className={'fa-brands fa-facebook'} />
            </a>
          </div>
        </div>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Slordef. {t.common.allRightsReserved}</p>
          <p className="tagline">{t.common.builtWithPassion}</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
