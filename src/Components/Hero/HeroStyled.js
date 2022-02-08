// import styled from "styled-components";
import styled from "styled-components";

export const HeroStyled = styled.section`
  position: relative;

  padding-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  height: 100%;
  width: 100%;

  .hero {
    height: 100%;
    width: 100%;

    /* position: relative; */
    display: flex;

    align-items: center;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &-left {
      width: 100%;
      position: relative;
      flex: 2;
    }
    &-right {
      position: relative;
      flex: 2;
      width: 100%;
      display: grid;
      place-items: center;
      .box {
        position: relative;

        &-1 {
          top: 50%;
          /* transform: translateY(-50%); */
          /* left: -50px; */
          background-repeat: no-repeat;

          /* background-size: cover; */
          height: 400px;
          width: 250px;
          /* height: 200px;
          width: 130px; */
          top: 150px;
          left: -22%;
          /* @media screen and (max-width: 900px) {
            height: 250px;
            width: 150px;
            top: 100px;
            left: -120px;
          } */
          @media screen and (max-width: 545px) {
            height: 200px;
            width: 130px;
            top: 150px;
            left: -23%;
            /* transform: translateX(50%); */
          }
        }
        &-2 {
          position: absolute;
          /* top: 250px; */
          background-size: cover;
          /* height: 350px;
          width: 300px; */
          height: 250px;
          width: 200px;
          left: 50%;
          /* top: 100px; */
          /* @media screen and (max-width: 1100px) {
            height: 250px;
            width: 200px;
          } */
          /* @media screen and (max-width: 900px) {
            height: 150px;
            width: 150px;

            left: 220px;
          } */
          @media screen and (max-width: 545px) {
            height: 120px;
            width: 120px;
            left: 47%;
            top: 100px;
            /* left: -23%; */
            /* transform: translateX(50%); */
          }
        }
        &-3 {
          position: absolute;

          /* top: 500px; */
          top: 400px;

          width: 250px;
          height: 200px;
          position: absolute;
          height: 300px;
          width: 200px;
          left: 50%;
          /* @media screen and (max-width: 900px) {
            height: 150px;
            width: 150px;
            top: 250px;
            left: 220px;
          } */
          @media screen and (max-width: 545px) {
            height: 120px;
            width: 120px;
            left: 47%;
            top: 268px;
            /* left: -23%; */
            /* transform: translateX(50%); */
          }
        }
      }
    }
  }
`;
