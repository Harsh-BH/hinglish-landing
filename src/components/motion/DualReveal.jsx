import { motion } from "framer-motion";
import { SPRING_DEFAULT, VIEWPORT_MARGIN } from "../../utils/physics";

/**
 * Dual-language reveal: Hindi and English text animate from opposite sides.
 */
export default function DualReveal({ englishText, hindiText, className = "" }) {
  const springConfig = SPRING_DEFAULT;

  return (
    <div className={`flex flex-col items-center justify-center overflow-hidden py-10 ${className}`}>
      {/* English from Left */}
      <motion.h2
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: VIEWPORT_MARGIN }}
        transition={springConfig}
        className="text-4xl font-light tracking-tight text-charcoal md:text-5xl lg:text-6xl"
      >
        {englishText}
      </motion.h2>

      {/* Hindi from Right */}
      <motion.h2
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: VIEWPORT_MARGIN }}
        transition={{ ...springConfig, delay: 0.1 }}
        className="mt-2 text-3xl text-stone font-devanagari md:text-4xl lg:text-5xl"
      >
        {hindiText}
      </motion.h2>
    </div>
  );
}
