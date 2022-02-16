import styled from "styled-components";

export const IconCarouselStyled = styled.div`
  width: 100%;
  height: 380px;
  position: relative;
  overflow-y: visible;
  overflow-x: visible;

  @media (max-width: ${({ theme }) => theme.max}) {
    width: 320px;
    overflow-x: hidden;
    overflow-y: hidden;
    padding-top: 1.4rem;
  }
  /* padding-top: 2rem; */
`;
