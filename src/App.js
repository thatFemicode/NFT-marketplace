// import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import Item from "./Pages/Item/Item";
import MarketPlace from "./Pages/Marketplace/Marketplace";
import CustomRoute from "./Components/CustomSwitch/CustomSwitch";
import { Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { MainStyled } from "./MainStyled";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#003333",
    },
    adapt: "399px",
    se: "330px",
    teams: "350px",
    foot: "375px",
    max: "415px",
    mobil: "430px",
    blogNav: "610px",
    images: "680px",
    text: "810px",
    min: "520px",
    make: "548px",
    image: "900px",
    mobile: "500px",
    desktop: "769px",
    desk: "700px",
    player: "751px",
    dont: "1020px",
    service: "900px",
    balls: "930px",
    post: "940px",
    hero: "992px",
    kobe: "1200px",
    mind: "1100px",
    mins: "1400px",
    minsx: "1280px",
    minss: "1500px",
    team: "1700px",
    auth: "1800px",
    img: "1201px",
  };
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <MainStyled>
          <CustomRoute>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<MarketPlace />} />
            <Route path="/item:id" element={<Item />} />
          </CustomRoute>
        </MainStyled>
      </ThemeProvider>
    </div>
  );
}

export default App;
