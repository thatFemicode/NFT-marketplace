import React, { useEffect, useRef } from "react";
import { slide, bounce } from "../animation";
import { IconStyled } from "./IconStyled";

const Icon = ({ ...props }) => {
  //   console.log(props);
  let icon = useRef(null);
  const { startingPos, timeline, title, image } = { ...props };
  useEffect(() => {
    timeline.add([slide(icon, startingPos), bounce(icon)], "start");
  });

  return (
    <IconStyled>
      <div
        className="wrapper"
        ref={(el) => {
          icon = el;
        }}
        style={{ backgroundImage: `url(${image})` }}
      >
        <h2 className="label">{title}</h2>
      </div>
    </IconStyled>
  );
};

export default Icon;
