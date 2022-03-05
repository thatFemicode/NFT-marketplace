import styled from "styled-components";
export const CardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
  place-items: center;
  gap: 2rem;
  position: relative;
  overflow: auto;
  overflow-x: hidden;
  @media (max-width: ${({ theme }) => theme.mind}) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.service}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.images}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
  @media (max-width: ${({ theme }) => theme.max}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.se}) {
    grid-template-columns: repeat(2, 1fr);
  }
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Item = styled.div`
  padding: 1rem 0.4rem;
  border-radius: 12px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  position: relative;
`;

export const Title = styled.p`
  font-size: 0.8rem;
  text-align: center;
  margin-left: 1rem;
  mix-blend-mode: exclusion;
  color: #000;
  mix-blend-mode: difference;
  @media (max-width: ${({ theme }) => theme.images}) {
    font-size: 0.6rem;
  }
`;

export const SubTitle = styled.p`
  font-size: 1rem;
`;
export const Highlight = styled.div`
  position: absolute;
  height: 20%;
  width: 94%;
  margin: 0 auto;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: red;
  z-index: 20;
  bottom: 0px;
  backdrop-filter: blur(50px);
  background-color: rgba(255, 255, 255, 0.01);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: ${({ theme }) => theme.images}) {
    width: 140px;
    border-radius: 12px;
  }
  @media (max-width: ${({ theme }) => theme.make}) {
    width: 130px;
    border-radius: 12px;
  }
  @media (max-width: ${({ theme }) => theme.max}) {
    width: 93%;
    bottom: -1px;
    border-radius: 12px;
  }
  @media (max-width: ${({ theme }) => theme.foot}) {
    width: 140px;
    bottom: -1px;
    border-radius: 12px;
  }
  @media (max-width: ${({ theme }) => theme.se}) {
    width: 91%;
    bottom: 0px;
    border-radius: 20px;
  }
  .artist {
    max-width: 40px;
    justify-self: flex-start;
    @media (max-width: ${({ theme }) => theme.images}) {
      max-width: 30px;
    }
  }
`;
