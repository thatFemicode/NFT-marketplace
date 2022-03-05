import styled from "styled-components";

export const CollectionStyled = styled.div`
  padding: 0 3rem;
  padding-bottom: 3rem;
  max-width: 80%;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: ${({ theme }) => theme.images}) {
    max-width: 100%;
    padding: 0 2rem;
  }
  p {
    text-align: left;
    font-size: 2rem;
    @media (max-width: ${({ theme }) => theme.images}) {
      font-size: 1.5rem;
    }
  }

  .collection-list {
    margin-top: 1rem;
    display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    width: 100%;
    @media (max-width: ${({ theme }) => theme.dont}) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: ${({ theme }) => theme.desktop}) {
      grid-template-columns: repeat(1, 1fr);
    }
    grid-template-columns: repeat(3, minmax(300px, 2fr));

    li {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      width: 100%;
      /* justify-content: center; */
      p {
        font-size: 1rem;
        @media (max-width: ${({ theme }) => theme.images}) {
          font-size: 0.8rem;
        }
      }
    }
  }
`;
export const Img = styled.span`
  display: inline-block;
  margin-right: 1rem;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: ${({ theme }) => theme.service}) {
    width: 60px;
    height: 60px;
  }
`;
