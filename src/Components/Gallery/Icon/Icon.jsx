import React, { useEffect, useRef } from "react";
import { bounce, show } from "../animation";
import { IconStyled } from "./IconStyled";

const Icon = ({ ...props }) => {
  //   console.log(props);
  let icon = useRef(null);
  const { startingPos, timeline, title, image, scale } = { ...props };
  useEffect(() => {
    timeline.add([show(icon, scale, startingPos), bounce(icon)], "start");
  }, [timeline, scale, startingPos]);

  return (
    <IconStyled image={image}>
      <div
        className="wrapper"
        ref={(el) => {
          icon = el;
        }}
      >
        <h2 className="label">{title}</h2>
      </div>
    </IconStyled>
  );
};

export default Icon;
