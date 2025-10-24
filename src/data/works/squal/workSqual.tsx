import './workSqual.css';
import Image from 'next/image';
import { useI18n } from '@/i18n/context';

const WorkSqual = () => {
  const { t } = useI18n();
  return (
    <div className={'work_squal'}>
      <div className={'texts'}>
        <h2>{t('works.projects.squal.title')}</h2>
        <h3>{t('works.projects.squal.subtitle')}</h3>
        <p>{t('works.projects.squal.description', {
          link: (value) => <a href="https://squal.ch">{value}</a>,
          break: () => <br />
        })}
        </p>
      </div>
      <div className={'image'}>
        <a href="https://squal.ch">
          <Image src={'/works/squal.ch.png'} alt={'Squal.ch'} width={350} height={197} />
        </a>
      </div>
    </div>
  );
};

export default WorkSqual;
