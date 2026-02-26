import React from 'react';
import { motion } from 'framer-motion';
import { Play, TrendingUp, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#000] pt-20">
            {/* Immersive Background Image - Ultra HQ Layer */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/img/hero-woman.png"
                    alt="Background Artist"
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#000] via-[#000]/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-transparent to-transparent"></div>
            </div>

            {/* Soft Ambient Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-purple/20 blur-[150px] rounded-full opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-pink/10 blur-[100px] rounded-full opacity-30"></div>

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center relative z-10 w-full">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:col-span-7 space-y-10"
                >
                    <div className="inline-flex items-center space-x-3 px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-slate-300 text-xs font-black uppercase tracking-[0.2em] shadow-xl">
                        <TrendingUp size={16} className="text-neon-pink" />
                        <span>Plateforme N°1 à Kinshasa</span>
                    </div>

                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-white text-center sm:text-left">
                        FAITES <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan">VIBRER</span> <br />
                        VOTRE MUSIQUE
                    </h1>

                    <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-medium">
                        Propulsez votre talent depuis le cœur de l'Afrique vers le monde entier.
                        Distribution, Design et Promotion professionnelle pour les artistes indépendants.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-center sm:justify-start">
                        <Link to="/start" className="no-underline">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary text-lg"
                            >
                                <span>Démarrage Artiste</span>
                                <Play size={20} fill="currentColor" />
                            </motion.button>
                        </Link>
                        <a href="#services" className="no-underline">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-outline border-white/20 text-white hover:bg-white/5 text-lg"
                            >
                                Explorer les services
                            </motion.button>
                        </a>
                    </div>

                    <div className="flex items-center space-x-8 pt-8 border-t border-white/5">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-dark-bg bg-slate-800 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Artist" />
                                </div>
                            ))}
                        </div>
                        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">+1200 Artistes font confiance à Vibrato</p>
                    </div>
                </motion.div>

                {/* Right Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="lg:col-span-5 relative"
                >
                    <div className="relative">
                        {/* Main Image Frame */}
                        <div className="relative z-5 w-full aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/10 bg-slate-900">
                            <img
                                src="/img/hero-woman.png"
                                alt="Young Artist"
                                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[2s] opacity-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent"></div>
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 z-20 bg-dark-bg/40 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/10 flex items-center space-x-4"
                        >
                            <div className="w-14 h-14 bg-brand-primary rounded-2xl flex items-center justify-center text-text-primary shadow-lg">
                                <Music size={28} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-text-secondary uppercase tracking-widest">Nouvelle Sortie</p>
                                <p className="text-sm font-black text-text-primary uppercase">Single Distribué</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -bottom-10 -left-10 z-50 bg-dark-bg/40 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/10"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent animate-pulse border border-accent/30">
                                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-text-secondary uppercase tracking-widest">En Direct</p>
                                    <p className="text-lg font-black text-text-primary">+105K STREAMS</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Background Shapes */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-neon-pink/20 to-neon-purple/20 blur-3xl -z-10 rounded-full"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
