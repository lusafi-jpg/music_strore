import React from 'react';
import { motion } from 'framer-motion';
import { Play, Music, Headphones, Radio, Mic2, Volume2 } from 'lucide-react';

const Showcase = () => {
    const showcaseItems = [
        {
            icon: <Music size={24} />,
            title: "SINGLES",
            description: "Sortez vos morceaux en solo avec une distribution professionnelle",
            gradient: "from-brand-primary to-brand-secondary"
        },
        {
            icon: <Headphones size={24} />,
            title: "EPS & ALBUMS",
            description: "Projets complets avec promotion et marketing digital",
            gradient: "from-brand-secondary to-brand-tertiary"
        },
        {
            icon: <Radio size={24} />,
            title: "PLAYLISTS",
            description: "Positionnement sur les playlists les plus influentes",
            gradient: "from-brand-tertiary to-brand-quaternary"
        },
        {
            icon: <Mic2 size={24} />,
            title: "LIVE SESSIONS",
            description: "Enregistrements professionnels et streaming live",
            gradient: "from-brand-quaternary to-brand-quinary"
        },
        {
            icon: <Volume2 size={24} />,
            title: "MIXING & MASTERING",
            description: "Qualité studio pour tous vos projets audio",
            gradient: "from-brand-quinary to-brand-primary"
        },
        {
            icon: <Play size={24} />,
            title: "VIDEO CLIPS",
            description: "Production vidéo professionnelle pour vos titres",
            gradient: "from-brand-primary to-brand-quaternary"
        }
    ];

    return (
        <section className="py-32 bg-gradient-to-br from-[#000] via-[#1c1e1f]/20 to-[#000] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/5 to-transparent blur-3xl rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-brand-quaternary/10 via-brand-quinary/5 to-transparent blur-3xl rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-text-primary text-sm font-medium mb-6">
                        <span>Découvrir</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6">
                        Explorez Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-quaternary to-brand-quinary">Services</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-3xl mx-auto">
                        De la création à la distribution, nous accompagnons votre carrière musicale à chaque étape avec des solutions professionnelles et adaptées.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {showcaseItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="h-full bg-dark-surface/40 backdrop-blur-xl rounded-2xl p-8 border border-white/5 hover:border-brand-primary/20 transition-all duration-500 hover:shadow-pro hover:-translate-y-2 relative overflow-hidden">
                                {/* Background gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                
                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                        <div className="text-text-primary">
                                            {item.icon}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-primary group-hover:to-brand-quaternary transition-all duration-500">
                                        {item.title}
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className="text-text-secondary mb-6 leading-relaxed">
                                        {item.description}
                                    </p>

                                    {/* Arrow */}
                                    <div className="flex items-center space-x-2 text-brand-primary group-hover:text-brand-quaternary transition-colors duration-500">
                                        <span className="text-sm font-medium uppercase tracking-wider">En savoir plus</span>
                                        <div className="w-8 h-8 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center group-hover:bg-brand-quaternary/10 group-hover:border-brand-quaternary/30 transition-all duration-500">
                                            <Play size={16} className="rotate-45" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl shadow-2xl shadow-brand-primary/20">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                            <Music size={24} className="text-white" />
                        </div>
                        <div className="text-left">
                            <p className="text-white font-bold text-lg">Prêt à commencer ?</p>
                            <p className="text-white/80 text-sm">Rejoignez des centaines d'artistes</p>
                        </div>
                        <button className="ml-4 px-6 py-3 bg-white text-brand-primary font-bold rounded-xl hover:bg-white/90 transition-colors">
                            Démarrer
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Showcase;
