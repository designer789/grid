"use client";
import { ReactNode, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface StaggeredItemsProps {
  children: ReactNode[];
  delay?: number;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function StaggeredItems({
  children,
  delay = 0,
  staggerDelay = 0.1,
  direction = "up",
}: StaggeredItemsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  const directionOffset = () => {
    switch (direction) {
      case "up": return { y: 30 };
      case "down": return { y: -30 };
      case "left": return { x: 30 };
      case "right": return { x: -30 };
      default: return { y: 30 };
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, ...directionOffset() },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {children.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
} 