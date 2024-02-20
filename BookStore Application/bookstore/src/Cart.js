// Cart.js
import React from 'react';

const Cart = ({ cartItems }) => (
  <div>
    {cartItems.map((item) => (
      <div key={item.id}>
        <h2>{item.title}</h2>
        <p>{item.quantity}</p>
      </div>
    ))}
  </div>
);

export default Cart;