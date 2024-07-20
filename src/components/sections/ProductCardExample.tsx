import React from 'react';
import ProductCard from '../system/ProductCard';
import bike from '../../assets/bike.webp';
import tent from '../../assets/tent.webp';
import { ContainerSection } from '../system/Containers';
import Icon from '../system/Icon';
import { useTranslation } from 'react-i18next';

/* ToDo: Redo this with import of data and .map functions and translations */

const ProductCardExample: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <ContainerSection width="small" centred>
        <h1>{t('card-example')}</h1>
        <Icon name="lightMode" centred color="blue" size="huge" animate />
      </ContainerSection>
      <ContainerSection>
        <ProductCard
          id="1"
          image={tent}
          title="Product 1"
          description="Short description of Product 1"
          fullDescription="Detailed description of Product 1. This product is amazing and has many features..."
          price={19.99}
          options={['Option 1', 'Option 2', 'Option 3']}
        />
        <ProductCard
          id="2"
          image={bike}
          title="Product 2"
          description="Short description of Product 2"
          fullDescription="Detailed description of Product 2. This product is even more amazing and has even more features..."
          price={29.99}
          options={['Option A', 'Option B', 'Option C']}
        />
      </ContainerSection>
    </>
  );
};

export default ProductCardExample;