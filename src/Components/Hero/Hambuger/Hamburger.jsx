import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { HamburgerStyled } from "./HamburgerStyled";
import { OuterLayout } from "../../../Layout/Layout";
const Hamburger = () => {
  return (
    <HamburgerStyled>
      <OuterLayout></OuterLayout>
    </HamburgerStyled>
  );
};

export default Hamburger;
