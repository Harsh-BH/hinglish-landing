import { motion } from "framer-motion";
import { SPRING_DEFAULT, VIEWPORT_MARGIN } from "../../utils/physics";

/**
 * Text that reveals line-by-line or word-by-word as it enters the viewport.
 */
export default function RevealText({
  children,
  as = "p",
  className = "",
  delay = 0,
  direction = "up", // "up" | "down" | "left" | "right"
}) {
  const Tag = motion[as] || motion.p;

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: -60, y: 0 },
    right: { x: 60, y: 0 },
  };

  const offset = directionMap[direction] || directionMap.up;

  return (
    <div className="overflow-hidden">
      <Tag
        initial={{ opacity: 0, ...offset }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: VIEWPORT_MARGIN }}
        transition={{ ...SPRING_DEFAULT, delay }}
        className={className}
      >
        {children}
      </Tag>
    </div>
  );
}
