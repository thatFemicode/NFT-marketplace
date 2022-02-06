import React, { useEffect, useRef } from "react";
import { HeroStyled } from "./HeroStyled";
import hoverEffect from "hover-effect";
import { OuterLayout } from "../../Layout/Layout";

const Hero = () => {
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  var imgs = [
    "https://res.cloudinary.com/dljsalifp/image/upload/v1640472039/grapevine/img10_eelwxu.png",
    "https://res.cloudinary.com/dljsalifp/image/upload/v1640472041/grapevine/img11_vep1pm.png",
    "https://res.cloudinary.com/dljsalifp/image/upload/v1640472039/grapevine/img12_bcljeo.png",
    "https://res.cloudinary.com/dljsalifp/image/upload/v1640472044/grapevine/img13_zj4cjj.png",
  ];
  useEffect(() => {
    new hoverEffect({
      parent: img1.current,
      intensity: 0.2,
      angle: 180,
      image1: imgs[0],
      image2: imgs[0],
      displacementImage: imgs[0],
    });

    new hoverEffect({
      parent: img2.current,
      intensity: 0.2,
      angle: 180,
      image1: imgs[2],
      image2: imgs[2],
      displacementImage: imgs[2],
    });

    new hoverEffect({
      parent: img3.current,
      intensity: 0.2,
      angle: 180,
      image1: imgs[1],
      image2: imgs[1],
      displacementImage: imgs[1],
    });
  });
  return (
    <HeroStyled>
      <OuterLayout>
        <div className="hero">
          <div className="hero-left"></div>
          <div className="hero-right">
            <div ref={img1} className="box box-1"></div>
            <div ref={img2} className="box box-2"></div>
            <div ref={img3} className="box box-3"></div>
          </div>
        </div>
      </OuterLayout>
    </HeroStyled>
  );
};

export default Hero;
