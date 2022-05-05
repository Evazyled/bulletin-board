import React from 'react';
import image from '../../assets/image/error.png';
import style from './ErrorPage.module.scss';

const ErrorPage = () => (
  <div className={`${style.errorPage} ${style.container}`}>
    <div>
      <h1>Упс! Кажется, на эту страницу прилег котик</h1>
      <span>Ошибка 404</span>
      <span>Мы уже разбираемся, почему так получилось, скоро все починим.</span>
    </div>
    <img alt="error " src={image} />
  </div>
);

export default ErrorPage;
