// Book.js
import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions';

const Book = ({ book, addToCart }) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <button onClick={() => addToCart(book)}>Add to cart</button>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart
};

export default connect(null, mapDispatchToProps)(Book);