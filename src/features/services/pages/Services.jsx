import React from 'react';
import { motion } from 'framer-motion';
import { FloatingParticles } from '../../../components/common';
import { DESIGN_SYSTEM } from '../../../config/design-system';

// Components imports
import { ServicesHero, DiagnosticSection, SolutionsSection, ProofsSection, ActionSection } from '../components';

const ServicesPage = () => {
    return (
        <div className="bg-dark-bg min-h-screen font-sans text-text-primary overflow-x-hidden">
            <ServicesHero />

            <div className="relative">
                <DiagnosticSection />
                <FloatingParticles density={DESIGN_SYSTEM.PARTICLE_DENSITY.LOW} />
            </div>

            <div id="distribution" className="relative">
                <SolutionsSection />
                <FloatingParticles density={DESIGN_SYSTEM.PARTICLE_DENSITY.MEDIUM} />
            </div>

            <div id="growth" className="relative">
                <ProofsSection />
                <FloatingParticles density={DESIGN_SYSTEM.PARTICLE_DENSITY.LOW} />
            </div>

            <div id="creation" className="relative">
                <ActionSection />
            </div>
        </div>
    );
};

export default ServicesPage;
