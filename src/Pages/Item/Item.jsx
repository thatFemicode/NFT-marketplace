import React, { useRef, useEffect, forwardRef } from "react";
import MarketplaceMenu from "../../Components/MarketplaceMenu/MarketplaceMenu";
import { ItemStyled, BackGround } from "./ItemStyled";
import { useLocation } from "react-router-dom";
import { Power3, Power4, gsap } from "gsap";

const Item = () => {
  let screen = useRef(null);
  let body = useRef(null);
  let svg = useRef(null);
  let path = useRef(null);
  const tl = gsap.timeline();
  const { state } = useLocation();
  console.log(state);
  const { id, title, artist, artistImage, image } = state;
  useEffect(() => {
    tl.to(screen, {
      duration: 1.2,
      width: "100%",
      left: "0%",
      ease: Power3.easeInOut,
    })
      .to(svg, {
        duration: 0.8,
        ease: Power3.easeInOut,
        opacity: 1,
      })
      .fromTo(
        path,
        {
          duration: 1.2,
          scale: 0.5,
          opacity: 0,
          fillOpacity: 0,
          strokeDashoffset: 1500,
          ease: Power3.easeInOut,
        },
        {
          duration: 4,
          opacity: 1,
          scale: 0.7,
          strokeDashoffset: 0,
          transformOrigin: "50%, 50%",
          fillOpacity: 1,
          ease: Power3.easeInOut,
        }
      )
      .to(screen, {
        duration: 1.2,
        left: "100%",
        ease: Power3.easeInOut,
        delay: 0.3,
      })
      .set(screen, { left: "-100%" })
      .from(body.current, {
        duration: 0.3,
        opacity: 0,
        pointerEvents: "auto",
        ease: Power4.easeInOut,
      })
      .to(body, {
        duration: 0.3,
        opacity: 1,
        pointerEvents: "auto",
        ease: Power4.easeInOut,
      });
  }, []);
  return (
    <>
      <div className="load-container">
        <div className="load-screen" ref={(el) => (screen = el)}>
          <svg className="svg" viewBox="0 0 556 556" ref={(el) => (svg = el)}>
            <path
              ref={(el) => (path = el)}
              className="logo"
              fill="none"
              stroke="#000000"
              d="m 15.625507,46.199537 55.767886,-32.030352 55.623047,32.281229 -0.14485,64.311586 0.14485,-64.311586 55.76788,-32.030352 55.62305,32.281229 -0.14485,64.311579 -55.76788,32.03036 -55.62305,-32.28123 55.62305,32.28123 -0.14485,64.31158 -55.76788,32.03035 L 70.958866,207.10393 71.103708,142.79235 126.87159,110.762 71.103708,142.79235 15.480664,110.51112 Z"
            />
          </svg>
        </div>
      </div>
      <ItemStyled
        data-barba="container"
        ref={(el) => (body = el)}
        className="Headd"
      >
        <MarketplaceMenu />
        <BackGround src={image} />
        {/* <img src={image} alt="" /> */}
      </ItemStyled>
    </>
  );
};

export default Item;
