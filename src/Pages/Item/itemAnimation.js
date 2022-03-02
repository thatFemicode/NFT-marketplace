import { Power3, Power4, gsap } from "gsap";
const itemAnim = (node1, node2, node3, node4) => {
  let tl = gsap.timeline();
  tl.to(node1, {
    duration: 1,
    width: "100%",
    left: "0%",
    ease: Power3.easeInOut,
  })
    .to(node2, {
      duration: 0.1,
      ease: Power3.easeInOut,
      opacity: 1,
    })
    .fromTo(
      node3,
      {
        duration: 0.2,
        scale: 0.5,
        opacity: 0,
        fillOpacity: 0,
        strokeDashoffset: 1500,
        ease: Power3.easeInOut,
      },
      {
        duration: 1,
        opacity: 1,
        scale: 0.7,
        strokeDashoffset: 0,
        transformOrigin: "50%, 50%",
        fillOpacity: 1,
        ease: Power3.easeInOut,
      }
    )
    .to(node1, {
      duration: 0.7,
      left: "100%",
      ease: Power3.easeInOut,
      delay: 0.3,
    })
    .set(node1, { left: "-100%" })
    .from(node4.current, {
      duration: 0.3,
      opacity: 0,
      pointerEvents: "auto",
      ease: Power4.easeInOut,
    })
    .to(node4, {
      duration: 0.3,
      opacity: 1,
      pointerEvents: "auto",
      ease: Power4.easeInOut,
    });
};
export default itemAnim;
