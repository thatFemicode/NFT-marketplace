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
export const WhyStyled = styled.div`
  padding: 32px 35px;
  white-space: nowrap;

  .primary {
    > li {
      ${h3}
      ${hover}
      display: flex;
      align-items: center;

      & + li {
        margin-top: 22px;
      }

      > span {
        display: inline-block;
        width: 17px;
        height: 17px;
        border-radius: 3.5px;
        background: #505e7d;
        margin-right: 13px;
      }
    }
  }
  .secondary {
    margin-top: 64.5px;

    li {
      display: flex;
      align-items: center;

      &:not(.title) {
        ${hover}

        margin-top: 21px;
        margin-left: 30px;

        color: #424770;

        .new-tag {
          text-transform: uppercase;
          font-size: 10px;
          background: #646ddf;
          border-radius: 6px;
          padding: 2px 4.5px;
          color: #fff;
          margin-left: 6px;
        }
        .arrow {
          margin-left: 6px;
          font-weight: bold;
          transform: scaleX(0.7) scaleY(1.1);
        }
      }

      &:nth-child(2) {
        margin-top: 30.2px;
        font-weight: 500;
      }
    }

    li.title {
      ${h3}

      .title-icon {
        display: inline-block;
        width: 17px;
        height: 17px;
        border-radius: 3.5px;
        margin-right: 13px;
        background: #505e7d;
      }
    }
  }
`;
