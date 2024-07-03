// reducers/ordersReducer.js

const initialState = {
    orders: [],
  };
  
  const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ORDER':
        // Add order logic
        return { ...state, orders: [...state.orders, action.payload] };
      case 'REMOVE_ORDER':
        // Remove order logic
        return { ...state, orders: state.orders.filter(order => order.id !== action.payload.id) };
      default:
        return state;
    }
  };
  
  export default ordersReducer;
  