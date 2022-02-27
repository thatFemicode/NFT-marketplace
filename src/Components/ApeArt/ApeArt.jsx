import React, { useEffect, useRef } from "react";
import { ApeArtStyled } from "./ApeArtStyled";
import items from "./data";
import { CardContainer } from "../CardStyled/CardStyled";
import cardAnimation from "../animations";
import Card from "../CardStyled/Card";

const ApeArt = () => {
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
