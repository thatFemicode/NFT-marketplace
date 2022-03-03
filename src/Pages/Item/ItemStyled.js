import styled from "styled-components";
import Bg from "./noise.png";
export const ItemStyled = styled.main`
  height: 100vh;

  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
  background: url(${Bg});
  background-size: contain;
  width: 100%;
  background-repeat: repeat;
  padding-top: 5rem;
  padding-bottom: 4rem;
  @media (max-width: ${({ theme }) => theme.service}) {
    /* max-width: 400px; */
    overflow: visible;
    height: 100%;
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

    @media (max-width: ${({ theme }) => theme.service}) {
      /* max-width: 400px; */
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 1rem;
    }
  }
  .image {
    flex: 1;
    height: 100%;
    @media (max-width: ${({ theme }) => theme.service}) {
      /* max-width: 400px; */
      flex: unset;
    }
  }
  .content {
    flex: 2;
    width: 100%;
    height: 100%;
    text-align: left;
    padding-left: 3rem;
    @media (max-width: ${({ theme }) => theme.service}) {
      /* max-width: 400px; */
      flex: unset;
      padding-left: 1rem;
    }

    h1 {
      font-size: 4rem;
      margin-bottom: 1rem;
      color: transparent;
      background: conic-gradient(
        #d9d7f1 12%,
        #baabda 12%,
        #baabda 33%,
        #e7fbbe 33%,
        #e7fbbe 55%,
        #ffcbcb 55%,
        #ffcbcb 70%,
        #b5deff 70%,
        #b5deff 87%,
        #f7d1ba 87%
      );
      background-size: 50%;
      background-clip: text;
      -webkit-background-clip: text;
      @media (max-width: ${({ theme }) => theme.dont}) {
        font-size: 3rem;
      }
      @media (max-width: ${({ theme }) => theme.service}) {
        font-size: 2.5rem;
      }
    }
    h3 {
      font-size: 1.5rem;
    }
    .collection {
      margin-top: 1rem;
    }
    .description {
      margin-top: 1rem;
    }
    p {
      margin-top: 1rem;
    }
    .artist-details {
      display: flex;
      width: 180px;
      align-items: center;
      justify-content: space-between;
      margin-top: 1rem;
      .artist {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: #fff;
      }

      p {
        font-size: 1.5rem;
        text-transform: uppercase;
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
    height: 400px;
  }
`;
