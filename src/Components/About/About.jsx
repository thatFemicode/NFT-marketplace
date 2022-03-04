import React, { useEffect, useRef } from "react";
import { AboutStyled } from "./AboutStyled";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import SplitText from "../../utils/Split3.min";
import Twitter from "../Icons/Twitter";
const About = () => {
  let text = useRef(null);

  const location = useLocation();

  const { state } = location;
  const { mine } = state;
  const { artist, artistImage, post, artistStory } = mine;
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
        {artistStory}
      </p>
      <div className="socials">
        <Twitter />
      </div>
    </AboutStyled>
  );
};

export default About;
