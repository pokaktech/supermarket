// ContextReducer.js
 import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, { ...action.payload.product, quantity: action.payload.quantity }];
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.id !== action.payload.productId);
    case 'CLEAR_CART':
      return [];
    case 'CHECKOUT':
      return [];
    default:
      return state;
  }
};


export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const addToCart = (product, quantity) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } });
  };

  const removeFromCart = (productId, quantity) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { productId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};