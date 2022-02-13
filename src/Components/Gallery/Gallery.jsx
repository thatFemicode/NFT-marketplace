import React from "react";
import { OuterLayout } from "../../Layout/Layout";
import { GalleryStyled } from "./GalleryStyled";

const Gallery = () => {
  return (
    <GalleryStyled>
      <OuterLayout>
        <div className="gallery">
          <h1>
            Popular <span> NFTs</span> on{" "}
            <span className="express">ExpressSea</span>
          </h1>
        </div>
      </OuterLayout>
    </GalleryStyled>
  );
};

export default Gallery;
