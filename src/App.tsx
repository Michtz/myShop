import React from 'react';
import Container from './components/system/containers/Container';
import Icon from './components/system/Icon';
import Button, { ButtonContainer } from './components/system/Button';
import './i18n';
import { useTranslation } from 'react-i18next';
import { useTechnologies } from './hook/TechnologieHook';
import { Technologies } from './types/common';
import UsedTechnologies from './components/sections/UsedTechnologies';
import Header from './components/Header';
import FormExample from './components/sections/FormExample';

const App: React.FC = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const technologies: Technologies = useTechnologies();

  const switchLanguage = (): void => {
    i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en');
  };

  return (
    <Container>
      <Header />
      <Icon name={'lightMode'} color={'yellow'} size={'huge'} animate />
      <UsedTechnologies />
      <FormExample />
      <ButtonContainer>
        <Button onClick={switchLanguage} children={t('changeLanguage')} />
      </ButtonContainer>

    </Container>
  );
};

export default App;