import React from 'react';
import style from '../../styles/system/button.module.scss';

interface ButtonContainerProps {
  children: React.ReactNode;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({ children }) => {
  return <div className={style['button-container']}>{children}</div>;
};

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children
}) => {
  return (
    <ButtonContainer>
      <button onClick={onClick} className={style['button']}>
        {children}
      </button>
    </ButtonContainer>
  );
};

export default Button;