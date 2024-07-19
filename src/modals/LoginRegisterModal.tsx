import React from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonContainer } from '../components/system/Button';
import Input from '../components/system/Input';
import { ContainerSectionForm, ModalContainer } from '../components/system/Containers';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormFields } from '../types/common';
import { useFeedback } from '../hook/FeedbackHook';
import { useError } from '../hook/ErrorHook';

interface LoginRegisterModalProps {
  onClose: () => void;
}

const LoginRegisterModal: React.FC<LoginRegisterModalProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const { showFeedback } = useFeedback();
  const { transformFieldError } = useError();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      localStorage.setItem('login-example', JSON.stringify(data));
      onClose();
      showFeedback(t('feedback.data-saved-success'), 'success');
    } catch (e) {
      showFeedback(t('feedback.data-saved-error'), 'error');
    }
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateFieldName = (value: string | undefined): true | string => {
    if (!value) return 'required';
    if (!emailRegex.test(value)) return 'notAEmail';
    return true;
  };

  return (
    <ModalContainer onClose={onClose}>
      <ContainerSectionForm width={'large'} onSubmit={handleSubmit(onSubmit)}>
        <h1>{t('register')}</h1>
        <Input
          label={t('email')}
          required
          inputProps={register('email', { required: 'required', validate: validateFieldName })}
          type="email"
          {...transformFieldError(errors.email?.message ? { type: errors.email.message } : errors.email)}
        />
        <Input
          label={t('password')}
          required
          inputProps={register('password', { required: 'required' })}
          type="password"
          {...transformFieldError(errors.password)}
        />
        <ButtonContainer>
          <Button children={t('register')}/>
        </ButtonContainer>
      </ContainerSectionForm>
    </ModalContainer>
  );
};

export default LoginRegisterModal;