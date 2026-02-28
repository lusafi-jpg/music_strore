import React, { useEffect } from 'react';
import { Hero, Stats, FAQ, FeaturedArtists, Pricing, MusicPlatforms, Partnership } from '../index';
import { FloatingParticles } from '../../../components/common';

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
                <FloatingParticles density={35} />
            </div>

            <div className="relative">
                <FeaturedArtists />
                <FloatingParticles density={35} />
            </div>

            <div className="relative">
                <Pricing />
                <FloatingParticles density={35} />
            </div>

            <section id="faq" className="relative">
                <FAQ />
                <FloatingParticles density={35} />
            </section>

            <Partnership />
        </div>
    );
}
