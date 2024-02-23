import React from 'react';
import { useCart } from './CartContext';
import './styles.css';
import './CartContext.css';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className='cart-container'>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <h4 className='cart-container h4'>No items in the cart</h4>
      ) : (
        <div>
          <ul>
            {cart.map(item => (
              <li key={item.id} className='cart-container li'>
                {item.name} - ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
                <div>
                  <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
                </div>
              </li>
            ))}
          </ul>
          <div className='cart-container li'>
            <h4>Total Quantity: {totalQuantity}</h4>
            <h3>Total Price: ₹{totalPrice}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;