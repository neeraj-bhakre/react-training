import React, { useEffect } from 'react';
import { useCart } from './CartContext';
// import './Cart.css';

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
   
  // Update the quantities of two books when the component mounts
  useEffect(() => {
    updateQuantity('bookId1', 2); // Replace 'bookId1' with the actual ID of the book
    updateQuantity('bookId2', 3); // Replace 'bookId2' with the actual ID of the book
  }, [updateQuantity]); // Include updateQuantity in the dependency array

  // Calculate the total cost of all products in the cart
  const total = cart.reduce((sum, book) => sum + book.price * (book.quantity || 1), 0);

  return (
    <div>
      <h5>Your Cart</h5>
      {cart.length > 0 ? (
        cart.map((book, id) => (
          <div key={book.id}>
            <img src={book.image} alt={book.title} />
            <h5>{book.title}</h5>
            <p>{book.description}</p>
            <p>₹{book.price * (book.quantity || 1)}</p>
            <input type="number" value={book.quantity || 1} onChange={(e) => updateQuantity(book.id, parseInt(e.target.value))} />
            <button onClick={() => removeFromCart(book.id)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
      <h5>Total: ₹{total}</h5>
    </div>
  );
}

export default Cart;