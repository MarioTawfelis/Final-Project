import React from "react";

const Product = (props) => {
  return (
    <div className="product-item">
      <img
        src={props.url}
        alt="product item image"
      />
      <h3>{props.name}</h3>
      <p>
        {props.description}
      </p>
      <button>VIEW ITEM</button>
    </div>
  );
};

export default Product;