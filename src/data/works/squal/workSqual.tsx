import './workSqual.css';
import Image from 'next/image';

const WorkSqual = () => {
  return (
    <div className={'work_squal'}>
      <div className={'texts'}>
        <h2>Squal</h2>
        <h3>Site vitrine pour une illustratrice</h3>
        <p>
          Afin de mettre en avant les illustrations de <a href="https://squal.ch">Squal</a>, j&#39;ai réalisé un site
          vitrine simple et épuré. Le site est responsive et s&#39;adapte à tous les écrans. Il est également optimisé
          pour le référencement naturel.
          <br />
          <br />
          Il met en avant les illustrations de l&#39;artiste et permet de la contacter facilement.
        </p>
      </div>
      <div className={'image'}>
        <a href="https://squal.ch">
          <Image src={'/works/squal.ch.png'} alt={'Squal.ch'} width={350} height={197} />
        </a>
      </div>
    </div>
  );
};

export default WorkSqual;
