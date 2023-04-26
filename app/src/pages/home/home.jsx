import React from "react";
import MainText from "../../componests/home/mainTaxt";
import CaruselView from "../../componests/home/carusel";
import "../../pages/home/home.css";
import Collection from "../../componests/home/collection";
import Categories from "../../componests/home/categories";
import Description from "../../componests/home/description";
import Footer from "../../componests/footer/footer";

const Home = () => {
  return (
    <>
      <main className="flex-wrapper">
        <MainText />
        <CaruselView />
      </main>
      <section>
        <Collection />
      </section>
      <section>
        <Categories />
      </section>
      <article>
        <Description />
      </article>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;