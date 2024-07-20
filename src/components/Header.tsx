import React from 'react';
import { useTranslation } from 'react-i18next';
import style from '../styles/header.module.scss';
import Icon from './system/Icon';
import Button, { ButtonContainer } from './system/Button';
import { useFeedback } from '../hook/FeedbackHook';
import { SideDataProps, sides } from '../data/data';
import Container from './system/Containers';

/*Todo: Add login button to header*/

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { showFeedback } = useFeedback();

  const switchLanguage = async (): Promise<void> => {
  try {
    await i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en');
    showFeedback(t('feedback.language-changed'), 'success');
  }catch (e) {
    showFeedback(t('feedback.language-change-error'), 'error');
  }
  };

  const createNavOption = (path: string, labelKey: string): JSX.Element => (
    <ButtonContainer>
      <Button href={path} children={t(labelKey)} />
    </ButtonContainer>
  );

  return (
    <Container>
        <header className={style['header-container']}>
          <nav>
            <section className={style['logo-container']}>
              <Icon name={'flare'} color={'green'} size={'normal'} />
            </section>
            <ul className={style['nav-container']}>
              {sides?.map((option: SideDataProps) => (
                <li key={option.label}>{createNavOption(option.path, option.label)}</li>
              ))}
            </ul>
          </nav>
          <ButtonContainer>
            <Button onClick={switchLanguage} children={t('changeLanguage')} />
          </ButtonContainer>
        </header>
    </Container>
  );
};

export default Header;