import React from 'react';

import Logo from '../Logo/Logo';
import PlaceAdButton from '../PlaceAdButton/PlaceAdButton';
import Search from '../Search/Search';
import UserStatus from '../UserStatus/UserStatus';

import style from './Header.module.scss';

const Header = () => (
  <header className={style.header}>
    <div className={`${style.content}  ${style.container}`}>
      <Logo />
      <Search />
      <PlaceAdButton title="Подать объявление" />
      <UserStatus />
    </div>
  </header>
);

export default Header;
