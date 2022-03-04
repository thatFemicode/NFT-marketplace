import React, { useEffect, useRef } from "react";
import { AboutStyled } from "./AboutStyled";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import SplitText from "../../utils/Split3.min";
const About = () => {
  let text = useRef(null);

  const location = useLocation();

  const { state } = location;
  const { mine } = state;
  const { artist, artistImage } = mine;
  useEffect(() => {
    const tl = gsap.timeline();
    let split = new SplitText(text, { type: "words,chars" });
    let char = split.chars;
    console.log(char);
    tl.from(split.chars, {
      duration: 0.4,
      autoAlpha: 0,
      stagger: {
        each: 0.05,
      },
    });
  }, []);
  return (
    <AboutStyled>
      <p ref={(el) => (text = el)} className="headline">
        My boys is the best basketballer in the entire workd and he definitely
        balls a lot
      </p>
    </AboutStyled>
  );
};

export default About;
