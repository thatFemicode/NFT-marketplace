import React, { useEffect, useRef } from "react";
import items from "./data";
import { RandomArtStyled } from "./RandomArtStyled";
import { CardContainer } from "../CardStyled/CardStyled";
import cardAnimation from "../animations";
import Card from "../CardStyled/Card";

const RandomArt = () => {
  let el = useRef();
  useEffect(() => {
    cardAnimation(el);
  }, []);
  return (
    <RandomArtStyled ref={el}>
      <CardContainer>
        {items.map((item) => {
          const { id } = item;
          return <Card key={id} item={item} />;
        })}
      </CardContainer>
    </RandomArtStyled>
  );
};

export default RandomArt;
