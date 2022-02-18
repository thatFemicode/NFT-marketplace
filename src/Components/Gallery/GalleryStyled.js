import styled from "styled-components";

export const GalleryStyled = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding-left: 2rem;
  padding-right: 2rem;
  /* padding-top: 2rem; */
  @media (max-width: ${({ theme }) => theme.images}) {
    padding-top: 0;
  }
  .gallery {
    h1 {
      max-width: 600px;
      font-weight: 600;
      font-size: 2.7rem;
      line-height: 1.6;
      text-align: left;
      /* color: transparent; */

      span {
        color: #beaef0;
        &.express {
          color: #b06c49;
        }
      }
      @media (max-width: ${({ theme }) => theme.dont}) {
        font-size: 2.6rem;
      }
      @media (max-width: ${({ theme }) => theme.text}) {
        font-size: 2.2rem;
      }
      @media (max-width: ${({ theme }) => theme.desktop}) {
        font-size: 2.2rem;
      }
      @media (max-width: ${({ theme }) => theme.make}) {
        font-size: 1.8rem;
      }
      @media (max-width: ${({ theme }) => theme.max}) {
        font-size: 1.5rem;
        max-width: 400px;
      }
      @media (max-width: ${({ theme }) => theme.foot}) {
        font-size: 1.4rem;
      }
      @media (max-width: ${({ theme }) => theme.vSmall}) {
        font-size: 1.2rem;
      }
    }
    .carousel {
      padding-top: 2.5rem;
    }
  }
`;
