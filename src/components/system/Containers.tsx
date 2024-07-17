import React from 'react';
import style from '../../styles/system/container.module.scss';
import Form from './Form';
import { IContainerProps, ContainerWidth } from '../../types/common';
import Button from './Button';
import Icon from './Icon';
import styles from '../../styles/modals/productModal.module.scss';

/**
 * Container system component can be used as a wrapper for sections
 */

const Container: React.FC<IContainerProps> = ({ children }) => {
  return <div className={style['base-container']} children={children} />;
};

/**
 * ContainerSection system component can be used as a wrapper for a section in a container
 */

interface IContainerSectionProps extends IContainerProps {
  centred?: boolean;
  onClick?: () => void;
  className?: string;
  width?: ContainerWidth;
  noBackground?: boolean;
  radius?: boolean;
  marginTop?: boolean;
  noGap?: boolean;
}

export const ContainerSection: React.FC<IContainerSectionProps> = ({
  children,
  className,
  centred = false,
  width = 'small',
  noBackground = false,
  radius = true,
  marginTop = true,
  noGap = false,
  onClick,
}) => {
  return (
    <div
      className={`${style['container-section']} ${className || ''}`}
      data-width={width}
      onClick={onClick}
      data-no-background={noBackground}
      data-centred={centred}
      data-radius={radius}
      data-margin-top={marginTop}
      data-gap={!noGap}
      children={children}
    />
  );
};

/**
 * ContainerSectionForm system component can be used as a wrapper for a form section in a container
 */

interface ContainerSectionProps extends IContainerProps {
  width?: ContainerWidth;
  noMargin?: boolean;
  noPadding?: boolean;
}

export const ContainerSectionForm: React.FC<ContainerSectionProps> = ({
  width,
  noPadding = false,
  noMargin = false,
  ...rest
}): JSX.Element => {
  return (
    <Form
      data-width={width}
      data-padding={!noPadding}
      data-margin={!noMargin}
      className={style['container-section-form']}
      {...rest}
    />
  );
};

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const ModalContainer: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className={style['modalOverlay']} onClick={onClose}>
      <div className={style['modal']} onClick={(e) => e.stopPropagation()}>
        {children}
        <Button className={styles['close-button']} onClick={onClose}>
          <Icon name={'close'} color={'black'} size={'small'} />
        </Button>
      </div>
    </div>
  );
};

export default Container;