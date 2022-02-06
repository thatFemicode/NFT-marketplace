import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  /* dark shades of primary color*/
  --transition: all 0.3s linear;
  --white: #fff;
  --maroon:#83333e;
  --off-white:#f2f4f5;
  --black:#000;
  --grey: #f1f4f8b0;
  --dark-grey: #6b7c93;
  --green: #24b47e;
  --teal: #4F96CE;
  --blue: #6772e5;
  --dark-blue: #4F3EF5;
  --spacer: 28px;
  --main-color: #3664e8;
}
*{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Space Grotesk', sans-serif;
    font-weight:500;
    text-decoration: none;
    font-size:100%;
    scroll-behavior:smooth;
    /* color: #0f2137; */
 

    /* font-size:1vw; */
}
html {
  scroll-behavior: smooth;
}
body{
  /* background-color:pink; */
/* overflow: hidden; */
overflow-x: hidden;
height:100%;
width:100%;
color:var(--black);
-ms-overflow-style: none; /* Internet Explorer 10+ */
scrollbar-width: none; /* Firefox */
&::-webkit-scrollbar {
 display: none;
}
}
img{
    max-width: 100%;
}
a{
text-decoration: none;
color:inherit;
}
li{
    list-style: none
}
.no-scroll{
  height:100vh;
  overflow:hidden;
  @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
         overflow:auto
          }
}
/* .no-scroll{
  height:100vh;
  overflow:hidden;
} */
/* .load-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 10;
  pointer-events: none;
}
.load-screen {
  position: relative;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  background-color: #1d428a;
  width: 0%;
  height: 100%;
}
.load-screen1 {
  position: relative;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  background-color: #000;
  width: 100%;
  height: 0%;
}
.load-screen2 {
  position: relative;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  background-color: #ce1141;
  width: 100%;
  height: 0%;
}
.load-screen3 {
  position: relative;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  background-color: #552583;
  width: 0%;
  height: 100%;
}
.Headd {
  opacity: 0;
  pointer-events: none;
} */
/* .active-btn{
    color: rgba(255, 255, 255, var(--tw-text-opacity));
    background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
} */
.load-screen1 {
  position: relative;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  background-color: #f6f8fb;
  width: 100%;
  height: 0%;
}
.load-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 13;
  pointer-events: none;
}
.load-screen {
  position: relative;
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
  background-color: #f6f8fb;
  width: 0%;
  height: 100%;
}
.Headd {
  opacity: 0;
  pointer-events: none;
}
.Headds {
  opacity: 1;
}
`;
export default GlobalStyle;
