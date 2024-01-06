
import React from 'react';
import style from '../../styles/containers/MainContainer.module.scss';
import { IContainerProps } from '../../types/container.types';

const Container: React.FC<IContainerProps> = ({children}) => {
  return (
    <div className={style["content-container"]} children={children}/>
  );
}

export default Container;