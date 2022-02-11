import styled, { css } from "styled-components";
import Ape from "./Img/MonkBoredApe.jpg";
import Avocado from "./Img/Avocado.png";
import Basket from "./Img/StephCurry.jpg";
import Celeb from "./Img/Drake.png";
import Random from "./Img/MoneyDrown.png";
import Logo from "./Img/slack.svg";
const h3 = css`
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #32325d;
  text-align: left;
`;
const h2 = css`
  font-size: 0.9rem;
  font-weight: bold;
  color: #32325d;
  /* text-align: left; */
`;

const p = css`
  color: #6b7c93;
  font-size: 0.8rem;
`;

const hover = css`
  cursor: pointer;
  transition: opacity 0.1s ease-in;
  &:hover {
    opacity: 0.7;
  }
`;
export const CollectionStyled = styled.div`
  padding: 32px 35px;
  white-space: nowrap;
  /* width: 100%; */
  .primary {
    li {
      display: flex;
      align-items: center;

      div {
        ${hover}
        margin-left: 19px;

        h3 {
          ${h3}
        }
        p {
          ${p}
          margin-top: 10px;
        }
      }

      & + li {
        margin-top: 32px;
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
  .secondary {
    margin-top: 40px;

    li {
      ${hover}
      display: flex;
      align-items: center;

      & + li {
        margin-top: 28px;
      }

      h3 {
        ${h2}
        margin-left: 16px;
      }
      p {
        ${p}
        margin-left: 14px;
      }

      span {
        display: inline-block;
        width: 30px;
        height: 30px;
        /* border-radius: 60%; */

        &.sigma {
          background-image: url(${Logo});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
      }
    }
  }
`;
