import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookDetailsComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/book/nested');
  }

  return (
    <div>
      <h2>Book Details Component</h2>
      <button onClick={handleClick}>Go to Nested Route</button>
    </div>
  );
}

export default BookDetailsComponent;