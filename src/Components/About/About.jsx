import React, { useState, useEffect, useRef } from "react";
import { AboutStyled } from "./AboutStyled";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import SplitText from "../../utils/Split3.min";
import Twitter from "../Icons/Twitter";
import { Instagram, Twitch, Youtube } from "react-feather";
// import useOnScreen from "../../Hooks/useOnScreen";
const About = () => {
  // const ref = useRef(null);
  // let text = useRef(null);
  // const [reveal, setReveal] = useState(false);
  // const onScreen = useOnScreen(ref);
  const location = useLocation();
  const { state } = location;
  const { mine } = state;
  const { artistStory } = mine;
  // useEffect(() => {
  //   const tl = gsap.timeline();
  //   let split = new SplitText(text, { type: "words,chars" });
  //   let char = split.chars;
  //   console.log(char);
  //   tl.from(split.chars, {
  //     duration: 1,
  //     autoAlpha: 0,
  //     stagger: {
  //       each: 0.1,
  //     },
  //     delay: 3,
  //   });
  // }, []);
  // useEffect(() => {
  //   if (onScreen) setReveal(onScreen);
  // }, [onScreen]);
  // useEffect(() => {
  //   if (reveal) {
  //     const tl = gsap.timeline();
  //     let split = new SplitText(text, { type: "words,chars" });
  //     let char = split.chars;
  //     console.log(char);
  //     tl.from(split.chars, {
  //       duration: 1,
  //       autoAlpha: 0,
  //       delay: 2,
  //       stagger: {
  //         each: 0.1,
  //       },
  //     });
  //   }
  // }, [reveal]);
  return (
    <AboutStyled>
      <h1>Bio:</h1>
      <p
      // ref={(el) => (text = el)}
      >
        {artistStory}
      </p>
      <div className="socials">
        <Twitter />
        <Instagram />
        <Youtube />
      </div>
    </AboutStyled>
  );
};

export default About;
