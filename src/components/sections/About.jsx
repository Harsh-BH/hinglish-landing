import { motion } from "framer-motion";
import RevealText from "../motion/RevealText";
import { SPRING_REVEAL, VIEWPORT_MARGIN } from "../../utils/physics";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #C44520 0%, #D4592A 30%, #E8712A 70%, #E8712A 100%)" }}>
      {/* ── Content ── */}
      <div className="relative px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          {/* Big ABOUT US title */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: VIEWPORT_MARGIN }}
            transition={SPRING_REVEAL}
            className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase leading-none tracking-tight"
            style={{ color: "#F5B731", fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}
          >
            ABOUT US
          </motion.h2>

          {/* Description paragraphs */}
          <RevealText delay={0.2} className="mt-10 md:mt-14 text-base md:text-lg font-medium leading-relaxed text-charcoal max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </RevealText>

          <RevealText delay={0.3} className="mt-6 text-base md:text-lg font-medium leading-relaxed text-charcoal max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eusmod tempor
            incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam.
          </RevealText>

          {/* Cloud + Birds area */}
          <div className="relative mt-16 md:mt-20">
            {/* Flying birds (scattered) */}
            <div className="absolute -top-8 right-[10%] md:-top-12 md:right-[15%]">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -3, 0], x: [0, 2, 0] }}
                  transition={{ repeat: Infinity, duration: 2 + i * 0.3, delay: i * 0.15 }}
                  className="absolute"
                  style={{ left: `${i * 25 + Math.random() * 20}px`, top: `${i * 8 - Math.random() * 40}px` }}
                >
                  <svg viewBox="0 0 20 10" className="w-4 h-2 md:w-5 md:h-3">
                    <path d="M0 8 Q5 0 10 5 Q15 0 20 8" stroke="#1A1A1A" strokeWidth="1.5" fill="none" />
                  </svg>
                </motion.div>
              ))}
            </div>

            {/* Cloud */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...SPRING_REVEAL, delay: 0.4 }}
              className="flex justify-center"
            >
              <svg viewBox="0 0 300 120" className="w-56 md:w-80">
                <ellipse cx="100" cy="75" rx="90" ry="40" fill="white" />
                <ellipse cx="160" cy="60" rx="75" ry="50" fill="white" />
                <ellipse cx="220" cy="78" rx="65" ry="35" fill="white" />
                <ellipse cx="70" cy="80" rx="55" ry="30" fill="white" />
                <ellipse cx="150" cy="50" rx="40" ry="30" fill="#F8F8F8" />
              </svg>
            </motion.div>

            {/* परिचय badge on the cloud */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring", bounce: 0.3 }}
              className="absolute left-1/2 -translate-x-1/2 bottom-6 md:bottom-10"
            >
              <span className="hindi-badge font-devanagari text-sm md:text-base">परिचय</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Bottom Stripe Band (yellow) ── */}
      <div className="w-full h-10 md:h-14 stripes-yellow" />
    </section>
  );
}
