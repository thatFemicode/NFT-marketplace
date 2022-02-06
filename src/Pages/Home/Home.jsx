import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../Components/Hero/Hero";
import { HomeStyled } from "./HomeStyled";

const Home = () => {
  return (
    <HomeStyled>
      <Hero />
    </HomeStyled>
  );
};

export default Home;
