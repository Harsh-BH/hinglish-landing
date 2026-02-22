import { motion } from "framer-motion";
import RevealText from "../motion/RevealText";
import MagneticButton from "../motion/MagneticButton";
import { SPRING_REVEAL, VIEWPORT_MARGIN } from "../../utils/physics";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-royal-blue">
      {/* ── Top blue-red stripes ── */}
      <div className="w-full h-10 md:h-14 stripes-blue-red" />

      <div className="relative px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: VIEWPORT_MARGIN }}
            transition={SPRING_REVEAL}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase text-golden"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}
          >
            GET IN TOUCH
          </motion.h2>

          <RevealText delay={0.2} className="mt-4 font-devanagari text-2xl md:text-3xl text-golden/70">
            संपर्क करें
          </RevealText>

          {/* Contact info cards */}
          <div className="mt-12 md:mt-16 grid gap-6 md:grid-cols-3">
            {[
              { icon: "📧", title: "Email", value: "hello@hinglish.studio" },
              { icon: "📍", title: "Location", value: "Mumbai, India" },
              { icon: "📞", title: "Phone", value: "+91 98XXX XXXXX" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, delay: 0.3 + i * 0.1 }}
                className="border-2 border-golden/30 rounded-xl p-6 md:p-8 bg-white/5 backdrop-blur-sm hover:border-golden/60 transition-colors"
              >
                <span className="text-3xl">{item.icon}</span>
                <p className="mt-3 text-xs font-bold uppercase tracking-widest text-golden/60">{item.title}</p>
                <p className="mt-2 text-base md:text-lg font-medium text-white">{item.value}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-12 md:mt-16"
          >
            <MagneticButton strength={0.12}>
              <a
                href="mailto:hello@hinglish.studio"
                className="inline-block bg-golden text-charcoal px-10 py-4 md:px-14 md:py-5 text-base md:text-lg font-bold uppercase tracking-wider rounded-full shadow-xl transition-all hover:bg-golden-dark hover:scale-105"
              >
                Start a Project → शुरू करें
              </a>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom stripe ── */}
      <div className="w-full h-4 md:h-6 bg-golden" />
    </section>
  );
}
