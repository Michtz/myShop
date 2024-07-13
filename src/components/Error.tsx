import React from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonContainer } from './system/Button';
import { ContainerSection } from './system/Containers';

const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <ContainerSection>
      <ButtonContainer>
        <Button href={"/"} children={t('back-home')}/>
      </ButtonContainer>
    </ContainerSection>
  );
};

export default Header;