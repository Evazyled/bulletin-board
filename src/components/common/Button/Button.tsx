import React from 'react';
import style from './Button.module.scss';

type ButtonPropsType = {
  title: string;
  disabled?: any;
  onClick?: () => void;
};

const Button = ({ title, disabled, onClick }: ButtonPropsType) => (
  <button
    onClick={onClick}
    className={disabled ? style.button__grey : style.content}
    type="submit"
    disabled={disabled}>
    {title}
  </button>
);

export default Button;
