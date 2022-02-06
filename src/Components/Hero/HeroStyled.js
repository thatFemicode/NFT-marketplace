import styled from "styled-components";
export const HeroStyled = styled.section`
  position: relative;

  .hero {
    position: relative;

    &-left {
      position: relative;
    }
    &-right {
      position: relative;
      .box {
        position: absolute;
        &-1 {
          top: 100px;
          right: 80px;
          /* background: url(images/img1.jpg) no-repeat 50% 50%; */
          background-size: cover;
          width: 150px;
          /* border: 0.5px solid gray; */
          height: 250px;
        }
        &-2 {
          top: 250px;
          right: 310px;
          /* background: url(images/img2.jpg) no-repeat 50% 50%; */
          background-size: cover;
          width: 250px;
          /* border: 0.5px solid gray; */
          height: 450px;
        }
        &-3 {
          top: 500px;
          right: 10px;
          /* background: url(images/img3.jpg) no-repeat 50% 50%; */
          background-size: cover;
          width: 250px;
          /* border: 0.5px solid gray; */
          height: 200px;
        }
      }
    }
  }
`;
