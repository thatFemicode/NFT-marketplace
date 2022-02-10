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
    <NavbarStyled ref={ref} className="Headds">
      <OuterLayout>
        <div className="navigation">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="options">
            <DropdownProvider>
              <DropdownStyles>
                <Container>
                  <ul>
                    <li>
                      <DropdownOption
                        name="About"
                        content={About}
                        backgroundHeight={286}
                      />
                    </li>
                  </ul>
                </Container>
                <DropdownRoot />
              </DropdownStyles>
            </DropdownProvider>
          </div>
          <div className="hashtag">
            <Link to="/input">Get Started</Link>
          </div>
        </div>
      </OuterLayout>
    </NavbarStyled>
  );
});

export default Navbar;
