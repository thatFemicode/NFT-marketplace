import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../Components/Hero/Hero";
import { HomeStyled } from "./HomeStyled";
import { MainStyled } from "../../MainStyled";
const Home = () => {
  return (
    <HomeStyled>
      <MainStyled>
        <Hero />
      </MainStyled>
    </HomeStyled>
  );
};

export default Home;
