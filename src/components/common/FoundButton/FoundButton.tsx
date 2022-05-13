import React from 'react';
import style from './FoundButton.module.scss';

type FoundButtonType = {
  title: string;
};

const FoundButton = ({ title }: FoundButtonType) => (
  <button className={style.wrapper} type="button">
    {title}
  </button>
);

export default FoundButton;
