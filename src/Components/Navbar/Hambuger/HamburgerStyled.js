import styled from "styled-components";
import Ape from "./Img/MonkBoredApe.jpg";
import Avocado from "./Img/Avocado.png";
import Basket from "./Img/StephCurry.jpg";
import Celeb from "./Img/Drake.png";
import Random from "./Img/MoneyDrown.png";
import Logo from "./Img/slack.svg";
export const HamburgerStyled = styled.div`
  display: none;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    display: none;
  }
  .menu-secondary-background-color {
    /* background: #55d3f5; */
    background: #80b9f9;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: -1;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      display: none;
    }
  }
  .menu-primary-background-color {
    /* background: #ffc72c; */
    background: #64e5a7;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: -1;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      display: none;
    }
  }
  .menu-layer {
    position: relative;
    background: #fff;
    height: 100%;
    overflow: hidden;
    z-index: -1;
    width: 100%;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      display: none;
    }

    /* overflow: auto; */
    @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
      overflow: auto;
    }
    @media (max-width: ${({ theme }) => theme.images}) {
      overflow: hidden;
    }
  }
  .wrapper {
    position: relative;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 6rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .about {
      margin-bottom: 2rem;
      @media (max-width: ${({ theme }) => theme.make}) {
        margin-bottom: 1rem;
      }
      h3 {
        text-align: left;
        font-size: 1.3rem;
        @media (max-width: ${({ theme }) => theme.make}) {
          font-size: 1.2rem;
        }
        @media (max-width: ${({ theme }) => theme.max}) {
          font-size: 1rem;
        }
      }
      li {
        display: flex;
        align-items: center;
        margin-top: 10px;
        transition: all 0.5s ease;
        cursor: pointer;

        &:hover {
          opacity: 0.5;
        }
        div {
          margin-left: 5px;

          p {
            /* margin-top: 10px; */
            text-align: left;
            font-size: 0.75rem;
            @media (max-width: ${({ theme }) => theme.max}) {
              font-size: 0.65rem;
            }
            @media (max-width: ${({ theme }) => theme.se}) {
              font-size: 0.53rem;
            }
          }
        }

        span {
          display: inline-block;
          width: 14px;
          height: 14px;
          margin-right: 8px;
          background: #80b9f9;
          border-radius: 3.5px;
        }
      }
    }

    .collection {
      margin-bottom: 2rem;
      @media (max-width: ${({ theme }) => theme.make}) {
        margin-bottom: 1rem;
      }
      /* width: 100%; */
      h3 {
        text-align: left;
        font-size: 1.3rem;
        @media (max-width: ${({ theme }) => theme.make}) {
          font-size: 1.2rem;
        }
        @media (max-width: ${({ theme }) => theme.max}) {
          font-size: 1rem;
        }
      }
      &-main {
        padding-top: 1rem;
        display: grid;
        grid-template-columns: repeat(2, minmax(0px, 1fr));
        gap: 1.4rem;
        @media (max-width: ${({ theme }) => theme.images}) {
          grid-template-columns: repeat(1, minmax(0px, 1fr));
        }
        @media (max-width: ${({ theme }) => theme.max}) {
          gap: 1rem;
          padding-top: 0.5rem;
        }

        li {
          width: 100%;
          display: flex;
          align-items: center;
          transition: all 0.5s ease;
          cursor: pointer;
          &:hover {
            opacity: 0.5;
          }
          div {
            margin-left: 0.7rem;
          }
          h3 {
            font-size: 0.9rem;
          }
          p {
            font-size: 0.65rem;
            @media (max-width: ${({ theme }) => theme.se}) {
              font-size: 0.55rem;
            }
          }
          span {
            display: inline-block;
            width: 38px;
            height: 38px;
            border-radius: 50%;

            &.ape {
              /* background: #80b9f9; */
              background-image: url(${Ape});
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
            }
            &.ball {
              background-image: url(${Avocado});
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
            }
            &.basket {
              background-image: url(${Basket});
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
            }
            &.celebrity {
              background-image: url(${Celeb});
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
            }
            &.random {
              background-image: url(${Random});
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
            }
          }
        }
      }
    }
    .why {
      h3 {
        text-align: left;
        font-size: 1.3rem;
        @media (max-width: ${({ theme }) => theme.make}) {
          font-size: 1.2rem;
        }
        @media (max-width: ${({ theme }) => theme.max}) {
          font-size: 1rem;
        }
      }
      &-main {
        padding-top: 1rem;
        display: grid;
        grid-template-columns: repeat(3, minmax(0px, 1fr));
        gap: 1.4rem;
        @media (max-width: ${({ theme }) => theme.images}) {
          grid-template-columns: repeat(3, minmax(0px, 1fr));
        }
        @media (max-width: ${({ theme }) => theme.max}) {
          gap: 1rem;
          padding-top: 0.5rem;
          grid-template-columns: repeat(2, minmax(0px, 1fr));
        }
        li {
          display: flex;
          align-items: center;
          font-size: 0.75rem;
          @media (max-width: ${({ theme }) => theme.max}) {
            font-size: 0.65rem;
          }
          @media (max-width: ${({ theme }) => theme.se}) {
            font-size: 0.53rem;
          }
          span {
            display: inline-block;
            width: 14px;
            height: 14px;
            border-radius: 3.5px;
            background: #beaef0;
            margin-right: 9px;
          }
        }
      }
    }
  }
`;
