import React, { useEffect, useRef } from "react";
import items from "./data";
import { PolygonArtStyled } from "./PolygonArtStyled";
import cardAnimation from "../animations";
import { CardContainer } from "../CardStyled/CardStyled";
import Card from "../CardStyled/Card";
const PolygonArt = () => {
  let el = useRef();
  useEffect(() => {
    cardAnimation(el);
  }, []);
  return (
    <PolygonArtStyled ref={el}>
      <CardContainer>
        {items.map((item) => {
          const { id } = item;
          return <Card key={id} item={item} />;
        })}
      </CardContainer>
    </PolygonArtStyled>
  );
};

export default PolygonArt;
