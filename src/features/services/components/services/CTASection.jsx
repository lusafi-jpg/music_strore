import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageSquare, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
    const reasons = [
        "Basé à Kinshasa",
        "Support WhatsApp local",
        "Paiement Mobile Money",
        "Compréhension du marché africain",
        "Vision carrière long terme"
    ];

    return (
        <section className="py-24 sm:py-32 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-quaternary/20 via-transparent to-brand-primary/10 blur-[120px]"></div>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">

                {/* Pourquoi Vibrato list */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-20 grid grid-cols-2 md:grid-cols-5 gap-4"
                >
                    {reasons.map((reason, index) => (
                        <div key={index} className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                            <CheckCircle2 size={24} className="text-brand-primary mb-3" />
                            <span className="text-xs font-bold text-slate-300 text-center leading-tight">{reason}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Main CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-10"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-text-primary tracking-tighter uppercase leading-[0.9]">
                        Votre musique mérite <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-quaternary to-brand-quinary italic">Plus qu'une distribution</span>
                    </h2>

                    <p className="text-xl md:text-2xl font-black tracking-widest uppercase">
                        Faites <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-brand-secondary to-white">vibrer</span> votre carrière.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                        <Link to="/start" className="w-full sm:w-auto no-underline">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-black uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center space-x-3 shadow-2xl shadow-brand-primary/30"
                            >
                                <Play size={20} fill="currentColor" />
                                <span>Lancer mon projet</span>
                            </motion.button>
                        </Link>

                        <a href="https://wa.me/243836332818" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto no-underline">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-dark-surface/50 border border-white/20 text-white font-black uppercase tracking-widest text-xs sm:text-sm flex items-center justify-center space-x-3 hover:bg-white/10 transition-colors backdrop-blur-md"
                            >
                                <MessageSquare size={20} />
                                <span>Discuter avec un conseiller</span>
                            </motion.button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
