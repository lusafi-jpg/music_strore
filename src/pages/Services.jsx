import React from 'react';
import { motion } from 'framer-motion';
import FloatingParticles from '../components/FloatingParticles';

// Components imports (will be created soon)
import ServicesHero from '../components/services/ServicesHero';
import PreparationSection from '../components/services/PreparationSection';
import MonetizationSection from '../components/services/MonetizationSection';
import GrowthSection from '../components/services/GrowthSection';
import EcosystemSection from '../components/services/EcosystemSection';
import PacksSection from '../components/services/PacksSection';
import CTASection from '../components/services/CTASection';

const ServicesPage = () => {
    return (
        <div className="bg-dark-bg min-h-screen font-sans text-text-primary overflow-x-hidden">
            <ServicesHero />

            <div className="relative">
                <PreparationSection />
                <FloatingParticles density={30} />
            </div>

            <div className="relative">
                <MonetizationSection />
                <FloatingParticles density={30} />
            </div>

            <div className="relative">
                <GrowthSection />
                <FloatingParticles density={30} />
            </div>

            <div className="relative">
                <EcosystemSection />
                <FloatingParticles density={30} />
            </div>

            <div className="relative">
                <PacksSection />
                <FloatingParticles density={30} />
            </div>

            <div className="relative border-t border-white/5 bg-gradient-to-b from-dark-bg to-[#0a0a0a]">
                <CTASection />
            </div>
        </div>
    );
};

export default ServicesPage;
