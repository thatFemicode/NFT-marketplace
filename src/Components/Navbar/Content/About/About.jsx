import React from "react";
import { AboutStyled } from "./AboutStyled";

const About = () => {
  return (
    <AboutStyled>
      <div className="primary">
        <span className="documentation" />

        <div>
          <h3>About ExpressSea</h3>
          <p>The best digital market to get mind blowing digital art. </p>
          <p>Connecting your wallet is so easy with the metamask. </p>
          <p>ExpressSea provides rare digital arts that sways individuals. </p>
          <div>
            <ul>
              <li>
                <h4>Comece já</h4>
              </li>
              <li>Checkout pré-integrado</li>
              <li>Bibliotecas e SDKs</li>
              <li>Plugins</li>
              <li>Exemplos de código</li>
            </ul>

            <ul>
              <li>
                <h4>Guias</h4>
              </li>
              <li>Aceite pagamentos online</li>
              <li>Gerencie assinaturas</li>
              <li>Envie repasses</li>
              {/* <li>Implemente pagamentos presenciais</li> */}
            </ul>
          </div>
        </div>
      </div>

      <ul className="secondary">
        <li>
          <span className="api-reference" />
          Referência completa da API
        </li>
        <li>
          <span />
          Status da API
        </li>
        <li>
          <span />
          Código aberto
        </li>
      </ul>
    </AboutStyled>
  );
};

export default About;
