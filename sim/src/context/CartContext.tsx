import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);
  const clearCart = () => setCart([]);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, totalPrice, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
