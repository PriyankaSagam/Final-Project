// CartDisplay.js
import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';

const CartDisplay = () => {
  const { state } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {state.cartItems.map(item => (
          <li key={item.id}> {item.name} {item.price} - Quantity: {item.quantity} </li>
        ))}
      </ul>
    </div>
  );
};

export default CartDisplay;
