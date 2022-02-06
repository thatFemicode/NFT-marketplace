import styled from "styled-components";
export const CustomCursorStyled = styled.div`
  .secondary-cursor {
    z-index: 10;
    border-radius: 50%;
    pointer-events: none;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    position: fixed;
    background-image: transparent;
    border: 3px solid #000;
    transition: width 0.5s cubic-bezier(0.19, 1, 0.22, 1),
      height 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    transform-origin: center;
    pointer-events: none;
    @media screen and (max-width: 680px) {
      display: none;
    }
    &.small {
      width: 1.8rem;
      height: 1.8rem;
    }
    &.regular {
      width: 12rem;
      height: 12rem;
    }
    &.medium {
      width: 6rem;
      height: 6rem;
    }
  }
`;
