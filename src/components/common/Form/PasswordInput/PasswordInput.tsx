import React, { ChangeEvent, useState } from 'react';
import EyeIcon from './EyeIcon';
import style from './PasswordInput.module.scss';

type PasswordInputPropsType = {
  id: string;
  placeholder: string;
  value: {
    value: string;
    error: boolean;
  };
  setValue: React.Dispatch<
    React.SetStateAction<{
      value: string;
      error: boolean;
    }>
  >;
  validation?: () => boolean;
};

const PasswordInput = ({
  id,
  placeholder,
  value,
  setValue,
  validation,
}: PasswordInputPropsType) => {
  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, value: event.target.value }));
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className={style.inputForm}>
      <label htmlFor={id} className={style.inputForm__label}>
        <input
          className={`${value.error ? style.input__error : ''}`}
          id={id}
          placeholder={placeholder}
          value={value.value}
          onChange={handler}
          type={passwordVisible ? 'text' : 'password'}
          onBlur={validation}
        />
        <button type="button" onClick={() => setPasswordVisible((prev) => !prev)}>
          <EyeIcon visible={passwordVisible} />
        </button>
      </label>
    </div>
  );
};

export default PasswordInput;
