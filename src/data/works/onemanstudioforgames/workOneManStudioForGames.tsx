"use client";

import './workOneManStudioForGames.css';
import Image from 'next/image';
import { useI18n } from '@/i18n/context';

const WorkOneManStudioForGames = () => {
  const { t } = useI18n();
  return (
    <div className={'work_one_man_studio_for_games'}>
      <div className={'texts'}>
        <h2>{t('works.projects.oneManStudioForGames.title')}</h2>
        <h3>{t('works.projects.oneManStudioForGames.subtitle')}</h3>
        <p>{t('works.projects.oneManStudioForGames.description',{
          break: () => <br />,
          link: (value) => <a href="https://onemanstudioforgames.com">{value}</a>
        })}
        </p>
      </div>
      <div className={'image'}>
        <a href="https://onemanstudioforgames.com">
          <Image src={'/works/OneManStudio.png'} alt={'One Man Studio For Games'} width={350} height={197} />
        </a>
      </div>
    </div>
  );
};

export default WorkOneManStudioForGames;
