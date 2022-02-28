import React from "react";
import MarketplaceMenu from "../../Components/MarketplaceMenu/MarketplaceMenu";
import { ItemStyled, BackGround } from "./ItemStyled";
import { useLocation } from "react-router-dom";
const Item = () => {
  const { state } = useLocation();
  console.log(state);
  const { id, title, artist, artistImage, image } = state;
  return (
    <ItemStyled>
      <MarketplaceMenu />
      <BackGround src={image} />
      {/* <img src={image} alt="" /> */}
    </ItemStyled>
  );
};

export default Item;
