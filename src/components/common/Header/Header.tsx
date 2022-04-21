import React from 'react';
import Logo from '../Logo/Logo';
import PlaceAdButton from '../PlaceAdButton/PlaceAdButton';
import Search from '../Search/Search';

import style from './Header.module.scss';

const Header = () => (
  <header className={style.wrapper}>
    <Logo image="../../assets/image/Exclude.svg" />
    <Search />
    <PlaceAdButton title="Подать объявление" />
  </header>
);

export default Header;
