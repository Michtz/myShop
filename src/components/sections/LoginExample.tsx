import React from 'react';
import { ContainerSection } from '../system/Containers';
import Icon from '../system/Icon';
import { useTranslation } from 'react-i18next';
import LoginRegister from '../system/LoginRegister';

const LoginExample: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <ContainerSection width="small" centred>
        <h1>{t('card-example')}</h1>
        <Icon name="lightMode" centred color="blue" size="huge" animate />
      </ContainerSection>
      <ContainerSection>
        <LoginRegister />
      </ContainerSection>
    </>
  );
};

export default LoginExample;