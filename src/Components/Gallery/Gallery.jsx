import React from "react";
import { OuterLayout } from "../../Layout/Layout";
import { GalleryStyled } from "./GalleryStyled";
import IconCarousel from "./IconCarousel/IconCarousel";

const Gallery = () => {
  return (
    <GalleryStyled>
      <OuterLayout>
        <div className="gallery">
          <h1>
            Popular <span> NFTs</span> on{" "}
            <span className="express">ExpressSea</span>
            <IconCarousel />
          </h1>
        </div>
      </OuterLayout>
    </GalleryStyled>
  );
};

export default Gallery;
