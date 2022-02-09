import styled from "styled-components";

export const HeroStyled = styled.section`
  position: relative;
  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  height: 100%;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mind}) {
  }
  @media (max-width: ${({ theme }) => theme.service}) {
    padding-top: 4rem;
  }
  .hero {
    height: 100%;
    width: 100%;
    /* position: relative; */
    display: flex;
    @media (max-width: ${({ theme }) => theme.text}) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &-left {
      width: 100%;
      position: relative;
      flex: 2;
      text-align: left;
      padding-top: 8.5rem;
      /* i will use 4.5 before the breakpoint */
      /* @media (max-width: ${({ theme }) => theme.mind}) {
        flex: 3;
      } */
      @media (max-width: ${({ theme }) => theme.text}) {
        padding-top: 0;
      }
      h1 {
        max-width: 500px;
        font-size: 4rem;
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
        animation: expand-rev 0.5s ease forwards;
        cursor: pointer;
        &:hover {
          animation: expand 0.5s ease forwards;
        }
      }
    }
    &-right {
      position: relative;
      flex: 2;
      width: 100%;
      display: grid;
      place-items: center;
      /* @media (max-width: ${({ theme }) => theme.mind}) {
        flex: 3;
      } */
      .box {
        position: absolute;

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
          left: 10%;
          /* @media screen and (max-width: 900px) {
            height: 250px;
            width: 150px;
            top: 100px;
            left: -120px;
          } */
          @media (max-width: ${({ theme }) => theme.mins}) {
            /* width: 220px;
            height: 350px; */
            /* left: -19%; */
          }
          @media (max-width: ${({ theme }) => theme.mind}) {
            height: 300px;
            width: 200px;
            /* width: 190px;
            height: 300px; */
            top: 190px;
            left: 15%;
          }
          @media (max-width: ${({ theme }) => theme.dont}) {
            width: 180px;
            height: 290px;
            left: 10%;
          }
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
          height: 240px;
          width: 200px;
          left: 50%;
          top: 74px; /* top: 100px; */
          /* @media screen and (max-width: 1100px) {
            height: 250px;
            width: 200px;
          } */
          /* @media screen and (max-width: 900px) {
            height: 150px;
            width: 150px;

            left: 220px;
          } */
          @media (max-width: ${({ theme }) => theme.mins}) {
            width: 180px;
            /* height: 230px; */
            left: 330px;
            /* top: 105px; */
          }
          @media (max-width: ${({ theme }) => theme.mind}) {
            width: 170px;
            height: 200px;
            left: 60%;
            top: 125px;
          }
          @media (max-width: ${({ theme }) => theme.dont}) {
            width: 140px;
            height: 180px;
            left: 245px;
            top: 140px;
            /* top: 400px; */
          }
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
          top: 340px;

          width: 240px;
          height: 200px;
          position: absolute;
          height: 280px;
          width: 200px;
          left: 50%;
          /* @media screen and (max-width: 900px) {
            height: 150px;
            width: 150px;
            top: 250px;
            left: 220px;
          } */
          @media (max-width: ${({ theme }) => theme.mins}) {
            width: 180px;
            /* height: 230px; */
            /* left: 56%; */
            left: 330px;
            /* top: 360px; */
          }
          @media (max-width: ${({ theme }) => theme.mind}) {
            width: 170px;
            height: 210px;
            left: 60%;
            top: 350px;
            /* top: 95%; */
          }

          @media (max-width: ${({ theme }) => theme.dont}) {
            width: 140px;
            height: 180px;
            left: 245px;
          }
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
  @keyframes expand {
    0% {
      background-size: 50%;
      background-position: 0 0;
    }
    20% {
      background-size: 55%;
      background-position: 0 1em;
    }
    100% {
      background-size: 325%;
      background-position: -10em -4em;
    }
  }

  @keyframes expand-rev {
    0% {
      background-size: 325%;
      background-position: -10em -4em;
    }
    20% {
      background-size: 55%;
      background-position: 0 1em;
    }
    100% {
      background-size: 50%;
      background-position: 0 0;
    }
  }
`;
