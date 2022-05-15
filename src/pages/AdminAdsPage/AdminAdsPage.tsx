/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import AddButton from '../../components/common/AdButton/AddButton';
import AdminSidebar from '../../components/common/AdminSidebar/AdminSideBar';
import AdminAdsListItem from './AdminAdsList/AdminAdsListItem/AdminAdsListItem';
import style from './AdminAdsPage.module.scss';

const AdminAdsPage = () => {
  const [countAds, setCountAds] = useState(45);
  return (
    <div className={`${style.adminAdsPage} ${style.container}`}>
      <AdminSidebar />
      <div className={style.ads}>
        <div className={style.ads__header}>
          <div className={style.ads__left}>
            <span className={style.ads__title}>Объявления</span>
            <span className={style.count}>Всего : {countAds}</span>
          </div>
          <AddButton />
        </div>
        <div className={style.ads__filter}>
          <div className={style.filter__search}>
            <input placeholder="Найти объявление" />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.4">
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="#2C2D2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.0001 20.9999L16.6501 16.6499"
                  stroke="#2C2D2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
          <div className={style.fliter__dropdown}>
            <button className={style.filter__button} type="button">
              Фильтровать
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.19995 12L16.7999 12"
                  stroke="#2C2D2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.6001 6L20.4001 6"
                  stroke="#2C2D2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.8 18L13.2001 18"
                  stroke="#2C2D2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className={style.filter__dropdown__menu}>
              <div className={style.menu__category}>
                <h3>Категория</h3>
                <div className={style.menu__category__item}>
                  <input type="checkbox" id="c1" />
                  <label htmlFor="c1" />
                  <span>Автомобили</span>
                </div>
                <div className={style.menu__category__item}>
                  <input type="checkbox" id="c2" />
                  <label htmlFor="c2" />
                  <span>Автомобили</span>
                </div>
                <div className={style.menu__category__item}>
                  <input type="checkbox" id="c3" />
                  <label htmlFor="c3" />
                  <span>Автомобили</span>
                </div>
                <div className={style.menu__category__item}>
                  <input type="checkbox" id="c4" />
                  <label htmlFor="c4" />
                  <span>Автомобили</span>
                </div>
                <div className={style.menu__category__item}>
                  <input type="checkbox" id="c5" />
                  <label htmlFor="c5" />
                  <span>Автомобили</span>
                </div>
                <div className={style.menu__category__item}>
                  <input type="checkbox" id="c6" />
                  <label htmlFor="c6" />
                  <span>Автомобили</span>
                </div>
                <div className={style.menu__category__item}>
                  <input type="checkbox" id="c7" />
                  <label htmlFor="c7" />
                  <span>Автомобили</span>
                </div>
              </div>
              <div className={style.buttons}>
                <button type="submit" className={`${style.button__confirm} ${style.button}`}>
                  Применить
                </button>
                <button type="submit" className={`${style.button__reset} ${style.button}`}>
                  Сбросить
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={style.ads__main}>
          <div className={style.ads__main__params}>
            <span className={style.params__item}>Название объявления</span>
            <span className={style.params__item}>Категория</span>
            <span className={style.params__item}>Дата публикации</span>
            <span className={style.params__item}>Публикация</span>
          </div>
          <ul>
            <AdminAdsListItem
              name="Чепчик"
              category="Одежда"
              dataPublication="12 апреля 2022"
              isPublication
            />
            <AdminAdsListItem
              name="Чепчик"
              category="Одежда"
              dataPublication="12 апреля 2022"
              isPublication
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminAdsPage;
