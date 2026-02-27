import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const ServicesHero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 bg-[#000] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-brand-quaternary/5 to-transparent blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-secondary/10 blur-[150px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-8 space-y-8"
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-dark-surface/50 border border-brand-primary/20 backdrop-blur-xl rounded-full text-text-secondary text-[10px] font-black uppercase tracking-[0.3em]">
                            <Sparkles size={14} className="text-brand-quaternary" />
                            <span>Plateforme de distribution</span>
                        </div>

                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-text-primary leading-[0.9] uppercase">
                            Vibrato <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-quaternary to-brand-quinary italic">Services</span>
                        </h1>

                        <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed font-medium">
                            Nous accompagnons les artistes africains avec des solutions conçues pour transformer leur musique en carrière digitale rentable.
                            Une suite complète d’outils pour distribuer, protéger, monétiser et développer votre musique.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <Link to="/start" className="no-underline">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-black uppercase tracking-widest text-xs flex items-center justify-center space-x-3 shadow-2xl shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-shadow"
                                >
                                    <span>Commencer mon projet</span>
                                    <ArrowRight size={18} />
                                </motion.button>
                            </Link>

                            <a href="#packs" className="no-underline">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-dark-surface/50 border border-white/10 text-white font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-colors"
                                >
                                    Voir nos Packs
                                </motion.button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;
