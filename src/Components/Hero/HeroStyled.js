import styled from "styled-components";

export const HeroStyled = styled.section`
  position: relative;
  padding-top: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;
  height: 100vh;
  width: 100%;
  z-index: 10;
  background-color: #f6f8fb;

  @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
    height: unset;
    padding-bottom: 3rem;
  }
  @media (max-width: ${({ theme }) => theme.service}) {
    height: 90vh;
    padding-top: 1rem;
  }
  @media screen and (min-height: 1100px) and (max-height: 1180px) and (max-width: 820px) {
    height: unset;
    padding-bottom: 0rem;
  }
  @media (max-width: ${({ theme }) => theme.text}) {
    padding-top: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.desktop}) {
    height: 100vh;
    padding-top: 5rem;
  }
  @media screen and (min-height: 100px) and (max-height: 500px) and (max-width: 1700px) {
    padding-bottom: 40rem;
    padding-top: 0rem;
  }
  @media screen and (min-height: 100px) and (max-height: 500px) and (max-width: 1200px) {
    padding-bottom: 34rem;
    padding-top: 0rem;
  }
  @media (max-width: ${({ theme }) => theme.make}) {
    padding-top: 4rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media screen and (min-height: 100px) and (max-height: 475px) and (max-width: 667px) {
    padding-bottom: 44rem;
    padding-top: 4rem;
  }
  @media (max-width: ${({ theme }) => theme.foot}) {
    height: 105vh;
    padding-top: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.vSmall}) {
    padding-top: 3rem;
  }
  @media (min-width: ${({ theme }) => theme.auth}) {
    height: unset;
  }
  .hero {
    height: 100%;
    width: 100%;
    display: flex;
    position: relative;
    @media (max-width: ${({ theme }) => theme.desktop}) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &-left {
      height: 100%;
      width: 100%;
      position: relative;
      flex: 2;
      text-align: left;
      padding-top: 8.5rem;
      padding-bottom: 8.5rem;

      @media (max-width: ${({ theme }) => theme.desktop}) {
        padding-top: 0rem;
        margin-top: 2rem;
        padding-bottom: 0rem;
      }
      @media screen and (min-height: 900px) and (max-height: 1024px) and (max-width: 768px) {
        padding-bottom: 3rem;
      }
      @media (max-width: ${({ theme }) => theme.images}) {
        padding-top: 1rem;
        padding-bottom: 0;
      }
      @media screen and (min-height: 100px) and (max-height: 475px) and (max-width: 667px) {
        /* padding-bottom: 44rem; */
        /* padding-top: 4rem; */
      }
      .linking {
        position: relative;
        display: inline-flex;
        /* justify-content: space-between; */
        align-items: center;
        padding-left: 0.625rem;
        padding-right: 0.725rem;
        border-radius: 9999px;
        background: #beaef0;
        padding-top: 0.3625rem;
        padding-bottom: 0.3625rem;
        color: rgba(0, 0, 0, 1);

        @media (max-width: ${({ theme }) => theme.blogNav}) {
          padding-left: 0.525rem;
          padding-right: 0.525rem;
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          margin-bottom: 0.5rem;
          padding-top: 0.3625rem;
          padding-bottom: 0.3625rem;
        }
        @media (max-width: ${({ theme }) => theme.se}) {
          padding-top: 0.1625rem;
          padding-bottom: 0.1625rem;
        }

        svg {
          display: block;
          vertical-align: middle;
          width: 1.25rem;
          @media (max-width: ${({ theme }) => theme.se}) {
            width: 0.9rem;
          }
        }

        .express {
          border-radius: 1.5rem;
          /* background-color: rgba(0, 85, 186, 1); */
          background: #fff;
          padding-left: 0.75rem;
          padding-right: 0.75rem;
          color: #000;
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
          font-size: 0.675rem;
          font-weight: 700;
          @media (max-width: ${({ theme }) => theme.images}) {
            font-size: 0.65rem;
          }
          @media (min-width: ${({ theme }) => theme.auth}) {
            font-size: 0.9rem;
          }
          @media (max-width: ${({ theme }) => theme.blogNav}) {
            font-size: 0.6rem;
          }
          @media (max-width: ${({ theme }) => theme.se}) {
            font-size: 0.5rem;
          }
        }
        .visit {
          margin-left: 0.63rem;
          font-size: 0.8125rem;
          @media (min-width: ${({ theme }) => theme.auth}) {
            font-size: 0.9rem;
          }
          @media (max-width: ${({ theme }) => theme.images}) {
            font-size: 0.75rem;
          }
          @media (max-width: ${({ theme }) => theme.blogNav}) {
            font-size: 0.7rem;
          }
          @media (max-width: ${({ theme }) => theme.se}) {
            font-size: 0.6rem;
          }
        }
      }
      h1 {
        max-width: 600px;
        font-weight: 600;
        font-size: 3rem;
        line-height: 1.6;
        /* color: transparent; */

        span {
          color: #beaef0;
          &.market {
            color: #b06c49;
          }
          /* background: conic-gradient(
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
          } */
        }
        @media (max-width: ${({ theme }) => theme.mins}) {
          font-size: 2.7rem;
        }
        @media (max-width: ${({ theme }) => theme.dont}) {
          font-size: 2.6rem;
        }
        @media (max-width: ${({ theme }) => theme.text}) {
          font-size: 2.2rem;
          max-width: 400px;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          font-size: 2.2rem;
          max-width: 450px;
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          font-size: 1.8rem;
          max-width: 400px;
        }
        @media (max-width: ${({ theme }) => theme.max}) {
          font-size: 1.5rem;
          max-width: 400px;
        }
        @media (max-width: ${({ theme }) => theme.foot}) {
          font-size: 1.4rem;
          max-width: 400px;
        }
        @media (max-width: ${({ theme }) => theme.se}) {
          font-size: 1.2rem;
        }
      }
      p {
        max-width: 500px;
        line-height: 1.6;
        font-weight: 700;
        font-size: 1rem;
        @media (max-width: ${({ theme }) => theme.max}) {
          font-size: 0.9rem;
        }
        @media (max-width: ${({ theme }) => theme.se}) {
          font-size: 0.7rem;
        }
      }
    }
    &-right {
      display: block;
      position: relative;
      flex: 2;
      width: 100%;
      height: 20px;
      position: relative;
      /* min-height: 100%; */
      @media (max-width: ${({ theme }) => theme.desktop}) {
        width: 50%;
      }

      @media screen and (min-height: 812px) and (max-height: 896px) {
        margin-top: 3rem;
      }
      .box {
        position: absolute;
        /* display: block; */
        &-1 {
          top: 50%;
          background-repeat: no-repeat;
          height: 400px;
          width: 250px;
          top: 150px;
          left: 10%;
          @media (max-width: ${({ theme }) => theme.mins}) {
          }
          @media (max-width: ${({ theme }) => theme.mind}) {
            height: 300px;
            width: 200px;
            top: 190px;
            left: 15%;
          }
          @media (max-width: ${({ theme }) => theme.dont}) {
            width: 180px;
            height: 290px;
            left: 10%;
          }
          @media (max-width: ${({ theme }) => theme.text}) {
            left: 5%;
            width: 170px;
            height: 280px;
          }
          @media (max-width: ${({ theme }) => theme.desktop}) {
            left: 0%;

            width: 160px;
            height: 260px;
            top: 50px;
          }
          @media (max-width: ${({ theme }) => theme.images}) {
            width: 150px;
            height: 260px;
            top: 40px;
          }
          @media (max-width: ${({ theme }) => theme.make}) {
            left: -60px;
            width: 130px;
            height: 210px;
          }

          @media (max-width: ${({ theme }) => theme.max}) {
            width: 130px;
            height: 210px;
            left: -60px;
            top: 70px;
          }
          @media (max-width: ${({ theme }) => theme.foot}) {
            width: 110px;
            height: 170px;
            top: 60px;
          }
          @media (max-width: ${({ theme }) => theme.se}) {
            width: 90px;
            height: 150px;
            top: 50px;
          }
        }
        &-2 {
          background-size: cover;
          height: 240px;
          width: 200px;
          left: 50%;
          top: 74px;
          @media (max-width: ${({ theme }) => theme.mins}) {
            width: 180px;
            left: 330px;
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
            top: 145px;
          }
          @media (max-width: ${({ theme }) => theme.text}) {
            left: 57%;
            width: 120px;
            height: 170px;
          }

          @media (max-width: ${({ theme }) => theme.desktop}) {
            left: 180px;
            top: 20px;
            width: 110px;
            height: 160px;
          }
          @media (max-width: ${({ theme }) => theme.images}) {
            left: 170px;
            width: 110px;

            top: 0px;
          }
          @media (max-width: ${({ theme }) => theme.make}) {
            left: 90px;
            width: 100px;
            height: 130px;
            top: 4px;
          }
          @media (max-width: ${({ theme }) => theme.max}) {
            left: 90px;
            width: 100px;
            height: 130px;
            top: 30px;
          }
          @media (max-width: ${({ theme }) => theme.foot}) {
            left: 65px;
            width: 100px;
            height: 116px;
            top: 24px;
          }
          @media (max-width: ${({ theme }) => theme.teamd}) {
            left: 65px;
            width: 100px;
            height: 112px;
          }
          @media (max-width: ${({ theme }) => theme.se}) {
            width: 80px;
            height: 120px;
            top: 25px;
            left: 45px;
          }
        }
        &-3 {
          top: 340px;
          width: 240px;
          height: 200px;
          position: absolute;
          height: 280px;
          width: 200px;
          left: 50%;

          @media (max-width: ${({ theme }) => theme.mins}) {
            width: 180px;
            left: 330px;
          }
          @media (max-width: ${({ theme }) => theme.mind}) {
            width: 170px;
            height: 210px;
            left: 60%;
            top: 350px;
          }

          @media (max-width: ${({ theme }) => theme.dont}) {
            width: 140px;
            height: 180px;
            left: 245px;
            top: 348px;
          }

          @media (max-width: ${({ theme }) => theme.text}) {
            top: 335px;
            left: 57%;
            width: 120px;
            height: 170px;
          }
          @media (max-width: ${({ theme }) => theme.desktop}) {
            left: 180px;
            top: 200px;
            width: 110px;
            height: 150px;
          }
          @media (max-width: ${({ theme }) => theme.desk}) {
          }
          @media (max-width: ${({ theme }) => theme.images}) {
            left: 170px;
            width: 110px;

            top: 180px;
          }
          @media (max-width: ${({ theme }) => theme.make}) {
            left: 90px;
            width: 100px;
            height: 130px;
            top: 150px;
          }
          @media (max-width: ${({ theme }) => theme.max}) {
            width: 100px;
            height: 145px;
            top: 180px;
            left: 90px;
          }
          @media (max-width: ${({ theme }) => theme.foot}) {
            left: 65px;
            width: 100px;
            height: 116px;
            top: 157px;
          }
          @media (max-width: ${({ theme }) => theme.teamd}) {
            left: 65px;
            width: 100px;
            height: 112px;
            top: 155px;
          }
          @media (max-width: ${({ theme }) => theme.se}) {
            width: 80px;
            height: 120px;
            top: 159px;
            left: 45px;
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
