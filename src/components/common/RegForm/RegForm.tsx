import React from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Input, Checkbox } from 'antd';
import style from './RegForm.module.scss';
import 'antd/dist/antd.css';
import Button from '../Button/Button';

type RegFormPropsType = {
  title: string;
  subTitle: string;
};

const RegForm: React.FC<RegFormPropsType> = ({ title, subTitle, children }) => (
  <div className={style.regForm}>
    <div className={style.text}>
      <div className={style.regForm__title}>{title}</div>
      <div className={style.regForm__subTitle}>{subTitle}</div>
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
    <div className={style.regForm__body}>{children}</div>
  </div>
);

export default RegForm;
