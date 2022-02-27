import React from "react";
import { MarketPlaceTopMenuStyled } from "./MarketPlaceTopMenuStyled";
import Logo from "../Img/slack.svg";
import { Link } from "react-router-dom";

const MarketPlaceTopMenu = () => {
  return (
    <MarketPlaceTopMenuStyled>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <Link to="/">
        <h1>ExpressSea</h1>
      </Link>
    </MarketPlaceTopMenuStyled>
  );
};

export default MarketPlaceTopMenu;
