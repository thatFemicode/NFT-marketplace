import React from "react";
import { CollectionStyled, Img } from "./CollectionStyled";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const Collections = () => {
  const location = useLocation();

  const { state } = location;
  const { mine } = state;
  const { artist, artistImage, post, artistStory, collections } = mine;
  console.log(collections);
  return (
    <CollectionStyled>
      <p>{artist}'s collections:</p>
      <ul className="collection-list">
        {collections.map((item, index) => {
          const { name, id, pic } = item;
          return (
            <Link to="/marketplace">
              <li key={id}>
                <Img img={pic} />
                <p>{name}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </CollectionStyled>
  );
};

export default Collections;
