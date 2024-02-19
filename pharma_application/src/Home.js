import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const navigateToProductDetails = () => {
    navigate('/product-details');
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={navigateToProductDetails}>Go to Product Details</button>
      <Link to="/home-component">Go to Home Component</Link>
    </div>
  );
};

export default Home;