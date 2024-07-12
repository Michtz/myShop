import React, { MutableRefObject, PropsWithChildren, useRef } from 'react';
import style from '../../styles/system/form.module.scss';
import { IContainerProps, ContainerWidth } from '../../types/common';

interface FormProps
  extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  className?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLFormElement>) => void;
}

/**
 * Form system component can be used as a wrapper for a form
 */

const Form: React.FC<FormProps> = ({
  className = '',
  onSubmit,
  onKeyDown,
  ...props
}): JSX.Element => {
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
    <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} className={className} {...props} />
  );
};

/**
 * FormRow system component which can be used to specify a row in a form. Rows defined
 * in a FormRow will vertically collapse as soon as the screen width is too small for responsiveness' sake
 */

export const FormRow: React.FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return <div>{children}</div>;
};

/**
 * FormTitle system component which can be used to specify a title in a form
 */
interface FormTitleProps extends PropsWithChildren {
  title: string;
  description?: string;
}

export const FormTitle: React.FC<FormTitleProps> = ({ title, description }): JSX.Element => {
  return (
    <div className={style['form-title']}>
      <h2>{title}</h2>
      {description && <p className={style['form-description']}>{description}</p>}
    </div>
  );
};

/**
 * ContainerSectionForm system component can be used as a wrapper for a form in a container section
 */
interface ContainerSectionProps extends IContainerProps {
  width?: ContainerWidth;
}

export const ContainerSectionForm: React.FC<ContainerSectionProps> = ({
  width,
  children,
  ...rest
}): JSX.Element => {
  return (
    <Form
      data-width={width}
      className={`${style['container-section-form']} ${width ? style[`width-${width}`] : ''}`}
      {...rest}
    >
      {children}
    </Form>
  );
};

export default Form;