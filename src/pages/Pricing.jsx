import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Crown, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EcosystemSection } from '../features/services';

const PricingPage = () => {
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
                        "Distribution sur 30+ plateformes",
                        "Monétisation automatique",
                        "Support 72h",
                        "1 projet/an - 2 titres max",
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
                        "3 projets/an - 3 titres max",
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
                        "Tout le plan Vibe-Master",
                        "YouTube Content ID",
                        "Analyse tendance avancée",
                        "5 projets/an - 5 titres max",
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
                        "Sorties illimitées",
                        "3 projets/mois - 4 titres max",
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
        },
        {
            id: "creation",
            title: "🎨 Pôle Création",
            subtitle: "Identité & Visuels professionnels",
            plans: [
                {
                    name: "Vibe-Start",
                    price: "39$",
                    period: "À partir de",
                    description: "Base visuelle pour votre première sortie.",
                    features: [
                        "Design de cover (1 proposition + 1 révision)",
                        "Lyric vidéo simple",
                        "Adaptation réseaux sociaux",
                        "Mini kit visuel (story + post)",
                        "Format YouTube optimisé"
                    ],
                    gradient: "from-[#ffecd2] to-[#fcb69f]",
                    popular: false,
                    delay: 0.4,
                    link: "/service/vibe-start"
                },
                {
                    name: "Vibe-Visual",
                    price: "89$",
                    period: "À partir de",
                    description: "Renforcer votre image et présence digitale.",
                    features: [
                        "Design de cover premium (2 propositions + 2 révisions)",
                        "Lyric vidéo animée",
                        "Canvas Spotify + Bannière YouTube",
                        "Kit réseaux sociaux complet",
                        "Mini teaser vidéo 15 secondes"
                    ],
                    gradient: "from-[#a8edea] to-[#fed6e3]",
                    popular: false,
                    delay: 0.5,
                    link: "/service/vibe-visual"
                },
                {
                    name: "Vibe-Brand",
                    price: "179$",
                    period: "À partir de",
                    description: "Construire une identité artistique cohérente.",
                    features: [
                        "Direction artistique personnalisée",
                        "Design cover premium + Visualizer",
                        "Kit branding complet (logo, palette, typo)",
                        "Templates Instagram personnalisés",
                        "Bannière YouTube + photo stylisée"
                    ],
                    gradient: "from-[#d299c2] to-[#fef9d7]",
                    popular: false,
                    delay: 0.6,
                    link: "/service/vibe-brand"
                },
                {
                    name: "Vibe-Identity",
                    price: "79$",
                    period: "/mois",
                    description: "Maintenir une présence visuelle constante.",
                    features: [
                        "2 visuels par mois",
                        "1 lyric vidéo/visualizer par mois",
                        "Templates réseaux continus",
                        "Ajustements branding si nécessaire",
                        "Cohérence graphique sur toutes plateformes"
                    ],
                    gradient: "from-[#f093fb] to-[#f5576c]",
                    popular: false,
                    delay: 0.7,
                    link: "/service/vibe-identity"
                }
            ]
        },
        {
            id: "growth",
            title: "📈 Pôle Growth",
            subtitle: "Marketing & Performance mesurable",
            plans: [
                {
                    name: "Vibe-Boost",
                    price: "49$",
                    period: "À partir de",
                    description: "Première visibilité et mise en mouvement.",
                    features: [
                        "Analyse stratégique du morceau",
                        "Optimisation profil artiste",
                        "Soumission playlists indépendantes",
                        "Campagne publicitaire test",
                        "Rapport performance basique"
                    ],
                    gradient: "from-[#4facfe] to-[#00f2fe]",
                    popular: false,
                    delay: 0.8,
                    link: "/service/vibe-boost"
                },
                {
                    name: "Vibe-Impact",
                    price: "129$",
                    period: "À partir de",
                    description: "Augmenter significativement streams et audience.",
                    features: [
                        "Stratégie marketing personnalisée",
                        "Campagne publicitaire multi-plateformes",
                        "Soumission élargie en playlists",
                        "Analyse d'audience détaillée",
                        "Rapport performance complet"
                    ],
                    gradient: "from-[#43e97b] to-[#38f9d7]",
                    popular: false,
                    delay: 0.9,
                    link: "/service/vibe-impact"
                },
                {
                    name: "Vibe-Explosion",
                    price: "249$",
                    period: "À partir de",
                    description: "Créer un pic d'attention et accélérer la croissance.",
                    features: [
                        "Plan marketing complet",
                        "Publicité intensive multi-plateformes",
                        "Stratégie conversion audience → fans",
                        "Placement prioritaire en playlists",
                        "Suivi hebdomadaire + Optimisation continue"
                    ],
                    gradient: "from-[#fa709a] to-[#fee140]",
                    popular: false,
                    delay: 1.0,
                    link: "/service/vibe-explosion"
                },
                {
                    name: "Vibe-Momentum",
                    price: "89$",
                    period: "/mois",
                    description: "Croissance continue et stabilité des performances.",
                    features: [
                        "Gestion mensuelle campagnes publicitaires",
                        "Stratégie éditoriale continue",
                        "Optimisation profils permanente",
                        "Suivi mensuel statistiques",
                        "Ajustement stratégique permanent"
                    ],
                    gradient: "from-[#a8c0ff] to-[#3f2b96]",
                    popular: false,
                    delay: 1.1,
                    link: "/service/vibe-momentum"
                }
            ]
        }
    ];

    return (
        <div className="bg-dark-bg min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-[#000] via-[#1c1e1f]/30 to-[#000]">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/5 to-transparent blur-3xl rounded-full"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-brand-quaternary/10 via-brand-quinary/5 to-transparent blur-3xl rounded-full"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-brand-primary/10 border border-brand-primary/20 rounded-full text-text-primary text-sm font-medium mb-6">
                            <Crown size={16} />
                            <span>Tarification Complète</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6">
                            Tous Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-quaternary to-brand-quinary">Packs</span>
                        </h1>
                        <p className="text-text-secondary text-lg max-w-3xl mx-auto">
                            Découvrez l'intégralité de nos offres organisées par pôles d'expertise.
                            Des solutions complètes pour chaque étape de votre carrière musicale.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Sections */}
            <div className="relative">
                {poleSections.map((poleSection, poleIndex) => (
                    <motion.div
                        key={poleSection.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: poleIndex * 0.2 }}
                        className="relative py-24"
                    >
                        {/* Pole Header */}
                        <div className="max-w-7xl mx-auto px-6 mb-16">
                            <div className="text-center">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-primary mb-3">
                                    {poleSection.title}
                                </h2>
                                <p className="text-lg text-text-secondary font-medium max-w-2xl mx-auto">
                                    {poleSection.subtitle}
                                </p>
                            </div>
                        </div>

                        {/* Pole Pricing Cards */}
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
                        </div>
                    </motion.div>
                ))}

                {/* Ecosystem Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative py-24"
                >
                    <EcosystemSection />
                </motion.div>

                {/* Bottom Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center py-16"
                >
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="inline-flex items-center space-x-4 px-6 py-3 bg-dark-surface/50 backdrop-blur-xl rounded-xl border border-white/10">
                            <Zap size={20} className="text-brand-quaternary" />
                            <span className="text-text-primary font-medium">Annulation à tout moment • Sans engagement • Support 24/7</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PricingPage;
