import React from 'react';
import UserStatusIcon from './UserStatusIcon/UserStatus';
import UserStatusTitle from './UserStatusTitle/UserStatusTitle';

import style from './User.status.module.scss';

const UserStatus = () => (
  <div className={style.content}>
    <UserStatusIcon />
    <UserStatusTitle title="Войти" />
  </div>
);

export default UserStatus;
