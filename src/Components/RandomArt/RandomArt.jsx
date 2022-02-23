import React from "react";
import items from "./data";
import Img from "../Img/ImgStyled";
import { RandomArtStyled, Item, Title, SubTitle } from "./RandomArtStyled";
import { useNavigate } from "react-router-dom";

const RandomArt = () => {
  const nav = useNavigate();

  return (
    <RandomArtStyled>
      {items.map((item) => {
        const { id } = item;

        return (
          <Item
            className="single"
            onClick={() => {
              nav(`/item/${id}`, { state: item });
            }}
          >
            <Img src={item.image} />
            <Title>{item.title}</Title>
            <SubTitle>{item.subTitle}</SubTitle>
          </Item>
        );
      })}
    </RandomArtStyled>
  );
};

export default RandomArt;
