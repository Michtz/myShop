import { ContainerSection } from '../system/Containers';
import Icon from '../system/Icon';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonContainer } from '../system/Button';

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <ContainerSection width="small" centred>
        <h1>{t('emptyRepo')}</h1>
        <p>Michael Venetz 2024</p>
        <ButtonContainer>
          <Button href={'https://github.com/Michtz/react_ts_es_pr_sc'} children={t("git-repo")} />
        </ButtonContainer>
      <Icon name="lightMode" centred color="yellow" size="huge" animate />
    </ContainerSection>
  );
};
export default Home;