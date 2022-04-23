import React from 'react';
import Logo from '../Logo/Logo';
import style from './Footer.module.scss';

const Footer = () => (
  <footer className={style.footer}>
    <div className={`${style.content}  ${style.container}`}>
      <div className={style.left}>
        <Logo />
        <svg
          width="2"
          height="32"
          viewBox="0 0 2 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <line opacity="0.5" x1="1.0564" y1="-2.18557e-08" x2="1.0564" y2="32" stroke="#424242" />
        </svg>
        <span>Доска объявлений </span>
      </div>
      <div className={style.center}>© ООО «Доска диджитал», 2022</div>
      <div className={style.social} />
    </div>
  </footer>
);

export default Footer;
