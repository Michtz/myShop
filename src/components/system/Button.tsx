import React from 'react';
import style from '../../styles/system/button.module.scss';

interface ButtonContainerProps {
  children: React.ReactNode;
}

export const ButtonContainer: React.FC<ButtonContainerProps> = ({ children }) => {
  return <div className={style['button-container']}>{children}</div>;
};

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type,
}) => {
  return (
      <button onClick={onClick} className={style['button']} type={type}>
        {children}
      </button>

  );
};

export default Button;