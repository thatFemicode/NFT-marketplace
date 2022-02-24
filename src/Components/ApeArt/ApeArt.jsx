import React, { useEffect, useRef } from "react";
import { ApeArtStyled } from "./ApeArtStyled";
import items from "./data";
import { useNavigate, useParams } from "react-router-dom";
import Img from "../Img/ImgStyled";
import { gsap } from "gsap";
import { CardContainer, Item, Title, SubTitle } from "../CardStyled/CardStyled";
import cardAnimation from "../animations";

const ApeArt = () => {
  const nav = useNavigate();
  let el = useRef();

  useEffect(() => {
    cardAnimation(el);
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
              key={id}
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
