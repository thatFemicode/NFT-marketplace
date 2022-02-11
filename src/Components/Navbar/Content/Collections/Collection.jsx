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
            <p>Plataforma completa para pagamentos online</p>
          </div>
        </li>
        <li>
          <span className="ball"></span>
          <div>
            <h3>Polygon Art Collection</h3>
            <p>Plataforma completa para pagamentos online</p>
          </div>
        </li>
        <li>
          <span className="basket"></span>
          <div>
            <h3>Player Collection</h3>
            <p>Plataforma completa para pagamentos online</p>
          </div>
        </li>
        <li>
          <span className="celebrity"></span>
          <div>
            <h3>Celebrity Collection</h3>
            <p>Plataforma completa para pagamentos online</p>
          </div>
        </li>
        <li>
          <span className="random"></span>
          <div>
            <h3>Random Art Collection</h3>
            <p>Plataforma completa para pagamentos online</p>
          </div>
        </li>
      </ul>
      <ul className="secondary">
        <li>
          <span className="sigma" />

          <h3>Sigma</h3>
          <p>Análises e relatórios comerciais avançados</p>
        </li>
        <li>
          <span className="atlas" />

          <h3>Atlas</h3>
          <p>Registro de empresas para startups</p>
        </li>
      </ul>
    </CollectionStyled>
  );
};

export default Collection;
