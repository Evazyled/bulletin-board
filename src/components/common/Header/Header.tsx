import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import PlaceAdButton from '../PlaceAdButton/PlaceAdButton';
import Search from './Search/Search';
import UserStatus from './UserStatus/UserStatus';
import style from './Header.module.scss';
import UserMenu from './UserMenu/UserMenu';

const Header = () => (
  <header className={style.header}>
    <div className={`${style.content}  ${style.container}`}>
      <div className={style.logoAndSearch}>
        <Logo />
        <Search />
      </div>
      <PlaceAdButton title="Подать объявление" />
      <UserStatus />
    </div>
  </header>
);

export default Header;
