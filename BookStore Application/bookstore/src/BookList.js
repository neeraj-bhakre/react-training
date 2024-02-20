// BookList.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookList = ({ books, addToCart }) => {
  const navigate = useNavigate();

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <button onClick={() => { 
            addToCart(book);
            navigate('/cart');
          }}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookList;