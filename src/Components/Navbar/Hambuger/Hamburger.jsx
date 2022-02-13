import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { HamburgerStyled } from "./HamburgerStyled";
import { OuterLayout } from "../../../Layout/Layout";
import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  staggerRevealClose,
} from "./Animation";

const Hamburger = ({ state }) => {
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let reveal3 = useRef(null);
  useEffect(() => {
    if (state.clicked === false) {
      // Close menu
      staggerRevealClose(reveal3, reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Open the menu
      gsap.to(menuLayer, { duration: 0, display: "block" });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2, reveal3], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(reveal1, reveal2, reveal3);
    }
  }, [state]);
  return (
    <HamburgerStyled ref={(el) => (menuLayer = el)}>
      <div
        ref={(el) => (reveal1 = el)}
        className="menu-secondary-background-color"
      ></div>
      <div
        ref={(el) => (reveal2 = el)}
        className="menu-primary-background-color"
      ></div>
      <div ref={(el) => (reveal3 = el)} className="menu-layer">
        <OuterLayout>
          <div className="wrapper">
            <div className="about">
              <h3>About</h3>
              <li>
                <span className="documentation" />
                <div>
                  <p>
                    The best digital market to get mind blowing digital art.{" "}
                  </p>
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
                  <p>
                    ExpressSea provides rare digital arts that sways
                    individuals.
                  </p>
                </div>
              </li>
              <li>
                <span className="documentation" />
                <div>
                  <p>Room for creative artist to show out awesome works .</p>
                </div>
              </li>
            </div>
            <div className="collection">
              <h3>Collections</h3>

              <ul className="collection-main">
                <li>
                  <span className="ape"></span>
                  <div>
                    <h3>Ape Collection</h3>
                    <p>A collection of different Apes in different forms</p>
                  </div>
                </li>
                <li>
                  <span className="ball"></span>
                  <div>
                    <h3>Polygon Art Collection</h3>
                    <p>A collection of Polygon art of various objects </p>
                  </div>
                </li>
                <li>
                  <span className="basket"></span>
                  <div>
                    <h3>Player Collection</h3>
                    <p>Collection of different Basketball players</p>
                  </div>
                </li>
                <li>
                  <span className="celebrity"></span>
                  <div>
                    <h3>Celebrity Collection</h3>
                    <p>Collection of different Music Artist</p>
                  </div>
                </li>
                <li>
                  <span className="random"></span>
                  <div>
                    <h3>Random Art Collection</h3>
                    <p>Collection of Random Art by different artist</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="why">
              <h3>Why ExpressSea</h3>
              <ul className="why-main">
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
            </div>
          </div>
        </OuterLayout>
      </div>
    </HamburgerStyled>
  );
};

export default Hamburger;
