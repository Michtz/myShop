import React, { useState } from 'react';
import Button, { ButtonContainer } from './Button';
import LoginRegisterModal from '../../modals/LoginRegisterModal';


const LoginRegister: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleModalToggle = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <ButtonContainer>
        <Button onClick={handleModalToggle} children={'login'} />
      </ButtonContainer>
      {modalOpen && <LoginRegisterModal onClose={handleModalToggle} />}
    </>
  );
};

export default LoginRegister;