import React, { useEffect, useRef } from "react";
import items from "./data";
import Img from "../Img/ImgStyled";
import { RandomArtStyled } from "./RandomArtStyled";
import { useNavigate } from "react-router-dom";
import { CardContainer, Item, Title, SubTitle } from "../CardStyled/CardStyled";
import cardAnimation from "../animations";

const RandomArt = () => {
  const nav = useNavigate();
  let el = useRef();
  useEffect(() => {
    cardAnimation(el);
  }, []);
  return (
    <RandomArtStyled ref={el}>
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
    </RandomArtStyled>
  );
};

export default RandomArt;
