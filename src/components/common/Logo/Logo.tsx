import React from 'react';
import LogoImage from '../LogoImage/LogoImage';
import style from './Logo.module.scss';

const Logo = () => (
  <div className={style.content}>
    <LogoImage />
    <div className={style.title}>Стикер</div>
  </div>
);

export default Logo;
