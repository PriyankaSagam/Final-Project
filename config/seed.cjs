require('dotenv').config();
//connect to the database
require('./database.cjs');

//models
const Product = require('../models/product.cjs');

(async function() {

  await Product.deleteMany({});
  const products = await Product.create([
     
      {name: 'brace4', image:"./images/brace4.jpg",  price: 58.98},
      {name: 'brace3', image:"./images/brace3.jpg",  price: 45.84},
      {name: 'brace2', image:"./images/brace2.jpg",  price: 259.90},
      {name: 'brace1', image:"./images/brace1.jpg",  price: 75.97},
      
      {name: 'neck1', image: "./images/neck1.jpg", price: 120.95},
      {name: 'neck2', image:"./images/neck2.jpg",  price: 153.94},
      {name: 'neck3', image:"./images/neck3.jpg",  price: 158.98},
      {name: 'neck4', image:"./images/neck4.jpg",  price: 45.84},
     
      {name: 'ring1', image: "./images/ring1.jpg", price: 620.95},
      {name: 'ring2', image:"./images/ring2.jpg",  price: 353.94},
      {name: 'ring3', image:"./images/ring3.jpg",  price: 158.98},
      {name: 'ring4', image:"./images/ring4.jpg",  price: 450.84},
    
  ]);

  console.log(products)

  process.exit();

})();