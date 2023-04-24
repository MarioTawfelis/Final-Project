import React, { useState } from 'react';
import products from './products.json'; // Importing the products data from a JSON file
import './ProductListPage.css'; // Importing a CSS file for styling

function ProductList() {
  const [basket, setBasket] = useState([]); // Defining a state variable for the basket of selected products

  function handleAddToBasket(product) { // Event handler function for adding a product to the basket
    setBasket([...basket, product]); // Updating the basket state variable by adding the selected product to it
  }

  function handleViewProduct(product) { // Event handler function for opening the product page in a new tab
    window.open(product.fields.product_url, '_blank');
  }

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-list">
        {/* Mapping over the imported products data and rendering a component for each product */}
        {products.map(product => (
          <div key={product.pk} className="product">
            <img src={product.fields.image_url} alt={product.fields.name} />
            <h2>{product.fields.name}</h2>
            <p>{product.fields.description}</p>
            <p>Price: ${product.fields.price.toFixed(2)}</p>
            {/* Adding a button with an event handler to view the selected product */}
            <button onClick={() => handleViewProduct(product)}>View Product</button>            
            {/* Adding a button with an event handler to add the selected product to the basket */}
            <button onClick={() => handleAddToBasket(product)}>Add to Basket</button>

          </div>
        ))}
      </div>
      <ul>
        {/* Mapping over the selected products in the basket and rendering a list item for each */}
        {basket.map(product => (
          <li key={product.pk}>{product.fields.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
