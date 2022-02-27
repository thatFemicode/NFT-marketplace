import React from "react";
import { useNavigate } from "react-router-dom";
import { Item, Title, SubTitle } from "./CardStyled";
import { PlayerImg } from "../Img/ImgStyled";
const PlayerCard = ({ item }) => {
  const nav = useNavigate();
  const { id, title, image, subTitle, artistImage } = item;
  return (
    <div>
      <Item className="single">
        <span>
          <img className="artist" src={artistImage} alt="" />
          <Title>{title}</Title>
        </span>
        <PlayerImg
          onClick={() => {
            nav(`/item/${id}`, { state: item });
          }}
          src={image}
        />
        <SubTitle>{item.subTitle}</SubTitle>
      </Item>
    </div>
  );
};

export default PlayerCard;
