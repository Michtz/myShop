import React from 'react';
import Container from '../system/containers/Container';
import './i18n';
import { useTranslation } from 'react-i18next';
import { useTechnologies } from '../../hook/TechnologieHook';

const UsedTechnologies: React.FC = () => {
  const { t } = useTranslation();
  const technologies:any=useTechnologies()


  const children: JSX.Element = (
    <>
      <h1>{t('emptyRepo')}</h1>
      <p>Michael Venetz 2024</p>
      <p>{t('used')}</p>
      <ul>
        {technologies.map((obj: string, i: number) => (
          <li key={i} children={obj} />
        ))}
      </ul>
    </>
  );

  return <Container children={children} />;
};

export default UsedTechnologies;