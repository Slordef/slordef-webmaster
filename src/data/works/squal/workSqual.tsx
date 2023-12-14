import './workSqual.css';

const WorkSqual = () => {
  return (
    <div className={'work_squal'}>
      <div className={'texts'}>
        <h2>Squal</h2>
        <h3>Site vitrine pour une illustratrice</h3>
        <p>
          Afin de mettre en avant les illustrations de <a href="https://squal.ch">Squal</a>, j'ai réalisé un site
          vitrine simple et épuré. Le site est responsive et s'adapte à tous les écrans. Il est également optimisé pour
          le référencement naturel.
          <br />
          <br />
          Il met en avant les illustrations de l'artiste et permet de la contacter facilement.
        </p>
      </div>
      <div className={'image'}>
        <a href="https://squal.ch">
          <img src={'/works/squal.ch.png'} alt={'Squal.ch'} />
        </a>
      </div>
    </div>
  );
};

export default WorkSqual;
