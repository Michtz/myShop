import React from 'react';
// Import the SCSS module for styling. Adjust the path as necessary.
import style from '../styles/header.module.scss';
import Icon from './system/Icon';
import Button, { ButtonContainer } from './system/Button';
import { useTranslation } from 'react-i18next';
import { useFeedback } from '../hook/FeedbackHook';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const { showFeedback } = useFeedback();

  const switchLanguage = async (): Promise<void> => {
    const currentLang = i18n.language;
    const newLang = currentLang === 'en' ? 'de' : 'en';
    try {
      await i18n.changeLanguage(newLang);
      showFeedback(t('feedback.language-changed'), 'success');
    } catch (error) {
      showFeedback(t('feedback.language-change-error'), 'error');
    }
  };



  return (
    <header className={style['header-container']}>
      <nav>
        <section className={style['logo-container']}>
          <Icon name={'flare'} color={'green'} size={'normal'} />
        </section>
        <ul className={style.navList}></ul>
      </nav>
      <ButtonContainer>
        <Button onClick={switchLanguage} children={t('changeLanguage')} />
      </ButtonContainer>
    </header>
  );
};

export default Header;