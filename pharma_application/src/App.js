import React from 'react';
import AppRouter from './AppRouter';
import ProductList from './ProductList';
import Cart from './Cart';
import { CartProvider } from './CartContext';

const App = () => {
  return (
    <CartProvider>
      <div>
        <h1>Pharma Application</h1>
        <AppRouter />
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;