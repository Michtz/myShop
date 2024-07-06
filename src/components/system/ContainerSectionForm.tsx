import React, { HTMLAttributes, PropsWithChildren } from 'react';
import Form from '../system/Form';
import style from '../../styles/system/containerSectionForm.module.scss';


interface ContainerSectionProps extends PropsWithChildren {
  background?: 'background-container' | 'background';
  gap?: boolean;
  padding?: boolean;
}

interface ContainerSectionFormProps
  extends ContainerSectionProps,
    HTMLAttributes<HTMLFormElement> {}

/**
 * ContainerSectionForm system component which contains a section of the content of a container which can be visually differentiated from other sections. <br>
 * The difference to the <ContainerSection /> is the <ContainerSectionForm /> can be directly used like the <Form />
 * component
 */

export const ContainerSectionForm: React.FC<ContainerSectionFormProps> = ({ padding, gap, ...rest }): JSX.Element => {
  return (
    <Form
      data-cy={'container-section'}
      data-padding={padding}
      data-gap={gap}
      data-cy-form={true}
      className={style['container-section-container']}
      {...rest}
    />
  );
};