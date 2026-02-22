/**
 * Physics constants for consistent spring/motion behavior across the app.
 */

// Default spring config – weighted, physical feel
export const SPRING_DEFAULT = {
  type: "spring",
  bounce: 0.1,
  duration: 0.8,
};

// Snappy spring – quick interactions
export const SPRING_SNAPPY = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 0.5,
};

// Magnetic spring – fluid cursor-following
export const SPRING_MAGNETIC = {
  stiffness: 150,
  damping: 15,
  mass: 0.1,
};

// Slow reveal spring – elegant section entrances
export const SPRING_REVEAL = {
  type: "spring",
  stiffness: 80,
  damping: 20,
  mass: 1,
};

// Viewport detection margin
export const VIEWPORT_MARGIN = "-100px";

// Stagger delay between children
export const STAGGER_DELAY = 0.08;

// Parallax horizontal scroll speed
export const PARALLAX_RANGE = ["0%", "-50%"];
