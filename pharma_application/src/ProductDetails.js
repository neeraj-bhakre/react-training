import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ProductDetails = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Product Details</h1>
      <button onClick={navigateToHome}>Go to Home</button>
      <Link to="/product-details-component">Go to Product Details</Link>
    </div>
  );
};

export default ProductDetails;