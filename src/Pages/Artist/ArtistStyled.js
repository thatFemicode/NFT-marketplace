import styled from "styled-components";
import Bg from "../Item/noise.png";
export const ArtistStyled = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
  background-size: contain;
  width: 100%;
  background-repeat: repeat;
  padding-top: 5rem;
  padding-bottom: 4rem;
  background: url(${Bg});

  .artist-content {
    &-image {
      display: flex;
      flex-direction: column;
      .artist {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background-color: #fff;
      }
    }
  }
`;
