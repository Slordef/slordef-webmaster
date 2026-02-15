"use client";

import './workNebulaSilva.css';
import Image from 'next/image';
import { useI18n } from '@/i18n/context';

const WorkNebulaSilva = () => {
  const { t } = useI18n();
  return (
    <div className={'work_nebula_silva'}>
      <div className={'texts'}>
        <h2>{t('works.projects.nebulaSilva.title')}</h2>
        <h3>{t('works.projects.nebulaSilva.subtitle')}</h3>
        <p>{t('works.projects.nebulaSilva.description', {
          break: () => <br />,
          link: (value) => <a href="https://nebulasilva.com">{value}</a>
        })}
        </p>
      </div>
      <div className={'image'}>
        <a href="https://nebulasilva.com">
          <Image src={'/works/nebulasilva.png'} alt={'Nebula Silva'} width={350} height={369} />
        </a>
      </div>
    </div>
  );
};

export default WorkNebulaSilva;
