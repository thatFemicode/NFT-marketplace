import styled from "styled-components";

export const FooterStyled = styled.footer`
  position: relative;
  height: 100%;
  width: 100%;
  padding-top: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background: #beaef0;
  color: #fff;
  color: rgb(255, 255, 255);
  display: flex;

  justify-content: center;
  @media (max-width: ${({ theme }) => theme.make}) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  width: 100%;
  .footer {
    &-top {
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 40px;
      margin-bottom: 20px;
      border-bottom: 1px solid #fff;

      &-left {
        display: flex;
        flex-direction: column;
        flex: 1 0 50%;

        align-items: flex-start;
        text-align: left;
        padding-top: 40px;
        padding-right: 64px;
        @media (max-width: ${({ theme }) => theme.desktop}) {
          flex: 0 0 100%;
          align-items: center;
        }
        h1 {
          color: rgb(255, 255, 255);
          /* font-weight: 600; */
          margin-bottom: 8px;
          font-size: 1.3rem;
        }
        p {
          color: rgb(255, 255, 255);
          font-weight: 600;
          margin-bottom: 8px;
          margin-top: 8px;
          max-width: 500px;
          &.content {
            font-size: 0.9rem;
          }
        }
        .form {
          width: 100%;
          margin-top: 16px;
          color: rgb(53, 56, 64);

          &-content {
            display: flex;
            width: 100%;

            &-input {
              width: 100%;
              padding-right: 10px;
              min-width: 50px;
              cursor: text;
              display: flex;
              align-items: center;
              background-color: rgb(255, 255, 255);
              border-radius: 10px;
              border: 1px solid rgb(229, 232, 235);
              width: 100%;
              padding: 8px;
              input {
                background-color: transparent;
                border: none;
                outline: none;
                width: 100%;
                font-size: 16px;
                &::placeholder {
                  color: #000;
                  @media (max-width: ${({ theme }) => theme.make}) {
                    font-size: 0.7rem;
                  }
                }
                /* line-height: 26px; */
                /* min-height: 26px; */
              }
            }
            button {
              display: inline-flex;
              border-radius: 10px;
              justify-content: center;
              font-size: 0.8rem;
              padding: 12px 20px;
              background-color: #fff;
              border: none;
              color: #000;
              margin-left: 1rem;
              cursor: pointer;
            }
          }
        }
      }
      &-right {
        flex: 1 0 50%;
        align-items: flex-start;
        text-align: left;
        padding-top: 40px;
        @media (max-width: ${({ theme }) => theme.desktop}) {
          flex: 0 0 100%;
          /* align-items: center;
          justify-content: center;
          text-align: center; */
        }
        h1 {
          font-size: 1.3rem;
        }
        .icons {
          display: flex;
          @media (max-width: ${({ theme }) => theme.desktop}) {
            /* align-items: center;
            justify-content: center; */
          }
          .icon {
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            border-radius: 50%;
            justify-content: center;
            padding: 8px 10px;
            background-color: #fff;
            border: none;
            width: 44px;
            height: 44px;
            margin-top: 8px;
            margin-right: 0.5rem;
          }
          svg {
            height: 20px;
            width: 30px;
          }
        }
      }
    }
    &-mid {
      display: flex;
      padding-bottom: 40px;
      margin-bottom: 20px;

      flex-wrap: wrap;
      &-left {
        display: flex;
        flex-direction: column;
        width: 25%;
        padding-top: 40px;
        align-items: flex-start;
        text-align: left;
        @media (max-width: ${({ theme }) => theme.desktop}) {
          width: 100%;
          /* align-items: center;
          text-align: center; */
        }
        .logo {
          margin-bottom: 1rem;
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          border-radius: 50%;
          justify-content: center;
          padding: 8px 10px;
          background-color: #fff;
          border: none;
          width: 64px;
          height: 64px;
          margin-top: 8px;
        }
        .heading {
          margin-bottom: 1rem;
          h1 {
            font-size: 2rem;
          }
        }
        .content {
          margin-bottom: 1rem;
          p {
            @media (max-width: ${({ theme }) => theme.desktop}) {
              max-width: 500px;
            }
          }
        }
      }
      &-right {
        display: flex;
        height: fit-content;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 75%;
        padding-top: 40px;
        align-items: flex-start;
        padding-left: 72px;
        @media (max-width: ${({ theme }) => theme.desktop}) {
          width: 100%;
          padding-left: 0;
        }
        &-one {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 30%;
          padding-top: 20px;
          align-items: flex-start;
          margin-bottom: 1rem;
          @media (max-width: ${({ theme }) => theme.dont}) {
            width: 40%;
          }
          @media (max-width: ${({ theme }) => theme.desktop}) {
            width: 50%;
          }
          @media (max-width: ${({ theme }) => theme.max}) {
            width: 100%;
            /* align-items: center; */
          }
          h3 {
            margin-bottom: 1rem;
            font-size: 1.3rem;
            @media (max-width: ${({ theme }) => theme.text}) {
              font-size: 1rem;
            }
          }
          .list {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            @media (max-width: ${({ theme }) => theme.make}) {
              /* align-items: center; */
            }
            li {
              margin-bottom: 1rem;
            }
          }
        }
        &-two {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 30%;
          padding-top: 20px;
          align-items: flex-start;
          margin-bottom: 1rem;
          @media (max-width: ${({ theme }) => theme.dont}) {
            width: 40%;
          }
          @media (max-width: ${({ theme }) => theme.desktop}) {
            width: 50%;
          }
          @media (max-width: ${({ theme }) => theme.max}) {
            width: 100%;
            /* align-items: center; */
          }
          h3 {
            margin-bottom: 1rem;
            font-size: 1.3rem;
            @media (max-width: ${({ theme }) => theme.text}) {
              font-size: 1rem;
            }
          }
          .list {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            @media (max-width: ${({ theme }) => theme.make}) {
              /* align-items: center; */
            }
            li {
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
  }
`;
