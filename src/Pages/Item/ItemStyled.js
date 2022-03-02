import styled from "styled-components";

export const ItemStyled = styled.main`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: ${({ theme }) => theme.images}) {
    /* max-width: 400px; */
    align-items: unset;
  }
  img {
    /* height: 600px;
    width: 600px; */
    /* border-radius: 50%; */
  }
  .item-content {
    display: flex;
    width: 100%;
    /* padding-top: 4rem; */
    @media (max-width: ${({ theme }) => theme.images}) {
      /* max-width: 400px; */
      flex-direction: column;
    }
  }
  .content {
    flex: 2;
    @media (max-width: ${({ theme }) => theme.images}) {
      /* max-width: 400px; */
      flex: unset;
    }
  }
`;
export const BackGround = styled.div`
  flex: 2;
  border-top-right-radius: 1rem;
  width: 400px;
  height: 800px;
  /* border-radius: 50%; */
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: ${({ theme }) => theme.images}) {
    /* max-width: 400px; */
    flex: unset;
    width: 100%;
    height: 400px;
    border-radius: 0;
  }
`;
