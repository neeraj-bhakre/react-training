import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookStore from './BookStore';

const BookDetailsComponent = () => {
  const navigate = useNavigate();

  const goToNestedRoute = () => {
    navigate('/book/nested');
  }

  return (
    <div>
      <h2>Book Details Component</h2>
      <button onClick={goToNestedRoute}>Go to Nested Route</button>
      <BookStore />;
      
    </div>
  );
}

export default BookDetailsComponent;