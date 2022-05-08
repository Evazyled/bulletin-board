import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import PlaceAdButton from '../PlaceAdButton/PlaceAdButton';
import Search from './Search/Search';
import UserStatus from './UserStatus/UserStatus';
import style from './Header.module.scss';
import UserMenu from './UserMenu/UserMenu';

const Header = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <header className={style.header}>
      <div className={`${style.content}  ${style.container}`}>
        <div className={style.logoAndSearch}>
          <Logo />
          <Search />
        </div>
        <div className={style.adButtonAndUserStatus}>
          <PlaceAdButton title="Подать объявление" />
          <UserStatus
            onMouseEnter={() => setModalActive(true)}
            onClick={() => setModalActive((prev) => !prev)}
          />
          <UserMenu active={modalActive} setActive={setModalActive} />
        </div>
      </div>
    </header>
  );
};

export default Header;
