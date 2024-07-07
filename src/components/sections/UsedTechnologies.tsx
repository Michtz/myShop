import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTechnologies } from '../../hook/TechnologieHook';
import { ContainerSection } from '../system/containers/Container';
import Icon from '../system/Icon';

const UsedTechnologies: React.FC = () => {
  const { t } = useTranslation();
  const technologies: any = useTechnologies();
  return (
    <ContainerSection width={'small'} centred>
      <div>
        <h1>{t('emptyRepo')}</h1>
        <p>Michael Venetz 2024</p>
      </div>
      <Icon name={'lightMode'} centred color={'yellow'} size={'huge'} animate />
      <div style={{ width: '100%' }}>
        <p>{t('used')}</p>
        <ul>
          {technologies.map((obj: string, i: number) => (
            <li key={i} children={obj} />
          ))}
        </ul>
      </div>
    </ContainerSection>
  );
};

export default UsedTechnologies;