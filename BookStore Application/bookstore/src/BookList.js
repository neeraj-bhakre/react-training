// BookList.js
import React from 'react';

function BookList({ addToCart, cartItems, removeBook, updateQuantity }) {
  const books = [
    { 
      id: 1, 
    title: 'General Knowladge.', 
    price: 19.99, 
    description: 'A book about general knowledge.', 
    image: 'General.jpg'
    },
    { 
      id: 2, 
      title: 'Quick Start Guide to Large Language Models', 
      price: 29.99, 
      description: 'A guide to understanding large language models.', 
      image: 'Quick Start Guide to Large Language Models.jpg' 
    },
    { 
      id: 3, 
      title: 'The Phychology of Money', 
      price: 39.99, 
      description: 'A deep dive into the psychology of money.', 
      image: 'The Phychology of Money.jpg' 
    },
    { 
      id: 4, 
      title: 'Typescript Cookbook', 
      price: 49.99, 
      description: 'A comprehensive guide to TypeScript.', 
      image: "Typescript Cookbook.jpg" 
    },
  ];



  const handleAddToCart = (book) => {
    addToCart(book);
  };

  const handleRemoveBook = (bookId) => {
    removeBook(bookId);
  };

  const handleUpdateQuantity = (bookId, quantity) => {
    updateQuantity(bookId, quantity);
  };

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - ₹{book.price} {book.description} {book.image}{' '}
            <button onClick={() => handleAddToCart(book)} className="add-to-cart-button">
              Add to Cart
            </button>
            {cartItems.some((item) => item.id === book.id) ? (
              <div>
                <button onClick={() => handleRemoveBook(book.id)}>Remove Book</button>
                <input
                  type="number"
                  defaultValue={1}
                  onChange={(e) => handleUpdateQuantity(book.id, e.target.value)}
                />
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
