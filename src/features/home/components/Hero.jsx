import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, TrendingUp, Music, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DESIGN_SYSTEM } from '../../../config/design-system';

const Hero = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-bg pt-24 sm:pt-32" role="banner">
            {/* Optimized Background Image with Loading State */}
            <div className="absolute inset-0 z-0">
                {!imageLoaded && (
                    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-black flex items-center justify-center">
                        <Loader2 size={48} className="text-brand-primary animate-spin" />
                    </div>
                )}
                <img
                    src="/img/hero-woman.png"
                    alt="Artiste africaine talentueuse utilisant Vibrato pour sa musique"
                    className={`w-full h-full object-cover opacity-40 transition-opacity duration-700 ${imageLoaded ? 'opacity-40' : 'opacity-0'}`}
                    loading="eager"
                    onLoad={() => setImageLoaded(true)}
                    width="1920"
                    height="1080"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            {/* Simplified Ambient Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 blur-3xl rounded-full opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/8 blur-3xl rounded-full opacity-20"></div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
                {/* Left Content - Improved Accessibility */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="lg:col-span-7 space-y-8"
                >
                    <div className="inline-flex items-center space-x-3 px-5 py-2.5 bg-white/8 backdrop-blur-md border border-white/15 rounded-full text-slate-300 text-xs font-bold uppercase tracking-wide shadow-lg">
                        <TrendingUp size={16} className="text-accent" aria-hidden="true" />
                        <span>Plateforme N°1 à Kinshasa</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight text-white text-center sm:text-left">
                        FAITES <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-white">VIBRER</span> <br />
                        VOTRE MUSIQUE
                    </h1>

                    <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-medium">
                        Propulsez votre talent depuis le cœur de l'Afrique vers le monde entier.
                        Distribuez votre musique partout, gardez 100% de vos droits et recevez vos paiements directement par Mobile Money.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
                        <Link to="/start" className="no-underline" aria-label="Commencer avec Vibrato">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-primary text-base px-8 py-4"
                                aria-describedby="cta-description"
                            >
                                <span>Démarrage Artiste</span>
                                <Play size={18} fill="currentColor" aria-hidden="true" />
                            </motion.button>
                        </Link>
                        <a href="#services" className="no-underline">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-outline border-white/25 text-white hover:bg-white/8 text-base px-8 py-4"
                            >
                                Explorer les services
                            </motion.button>
                        </a>
                    </div>

                    {/* Improved Social Proof */}
                    <div className="flex items-center space-x-6 pt-6 border-t border-white/10">
                        <div className="flex -space-x-2" role="group" aria-label="Artistes satisfaits">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-dark-bg bg-slate-800 overflow-hidden">
                                    <img
                                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                        alt={`Portrait artiste ${i}`}
                                        loading="lazy"
                                        width="40"
                                        height="40"
                                    />
                                </div>
                            ))}
                        </div>
                        <p className="text-sm font-medium text-slate-400 uppercase tracking-wide">
                            +1200 Artistes font confiance à Vibrato
                        </p>
                    </div>
                </motion.div>

                {/* Right Visual - Simplified */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:col-span-5 relative"
                >
                    <div className="relative">
                        {/* Main Image Frame */}
                        <div className="relative z-10 w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/15 bg-slate-900">
                            <img
                                src="/img/hero-woman.png"
                                alt="Artiste africaine talentueuse utilisant Vibrato"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                loading="eager"
                                width="400"
                                height="500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                        </div>

                        {/* Simplified Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-8 -right-8 z-20 bg-dark-bg/80 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/10"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                                    <Music size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nouvelle Sortie</p>
                                    <p className="text-sm font-bold text-white">Single Distribué</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-8 -left-8 z-20 bg-dark-bg/80 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/10"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">En Direct</p>
                                    <p className="text-base font-bold text-white">+105K STREAMS</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Hidden description for screen readers */}
            <div id="cta-description" className="sr-only">
                Bouton pour commencer votre parcours artistique avec Vibrato
            </div>
        </section>
    );
};

export default Hero;
