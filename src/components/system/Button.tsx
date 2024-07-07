import React from 'react';
import style from '../../styles/system/button.module.scss';

interface ButtonContainerProps {
  children: React.ReactNode;
  position?: 'left' | 'center' | 'right';
}

export const ButtonContainer: React.FC<ButtonContainerProps> = ({ children, position = 'right' }) => {
  return <div data-position={position} className={style['button-container']}>{children}</div>;
};

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  color?: 'primary' | 'secondary';

}

const Button: React.FC<ButtonProps> = ({ onClick, children, type, color = 'primary' }) => {
  return (
    <button onClick={onClick}  className={style['button']} data-color={color} type={type}>
      {children}
    </button>
  );
};

export default Button;