import React from "react";
import {
  CelebrityArtStyled,
  Item,
  Title,
  SubTitle,
} from "./CelebrityArtStyled";
import items from "./data";
import { useNavigate } from "react-router-dom";
import Img from "../Img/ImgStyled";

const CelebrityArt = () => {
  const nav = useNavigate();

  return (
    <CelebrityArtStyled>
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
    </CelebrityArtStyled>
  );
};

export default CelebrityArt;
