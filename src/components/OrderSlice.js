// OrderContext.js
import React, { createContext, useContext, useReducer } from 'react';

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const initialState = {
    orders: [],
  };

  const orderReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ORDER':
        return {
          ...state,
          orders: [...state.orders, action.payload],
        };
      case 'CLEAR_ORDERS':
        return {
          ...state,
          orders: [],
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(orderReducer, initialState);

  return (
    <OrderContext.Provider value={{ state, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};
