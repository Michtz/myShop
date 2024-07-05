import React from 'react';
import Container from './components/system/containers/Container';
import Icon from './components/system/Icon';
import Button from './components/system/Button';
import './i18n';
import { useTranslation } from 'react-i18next';
import { useTechnologies } from './hook/TechnologieHook';
import { Technologies } from './types/common';

const App: React.FC = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const technologies: Technologies = useTechnologies();

  const switchLanguage = (): void => {
    i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en');
  };

  return (
    <Container>
      <Icon name={'lightMode'} color={'yellow'} size={'huge'} animate />
      <h1>{t('emptyRepo')}</h1>
      <p>Michael Venetz 2024</p>
      <p>{t('used')}</p>
      <ul>
        {technologies.map((obj: string, i: number) => (
          <li key={i} children={obj} />
        ))}
      </ul>
      <Button onClick={switchLanguage} children={t('changeLanguage')} />
    </Container>
  );
};

export default App;