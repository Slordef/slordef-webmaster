import "./Home.css";
import Scroll from "@/components/home/Scroll";

export function Home() {
  return (
    <section id={"home"}>
      <h1>Slordef</h1>
      <h2>Développement logiciel</h2>
      <h3>Développement web</h3>
      <h3>Fullstack</h3>
      <h3>Game Developer</h3>
      <h3>Freelance</h3>
      <div className="socials">
        <a
          href="https://discord.gg/xx5kuQj5Qh"
          target="_blank"
          rel="noreferrer"
        >
          <i className={"fa-brands fa-discord"} />
        </a>
        <a
          href="https://www.linkedin.com/in/maximilien-v-576625172/"
          target="_blank"
          rel="noreferrer"
        >
          <i className={"fa-brands fa-linkedin"} />
        </a>
        <a
          href="https://www.facebook.com/SlordefWebmaster/"
          target="_blank"
          rel="noreferrer"
        >
          <i className={"fa-brands fa-facebook"} />
        </a>
        <a href="https://github.com/Slordef" target="_blank" rel="noreferrer">
          <i className={"fa-brands fa-github"} />
        </a>
      </div>
      <Scroll />
    </section>
  );
}
