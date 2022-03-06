import React from "react";
import { AboutStyled } from "./AboutStyled";

const About = () => {
  return (
    <AboutStyled>
      <div className="primary">
        <h3>About ExpressSea</h3>
        <li>
          <span className="documentation" />
          <div>
            <p>The best digital market to get mind blowing digital art. </p>
          </div>
        </li>
        <li>
          <span className="documentation" />
          <div>
            <p>Connecting your wallet is so easy with the metamask.</p>
          </div>
        </li>
        <li>
          <span className="documentation" />
          <div>
            <p>ExpressSea provides rare digital arts that sways individuals.</p>
          </div>
        </li>
        <li>
          <span className="documentation" />
          <div>
            <p>Room for creative artist to show out awesome works .</p>
          </div>
        </li>
      </div>
<div className="secondary">
      <ul className="secondary-main">
        <li>
          <span className="art"></span>
        </li>
        <li>
          <span className="ball"></span>
        </li>
        <li>
          <span className="random"></span>
        </li>
      </ul>
      </div>
    </AboutStyled>
  );
};

export default About;
