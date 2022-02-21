import React, { useEffect, useRef } from "react";
import { ApeArtStyled, Item, Title, SubTitle } from "./ApeArtStyled";
import items from "./data";
import { useNavigate } from "react-router-dom";
import Img from "../Img/ImgStyled";
import { gsap } from "gsap";

const ApeArt = () => {
  const nav = useNavigate();
  let el = useRef();
  let q = gsap.utils.selector(el);
  useEffect(() => {
    let timeline = gsap.timeline();

    // The component has been rendered, so we can now select
    // descendants of the component, including descendants
    // nested inside of other components
    timeline.from(
      q(".single"),
      {
        opacity: 0,
        y: 200,
        stagger: {
          each: 0.8,
          from: 0,
          grid: "auto",
        },
      }
      // {
      //   opacity: 1,
      //   stagger: {
      //     each: 1.5,
      //     from: 0,
      //     grid: "auto",
      //   },
      // }
    );
  }, []);
  return (
    <ApeArtStyled ref={el}>
      {items.map((item) => {
        return (
          <Item
            className="single"
            onClick={() => {
              nav("/item:id");
            }}
          >
            <Img src={item.image} />
            <Title>{item.title}</Title>
            <SubTitle>{item.subTitle}</SubTitle>
          </Item>
        );
      })}
    </ApeArtStyled>
  );
};

export default ApeArt;
