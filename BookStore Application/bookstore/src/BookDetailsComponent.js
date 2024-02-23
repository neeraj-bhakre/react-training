import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookStore from './BookStore';

const BookDetailsComponent = () => {
  const navigate = useNavigate();

  const goToNestedRoute = () => {
    navigate('/');
  }

  return (
    <div>
      <h2>Book Details Component</h2>
      <button onClick={goToNestedRoute}>Back To Home</button>
      <BookStore />;
      
    </div>
  );
}

export default BookDetailsComponent;