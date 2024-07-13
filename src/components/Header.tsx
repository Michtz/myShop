import React from 'react';
import { useTranslation } from 'react-i18next';
import style from '../styles/header.module.scss';
import Icon from './system/Icon';
import Button, { ButtonContainer } from './system/Button';
import { useFeedback } from '../hook/FeedbackHook';
import { ContainerSection } from './system/Containers';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { showFeedback } = useFeedback();

  const switchLanguage = async (): Promise<void> => {
    const currentLang: string = i18n.language;
    const newLang: string = currentLang === 'en' ? 'de' : 'en';
    await i18n.changeLanguage(newLang);
    showFeedback(t('feedback.language-changed'), 'success');
  };

  const navOptions: Array<JSX.Element> = [];

  const Home: JSX.Element = (
    <ButtonContainer>
      <Button href={'/'} children={t('home')} />
    </ButtonContainer>
  );

  const UsedTechnologies: JSX.Element = (
    <ButtonContainer>
      <Button href={'/usedTechnologies'} children={t('usedTechnologies')} />
    </ButtonContainer>
  );

  const FormExample: JSX.Element = (
    <ButtonContainer>
      <Button href={'/form'} children={t('formExample')} />
    </ButtonContainer>
  );

  const Accordion: JSX.Element = (
    <ButtonContainer>
      <Button href={'/accordion'} children={t('accordion-example')} />
    </ButtonContainer>
  );

  const DndExample: JSX.Element = (
    <ButtonContainer>
      <Button href={'/dndList'} children={t('dnd-example')} />
    </ButtonContainer>
  );

  navOptions.push(Home);
  navOptions.push(UsedTechnologies);
  navOptions.push(FormExample);
  navOptions.push(Accordion);
  navOptions.push(DndExample);

  return (
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
  );
};

export default Header;