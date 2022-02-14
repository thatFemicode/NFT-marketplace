import React from "react";
import { Transition } from "react-transition-group";
import { show, hide } from "../animation";
import Icon from "../Icon/Icon";
import { IconContainerStyled } from "./IconContainerStyled";
import { APPEAR_TIME } from "../constant";
const IconContainer = ({ iconEntered, scale, startingPos, ...props }) => {
  const nodeRef = React.useRef(null);
  return (
    <IconContainerStyled>
      <Transition
        // When it first mounts
        onEnter={(el) => {
          show(el, scale, startingPos);
        }}
        // When onEnter has completed, this triggers a callback that handles the
        // starting of the main timeline

        onEntered={() => iconEntered()}
        onExit={hide}
        appear
        in
        timeout={APPEAR_TIME * 1000}
      >
        <div ref={nodeRef}>
          <Icon {...props} startingPos={startingPos} />
        </div>
      </Transition>
    </IconContainerStyled>
  );
};

export default IconContainer;
