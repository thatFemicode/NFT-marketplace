import styled from "styled-components";

export const ShowCaseStyled = styled.section`
  position: relative;
  /* height: 100%; */
  width: 100%;
  padding-top: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;

  .showcase {
    display: flex;
    &-carousel {
      flex: 2;
    }
    &-content {
      flex: 2;
      text-align: left;
      h1 {
      }
    }
  }
`;
