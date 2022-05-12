import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './MainPage.module.scss';
import img from '../../assets/image/banner-img.jpg';

const MainPage = () => (
  <div className={style.mainPage}>
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
    <nav className={style.container}>
      <ul className={style.navMenu}>
        <li>
          <NavLink className={({ isActive }) => (isActive ? style.activeLink : '')} to="/">
            Вся доска
          </NavLink>
        </li>
        <li>
          <NavLink to="/">Автомобили</NavLink>
        </li>
        <li>
          <NavLink to="allBoard">Аксессуары</NavLink>
        </li>
        <li>
          <NavLink to="allBoard">Мебель</NavLink>
        </li>
        <li>
          <NavLink to="allBoard">Спорт</NavLink>
        </li>
        <li>
          <NavLink to="allBoard">Техника</NavLink>
        </li>
        <li>
          <NavLink to="allBoard">Товары для дома</NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default MainPage;
