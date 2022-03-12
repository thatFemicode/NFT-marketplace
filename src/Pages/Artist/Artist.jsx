import React, { useRef, useEffect } from "react";
import ArtistMenu from "../../Components/MarketplaceMenu/ArtistMenu/ArtistMenu";
import MarketplaceMenu from "../../Components/MarketplaceMenu/MarketplaceMenu";
import Tab from "../../Components/Tabs/Tab";
import { ArtistStyled } from "./ArtistStyled";
import tabs from "./data";
import { PageContainer } from "../Marketplace/MarketplaceStyled";
import { useLocation } from "react-router-dom";
import itemAnim from "../Item/itemAnimation";

const Artist = () => {
  const location = useLocation();

  const { state } = location;
  const { mine } = state;
  const { artist, artistImage, post } = mine;
  let screen = useRef(null);
  let body = useRef(null);
  let svg = useRef(null);
  let path = useRef(null);
  useEffect(() => {
    itemAnim(screen, svg, path, body);
  }, [state]);
  return (
    <>
      <div className="load-container">
        <div className="load-screen" ref={(el) => (screen = el)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="svg"
            viewBox="0 0 250 250"
            ref={(el) => (svg = el)}
          >
            <path
              ref={(el) => (path = el)}
              className="logo"
              fill="none"
              stroke="#000000"
              d="m 15.625507,46.199537 55.767886,-32.030352 55.623047,32.281229 -0.14485,64.311586 0.14485,-64.311586 55.76788,-32.030352 55.62305,32.281229 -0.14485,64.311579 -55.76788,32.03036 -55.62305,-32.28123 55.62305,32.28123 -0.14485,64.31158 -55.76788,32.03035 L 70.958866,207.10393 71.103708,142.79235 126.87159,110.762 71.103708,142.79235 15.480664,110.51112 Z"
            />
          </svg>
        </div>
      </div>
      <ArtistStyled
        classNamedata-barba="container"
        ref={(el) => (body = el)}
        className="Headd"
      >
        <MarketplaceMenu />
        <ArtistMenu />
        <div className="artist-content">
          <div className="artist-content-image">
            <div className="artist">
              <img src={artistImage} alt="" />
            </div>
            <h1>{artist} </h1>
            <p>{post}</p>
          </div>
          <PageContainer>
            <Tab tabs={tabs} />
          </PageContainer>
        </div>
      </ArtistStyled>
    </>
  );
};

export default Artist;
