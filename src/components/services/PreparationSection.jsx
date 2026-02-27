import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Headphones, Palette, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const PreparationSection = () => {
    const cards = [
        {
            icon: <Headphones size={32} />,
            title: "Production & Finalisation",
            description: "Enregistrez, mixez et masterisez vos titres pour atteindre les standards internationaux.",
            features: [
                "Mastering professionnel",
                "Optimisation qualité streaming",
                "Format prêt plateformes"
            ],
            gradient: "from-brand-primary to-brand-secondary",
            route: "/service/mixing"
        },
        {
            icon: <Palette size={32} />,
            title: "Identité Visuelle",
            description: "Ne laissez pas votre musique être ignorée à cause d’un visuel faible.",
            features: [
                "Cover HD 3000x3000px",
                "Kit visuel réseaux sociaux",
                "Branding artiste"
            ],
            gradient: "from-brand-secondary to-brand-tertiary",
            route: "/service/cover-art"
        },
        {
            icon: <Calendar size={32} />,
            title: "Stratégie de Sortie",
            description: "Nous planifions votre lancement pour maximiser l’impact.",
            features: [
                "Choix date stratégique",
                "Pré-save & lien intelligent",
                "Plan 30 jours avant sortie"
            ],
            gradient: "from-brand-tertiary to-brand-quaternary",
            route: "/start"
        }
    ];

    return (
        <section className="py-24 sm:py-32 bg-dark-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24"
                >
                    <div className="inline-flex items-center space-x-2 mb-4 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-brand-quaternary">
                        <span>Phase 1</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter uppercase mb-6">
                        Préparez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-quaternary to-brand-quinary italic">Sortie</span>
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl leading-relaxed font-medium">
                        Mettez toutes les chances de votre côté avant de lancer votre musique sur les plateformes.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group h-full"
                        >
                            <Link to={card.route} className="no-underline h-full block">
                                <div className="h-full bg-dark-surface/40 backdrop-blur-xl rounded-[2rem] p-8 border border-white/5 hover:border-brand-primary/30 transition-all duration-500 hover:shadow-pro hover:-translate-y-2 relative overflow-hidden flex flex-col">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white shadow-lg mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                            {card.icon}
                                        </div>

                                        <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4 group-hover:text-brand-quaternary transition-colors">
                                            {card.title}
                                        </h3>

                                        <p className="text-text-secondary mb-8 leading-relaxed font-medium flex-grow">
                                            {card.description}
                                        </p>

                                        <div className="space-y-4 mb-8">
                                            {card.features.map((feature, fIndex) => (
                                                <div key={fIndex} className="flex items-start space-x-3 text-xs font-bold text-slate-300">
                                                    <CheckCircle2 size={16} className="text-brand-quaternary shrink-0 mt-0.5" />
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-auto pt-6 border-t border-white/10">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary group-hover:text-white transition-colors">
                                                En savoir plus →
                                            </span>
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

export default PreparationSection;
