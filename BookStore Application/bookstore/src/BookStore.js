import React from 'react';
import './BookStore.css';
import { useCart } from './CartContext'; // Import the useCart hook

const BookStore = () => {
  const { addToCart } = useCart(); // Use the addToCart function from the useCart hook

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

 // const addToCart = (book) => {
 // console.log('Added ₹{book.title} to cart.', book);
 // };

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-item">
          <span>{book.title}</span>
          <img src={book.image} alt={book.title} />
          <p>{book.description}</p>
          <p>₹{book.price}</p>
          <button onClick={() => addToCart(book)} className="add-to-cart-button">Add to cart</button>

        </div>
      ))}
    </div>
  );
};

export default BookStore;