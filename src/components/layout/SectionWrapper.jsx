import { cn } from "../../utils/cn";

/**
 * Reusable section wrapper with consistent padding and max-width.
 */
export default function SectionWrapper({ id, className, children, dark = false }) {
  return (
    <section
      id={id}
      className={cn(
        "relative px-6 py-24 md:px-12 md:py-32",
        dark ? "bg-charcoal text-white" : "bg-cream text-charcoal",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
