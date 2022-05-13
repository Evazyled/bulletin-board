import React from 'react';
import style from './AdminAdsListItem.module.scss';

type AdminAdsListItemPropsType = {
  name: string;
  category: string;
  dataPublication: string;
  isPublication: boolean;
};

const AdminAdsListItem = ({
  name,
  category,
  dataPublication,
  isPublication,
}: AdminAdsListItemPropsType) => (
  <div className={style.adminAdsListItem}>
    <li>
      <span>{name}</span>
      <span>{category}</span>
      <span>{dataPublication}</span>
      <span>{isPublication ? 'Да' : 'Нет'}</span>
    </li>
  </div>
);

export default AdminAdsListItem;
