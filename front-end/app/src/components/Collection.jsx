import React from "react";
import Product from "./Product";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Collection = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const productData = [
    {
      pk: 1,
      model: "core.product",
      fields: {
        sku: "pp5001340155",
        name: "Arizona Original Bootcut Jeans",
        description:
          'Bootcut jeans in our just-right original fit are comfortable and look great too.',
        price: 53.99,
        category: 6,
        rating: 4.6,
        image_url:
          "http://s7d9.scene7.com/is/image/JCPenney/DP0709201205510679M.tif?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2&op_usm=1.5,.8,0,0&resmode=sharp",
        image: "DP0709201205510679M.jpg",
      },
    },
    {
      pk: 2,
      model: "core.product",
      fields: {
        sku: "pp5001600425",
        name: "Liz Claiborne Audra Classic Fit Straight Leg Pants",
        description:
          'Straight-leg styling and on-the-job comfort make our Audra pants a flattering business decision.',
        price: 58.99,
        category: 4,
        rating: 4.6,
        image_url:
          "http://s7d9.scene7.com/is/image/JCPenney/DP0113201617034987M.tif?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2&op_usm=1.5,.8,0,0&resmode=sharp",
        image: "DP0113201617034987M.jpg",
      },
    },
    {
      pk: 3,
      model: "core.product",
      fields: {
        sku: "pp5001730010",
        name: "Royal Velvet Matte Satin Square 3-pc. Coverlet Set",
        description:
          'Add a 5-star resort feel to your bedroom with the elegant Matte Satin Square coverlet set, featuring modern embroidered squares and flanged trim.',
        price: 205.99,
        category: 2,
        rating: 4.7,
        image_url:
          "http://s7d9.scene7.com/is/image/JCPenney/DP1230201417013175M.tif?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2&op_usm=1.5,.8,0,0&resmode=sharp",
        image: "DP1230201417013175M.jpg",
      },
    },
    {
      pk: 4,
      model: "core.product",
      fields: {
        sku: "pp5001890157",
        name: "Gibson Infinite Glaze 16-pc. Dinnerware Set",
        description:
          'An exhibition in contrast, this dinnerware sets simple, clean design is perfect for both everyday use and special occasions.',
        price: 169.99,
        category: 7,
        rating: 3.0,
        image_url:
          "http://s7d9.scene7.com/is/image/JCPenney/DP0716201503423610M.tif?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2&op_usm=1.5,.8,0,0&resmode=sharp",
        image: "DP0716201503423610M.jpg",
      },
    },
    {
      pk: 5,
      model: "core.product",
      fields: {
        sku: "pp5002111605",
        name: "Simply Calphalon Enameled Cast Iron Panini Pan",
        description:
          "Durable enameled cast iron construction allows the panini pan to heat evenly, so you can whip up a meal with ease and complete confidence.",
        price: 232.99,
        category: 7,
        rating: 5.0,
        image_url:
          "http://s7d9.scene7.com/is/image/JCPenney/DP1115201210371197C.tif?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2&op_usm=1.5,.8,0,0&resmode=sharp",
        image: "DP1115201210371197C.jpg",
      },
    },
  ];

 const product = productData.map(item => (
  < Product name={item.fields.name} 
            url={item.fields.image_url} 
            description={item.fields.description} />
 ))

  return (
    <div className="collection">
      <h1>FROM THE COLLECTION</h1>
      <div className="product-items">
        <Carousel responsive={responsive}>
          {product}
        </Carousel>
      </div>
    </div>
  );
};

export default Collection;
