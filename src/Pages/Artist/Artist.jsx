import React from "react";
import ArtistMenu from "../../Components/MarketplaceMenu/ArtistMenu/ArtistMenu";
import MarketplaceMenu from "../../Components/MarketplaceMenu/MarketplaceMenu";
import { ArtistStyled } from "./ArtistStyled";

const Artist = () => {
  return (
    <ArtistStyled>
      <MarketplaceMenu />
      <ArtistMenu />
    </ArtistStyled>
  );
};

export default Artist;
