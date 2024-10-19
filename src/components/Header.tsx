import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import style from '../styles/header.module.scss';
import Icon from './system/Icon';
import Button, { ButtonContainer } from './system/Button';
import { useFeedback } from '../hook/FeedbackHook';
import { SideDataProps, sides } from '../data/data';
import Container from './system/Containers';
import Link from './system/Link';

/*Todo: Add login button to header*/

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { showFeedback } = useFeedback();
  const [navOpen, setNavOpen] = useState(false);

  const switchLanguage = async (): Promise<void> => {
    try {
      await i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en');
      showFeedback(t('feedback.language-changed'), 'success');
    } catch (e) {
      showFeedback(t('feedback.language-change-error'), 'error');
    }
  };

  const createNavOption = (path: string, labelKey: string): JSX.Element => (
    <ButtonContainer>
      <Button href={path} children={t(labelKey)} />
    </ButtonContainer>
  );

  const NavigationOpen = (): JSX.Element => (
    <nav>
      <section className={style['logo-container']}>
        <Icon name={'flare'} color={'green'} size={'normal'} />
      </section>
      <ul className={style['nav-container']}>
        <li>
          <Icon onClick={switchLanguage} name={'translate'} />
        </li>
        {sides?.map((option: SideDataProps) => (
          <li key={option.label}>{createNavOption(option.path, option.label)}</li>
        ))}
      </ul>
    </nav>
  );

  const NavigationClosed = (): JSX.Element => (
    <nav className={style['nav-icon-container']}>
      <Icon name={'menu'} onClick={() => setNavOpen(true)} />
    </nav>
  );

  const ProfileContainer = (): JSX.Element => (
    <section className={style['profile-container']}>
      <Link href={'/home'}>
        <Icon name={'profile'} />
      </Link>
    </section>
  );

  const CartContainer = (): JSX.Element => (
    <section className={style['profile-container']}>
      <Link href={'/home'}>
        <Icon name={'cart'} />
      </Link>
    </section>
  );

  const LogoContainer = (): JSX.Element => (
    <section className={style['profile-container']}>
      <Link href={'/home'}>
        <Icon name={'logo'} />
      </Link>
    </section>
  );

  const categories = ['Accessoires', 'Tools', 'Other'];

  const CategoryContainer = (): JSX.Element => (
    <section className={style['categories-container']}>
      {categories.map((category) => (
        <a key={category} href={category}>
          {category}
        </a>
      ))}
    </section>
  );

  return (
    <Container>
      <header className={style['header-container']}>
        <LogoContainer />
        <CategoryContainer />
        <div className={style.iconsContainer}>
          <CartContainer />
          <ProfileContainer />
          {navOpen ? <NavigationOpen /> : <NavigationClosed />}
        </div>
      </header>
    </Container>
  );
};

export default Header;
