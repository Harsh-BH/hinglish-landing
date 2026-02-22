import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PARALLAX_RANGE } from "../../utils/physics";

/**
 * Converts vertical scroll into horizontal movement.
 * Wrap content that should move horizontally.
 */
export default function ParallaxScroll({ children, className = "", height = "200vh" }) {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], PARALLAX_RANGE);

  return (
    <section ref={targetRef} className={`relative ${className}`} style={{ height }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-20 px-10 will-change-transform"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
