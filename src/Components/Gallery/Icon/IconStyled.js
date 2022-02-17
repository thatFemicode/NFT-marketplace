import styled from "styled-components";

export const IconStyled = styled.div`
  .wrapper {
    opacity: 0;
    width: 130px;
    height: 130px;
    margin: 0px 0 0 -75px;
    border-radius: 50%;
    position: absolute;
    background-image: url(${({ image }) => image});
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(0, 0, 0, 0.07);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1;
    @media (max-width: ${({ theme }) => theme.desktop}) {
      width: 120px;
      height: 120px;
    }
    @media (max-width: ${({ theme }) => theme.make}) {
      width: 100px;
      height: 100px;
      left: 0.2rem;
    }
    &:hover {
      z-index: 1000;
      .label {
        opacity: 0.9;
        transform: translate(-50%);
      }
    }
  }

  .label {
    z-index: 2000;
    position: absolute;
    left: 50%;
    bottom: -40px;
    padding: 5px 12px;
    background: #fff;
    box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1),
      0 5px 15px rgba(0, 0, 0, 0.07);
    border-radius: 50px;
    white-space: nowrap;
    font-size: 16px;
    font-weight: 500;
    color: #566b78;
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transform: translate(-50%, -10px);
    opacity: 0;
    transition-property: opacity, transform;
    transition-duration: 0.25s;
    transition-timing-function: ease-out;
  }
`;
