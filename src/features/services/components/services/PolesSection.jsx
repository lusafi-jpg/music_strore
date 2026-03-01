import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, TrendingUp, Palette, CheckCircle2, ArrowRight, Sparkles, Zap } from 'lucide-react';

const PolesSection = () => {
    const [activePole, setActivePole] = useState('distribution');

    const poles = [
        {
            id: 'distribution',
            title: 'Distribution',
            subtitle: 'PÔLE DISTRIBUTION',
            description: 'Gestion technique des sorties musicales',
            icon: Music,
            color: 'from-brand-primary to-brand-secondary',
            bgColor: 'from-brand-primary/10 to-brand-secondary/10',
            borderColor: 'border-brand-primary/20',
            textColor: 'text-brand-primary',
            packages: [
                {
                    name: 'Vibe-Drop',
                    price: '29$',
                    projects: '1 projet gratuit / an',
                    titles: '2 titres inclus',
                    extra: '7$ par projet supplémentaire',
                    features: [
                        'Distribution sur toutes les plateformes digitales',
                        'Publications illimitées (frais au-delà des quotas)',
                        'Monétisation activée sur toutes les plateformes',
                        'Répartition automatique des revenus',
                        'Vérification Apple Music',
                        'Badge Spotify vérifié',
                        'Badge YouTube officiel',
                        'Sorties illimitées sociales',
                        'Votre propre code ISRC',
                        'Content ID YouTube',
                        'Chaîne artiste officielle YouTube'
                    ]
                },
                {
                    name: 'Vibe-Master',
                    price: '69$',
                    projects: '3 projets gratuits / an',
                    titles: '3 titres inclus',
                    extra: '7$ par projet supplémentaire',
                    features: [
                        'Distribution complète prioritaire',
                        'Monétisation globale des œuvres',
                        'Gestion prioritaire des mises en ligne',
                        'Répartition automatique des revenus',
                        'Vérification Apple Music',
                        'Badge Spotify vérifié',
                        'Badge YouTube officiel',
                        'Sorties illimitées digitales',
                        'Sorties illimitées sociales',
                        'Votre propre code ISRC',
                        'Content ID YouTube',
                        'Chaîne artiste officielle YouTube'
                    ]
                },
                {
                    name: 'Vibe-Flash',
                    price: '99$',
                    projects: '5 projets gratuits / an',
                    titles: '5 titres inclus',
                    extra: '7$ par projet supplémentaire',
                    features: [
                        'Distribution priorité élevée',
                        'Activation rapide plateformes',
                        'Monétisation internationale',
                        'Répartition automatique des revenus',
                        'Vérification Apple Music',
                        'Badge Spotify vérifié',
                        'Badge YouTube officiel',
                        'Sorties illimitées digitales',
                        'Sorties illimitées sociales',
                        'Votre propre code ISRC',
                        'Content ID YouTube',
                        'Chaîne artiste officielle YouTube'
                    ]
                },
                {
                    name: 'Vibe-Flux',
                    price: '15$/mois',
                    projects: '3 projets gratuits / mois',
                    titles: '4 titres inclus',
                    extra: '7$ par projet supplémentaire',
                    features: [
                        'Distribution continue automatisée',
                        'Monétisation complète',
                        'Adapté aux artistes actifs',
                        'Répartition automatique des revenus',
                        'Vérification Apple Music',
                        'Badge Spotify vérifié',
                        'Badge YouTube officiel',
                        'Sorties illimitées digitales',
                        'Sorties illimitées sociales',
                        'Votre propre code ISRC',
                        'Content ID YouTube',
                        'Chaîne artiste officielle YouTube'
                    ]
                }
            ]
        },
        {
            id: 'growth',
            title: 'Growth',
            subtitle: 'PÔLE GROWTH',
            description: 'Marketing, publicité, playlists, performance',
            icon: TrendingUp,
            color: 'from-accent to-brand-quaternary',
            bgColor: 'from-accent/10 to-brand-quaternary/10',
            borderColor: 'border-accent/20',
            textColor: 'text-accent',
            packages: []
        },
        {
            id: 'creation',
            title: 'Création',
            subtitle: 'PÔLE CRÉATION',
            description: 'Design, branding, contenus visuels',
            icon: Palette,
            color: 'from-brand-tertiary to-brand-quinary',
            bgColor: 'from-brand-tertiary/10 to-brand-quinary/10',
            borderColor: 'border-brand-tertiary/20',
            textColor: 'text-brand-tertiary',
            packages: []
        }
    ];

    const activePoleData = poles.find(pole => pole.id === activePole);

    return (
        <section className="py-32 px-4 sm:px-6 relative">
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-brand-primary/20 via-accent/10 to-brand-secondary/5 blur-[150px] -mr-32 -mt-32 -z-10 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent/20 via-brand-quaternary/10 to-brand-tertiary/5 blur-[150px] -ml-32 -mb-32 -z-10 rounded-full"></div>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent to-brand-quaternary leading-[0.85] mb-6"
                    >
                        STRUCTURE INTERNE
                        <br />
                        DE VIBRATO
                    </motion.h2>
                    <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                        Vibrato est structuré en 3 pôles complémentaires pour accompagner les artistes de Kinshasa
                        dans toutes les étapes de leur développement musical.
                    </p>
                </motion.div>

                {/* Poles Navigation */}
                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    {poles.map((pole, index) => {
                        const IconComponent = pole.icon;
                        const isActive = activePole === pole.id;

                        return (
                            <motion.button
                                key={pole.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setActivePole(pole.id)}
                                className={`relative p-8 rounded-3xl border-2 transition-all duration-500 overflow-hidden group ${
                                    isActive
                                        ? `bg-gradient-to-br ${pole.bgColor} ${pole.borderColor} shadow-2xl shadow-${pole.textColor}/20`
                                        : 'bg-dark-surface/50 border-white/10 hover:border-white/20'
                                }`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <motion.div
                                    animate={isActive ? { rotate: [0, 5, -5, 0] } : { rotate: 0 }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pole.color} flex items-center justify-center mb-6 mx-auto`}
                                >
                                    <IconComponent className="w-8 h-8 text-white" />
                                </motion.div>

                                <h3 className={`text-xl font-black uppercase tracking-tight mb-2 ${isActive ? pole.textColor : 'text-text-primary'}`}>
                                    {pole.title}
                                </h3>
                                <p className={`text-sm font-medium uppercase tracking-widest mb-4 ${isActive ? pole.textColor : 'text-text-secondary'}`}>
                                    {pole.subtitle}
                                </p>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    {pole.description}
                                </p>

                                {isActive && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute top-4 right-4"
                                    >
                                        <Sparkles className={`w-5 h-5 ${pole.textColor}`} />
                                    </motion.div>
                                )}
                            </motion.button>
                        );
                    })}
                </div>

                {/* Active Pole Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activePole}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-12"
                    >
                        {/* Pole Header */}
                        <div className="text-center">
                            <h3 className={`text-3xl sm:text-5xl font-black uppercase tracking-tighter ${activePoleData.textColor} mb-4`}>
                                {activePoleData.subtitle}
                            </h3>
                            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                                {activePole === 'distribution'
                                    ? "Le pôle Distribution de Vibrato assure la gestion technique, la mise en ligne, la monétisation et le suivi des œuvres musicales sur toutes les plateformes digitales."
                                    : `Découvrez nos services ${activePoleData.title.toLowerCase()} pour propulser votre musique vers de nouveaux sommets.`
                                }
                            </p>
                        </div>

                        {/* Distribution Packages */}
                        {activePole === 'distribution' && activePoleData.packages.length > 0 && (
                            <div className="grid md:grid-cols-2 gap-8">
                                {activePoleData.packages.map((pkg, index) => (
                                    <motion.div
                                        key={pkg.name}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.6 }}
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        className={`relative p-8 rounded-3xl bg-gradient-to-br ${activePoleData.bgColor} border ${activePoleData.borderColor} overflow-hidden group`}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-6">
                                                <div>
                                                    <h4 className={`text-2xl font-black uppercase tracking-tight ${activePoleData.textColor} mb-1`}>
                                                        {pkg.name}
                                                    </h4>
                                                    <p className="text-3xl font-black text-text-primary">{pkg.price}</p>
                                                </div>
                                                <motion.div
                                                    animate={{ y: [0, -3, 0] }}
                                                    transition={{ duration: 3, repeat: Infinity }}
                                                >
                                                    <Zap className={`w-8 h-8 ${activePoleData.textColor}`} />
                                                </motion.div>
                                            </div>

                                            <div className="space-y-4 mb-8">
                                                <div className="flex items-center space-x-3">
                                                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                                                    <span className="text-sm font-medium text-text-secondary">{pkg.projects}</span>
                                                </div>
                                                <div className="flex items-center space-x-3">
                                                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                                                    <span className="text-sm font-medium text-text-secondary">{pkg.titles}</span>
                                                </div>
                                                <div className="flex items-center space-x-3">
                                                    <ArrowRight className="w-5 h-5 text-text-muted flex-shrink-0" />
                                                    <span className="text-sm font-medium text-text-muted">{pkg.extra}</span>
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                {pkg.features.slice(0, 6).map((feature, idx) => (
                                                    <div key={idx} className="flex items-start space-x-3">
                                                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                                                        <span className="text-xs text-text-secondary leading-relaxed">{feature}</span>
                                                    </div>
                                                ))}
                                                {pkg.features.length > 6 && (
                                                    <p className="text-xs text-accent font-medium mt-4">
                                                        +{pkg.features.length - 6} autres fonctionnalités incluses
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {/* Coming Soon for other poles */}
                        {activePole !== 'distribution' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-20"
                            >
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent/20 to-brand-primary/20 flex items-center justify-center"
                                >
                                    <Sparkles className="w-10 h-10 text-accent" />
                                </motion.div>
                                <h4 className="text-2xl font-black text-text-primary mb-4">Bientôt Disponible</h4>
                                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                                    Le pôle {activePoleData.title} sera bientôt disponible avec des services complets
                                    pour accompagner votre développement musical.
                                </p>
                            </motion.div>
                        )}

                        {/* General Rules for Distribution */}
                        {activePole === 'distribution' && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="bg-gradient-to-br from-dark-surface/50 to-dark-card/50 rounded-3xl p-8 border border-accent/20"
                            >
                                <h4 className="text-2xl font-black text-accent uppercase tracking-tight mb-8 text-center">
                                    Règles Générales du Pôle Distribution
                                </h4>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        "La publication est illimitée dans chaque Vibe",
                                        "Chaque Vibe inclut un nombre défini de projets gratuits",
                                        "Chaque projet inclut un nombre défini de titres gratuits",
                                        "Au-delà des projets inclus : 7$ par projet supplémentaire",
                                        "Tous les Vibes incluent la monétisation et les outils officiels",
                                        "Gestion technique complète et suivi personnalisé"
                                    ].map((rule, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-start space-x-4"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <CheckCircle2 className="w-4 h-4 text-accent" />
                                            </div>
                                            <span className="text-sm text-text-secondary leading-relaxed">{rule}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default PolesSection;
