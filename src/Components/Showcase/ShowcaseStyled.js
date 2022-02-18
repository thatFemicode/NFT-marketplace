import styled from "styled-components";

export const ShowCaseStyled = styled.section`
  position: relative;
  /* height: 100%; */
  width: 100%;
  padding-top: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;

  .showcase {
    display: flex;
    &-carousel {
      flex: 2;
      .album-container {
        position: relative;
        height: 500px;
        width: 500px;
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

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .stripes {
          position: absolute;
          left: 0;
          bottom: -60px;
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
        }
      }
    }
    &-content {
      flex: 2;
      text-align: left;
      h1 {
      }
    }
  }
`;
