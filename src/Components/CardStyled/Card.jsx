import React from "react";
import { useNavigate } from "react-router-dom";
import { Item, Title, Highlight } from "./CardStyled";
import Img from "../Img/ImgStyled";

const Card = ({ item }) => {
  const nav = useNavigate();
  const { id, title, image } = item;
  return (
    <Item className="single">
      <Highlight>
        <Title>{title}</Title>
      </Highlight>
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
