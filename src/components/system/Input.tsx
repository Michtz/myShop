import React from 'react';
import style from '../../styles/system/input.module.scss';

interface InputProps {
  label: string;
  fullWidth?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  type?: string;
  alignContent?: 'start' | 'center' | 'end';
}

const Input: React.FC<InputProps> = ({
  label,
  fullWidth = false,
  inputProps,
  error,
  helperText,
  disabled,
  required,
  placeholder,
  type = 'text',
  alignContent = 'center',
}) => {
  const labelText = `${label}${required ? ': *' : ':'}`;

  return (
    <div style={{ width: fullWidth ? '100%' : 'auto' }} className={style['input-container']}>
      <label data-error={error} children={labelText} />
      <input
        {...inputProps}
        disabled={disabled}
        data-error={error}
        data-align={alignContent}
        placeholder={placeholder}
        type={type}
      />
      {error && helperText && <p className={style['error-message']}>{helperText}</p>}
    </div>
  );
};

export default Input;