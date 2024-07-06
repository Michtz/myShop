import React from 'react';
import style from '../../styles/system/input.module.scss';

interface InputProps {
  label: string;
  fullWidth: boolean;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  placeholder?: any;
  hiddenContent?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  fullWidth,
  inputProps,
  error,
  disabled,
  required,
  placeholder,
  hiddenContent,
}) => {
  if (required) label = label + ' *';

  return (
    <div style={{ width: fullWidth ? '100%' : 'auto' }} className={style['input-container']}>
      <label children={label} />
      <input {...inputProps} disabled={disabled} placeholder={placeholder} type={hiddenContent ? 'password' : ''} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Input;