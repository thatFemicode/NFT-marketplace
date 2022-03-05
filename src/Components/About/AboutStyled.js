import styled from "styled-components";

export const AboutStyled = styled.div`
  padding: 0 3rem;
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.images}) {
    max-width: 100%;
    padding: 0 2rem;
  }
  p {
    text-align: justify;
  }
  .socials {
    align-self: flex-start;

    svg {
      margin-right: 1rem;
    }
  }
`;
