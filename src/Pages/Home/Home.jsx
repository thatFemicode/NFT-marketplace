import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../Components/Hero/Hero";
import { HomeStyled } from "./HomeStyled";
import { MainStyled } from "../../MainStyled";
import Navbar from "../../Components/Navbar/Navbar";
import Gallery from "../../Components/Gallery/Gallery";
import Showcase from "../../Components/Showcase/Showcase";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <HomeStyled>
      <MainStyled>
        <Navbar />
        <Hero />
        <Gallery />
        <Showcase />
        <Footer />
      </MainStyled>
    </HomeStyled>
  );
};

export default Home;
