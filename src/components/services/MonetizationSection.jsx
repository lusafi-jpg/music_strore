import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Smartphone, Check, TrendingUp } from 'lucide-react';

const MonetizationSection = () => {
    return (
        <section className="py-24 sm:py-32 bg-gradient-to-br from-[#000] via-[#1c1e1f]/30 to-[#000] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center space-x-2 mb-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-brand-secondary">
                            <span>Phase 2</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-text-primary tracking-tighter uppercase leading-tight">
                            Monétisez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary via-brand-tertiary to-brand-quaternary italic">Musique</span>
                        </h2>
                        <p className="text-lg text-text-secondary leading-relaxed font-medium">
                            Ne vous limitez pas au streaming. Activez toutes les sources de revenus disponibles, y compris sur les réseaux sociaux.
                        </p>

                        <div className="mt-12 space-y-8">
                            {/* Block 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="flex space-x-6 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[#FF0000]/10 border border-[#FF0000]/20 flex items-center justify-center shrink-0 group-hover:bg-[#FF0000]/20 transition-colors">
                                    <Youtube className="text-[#FF0000]" size={28} />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-black uppercase text-white tracking-widest">YouTube & Content ID</h3>
                                    <p className="text-slate-400 font-medium text-sm">Gagnez de l’argent quand votre musique est utilisée sur la plateforme.</p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        <li className="flex items-center text-xs font-bold text-slate-300"><Check size={14} className="text-[#FF0000] mr-2" /> Activation Content ID</li>
                                        <li className="flex items-center text-xs font-bold text-slate-300"><Check size={14} className="text-[#FF0000] mr-2" /> Chaîne Officielle</li>
                                        <li className="flex items-center text-xs font-bold text-slate-300"><Check size={14} className="text-[#FF0000] mr-2" /> Monétisation Shorts</li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Block 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex space-x-6 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                                    <Instagram className="text-white" size={28} />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-black uppercase text-white tracking-widest">Instagram / Facebook</h3>
                                    <p className="text-slate-400 font-medium text-sm">Votre musique disponible dans les librairies audio Meta.</p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        <li className="flex items-center text-xs font-bold text-slate-300"><Check size={14} className="text-[#bc1888] mr-2" /> Revenus sur Reels</li>
                                        <li className="flex items-center text-xs font-bold text-slate-300"><Check size={14} className="text-[#bc1888] mr-2" /> Activation automatique</li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Block 3 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex space-x-6 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[#00f2fe]/10 border border-[#00f2fe]/20 flex items-center justify-center shrink-0 group-hover:bg-[#00f2fe]/20 transition-colors">
                                    <Smartphone className="text-[#00f2fe]" size={28} />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-black uppercase text-white tracking-widest">TikTok & Plateformes Virales</h3>
                                    <p className="text-slate-400 font-medium text-sm">Transformez les tendances en revenus directs.</p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        <li className="flex items-center text-xs font-bold text-slate-300"><Check size={14} className="text-[#00f2fe] mr-2" /> TikTok & CapCut</li>
                                        <li className="flex items-center text-xs font-bold text-slate-300"><Check size={14} className="text-[#00f2fe] mr-2" /> Optimisation virale</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="relative hidden lg:block"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-tr from-brand-secondary/20 to-brand-quaternary/20 blur-3xl -z-10 rounded-full"></div>
                        <div className="card-pro border border-white/10 p-10 bg-dark-bg/60 backdrop-blur-2xl rounded-[3rem] shadow-2xl overflow-hidden aspect-square flex flex-col justify-center relative">
                            {/* Decorative visual representing data/money flow */}
                            <div className="absolute top-10 right-10 opacity-10">
                                <TrendingUp size={200} className="text-brand-secondary" />
                            </div>

                            <h4 className="text-3xl font-black uppercase italic tracking-tighter text-white mb-2">Des revenus partout</h4>
                            <p className="text-slate-400 font-bold mb-8">Plus de 30 plateformes génèrent des royalties pour votre catalogue.</p>

                            <div className="space-y-4">
                                <div className="h-4 bg-white/5 rounded-full overflow-hidden w-3/4">
                                    <div className="h-full bg-gradient-to-r from-brand-secondary to-brand-tertiary w-[80%]"></div>
                                </div>
                                <div className="h-4 bg-white/5 rounded-full overflow-hidden w-2/3">
                                    <div className="h-full bg-gradient-to-r from-brand-tertiary to-brand-quaternary w-[65%]"></div>
                                </div>
                                <div className="h-4 bg-white/5 rounded-full overflow-hidden w-1/2">
                                    <div className="h-full bg-gradient-to-r from-brand-quaternary to-brand-quinary w-[40%]"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MonetizationSection;
