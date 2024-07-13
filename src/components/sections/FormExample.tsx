import React from 'react';
import { useTranslation } from 'react-i18next';
import { ContainerSection, ContainerSectionForm } from '../system/Containers';
import { useForm } from 'react-hook-form';
import { FormRow, FormTitle } from '../system/Form';
import Input from '../system/Input';
import { ExampleData } from '../../types/common';
import Button, { ButtonContainer } from '../system/Button';
import { useExampleData } from '../../hook/ExampleDataHook';
import { useFeedback } from '../../hook/FeedbackHook';
import Icon from '../system/Icon';

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
  const { showFeedback } = useFeedback();

  const { register, handleSubmit } = useForm<FormFields>({
    mode: 'onChange',
    defaultValues: getDefaultValues(exampleData),
  });

  const onSubmit = async (data: FormFields) => {
    try {
      const dataAsString: string = JSON.stringify(data);
      sessionStorage.setItem('userData', dataAsString);
      showFeedback(t('feedback.data-saved-success'), 'success');
    } catch (e) {
      showFeedback(t('feedback.data-saved-error'), 'error');
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(onSubmit)();
  };

  return (
    <>
      <ContainerSection width="small" centred>
        <h1>{t('formExample')}</h1>
        <Icon name="lightMode" centred color="green" size="huge" animate />
      </ContainerSection>
      <ContainerSectionForm width={'small'} onSubmit={handleFormSubmit}>
        <FormTitle title={t('register')} description={t('register-description')} />
        <FormRow>
          <Input
            label={t('input')}
            fullWidth
            placeholder={t('name')}
            inputProps={register('name', { required: true })}
            disabled={false}
          />
        </FormRow>
        <FormRow>
          <Input
            required
            label={t('email')}
            fullWidth
            inputProps={register('email', { required: false })}
            disabled={false}
          />
        </FormRow>
        <FormRow>
          <Input
            required
            type={'password'}
            label={t('password')}
            fullWidth
            placeholder={'********'}
            inputProps={register('password', { required: false })}
            disabled={false}
          />
        </FormRow>
        <FormRow>
          <Input
            type={'range'}
            required
            label={t('slider')}
            fullWidth
            placeholder={'********'}
            inputProps={register('name', { required: false })}
            disabled={false}
          />
        </FormRow>
        <FormRow>
          <Input
            type={'radio'}
            label={t('checkbox')}
            alignContent={'start'}
            required
            inputProps={register('name', { required: false })}
            disabled={false}
          />
        </FormRow>
        <ButtonContainer position={'center'}>
          <Button type={'submit'} color={'secondary'}>
            {t('login')}
          </Button>
          <Button type={'submit'} children={t('register')}/>
        </ButtonContainer>
      </ContainerSectionForm>
    </>
  );
};

export default FormExample;