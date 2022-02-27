import React from "react";
import { useNavigate } from "react-router-dom";
import { Item, Title } from "./CardStyled";
import Img from "../Img/ImgStyled";

const Card = ({ item }) => {
  const nav = useNavigate();
  const { id, title, image, artistImage } = item;
  return (
    <Item className="single">
      <span>
        <img className="artist" src={artistImage} alt="" />
        <Title>{title}</Title>
      </span>
      <Img
        onClick={() => {
          nav(`/item/${id}`, { state: item });
        }}
        src={image}
      />
    </Item>
  );
};

export default Card;
