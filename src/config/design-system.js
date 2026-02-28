// Design System Constants for Vibrato
export const DESIGN_SYSTEM = {
  // Particle density for FloatingParticles component
  PARTICLE_DENSITY: {
    LOW: 25,
    MEDIUM: 30,
    HIGH: 35
  },

  // Background themes
  THEMES: {
    DARK: "bg-dark-bg",
    GRADIENT: "bg-gradient-to-br from-[#000] via-[#1c1e1f]/30 to-[#000]"
  },

  // Typography scales
  TYPOGRAPHY: {
    H1: "text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter uppercase",
    H2: "text-4xl md:text-6xl lg:text-7xl font-bold",
    H3: "text-2xl md:text-4xl font-black uppercase",
    BODY_LARGE: "text-lg md:text-xl text-text-secondary leading-relaxed",
    BODY_MEDIUM: "text-base text-text-secondary",
    BODY_SMALL: "text-sm text-text-secondary"
  },

  // Spacing system
  SPACING: {
    SECTION: "py-32",
    COMPONENT: "space-y-12",
    ELEMENT: "space-y-8"
  },

  // Animation delays and durations
  ANIMATIONS: {
    DELAY_BASE: 0.1,
    DURATION: 0.5,
    STAGGER: 0.1
  },

  // Common component props
  COMPONENTS: {
    FLOATING_PARTICLES: {
      density: 30, // Standardized density
      className: "absolute inset-0"
    }
  }
};

// Page-specific configurations
export const PAGE_CONFIGS = {
  HOME: {
    background: DESIGN_SYSTEM.THEMES.DARK,
    particleDensity: DESIGN_SYSTEM.PARTICLE_DENSITY.MEDIUM
  },
  SERVICES: {
    background: DESIGN_SYSTEM.THEMES.DARK,
    particleDensity: DESIGN_SYSTEM.PARTICLE_DENSITY.MEDIUM
  },
  GET_STARTED: {
    background: DESIGN_SYSTEM.THEMES.DARK,
    particleDensity: DESIGN_SYSTEM.PARTICLE_DENSITY.MEDIUM
  },
  SERVICE_DETAIL: {
    background: DESIGN_SYSTEM.THEMES.GRADIENT,
    particleDensity: DESIGN_SYSTEM.PARTICLE_DENSITY.MEDIUM
  }
};
