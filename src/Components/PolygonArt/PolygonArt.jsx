import React, { useEffect, useRef } from "react";
import Img from "../Img/ImgStyled";
import items from "./data";
import { PolygonArtStyled } from "./PolygonArtStyled";
import { useNavigate } from "react-router-dom";
import cardAnimation from "../animations";
import { CardContainer, Item, Title, SubTitle } from "../CardStyled/CardStyled";

const PolygonArt = () => {
  const nav = useNavigate();
  let el = useRef();
  useEffect(() => {
    cardAnimation(el);
  }, []);
  return (
    <PolygonArtStyled ref={el}>
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
    </PolygonArtStyled>
  );
};

export default PolygonArt;
