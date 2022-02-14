import React, { useState } from "react";
import IconContainer from "../IconContainer/IconContainer";
import { IconCarouselStyled } from "./IconCarouselStyled";
import { gsap } from "gsap";
const IconCarousel = ({ icons }) => {
  let tl = gsap.timeline({ paused: true });
  //   tl.add("start");
  const [numIconsLoaded, setNumIconsLoaded] = useState(0);
  const [timeline] = useState(tl);
  const checkAllLoaded = () => {
    if (numIconsLoaded === icons.length) {
      timeline.play();
    }
  };
  const iconEntered = () => {
    setNumIconsLoaded(numIconsLoaded + 1);
    checkAllLoaded();
    // this.setState(
    //   { numIconsLoaded: this.state.numIconsLoaded + 1 },
    //   this.checkAllLoaded
    // );
  };
  return (
    <IconCarouselStyled>
      {icons.map((icon, index) => {
        return (
          <IconContainer
            key={icon.id}
            image={icon.image}
            title={icon.title}
            timeline={timeline}
            iconEntered={iconEntered}
            startingPos={{ x: icon.x, y: icon.y }}
            scale={icon.s}
          />
        );
      })}
    </IconCarouselStyled>
  );
};

export default IconCarousel;
