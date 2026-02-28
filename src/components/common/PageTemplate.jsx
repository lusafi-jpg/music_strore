import React from 'react';
import { FloatingParticles } from '../common';
import { DESIGN_SYSTEM } from '../../config/design-system';

/**
 * Standardized Page Template Component
 * Ensures consistency across all Vibrato pages
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Page content
 * @param {string} props.background - Background theme (optional, defaults to dark)
 * @param {number} props.particleDensity - Particle density (optional, uses design system default)
 * @param {string} props.className - Additional CSS classes
 */
const PageTemplate = ({
  children,
  background = DESIGN_SYSTEM.THEMES.DARK,
  particleDensity = DESIGN_SYSTEM.PARTICLE_DENSITY.MEDIUM,
  className = "",
  showParticles = true
}) => {
  return (
    <div className={`${background} min-h-screen relative overflow-hidden ${className}`}>
      {/* Standardized Floating Particles */}
      {showParticles && <FloatingParticles density={particleDensity} />}

      {/* Page Content */}
      {children}
    </div>
  );
};

export default PageTemplate;
