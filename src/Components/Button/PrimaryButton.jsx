import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  font-size: 0.9rem;
  padding: 0.25rem 0.85rem;
  border-radius: 9px 0 9px 0px;
  border-color: transparent;
  color: #fff;
  background-color: ${({ bgColor }) => bgColor};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ margin }) => margin || "1rem"};

  svg {
    width: 1.2rem;
  }
`;
const PrimaryButton = ({ name, bgColor, margin }) => {
  return (
    <ButtonStyled bgColor={bgColor} margin={margin}>
      {name}
      <svg
        viewBox="0 0 20 20"
        fill="none"
        class="w-5 ml-1.25 transition-transform duration-75 transform group-hover:translate-x-0.5 flex-shrink-0"
      >
        <path
          d="M6 10H14"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M10 6L14 10L10 14"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </ButtonStyled>
  );
};

export default PrimaryButton;
