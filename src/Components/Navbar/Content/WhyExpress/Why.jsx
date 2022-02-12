import React from "react";
import { WhyStyled } from "./WhyStyled";
import { Link } from "react-router-dom";
const Why = () => {
  return (
    <WhyStyled>
      <ul className="primary">
        <li>
          <span />
          Digital Art
        </li>
        <li>
          <span />
          Crypto Reliance
        </li>
        <li>
          <span />
          Wallet Connection
        </li>
        <li>
          <span />
          Creative Artist
        </li>
        <li>
          <span />
          Awesome Arts
        </li>
      </ul>
      <ul className="secondary">
        <li>
          <span className="sigma" />
          <h3>ExpressSea</h3>
        </li>
        <Link to="/marketplace">
          <li>
            Visit Marketplace
            <span className="arrow">{">"}</span>
          </li>
        </Link>
      </ul>
    </WhyStyled>
  );
};

export default Why;
