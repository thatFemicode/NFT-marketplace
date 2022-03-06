import React, { forwardRef, useState } from "react";
import {
  NavbarStyled,
  Container,
  DropdownStyles,
  Buttons,
} from "./NavbarStyled";
import logo from "./img/slack.svg";
import { DropdownProvider, DropdownOption, DropdownRoot } from "./Dropdown";
import About from "./Content/About/About";
import Collection from "./Content/Collections/Collection";
import Why from "./Content/WhyExpress/Why";
import { Link } from "react-router-dom";
import Hamburger from "./Hambuger/Hamburger";
// import { useGlobalContext } from "../../Context/context.js";
// import { Hash } from "react-feather";
import { useScrollLock } from "../ScrollLock/ScrollLock";
import Button from "../Button/PrimaryButton";

const Navbar = forwardRef(({ children }, ref) => {
  const [disabled, setDisabled] = useState(false);
  const [clicked] = useState(false);
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: <Buttons clicked={clicked} />,
  });

  const { lockScroll, unlockScroll } = useScrollLock();
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
      lockScroll();
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Open",
      });
      unlockScroll();
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
      lockScroll();
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
              <Link to="/marketplace">
                <Button
                  name={"Visit Marketplace"}
                  bgColor={"#beaef0"}
                  margin={"0rem"}
                  color={"#000"}
                />
              </Link>
            </div>
            <div className="mobile-nav">
              {/* <button onClick={handleMenu} disabled={disabled}>
                {state.menuName}
              </button> */}
              <Buttons
                clicked={state.clicked}
                onClick={handleMenu}
                disabled={disabled}
              />
            </div>
            <Hamburger state={state} />
          </Container>
          <DropdownRoot />
        </DropdownStyles>
      </DropdownProvider>
    </NavbarStyled>
  );
});

export default Navbar;
