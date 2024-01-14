// CartContext.js
import React, { createContext, useReducer, useContext } from 'react';

// Define the initial state
const initialState = {
  cartItems: [],
};

// Create the CartContext
const CartContext = createContext();

// Create the CartProvider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};



const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cartItems.find(item => item.name === action.payload.name);

      if (existingItem) {
        // Item already exists in the cart, update quantity
        const updatedCartItems = state.cartItems.map(item =>
          item.name === action.payload.name ? { ...item, quantity: item.quantity + 1 } : item
        );

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        // Item does not exist in the cart, add with quantity 1
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    // ... (other cases if needed)

    default:
      return state;
  }
};