import React from 'react';
import style from './MainPage.module.scss';
import img from '../../assets/image/banner-img.jpg';

const MainPage = () => (
  <div className={style.banner}>
    <div className={`${style.banner__content} ${style.container}`}>
      <div className={style.banner__row}>
        <div className={style.banner__text}>
          <h1>Доска объявлений</h1>
          <p>
            Находи тысячи разнообразных товаров и услуг от продавцов со всей страны. Безопасные
            расчеты. Удобный сервис доставки
          </p>
        </div>
        <img alt="banner" src={img} width="300px" height="300px" />
      </div>
    </div>
  </div>
);

export default MainPage;
