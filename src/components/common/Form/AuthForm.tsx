/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { FormikErrors, useFormik } from 'formik';
import Form from './Form';
import Button from '../Button/Button';
import style from './Form.module.scss';
import EyeIcon from './EyeIcon';
import Input from './Input/Input';
import PasswordInput from './PasswordInput/PasswordInput';

const AuthForm = () => {
  const [firstName, setFirstName] = useState({ value: '', error: false });
  const [password, setPassword] = useState({ value: '', error: false });
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (!firstName.value.length) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [firstName.value]);

  return (
    <Form title="Hello, World!" subTitle="Пройдите авторизацию">
      <Input id="name" placeholder="Имя" value={firstName} setValue={setFirstName} />
      <PasswordInput id="password" placeholder="Пароль" value={password} setValue={setPassword} />

      <Button title="Войти" disabled={disable} />
    </Form>
  );
};

export default AuthForm;
