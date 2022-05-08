import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import LogoImage from '../LogoImage/LogoImage';
import style from './Logo.module.scss';

const Logo = () => {
  const navigate = useNavigate;
  return (
    <Link to="/">
      <div className={style.content}>
        <LogoImage />
        <div className={style.title}>Стикер</div>
      </div>
    </Link>
  );
};

export default Logo;
