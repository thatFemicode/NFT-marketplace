import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../Components/Hero/Hero";
import { HomeStyled } from "./HomeStyled";
import { MainStyled } from "../../MainStyled";
import Navbar from "../../Components/Navbar/Navbar";
import Gallery from "../../Components/Gallery/Gallery";

const Home = () => {
  return (
    <HomeStyled>
      <MainStyled>
        <Navbar />
        <Hero />
        <Gallery />
      </MainStyled>
    </HomeStyled>
  );
};

export default Home;
