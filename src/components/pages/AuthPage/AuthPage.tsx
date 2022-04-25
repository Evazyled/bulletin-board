import React from 'react';
import RegistrationForm from '../../common/Form/Form';

import style from './AuthPage.module.scss';

const AuthPage = () => (
  <div className={style.wrapper}>
    <RegistrationForm />
  </div>
);

export default AuthPage;
