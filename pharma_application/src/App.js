import React from 'react';
import AppRouter from './AppRouter';
import { CartProvider } from './CartContext';

const App = () => {
  return (
    <CartProvider>
      <>
        <AppRouter />
      </>
    </CartProvider>
  );
};

export default App;