import styled from "styled-components";

export const ItemStyled = styled.main`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
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
    height: 100%;
    padding: 0 3rem;
    padding-top: 5rem;
    /* padding-top: 4rem; */
    @media (max-width: ${({ theme }) => theme.service}) {
      /* max-width: 400px; */
      flex-direction: column;
    }
  }
  .image {
    display: flex;
    flex-direction: column;
    flex: 1;
    .artist-details {
      display: flex;
      width: 100%;
      .artist {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
    }
  }
  .content {
    flex: 2;
    text-align: left;
    padding-left: 3rem;
    @media (max-width: ${({ theme }) => theme.service}) {
      /* max-width: 400px; */
      flex: unset;
    }

    h1 {
      font-size: 4rem;
      margin-bottom: 1rem;
    }
    p {
      margin-top: 1rem;
    }
    .artist-details {
      display: flex;
      width: 400px;
      align-items: center;
      justify-content: space-between;
      .artist {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: #000;
      }
    }
  }
`;
export const BackGround = styled.div`
  /* border-top-right-radius: 1rem; */
  border-radius: 1rem;
  width: 400px;
  height: 90%;
  /* border-radius: 50%; */
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${({ center }) => (center ? "center" : "")};

  @media (max-width: ${({ theme }) => theme.service}) {
    /* max-width: 400px; */
    flex: unset;
    width: 100%;
    height: 400px;
    border-radius: 0;
  }
`;
