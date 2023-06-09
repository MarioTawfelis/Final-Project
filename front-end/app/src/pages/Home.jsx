import React from "react";
import MainText from "../components/MainText";
import CaruselView from "../components/CaruselView";
import "./home.css";
import Collection from "../components/Collection";
import Categories from "../components/Categories";
import Description from "../components/Description";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

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
    </>
  );
};

export default Home;
