"use client";

import "./Home.css";
import Scroll from "@/components/home/Scroll";
import { useI18n } from "@/i18n/context";

export function Home() {
  const { t } = useI18n();

  return (
    <section id={"home"}>
      <h1>{t('home.title')}</h1>
      <h2>{t('home.subtitle')}</h2>
      <h3>{t('home.tagline')}</h3>
      <p className="experience">{t('home.experience')}</p>
      <div className="socials">
        <a
          href="https://www.linkedin.com/in/maximilien-v-576625172/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <i className={"fa-brands fa-linkedin"} />
        </a>
        <a
          href="https://github.com/Slordef"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <i className={"fa-brands fa-github"} />
        </a>
        <a
          href="https://discord.gg/xx5kuQj5Qh"
          target="_blank"
          rel="noreferrer"
          title="Discord"
        >
          <i className={"fa-brands fa-discord"} />
        </a>
        <a
          href="https://www.facebook.com/SlordefWebmaster/"
          target="_blank"
          rel="noreferrer"
          title="Facebook"
        >
          <i className={"fa-brands fa-facebook"} />
        </a>
      </div>
      <Scroll />
    </section>
  );
}
