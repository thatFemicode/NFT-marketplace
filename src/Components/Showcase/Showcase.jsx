import React, { useState, useLayoutEffect, useRef } from "react";
import { OuterLayout } from "../../Layout/Layout";
import { ShowCaseStyled } from "./ShowcaseStyled";

const Showcase = () => {
  return (
    <ShowCaseStyled>
      <OuterLayout>
        <div className="showcase">
          <div className="showcase-carousel"></div>
          <div className="showcase-content">
            <h1>Trending NFTS in different categories</h1>
            <p>Have</p>
          </div>
        </div>
      </OuterLayout>
    </ShowCaseStyled>
  );
};

export default Showcase;
