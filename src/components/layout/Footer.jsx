export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal px-6 py-12 md:px-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold text-golden font-devanagari">
              हिंग्लिश
            </h3>
            <p className="mt-3 text-sm text-white/50">
              Where cultures converge in design.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-golden/60 mb-2">
              Navigation
            </span>
            {["About", "Services", "Projects", "Testimonials", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-white/50 transition-colors hover:text-golden"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-golden/60 mb-2">
              Connect
            </span>
            {["Twitter", "LinkedIn", "Instagram", "Dribbble"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-white/50 transition-colors hover:text-golden"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/30">
            © {currentYear} Hinglish Studio. All rights reserved.
          </p>
          <p className="text-xs text-white/30 font-devanagari">
            सर्वाधिकार सुरक्षित
          </p>
        </div>
      </div>
    </footer>
  );
}
