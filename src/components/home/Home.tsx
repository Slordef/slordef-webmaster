import './Home.css';
import { useEffect, useState } from 'react';

export function Home() {
  const [fade, setFade] = useState<number>(0);

  const handleScroll = () => {
    const scroll = window.scrollY;
    const height = window.innerHeight;
    const opacity = Math.min(scroll / height, 1);
    setFade(opacity);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id={'home'}>
      <h1>Slordef</h1>
      <h2>Développement logiciel</h2>
      <h3>Développement web</h3>
      <h3>Fullstack</h3>
      <h3>Game Developer</h3>
      <h3>Freelance</h3>
      <div className="socials">
        <a href="https://discord.gg/xx5kuQj5Qh" target="_blank" rel="noreferrer">
          <i className={'fa-brands fa-discord'} />
        </a>
        <a href="https://www.linkedin.com/in/maximilien-v-576625172/" target="_blank" rel="noreferrer">
          <i className={'fa-brands fa-linkedin'} />
        </a>
        <a href="https://www.facebook.com/SlordefWebmaster/" target="_blank" rel="noreferrer">
          <i className={'fa-brands fa-facebook'} />
        </a>
        <a href="https://github.com/Slordef" target="_blank" rel="noreferrer">
          <i className={'fa-brands fa-github'} />
        </a>
      </div>
      <div className="arrow" style={{ opacity: 1 - fade }}>
        <i className={'fa-solid fa-arrow-down'} />
      </div>
    </section>
  );
}
