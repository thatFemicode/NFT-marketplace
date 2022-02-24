import gsap from "gsap";
const cardAnimation = (el) => {
  let tl = gsap.timeline();
  let q = gsap.utils.selector(el);
  // The component has been rendered, so we can now select
  // descendants of the component, including descendants
  // nested inside of other components
  tl.from(q(".single"), {
    opacity: 0,
    y: 200,
    stagger: {
      each: 0.8,
      from: 0,
      grid: "auto",
    },
  });
};
export default cardAnimation;
