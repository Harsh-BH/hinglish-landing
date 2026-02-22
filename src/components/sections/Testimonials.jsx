import { motion } from "framer-motion";
import { SPRING_REVEAL, VIEWPORT_MARGIN } from "../../utils/physics";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-hot-pink">
      {/* ── Top Pink-Blue Stripes ── */}
      <div className="w-full h-12 md:h-16 stripes-pink-blue" />

      <div className="relative px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl">

          {/* Angel messengers on sides (placeholders) */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...SPRING_REVEAL, delay: 0.3 }}
              className="w-36 h-56 rounded-lg bg-white/10 border-2 border-white/20 flex items-center justify-center backdrop-blur-sm"
            >
              <div className="text-center">
                <span className="text-4xl">👼</span>
                <p className="text-xs text-white/50 mt-2">Angel Left</p>
              </div>
            </motion.div>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...SPRING_REVEAL, delay: 0.3 }}
              className="w-36 h-56 rounded-lg bg-white/10 border-2 border-white/20 flex items-center justify-center backdrop-blur-sm scale-x-[-1]"
            >
              <div className="text-center scale-x-[-1]">
                <span className="text-4xl">👼</span>
                <p className="text-xs text-white/50 mt-2">Angel Right</p>
              </div>
            </motion.div>
          </div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: VIEWPORT_MARGIN }}
            transition={SPRING_REVEAL}
            className="flex justify-center mb-8"
          >
            <div className="bg-badge-blue px-8 py-3 md:px-12 md:py-4 shadow-xl">
              <h2
                className="text-3xl md:text-5xl font-black text-golden italic"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Testimonials
              </h2>
            </div>
          </motion.div>

          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...SPRING_REVEAL, delay: 0.2 }}
            className="mx-auto max-w-2xl"
          >
            <div className="border-4 border-badge-blue bg-golden p-8 md:p-12 shadow-2xl">
              <p className="text-base md:text-lg font-semibold text-charcoal leading-relaxed italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit magna."
              </p>
              <p className="mt-6 text-base md:text-lg font-semibold text-charcoal leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                incididunt ut magna."
              </p>
            </div>
          </motion.div>

          {/* Marble Postbox with CONTACT label */}
          <div className="flex justify-center mt-12 md:mt-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...SPRING_REVEAL, delay: 0.4 }}
              className="flex flex-col items-center"
            >
              {/* Postbox */}
              <div className="relative">
                {/* Dome top */}
                <div className="w-24 md:w-32 h-10 md:h-14 rounded-t-full mx-auto" 
                     style={{ background: "linear-gradient(135deg, #E8E0D0, #B0A48C)" }} />
                {/* Body */}
                <div className="w-20 md:w-28 h-28 md:h-36 mx-auto rounded-b-lg shadow-lg"
                     style={{ background: "linear-gradient(135deg, #D4C8B0, #A0947C)" }}>
                  {/* Slot */}
                  <div className="w-12 md:w-16 h-1 bg-charcoal/40 mx-auto mt-6 md:mt-8 rounded" />
                  {/* CONTACT label */}
                  <div className="flex justify-center mt-4 md:mt-6">
                    <span className="hindi-badge-red text-[10px] md:text-xs font-bold uppercase tracking-wider">CONTACT</span>
                  </div>
                </div>
                {/* Base */}
                <div className="w-24 md:w-32 h-3 md:h-4 mx-auto rounded-b-lg bg-charcoal/20" />
              </div>

              {/* Shadow ellipse */}
              <div className="w-28 md:w-36 h-3 md:h-4 bg-charcoal/20 rounded-full -mt-1" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Bottom Pink-Blue Stripes ── */}
      <div className="w-full h-12 md:h-16 stripes-pink-blue" />
    </section>
  );
}
