import './workSoulsGathering.css';
import Image from 'next/image';

const WorkSoulsGathering = () => {
  return (
    <div className={'work_souls_gathering'}>
      <div className={'texts'}>
        <h2>Souls Gathering</h2>
        <h3>Projet solo de musique</h3>
        <p>
          Passionné de musique de génération en génération, j&#39;ai eu la chance de pouvoir apprendre le piano, la
          guitare et la batterie.
          <br />
          Il est donc tout naturel que je me sois lancé dans la composition de musique. Je compose principalement des
          musiques de jeux vidéos pour mes jeux, des musiques de films, et des musiques Metal.
          <br />
          <br />
          J&#39;ai donc créé mon propre projet de musique solo, <a href="https://soulsgathering.com">Souls Gathering</a>
          , pour y partager mes créations et mes inspirations coté Metal.
        </p>
      </div>
      <div className={'image'}>
        <a href="https://soulsgathering.com">
          <Image src={'/works/SoulsGathering.jpg'} alt={'Souls Gathering'} />
        </a>
      </div>
    </div>
  );
};

export default WorkSoulsGathering;
