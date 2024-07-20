import React from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonContainer } from './system/Button';
import { ContainerSection } from './system/Containers';

/*Todo: style a bit more*/

const Error: React.FC = () => {
  const { t } = useTranslation();
  return (
    <ContainerSection>
      <h1>{t('error-text')}</h1>
      <ButtonContainer>
        <Button href={'/'} children={t('back-home')} />
      </ButtonContainer>
    </ContainerSection>
  );
};

export default Error;