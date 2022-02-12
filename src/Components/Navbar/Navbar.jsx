import React, { forwardRef, useState, useEffect } from "react";
import { NavbarStyled, Container, DropdownStyles } from "./NavbarStyled";
import { OuterLayout } from "../../Layout/Layout";
// import logo from "./img/GSW.svg";
import logo from "./img/slack.svg";
import { DropdownProvider, DropdownOption, DropdownRoot } from "./Dropdown";
import About from "./Content/About/About";
import Collection from "./Content/Collections/Collection";
import Why from "./Content/WhyExpress/Why";
import { Link } from "react-router-dom";
import Hamburger from "./Hambuger/Hamburger";
// import { useGlobalContext } from "../../Context/context.js";

const Navbar = forwardRef(({ children }, ref) => {
  const [disabled, setDisabled] = useState(false);
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Open",
  });
  // Disabled Menu function
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };
  // handle menu function
  const handleMenu = () => {
    // document.body.classList.toggle("no-scroll");
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Dubnation",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };
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
            <div className="hashtag">
              <Link to="/input">Get Started</Link>
            </div>
            <div className="mobile-nav">
              <Link to="/input">Open</Link>
            </div>
            <Hamburger />
          </Container>

          <DropdownRoot />
        </DropdownStyles>
      </DropdownProvider>
    </NavbarStyled>
  );
});

export default Navbar;
