import { motion } from "framer-motion";
import { SPRING_REVEAL, VIEWPORT_MARGIN } from "../../utils/physics";

/* ══════════════════════════════════════════════
   PROJECTS (कर्म) — Marble palace / cinema
   ══════════════════════════════════════════════ */
export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #C44520 0%, #D42B2B 25%, #1B8C2E 60%, #1B8C2E 100%)" }}>
      {/* ── Top Stripe Band ── */}
      <div className="w-full h-10 md:h-14 stripes-orange" />

      <div className="relative px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-5xl flex flex-col items-center">

          {/* "OUR PROJECTS" Sign */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: VIEWPORT_MARGIN }}
            transition={SPRING_REVEAL}
            className="relative z-10"
          >
            <div className="bg-badge-blue border-4 border-red-tv px-8 py-4 md:px-12 md:py-5 text-center shadow-xl">
              <p className="text-xl md:text-3xl font-black text-golden uppercase tracking-wider" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                🦚 OUR PROJECTS 🦚
              </p>
            </div>
          </motion.div>

          {/* Marble Palace Building */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...SPRING_REVEAL, delay: 0.2 }}
            className="relative w-full max-w-3xl mt-6 md:mt-10"
          >
            {/* Building Structure */}
            <div className="relative rounded-t-3xl overflow-hidden" 
                 style={{ background: "linear-gradient(135deg, #E8E0D0, #D4C8B0, #C4B898)" }}>
              
              {/* Building Top Dome */}
              <div className="flex justify-center">
                <div className="w-40 md:w-56 h-16 md:h-20 rounded-t-full"
                     style={{ background: "linear-gradient(135deg, #E8E0D0, #C4B898)" }} />
              </div>

              {/* Video Screen Placeholder */}
              <div className="mx-auto w-[80%] aspect-video bg-charcoal border-4 border-green-field flex items-center justify-center my-4 md:my-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 flex items-center justify-center cursor-pointer backdrop-blur-sm"
                >
                  <span className="text-4xl md:text-5xl text-white/60 ml-1">▶</span>
                </motion.div>
              </div>

              {/* Building Entrance */}
              <div className="flex justify-center pb-4">
                <div className="flex flex-col items-center">
                  {/* Arch */}
                  <div className="w-48 md:w-64 h-12 md:h-16 rounded-t-full border-t-4 border-l-4 border-r-4 border-charcoal/20" 
                       style={{ background: "linear-gradient(135deg, #D4C8B0, #B0A48C)" }} />
                  <p className="text-sm md:text-base font-bold tracking-[0.3em] text-charcoal/60 uppercase mt-1">
                    SINCE 2024
                  </p>
                  {/* कर्म badge */}
                  <span className="hindi-badge font-devanagari text-sm md:text-base mt-2">कर्म</span>
                </div>
              </div>

              {/* Columns on sides */}
              <div className="absolute left-2 md:left-4 top-16 bottom-0 w-6 md:w-10 rounded-t-lg"
                   style={{ background: "linear-gradient(135deg, #E8E0D0, #B0A48C)" }} />
              <div className="absolute right-2 md:right-4 top-16 bottom-0 w-6 md:w-10 rounded-t-lg"
                   style={{ background: "linear-gradient(135deg, #E8E0D0, #B0A48C)" }} />
              <div className="absolute left-10 md:left-16 top-16 bottom-0 w-4 md:w-6 rounded-t-lg"
                   style={{ background: "linear-gradient(135deg, #D4C8B0, #A0947C)" }} />
              <div className="absolute right-10 md:right-16 top-16 bottom-0 w-4 md:w-6 rounded-t-lg"
                   style={{ background: "linear-gradient(135deg, #D4C8B0, #A0947C)" }} />
            </div>
          </motion.div>

          {/* Green grass foreground */}
          <div className="w-full h-16 md:h-24 stripes-green rounded-t-lg -mt-2 relative z-10" />
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   ACCOLADES (फल) — Auto-rickshaws with newspapers
   ══════════════════════════════════════════════ */
const accolades = [
  { title: "THE DAILY NEWS", headline: "INSERT YOUR HEADLINE HERE", color: "border-sky-blue" },
  { title: "THE DAILY NEWS", headline: "INSERT YOUR HEADLINE HERE", color: "border-red-tv" },
  { title: "THE DAILY NEWS", headline: "INSERT YOUR HEADLINE HERE", color: "border-sky-blue" },
];

export function Accolades() {
  return (
    <section id="accolades" className="relative overflow-hidden bg-green-field">
      <div className="relative px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">

          {/* London Tube-style ACCOLADES sign */}
          <div className="flex justify-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: VIEWPORT_MARGIN }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
              className="flex flex-col items-center"
            >
              {/* Circle sign */}
              <div className="relative w-40 h-40 md:w-52 md:h-52">
                {/* Outer red circle */}
                <div className="absolute inset-0 rounded-full border-[12px] md:border-[16px] border-red-tv" />
                {/* Blue bar across center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-14 md:h-18 bg-badge-blue flex flex-col items-center justify-center z-10">
                  <span className="text-sm md:text-lg font-black text-white tracking-wider uppercase">ACCOLADES</span>
                  <span className="text-sm md:text-base font-bold text-golden font-devanagari">फल</span>
                </div>
              </div>
              {/* Pole */}
              <div className="w-1 h-12 md:h-16 bg-charcoal" />
            </motion.div>
          </div>

          {/* Auto-rickshaws with newspaper cards */}
          <div className="flex justify-center gap-6 md:gap-10 overflow-x-auto pb-4">
            {accolades.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.2, delay: i * 0.15 }}
                className="flex flex-col items-center flex-shrink-0"
              >
                {/* Auto-rickshaw */}
                <div className="relative w-44 md:w-56 lg:w-64">
                  {/* Rickshaw body */}
                  <div className="w-full h-28 md:h-36 rounded-lg bg-gradient-to-b from-[#D4C8B0] to-[#B0A48C] flex items-center justify-center relative shadow-lg">
                    {/* Driver area */}
                    <div className="absolute left-2 top-2 w-10 h-16 md:w-12 md:h-20 rounded-t-lg bg-charcoal/10 border border-charcoal/20 flex items-center justify-center">
                      <span className="text-lg">🧑</span>
                    </div>
                    
                    {/* Newspaper card */}
                    <div className={`w-24 md:w-30 h-32 md:h-40 bg-white border-4 ${item.color} p-2 ml-8 shadow-md -mt-8`}>
                      <p className="text-[8px] md:text-[10px] font-black text-charcoal border-b border-charcoal pb-0.5">{item.title}</p>
                      <p className="text-[7px] md:text-[8px] text-charcoal/50 mt-0.5">Vol. XII • Issue 42</p>
                      <p className="text-[8px] md:text-[10px] font-bold text-charcoal mt-2">{item.headline}</p>
                      {/* Photo placeholder */}
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-charcoal/10 rounded mx-auto mt-2 flex items-center justify-center">
                        <span className="text-lg">👤</span>
                      </div>
                      <div className="mt-1 space-y-0.5">
                        {[...Array(3)].map((_, j) => (
                          <div key={j} className="w-full h-[2px] bg-charcoal/10 rounded" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Wheels */}
                  <div className="flex justify-between px-3 -mt-3">
                    <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-charcoal border-2 border-charcoal/50 shadow-md" />
                    <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-charcoal border-2 border-charcoal/50 shadow-md" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Road */}
          <div className="mt-10 md:mt-14">
            <div className="w-full h-3 md:h-4 bg-charcoal rounded-sm" />
            <div className="flex justify-around mt-2">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-10 md:w-16 h-1 bg-white rounded" />
              ))}
            </div>
            <div className="w-full h-3 md:h-4 bg-charcoal rounded-sm mt-2" />
          </div>
        </div>
      </div>

      {/* Bottom pink accent bar */}
      <div className="w-full h-4 md:h-6 bg-hot-pink" />
    </section>
  );
}
