import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import style from './MainPage.module.scss';
import img from '../../assets/image/banner-img.jpg';
import AdCard from './AdCardList/AdCard/AdCard';
import { data } from '../../helpers/index';
import AdCardList from './AdCardList/AdCardList';
import List from './List';

const MainPage = () => {
  const [cat, setCat] = useState('Вся доска');
  return (
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
            <img alt="banner" src={img} />
          </div>
        </div>
      </div>
      <nav className={style.container}>
        <ul className={style.navMenu}>
          <li>
            <NavLink
              onClick={() => {
                setCat('Вся доска');
              }}
              className={({ isActive }) => (isActive ? style.activeLink : '')}
              to="/">
              Вся доска
            </NavLink>
          </li>
          <li>
            <NavLink to="/">Автомобили</NavLink>
          </li>
          <li>
            <NavLink to="/">Аксессуары</NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setCat('Одежда')}
              className={({ isActive }) => (isActive ? style.activeLink : '')}
              to="/">
              Одежда
            </NavLink>
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

      <div className={`${style.adsList} ${style.container}`}>
        <h3>Вся лента</h3>

        <AdCardList data={data} sep={cat} />
      </div>
    </div>
  );
};

export default MainPage;
