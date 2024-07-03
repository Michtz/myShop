import React from 'react';
import Container from './components/containers/MainCotainer';
import Icon from './components/system/Icon';
import Button from './components/system/Button';
import './i18n';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

const App: React.FC = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const technologies: Array<string> = [
    'React',
    'Typescript',
    'SCSS',
    'Prettier',
    'ESLint',
    'Mui Icons',
  ];
const switchLanguage = ():void => {
    i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en');
}

  const children: JSX.Element = (
    <div>
      <Icon name={'lightMode'} color={'yellow'} size={'huge'} animate />
      <h1>{t('emptyRepo')}</h1>
      <p>Michael Venetz 2024</p>
      <p>{t('used')}</p>
      <ul>
        {technologies.map((obj: string, i: number) => (
          <li key={i} children={obj} />
        ))}
      </ul>
      <h2>{t('welcome')}</h2>
      <Button onClick={switchLanguage} children={t('changeLanguage')} />
    </div>
  );

  return <Container children={children} />;
};

export default App;