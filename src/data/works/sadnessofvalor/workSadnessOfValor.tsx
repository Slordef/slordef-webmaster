import './workSadnessOfValor.css';
import Image from 'next/image';

const WorkSadnessOfValor = () => {
  return (
    <div className={'work_sadness_of_valor'}>
      <div className={'texts'}>
        <h2>Sadness of Valor</h2>
        <h3>Jeu vidéo disponible sur Steam</h3>
        <p>
          Sadness of Valor est un jeu vidéo de type RTS (Real Time Strategy) développé par mes soins. Il est disponible
          sur Steam depuis le 30 décembre 2022.
          <br />
          Il est pour moi l&#39;aboutissement de deux années de travail, de passion et est le premier jeu vidéo que je
          développe. Je suis plutôt fier du chemin parcouru.
          <br />
          <br />
          Je vous invite à en savoir plus sur <a href="https://sadnessofvalor.com">Sadness of Valor</a> via son site
          officiel ou sur Steam directement.
        </p>
      </div>
      <div className={'image'}>
        <a href="https://sadnessofvalor.com">
          <Image src={'/works/sadnessofvalor.png'} alt={'Sadness of Valor'} width={350} height={197} />
        </a>
      </div>
    </div>
  );
};

export default WorkSadnessOfValor;
