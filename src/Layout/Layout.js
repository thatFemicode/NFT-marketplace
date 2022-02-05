import styled from "styled-components";

export const OuterLayout = styled.section`
  /* max-width: 1300px; */
  max-width: 1400px;
  width: 100%;
  /* width: 70%; */
  margin: 0 auto;
  position: relative;
  /* padding: 3rem 2rem; */
  @media (max-width: ${({ theme }) => theme.mins}) {
    max-width: 1100px;
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.mind}) {
    max-width: 950px;
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.post}) {
    max-width: 768px;
    width: 100%;
  }
  /* @media screen and (max-width: 1347px) {
    padding: 3rem 8rem;
  }
  @media screen and (max-width: 1186px) {
    padding: 3rem 3rem;
  }
  @media screen and (max-width: 990px) {
    padding: 3rem 2rem;
  } */

  /* padding: 1rem 1rem;
  overflow: hidden; */
`;
export const InnerLayout = styled.section`
  /* max-width: 1300px; */
  max-width: 1400px;
  width: 100%;
  /* width: 70%; */
  margin: 0 auto;
  position: relative;
  /* padding: 3rem 2rem; */
  @media (max-width: ${({ theme }) => theme.mins}) {
    max-width: 1100px;
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.mind}) {
    max-width: 950px;
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.post}) {
    max-width: 768px;
    width: 100%;
  }
`;
