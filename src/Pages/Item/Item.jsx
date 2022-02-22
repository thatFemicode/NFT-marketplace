import React from "react";
import MarketplaceMenu from "../../Components/MarketplaceMenu/MarketplaceMenu";
import { ItemStyled } from "./ItemStyled";
import { useLocation } from "react-router-dom";
const Item = () => {
  const { state } = useLocation();
  console.log(state);
  const { id, title, artist, artistImage, image } = state;
  return (
    <ItemStyled>
      <MarketplaceMenu />
      <img src={image} alt="" />
    </ItemStyled>
  );
};

export default Item;
