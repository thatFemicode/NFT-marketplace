import React from "react";
import { useNavigate } from "react-router-dom";
import { Item, Title, SubTitle } from "./CardStyled";
import Img from "../Img/ImgStyled";
const Card = ({ item }) => {
  const nav = useNavigate();
  const { id, title, image, subTitle, artistImage } = item;
  return (
    <Item
      onClick={() => {
        nav(`/item/${id}`, { state: item });
      }}
      className="single"
    >
      <span>
        <img className="artist" src={item.artistImage} alt="" />
        <Title>{item.title}</Title>
      </span>
      <Img src={item.image} />

      <SubTitle>{item.subTitle}</SubTitle>
    </Item>
  );
};

export default Card;
