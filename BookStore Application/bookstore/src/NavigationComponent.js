// NavigationComponent.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigationComponent = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/targetRoute'); // replace '/targetRoute' with the path you want to navigate to
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Navigate</button>
    </div>
  );
};

export default NavigationComponent;