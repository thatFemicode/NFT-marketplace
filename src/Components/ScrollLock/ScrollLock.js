import React, { useCallback } from "react";
export const useScrollLock = () => {
  function iOS() {
    return (
      [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod",
      ].includes(navigator.platform) ||
      // iPad on iOS 13 detection
      (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    );
  }
  let scrollOffset = 0;
  const lockScroll = React.useCallback(() => {
    document.body.dataset.scrollLock = "true";
    document.body.style.overflow = "hidden";
    // document.body.style.paddingRight = "var(--scrollbar-compensation)";

    if (iOS) {
      scrollOffset.current = window.pageYOffset;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollOffset.current}px`;
      document.body.style.width = "100%";
    }
  }, []);

  const unlockScroll = React.useCallback(() => {
    document.body.style.overflow = "";
    // document.body.style.paddingRight = "";

    if (iOS) {
      document.body.style.position = "";
      document.body.style.top = ``;
      document.body.style.width = "";
      window.scrollTo(0, scrollOffset.current);
    }
    delete document.body.dataset.scrollLock;
  }, []);

  return {
    lockScroll,
    unlockScroll,
  };
};
