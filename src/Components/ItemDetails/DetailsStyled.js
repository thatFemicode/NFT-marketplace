import styled from "styled-components";

export const DetailsStyled = styled.div`
  margin-top: 1rem;
  h3 {
    font-size: 1.5rem;
    text-transform: capitalize;
    @media (max-width: ${({ theme }) => theme.images}) {
      font-size: 1rem;
    }
  }
  p {
    margin-top: 1rem;
  }
`;
