import './workVaalnor.css';
import Image from 'next/image';

const WorkVaalnor = () => {
  return (
    <div className={'work_vaalnor'}>
      <div className={'texts'}>
        <h2>Vaalnor</h2>
        <h3>Groupe de musique</h3>
        <p>
          En 2009, un groupe de musique a vu le jour : <a href="https://vaalnor.com">Vaalnor</a>.
          <br />
          J&#39;en suis le batteur et compositeur.
          <br />
          <br />
          Nous avons sorti un album en 2014, avec plusieurs concerts à notre actif.
          <br />
          <br />
          Si vous êtes amateur de metal, n&#39;hésitez pas à nous écouter !
        </p>
      </div>
      <div className={'image'}>
        <a href="https://vaalnor.com">
          <Image src={'/works/Vaalnor.jpg'} alt={'Vaalnor'} width={350} height={197} />
        </a>
      </div>
    </div>
  );
};

export default WorkVaalnor;
