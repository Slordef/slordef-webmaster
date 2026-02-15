"use client";

import './workAurioaTech.css';
import Image from 'next/image';
import { useI18n } from '@/i18n/context';

const WorkAurioaTech = () => {
  const { t } = useI18n();
  return (
    <div className={'work_aurioa_tech'}>
      <div className={'texts'}>
        <h2>{t('works.projects.aurioaTech.title')}</h2>
        <h3>{t('works.projects.aurioaTech.subtitle')}</h3>
        <p>{t('works.projects.aurioaTech.description', {
          break: () => <br />,
          link: (value) => <a href="https://aurioa-tech.com">{value}</a>
        })}
        </p>
      </div>
      <div className={'image'}>
        <a href="https://aurioa-tech.com">
          <Image src={'/works/aurioa-tech.png'} alt={'Aurioa-Tech'} width={350} height={369} />
        </a>
      </div>
    </div>
  );
};

export default WorkAurioaTech;
