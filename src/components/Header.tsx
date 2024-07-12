import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import style from '../styles/header.module.scss';
import Icon from './system/Icon';
import Button, { ButtonContainer } from './system/Button';
import { useFeedback } from '../hook/FeedbackHook';
import { ContainerSection } from './system/Containers';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { showFeedback } = useFeedback();
  const location = useLocation();

  const switchLanguage = async (): Promise<void> => {
    const currentLang = i18n.language;
    const newLang = currentLang === 'en' ? 'de' : 'en';

    await i18n.changeLanguage(newLang);
    showFeedback(t('feedback.language-changed'), 'success');
  };

  return (
    <ContainerSection noBackground marginTop={false} radius={false} width={"full"}>
    <header className={style['header-container']}>
      <nav>
        <section className={style['logo-container']}>
          <Icon name={'flare'} color={'green'} size={'normal'} />
        </section>
        <ul className={style.navList}>
          <li>
            <Link
              to="/"
              className={location.pathname === '/' ? style.active : ''}
            >
              {t('usedTechnologies')}
            </Link>
          </li>
          <li>
            <Link
              to="/form"
              className={location.pathname === '/form' ? style.active : ''}
            >
              {t('formExample')}
            </Link>
          </li>
        </ul>
      </nav>
      <ButtonContainer>
        <Button onClick={switchLanguage}>{t('changeLanguage')}</Button>
      </ButtonContainer>
    </header>
    </ContainerSection>
  );
};

export default Header;