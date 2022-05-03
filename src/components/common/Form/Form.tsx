import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Form.module.scss';

type FormPropsType = {
  title: string;
  subTitle: string;
};

const Form: React.FC<FormPropsType> = ({ title, subTitle, children }) => (
  <div className={style.form}>
    <div className={style.text}>
      <div className={style.form__title}>{title}</div>
      <div className={style.form__subTitle}>{subTitle}</div>
    </div>
    <ul>
      <div className={style.list__item}>
        <li>
          <NavLink
            to="/registration"
            className={({ isActive }) => (isActive ? style.active_link : style.not_active_link)}>
            Регистрация
          </NavLink>
        </li>
      </div>
      <div className={style.list__item}>
        <li>
          <NavLink
            to="/auth"
            className={({ isActive }) => (isActive ? style.active_link : style.not_active_link)}>
            Авторизация
          </NavLink>
        </li>
      </div>
    </ul>
    <div className={style.form__body}>{children}</div>
  </div>
);

export default Form;
