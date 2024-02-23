import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const navigateToProductDetails = () => {
    navigate('/product-details');
  };

  return (
    <div>
      <button onClick={navigateToProductDetails}>Go to Product Details</button>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default Home;