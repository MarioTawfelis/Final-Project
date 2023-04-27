import React, { useState, useEffect } from "react";
import Summary from "./summary";
import { formatCurrency } from "./formatCurrency";
import Categories from "../../../categories.json";
import Category from "../productsList/Category";
import Products from "../../../products.json";
// import Header from "./header";
import '/src/pages/checkOut/checkOut.css'



function ProductList2({ onChangeProductQuantity, onRemoveProduct }) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch categories from the JSON file
    fetch("./categories.json")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // Fetch products from the JSON file
    fetch("./products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  function handleAddToBasket(products) {
    setProducts([...products, ProductsToAdd]);
  }

  function handleViewProduct(products) {
    window.open(products.fields.image, "_blank");
  }

  return (
    <section className="container">
      {/* <Header itemCount={products.length} /> */}

      <ul className="categories">
        {categories.map((category) => {
          console.log(category);
          return <Category key={category.pk} category={category.name} />;
        })}
      </ul>

      <ul className="products">
        {products.map((products, index) => {
          return (
            <li className="row" key={products.pk}>
              <div className="col left">
                <div className="thumbnail">
                  <a href="#">
                    <img src={products.fields.image_url} alt={products.fields.name} />
                  </a>
                </div>
                <div className="detail">
                  <div className="name">
                    <a href="#">{products.fields.name}</a>
                  </div>
                  <div className="description">{products.fields.description}</div>
                  <div className="price">{formatCurrency(products.fields.price)}</div>
                </div>
              </div>

              <div className="col right">
                <div className="quantity">
                  <input
                    type="text"
                    className="quantity"
                    step="1"
                    value={products.fields.quantity}
                    onChange={(event) =>
                      onChangeProductQuantity(products.pk, event)
                    }
                  />
                </div>

                <div className="remove">
                  <svg
                    onClick={() => onRemoveProduct(products.pk)}
                    version="1.1"
                    className="close"
                    x="0px"
                    y="0px"
                    viewBox="0 0 60 60"
                    enableBackground="new 0 0 60 60"
                  >
                    <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                  </svg>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <Summary products={products} />
    </section>
  );
}

export default ProductList2;
