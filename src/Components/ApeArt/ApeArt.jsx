import React, { useEffect, useRef } from "react";
import { ApeArtStyled } from "./ApeArtStyled";
import items from "./data";
import { useNavigate, useParams } from "react-router-dom";
import Img from "../Img/ImgStyled";
import { gsap } from "gsap";
import { CardContainer, Item, Title, SubTitle } from "../CardStyled/CardStyled";

const ApeArt = () => {
  const nav = useNavigate();
  let el = useRef();
  let content = useRef();
  let q = gsap.utils.selector(el);
  useEffect(() => {
    let timeline = gsap.timeline();

    // The component has been rendered, so we can now select
    // descendants of the component, including descendants
    // nested inside of other components
    timeline.from(q(".single"), {
      opacity: 0,
      y: 200,
      stagger: {
        each: 0.8,
        from: 0,
        grid: "auto",
      },
    });
  }, []);
  return (
    <ApeArtStyled ref={el}>
      <CardContainer>
        {items.map((item) => {
          const { id } = item;
          return (
            <Item
              className="single"
              onClick={() => {
                nav(`/item/${id}`, { state: item });
              }}
            >
              <span>
                <img className="artist" src={item.artistImage} alt="" />
                <Title>{item.title}</Title>
              </span>
              <Img src={item.image} />

              <SubTitle>{item.subTitle}</SubTitle>
            </Item>
          );
        })}
      </CardContainer>
    </ApeArtStyled>
  );
};

export default ApeArt;
