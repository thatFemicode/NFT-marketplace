import styled, { css } from "styled-components";
import Ape from "./Img/MonkBoredApe.jpg";
import Avocado from "./Img/Avocado.png";
import Basket from "./Img/StephCurry.jpg";
import Celeb from "./Img/Drake.png";

const h3 = css`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: #32325d;
  text-align: left;
`;

const p = css`
  color: #6b7c93;
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
        width: 40px;
        height: 40px;
        border-radius: 50%;

        &.ape {
          /* background: #80b9f9; */
          background-image: url(${Ape});
          background-size: cover;
          background-repeat: no-repeat;
        }
        &.ball {
          background-image: url(${Avocado});
          background-size: cover;
          background-repeat: no-repeat;
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
      }
    }
  }
`;
