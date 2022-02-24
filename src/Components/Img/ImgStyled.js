import styled from "styled-components";
const Img = styled.div`
  border-radius: 1rem;
  width: 180px;
  height: 180px;
  /* border-radius: 50%; */
  background-image: url(${({ src }) => src});
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(0, 0, 0, 0.07);
  background-size: cover;
  background-repeat: no-repeat;
  /* background-position: center; */
  z-index: 1;
  @media (max-width: ${({ theme }) => theme.images}) {
    width: 120px;
    height: 120px;
  }
  @media (max-width: ${({ theme }) => theme.foot}) {
    width: 160px;
    height: 160px;
  }
`;
export const PlayerImg = styled.div`
  border-radius: 1rem;
  width: 180px;
  height: 180px;
  /* border-radius: 50%; */
  background-image: url(${({ src }) => src});
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(0, 0, 0, 0.07);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
  @media (max-width: ${({ theme }) => theme.images}) {
    width: 120px;
    height: 120px;
  }
  @media (max-width: ${({ theme }) => theme.foot}) {
    width: 160px;
    height: 160px;
  }
`;
export default Img;
