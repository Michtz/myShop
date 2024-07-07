import React, { HTMLAttributes, PropsWithChildren } from 'react';
import style from '../../styles/system/container.module.scss';
import Form from './Form';
import { IContainerProps, ContainerWidth } from '../../types/common';

/**
 * Container system component can be used as a wrapper for a section
 */

const Container: React.FC<IContainerProps> = ({ children }) => {
  return <div className={style['base-container']} children={children} />;
};

/**
 * ContainerSection system component can be used as a wrapper for a section in a container
 */

interface IContainerSectionProps extends IContainerProps {
  centred?: boolean;
  width?: ContainerWidth;
}

export const ContainerSection: React.FC<IContainerSectionProps> = ({ children, centred = false, width = 'small' }) => {
  return <div className={style['container-section']} data-width={width} data-centred={centred} children={children} />;
};

/**
 * ContainerSectionForm system component can be used as a wrapper for a form in a container section
 */

interface ContainerSectionProps extends IContainerProps {
  width?: ContainerWidth;
}

export const ContainerSectionForm: React.FC<ContainerSectionProps> = ({ width, ...rest }): JSX.Element => {
  return <Form data-width={width} className={style['container-section-form']} {...rest} />;
};

export default Container;