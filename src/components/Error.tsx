import React from 'react';
import { useTranslation } from 'react-i18next';
import style from '../styles/header.module.scss';
import Button, { ButtonContainer } from './system/Button';
import { useFeedback } from '../hook/FeedbackHook';
import { ContainerSection } from './system/Containers';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();


  return (
    <ContainerSection>

      <ButtonContainer>
        <Button href={"/"}>{t('back-home')}</Button>
      </ButtonContainer>
    </ContainerSection>
  );
};

export default Header;