import { motion } from "framer-motion";
import { SPRING_REVEAL } from "../../utils/physics";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-royal-blue px-6 text-white">
      {/* Corner decorative flower ornaments */}
      <div className="absolute top-0 left-0 w-20 h-20 md:w-28 md:h-28">
        <div className="w-full h-full bg-golden rounded-br-full flex items-end justify-end p-2">
          <svg viewBox="0 0 40 40" className="w-10 h-10 md:w-14 md:h-14">
            <circle cx="20" cy="20" r="14" fill="#D42B2B" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <ellipse
                key={angle}
                cx="20" cy="6" rx="5" ry="10"
                fill="#E23FA9"
                transform={`rotate(${angle} 20 20)`}
              />
            ))}
            <circle cx="20" cy="20" r="6" fill="#F5B731" />
          </svg>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-20 h-20 md:w-28 md:h-28">
        <div className="w-full h-full bg-golden rounded-bl-full flex items-end justify-start p-2">
          <svg viewBox="0 0 40 40" className="w-10 h-10 md:w-14 md:h-14">
            <circle cx="20" cy="20" r="14" fill="#D42B2B" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <ellipse
                key={angle}
                cx="20" cy="6" rx="5" ry="10"
                fill="#E23FA9"
                transform={`rotate(${angle} 20 20)`}
              />
            ))}
            <circle cx="20" cy="20" r="6" fill="#F5B731" />
          </svg>
        </div>
      </div>

      {/* Decorative colorful birds/parrots on sides */}
      <div className="absolute left-4 bottom-1/3 md:left-12">
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 60 40" className="w-16 h-10 md:w-24 md:h-16">
            <path d="M30 5 Q45 0 50 15 Q55 25 40 30 Q35 32 30 28 Q25 32 20 30 Q5 25 10 15 Q15 0 30 5Z" fill="#2DAA42" />
            <path d="M20 18 Q25 12 35 15" stroke="#F5B731" strokeWidth="2" fill="none" />
            <circle cx="22" cy="15" r="2" fill="white" />
            <circle cx="22" cy="15" r="1" fill="black" />
            <path d="M15 17 L10 15 L15 19Z" fill="#E8712A" />
          </svg>
        </motion.div>
      </div>
      <div className="absolute right-4 bottom-1/3 md:right-12">
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 60 40" className="w-16 h-10 md:w-24 md:h-16 scale-x-[-1]">
            <path d="M30 5 Q45 0 50 15 Q55 25 40 30 Q35 32 30 28 Q25 32 20 30 Q5 25 10 15 Q15 0 30 5Z" fill="#E8712A" />
            <path d="M20 18 Q25 12 35 15" stroke="#F5B731" strokeWidth="2" fill="none" />
            <circle cx="22" cy="15" r="2" fill="white" />
            <circle cx="22" cy="15" r="1" fill="black" />
            <path d="M15 17 L10 15 L15 19Z" fill="#D42B2B" />
          </svg>
        </motion.div>
      </div>

      {/* Sun ornament (top center, behind TV) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...SPRING_REVEAL, delay: 0.1 }}
        className="absolute top-12 md:top-8 z-10"
      >
        <svg viewBox="0 0 100 100" className="w-20 h-20 md:w-28 md:h-28">
          <circle cx="50" cy="50" r="25" fill="#F5B731" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
            <line
              key={angle}
              x1="50" y1="50" x2={50 + 40 * Math.cos((angle * Math.PI) / 180)} y2={50 + 40 * Math.sin((angle * Math.PI) / 180)}
              stroke="#F5B731" strokeWidth="3"
              transform={`rotate(0 50 50)`}
            />
          ))}
          <circle cx="50" cy="50" r="18" fill="#D4960A" />
          <circle cx="50" cy="50" r="12" fill="#F5B731" />
          {/* Face */}
          <circle cx="44" cy="47" r="2" fill="#D42B2B" />
          <circle cx="56" cy="47" r="2" fill="#D42B2B" />
          <path d="M43 55 Q50 62 57 55" stroke="#D42B2B" strokeWidth="2" fill="none" />
        </svg>
      </motion.div>

      {/* Left Cherub placeholder */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ...SPRING_REVEAL, delay: 0.6 }}
        className="absolute left-[5%] top-1/2 -translate-y-1/2 z-20 hidden md:block"
      >
        <div className="w-36 h-48 lg:w-48 lg:h-64 rounded-xl bg-white/10 border-2 border-white/20 flex items-center justify-center backdrop-blur-sm">
          <div className="text-center">
            <span className="text-4xl">👼</span>
            <p className="text-xs text-white/50 mt-2">Cherub Left</p>
          </div>
        </div>
      </motion.div>

      {/* Right Cherub placeholder */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ...SPRING_REVEAL, delay: 0.6 }}
        className="absolute right-[5%] top-1/2 -translate-y-1/2 z-20 hidden md:block"
      >
        <div className="w-36 h-48 lg:w-48 lg:h-64 rounded-xl bg-white/10 border-2 border-white/20 flex items-center justify-center backdrop-blur-sm">
          <div className="text-center">
            <span className="text-4xl">👼</span>
            <p className="text-xs text-white/50 mt-2">Cherub Right</p>
          </div>
        </div>
      </motion.div>

      {/* ── RETRO TV ── */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ ...SPRING_REVEAL, delay: 0.3 }}
        className="relative z-30 mt-16 md:mt-8"
      >
        {/* TV Body */}
        <div className="relative">
          {/* TV Outer Shell */}
          <div className="w-[320px] h-[260px] md:w-[480px] md:h-[380px] lg:w-[560px] lg:h-[420px] bg-red-tv rounded-2xl border-4 border-golden p-4 md:p-6 shadow-2xl">
            {/* TV Top bump */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 md:w-48 h-8 bg-golden rounded-t-xl" />
            
            {/* Screen */}
            <div className="w-full h-[65%] bg-charcoal rounded-lg flex items-center justify-center overflow-hidden border-2 border-golden-dark">
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                style={{
                  background: "linear-gradient(180deg, #F5B731 0%, #D4960A 50%, #8B6914 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: "italic",
                }}
              >
                Hinglish
              </motion.h1>
            </div>

            {/* TV Bottom Controls */}
            <div className="flex items-center justify-between mt-3 md:mt-4 px-2">
              {/* Dial left */}
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-cream border-2 border-golden-dark shadow-inner" />
              
              {/* Speaker grilles */}
              <div className="flex-1 mx-4 flex flex-col gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-full h-[2px] md:h-[3px] bg-charcoal rounded-full" />
                ))}
              </div>

              {/* Dial right */}
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-golden border-2 border-golden-dark shadow-inner" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Clouds at bottom ── */}
      <div className="absolute bottom-24 md:bottom-32 left-0 right-0 z-20 pointer-events-none">
        {/* Cloud 1 */}
        <motion.div
          animate={{ x: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute bottom-10 left-[10%]"
        >
          <svg viewBox="0 0 200 80" className="w-48 md:w-72 opacity-90">
            <ellipse cx="70" cy="50" rx="70" ry="30" fill="white" />
            <ellipse cx="110" cy="40" rx="50" ry="35" fill="white" />
            <ellipse cx="150" cy="55" rx="45" ry="25" fill="white" />
            <ellipse cx="50" cy="55" rx="40" ry="22" fill="white" />
          </svg>
        </motion.div>
        {/* Cloud 2 */}
        <motion.div
          animate={{ x: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
          className="absolute bottom-4 right-[5%]"
        >
          <svg viewBox="0 0 200 80" className="w-56 md:w-80 opacity-85">
            <ellipse cx="60" cy="50" rx="60" ry="28" fill="white" />
            <ellipse cx="100" cy="38" rx="55" ry="32" fill="white" />
            <ellipse cx="145" cy="50" rx="50" ry="28" fill="white" />
          </svg>
        </motion.div>
        {/* Cloud 3 (smaller, midscreen) */}
        <motion.div
          animate={{ x: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
          className="absolute bottom-20 left-[40%] md:left-[35%]"
        >
          <svg viewBox="0 0 160 60" className="w-32 md:w-48 opacity-80">
            <ellipse cx="50" cy="35" rx="50" ry="22" fill="white" />
            <ellipse cx="90" cy="28" rx="40" ry="26" fill="white" />
            <ellipse cx="120" cy="38" rx="35" ry="20" fill="white" />
          </svg>
        </motion.div>
      </div>

      {/* ── Red/Blue Stripe Band at Bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-20 md:h-28 stripes-hero-bottom" />
    </section>
  );
}
