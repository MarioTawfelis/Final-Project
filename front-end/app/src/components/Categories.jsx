import React from "react";
import accessories from "../assets/images/bg-accessories.jpg";
import clothing from "../assets/images/bg-clothing.jpg";
import home from "../assets/images/bg-home.jpg";
import tech from "../assets/images/bg-tech.jpg";
import essentials from "../assets/images/Essentials.avif";
import jeans from "../assets/images/Jeans.webp";
import Kitchen from "../assets/images/Kitchen.webp";
import Arrivals from "../assets/images/Arrivals.jpg";
import Shirts from "../assets/images/Shirts.webp";


const Categories = () => {
  return (
    <div className="categories">
      <h1>OUR PRODUCTS</h1>
      <div className="grid-box">
        <div className="category grid-item1">
          <figure>
              <img src={clothing} alt="bg-clothing img-category" />
            <figcaption>
              <h4>Activewear</h4>
              <p>Ante mus blandit sapien sociosqu per consequat ad.</p>
            </figcaption>
          </figure>
        </div>
        <div className="category grid-item2">
          <figure>
            <img src={home} alt="bg-home img-category" />
            <figcaption>
              <h4>Bed & Bath</h4>
              <p>Ante mus blandit sapien sociosqu per consequat ad.</p>
            </figcaption>
          </figure>
        </div>
        <div className="category grid-item3">
          <figure>
            <img src={accessories} alt="bg-clothing img-category" />
            <figcaption>
              <h4>Clearance</h4>
              <p>Ante mus blandit sapien sociosqu per consequat ad.</p>
            </figcaption>
          </figure>
        </div>
        <div className="category grid-item4">
          <figure>
            <img src={tech} alt="bg-home img-category" />
            <figcaption>
              <h4>Deals</h4>
              <p>Ante mus blandit sapien sociosqu per consequat ad.</p>
            </figcaption>
          </figure>
        </div>
        <div className="category grid-item5">
          <figure>
            <img src={essentials} alt="bg-home img-category" />
            <figcaption>
              <h4>Essentials</h4>
              <p>Ante mus blandit sapien sociosqu per consequat ad.</p>
            </figcaption>
          </figure>
        </div>

        <div className="category grid-item6">
          <figure>
            <img src={jeans} alt="bg-home img-category" />
            <figcaption>
              <h4>Jeans</h4>
              <p>Ante mus blandit sapien sociosqu per consequat ad.</p>
            </figcaption>
          </figure>
        </div>
        <div className="category grid-item7">
          <figure>
            <img src={Kitchen} alt="bg-home img-category" />
            <figcaption>
              <h4>Kitchen & Dining</h4>
              <p>Ante mus blandit sapien sociosqu per consequat ad.</p>
            </figcaption>
          </figure>
        </div>
        <div className="category grid-item8">
          <figure>
            <img src={Arrivals} alt="bg-home img-category" />
            <figcaption>
              <h4>New Arrivals</h4>
              <p>Ante mus blandit sapien sociosqu per consequat ad.</p>
            </figcaption>
          </figure>
        </div>
        <div className="category grid-item9">
          <figure>
            <img src={Shirts} alt="bg-home img-category" />
            <figcaption>
              <h4>Shirts</h4>
              <p>Ante mus blandit sapien sociosqu per consequat ad.</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Categories;
