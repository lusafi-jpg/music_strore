import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Crown, Star } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            name: "START",
            price: "15$",
            period: "/mois",
            description: "Parfait pour les artistes débutants",
            features: [
                "Distribution sur 30+ plateformes",
                "Analytiques de base",
                "Support email 48h",
                "1 single par mois",
                "Codes ISRC/UPC inclus"
            ],
            gradient: "from-brand-primary to-brand-secondary",
            popular: false,
            delay: 0
        },
        {
            name: "PRO",
            price: "45$",
            period: "/mois",
            description: "Le choix des artistes professionnels",
            features: [
                "Distribution sur 150+ plateformes",
                "Analytiques avancées",
                "Support prioritaire 24h",
                "Illimité singles/albums",
                "Outils Splits & Accelerator",
                "Mastering IA inclus",
                "Artwork Creator Pro"
            ],
            gradient: "from-brand-secondary to-brand-tertiary",
            popular: true,
            delay: 0.1
        },
        {
            name: "ENTERPRISE",
            price: "199$",
            period: "/mois",
            description: "Pour les labels et agences",
            features: [
                "Tout le plan PRO",
                "Gestion multi-artistes",
                "API & intégrations",
                "Manager dédié",
                "White label possible",
                "Revenus partagés 90/10",
                "Analytics temps réel",
                "Promotion prioritaire"
            ],
            gradient: "from-brand-tertiary to-brand-quaternary",
            popular: false,
            delay: 0.2
        }
    ];

    return (
        <section className="py-32 bg-gradient-to-br from-[#000] via-[#1c1e1f]/30 to-[#000] relative overflow-hidden">
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
                        Choisissez Votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-quaternary to-brand-quinary">Formule</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-3xl mx-auto">
                        Des tarifs transparents adaptés à chaque étape de votre carrière musicale. 
                        Commencez petit et grandissez avec nous.
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
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

                            <div className={`h-full bg-dark-surface/40 backdrop-blur-xl rounded-2xl p-8 border transition-all duration-500 hover:shadow-pro hover:-translate-y-2 relative overflow-hidden ${
                                plan.popular 
                                    ? 'border-brand-quaternary/30 shadow-2xl shadow-brand-quaternary/20' 
                                    : 'border-white/5 hover:border-brand-primary/20'
                            }`}>
                                {/* Background gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 hover:opacity-5 transition-opacity duration-500`}></div>
                                
                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="text-center mb-8">
                                        <h3 className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
                                            plan.popular ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-quaternary to-brand-quinary' : 'text-text-primary'
                                        }`}>
                                            {plan.name}
                                        </h3>
                                        <p className="text-text-secondary text-sm mb-4">{plan.description}</p>
                                        <div className="flex items-baseline justify-center space-x-1">
                                            <span className={`text-4xl font-black transition-colors duration-500 ${
                                                plan.popular ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-quaternary to-brand-quinary' : 'text-text-primary'
                                            }`}>
                                                {plan.price}
                                            </span>
                                            <span className="text-text-secondary">{plan.period}</span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-4 mb-8">
                                        {plan.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-center space-x-3">
                                                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                                                    plan.popular ? 'bg-brand-quaternary/20' : 'bg-brand-primary/20'
                                                }`}>
                                                    <Check size={12} className={plan.popular ? 'text-brand-quaternary' : 'text-brand-primary'} />
                                                </div>
                                                <span className="text-text-secondary text-sm leading-relaxed">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <button className={`w-full py-4 font-black uppercase tracking-wider rounded-xl transition-all duration-500 flex items-center justify-center space-x-2 group ${
                                        plan.popular
                                            ? 'bg-gradient-to-r from-brand-quaternary to-brand-quinary text-white hover:from-brand-quinary hover:to-brand-primary shadow-lg shadow-brand-quaternary/20'
                                            : 'bg-gradient-to-r from-brand-primary to-brand-secondary text-text-primary hover:from-brand-secondary hover:to-brand-tertiary'
                                    }`}>
                                        <span>Choisir {plan.name}</span>
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
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
