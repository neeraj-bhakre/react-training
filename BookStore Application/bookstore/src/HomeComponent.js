
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeComponent.css';
const HomeComponent = () => {
  const navigate = useNavigate();
       
  const handleButtonClick = () => {
    navigate('/book'); // navigates to BookDetailsComponent
  };  
     
  return (
    <div className='home-container'>
            <button onClick={handleButtonClick}>Go to Book Details</button>
  <img src="BookStore.jpg" alt="description_of_the_image" />
  
</div>
  );
};

export default HomeComponent; 