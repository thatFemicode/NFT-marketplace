import React from "react";
import { ArtistMenuStyled } from "./ArtistMenuStyled";
import { useNavigate, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Logo from "../Img/slack.svg";
const ArtistMenu = () => {
  const nav = useNavigate();
  return (
    <ArtistMenuStyled>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <FiArrowLeft
        onClick={() => {
          nav("/marketplace");
        }}
      />
    </ArtistMenuStyled>
  );
};

export default ArtistMenu;
