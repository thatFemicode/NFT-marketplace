import ApeArt from "../../Components/ApeArt/ApeArt";
import BasketballArt from "../../Components/BasketballArt/BasketballArt";
import CelebrityArt from "../../Components/CelebrityArt/CelebrityArt";
import PolygonArt from "../../Components/PolygonArt/PolygonArt";
import RandomArt from "../../Components/RandomArt/RandomArt";

const tabs = [
  { id: 1, title: "Ape ", content: <ApeArt /> },
  { id: 2, title: "Players ", content: <BasketballArt /> },
  { id: 3, title: "RandomArt", content: <RandomArt /> },
  { id: 4, title: "PolygonArt ", content: <PolygonArt /> },
  { id: 5, title: "Celebrity ", content: <CelebrityArt /> },
];
export default tabs;
