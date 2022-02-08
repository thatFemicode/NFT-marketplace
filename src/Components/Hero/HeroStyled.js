// import styled from "styled-components";
import styled from "styled-components";

export const HeroStyled = styled.section`
  position: relative;
  /* overflow: hidden; */

  padding-top: 5rem;
  /* padding-left: 2rem;
  padding-right: 2rem; */
  height: 100%;
  width: 100%;
  /* display: flex;
  align-items: center; */

  .hero {
    height: 100%;
    width: 100%;

    /* position: relative; */
    display: flex;
    /* align-items: center; */
    /* justify-content: space-between; */
    /* width: 100%; */
    /* height: 100vh; */
    /* flex-direction: column-reverse; */
    /* justify-content: space-between; */
    /* align-items: center; */
    @media screen and (max-width: 900px) {
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
          background-size: 20%;
          /* background-size: cover; */
          height: 400px;
          width: 250px;
          @media screen and (max-width: 900px) {
            height: 250px;
            width: 150px;
            top: 100px;
            left: -120px;
          }
          @media screen and (max-width: 450px) {
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
          right: 130px;
          background-size: cover;
          /* height: 350px;
          width: 300px; */
          height: 250px;
          width: 200px;

          @media screen and (max-width: 1100px) {
            height: 250px;
            width: 200px;
          }
          @media screen and (max-width: 900px) {
            height: 150px;
            width: 150px;

            left: 220px;
          }
          @media screen and (max-width: 450px) {
            height: 120px;
            width: 120px;
            left: 50%;
            top: 100px;
            /* left: -23%; */
            /* transform: translateX(50%); */
          }
        }
        &-3 {
          position: absolute;

          /* top: 500px; */
          top: 400px;
          right: 70px;
          background-size: cover;
          width: 250px;
          height: 200px;
          border-radius: 1rem;
          @media screen and (max-width: 900px) {
            height: 150px;
            width: 150px;
            top: 250px;
            left: 220px;
          }
          @media screen and (max-width: 450px) {
            height: 120px;
            width: 120px;
            left: 50%;
            top: 268px;
            /* left: -23%; */
            /* transform: translateX(50%); */
          }
        }
      }
    }
  }
`;
