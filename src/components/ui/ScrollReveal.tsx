"use client";
import { ReactNode, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  width = "100%",
  delay = 0,
  direction = "up",
  distance = 30,
  duration = 0.6,
  threshold = 0.1,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: threshold,
    // A slight margin to trigger animations sooner with Lenis
    margin: "0px 0px -100px 0px" 
  });
  const mainControls = useAnimation();

  const getDirectionOffset = () => {
    switch (direction) {
      case "up": return { y: distance };
      case "down": return { y: -distance };
      case "left": return { x: distance };
      case "right": return { x: -distance };
      default: return { y: distance };
    }
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, ...getDirectionOffset() },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              duration: duration,
              delay: delay,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        initial="hidden"
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
} 