"use client";

import './workSadnessOfValor.css';
import Image from 'next/image';
import { useI18n } from '@/i18n/context';

const WorkSadnessOfValor = () => {
  const { t } = useI18n();
  return (
    <div className={'work_sadness_of_valor'}>
      <div className={'texts'}>
        <h2>{t('works.projects.sadnessOfValor.title')}</h2>
        <h3>{t('works.projects.sadnessOfValor.subtitle')}</h3>
        <p>
          {t('works.projects.sadnessOfValor.description', {
            break: () => <br />,
            link: (value) => <a href="https://sadnessofvalor.com">{value}</a>
          })}
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
