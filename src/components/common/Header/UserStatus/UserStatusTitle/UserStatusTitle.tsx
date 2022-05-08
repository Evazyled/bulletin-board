import React from 'react';

type UserStatusTitleType = {
  title: string;
};

const width = window.innerWidth;

const UserStatusTitle = ({ title }: UserStatusTitleType) => <span>{title}</span>;

export default UserStatusTitle;
