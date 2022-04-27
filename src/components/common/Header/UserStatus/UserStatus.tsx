import React from 'react';
import { NavLink } from 'react-router-dom';
import UserStatusIcon from './UserStatusIcon/UserStatus';
import UserStatusTitle from './UserStatusTitle/UserStatusTitle';

import style from './UserStatus.module.scss';

const UserStatus = () => (
  <div className={style.content}>
    <UserStatusIcon />
    <NavLink to="/auth">
      <UserStatusTitle title="Войти" />
    </NavLink>
  </div>
);

export default UserStatus;
