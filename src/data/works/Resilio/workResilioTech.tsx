import './workResilio.css';

const WorkResilioTech = () => {
  return (
    <div className={'work_resilio'}>
      <div className={'texts'}>
        <h2>Resilio Tech et Resilio DB</h2>
        <h3></h3>
        <p>
          Je suis actuellement le CTO de <a href="https://resilio-solutions.com">Resilio SA</a>, une société
          d'évaluation d'impact environnemental. Nous développons des outils d'évaluation d'impact environnemental pour
          les entreprises et les particuliers. Nous avons développé une application web qui permet aux entreprises de
          calculer leur empreinte carbone et de la réduire.
          <br />
          <br />
          Nous avons également développé une application de recherche d'impact sur les équipements ou de génération de
          rapports d'impact environnemental sur des configuration d'équipement.
        </p>
      </div>
      <div className={'image'}>
        <a href="https://app.resilio.tech">
          <img src={'/works/resilio-tech.png'} alt={'Resilio Tech'} />
        </a>
        <a href="https://db.resilio.tech">
          <img src={'/works/resilio-db.png'} alt={'Resilio DB'} />
        </a>
      </div>
    </div>
  );
};

export default WorkResilioTech;
