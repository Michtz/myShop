import React from 'react';
// Import the SCSS module for styling. Adjust the path as necessary.
import style from '../styles/header.module.scss';
import Icon from './system/Icon';

const Header: React.FC = () => {
  return (
    <header className={style['header-container']}>
      <nav>
        <section className={style['logo-container']}>
          <Icon name={'flare'} color={'green'} size={'normal'} />
        </section>
        <ul className={style.navList}>

        </ul>
      </nav>
    </header>
  );
};

export default Header;