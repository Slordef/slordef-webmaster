"use client";

import './workResilio.css';
import Image from 'next/image';
import { useI18n } from '@/i18n/context';

const WorkResilioTech = () => {
  const { t } = useI18n();
  return (
    <div className={'work_resilio'}>
      <div className={'texts'}>
        <h2>{t('works.projects.resilioTech.title')}</h2>
        <h3></h3>
        <p>
          {t('works.projects.resilioTech.description', {
            link: (value) => <a href="https://resilio-solutions.com">{value}</a>,
            break: () => <><br /><br /></>
          })}
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
