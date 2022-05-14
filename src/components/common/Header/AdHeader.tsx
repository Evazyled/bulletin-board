import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import UserStatus from './UserStatus/UserStatus';
import style from './Header.module.scss';
import UserMenu from './UserMenu/UserMenu';

const AdHeader = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <header className={style.header}>
      <div className={`${style.content}  ${style.container}`}>
        <Logo />
        <UserStatus />
        <UserMenu />
      </div>
    </header>
  );
};

export default AdHeader;
