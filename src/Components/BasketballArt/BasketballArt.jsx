import React, { useEffect, useRef } from "react";
import {
  BasketballArtStyled,
  Item,
  Title,
  SubTitle,
} from "./BasketballArtStyled";
import items from "./data";
import { useNavigate } from "react-router-dom";
import Img, { PlayerImg } from "../Img/ImgStyled";
import { gsap } from "gsap";
const BasketballArt = () => {
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
    <BasketballArtStyled ref={el}>
      {items.map((item) => {
        const { id } = item;

        return (
          <Item
            className="single"
            onClick={() => {
              nav(`/item/${id}`, { state: item });
            }}
          >
            <PlayerImg src={item.image} />
            <Title>{item.title}</Title>
            <SubTitle>{item.subTitle}</SubTitle>
          </Item>
        );
      })}
    </BasketballArtStyled>
  );
};

export default BasketballArt;
