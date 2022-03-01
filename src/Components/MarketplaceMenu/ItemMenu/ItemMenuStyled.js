import styled from "styled-components";
export const ItemMenuStyled = styled.div`
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
  height: 40px;
  margin: 0 auto;
  position: absolute;
  top: 0;
  img {
    width: 40px;
    height: 40px;
  }
  h1 {
    font-size: 0.9rem;
  }
`;