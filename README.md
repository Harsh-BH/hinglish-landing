# Hinglish Landing

Animated Hinglish pop-art landing page — React + Vite + Tailwind + Framer Motion

## Overview

Hinglish is a single-page landing site for a fictional bilingual design studio, styled after vibrant Indian pop-art and retro poster aesthetics. Every section pairs English headings with Devanagari (Hindi) labels — परिचय, सेवाएँ, कर्म, फल, संपर्क करें — and is decorated with hand-built inline SVG illustrations (a retro TV, sun, clouds, birds, a marble palace, auto-rickshaws, and a postbox). Content scrolls with Lenis smooth scrolling and reveals through Framer Motion spring animations as it enters the viewport.

## Features

- **Full-page one-scroll layout** — Navbar, Hero, About, Services, Projects, Accolades, Testimonials, Contact, and Footer stitched together in `App.jsx`.
- **Scroll-triggered reveals** — sections and text fade and spring into place with `whileInView` animations tuned by shared spring presets.
- **Ambient looping animations** — floating birds, drifting clouds, and a bobbing sun animate continuously via infinite Framer Motion loops.
- **Magnetic buttons** — service medallions and the contact CTA pull toward the cursor on hover using motion springs.
- **Smooth scrolling** — a Lenis instance (via the `useLenis` hook) drives eased, inertial page scrolling.
- **Bilingual pop-art design** — a custom Indian pop-art color theme, repeating-stripe backdrops, Devanagari + Playfair Display + Inter typography, and English/Hindi copy throughout.
- **Responsive & mobile-ready** — `md`/`lg` breakpoints across every section, plus an animated hamburger menu with an `AnimatePresence` mobile overlay.
- **Reusable motion primitives** — `RevealText`, `DualReveal`, `MagneticButton`, `ParallaxScroll`, and `StaggerChildren` components built on Framer Motion.

## Tech Stack

- **React 19** with **React DOM**
- **Vite 7** (`@vitejs/plugin-react`) for dev server and build
- **Tailwind CSS v4** via the `@tailwindcss/vite` plugin, with a custom `@theme` palette
- **Framer Motion 12** for animations
- **Lenis** for smooth scrolling
- **clsx** + **tailwind-merge** for class composition (the `cn` helper)
- **ESLint 9** for linting

## Getting Started

### Prerequisites

- Node.js 20+ and npm (Vite 7 requires a modern Node release)

### Installation

```bash
npm install
```

### Running

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Lint the codebase:

```bash
npm run lint
```

## Project Structure

```
├── index.html                  # Entry HTML, Google Fonts preload
├── vite.config.js              # Vite + React + Tailwind plugins
├── eslint.config.js
└── src/
    ├── main.jsx                # React root
    ├── App.jsx                 # Composes all sections
    ├── index.css               # Tailwind import + @theme palette, stripe utilities
    ├── components/
    │   ├── layout/             # Navbar, Footer, SectionWrapper
    │   ├── sections/           # Hero, About, Services, KarmaPhal (Projects + Accolades), Testimonials, Contact
    │   └── motion/             # RevealText, DualReveal, MagneticButton, ParallaxScroll, StaggerChildren
    ├── hooks/                  # useLenis (smooth scroll), useMousePosition
    └── utils/                  # physics.js (spring presets), cn.js (class merge)
```
