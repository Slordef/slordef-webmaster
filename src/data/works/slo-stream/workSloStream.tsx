"use client";

import './workSloStream.css';
import Image from 'next/image';
import { useI18n } from '@/i18n/context';

const WorkSloStream = () => {
  const { t } = useI18n();
  return (
    <div className={'work_slo_stream'}>
      <div className={'texts'}>
        <h2>{t('works.projects.vaalnor.title')}</h2>
        <h3>{t('works.projects.vaalnor.title')}</h3>
        <p>{t('works.projects.vaalnor.title', {
          break: () => <br />,
          link: (value) => <a href={'https://slo-stream.com'}>{value}</a>
        })}
        </p>
      </div>
      <div className={'image'}>
        <a href="https://slo-stream.com">
          <Image src={'/works/slo-stream.png'} alt={'Slo-Stream'} width={350} height={197} />
        </a>
      </div>
    </div>
  );
};

export default WorkSloStream;
