import React, { PropsWithChildren } from 'react';

interface FormProps extends React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  className?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLFormElement>) => void;
}

/**
 * Form system component can be used as a wrapper for a form
 */

const Form: React.FC<FormProps> = ({ className = '', onSubmit, onKeyDown, ...props }): JSX.Element => {
  return <form className={className} {...props} />;
};

/**
 * FormRow system component which can be used to specify a row in a form. Rows defined
 * in a FormRow will vertically collapse as soon as the screen width is too small for responsiveness' sake
 */

export const FormRow: React.FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return <div children={children} />;
};

export default Form;