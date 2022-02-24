import styled from "styled-components";
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
  place-items: center;
  gap: 2rem;
  position: relative;
  overflow: auto;
  overflow-x: hidden;
  /* height: 600px; */
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.mind}) {
    /* max-width: 680px; */
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.service}) {
    /* max-width: 680px; */
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.desktop}) {
    max-width: 680px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.images}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.foot}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
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
  position: relative;

  span {
    position: absolute;
    height: 20%;
    width: 94%;
    margin: 0 auto;
    /* border-radius: 12px; */
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: red;
    z-index: 20;
    bottom: 0px;
    /* left: 0; */
    backdrop-filter: blur(50px);
    background-color: rgba(255, 255, 255, 0.01);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: ${({ theme }) => theme.images}) {
      width: 90%;
    }
    @media (max-width: ${({ theme }) => theme.foot}) {
      width: 93%;
      bottom: 0px;
      border-radius: 12px;
    }
    .artist {
      max-width: 40px;
      justify-self: flex-start;
      @media (max-width: ${({ theme }) => theme.images}) {
        max-width: 30px;
      }
    }
  }
`;

export const Title = styled.p`
  font-size: 0.8rem;
  /* margin-top: 0.5rem; */
  text-align: center;
  mix-blend-mode: exclusion;
  color: #000;
  mix-blend-mode: difference;
  @media (max-width: ${({ theme }) => theme.images}) {
    font-size: 0.6rem;
    margin-top: ;
  }
`;

export const SubTitle = styled.p`
  font-size: 1rem;
`;
