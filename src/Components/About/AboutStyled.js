import styled from "styled-components";

export const AboutStyled = styled.div`
  padding: 0 3rem;
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: ${({ theme }) => theme.images}) {
    max-width: 100%;
    padding: 0 2rem;
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    text-align: justify;
  }
  .socials {
    width: 100%;
    align-self: flex-start;
    display: inline-flex;
    justify-content: space-around;
    margin-top: 1rem;
    svg {
      margin-right: 1rem;
    }
  }
`;
