import React from 'react';
import { useCart } from './CartContext';
import './styles.css';
import './ProductList.css';

const ProductList = () => {
  const { addToCart } = useCart();

  const pharmaProducts = [
    {
      id: 1,
      name: 'Antiseptic Hand Gel',
      price: 100,
      description: 'Keep your hands clean and protected.',
      image: 'Antiseptic_Hand_Gel.png'
    },
    {
      id: 2,
      name: 'Pain Relief Tablets',
      price: 75,
      description: 'Relieve pain and discomfort with these tablets.',
      image: 'Pain Relief Tablets.jpg'
    },
    {
      id: 3,
      name: 'Vitamin C Supplements',
      price: 125,
      description: 'Boost your immune system with Vitamin C supplements.',
      image: 'Vitamin C Supplements.jpg'
    },
    {
      id: 4,
      name: 'Allergy Relief Syrup',
      price: 115,
      description: 'Effectively manage and relieve allergy symptoms.',
      image: 'Allergy Relief Syrup.jpg'
    },
  ];

  return (
    <div className="pharma-product-list">
      <h2>Products</h2>
      <div className="product-grid">
        {pharmaProducts.map((product) => (
          <div key={product.id} className="pharma-product-item">
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <span>{product.name}</span>
              <p>{product.description}</p>
              <p className="product-price">₹{product.price}</p>
              <button onClick={() => addToCart(product)} className="add-to-cart-button">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;