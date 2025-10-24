import './workResilio.css';
import Image from 'next/image';

const WorkResilioTech = () => {
  return (
    <div className={'work_resilio'}>
      <div className={'texts'}>
        <h2>Resilio Tech et Resilio DB</h2>
        <h3></h3>
        <p>
          Je suis actuellement le CTO de <a href="https://resilio-solutions.com">Resilio SA</a>, une société
          d&#39;évaluation d&#39;impact environnemental. Nous développons des outils d&#39;évaluation d&#39;impact
          environnemental pour les entreprises et les particuliers. Nous avons développé une application web qui permet
          aux entreprises de calculer leur empreinte et de la réduire.
          <br />
          <br />
          Nous avons également développé une application de recherche d&#39;impact sur les équipements ou de génération
          de rapports d&#39;impact environnemental sur des configuration d&#39;équipement.
        </p>
      </div>
      <div className={'image'}>
        <a href="https://app.resilio.tech">
          <Image src={'/works/resilio-tech.png'} alt={'Resilio Tech'} width={350} height={197} />
        </a>
        <a href="https://db.resilio.tech">
          <Image src={'/works/resilio-db.png'} alt={'Resilio DB'} width={350} height={197} />
        </a>
      </div>
    </div>
  );
};

export default WorkResilioTech;
