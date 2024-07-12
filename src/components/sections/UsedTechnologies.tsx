import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTechnologies } from '../../hook/TechnologieHook';
import { ContainerSection } from '../system/Containers';
import Icon from '../system/Icon';
import { PackageJson } from '../../types/common';

const objectToArray = (obj: Record<string, string>): Array<string> => {
  return Object.entries(obj).map(([key, value]) => `${key}: ${value}`);
};

const UsedTechnologies: React.FC = () => {
  const { t } = useTranslation();
  const technologies: PackageJson = useTechnologies();
  const dependencies: Array<string> = objectToArray(technologies.dependencies);

  return (
    <ContainerSection width="small" centred>
      <header>
        <h1>{t('emptyRepo')}</h1>
        <p>Michael Venetz 2024</p>
      </header>
      <Icon name="lightMode" centred color="yellow" size="huge" animate />
      <section>
        <h2>{t('used')}</h2>
        <ul>
          {dependencies.map((dep) => (
            <li key={dep}>{dep}</li>
          ))}
        </ul>
      </section>
    </ContainerSection>
  );
};

export default UsedTechnologies;