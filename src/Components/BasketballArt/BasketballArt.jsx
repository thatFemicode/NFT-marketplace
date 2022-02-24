import React, { useEffect, useRef } from "react";
import { BasketballArtStyled } from "./BasketballArtStyled";
import items from "./data";
import { useNavigate } from "react-router-dom";
import { PlayerImg } from "../Img/ImgStyled";
import { gsap } from "gsap";
import { CardContainer, Item, Title, SubTitle } from "../CardStyled/CardStyled";
import cardAnimation from "../animations";

const BasketballArt = () => {
  const nav = useNavigate();
  let el = useRef();

  useEffect(() => {
    cardAnimation(el);
  }, []);
  return (
    <BasketballArtStyled ref={el}>
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
              <PlayerImg src={item.image} />

              <SubTitle>{item.subTitle}</SubTitle>
            </Item>
          );
        })}
      </CardContainer>
    </BasketballArtStyled>
  );
};

export default BasketballArt;
