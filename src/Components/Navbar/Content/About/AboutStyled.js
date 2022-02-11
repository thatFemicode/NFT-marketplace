import styled, { css } from "styled-components";
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
  .primary {
    display: flex;

    > span {
      display: inline-block;
      width: 14px;
      height: 14px;
      margin-right: 12px;
      background: #505e7d;
      border-radius: 3.5px;
    }

    > div {
      > h3 {
        ${h3}
        ${hover}
      }
      p {
        ${p}
        margin-top: 5.7px;
        max-width: 50px;
      }

      > div {
        margin-top: 35px;
        display: flex;
        align-items: center;

        > ul + ul {
          margin-left: 41px;
        }
        > ul li {
          ${hover}
          color: #424770;

          h4 {
            color: #8898aa;
            text-transform: uppercase;
            text-align: left;
          }

          & + li {
            margin-top: 13px;
            text-align: left;
          }
        }
      }
    }
  }
`;
