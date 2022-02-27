import React, { useEffect, useRef } from "react";
import { CelebrityArtStyled } from "./CelebrityArtStyled";
import items from "./data";
import { CardContainer } from "../CardStyled/CardStyled";
import cardAnimation from "../animations";
import Card from "../CardStyled/Card";

const CelebrityArt = () => {
  let el = useRef();
  useEffect(() => {
    cardAnimation(el);
  }, []);
  return (
    <CelebrityArtStyled ref={el}>
      <CardContainer>
        {items.map((item) => {
          const { id } = item;
          return <Card key={id} item={item} />;
        })}
      </CardContainer>
    </CelebrityArtStyled>
  );
};

export default CelebrityArt;
