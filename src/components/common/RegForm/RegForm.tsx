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

const RegForm: React.FC<RegFormPropsType> = ({ title, subTitle }) => (
  <div className={style.regForm}>
    <div className={style.text}>
      <div className={style.regForm__title}>{title}</div>
      <div className={style.regForm__subTitle}>{subTitle}</div>
    </div>

    <div className={style.regForm__body}>
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
      <Form>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Поле Имя обязательно',
            },
          ]}>
          <Input placeholder="Имя" />
        </Form.Item>
        <Form.Item
          name="usersurname"
          rules={[
            {
              required: true,
              message: 'Поле Фамилия не может быть пустым',
            },
          ]}>
          <Input placeholder="Фамилия" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'Введите правильный Email',
            },
            {
              required: true,
            },
          ]}>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback>
          <Input.Password placeholder="Пароль" />
        </Form.Item>
        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error('Введённые пароли должны совпадать'));
              },
            }),
          ]}>
          <Input.Password placeholder="Повторите пароль" />
        </Form.Item>
        <Checkbox>Checkbox</Checkbox>
        <Button title="Создать аккаунт" />
      </Form>
    </div>
  </div>
);

export default RegForm;
