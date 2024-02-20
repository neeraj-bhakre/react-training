// HomeComponent.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeComponent = () => {
  const navigate = useNavigate();
       
  const handleButtonClick = () => {
    navigate('/book'); // navigates to BookDetailsComponent
  };  
     
//   return (
//   //   <div>
//   //     <h2>Home Component</h2>
//   //     <button onClick={handleButtonClick}>Go to Book Details</button>
//   //   </div>
//    );
 };

export default HomeComponent; 