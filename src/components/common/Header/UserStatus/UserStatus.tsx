/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import UserStatusIcon from '../UserStatusIcon/UserStatusIcon';
import UserStatusTitle from './UserStatusTitle/UserStatusTitle';

import style from './UserStatus.module.scss';

const UserStatus = () => {
  const isAuth = true;
  const isAdmin = false;
  const [isOpenUserMenu, setIsOpenUserMenu] = useState(false);
  const [isOpenAuth, setIsOpenAuth] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={style.userStatus}>
      <div className={style.info}>
        <div className={style.svg}>
          <svg
            onClick={() => setIsOpenUserMenu(false)}
            className={isOpenUserMenu ? style.cross : style.none}
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
          {isOpenAuth ? (
            <NavLink to="/">
              <svg
                className={isOpenAuth ? style.cross : style.none}
                onClick={() => setIsOpenAuth(false)}
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
            </NavLink>
          ) : (
            ''
          )}
          {isAuth ? (
            <svg
              className={isOpenUserMenu ? style.none : style.manIcon}
              onClick={() => setIsOpenUserMenu(true)}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.4">
                <path
                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                  stroke="#2A2F37"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="#2A2F37"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          ) : isOpenAuth ? (
            ''
          ) : (
            <svg
              className={style.lock}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.4">
                <path
                  d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
                  stroke="#2A2F37"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                  stroke="#2A2F37"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="12"
                  y1="15"
                  x2="12"
                  y2="18"
                  stroke="#2A2F37"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          )}
          <svg
            className={style.search_mobile}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="#2A2F37"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.9999 20.9999L16.6499 16.6499"
              stroke="#2A2F37"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {isAuth ? (
            <svg
              className={style.burger}
              onClick={() => setIsOpenUserMenu(true)}
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
          ) : (
            <NavLink to="/auth">
              <svg
                className={style.burger}
                onClick={() => setIsOpenAuth(true)}
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
            </NavLink>
          )}

          <NavLink to="/auth">
            <UserStatusTitle title={isAuth ? 'Профиль' : 'Войти'} />
          </NavLink>
        </div>
      </div>

      {isAuth ? (
        <>
          <div className={style.userMenu}>
            <div className={`${style.userMenu__item} ${style.userMenu__itemName}`}>
              <div className={style.userName__circle}>ВВ</div>
              <span>Имя</span>
            </div>
            {isAdmin ? (
              <Link to="/adminAdsPage">
                <div className={style.userMenu__item}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.66669 2.5H6.66669C7.55074 2.5 8.39859 2.85119 9.02371 3.47631C9.64883 4.10143 10 4.94928 10 5.83333V17.5C10 16.837 9.73663 16.2011 9.26779 15.7322C8.79895 15.2634 8.16306 15 7.50002 15H1.66669V2.5Z"
                      stroke="#2C2D2E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.3333 2.5H13.3333C12.4493 2.5 11.6014 2.85119 10.9763 3.47631C10.3512 4.10143 10 4.94928 10 5.83333V17.5C10 16.837 10.2634 16.2011 10.7322 15.7322C11.2011 15.2634 11.837 15 12.5 15H18.3333V2.5Z"
                      stroke="#2C2D2E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Мои объявления</span>
                </div>
              </Link>
            ) : (
              <Link to="/userAdsPage">
                <div className={style.userMenu__item}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.66669 2.5H6.66669C7.55074 2.5 8.39859 2.85119 9.02371 3.47631C9.64883 4.10143 10 4.94928 10 5.83333V17.5C10 16.837 9.73663 16.2011 9.26779 15.7322C8.79895 15.2634 8.16306 15 7.50002 15H1.66669V2.5Z"
                      stroke="#2C2D2E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.3333 2.5H13.3333C12.4493 2.5 11.6014 2.85119 10.9763 3.47631C10.3512 4.10143 10 4.94928 10 5.83333V17.5C10 16.837 10.2634 16.2011 10.7322 15.7322C11.2011 15.2634 11.837 15 12.5 15H18.3333V2.5Z"
                      stroke="#2C2D2E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Мои объявления</span>
                </div>
              </Link>
            )}
            <div className={style.userMenu__item}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667"
                  stroke="#2C2D2E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5 2.5H17.5V7.5"
                  stroke="#2C2D2E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.33331 11.6667L17.5 2.5"
                  stroke="#2C2D2E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Выход</span>
            </div>
            <div>
              <div className={isAdmin ? style.userMenu__item : style.none}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.33333 2.5H2.5V8.33333H8.33333V2.5Z"
                    stroke="#2A2F37"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5001 2.5H11.6667V8.33333H17.5001V2.5Z"
                    stroke="#2A2F37"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5001 11.667H11.6667V17.5003H17.5001V11.667Z"
                    stroke="#2A2F37"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.33333 11.667H2.5V17.5003H8.33333V11.667Z"
                    stroke="#2A2F37"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Админ панель</span>
              </div>
            </div>
          </div>
          <div className={isOpenUserMenu ? style.userMenu__mobile : style.none}>
            <div className={`${style.userMenu__item} ${style.userMenu__itemName}`}>
              <div className={style.userName__circle}>ВВ</div>
              <span>Имя</span>
            </div>
            {isAdmin ? (
              <Link to="/adminAdsPage">
                <div
                  className={style.userMenu__item}
                  onClick={() => {
                    setIsOpenUserMenu(false);
                  }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.66669 2.5H6.66669C7.55074 2.5 8.39859 2.85119 9.02371 3.47631C9.64883 4.10143 10 4.94928 10 5.83333V17.5C10 16.837 9.73663 16.2011 9.26779 15.7322C8.79895 15.2634 8.16306 15 7.50002 15H1.66669V2.5Z"
                      stroke="#2C2D2E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.3333 2.5H13.3333C12.4493 2.5 11.6014 2.85119 10.9763 3.47631C10.3512 4.10143 10 4.94928 10 5.83333V17.5C10 16.837 10.2634 16.2011 10.7322 15.7322C11.2011 15.2634 11.837 15 12.5 15H18.3333V2.5Z"
                      stroke="#2C2D2E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Мои объявления</span>
                </div>
              </Link>
            ) : (
              <Link to="/userAdsPage">
                <div
                  className={style.userMenu__item}
                  onClick={() => {
                    setIsOpenUserMenu(false);
                  }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.66669 2.5H6.66669C7.55074 2.5 8.39859 2.85119 9.02371 3.47631C9.64883 4.10143 10 4.94928 10 5.83333V17.5C10 16.837 9.73663 16.2011 9.26779 15.7322C8.79895 15.2634 8.16306 15 7.50002 15H1.66669V2.5Z"
                      stroke="#2C2D2E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.3333 2.5H13.3333C12.4493 2.5 11.6014 2.85119 10.9763 3.47631C10.3512 4.10143 10 4.94928 10 5.83333V17.5C10 16.837 10.2634 16.2011 10.7322 15.7322C11.2011 15.2634 11.837 15 12.5 15H18.3333V2.5Z"
                      stroke="#2C2D2E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Мои объявления</span>
                </div>
              </Link>
            )}

            <div className={style.userMenu__item}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667"
                  stroke="#2C2D2E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5 2.5H17.5V7.5"
                  stroke="#2C2D2E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.33331 11.6667L17.5 2.5"
                  stroke="#2C2D2E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Выход</span>
            </div>
            <div>
              <div className={isAdmin ? style.userMenu__item : style.none}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.33333 2.5H2.5V8.33333H8.33333V2.5Z"
                    stroke="#2A2F37"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5001 2.5H11.6667V8.33333H17.5001V2.5Z"
                    stroke="#2A2F37"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5001 11.667H11.6667V17.5003H17.5001V11.667Z"
                    stroke="#2A2F37"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.33333 11.667H2.5V17.5003H8.33333V11.667Z"
                    stroke="#2A2F37"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Админ панель</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default UserStatus;
