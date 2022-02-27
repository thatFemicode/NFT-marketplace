import React, { useEffect, useRef } from "react";
import { ApeArtStyled } from "./ApeArtStyled";
import items from "./data";
import { useNavigate } from "react-router-dom";
import Img from "../Img/ImgStyled";
import { CardContainer, Item, Title, SubTitle } from "../CardStyled/CardStyled";
import cardAnimation from "../animations";
import Card from "../CardStyled/Card";

const ApeArt = () => {
  const nav = useNavigate();
  let el = useRef();

  useEffect(() => {
    cardAnimation(el);
  }, []);
  return (
    <ApeArtStyled ref={el}>
      <CardContainer>
        {items.map((item) => {
          const { id } = item;
          return <Card key={id} item={item} />;
        })}
      </CardContainer>
    </ApeArtStyled>
  );
};

export default ApeArt;
