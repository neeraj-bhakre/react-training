import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart(prevCart => [...prevCart, book]);
  };

  const removeFromCart = (bookId) => {
    setCart(prevCart => prevCart.filter(book => book.id !== bookId));
  };

  const updateQuantity = (bookId, quantity) => {
    setCart(prevCart => prevCart.map(book => book.id === bookId ? { ...book, quantity } : book));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    return { cart: [] };
  }

  return context;
}