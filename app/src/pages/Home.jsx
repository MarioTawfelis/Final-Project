import React from "react";
import MainText from "../components/MainText";
import CaruselView from "../components/CaruselView";
import "./home.css";
import Collection from "../components/Collection";

const Home = () => {
  return (
    <>
      <main className="grid-wrapper">
        <MainText />
        <CaruselView />
      </main>
      <section>
        <Collection />
      </section>
    </>
  );
};

export default Home;
