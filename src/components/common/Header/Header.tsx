import React from 'react';

import Logo from '../Logo/Logo';
import PlaceAdButton from '../PlaceAdButton/PlaceAdButton';
import Search from '../Search/Search';
import UserStatus from '../UserStatus/UserStatus';

import style from './Header.module.scss';

const Header = () => (
  <header className={style.header}>
    <div className={`${style.content}  ${style.container}`}>
      <div className={style.logoAndSearch}>
        <Logo />
        <Search />
      </div>
      <div className={style.adButtonAndUserStatus}>
        <PlaceAdButton title="Подать объявление" />
        <UserStatus />
      </div>
    </div>
  </header>
);

export default Header;
