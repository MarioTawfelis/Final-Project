import React from "react";
// import item from "../assets/images/hero-trainers.jpg";
import item from "../../assets/hero-trainers.jpg";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

const CaruselView = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="wrapper-carusel">
      <div className="carusel">
        <Carousel responsive={responsive} showDots={true}>
          <div>
            <p>New Balance Casablanca 327</p>
            <img src={item} alt="" />
          </div>
          <div>
            <p>New Balance Casablanca 327</p>
            <img src={item} alt="" />
          </div>
          <div>
            <p>New Balance Casablanca 327</p>
            <img src={item} alt="" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default CaruselView;