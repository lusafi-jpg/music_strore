import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Music, BarChart3, TrendingUp } from 'lucide-react';

const GrowthSection = () => {
    const growthServices = [
        {
            icon: <Megaphone size={24} />,
            title: "Campagnes Publicitaires",
            description: "Touchez de nouveaux fans avec des campagnes ciblées.",
            features: ["TikTok Ads", "Meta Ads", "Ciblage RDC & diaspora"],
            gradient: "from-brand-tertiary to-brand-quaternary"
        },
        {
            icon: <Music size={24} />,
            title: "Placement Playlists",
            description: "Augmentez vos streams et votre crédibilité de manière organique.",
            features: ["Pitching local & international", "Analyse performance", "Placement Curateur"],
            gradient: "from-brand-quaternary to-brand-quinary"
        },
        {
            icon: <BarChart3 size={24} />,
            title: "Analyse & Croissance",
            description: "Comprenez qui vous écoute et adaptez votre stratégie.",
            features: ["Rapports mensuels", "Suivi tendances", "Recommandations stratégiques"],
            gradient: "from-brand-quinary to-brand-primary"
        }
    ];

    return (
        <section className="py-24 sm:py-32 bg-dark-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-24"
                >
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-tertiary/10 border border-brand-tertiary/20 rounded-full text-brand-tertiary text-xs font-black uppercase tracking-[0.2em] mb-6">
                        <TrendingUp size={16} />
                        <span>Phase 3</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter uppercase mb-6">
                        Développez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-tertiary via-brand-quaternary to-brand-quinary italic">Audience</span>
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed font-medium">
                        La distribution seule ne suffit pas. Nous vous aidons à grandir et à toucher de nouveaux horizons.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {growthServices.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-full"
                        >
                            <div className="h-full bg-dark-surface/30 backdrop-blur-xl rounded-[2rem] p-8 border border-white/5 hover:border-brand-tertiary/30 transition-all duration-500 hover:-translate-y-2 flex flex-col relative overflow-hidden">
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg mb-8`}>
                                        {service.icon}
                                    </div>

                                    <h3 className="text-2xl font-black uppercase text-white mb-4 tracking-tighter">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-400 font-medium leading-relaxed mb-8 flex-grow">
                                        {service.description}
                                    </p>

                                    <ul className="space-y-3">
                                        {service.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex items-center text-xs font-bold text-slate-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-brand-quaternary mr-3" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GrowthSection;
