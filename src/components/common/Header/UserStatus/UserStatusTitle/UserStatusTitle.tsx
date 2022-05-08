import React from 'react';
import style from './UserStatusTitle.module.scss';

type UserStatusTitleType = {
  title: string;
};

const UserStatusTitle = ({ title }: UserStatusTitleType) => (
  <span className={style.userStatusTitle}>{title}</span>
);

export default UserStatusTitle;
