import React from 'react';

import style from './PlaceAdButton.module.scss';

type PlaceAdButtonType = {
  title: string;
};

const PlaceAdButton = ({ title }: PlaceAdButtonType) => (
  <button className={style.wrapper} type="button">
    {title}
  </button>
);

export default PlaceAdButton;
