import styled from "styled-components";

export const ApeArtStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  place-items: center;
  gap: 2rem;
  position: relative;
  overflow: auto;
  overflow-x: hidden;
  /* height: 600px; */
  max-width: 1300px;
  margin: 0 auto;
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Item = styled.div`
  padding: 0 0.4rem;
  border-radius: 12px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  text-align: center;
`;

export const SubTitle = styled.span`
  font-size: 1rem;
`;
