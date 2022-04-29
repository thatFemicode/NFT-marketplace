import React from "react";
import { OuterLayout } from "../../Layout/Layout";
import icons from "./data";
import { GalleryStyled } from "./GalleryStyled";
import IconCarousel from "./IconCarousel/IconCarousel";
import { X_OFFSET, Y_OFFSET } from "./constant";
// import useOnScreen from "../../Hooks/useOnScreen";

const Gallery = () => {
  // const ref = useRef(null);
  // const [reveal, setReveal] = useState(false);
  // const onScreen = useOnScreen(ref, 0.2);

  // useEffect(() => {
  //   if (onScreen) setReveal(onScreen);
  // }, [onScreen]);

  const icond = icons.map((icon, index) => {
    const { s, x, y, image, title, id } = icon;
    let newIcon = {};
    // let newIcon = { ...icon };
    newIcon.s = s || 1;
    newIcon.y = y - Y_OFFSET;
    newIcon.x = x - X_OFFSET;
    newIcon.image = image;
    newIcon.title = title;
    newIcon.id = id;
    return newIcon;
  });
  return (
    <GalleryStyled>
      <OuterLayout>
        <div className="gallery">
          <h1>
            Popular <span> NFTs</span> on
            <span className="express"> ExpressSea</span>
            <div className="carousel">
              <IconCarousel icons={icond} />
            </div>
          </h1>
        </div>
      </OuterLayout>
    </GalleryStyled>
  );
};

export default Gallery;
