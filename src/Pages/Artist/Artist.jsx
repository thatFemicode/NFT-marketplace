import React from "react";
import ArtistMenu from "../../Components/MarketplaceMenu/ArtistMenu/ArtistMenu";
import MarketplaceMenu from "../../Components/MarketplaceMenu/MarketplaceMenu";
import { ArtistStyled } from "./ArtistStyled";
import tabs from "./data";
import Avatar from "./Img/avatar.png";

const Artist = () => {
  return (
    <ArtistStyled>
      <MarketplaceMenu />
      <ArtistMenu />
      <div className="artist-content">
        <div className="artist-content-image">
          <div className="artist">
            <img src={Avatar} alt="" />
          </div>
          <h1>David</h1>
          <p>Digital Creative Artist</p>
        </div>
      </div>
    </ArtistStyled>
  );
};

export default Artist;
