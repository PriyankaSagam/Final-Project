// CartDisplay.js
import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { getUser } from "../utilities/users-services";
import { useCart } from './CartContext';

const CartDisplay = () => {
  const { state, dispatch } = useCart();
  const [selectedItemName, setSelectedItemName] = useState(null);
  const [checkoutTotal, setCheckoutTotal] = useState(null);
  const [buyTotal, setBuyTotal] = useState(null);
  const [user, setUser] = useState(getUser());

  const handleQuantityChange = (itemName, newQuantity, newPrice) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { name: itemName, quantity: newQuantity, price: newPrice } });
    setSelectedItemName(null);
  };

  const handleRemoveItem = (name) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { name } });
    setSelectedItemName(null);
  };

  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };
  const handleCheckout = () => {
    // Implement your checkout logic here
    const total = state.cartItems.reduce((acc, item) => acc + calculateTotalPrice(item), 0);
    setCheckoutTotal(total);
    setSelectedItemName(null);
  };
  const handleRadioChange = (itemName) => {
    setSelectedItemName(itemName);
  };

  const handleBuy = async () => {
    const total = state.cartItems.reduce((acc, item) => acc + calculateTotalPrice(item), 0);
    setBuyTotal(total);
 
    
    // Send a request to the server to save cart items
    try {
      const response = await fetch( 'http://localhost:3001/api/saveCartItems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${userToken}`,
        },
        body: JSON.stringify({
          userName: user, // Replace with the actual username or get it from user authentication
          cartItems: state.cartItems,
          totalPrice: total,
        }),
      });

      const data = await response.json();
      console.log(data.message);
      setCheckoutTotal(null)
      dispatch({ type: 'CLEAR_CART' });

    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div>
      <h2 className='shopping'>Shopping Cart</h2>
      <ul>
        {state.cartItems.map(item => (
          <li key={item.name} className={item.name === selectedItemName ? 'selected' : ''}>

            <input
              type="radio"
              name="selectedItem"
              checked={item.name === selectedItemName}
              onChange={() => handleRadioChange(item.name)}
            />
              {item.name} - Quantity: {item.quantity} - Total Item Price: ${calculateTotalPrice(item)}
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
      {checkoutTotal !== null && (
        <div>
          <p>Total Price: ${checkoutTotal}</p>
          {/* You can add more information or redirect to a checkout page */}
        </div>
      )}
       <button onClick={handleBuy}>Buy</button>
    </div>
    );
   };

export default CartDisplay;
