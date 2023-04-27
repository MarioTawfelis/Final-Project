import React, { useState } from 'react';
import products from '../products.json';
import categories from '../categories.json';
import '../assets/styles/productListPage.css';

function ProductList() {
  const [basket, setBasket] = useState([]);

  function handleAddToBasket(product) {
    setBasket([...basket, product]);
  }

  function handleViewProduct(product) {
    window.open(product.fields.product_url, '_blank');
  }

  // Define a state variable to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState(categories[0].pk);

  // Define a filtered list of products based on the selected category
  const filteredProducts = products.filter(product => product.fields.category === selectedCategory);

  return (
    //Used to create the filter section for the category
    <div>
      <h1>Product List</h1>
      <div className="filter-section">
        <h2>Filter by category:</h2>
        <select value={selectedCategory} onChange={event => setSelectedCategory(parseInt(event.target.value))}>
          {categories.map(category => (
            <option key={category.pk} value={category.pk}>{category.fields.friendly_name}</option>
          ))}
        </select>
      </div>

      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.pk} className="product">
            <img src={product.fields.image_url} alt={product.fields.name} />
            <h3>{product.fields.name}</h3>
            <p>{product.fields.description}</p>
            <button onClick={() => handleAddToBasket(product)}>Add to basket</button>
            <button onClick={() => handleViewProduct(product)}>View product</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
