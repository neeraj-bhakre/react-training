import React, { useState } from 'react';
import AppRouter from './AppRouter';
import { CartProvider } from './CartContext';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart(prevCart => [...prevCart, book]);
  };

  return (
    <CartProvider value={{ cart, addToCart }}>
      <AppRouter />
    </CartProvider>
  );
}

export default App;