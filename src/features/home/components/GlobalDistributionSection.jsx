import React from 'react';
import { motion } from 'framer-motion';
import { Globe, CheckCircle2, TrendingUp, Users, MapPin, Award } from 'lucide-react';

const GlobalDistributionSection = () => {
    const platforms = [
        "Spotify", "Apple Music", "YouTube", "Amazon Music", "Tidal", "Beatport",
        "TikTok", "Instagram", "Facebook", "SoundCloud", "Deezer", "Boomplay",
        "Napster", "Anghami", "Pandora", "iHeartRadio", "Qobuz", "Twitch"
    ];

    const advantages = [
        "Propriété 100% de vos droits",
        "Sorties illimitées selon pack",
        "Monétisation sur toutes les plateformes",
        "Retraits via Mobile Money"
    ];

    const results = [
        { number: "1200+", label: "artistes", icon: <Users size={20} /> },
        { number: "5+", label: "millions de streams", icon: <TrendingUp size={20} /> },
        { number: "150+", label: "pays", icon: <MapPin size={20} /> },
        { number: "+45%", label: "croissance cette année", icon: <Award size={20} /> }
    ];

    return (
        <section className="py-24 sm:py-32 bg-gradient-to-br from-dark-bg via-dark-surface/30 to-dark-bg relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-primary/5 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-secondary/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white text-xs font-black uppercase tracking-[0.2em] mb-6">
                        <Globe size={14} className="text-brand-primary" />
                        <span>Distribution Mondiale</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter uppercase mb-6">
                        Tous vos morceaux <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary italic">partout</span>
                    </h2>
                    <div className="text-lg text-text-secondary font-medium max-w-3xl mx-auto">
                        +150 plateformes : {platforms.join(", ")}...
                    </div>
                </motion.div>

                {/* Advantages */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="text-2xl md:text-3xl font-black text-center text-white mb-12">
                        Nos avantages
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {advantages.map((advantage, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-dark-surface/40 backdrop-blur-xl rounded-2xl p-6 border border-white/5 hover:border-brand-primary/30 transition-all duration-300"
                            >
                                <div className="flex items-center space-x-3">
                                    <CheckCircle2 size={24} className="text-brand-primary flex-shrink-0" />
                                    <span className="text-white font-medium text-sm leading-relaxed">
                                        {advantage}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Results */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl md:text-3xl font-black text-center text-white mb-12">
                        Résultats Vibrato
                    </h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {results.map((result, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-dark-surface/60 to-dark-surface/40 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/10 hover:border-brand-secondary/30 transition-all duration-300"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="p-3 bg-gradient-to-r from-brand-secondary to-brand-tertiary rounded-full text-white">
                                        {result.icon}
                                    </div>
                                </div>
                                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-tertiary mb-2">
                                    {result.number}
                                </div>
                                <div className="text-text-secondary font-medium text-sm">
                                    {result.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-dark-surface/60 to-dark-surface/40 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 border border-white/10 max-w-2xl mx-auto">
                        <h4 className="text-xl md:text-2xl font-black text-white mb-4">
                            Prêt à distribuer mondialement ?
                        </h4>
                        <p className="text-text-secondary mb-6">
                            Rejoignez les 1200+ artistes qui font confiance à Vibrato pour leur distribution internationale.
                        </p>
                        <motion.a
                            href="/services#distribution"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-black uppercase tracking-widest text-sm rounded-xl shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-shadow"
                        >
                            <span>Découvrir nos forfaits</span>
                            <Globe size={18} />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GlobalDistributionSection;
