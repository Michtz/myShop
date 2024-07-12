import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTechnologies } from '../../hook/TechnologieHook';
import { ContainerSection } from '../system/Containers';
import Icon from '../system/Icon';
import { PackageJson } from '../../types/common';

const UsedTechnologies: React.FC = () => {
  const { t } = useTranslation();
  const technologies: PackageJson = useTechnologies();
  const dependencies: JSX.Element = (
    <ul>
      {Object.entries(technologies.dependencies).map(([key, value]) => (
        <li key={`${key}:${value}`}>{`${key}: ${value}`}</li>
      ))}
    </ul>
  );

  return (
    <>
      <ContainerSection width="small" centred>
        <h1>{t('used')}</h1>
        <Icon name="lightMode" centred color="red" size="huge" animate />
      </ContainerSection>
      <ContainerSection width="small" centred>
        {dependencies}
      </ContainerSection>
    </>
  );
};

export default UsedTechnologies;