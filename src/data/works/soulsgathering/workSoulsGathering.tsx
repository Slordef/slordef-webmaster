"use client";

import './workSoulsGathering.css';
import Image from 'next/image';
import { useI18n } from '@/i18n/context';

const WorkSoulsGathering = () => {
  const { t } = useI18n();
  return (
    <div className={'work_souls_gathering'}>
      <div className={'texts'}>
        <h2>{t('works.projects.vaalnor.title')}</h2>
        <h3>{t('works.projects.vaalnor.subtitle')}</h3>
        <p>{t('works.projects.vaalnor.description', {
          break: () => <br />,
          link: (value) => <a href="https://soulsgathering.com">{value}</a>
        })}
        </p>
      </div>
      <div className={'image'}>
        <a href="https://soulsgathering.com">
          <Image src={'/works/SoulsGathering.jpg'} alt={'Souls Gathering'} width={350} height={197} />
        </a>
      </div>
    </div>
  );
};

export default WorkSoulsGathering;
