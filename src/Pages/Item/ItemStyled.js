import styled from "styled-components";

export const ItemStyled = styled.main`
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    /* height: 600px;
    width: 600px; */
    /* border-radius: 50%; */
  }
`;
export const BackGround = styled.div`
  border-radius: 1rem;
  width: 400px;
  height: 400px;
  /* border-radius: 50%; */
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
