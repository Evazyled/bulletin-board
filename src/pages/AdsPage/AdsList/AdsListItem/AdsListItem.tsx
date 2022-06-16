import React from 'react';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import style from './AdsListItem.module.scss';

type AdminAdsListItemPropsType = {
  name: string;
  category: string;
  dataPublication: string;
  isPublication: boolean;
};

const AdsListItem = ({
  name,
  category,
  dataPublication,
  isPublication,
}: AdminAdsListItemPropsType) => {
  const navigate = Navigate;
  const isAdmin = false;
  return (
    <div className={style.adminAdsListItem}>
      <li>
        <span className={style.listItem__title}>{name}</span>
        <span>{category}</span>
        <span>{dataPublication}</span>
        <span>{isPublication ? 'Да' : 'Нет'}</span>
        <div className={style.three__dots}>
          <div className={style.three__dots__button}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.4">
                <path
                  d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                  stroke="#2C2D2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                  stroke="#2C2D2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                  stroke="#2C2D2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
          <div className={style.three__dots__dropdown}>
            <div className={style.dropdown__menu__item}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3724_1161)">
                  <path
                    d="M0.833374 10.0002C0.833374 10.0002 4.16671 3.3335 10 3.3335C15.8334 3.3335 19.1667 10.0002 19.1667 10.0002C19.1667 10.0002 15.8334 16.6668 10 16.6668C4.16671 16.6668 0.833374 10.0002 0.833374 10.0002Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <rect x="0.5" y="0.5" width="19" height="19" strokeOpacity="0.08" />
                <defs>
                  <clipPath id="clip0_3724_1161">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Просмотреть</span>
            </div>
            {isAdmin ? (
              <Link to="/adminEditingPage">
                <div className={style.dropdown__menu__item}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.1666 2.49993C14.3855 2.28106 14.6453 2.10744 14.9313 1.98899C15.2173 1.87054 15.5238 1.80957 15.8333 1.80957C16.1428 1.80957 16.4493 1.87054 16.7353 1.98899C17.0213 2.10744 17.2811 2.28106 17.5 2.49993C17.7188 2.7188 17.8924 2.97863 18.0109 3.2646C18.1294 3.55057 18.1903 3.85706 18.1903 4.16659C18.1903 4.47612 18.1294 4.78262 18.0109 5.06859C17.8924 5.35455 17.7188 5.61439 17.5 5.83326L6.24996 17.0833L1.66663 18.3333L2.91663 13.7499L14.1666 2.49993Z"
                      stroke="#2C2D2E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Редактировать</span>
                </div>
              </Link>
            ) : (
              <Link to="/userEditingPage">
                <div className={style.dropdown__menu__item}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.1666 2.49993C14.3855 2.28106 14.6453 2.10744 14.9313 1.98899C15.2173 1.87054 15.5238 1.80957 15.8333 1.80957C16.1428 1.80957 16.4493 1.87054 16.7353 1.98899C17.0213 2.10744 17.2811 2.28106 17.5 2.49993C17.7188 2.7188 17.8924 2.97863 18.0109 3.2646C18.1294 3.55057 18.1903 3.85706 18.1903 4.16659C18.1903 4.47612 18.1294 4.78262 18.0109 5.06859C17.8924 5.35455 17.7188 5.61439 17.5 5.83326L6.24996 17.0833L1.66663 18.3333L2.91663 13.7499L14.1666 2.49993Z"
                      stroke="#2C2D2E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Редактировать</span>
                </div>
              </Link>
            )}

            <div className={style.dropdown__menu__item}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.5 5H4.16667H17.5"
                  stroke="#2C2D2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.66663 4.99984V3.33317C6.66663 2.89114 6.84222 2.46722 7.15478 2.15466C7.46734 1.8421 7.89127 1.6665 8.33329 1.6665H11.6666C12.1087 1.6665 12.5326 1.8421 12.8451 2.15466C13.1577 2.46722 13.3333 2.89114 13.3333 3.33317V4.99984M15.8333 4.99984V16.6665C15.8333 17.1085 15.6577 17.5325 15.3451 17.845C15.0326 18.1576 14.6087 18.3332 14.1666 18.3332H5.83329C5.39127 18.3332 4.96734 18.1576 4.65478 17.845C4.34222 17.5325 4.16663 17.1085 4.16663 16.6665V4.99984H15.8333Z"
                  stroke="#2C2D2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.33337 9.1665V14.1665"
                  stroke="#2C2D2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.6666 9.1665V14.1665"
                  stroke="#2C2D2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="19"
                  height="19"
                  stroke="#2C2D2E"
                  strokeOpacity="0.08"
                />
              </svg>
              <span>Удалить</span>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default AdsListItem;
