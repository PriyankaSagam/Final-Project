// CartDisplay.js
import React, { useEffect, useState } from 'react';
import { useCart } from './CartContext';

const CartDisplay = () => {
  const { state, dispatch } = useCart();
  const [selectedItemName, setSelectedItemName] = useState(null);

  const handleQuantityChange = (itemName, newQuantity, newPrice) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { name: itemName, quantity: newQuantity, price: newPrice } });
  };

  const handleRemoveItem = (name) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { name } });
  };

  const calculateTotalPrice = (item) => {
    return item.price * item.quantity; 
  };
  const handleCheckout = () => {
    // Implement your checkout logic here
    console.log('Checkout logic goes here');
  };
  const handleRadioChange = (itemName) => {
    setSelectedItemName(itemName);
  };


  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {state.cartItems.map(item => (
          <li key={item.name} className={item.name === selectedItemName ? 'selected' : ''}>
          <label1>
            <input
              type="radio"
              name="selectedItem"
              checked={item.name === selectedItemName}
              onChange={() => handleRadioChange(item.name)}
            />
              {item.name} - Quantity: {item.quantity} - Total Price: ${calculateTotalPrice(item)}
            </label1>
            {item.name === selectedItemName && (
              <div>
              <span>Edit quantity:</span>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.name, parseInt(e.target.value), item.price)}
              />
              </div>)}
            <button onClick={() => handleRemoveItem(item.name)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
    );
   };

export default CartDisplay;
