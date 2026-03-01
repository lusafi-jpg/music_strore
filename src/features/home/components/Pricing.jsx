import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Crown, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    const poleSections = [
        {
            id: "distribution",
            title: "🎵 Pôle Distribution",
            subtitle: "Distribution mondiale + monétisation",
            plans: [
                {
                    name: "Vibe-Drop",
                    price: "29$",
                    period: "À partir de",
                    description: "Pour lancer votre premier single proprement.",
                    features: [
                        "Distribution sur 150+ plateformes",
                        "Monétisation automatique",
                        "Support 72h",
                        "1 projet/an - 2 titres max free",
                        "Codes ISRC/UPC inclus"
                    ],
                    gradient: "from-brand-primary to-brand-secondary",
                    popular: false,
                    delay: 0,
                    link: "/service/vibe-drop"
                },
                {
                    name: "Vibe-Master",
                    price: "69$",
                    period: "À partir de",
                    description: "Pour les artistes qui veulent une image professionnelle.",
                    features: [
                        "Distribution sur 150+ plateformes",
                        "Badges artistes vérifiés",
                        "Support prioritaire 24h",
                        "3 projets/an - 3 titres max free",
                        "Réseaux sociaux + Splits revenus"
                    ],
                    gradient: "from-brand-secondary to-brand-tertiary",
                    popular: true,
                    delay: 0.1,
                    link: "/service/vibe-master"
                },
                {
                    name: "Vibe-Flash",
                    price: "99$",
                    period: "À partir de",
                    description: "Pour créer un impact fort et protéger vos revenus.",
                    features: [
                        "Distribution sur 150+ plateformes",
                        "Tout le plan Vibe-Master",
                        "YouTube Content ID",
                        "Analyse tendance avancée",
                        "5 projets/an - 5 titres max free",
                        "Support VIP + Promotion"
                    ],
                    gradient: "from-brand-tertiary to-brand-quaternary",
                    popular: false,
                    delay: 0.2,
                    link: "/service/vibe-flash"
                },
                {
                    name: "Vibe-Flux",
                    price: "15$",
                    period: "/mois",
                    description: "Sorties illimitées + accompagnement stratégique.",
                    features: [
                        "Distribution sur 150+ plateformes",
                        "Sorties illimitées",
                        "3 projets/mois - 4 titres max free",
                        "Automatisation complète",
                        "Communauté + Accompagnement",
                        "Annulation à tout moment"
                    ],
                    gradient: "from-brand-quaternary to-brand-quinary",
                    popular: false,
                    delay: 0.3,
                    link: "/service/vibe-flux"
                }
            ]
        }
    ];

    return (
        <section id="service" className="py-32 bg-gradient-to-br from-[#000] via-[#1c1e1f]/30 to-[#000] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/5 to-transparent blur-3xl rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-brand-quaternary/10 via-brand-quinary/5 to-transparent blur-3xl rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-text-primary text-sm font-medium mb-6">
                        <Crown size={16} />
                        <span>Tarifs Avantageux</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6">
                        Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-quaternary to-brand-quinary">Packs</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-3xl mx-auto">
                        Des offres taillées pour chaque étape de votre évolution musicale.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="space-y-20">
                    {poleSections.map((poleSection, poleIndex) => (
                        <motion.div
                            key={poleSection.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: poleIndex * 0.2 }}
                            className="relative"
                        >
                            {/* Pole Header */}
                            <div className="text-center mb-12">
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-primary mb-3">
                                    {poleSection.title}
                                </h3>
                                <p className="text-lg text-text-secondary font-medium max-w-2xl mx-auto">
                                    {poleSection.subtitle}
                                </p>
                            </div>

                            {/* Pole Pricing Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {poleSection.plans.map((plan, planIndex) => (
                                    <motion.div
                                        key={`${poleSection.id}-${planIndex}`}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: plan.delay }}
                                        className="relative"
                                    >
                                        {/* Popular Badge */}
                                        {plan.popular && (
                                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                                                <div className="flex items-center space-x-1 px-4 py-2 bg-gradient-to-r from-brand-quaternary to-brand-quinary rounded-full text-white text-xs font-black uppercase tracking-wider shadow-lg">
                                                    <Star size={12} fill="currentColor" />
                                                    <span>Plus Populaire</span>
                                                </div>
                                            </div>
                                        )}

                                        <div className={`h-full bg-dark-surface/40 backdrop-blur-xl rounded-2xl p-8 border transition-all duration-500 hover:shadow-pro hover:-translate-y-2 relative overflow-hidden ${plan.popular
                                            ? 'border-brand-quaternary/30 shadow-2xl shadow-brand-quaternary/20'
                                            : 'border-white/5 hover:border-brand-primary/20'
                                            }`}>
                                            {/* Background gradient */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 hover:opacity-5 transition-opacity duration-500`}></div>

                                            {/* Content */}
                                            <div className="relative z-10">
                                                {/* Header */}
                                                <div className="text-center mb-8">
                                                    <h3 className={`text-2xl font-bold mb-2 transition-colors duration-500 ${plan.popular ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-quaternary to-brand-quinary' : 'text-text-primary'
                                                        }`}>
                                                        {plan.name}
                                                    </h3>
                                                    <p className="text-text-secondary text-sm mb-4">{plan.description}</p>
                                                    <div className="flex items-baseline justify-center space-x-2">
                                                        <span className="text-text-secondary text-sm">{plan.period !== "/mois" ? plan.period : ""}</span>
                                                        <span className={`text-4xl font-black transition-colors duration-500 ${plan.popular ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-quaternary to-brand-quinary' : 'text-text-primary'
                                                            }`}>
                                                            {plan.price}
                                                        </span>
                                                        <span className="text-text-secondary">{plan.period === "/mois" ? plan.period : ""}</span>
                                                    </div>
                                                </div>

                                                {/* Features */}
                                                <div className="space-y-4 mb-8">
                                                    {plan.features.map((feature, fIndex) => (
                                                        <div key={fIndex} className="flex items-center space-x-3">
                                                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-brand-quaternary/20' : 'bg-brand-primary/20'
                                                                }`}>
                                                                <Check size={12} className={plan.popular ? 'text-brand-quaternary' : 'text-brand-primary'} />
                                                            </div>
                                                            <span className="text-text-secondary text-sm leading-relaxed">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* CTA Button */}
                                                <Link to={plan.link} className="no-underline block">
                                                    <button className={`w-full py-4 font-black uppercase tracking-wider rounded-xl transition-all duration-500 flex items-center justify-center space-x-2 group ${plan.popular
                                                        ? 'bg-gradient-to-r from-brand-quaternary to-brand-quinary text-white hover:from-brand-quinary hover:to-brand-primary shadow-lg shadow-brand-quaternary/20'
                                                        : 'bg-gradient-to-r from-brand-primary to-brand-secondary text-text-primary hover:from-brand-secondary hover:to-brand-tertiary'
                                                        }`}>
                                                        <span>Découvrir</span>
                                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center space-x-4 px-6 py-3 bg-dark-surface/50 backdrop-blur-xl rounded-xl border border-white/10">
                        <Zap size={20} className="text-brand-quaternary" />
                        <span className="text-text-primary font-medium">Annulation à tout moment • Sans engagement • Support 24/7</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
