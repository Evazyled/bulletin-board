/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import style from './EditingPage.module.scss';
import Map from '../../components/common/Map/Map';
import UserSidebar from '../../components/common/Sidebar/UserSidebar';

const UserAdEditingPage = () => (
  <div className={`${style.editingPage} ${style.container} `}>
    <UserSidebar />
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
          <div className={style.params__ad}>
            <div className={style.params__ad__item}>
              <span>Категория</span>
              <div className={style.select__wrapper}>
                <select>
                  <option value="1" selected>
                    Детская одежда
                  </option>
                </select>
                <svg
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 1L7 7L13 1"
                    stroke="#2A2F37"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className={style.params__ad__item}>
              <span>Стоимость</span>
              <div className={style.bg}>
                <input value="15000" />
              </div>
            </div>
            <div className={style.params__ad__item}>
              <span>Дата публикации</span>
              <div className={style.bg}>
                <input type="datetime-local" />
              </div>
            </div>
            <div className={style.params__ad__item}>
              <span>Телефон</span>
              <div className={style.bg}>
                <input type="tel" id="phone" name="phone" pattern="[+]{1}[0-9]{11,14}" required />
              </div>
            </div>
          </div>
          <div className={style.params__ad__textarea}>
            <span>Описание</span>
            <textarea placeholder="Введите текст (до 3000 символов)" />
          </div>
          <div className={style.params__ad__photo}>
            <span>Фотография</span>
            <div className={style.bg}>
              {/* <Upload {...props}>
                  <Button>Выбрать файл</Button>
                </Upload> */}
              <input type="file" />
            </div>
          </div>
          <div className={style.params__ad__loc}>
            <span>Местоположение</span>
            <div className={style.bg}>
              <input placeholder="Введите адрес" />
            </div>
            <Map />
          </div>
        </form>
      </div>
    </div>
  </div>
);
export default UserAdEditingPage;
