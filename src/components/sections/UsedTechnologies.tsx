import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTechnologies } from '../../hook/TechnologieHook';
import style from '../../styles/sections/usedTechnologies.module.scss';

const UsedTechnologies: React.FC = () => {
  const { t } = useTranslation();
  const technologies:any=useTechnologies()
return (
  <article className={style['technologies-container']}>
    <section>
      <h1>{t('emptyRepo')}</h1>
      <p>Michael Venetz 2024</p>
    </section>
    <section>
      <p>{t('used')}</p>
      <ul>
        {technologies.map((obj: string, i: number) => (
          <li key={i} children={obj} />
        ))}
      </ul>
    </section>
  </article>
);
};

export default UsedTechnologies;