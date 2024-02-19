import React from 'react';
import { useHistory } from 'react-router-dom';

const NavigationComponent = () => {
  const history = useHistory();

  const handleNavigation = () => {
    history.push('/bookdetails'); // Navigate to the '/bookdetails' route
  };

  return (
    <div>
      <h2>Navigation Component</h2>
      <button onClick={handleNavigation}>Go to Book Details</button>
    </div>
  );
};

export default NavigationComponent;