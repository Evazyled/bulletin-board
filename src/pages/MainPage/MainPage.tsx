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
            <NavLink to="/">Спорт</NavLink>
          </li>
          <li>
            <NavLink onClick={() => setCat(() => 'Техника')} to="/">
              Техника
            </NavLink>
          </li>
          <li>
            <NavLink to="allBoard">Товары для дома</NavLink>
          </li>
        </ul>
      </nav>

      <div className={`${style.adsList} ${style.container} `}>
        <h3>Вся лента</h3>

        <AdCardList data={data} sep={cat} />

        <div className={style.btn_container}>
          <button className={style.btn_loading} type="button">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.3333 0.666656L13.9999 3.33332L11.3333 5.99999"
                stroke="#4877F2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 7.33334V6.00001C2 5.29277 2.28095 4.61449 2.78105 4.11439C3.28115 3.61429 3.95942 3.33334 4.66667 3.33334H14"
                stroke="#4877F2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.66667 15.3333L2 12.6667L4.66667 10"
                stroke="#4877F2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 8.66666V9.99999C14 10.7072 13.719 11.3855 13.219 11.8856C12.7189 12.3857 12.0406 12.6667 11.3333 12.6667H2"
                stroke="#4877F2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Загрузить еще
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
