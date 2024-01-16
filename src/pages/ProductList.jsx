import React, { useEffect, useState } from 'react';
import { useCart  } from './CartContext';
import './ProductList.css'


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { dispatch } = useCart();

  useEffect(() => {
    // Fetch products from the backend using the fetch function
    fetch('http://localhost:3001/api/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
      <div>
      <ul className="braclet-item">
          {products.map(product => (
          
            <li key={product._id}>
              <div>
                {product.id} {product.name}
              </div>
              <div>
                <img src={product.image} alt={product.name}/>
              </div>
              <div>
            ${product.price}
            </div>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
            </li>
            
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
