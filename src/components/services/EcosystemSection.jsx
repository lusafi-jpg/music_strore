import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Zap, Activity } from 'lucide-react';

const EcosystemSection = () => {
    // Array of platform names for semantic purposes. 
    // In a real scenario, you'd use icons or branded SVGs. Here we'll generate visually pleasing placeholder pills.
    const platforms = ["Spotify", "Apple Music", "YouTube Music", "TikTok", "Instagram", "Deezer", "TIDAL", "Boomplay"];

    return (
        <section className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
            {/* Background Map Graphic or Mesh */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-primary/20 via-transparent to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Typography */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center space-x-2 mb-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-brand-primary">
                            <span>Écosystème Vibrato</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-text-primary tracking-tighter uppercase leading-[0.9]">
                            Distribution <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-tertiary italic">Mondiale</span>
                        </h2>
                        <p className="text-lg text-slate-400 font-medium leading-relaxed max-w-lg">
                            Votre musique disponible instantanément sur toutes les plateformes majeures du monde entier.
                        </p>

                        <div className="pt-6 grid sm:grid-cols-2 gap-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                                    <Globe size={20} className="text-brand-primary" />
                                </div>
                                <div className="space-y-1 mt-1">
                                    <h4 className="text-white font-black text-sm uppercase tracking-wider">Sortie Complète</h4>
                                    <p className="text-slate-500 text-xs font-medium">Single, EP ou Album gérés de A à Z.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 rounded-xl bg-brand-secondary/10 flex items-center justify-center shrink-0">
                                    <ShieldCheck size={20} className="text-brand-secondary" />
                                </div>
                                <div className="space-y-1 mt-1">
                                    <h4 className="text-white font-black text-sm uppercase tracking-wider">Codes INCLUS</h4>
                                    <p className="text-slate-500 text-xs font-medium">ISRC & UPC fournis gratuitement.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 rounded-xl bg-brand-tertiary/10 flex items-center justify-center shrink-0">
                                    <Activity size={20} className="text-brand-tertiary" />
                                </div>
                                <div className="space-y-1 mt-1">
                                    <h4 className="text-white font-black text-sm uppercase tracking-wider">Suivi Temps Réel</h4>
                                    <p className="text-slate-500 text-xs font-medium">Analytics et reporting transparent.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 rounded-xl bg-[#F0B90B]/10 flex items-center justify-center shrink-0">
                                    <Zap size={20} className="text-[#F0B90B]" />
                                </div>
                                <div className="space-y-1 mt-1">
                                    <h4 className="text-white font-black text-sm uppercase tracking-wider">Mobile Money</h4>
                                    <p className="text-slate-500 text-xs font-medium">Retraits de vos royalties via Mobile Cash.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Visual Platform Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-dark-surface/20 backdrop-blur-md rounded-[3rem] p-8 sm:p-12 border border-white/5 shadow-2xl"
                    >
                        <h3 className="text-center font-black text-slate-500 uppercase tracking-widest text-xs mb-8">Disponible Notamment Sur :</h3>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {platforms.map((platform, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="px-6 py-4 bg-white/5 border border-white/10 rounded-full font-black text-white text-sm sm:text-base cursor-default hover:bg-white/10 transition-colors"
                                >
                                    {platform}
                                </motion.div>
                            ))}
                            <div className="px-6 py-4 bg-transparent border border-dashed border-white/20 rounded-full font-black text-slate-500 text-sm sm:text-base">
                                + 150 autres
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default EcosystemSection;
