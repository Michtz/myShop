import React, { MutableRefObject, PropsWithChildren, useRef } from 'react';
import style from '../../styles/system/form.module.scss';
import { ComponentSize } from '../../types/common';

interface FormProps extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  /**
   * Gap size of the form
   * @default "normal"
   */

  gapSize?: ComponentSize;
}

/**
 * Form system component can be used as a wrapper for a form
 */

const Form: React.FC<FormProps> = ({ className = '', gapSize = 'normal', onSubmit, onKeyDown, ...props }): JSX.Element => {
  const locked: MutableRefObject<number> = useRef<number>(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    // This prevents the form from being submitted on enter press
    // When the enter key was pressed less than 10ms before the submit event
    // then the submit event was caused by this key-event and should be
    // prevented
    if (Date.now() - locked.current <= 10) event.preventDefault();
    else if (onSubmit) onSubmit(event);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>): void => {
    if (event.code === 'Enter') locked.current = Date.now();
    if (onKeyDown) onKeyDown(event);
  };

  return (
    <form
      data-cy={'form'}
      onSubmit={handleSubmit}
      onKeyDown={handleKeyDown}
      className={`${style['form-container']} ${className}`}
      data-gap-size={gapSize}
      {...props}
    />
  );
};


interface FormRowProps extends PropsWithChildren {
  /**
   * Boolean whether the items should be spread (justify-content: space-between) over the whole available space
   * @default false
   */

  spread?: boolean;

  /**
   * Gap size of the form row
   * @default "big"
   */

  gapSize?: ComponentSize;
}

/**
 * FormRow system component which can be used to specify a row in a form. Rows defined
 * in a FormRow will vertically collapse as soon as the screen width is too small for responsiveness' sake
 */

export const FormRow: React.FC<FormRowProps> = ({ children, gapSize = 'big', spread = false }): JSX.Element => {
  return <div data-cy={'form-row'} data-spread={spread} className={style['form-row-container']} data-gap-size={gapSize} children={children} />;
};



export default Form;