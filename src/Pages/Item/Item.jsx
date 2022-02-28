import React, { useRef, useEffect, forwardRef } from "react";
import MarketplaceMenu from "../../Components/MarketplaceMenu/MarketplaceMenu";
import { ItemStyled, BackGround } from "./ItemStyled";
import { useLocation } from "react-router-dom";
import { TweenMax, TimelineMax, Power3, Power4, gsap } from "gsap";

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
        duration: 1.5,
        y: 200,
        ease: Power3.easeInOut,
        opacity: 1,
        delay: 0.3,
      })
      .to(path, {
        duration: 3,
        strokeDashoffset: 0,
      })
      .to(path, {
        duration: 3,
        fillOpacity: 1,
      })
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
        opacity: "1",
        pointerEvents: "auto",
        ease: Power4.easeInOut,
      });
  }, []);
  return (
    <>
      <div className="load-container">
        <div className="load-screen" ref={(el) => (screen = el)}>
          <svg
            className="svg"
            // ref={(el) => (logo = el)}
            width="400"
            height="300.573"
            viewBox="0 0 256 256"
            ref={(el) => (svg = el)}
          >
            <path
              // transform="translate(34.000000, 6.000000)"
              ref={(el) => (path = el)}
              className="logo"
              fill="none"
              stroke="#000000"
              // strokeWidth="13"
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
