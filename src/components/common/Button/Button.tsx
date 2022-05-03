import React from 'react';
import { boolean } from 'yup';
import style from './Button.module.scss';

type ButtonPropsType = {
  title: string;
  disabled?: any;
  isActive?: boolean;
};

const Button = ({ title, disabled }: ButtonPropsType) => (
  <button
    className={disabled ? style.button__grey : style.content}
    type="submit"
    disabled={disabled}>
    {title}
  </button>
);

export default Button;
