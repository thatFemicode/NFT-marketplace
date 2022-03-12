import styled from "styled-components";

export const MarketPlaceTopMenuStyled = styled.nav`
  display: flex;

  justify-content: space-between;
  align-items: center;
  /* background-color: rgba(255, 255, 255, 0.01); */
  position: relative;
  width: 100%;
  /* height: 60px; */
  z-index: 40;
  max-width: 1200px;
  padding: 0rem 2rem;
  padding-top: 2rem;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.images}) {
    padding-top: 1rem;
  }
  img {
    width: 40px;
    height: 40px;
    @media (max-width: ${({ theme }) => theme.max}) {
      width: 30px;
      height: 30px;
    }
  }
  h1 {
    font-size: 0.9rem;
  }
`;
