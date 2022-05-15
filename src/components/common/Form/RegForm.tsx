/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef, useState } from 'react';
import { FormikErrors, useFormik } from 'formik';

import Form from './Form';
import Button from '../Button/Button';
import style from './Form.module.scss';
import EyeIcon from './EyeIcon';

interface FormValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  confirmPassword: string;
}

const RegForm = () => {
  const validate = (values: any) => {
    const errors: FormikErrors<FormValues> = {};
    if (!values.firstName) {
      errors.firstName = 'Поле Имя обязательно';
    }

    if (!values.lastName) {
      errors.lastName = 'Поле Фамилия обязательно';
    }
    if (!values.password) {
      errors.password = 'Введите пароль';
    } else if (values.password.length < 10) {
      errors.password = 'Пароль должен содержать больше 10 символов';
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Повторите введённый пароль';
    } else if (values.confirmPassword.length < 10) {
      errors.confirmPassword = 'Пароли должны совпадать';
    }
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Пароли должны совпадать';
    }
    if (!values.email) {
      errors.email = 'Поле Email обязательно';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate,
    onSubmit: (values) => {},
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  function changeCheckbox() {
    setChecked(!checked);
  }

  return (
    <Form title="Hello, World!" subTitle="Создайте аккаунт">
      <form onSubmit={formik.handleSubmit}>
        <div className={style.inputForm}>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
            placeholder="Имя"
            className={formik.errors.firstName ? style.input__error : ''}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div className={style.inputForm}>
          <label htmlFor="lastName" />
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            onBlur={formik.handleBlur}
            placeholder="Фамилия"
            className={formik.errors.lastName ? style.input__error : ''}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}
        </div>
        <div className={style.inputForm}>
          <label htmlFor="email" />
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            placeholder="Email"
            className={formik.errors.email ? style.input__error : ''}
          />
          {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
        </div>
        <div className={style.inputForm}>
          <label className={style.inputForm__label} htmlFor="password">
            <input
              id="password"
              name="password"
              type={passwordVisible ? 'text' : 'password'}
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              placeholder="Пароль"
              className={formik.errors.password ? style.input__error : ''}
            />
            <button type="button" onClick={() => setPasswordVisible((prev) => !prev)}>
              <EyeIcon />
            </button>
          </label>
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <div className={style.inputForm}>
          <label className={style.inputForm__label} htmlFor="confirmPassword">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={passwordVisible ? 'text' : 'password'}
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              onBlur={formik.handleBlur}
              placeholder="Повторите пароль"
              className={formik.errors.confirmPassword ? style.input__error : ''}
            />
            <button type="button" onClick={() => setPasswordVisible((prev) => !prev)}>
              <EyeIcon />
            </button>
          </label>

          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div>{formik.errors.confirmPassword}</div>
          ) : null}
        </div>
        <div className={style.conditional}>
          <div className={style.conditional__check}>
            <input type="checkbox" checked={checked} onChange={changeCheckbox} id="c1" />
            <label htmlFor="c1" />
          </div>
          <div className={style.conditional__text}>
            Принимаю условия
            <a href="http://google.com" target="_blank" rel="noopener noreferrer">
              Пользовательского соглашения
            </a>
          </div>
        </div>

        <Button title="Создать аккаунт" disabled={!checked} />
      </form>
    </Form>
  );
};

export default RegForm;
