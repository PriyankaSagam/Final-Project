require('dotenv').config();
//connect to the database
require('./database.cjs');

//models
// const Category = require('../models/category.cjs');
const Item = require('./models/item.cjs');

(async function() {

  // await Category.deleteMany({});
  
  // const categories = await Category.create([
  //   {name: 'Bracelets', sortOrder: 10},
  //   {name: 'Necklace', sortOrder: 20},
  //   {name: 'Rings', sortOrder: 30},
    
  // ]);

  await Item.deleteMany({});
  const items = await Item.create([
     
      {name: 'brace4', imageurl:"./images/brace4.jpg",  price: 58.98},
      {name: 'brace3', imageurl:"./images/brace3.jpg",  price: 45.84},
      {name: 'brace2', imageurl:"./images/brace2.jpg",  price: 259.90},
      {name: 'brace1', imageurl:"./images/brace1.jpg",  price: 75.97},
      
      // {name: 'neck1', imageurl: "./images/neck1.jpg", category: categories[1], price: 120.95},
      // {name: 'neck2', imageurl:"./images/neck2.jpg", category: categories[1], price: 153.94},
      // {name: 'neck3', imageurl:"./images/neck3.jpg", category: categories[1], price: 158.98},
      // {name: 'neck4', imageurl:"./images/neck4.jpg", category: categories[1], price: 45.84},
     
      // {name: 'ring1', imageurl: "./images/ring1.jpg", category: categories[2], price: 620.95},
      // {name: 'ring2', imageurl:"./images/ring2.jpg", category: categories[2], price: 353.94},
      // {name: 'ring3', imageurl:"./images/ring3.jpg", category: categories[2], price: 158.98},
      // {name: 'ring4', imageurl:"./images/ring4.jpg", category: categories[2], price: 450.84},
    
  ]);

  console.log(items)

  process.exit();

})();