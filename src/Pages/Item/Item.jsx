import React, { useRef, useEffect } from "react";
import MarketplaceMenu from "../../Components/MarketplaceMenu/MarketplaceMenu";
import { ItemStyled, BackGround } from "./ItemStyled";
import { useLocation } from "react-router-dom";
import itemAnim from "./itemAnimation";
import ItemMenu from "../../Components/MarketplaceMenu/ItemMenu/ItemMenu";
import { OuterLayout } from "../../Layout/Layout";
const Item = () => {
  let screen = useRef(null);
  let body = useRef(null);
  let svg = useRef(null);
  let path = useRef(null);

  const { state } = useLocation();
  console.log(state);
  const {
    id,
    title,
    artist,
    artistImage,
    image,
    info,
    collection,
    cover,
    center,
    price,
  } = state;
  useEffect(() => {
    itemAnim(screen, svg, path, body);
  }, []);
  return (
    <>
      <div className="load-container">
        <div className="load-screen" ref={(el) => (screen = el)}>
          <svg className="svg" viewBox="0 0 556 556" ref={(el) => (svg = el)}>
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
      <ItemStyled
        data-barba="container"
        ref={(el) => (body = el)}
        className="Headd"
      >
        <ItemMenu />
        <MarketplaceMenu />
        <OuterLayout>
          <div className="item-content">
            <div className="image">
              <BackGround center={center} src={image} />
            </div>
            <div className="content">
              <h1>{title}</h1>
              <div className="collection">
                <h3>Collection</h3>
                <p>{collection}</p>
              </div>

              <div className="description">
                <h3>Description:</h3>
                <p>{info}</p>
              </div>
              <p>{price}</p>
              <div className="artist-details">
                <div className="artist">
                  <img src={artistImage} alt="" />
                </div>
                <p>{artist}</p>
              </div>
            </div>
          </div>
        </OuterLayout>
      </ItemStyled>
    </>
  );
};

export default Item;
