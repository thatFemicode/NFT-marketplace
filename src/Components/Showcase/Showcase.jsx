import React, { useState, useLayoutEffect, useRef, useCallback } from "react";
import { OuterLayout } from "../../Layout/Layout";
import images from "./data";
import { ShowCaseStyled } from "./ShowcaseStyled";
import gsap from "gsap";
import Button from "../Button/PrimaryButton";
import { Link } from "react-router-dom";

const Showcase = () => {
  let elems = useRef([]);
  let timer = useRef(null);
  let timeline = gsap.timeline({
    defaults: {
      duration: 0.75,
      ease: "power3.inOut",
    },
    paused: true,
  });
  const [state, setState] = useState({ current: 0, next: 1 });
  const [userDetected, setUserDetected] = useState(false);

  const calculateIndexs = (index) => {
    if (index === images.length - 1) {
      setState({ current: index, next: 0 });
    } else {
      setState({ current: index, next: index + 1 });
    }
  };
  const flowUp = useCallback(
    (onComplete) => {
      timeline
        .to(elems.current[0], { y: "-100%", opacity: 0, scale: -0.2 })
        .to(
          elems.current[1],
          {
            y: "-100%",
            opacity: 1,

            scale: 1,
            onComplete,
          },
          "-=0.75"
        )
        .play();
    },
    [timeline]
  );

  const stepForward = useCallback(() => {
    setUserDetected(false);
    flowUp(() => calculateIndexs(state.next));
  }, [flowUp, state.next]);
  const activateTimer = useCallback(() => {
    timer.current = setTimeout(() => {
      stepForward();
    }, 4000);
  }, [stepForward]);
  useLayoutEffect(() => {
    const image1 = !!elems.current[0] && elems.current[0];
    const image2 = !!elems.current[1] && elems.current[1];

    activateTimer();

    gsap.set(image2, { y: "0%", opacity: 0, scale: 1 });
    if (userDetected) {
      gsap.set(image1, { y: "0%", opacity: 0, scale: 1 });
    } else {
      gsap.set(image1, { y: "0%", opacity: 1, scale: 1 });
    }

    return () => {
      clearTimeout(timer);
    };
  }, [state, activateTimer, timer, userDetected]);
  return (
    <ShowCaseStyled>
      <OuterLayout>
        <div className="showcase">
          <div className="showcase-carousel">
            <div className="album-container">
              <div className="image">
                <img
                  ref={(elem) => (elems.current[0] = elem)}
                  src={images[state.current].image}
                  alt=""
                />
              </div>
              <div className="image">
                <img
                  ref={(elem) => (elems.current[1] = elem)}
                  src={images[state.next].image}
                  alt=""
                />
              </div>
              {/* <div className="stripes">
                {images.map((_item, index) =>
                  index === state.current ? (
                    <span
                      key={`stripe${index}`}
                      onClick={() => handleChange(index)}
                      style={{ opacity: 1 }}
                    ></span>
                  ) : (
                    <span
                      key={`stripe${index}`}
                      onClick={() => handleChange(index)}
                      style={{ opacity: 0.5 }}
                    ></span>
                  )
                )}
              </div> */}
            </div>
          </div>
          <div className="showcase-content">
            <h1>
              Trending <span> NFTS</span> from our various
              <span className="collection">collections</span>
            </h1>
            <p>
              View art from different artist from our collections and visit
              marketplace
            </p>
            <Link to="/marketplace">
              <Button
                name={"Visit Marketplace"}
                bgColor={"#87ceeb"}
                color={"#000"}
              />
            </Link>
          </div>
        </div>
      </OuterLayout>
    </ShowCaseStyled>
  );
};

export default Showcase;
