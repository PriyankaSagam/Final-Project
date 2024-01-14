import React, { useEffect, useState } from 'react';
import './ProductList.css'

const ProductList = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <div className='braclet'>
      <h1>Product List</h1>
      <hr />
      <div className="braclet-item">
      <ul>
        {products.map(product => (
          <li key={product._id}>
            {product.name}  ${product.price} <img src={product.image}></img>
            
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default ProductList;
