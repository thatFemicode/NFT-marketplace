import React from "react";
import { useNavigate } from "react-router-dom";
import { Item, Title, Highlight } from "./CardStyled";
import { PlayerImg } from "../Img/ImgStyled";

const PlayerCard = ({ item }) => {
  const nav = useNavigate();
  const { id, title, image } = item;
  return (
    <div>
      <Item className="single">
        <Highlight>
          <Title>{title}</Title>
        </Highlight>
        <PlayerImg
          onClick={() => {
            nav(`/item/${id}`, { state: item });
          }}
          src={image}
        />
      </Item>
    </div>
  );
};

export default PlayerCard;
