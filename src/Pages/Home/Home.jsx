import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../Components/Hero/Hero";
import { HomeStyled } from "./HomeStyled";
import { MainStyled } from "../../MainStyled";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <HomeStyled>
      <MainStyled>
        <Navbar />
        <Hero />
      </MainStyled>
    </HomeStyled>
  );
};

export default Home;
