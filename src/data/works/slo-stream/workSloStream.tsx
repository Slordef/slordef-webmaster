import './workSloStream.css';

const WorkSloStream = () => {
  return (
    <div className={'work_slo_stream'}>
      <div className={'texts'}>
        <h2>Slo-Stream</h2>
        <h3>Expérimentation de plateforme de streaming</h3>
        <p>
          Slo-Stream est un projet personnel qui a pour but de tester les technologies de streaming de jeux vidéo. Il
          est entièrement développé en TypeScript avec le framework et présente une interface utilisateur en Vue.js.
          <br />
          <br />
          Il n'est pas à but lucratif et est uniquement utilisé pour des tests personnels et de l'expérimentation.
          Malgré tout si le projet vous intéresse vous pouvez le retrouver sur{' '}
          <a href={'https://slo-stream.com'}>slo-stream.com</a>.
        </p>
      </div>
      <div className={'image'}>
        <a href="https://slo-stream.com">
          <img src={'/works/slo-stream.png'} alt={'Slo-Stream'} />
        </a>
      </div>
    </div>
  );
};

export default WorkSloStream;
