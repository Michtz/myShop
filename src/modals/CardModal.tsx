import React, { useState, useEffect } from 'react';
import styles from '../styles/modals/productModal.module.scss';
import Button, { ButtonContainer } from '../components/system/Button';
import { useTranslation } from 'react-i18next';
import Input from '../components/system/Input';
import { useForm } from 'react-hook-form';
import { FormRow } from '../components/system/Form';

interface ProductModalProps {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  options?: string[];
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  id,
  image,
  title,
  description,
  price,
  options,
  onClose,
}) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 300); // Wait for animation to finish
  };

  return (
    <div
      className={`${styles['modalOverlay']} ${isOpen ? styles['open'] : ''}`}
      onClick={handleClose}
    >
      <div className={styles['modal']} onClick={(e) => e.stopPropagation()}>
        <img src={image} alt={title} className={styles['modalImage']} />
        <div className={styles['modalContent']}>
          <h2>{title}</h2>
          <p>{showFullDescription ? description : `${description.slice(0, 100)}...`}</p>
          <ButtonContainer>
            <Button
              onClick={() => setShowFullDescription(!showFullDescription)}
              children={showFullDescription ? 'Show Less' : 'Read More'}
            />
          </ButtonContainer>

          <p className={styles['price']}>{price.toFixed(2)} €</p>
          {options && (
            <div className={styles['options']}>
              <h4>Options:</h4>
              <ul>
                {options.map((option, index) => (
                  <li key={index}>
                    {' '}
                    <FormRow>
                      {' '}
                      <Input label={option} type={'radio'} />
                    </FormRow>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <ButtonContainer>
            <Button className={styles['addToCart']} children={t('add-to-chart')} />
          </ButtonContainer>
        </div>
        <button className={styles['closeButton']} onClick={handleClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default ProductModal;