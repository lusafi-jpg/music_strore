import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Stats from '../components/Stats';
import FAQ from '../components/FAQ';

export default function Home() {
    return (
        <div className="bg-dark-bg min-h-screen">
            <Hero />
            <Stats />
            <Services />
            <FAQ />
        </div>
    );
}
