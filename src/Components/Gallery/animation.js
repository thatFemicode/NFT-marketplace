import { gsap, Power0, Power1 } from "gsap";
import { APPEAR_TIME, BOUNCE_HEIGHT, BOUNCE_TIME } from "./constant";
import { randomBetween } from "./utils";

export const show = (target, scale, startingPos) => {
  gsap.to(target, { duration: 0, x: startingPos.x, top: startingPos.y });
  gsap.fromTo(
    target,
    { duration: APPEAR_TIME, scale: 0.5, opacity: 0 },
    { duration: APPEAR_TIME, opacity: 1, scale: scale, ease: Power0.easeNone }
  );
};
// export const hide = (target) => {
//   gsap.to(target, { duration: APPEAR_TIME, opacity: 0, scale: 0.5 });
// };
// export const slide = (target, startingPos) => {
//   const slide = gsap.timeline();
//   const initialSlide = gsap.timeline();
//   const repeatSlide = gsap.timeline({ repeat: -1 });

//   initialSlide.fromTo(
//     target,

//     {
//       duration:
//         SLIDE_TIME * (1 - (startingPos.x + X_OFFSET) / X_TOTAL_DISTANCE),
//       x: startingPos.x,
//       top: startingPos.y,
//     },
//     {
//       duration:
//         SLIDE_TIME * (1 - (startingPos.x + X_OFFSET) / X_TOTAL_DISTANCE),
//       x: X_MAX,
//       ease: Power0.easeNone,
//       top: startingPos.y,
//     }
//   );
//   repeatSlide.fromTo(
//     target,

//     { duration: SLIDE_TIME, x: X_MIN, top: startingPos.y },
//     {
//       duration: SLIDE_TIME,
//       x: X_MAX,
//       top: startingPos.y,
//       ease: Power0.easeNone,
//     }
//   );
//   slide.add([initialSlide, repeatSlide], "+=0", "sequence");
//   return slide;
// };
export const bounce = (target) => {
  let bounce = gsap.timeline({ repeat: -1, yoyo: true });
  bounce.to(target, {
    duration: BOUNCE_TIME,
    y: -BOUNCE_HEIGHT,
    ease: Power1.easeInOut,
  });
  bounce.timeScale(randomBetween(0.7, 1.3));
  return bounce;
};
