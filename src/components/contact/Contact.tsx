import './Contact.css';

const Contact = () => {
  return (
    <section id={'contact'}>
      <h1>Contact</h1>
      <p>
        Mail : <a href="mailto:contact@slordef-webmaster.ch">contact@slordef-webmaster.ch</a>
      </p>
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
    </section>
  );
};

export default Contact;
