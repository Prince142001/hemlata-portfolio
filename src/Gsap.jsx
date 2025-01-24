import { useRef } from "react";
import gsap from "gsap"; // Import GSAP
import { useGSAP } from "@gsap/react"; // Import GSAP React hook

gsap.registerPlugin(useGSAP);

export default function Gsap() {
  const container = useRef();

  useGSAP(
    () => {
      // GSAP animation: move from bottom-left to top-right
      gsap.to(".box", {
        x: 300, // Move diagonally to the right
        y: -300, // Move diagonally upward
        duration: 2, // Duration of each animation cycle
        ease: "power1.inOut", // Smooth easing
        repeat: -1, // Infinite loop
        yoyo: true, // Reverse the animation after each cycle
      });
    },
    { scope: container }
  ); // Scope for selector text (optional)

  return (
    <div ref={container} className="app">
      <div className="box bg-blue-500 text-white p-4 rounded-lg">Hello</div>
    </div>
  );
}
