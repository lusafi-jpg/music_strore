import React, { useEffect } from 'react';
import { Hero, Stats, FAQ, FeaturedArtists, Pricing, MusicPlatforms, Partnership } from '../index';
import { FloatingParticles } from '../../../components/common';
import { DESIGN_SYSTEM } from '../../../config/design-system';
import { MonetizationSection, GrowthSection, EcosystemSection } from '../../services/components';
import GlobalDistributionSection from '../components/GlobalDistributionSection';

export default function Home() {
    useEffect(() => {
        // Smooth scroll behavior for anchor links
        const handleAnchorClick = (e) => {
            const href = e.target.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        };

        // Add event listeners to all anchor links
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(link => {
            link.addEventListener('click', handleAnchorClick);
        });

        // Cleanup
        return () => {
            anchorLinks.forEach(link => {
                link.removeEventListener('click', handleAnchorClick);
            });
        };
    }, []);

    return (
        <div className="bg-dark-bg min-h-screen">
            <div className="relative">
                <Hero />
                <MusicPlatforms />
            </div>

            <div className="relative">
                <Stats />
                <FloatingParticles density={DESIGN_SYSTEM.PARTICLE_DENSITY.MEDIUM} />
            </div>

            <div className="relative">
                <FeaturedArtists />
                <FloatingParticles density={DESIGN_SYSTEM.PARTICLE_DENSITY.MEDIUM} />
            </div>

            <div className="relative">
                <GlobalDistributionSection />
                <FloatingParticles density={DESIGN_SYSTEM.PARTICLE_DENSITY.MEDIUM} />
            </div>

            <div className="relative">
                <MonetizationSection />
                <FloatingParticles density={DESIGN_SYSTEM.PARTICLE_DENSITY.MEDIUM} />
            </div>

            <div className="relative">
                <GrowthSection />
                <FloatingParticles density={DESIGN_SYSTEM.PARTICLE_DENSITY.MEDIUM} />
            </div>

            <div className="relative">
                <Pricing />
                <FloatingParticles density={DESIGN_SYSTEM.PARTICLE_DENSITY.MEDIUM} />
            </div>

            <section id="faq" className="relative">
                <FAQ />
                <FloatingParticles density={DESIGN_SYSTEM.PARTICLE_DENSITY.MEDIUM} />
            </section>

            <Partnership />
        </div>
    );
}
