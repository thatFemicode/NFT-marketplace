import React, { useEffect, useRef } from "react";
import { BasketballArtStyled } from "./BasketballArtStyled";
import items from "./data";
import { CardContainer } from "../CardStyled/CardStyled";
import cardAnimation from "../animations";
import PlayerCard from "../CardStyled/PlayerCard";

const BasketballArt = () => {
  let el = useRef();

  useEffect(() => {
    cardAnimation(el);
  }, []);
  return (
    <BasketballArtStyled ref={el}>
      <CardContainer>
        {items.map((item) => {
          const { id } = item;
          return <PlayerCard key={id} item={item} />;
        })}
      </CardContainer>
    </BasketballArtStyled>
  );
};

export default BasketballArt;
