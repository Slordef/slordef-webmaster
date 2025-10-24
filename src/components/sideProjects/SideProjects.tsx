"use client";

import "./SideProjects.css";
import { useI18n } from "@/i18n/context";

export function SideProjects() {
  const { t } = useI18n();

  return (
    <section id="side-projects">
      <div className="container">
        <h2>{t.sideProjects.title}</h2>
        <p className="subtitle">
          {t.sideProjects.subtitle}
        </p>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-icon">
              <i className="fa-solid fa-gamepad"></i>
            </div>
            <h3>{t.sideProjects.gamedev.title}</h3>
            <p className="description">
              {t.sideProjects.gamedev.description}
            </p>
            <div className="technologies">
              {t.sideProjects.gamedev.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
          </div>

          <div className="project-card">
            <div className="project-icon">
              <i className="fa-solid fa-music"></i>
            </div>
            <h3>{t.sideProjects.music.title}</h3>
            <p className="description">
              {t.sideProjects.music.description}
            </p>
            <div className="technologies">
              {t.sideProjects.music.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
