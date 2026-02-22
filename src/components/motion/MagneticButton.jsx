import { useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { SPRING_MAGNETIC } from "../../utils/physics";
import { cn } from "../../utils/cn";

/**
 * Element that magnetically pulls toward the user's cursor on hover.
 * Wraps any children.
 */
export default function MagneticButton({
  children,
  className = "",
  strength = 0.2,
  as = "div",
  ...props
}) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING_MAGNETIC);
  const springY = useSpring(y, SPRING_MAGNETIC);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * strength);
    y.set(middleY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={cn("will-change-transform", className)}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
