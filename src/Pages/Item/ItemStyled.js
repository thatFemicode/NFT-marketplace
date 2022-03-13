import styled from "styled-components";
import Bg from "./noise.png";

export const ItemStyled = styled.main`
  height: 100vh;
  overflow: hidden;
  display: flex;
  z-index: 50;
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
    overflow: auto;
    height: 100%;
  }

  .item-content {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 5rem;

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
      padding-top: 2rem;
    }

    h1 {
      font-size: 4rem;
      margin-bottom: 1rem;

      @media (max-width: ${({ theme }) => theme.dont}) {
        font-size: 3rem;
      }
      @media (max-width: ${({ theme }) => theme.service}) {
        font-size: 2.5rem;
      }
      @media (max-width: ${({ theme }) => theme.images}) {
        font-size: 1.8rem;
      }
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
  width: 450px;
  height: 90%;
  /* border-radius: 50%; */
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${({ center }) => (center ? "center" : "")};
  @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
    background-size: contain;
    background-position: top;
  }
  @media (max-width: ${({ theme }) => theme.service}) {
    height: 400px;
  }
  @media screen and (min-height: 1000px) and (max-height: 1024px) and (max-width: 768px) {
    background-size: cover;
  }
  @media (max-width: ${({ theme }) => theme.max}) {
    width: 300px;
    height: 350px;
  }
  @media (max-width: ${({ theme }) => theme.foot}) {
    width: 250px;
    height: 300px;
  }
`;
