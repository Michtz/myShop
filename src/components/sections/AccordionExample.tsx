import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTechnologies } from '../../hook/TechnologieHook';
import { ContainerSection } from '../system/Containers';
import Icon from '../system/Icon';
import Accordion from '../system/Accordion';
import { PackageJson } from '../../types/common';

const TechnologiesAccordion: React.FC = () => {
  const { t } = useTranslation();
  const technologies: PackageJson = useTechnologies();

  const createList = (obj: Record<string, string>): JSX.Element => (
    <ul>
      {Object.entries(obj).map(([key, value]) => (
        <li key={key}>{`${key}: ${value}`}</li>
      ))}
    </ul>
  );
  const accordionPanels = [
    {
      title: t('dependencies'),
      content: createList(technologies.dependencies),
    },
    {
      title: t('devDependencies'),
      content: createList(technologies.devDependencies),
    },
    {
      title: t('scripts'),
      content: createList(technologies.scripts),
    },
  ];

  return (
    <>
      <ContainerSection width="small" centred>
        <h1>{t('accordion-example')}</h1>
        <Icon name="lightMode" centred color="blue" size="huge" animate />
      </ContainerSection>
      <ContainerSection noGap width="small" centred>
        <Accordion panels={accordionPanels} allowMultiple />
      </ContainerSection>
    </>
  );
};

export default TechnologiesAccordion;