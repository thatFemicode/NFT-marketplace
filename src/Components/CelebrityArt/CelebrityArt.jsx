import React, { useEffect, useRef } from "react";
import { CelebrityArtStyled } from "./CelebrityArtStyled";
import items from "./data";
import { useNavigate } from "react-router-dom";
import Img from "../Img/ImgStyled";
import { CardContainer, Item, Title, SubTitle } from "../CardStyled/CardStyled";
import cardAnimation from "../animations";

const CelebrityArt = () => {
  const nav = useNavigate();
  let el = useRef();
  useEffect(() => {
    cardAnimation(el);
  }, []);
  return (
    <CelebrityArtStyled ref={el}>
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
    </CelebrityArtStyled>
  );
};

export default CelebrityArt;
