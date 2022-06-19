import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import PlaceAdButton from '../PlaceAdButton/PlaceAdButton';
import Search from './Search/Search';
import UserStatus from './UserStatus/UserStatus';
import style from './Header.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={style.header}>
      <div className={`${style.content}  ${style.container}`}>
        {isOpen ? (
          <svg
            onClick={() => setIsOpen(false)}
            className={style.cross}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4">
              <path
                d="M21 3L3 21"
                stroke="#2C2D2E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 3L21 21"
                stroke="#2C2D2E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        ) : (
          <svg
            className={style.mobile_burger}
            onClick={() => setIsOpen(true)}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4">
              <path
                d="M3 12H21"
                stroke="#2A2F37"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H21"
                stroke="#2A2F37"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 18H21"
                stroke="#2A2F37"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        )}

        <ul className={isOpen ? style.navMenu_moblie : style.none}>
          <PlaceAdButton title="Подать объявление" />
          <li>
            <NavLink
              onClick={() => {
                // setCat('Вся доска');
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
              // onClick={() => setCat('Одежда')}
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

        <div className={style.logoAndSearch}>
          <Logo />
          <Search />
        </div>
        <div className={style.placeAdButton}>
          <PlaceAdButton title="Подать объявление" />
        </div>

        <UserStatus />
      </div>
    </header>
  );
};

export default Header;
