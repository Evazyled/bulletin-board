import React from 'react';
import style from './EditingPage.module.scss';
import AdminSidebar from '../../components/common/AdminSidebar/AdminSideBar';

const AdEditingPage = () => (
  <div className={`${style.editingPage} ${style.container} `}>
    <AdminSidebar />
    <div className={style.edetingOneAd}>
      <div className={style.edetingOneAd__header}>
        <button type="button" className={style.comeback}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 12L5 12"
              stroke="#2A2F37"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 19L5 12L12 5"
              stroke="#2A2F37"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Вернуться назад
        </button>
        <div className={style.header__adName}>
          <h3>Чепчик</h3>
          <button type="submit">Сохранить</button>
        </div>
        <form className={style.adEditingPage__form}>
          <div className={style.form__productName}>
            <span>Название товара</span>
            <div className={style.form__productName__content}>
              <span>Чепчик</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);
export default AdEditingPage;
