import React from 'react';
import ProductCard from '../system/Card';
import bike from '../../assets/bike.webp';
import tent from '../../assets/tent.webp';

const ProductCardExample: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
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
      {/* Add more ProductCards as needed */}
    </div>
  );
};

export default ProductCardExample;