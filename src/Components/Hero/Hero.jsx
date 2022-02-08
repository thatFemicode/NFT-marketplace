import React, { useEffect, useRef } from "react";
import { HeroStyled } from "./HeroStyled";
import hoverEffect from "hover-effect";
import { OuterLayout } from "../../Layout/Layout";
import animate from "./animation";
import Africa from "./HeroImgs/Africa.jpg";
import Head from "./HeroImgs/Head.jpg";
import Kaby from "./HeroImgs/Kaby.jpg";
// import Head from
// import Head from "."
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
    animate(img1.current, img2.current, img3.current);
  }, []);
  useEffect(() => {
    new hoverEffect({
      parent: img1.current,
      intensity: 0.2,
      angle: 180,
      image1: Africa,
      image2: Head,
      displacementImage: imgs[0],
      imagesRatio: 1.4,
    });

    new hoverEffect({
      parent: img2.current,
      intensity: 0.2,
      angle: 180,
      image1: Kaby,
      image2: imgs[2],
      displacementImage: imgs[2],
      imagesRatio: 1.2,
    });

    new hoverEffect({
      parent: img3.current,
      intensity: 0.2,
      angle: 180,
      image1: imgs[1],
      image2: imgs[1],
      displacementImage: imgs[1],
      imagesRatio: 0.9,
    });
  });

  return (
    <HeroStyled>
      <OuterLayout>
        <div className="hero">
          <div className="hero-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            facilis vero repudiandae, magni dolor voluptatum maiores, neque
            reiciendis doloremque, eaque quaerat. In incidunt aliquam earum
            corporis recusandae similique! Placeat, dolorum fuga, quia
            doloremque eaque eveniet ipsam nam tenetur cumque sunt et molestias
            blanditiis animi, modi dolores eos quod provident illum eius
            necessitatibus voluptas libero qui reiciendis. Mollitia id, ipsa
            ullam obcaecati nobis eum consequuntur sequi voluptatibus natus
          </div>
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
