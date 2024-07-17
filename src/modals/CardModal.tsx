import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/modals/productModal.module.scss';
import Button, { ButtonContainer } from '../components/system/Button';
import Input from '../components/system/Input';
import { ContainerSectionForm, ModalContainer } from '../components/system/Containers';
import Image from '../components/system/Image';

interface ProductModalProps {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  options?: Array<string>;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  image,
  title,
  description,
  price,
  options,
  onClose,
}) => {
  const { t } = useTranslation();
  const [showFullDescription, setShowFullDescription] = useState(false);


  const toggleDescription = () => setShowFullDescription(!showFullDescription);

  const renderDescription: JSX.Element = (
    <>
      <p>{showFullDescription ? description : `${description.slice(0, 100)}...`}</p>
      <ButtonContainer>
        <Button onClick={toggleDescription}>
          {showFullDescription ? t('show-less') : t('read-more')}
        </Button>
      </ButtonContainer>
    </>
  );

  const renderOptions: JSX.Element = options ? (
    <ContainerSectionForm noMargin noPadding>
      <h4>{t('options')}</h4>
      {options?.map((option, index) => (
        <Input key={index} alignContent="start" label={option} type="radio" />
      ))}
    </ContainerSectionForm>
  ) : (
    <></>
  );

  const content: JSX.Element = (
    <div className={styles['modal-content']}>
      <h2>{title}</h2>
      {renderDescription}
      <p className={styles['price']}>{`${price.toFixed(2)} ${t('fr.')}`}</p>
      {renderOptions}
      <ButtonContainer>
        <Button className={styles['add-to-cart']}>{t('add-to-cart')}</Button>
      </ButtonContainer>
    </div>
  );

  return (
    <ModalContainer onClose={onClose}>
      <Image src={image} alt={title} className={styles['product-modal-image']} />
      {content}
    </ModalContainer>
  );
};

export default ProductModal;