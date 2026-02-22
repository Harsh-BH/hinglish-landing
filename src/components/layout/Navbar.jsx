import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const leftLinks = [
  { label: "about", href: "#about" },
  { label: "service", href: "#services" },
  { label: "testimonials", href: "#testimonials" },
];

const rightLinks = [
  { label: "projects", href: "#projects" },
  { label: "recognitions", href: "#accolades" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Corner flower ornaments */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-golden flex items-center justify-center overflow-hidden">
        <div className="w-12 h-12 rounded-full bg-red-tv flex items-center justify-center">
          <div className="w-6 h-6 bg-hot-pink rounded-full" />
        </div>
      </div>
      <div className="absolute top-0 right-0 w-16 h-16 bg-golden flex items-center justify-center overflow-hidden">
        <div className="w-12 h-12 rounded-full bg-red-tv flex items-center justify-center">
          <div className="w-6 h-6 bg-hot-pink rounded-full" />
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        {/* Left Nav Links */}
        <div className="hidden items-center gap-8 md:flex">
          {leftLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-white transition-colors hover:text-golden lowercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Center Logo – Sun/Om ornament */}
        <a href="#" className="relative flex flex-col items-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-golden flex items-center justify-center shadow-lg">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-golden-dark flex items-center justify-center">
              <span className="text-2xl md:text-3xl font-devanagari font-bold text-red-tv">ॐ</span>
            </div>
          </div>
        </a>

        {/* Right Nav Links */}
        <div className="hidden items-center gap-8 md:flex">
          {rightLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-white transition-colors hover:text-golden lowercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            className="block h-[2px] w-6 bg-white"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-[2px] w-6 bg-white"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            className="block h-[2px] w-6 bg-white"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-royal-blue md:hidden"
          >
            {[...leftLinks, ...rightLinks].map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-2xl font-medium text-white capitalize"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
