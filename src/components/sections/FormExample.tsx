import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTechnologies } from '../../hook/TechnologieHook';
import style from '../../styles/sections/formExample.module.scss';
import { ContainerSectionForm } from '../system/ContainerSectionForm';
import { useForm } from 'react-hook-form';
import { FormRow } from '../system/Form';
import Input from '../system/Input';
import { ExampleData } from '../../types/common';
import Button, { ButtonContainer } from '../system/Button';
import { useExampleData } from '../../hook/ExampleDataHook';

interface FormFields {
  name: string;
  email: string;
  password: string;
}

const getDefaultValues = (exampleData: ExampleData = {} as any): FormFields => {
  const storageData: string | null = localStorage.getItem('userData');
  if (storageData) {
    const userData = JSON.parse(storageData);
    return {
      name: userData.name || '',
      email: userData.email || '',
      password: userData.password || '',
    };
  } else {
    return {
      name: exampleData.formExample?.name || '',
      email: exampleData.formExample?.email || '',
      password: exampleData.formExample?.password || '',
    };
  }
};

const FormExample: React.FC = () => {
  const { t } = useTranslation();
  const exampleData: ExampleData = useExampleData();

  const { register, reset, formState, handleSubmit, setValue } = useForm<FormFields>({
    mode: 'onChange',
    defaultValues: getDefaultValues(exampleData),
  });

  const onSubmit = async (data: FormFields) => {
    try {
      const dataAsString: string = JSON.stringify(data);
      localStorage.setItem('userData', dataAsString);
      console.log(localStorage.getItem('userData'));
    }catch (e) {
      console.error(e);
    }

  };

  return (
    <ContainerSectionForm onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Input
          required
          label={t('name')}
          fullWidth
          placeholder={t('name')}
          inputProps={register('name', { required: true })}
          /*  {...transformFieldError(errors.name)}*/
          disabled={false}
        />
      </FormRow>
      <FormRow>
        <Input
          label={t('email')}
          fullWidth
          inputProps={register('email', { required: false })}
          /*  {...transformFieldError(errors.name)}*/
          disabled={false}
        />
      </FormRow>
      <FormRow>
        <Input
          label={t('password')}
          fullWidth
          hiddenContent
          placeholder={"********"}
          inputProps={register('password', { required: false })}
          /*  {...transformFieldError(errors.name)}*/
          disabled={false}
        />
      </FormRow>
      <ButtonContainer>
        <Button type={'submit'} children={'test'} />
      </ButtonContainer>
    </ContainerSectionForm>
  );
};

export default FormExample;