/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import AddButton from '../../components/common/AdButton/AddButton';
import UserSidebar from '../../components/common/Sidebar/UserSidebar';

import AdsListItem from './AdsList/AdsListItem/AdsListItem';
import style from './AdsPage.module.scss';

const UserAdsPage = () => {
  const [countAds, setCountAds] = useState(45);

  return (
    <div className={`${style.adminAdsPage} ${style.container}`}>
      <UserSidebar />
      <div className={style.ads}>
        <div className={style.ads__header}>
          <div className={style.ads__left}>
            <span className={style.ads__title}>Объявления</span>
            <span className={style.count}>Всего :{countAds}</span>
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
          <div className={style.filter__dropdown}>
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.6001 6L20.4001 6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.8 18L13.2001 18"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className={style.filter__dropdown__menu}>
              <div className={style.dropdown__menu__top}>
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
                    <span>Аксессуары</span>
                  </div>
                  <div className={style.menu__category__item}>
                    <input type="checkbox" id="c3" />
                    <label htmlFor="c3" />
                    <span>Одежда</span>
                  </div>
                  <div className={style.menu__category__item}>
                    <input type="checkbox" id="c4" />
                    <label htmlFor="c4" />
                    <span>Мебель</span>
                  </div>
                  <div className={style.menu__category__item}>
                    <input type="checkbox" id="c5" />
                    <label htmlFor="c5" />
                    <span>Спорт</span>
                  </div>
                  <div className={style.menu__category__item}>
                    <input type="checkbox" id="c6" />
                    <label htmlFor="c6" />
                    <span>Техника</span>
                  </div>
                  <div className={style.menu__category__item}>
                    <input type="checkbox" id="c7" />
                    <label htmlFor="c7" />
                    <span>Товары для дома</span>
                  </div>
                </div>
                <div className={style.menu__isPablished}>
                  <h3>Опубликовано</h3>
                  <div className={style.menu__category__item}>
                    <input type="checkbox" id="p1" />
                    <label htmlFor="p1" />
                    <span>Да</span>
                  </div>
                  <div className={style.menu__category__item}>
                    <input type="checkbox" id="p2" />
                    <label htmlFor="p2" />
                    <span>Нет</span>
                  </div>
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
            <div className={style.params__item}>
              <span>Название объявления</span>
              <div className={style.params__item__arrows}>
                <svg
                  width="8"
                  height="4"
                  viewBox="0 0 8 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 0L8 4H0L4 0Z" fill="#2C2D2E" />
                </svg>
                <svg
                  width="8"
                  height="4"
                  viewBox="0 0 8 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4L3.49691e-07 -2.22545e-07L8 4.76837e-07L4 4Z" fill="#2C2D2E" />
                </svg>
              </div>
            </div>
            <div className={style.params__item}>Категория</div>
            <div className={style.params__item}>Дата публикации</div>
            <div className={style.params__item}>Публикация</div>
          </div>
          <ul>
            <AdsListItem
              name="Чепчик"
              category="Одежда"
              dataPublication="12 апреля 2022"
              isPublication
            />
            {/* <AdminAdsListItem
              name="Чепчик"
              category="Одежда"
              dataPublication="12 апреля 2022"
              isPublication
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserAdsPage;
