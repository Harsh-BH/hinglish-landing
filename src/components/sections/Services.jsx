import { motion } from "framer-motion";
import RevealText from "../motion/RevealText";
import MagneticButton from "../motion/MagneticButton";
import { SPRING_REVEAL, VIEWPORT_MARGIN } from "../../utils/physics";

const services = [
  { hindi: "ब्रांडिंग", english: "Branding", icon: "🖥️" },
  { hindi: "एडवरटाइजिंग", english: "Advertising", icon: "📢" },
  { hindi: "पैकेजिंग", english: "Packaging", icon: "📦" },
  { hindi: "सोशल मीडिया", english: "Social Media", icon: "📱" },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-golden">
      {/* ── Top Orange Stripes ── */}
      <div className="w-full h-10 md:h-14 stripes-orange" />

      <div className="relative px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          {/* Big SERVICES title */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: VIEWPORT_MARGIN }}
            transition={SPRING_REVEAL}
            className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase leading-none tracking-tight text-center"
            style={{ color: "#1B8C2E", fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}
          >
            SERVICES
          </motion.h2>

          {/* Tightrope walker placeholder + सेवाएँ badge */}
          <div className="flex justify-center mt-6 md:mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...SPRING_REVEAL, delay: 0.3 }}
              className="flex flex-col items-center"
            >
              {/* सेवाएँ badge */}
              <span className="hindi-badge-red font-devanagari text-sm md:text-base mb-3">सेवाएँ</span>
              {/* Walker placeholder */}
              <div className="w-20 h-32 md:w-24 md:h-40 rounded-lg bg-charcoal/10 border-2 border-charcoal/20 flex items-center justify-center">
                <span className="text-3xl">🚶</span>
              </div>
            </motion.div>
          </div>

          {/* ── Rope / Wire ── */}
          <div className="relative mt-8 md:mt-12">
            {/* The rope line */}
            <div className="w-full h-2 md:h-3 bg-gradient-to-r from-charcoal/60 via-charcoal/80 to-charcoal/60 rounded-full relative" 
                 style={{ background: "linear-gradient(90deg, #5C4A2E, #8B7355, #5C4A2E)" }} />
            
            {/* Hanging medallion service badges */}
            <div className="flex justify-around -mt-1 md:mt-0">
              {services.map((service, i) => (
                <MagneticButton key={service.english} strength={0.1}>
                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.3, delay: 0.2 + i * 0.15 }}
                    className="flex flex-col items-center mt-4 md:mt-6"
                  >
                    {/* Hanging wire */}
                    <div className="w-px h-6 md:h-10 bg-charcoal/40" />
                    
                    {/* Circular medallion */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                      className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full border-4 border-charcoal/30 flex flex-col items-center justify-center cursor-pointer shadow-lg"
                      style={{ background: "radial-gradient(circle at 30% 30%, #F5F0E8, #D4C8B0, #B0A48C)" }}
                    >
                      <span className="text-2xl md:text-3xl mb-1">{service.icon}</span>
                      <span className="text-xs md:text-sm font-bold font-devanagari text-charcoal leading-tight text-center px-2">
                        {service.hindi}
                      </span>
                      <span className="text-[10px] md:text-xs font-semibold text-charcoal/70 mt-0.5">
                        {service.english}
                      </span>
                    </motion.div>
                  </motion.div>
                </MagneticButton>
              ))}
            </div>
          </div>

          {/* Description text below */}
          <RevealText delay={0.4} className="mt-14 md:mt-20 text-base md:text-lg font-medium leading-relaxed text-charcoal text-center max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam.
          </RevealText>
        </div>
      </div>

      {/* ── Bottom rope texture ── */}
      <div className="w-full h-3 md:h-4" style={{ background: "linear-gradient(90deg, #5C4A2E, #8B7355, #5C4A2E)" }} />
    </section>
  );
}
