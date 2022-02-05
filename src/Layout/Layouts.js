import styled from "styled-components";

export const OuterLayouts = styled.section`
  // this will be like our outey layout
  max-width: 1200px;
  /* height: 100vh; */
  background-color: transparent;
  /* width: 100%; */
  margin: 0 auto;
  position: relative;
  padding: 2rem 8rem;
  @media screen and (max-width: 1347px) {
    padding: 3rem 8rem;
  }
  @media screen and (max-width: 1186px) {
    padding: 3rem 3rem;
  }
  @media screen and (max-width: 990px) {
    padding: 3rem 2rem;
  }

  @media (min-width: ${({ theme }) => theme.team}) {
    /* max-width: 1690px; */
    margin: 0 auto;
  }
`;
export const InnerLayouts = styled.section`
  // this will be like our inner layout
  padding: 8rem 0;
`;
