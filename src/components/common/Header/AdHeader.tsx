import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import UserStatus from './UserStatus/UserStatus';
import style from './Header.module.scss';

const AdHeader = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <header className={style.header}>
      <div className={`${style.content}  ${style.container}`}>
        <Logo />
        <UserStatus />
      </div>
    </header>
  );
};

export default AdHeader;
