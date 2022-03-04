import React from "react";
import ArtistMenu from "../../Components/MarketplaceMenu/ArtistMenu/ArtistMenu";
import MarketplaceMenu from "../../Components/MarketplaceMenu/MarketplaceMenu";
import Tab from "../../Components/Tabs/Tab";
import { ArtistStyled } from "./ArtistStyled";
import tabs from "./data";
import { PageContainer } from "../Marketplace/MarketplaceStyled";
import { useLocation } from "react-router-dom";
const Artist = () => {
  const location = useLocation();

  const { state } = location;
  const { mine } = state;
  const { artist, artistImage } = mine;
  return (
    <ArtistStyled>
      <MarketplaceMenu />
      <ArtistMenu />
      <div className="artist-content">
        <div className="artist-content-image">
          <div className="artist">
            <img src={artistImage} alt="" />
          </div>
          <h1>{artist} </h1>
          <p>Digital Creative Artist</p>
        </div>
        <PageContainer>
          <Tab tabs={tabs} />
        </PageContainer>
      </div>
    </ArtistStyled>
  );
};

export default Artist;
