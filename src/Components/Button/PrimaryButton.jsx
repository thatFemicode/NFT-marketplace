import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  font-size: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  border-color: transparent;
  color: white;
  background-color: #1d428a;
  cursor: pointer;
`;
const PrimaryButton = ({ name }) => {
  return <ButtonStyled>{name}</ButtonStyled>;
};

export default PrimaryButton;
