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
            <ul>
              <li>
                <DropdownOption
                  name="About"
                  content={About}
                  backgroundHeight={80}
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
                  name="Why Express"
                  content={Why}
                  backgroundHeight={286}
                />
              </li>
            </ul>
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
