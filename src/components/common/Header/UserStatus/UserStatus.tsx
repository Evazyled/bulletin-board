/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import UserStatusIcon from './UserStatusIcon/UserStatus';
import UserStatusTitle from './UserStatusTitle/UserStatusTitle';

import style from './UserStatus.module.scss';

const UserStatus = ({ onMouseEnter, onClick }: any) => (
  <div className={style.userStatus} onMouseEnter={onMouseEnter}>
    <UserStatusIcon />
    <NavLink to="/auth">
      <UserStatusTitle title="Войти" />
      <svg
        className={style.burger}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.4">
          <path
            d="M3 12H21"
            stroke="#2A2F37"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 6H21"
            stroke="#2A2F37"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 18H21"
            stroke="#2A2F37"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </NavLink>
  </div>
);

export default UserStatus;
