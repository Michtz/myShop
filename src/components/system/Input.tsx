import React, { PropsWithChildren } from 'react';
import style from '../../styles/system/input.module.scss';

type inputType = 'text' | 'password' | 'email' | 'number' | 'radio' | 'range' | 'color';

interface InputProps {
  label: string;
  fullWidth?: boolean;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  placeholder?: any;
  type?: inputType;
  alignContent?: 'start' | 'center' | 'end';
}

const Input: React.FC<InputProps> = ({
  label,
  fullWidth = false,
  inputProps,
  error,
  disabled,
  required,
  placeholder,
  type = 'text',
  alignContent = 'center',
}) => {
  label += required ? ': *' : ':';

  return (
    <div style={{ width: fullWidth ? '100%' : 'auto' }} className={style['input-container']}>
      <label children={label} />
      <input
        {...inputProps}
        disabled={disabled}
        data-align={alignContent}
        placeholder={placeholder}
        type={type}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Input;