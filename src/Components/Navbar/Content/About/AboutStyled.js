import styled, { css } from "styled-components";
import Ape from "./Img/BasketballBoredApe.png";
import Can from "./Img/CrushedCan.jpg";
import Tears from "./Img/Tears.png";
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
  text-align: left;
`;

const hover = css`
  cursor: pointer;
  transition: opacity 0.1s ease-in;
  &:hover {
    opacity: 0.7;
  }
`;
export const AboutStyled = styled.div`
  padding: 32px 35px;
  white-space: nowrap;
  width: 100%;
  .primary {
    width: 100%;

    h3 {
      ${h3}
      ${hover}
    }
    li {
      display: flex;
      align-items: center;
      margin-top: 10px;
      width: 100%;
      div {
        ${hover}
        margin-left: 5px;
        width: 100%;
        p {
          ${p}
          /* margin-top: 10px; */
          text-align: left;
        }
      }

      & + li {
        /* margin-top: 32px; */
      }

      span {
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-right: 12px;
        background: #80b9f9;
        border-radius: 3.5px;
      }
    }
  }
  .secondary {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;

    li {
      /* margin-right: 20px; */
      margin-top: 20px;
      span {
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;

        &.art {
          background-image: url(${Can});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
        &.ball {
          background-image: url(${Ape});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
        &.random {
          background-image: url(${Tears});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
      }
    }
  }
`;
