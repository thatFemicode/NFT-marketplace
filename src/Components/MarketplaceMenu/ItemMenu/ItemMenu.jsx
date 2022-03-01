import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import Logo from "../Img/slack.svg";
import { useNavigate, Link } from "react-router-dom";
import { ItemMenuStyled } from "./ItemMenuStyled";

const ItemMenu = () => {
  const nav = useNavigate();

  return (
    <ItemMenuStyled>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <FiArrowLeft
        onClick={() => {
          nav(-1);
        }}
      />
    </ItemMenuStyled>
  );
};

export default ItemMenu;
