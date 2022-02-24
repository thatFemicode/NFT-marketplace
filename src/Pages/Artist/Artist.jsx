import React from "react";
import MarketplaceMenu from "../../Components/MarketplaceMenu/MarketplaceMenu";
import { ArtistStyled } from "./ArtistStyled";

const Artist = () => {
  return <ArtistStyled>{<MarketplaceMenu />}</ArtistStyled>;
};

export default Artist;
