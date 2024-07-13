import React, { useState } from 'react';
import styles from '../../styles/system/card.module.scss';
import ProductModal from '../../modals/CardModal';
import Image from './Image';

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  fullDescription: string;
  options?: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  description,
  price,
  fullDescription,
  options,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className={styles['card']} onClick={() => setIsModalOpen(true)}>
        <Image src={image} alt={title} className={styles['cardImage']} />
        <div className={styles['cardContent']}>
          <h3>{title}</h3>
          <p>{description}</p>
          <p className={styles['price']}>{price.toFixed(2)} €</p>
        </div>
      </div>
      {isModalOpen && (
        <ProductModal
          id={id}
          image={image}
          title={title}
          description={fullDescription}
          price={price}
          options={options}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default ProductCard;