/* eslint-disable operator-linebreak */
/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import style from './Form.module.scss';
import Form from './Form';
import Button from '../Button/Button';

import Input from './Input/Input';
import PasswordInput from './PasswordInput/PasswordInput';

const RegForm = () => {
  const [firstName, setFirstName] = useState({ value: '', error: false });
  const [surName, setSurName] = useState({ value: '', error: false });
  const [email, setEmail] = useState({ value: '', error: false });
  const [password, setPassword] = useState({ value: '', error: false });
  const [repeatPassword, setRepeatPassword] = useState({ value: '', error: false });
  const [disable, setDisable] = useState(false);

  const [checked, setChecked] = useState(false);
  function changeCheckbox() {
    setChecked(!checked);
  }
  const validation = () => {
    if (!firstName.value.length) {
      setFirstName((prev) => ({ ...prev, error: true }));
    }
    if (!surName.value.length) {
      setSurName((prev) => ({ ...prev, error: true }));
    }
    if (!email.value.length) {
      setEmail((prev) => ({ ...prev, error: true }));
    }
    if (
      // eslint-disable-next-line operator-linebreak
      (!repeatPassword.value.length || !password.value.length) &&
      (repeatPassword.value.length < 10 || password.value.length < 10)
    ) {
      setPassword((prev) => ({ ...prev, error: true }));
      setRepeatPassword((prev) => ({ ...prev, error: true }));
      return false;
    }

    if (repeatPassword.value !== password.value) {
      setPassword((prev) => ({ ...prev, error: true }));
      setRepeatPassword((prev) => ({ ...prev, error: true }));
      return false;
    }
    setPassword((prev) => ({ ...prev, error: false }));
    setRepeatPassword((prev) => ({ ...prev, error: false }));
    setEmail((prev) => ({ ...prev, error: false }));
    setSurName((prev) => ({ ...prev, error: false }));
    setFirstName((prev) => ({ ...prev, error: false }));
    // dispatch(SetUserPasswordAction(password.value));

    // dispatch(SetUserNameAction(name.value));
    // dispatch(SetUserEmailAction(email.value));
    // navigate('/auth');
    return true;
  };
  useEffect(() => {
    if (
      firstName.error ||
      surName.error ||
      email.error ||
      repeatPassword.error ||
      password.error ||
      !checked
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [firstName.error, surName.error, email.error, password.error, repeatPassword.error, checked]);
  return (
    <Form title="Hello, world!" subTitle="Создайте аккаунт">
      <Input id="name" placeholder="Имя" value={firstName} setValue={setFirstName} />
      <Input id="surName" placeholder="Фамилия" value={surName} setValue={setSurName} />
      <Input id="email" placeholder="Email" value={email} setValue={setEmail} />
      <PasswordInput
        id="password"
        placeholder="Пароль"
        value={password}
        setValue={setPassword}
        validation={validation}
      />
      <PasswordInput
        id="repeatPassword"
        placeholder="Повторите пароль"
        value={repeatPassword}
        setValue={setRepeatPassword}
        validation={validation}
      />
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

      <Button title="Создать аккаунт" disabled={disable} onClick={validation} />
    </Form>
  );
};

export default RegForm;
