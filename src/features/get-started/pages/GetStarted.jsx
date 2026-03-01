import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Music, TrendingUp, Palette, ArrowRight, Sparkles } from 'lucide-react';
import { FloatingParticles } from '../../../components/common';
import { DESIGN_SYSTEM } from '../../../config/design-system';

const GetStarted = () => {
    const navigate = useNavigate();

    const poles = [
        {
            title: "Distribution",
            subtitle: "PÔLE DISTRIBUTION",
            desc: "Mise en ligne, monétisation et protection mondiale de votre musique.",
            icon: <Music size={40} />,
            gradient: "from-brand-primary to-brand-secondary",
            route: "/services#distribution",
            packages: ["Vibe-Drop 29$", "Vibe-Master 69$", "Vibe-Flux 15$/mois"]
        },
        {
            title: "Growth",
            subtitle: "PÔLE GROWTH",
            desc: "Marketing stratégique, visibilité et développement d'audience.",
            icon: <TrendingUp size={40} />,
            gradient: "from-brand-secondary to-brand-tertiary",
            route: "/services#growth",
            packages: ["Vibe-Boost 49$", "Vibe-Impact 129$", "Vibe-Momentum 89$/mois"]
        },
        {
            title: "Création",
            subtitle: "PÔLE CRÉATION",
            desc: "Identité visuelle, contenus professionnels et présence digitale.",
            icon: <Palette size={40} />,
            gradient: "from-brand-tertiary to-brand-quaternary",
            route: "/services#creation",
            packages: ["Vibe-Start 39$", "Vibe-Brand 179$", "Vibe-Identity 79$/mois"]
        }
    ];

    return (
        <div className="min-h-screen pt-40 pb-20 bg-dark-bg uppercase overflow-hidden relative">
            {/* Particules flottantes */}
            <FloatingParticles density={DESIGN_SYSTEM.PARTICLE_DENSITY.MEDIUM} />

            {/* Decorative background elements */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/5 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 sm:mb-24 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-dark-surface/5 border border-brand-primary/20 text-text-secondary rounded-full text-[10px] font-black tracking-[0.3em] backdrop-blur-md"
                    >
                        <Sparkles size={14} className="text-accent" />
                        <span>Plateforme Artiste</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter text-text-primary leading-[0.9]"
                    >
                        LANCE TA <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-accent italic">SORTIE</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg sm:text-xl text-text-secondary font-black tracking-[0.2em]"
                    >
                        Quel est ton objectif aujourd'hui ?
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {poles.map((pole, idx) => (
                        <motion.button
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (idx * 0.1) }}
                            whileHover={{ y: -10 }}
                            onClick={() => navigate(pole.route)}
                            className="group relative card-pro text-left flex flex-col items-start h-full border-none cursor-pointer"
                        >
                            <div className="mb-4">
                                <div className="text-xs font-black tracking-[0.3em] text-text-secondary uppercase mb-2">
                                    {pole.subtitle}
                                </div>
                                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${pole.gradient} flex items-center justify-center text-white shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                                    {pole.icon}
                                </div>
                            </div>

                            <h2 className="text-3xl font-black mb-4 text-text-primary leading-tight uppercase italic">
                                {pole.title}
                            </h2>
                            <p className="text-text-secondary font-bold normal-case mb-6 flex-grow leading-relaxed">
                                {pole.desc}
                            </p>

                            {/* Packages Preview */}
                            <div className="w-full mb-8">
                                <div className="text-xs font-black tracking-[0.3em] text-text-secondary uppercase mb-3">
                                    Forfaits populaires
                                </div>
                                <div className="space-y-2">
                                    {pole.packages.map((pkg, pkgIdx) => (
                                        <div key={pkgIdx} className="flex items-center justify-between text-sm">
                                            <span className="text-text-secondary">{pkg.split(' ')[0]}</span>
                                            <span className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${pole.gradient}`}>
                                                {pkg.split(' ')[1]}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full flex items-center justify-between pt-8 border-t border-white/5">
                                <span className="text-[10px] font-black tracking-[0.3em] text-text-muted">Explorer</span>
                                <div className="w-12 h-12 rounded-2xl bg-dark-surface/5 border border-brand-primary/20 flex items-center justify-center transition-all duration-300 group-hover:bg-brand-primary group-hover:text-text-primary">
                                    <ArrowRight size={24} />
                                </div>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
