import React, { useMemo, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mic, Music, Circle, Headphones, Play, Volume2 } from 'lucide-react';

const FloatingParticles = ({ density = 40 }) => { // Augmenté à 40 particules
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        // Délai d'activation optimisé pour éviter surcharge
        const timer = setTimeout(() => setIsVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    // Optimisation: réduire les particules sur mobile
    const actualDensity = useMemo(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth < 768 ? Math.floor(density * 0.6) : density;
        }
        return density;
    }, [density]);

    // Générer des particules avec propriétés optimisées
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const particleTypes = [
            { icon: Circle, color: 'text-brand-primary/30' },
            { icon: Mic, color: 'text-brand-secondary/30' },
            { icon: Music, color: 'text-brand-tertiary/30' },
            { icon: Headphones, color: 'text-brand-quaternary/30' },
            { icon: Play, color: 'text-brand-quinary/30' },
            { icon: Volume2, color: 'text-brand-primary/30' }
        ];

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setParticles(Array.from({ length: actualDensity }, (_, index) => {
            const type = particleTypes[index % particleTypes.length];
            const IconComponent = type.icon;

            return {
                id: index,
                icon: IconComponent,
                color: type.color,
                x: Math.random() * 90 + 5,
                scale: Math.random() * 1.2 + 0.3,
                delay: Math.random() * 8,
                duration: Math.random() * 25 + 20, // Durée plus longue pour moins de calculs
                opacity: Math.random() * 0.4 + 0.3, // Augmenté : 0.3 à 0.7 au lieu de 0.05 à 0.2
                rotation: Math.random() * 360
            };
        }));
    }, [actualDensity]);

    if (!isVisible) return null;

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 pointer-events-none overflow-hidden z-0"
            style={{ contain: 'layout style paint' }} // Optimisation CSS
        >
            {particles.map((particle) => {
                const IconComponent = particle.icon;

                return (
                    <motion.div
                        key={particle.id}
                        className="absolute will-change-transform"
                        style={{
                            left: `${particle.x}%`,
                            bottom: '-50px',
                        }}
                        initial={{
                            y: '100vh', // Commence en bas de l'écran
                            opacity: 0,
                            scale: 0,
                            rotate: 0
                        }}
                        animate={{
                            y: '-100vh', // Monte jusqu'en haut de l'écran (traverse toute la page)
                            opacity: [0, particle.opacity, 0],
                            scale: [0, particle.scale, particle.scale * 0.7],
                            rotate: particle.rotation
                        }}
                        transition={{
                            duration: particle.duration,
                            delay: particle.delay,
                            repeat: Infinity,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            times: [0, 0.1, 1],
                        }}
                    >
                        <div className={`flex items-center justify-center ${particle.color}`}>
                            <IconComponent
                                size={typeof window !== 'undefined' && window.innerWidth < 768 ? 12 : window.innerWidth < 1024 ? 16 : 20}
                                className="drop-shadow-sm"
                            />
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default FloatingParticles;
