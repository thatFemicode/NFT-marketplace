import React from "react";
import { DetailsStyled } from "./DetailsStyled";

const Details = ({ name, info }) => {
  return (
    <DetailsStyled>
      <h3>{name}:</h3>
      <p>{info}</p>
    </DetailsStyled>
  );
};

export default Details;
