import React from "react";
import { CollectionStyled } from "./CollectionStyled";

const Collection = () => {
  return (
    <CollectionStyled>
      <ul className="primary">
        <li>
          <span className="ape"></span>
          <div>
            <h3>Payments</h3>
            <p>Plataforma completa para pagamentos online</p>
          </div>
        </li>
        <li>
          <span className="ball"></span>
        </li>
        <li>
          <span className="basket"></span>
        </li>
        <li>
          <span className="celebrity"></span>
        </li>
      </ul>
    </CollectionStyled>
  );
};

export default Collection;
