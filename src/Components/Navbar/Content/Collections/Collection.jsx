import React from "react";
import { CollectionStyled } from "./CollectionStyled";

const Collection = () => {
  return (
    <CollectionStyled>
      <ul className="primary">
        <li>
          <span className="ape"></span>
          <div>
            <h3>Ape Collection</h3>
            <p>A collection of different Apes </p>
          </div>
        </li>
        <li>
          <span className="ball"></span>
          <div>
            <h3>Polygon Art Collection</h3>
            <p>A collection of Polygon art </p>
          </div>
        </li>
        <li>
          <span className="basket"></span>
          <div>
            <h3>Player Collection</h3>
            <p>Collection of different Basketball players</p>
          </div>
        </li>
        <li>
          <span className="celebrity"></span>
          <div>
            <h3>Celebrity Collection</h3>
            <p>Collection of different Music Artist</p>
          </div>
        </li>
        <li>
          <span className="random"></span>
          <div>
            <h3>Random Art Collection</h3>
            <p>Collection of Random Art</p>
          </div>
        </li>
      </ul>
      <ul className="secondary">
        <li>
          <span className="sigma" />
          <h3>ExpressSea</h3>
          <p>Home of digital Art</p>
        </li>
      </ul>
    </CollectionStyled>
  );
};

export default Collection;
