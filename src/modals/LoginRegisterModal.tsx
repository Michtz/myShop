import React from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonContainer } from '../components/system/Button';
import Input from '../components/system/Input';
import { ContainerSectionForm, ModalContainer } from '../components/system/Containers';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormFields } from '../types/common';
import { useFeedback } from '../hook/FeedbackHook';

interface LoginRegisterModalProps {
  onClose: () => void;
}

const LoginRegisterModal: React.FC<LoginRegisterModalProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const { showFeedback } = useFeedback();
  const { register, handleSubmit } = useForm<FormFields>({});

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      localStorage.setItem('login-example', JSON.stringify(data));
      onClose();
      showFeedback(t('feedback.data-saved-success'), 'success');
    } catch (e) {
      showFeedback(t('feedback.data-saved-error'), 'error');
    }
  };

  return (
    <ModalContainer onClose={onClose}>
      <ContainerSectionForm width={'large'} onSubmit={handleSubmit(onSubmit)}>
        <h1>{t('register')}</h1>
        <Input
          required
          inputProps={register('email', { required: true })}
          fullWidth
          label={t('email')}
          type="email"
        />
        <Input
          required
          inputProps={register('password', { required: true })}
          label={t('password')}
          type="password"
        />
        <ButtonContainer>
          <Button children={t('login')} />
        </ButtonContainer>
      </ContainerSectionForm>
    </ModalContainer>
  );
};

export default LoginRegisterModal;