import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PacksSection = () => {
    const packs = [
        {
            name: "Vibe-Drop",
            description: "Pour lancer votre premier single proprement.",
            price: "À partir de 39$",
            gradient: "from-[#00f2fe] to-[#4facfe]",
            route: "/service/vibe-drop",
            popular: false
        },
        {
            name: "Vibe-Master",
            description: "Pour les artistes qui veulent une image professionnelle.",
            price: "À partir de 89$",
            gradient: "from-[#a18cd1] to-[#fbc2eb]",
            route: "/service/vibe-master",
            popular: true
        },
        {
            name: "Vibe-Flash",
            description: "Pour créer un impact fort et protéger vos revenus.",
            price: "À partir de 129$",
            gradient: "from-[#ff9a9e] to-[#fecfef]",
            route: "/service/vibe-flash",
            popular: false
        },
        {
            name: "Vibe-Flux",
            description: "Sorties illimitées + accompagnement stratégique (Abonnement).",
            price: "15$/mois",
            gradient: "from-[#fad0c4] to-[#ffd1ff]",
            route: "/service/vibe-flux",
            popular: false
        }
    ];

    return (
        <section id="packs" className="py-24 sm:py-32 bg-dark-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-24"
                >
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white text-xs font-black uppercase tracking-[0.2em] mb-6">
                        <span>L'Offre Vibrato</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter uppercase mb-6">
                        Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary via-brand-tertiary to-brand-quaternary italic">Packs</span>
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed font-medium">
                        Des offres taillées pour chaque étape de votre évolution musicale.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {packs.map((pack, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group h-full"
                        >
                            {pack.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                    <div className="flex items-center space-x-1 px-4 py-2 bg-gradient-to-r from-brand-quaternary to-brand-quinary rounded-full text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand-quaternary/20">
                                        <Star size={12} fill="currentColor" />
                                        <span>Plus Populaire</span>
                                    </div>
                                </div>
                            )}

                            <Link to={pack.route} className="block no-underline h-full">
                                <div className={`flex flex-col h-full bg-dark-surface/40 backdrop-blur-xl rounded-[2rem] p-8 border transition-all duration-500 hover:-translate-y-2 overflow-hidden relative ${pack.popular
                                        ? 'border-brand-quaternary/40 shadow-2xl shadow-brand-quaternary/10'
                                        : 'border-white/5 hover:border-white/20'
                                    }`}>
                                    <div className="relative z-10 flex flex-col h-full">
                                        <h3 className={`text-2xl font-black uppercase tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r ${pack.gradient}`}>
                                            {pack.name}
                                        </h3>
                                        <p className="text-slate-400 font-medium text-sm leading-relaxed mb-6">
                                            {pack.description}
                                        </p>

                                        <div className="mt-auto pt-6 border-t border-white/5 mb-8">
                                            <p className="text-2xl font-black text-white">{pack.price}</p>
                                        </div>

                                        <div className={`w-full py-4 rounded-xl flex items-center justify-center space-x-2 font-black uppercase tracking-widest text-[10px] transition-all duration-300 ${pack.popular
                                                ? 'bg-gradient-to-r from-brand-quaternary to-brand-quinary text-white shadow-lg shadow-brand-quaternary/20'
                                                : 'bg-white/5 text-white group-hover:bg-white/10'
                                            }`}>
                                            <span>Découvrir</span>
                                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PacksSection;
