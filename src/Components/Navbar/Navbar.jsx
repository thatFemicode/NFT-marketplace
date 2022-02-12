import React, { forwardRef } from "react";
import { NavbarStyled, Container, DropdownStyles } from "./NavbarStyled";
import { OuterLayout } from "../../Layout/Layout";
// import logo from "./img/GSW.svg";
import logo from "./img/slack.svg";
import { DropdownProvider, DropdownOption, DropdownRoot } from "./Dropdown";
import About from "./Content/About/About";
import Collection from "./Content/Collections/Collection";
import Why from "./Content/WhyExpress/Why";
import { Link } from "react-router-dom";
import Hamburger from "../Hero/Hambuger/Hamburger";
// import { useGlobalContext } from "../../Context/context.js";

const Navbar = forwardRef(({ children }, ref) => {
  return (
    <NavbarStyled>
      <DropdownProvider>
        <DropdownStyles>
          <Container>
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <ul className="options">
              <li>
                <DropdownOption
                  name="About"
                  content={About}
                  backgroundHeight={90}
                />
              </li>
              <li>
                <DropdownOption
                  name="Collection"
                  content={Collection}
                  backgroundHeight={70}
                />
              </li>
              <li>
                <DropdownOption
                  name="Why ExpressSea"
                  content={Why}
                  backgroundHeight={130}
                />
              </li>
            </ul>
            <Hamburger />
            <div className="hashtag">
              <Link to="/input">Get Started</Link>
            </div>
          </Container>

          <DropdownRoot />
        </DropdownStyles>
      </DropdownProvider>
    </NavbarStyled>
  );
});

export default Navbar;
