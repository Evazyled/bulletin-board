/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { FormikErrors, useFormik } from 'formik';
import Form from './Form';
import Button from '../Button/Button';
import style from './Form.module.scss';
import EyeIcon from './EyeIcon';

interface FormValues {
  email: string;
  password: string;
}

const AuthForm = () => {
  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 10) {
      errors.password = 'Пароль должен больше 10 символов';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {},
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  function chengeCheckbox() {
    setChecked(!checked);
  }
  return (
    <Form title="Hello, World!" subTitle="Пройдите авторизацию">
      <form onSubmit={formik.handleSubmit}>
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

        <Button title="Войти" />
      </form>
    </Form>
  );
};

export default AuthForm;
