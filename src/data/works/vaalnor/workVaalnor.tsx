"use client";

import './workVaalnor.css';
import Image from 'next/image';
import { useI18n } from '@/i18n/context';

const WorkVaalnor = () => {
  const { t } = useI18n();
  return (
    <div className={'work_vaalnor'}>
      <div className={'texts'}>
        <h2>{t('works.projects.vaalnor.title')}</h2>
        <h3>{t('works.projects.vaalnor.subtitle')}</h3>
        <p>
          {t('works.projects.vaalnor.description', {
            break: () => <br />,
            link: (value) => <a href="https://vaalnor.com">{value}</a>,
          })}
        </p>
      </div>
      <div className={'image'}>
        <a href="https://vaalnor.com">
          <Image src={'/works/Vaalnor.jpg'} alt={'Vaalnor'} width={350} height={197} />
        </a>
      </div>
    </div>
  );
};

export default WorkVaalnor;
