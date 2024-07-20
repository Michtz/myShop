import React from 'react';
import { useTranslation } from 'react-i18next';
import { ContainerSection, ContainerSectionForm } from '../system/Containers';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormRow, FormTitle } from '../system/Form';
import Input from '../system/Input';
import { ExampleData, FormFields } from '../../types/common';
import Button, { ButtonContainer } from '../system/Button';
import { useExampleData } from '../../hook/ExampleDataHook';
import { useFeedback } from '../../hook/FeedbackHook';
import Icon from '../system/Icon';


/*ToDo: Redo this old example with the error management */

// Example for a import via api
const getDefaultValues = (exampleData: ExampleData): FormFields => {
  const storageData: string | null = localStorage.getItem('userData');
  if (storageData) return JSON.parse(storageData);

  return {
    name: exampleData.formExample?.name || '',
    email: exampleData.formExample?.email || '',
    password: exampleData.formExample?.password || '',
    slider: '60',
    checkbox: false,
  };
};

const FormExample: React.FC = () => {
  const { t } = useTranslation();
  const exampleData: ExampleData = useExampleData();
  const { showFeedback } = useFeedback();

  const { register, handleSubmit } = useForm<FormFields>({
    mode: 'onChange',
    defaultValues: getDefaultValues(exampleData),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data:FormFields):Promise<void> => {
    try {
      localStorage.setItem('userData', JSON.stringify(data));
      showFeedback(t('feedback.data-saved-success'), 'success');
    } catch (e) {
      showFeedback(t('feedback.data-saved-error'), 'error');
    }
  };

  return (
    <>
      <ContainerSection width="small" centred>
        <h1>{t('formExample')}</h1>
        <Icon name="lightMode" centred color="green" size="huge" animate />
      </ContainerSection>
      <ContainerSectionForm width={'small'} onSubmit={handleSubmit(onSubmit)}>
        <FormTitle title={t('register')} description={t('register-description')} />
        <FormRow>
          <Input
            label={t('input')}
            fullWidth
            placeholder={t('name')}
            inputProps={register('name', { required: true })}
          />
        </FormRow>
        <FormRow>
          <Input
            required
            label={t('email')}
            fullWidth
            inputProps={register('email', { required: true })}
          />
        </FormRow>
        <FormRow>
          <Input
            required
            type={'password'}
            label={t('password')}
            fullWidth
            placeholder={'********'}
            inputProps={register('password', { required: true })}
          />
        </FormRow>
        <FormRow>
          <Input
            type={'range'}
            label={t('slider')}
            fullWidth
            inputProps={register('slider', { required: true })}
          />
        </FormRow>
        <FormRow>
          <Input
            type={'radio'}
            label={t('checkbox')}
            alignContent={'start'}
            inputProps={register('checkbox', { required: true })}
          />
        </FormRow>
        <ButtonContainer position={'center'}>
          <Button type={'submit'} color={'secondary'}>
            {t('login')}
          </Button>
          <Button type={'submit'}>{t('register')}</Button>
        </ButtonContainer>
      </ContainerSectionForm>
    </>
  );
};

export default FormExample;