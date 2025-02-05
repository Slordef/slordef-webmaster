import './workOneManStudioForGames.css';
import Image from 'next/image';

const WorkOneManStudioForGames = () => {
  return (
    <div className={'work_one_man_studio_for_games'}>
      <div className={'texts'}>
        <h2>One Man Studio For Games</h2>
        <h3>Studio de jeu vidéo indépendant</h3>
        <p>
          Depuis mon enfance, je suis passionné par les jeux vidéo. J&#39;ai toujours voulu créer les miens. C&#39;est
          pourquoi je me suis lancé dans la création de mon propre studio de jeu vidéo indépendant pour y développer mes
          propres envies.
          <br />
          <br />
          <a href="https://onemanstudioforgames.com">One Man Studio For Games</a> en est le résultat.
        </p>
      </div>
      <div className={'image'}>
        <a href="https://onemanstudioforgames.com">
          <Image src={'/works/OneManStudio.png'} alt={'One Man Studio For Games'} />
        </a>
      </div>
    </div>
  );
};

export default WorkOneManStudioForGames;
