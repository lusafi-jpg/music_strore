import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Stats from '../components/Stats';
import FAQ from '../components/FAQ';
import Showcase from '../components/Showcase';
import FeaturedArtists from '../components/FeaturedArtists';
import Pricing from '../components/Pricing';
import FloatingParticles from '../components/FloatingParticles';

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
                {/* Pas de particules dans le hero */}
            </div>

            <div className="relative">
                <Stats />
                <FloatingParticles density={35} />
            </div>

            <div className="relative">
                <Showcase />
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

            <section id="services" className="relative">
                <Services />
                <FloatingParticles density={35} />
            </section>

            <section id="faq" className="relative">
                <FAQ />
                <FloatingParticles density={35} />
            </section>
        </div>
    );
}
