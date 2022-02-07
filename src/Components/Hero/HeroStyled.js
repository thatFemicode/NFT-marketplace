import styled from "styled-components";
export const HeroStyled = styled.section`
  position: relative;
  /* overflow: hidden; */
  padding-top: 5rem;
  height: 100%;
  .hero {
    height: 100%;
    /* position: relative; */
    display: flex;
    /* align-items: center; */
    /* justify-content: space-between; */
    /* width: 100%; */
    /* height: 100vh; */
    /* flex-direction: column-reverse; */
    /* justify-content: space-between; */
    /* align-items: center; */

    &-left {
      position: relative;
      flex: 2;
    }
    &-right {
      position: relative;
      flex: 2;
      .box {
        position: absolute;
        border-radius: 50%;
        &-1 {
          top: 0;
          left: 0;
          background-repeat: no-repeat;
          background-size: 20%;
          /* background-size: cover; */
          height: 350px;
          width: 250px;
        }
        &-2 {
          top: 250px;
          right: 310px;
          background-size: cover;
          height: 350px;
          width: 300px;
          border-radius: 1rem;
          @media screen and (max-width: 1100px) {
            height: 250px;
            width: 200px;
          }
        }
        &-3 {
          top: 500px;
          right: 10px;
          background-size: cover;
          width: 250px;
          height: 200px;
          border-radius: 1rem;
        }
      }
    }
  }
`;
