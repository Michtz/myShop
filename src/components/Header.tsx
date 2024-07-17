import React from 'react';
import { useTranslation } from 'react-i18next';
import style from '../styles/header.module.scss';
import Icon from './system/Icon';
import Button, { ButtonContainer } from './system/Button';
import { useFeedback } from '../hook/FeedbackHook';
import { ContainerSection } from './system/Containers';
import LoginRegister from './system/LoginRegister';
import { NavOption } from '../types/common';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { showFeedback } = useFeedback();

  const switchLanguage = async (): Promise<void> => {
    const currentLang: string = i18n.language;
    const newLang: string = currentLang === 'en' ? 'de' : 'en';
    await i18n.changeLanguage(newLang);
    showFeedback(t('feedback.language-changed'), 'success');
  };

  const createNavOption = (path: string, labelKey: string): JSX.Element => (
    <ButtonContainer>
      <Button href={path} children={t(labelKey)} />
    </ButtonContainer>
  );

  const navOptionsData: NavOption[] = [
    { path: '/', label: 'home' },
    { path: '/usedTechnologies', label: 'usedTechnologies' },
    { path: '/form', label: 'formExample' },
    { path: '/accordion', label: 'accordion-example' },
    { path: '/dndList', label: 'dnd-example' },
    { path: '/card', label: 'card-example' },
    { path: '/login', label: 'login' },
  ];

  const navOptions: JSX.Element[] = navOptionsData.map((option) =>
    createNavOption(option.path, option.label),
  );
  return (
    <>
      <ContainerSection noBackground marginTop={false} radius={false} width={'full'}>
        <header className={style['header-container']}>
          <nav>
            <section className={style['logo-container']}>
              <Icon name={'flare'} color={'green'} size={'normal'} />
            </section>
            <ul className={style['nav-container']}>
              {navOptions.map((option: JSX.Element, index: number) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          </nav>
          <ButtonContainer>
            <Button onClick={switchLanguage} children={t('changeLanguage')} />
          </ButtonContainer>
        </header>
      </ContainerSection>
      {/*ToDo: Something is wrong here with the modal*/}
      <ContainerSection noBackground marginTop={false} radius={false} width={'full'}>
        <LoginRegister />
      </ContainerSection>
    </>
  );
};

export default Header;