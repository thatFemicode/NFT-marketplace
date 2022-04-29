import styled from "styled-components";

export const ShowCaseStyled = styled.section`
  position: relative;
  height: 100%;
  width: 100%;
  padding-top: 8rem;
  padding-bottom: 8rem;
  padding-left: 2rem;
  padding-right: 2rem;
  /* background-color: #f6f8fb; */
  @media (max-width: ${({ theme }) => theme.desktop}) {
    padding-top: 3rem;
  }
  @media (max-width: ${({ theme }) => theme.make}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.max}) {
    padding-top: 0rem;
  }
  .showcase {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.images}) {
      flex-direction: column-reverse;
    }
    &-carousel {
      @media (max-width: ${({ theme }) => theme.images}) {
        padding-top: 3rem;
      }
      flex: 1;
      .album-container {
        position: relative;
        /* height: 400px;
        width: 400px; */
        height: 350px;
        width: 350px;
        /* border-radius: 2rem; */
        @media (max-width: ${({ theme }) => theme.kobe}) {
          height: 300px;
          width: 300px;
        }
        @media (max-width: ${({ theme }) => theme.text}) {
          height: 250px;
          width: 250px;
        }
        @media (max-width: ${({ theme }) => theme.images}) {
          height: 200px;
          width: 200px;
        }
        overflow: hidden;

        /* background-color: #040404; */
        &:after {
          content: "";
          position: absolute;
          /* background: #040404d5; */
          height: inherit;
          width: inherit;
          top: 0;
          left: 0;
          right: 0;
        }
        .image {
          position: relative;
          height: 100%;
          width: 100%;
          border-radius: 2rem;
          img {
            width: 100%;
            height: 100%;
            border-radius: 2rem;
            object-fit: cover;
          }
        }
        /* .stripes {
          position: absolute;
          right: 0;
          bottom: -20px;
          width: 100%;
          z-index: 100;
          height: 50px;
          display: flex;
          align-items: center;
          span {
            width: 60px;
            height: 5px;
            background-color: #000;
            content: "";
            display: block;
            border-radius: 10px;
            margin: 1rem;
            cursor: pointer;
          }
        } */
      }
    }
    &-content {
      flex: 2;
      text-align: left;
      /* padding-left: 3rem; */
      @media (max-width: ${({ theme }) => theme.kobe}) {
        padding-left: 3rem;
      }
      @media (max-width: ${({ theme }) => theme.images}) {
        padding-left: 0;
      }
      h1 {
        font-size: 3rem;
        line-height: 1.4;
        @media (max-width: ${({ theme }) => theme.service}) {
          font-size: 2.5rem;
        }
        @media (max-width: ${({ theme }) => theme.text}) {
          font-size: 2rem;
        }
        /* max-width: 600px; */
        span {
          color: #87ceeb;
          &.collection {
            color: #ff7f7f;
          }
        }
      }
      p {
        max-width: 400px;
        line-height: 1.6;
      }
    }
  }
`;
