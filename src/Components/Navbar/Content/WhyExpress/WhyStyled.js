import styled, { css } from "styled-components";
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
  text-align: left;
`;

const hover = css`
  cursor: pointer;
  transition: opacity 0.1s ease-in;
  &:hover {
    opacity: 0.7;
  }
`;
export const WhyStyled = styled.div`
  padding: 32px 35px;
  white-space: nowrap;
  height: 100%;
  width: 100%;
  .primary {
    li {
      ${h3}
      ${hover}
      display: flex;
      align-items: center;

      & + li {
        margin-top: 20px;
      }

      > span {
        display: inline-block;
        width: 14px;
        height: 14px;
        border-radius: 3.5px;
        background: #beaef0;
        margin-right: 13px;
      }
    }
  }
  .secondary {
    margin-top: 30px;

    li {
      display: flex;
      align-items: center;
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
      &:not(.title) {
        ${hover}

        margin-top: 17px;

        color: #424770;
        h3 {
          margin-left: 13px;
        }

        .arrow {
          /* margin-left: 6px; */
          font-weight: bold;
          margin-top: 13px;
          transform: scaleX(0.7) scaleY(1.1);
        }
      }
    }
  }
`;
