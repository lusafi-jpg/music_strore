import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Rocket, TrendingUp, Star, Infinity as InfinityIcon, Sparkles, Target, Users, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolutionsSection = () => {
    const [selectedSolution, setSelectedSolution] = useState(null);

    const solutions = [
        {
            id: 'first_single',
            title: "🎵 Je veux sortir mon premier single",
            subtitle: "DÉBUTANT",
            description: "Vous commencez votre aventure musicale et voulez une sortie professionnelle",
            icon: <Rocket size={32} />,
            color: 'from-brand-primary to-brand-secondary',
            bgColor: 'from-brand-primary/10 to-brand-secondary/10',
            borderColor: 'border-brand-primary/20',
            textColor: 'text-brand-primary',
            packages: [
                {
                    name: 'Vibe-Drop',
                    price: '29$',
                    description: 'Distribution mondiale + monétisation',
                    features: ['Toutes plateformes', 'Monétisation auto', 'Badges vérifiés']
                },
                {
                    name: 'Vibe-Start',
                    price: '39$',
                    description: 'Visuels professionnels',
                    features: ['Cover HD', 'Lyric vidéo', 'Kit réseaux']
                },
                {
                    name: 'Vibe-Boost',
                    price: '49$',
                    description: 'Première visibilité',
                    features: ['Analyse stratégique', 'Optimisation profil', 'Campagne test']
                }
            ],
            total: '117$',
            route: '/start?profile=first_single',
            idealFor: 'Artistes débutants'
        },
        {
            id: 'grow_audience',
            title: "📈 Je veux développer mon audience",
            subtitle: "EN DÉVELOPPEMENT",
            description: "Vous avez quelques sorties et voulez accroître votre visibilité",
            icon: <TrendingUp size={32} />,
            color: 'from-brand-secondary to-brand-tertiary',
            bgColor: 'from-brand-secondary/10 to-brand-tertiary/10',
            borderColor: 'border-brand-secondary/20',
            textColor: 'text-brand-secondary',
            packages: [
                {
                    name: 'Vibe-Master',
                    price: '69$',
                    description: 'Distribution prioritaire',
                    features: ['Gestion prioritaire', 'Badges sociaux', 'Splits auto']
                },
                {
                    name: 'Vibe-Visual',
                    price: '89$',
                    description: 'Identité visuelle complète',
                    features: ['Design premium', 'Canvas Spotify', 'Kit complet']
                },
                {
                    name: 'Vibe-Impact',
                    price: '129$',
                    description: 'Marketing ciblé',
                    features: ['Stratégie perso', 'Campagne multi', 'Rapports détaillés']
                }
            ],
            total: '287$',
            route: '/start?profile=grow_audience',
            idealFor: 'Artistes en développement'
        },
        {
            id: 'professional_career',
            title: "🏆 Je veux une carrière professionnelle",
            subtitle: "ÉTABLI",
            description: "Vous visez l'excellence et une carrière durable",
            icon: <Star size={32} />,
            color: 'from-brand-tertiary to-brand-quaternary',
            bgColor: 'from-brand-tertiary/10 to-brand-quaternary/10',
            borderColor: 'border-brand-tertiary/20',
            textColor: 'text-brand-tertiary',
            packages: [
                {
                    name: 'Vibe-Flash',
                    price: '99$',
                    description: 'Distribution premium',
                    features: ['Traitement accéléré', 'Protection max', 'Données temps réel']
                },
                {
                    name: 'Vibe-Brand',
                    price: '179$',
                    description: 'Identité artistique complète',
                    features: ['Direction artistique', 'Branding pro', 'EPK complet']
                },
                {
                    name: 'Vibe-Explosion',
                    price: '249$',
                    description: 'Campagne intensive',
                    features: ['Publicité massive', 'Stratégie conversion', 'Suivi hebdo']
                }
            ],
            total: '527$',
            route: '/start?profile=professional',
            idealFor: 'Artistes établis'
        },
        {
            id: 'regular_publishing',
            title: "🔄 Je publie régulièrement",
            subtitle: "TRÈS ACTIF",
            description: "Vous sortez fréquemment et voulez des processus automatisés",
            icon: <InfinityIcon size={32} />,
            color: 'from-brand-quaternary to-brand-quinary',
            bgColor: 'from-brand-quaternary/10 to-brand-quinary/10',
            borderColor: 'border-brand-quaternary/20',
            textColor: 'text-brand-quaternary',
            packages: [
                {
                    name: 'Vibe-Flux',
                    price: '15$/mois',
                    description: 'Distribution illimitée',
                    features: ['Sorties illimitées', 'Gestion continue', 'Chaîne officielle']
                },
                {
                    name: 'Vibe-Identity',
                    price: '79$/mois',
                    description: 'Présence visuelle constante',
                    features: ['2 visuels/mois', 'Templates pro', 'Cohérence branding']
                },
                {
                    name: 'Vibe-Momentum',
                    price: '89$/mois',
                    description: 'Croissance continue',
                    features: ['Campagnes mensuelles', 'Optimisation profil', 'Ajustement stratégique']
                }
            ],
            total: '183$/mois',
            route: '/start?profile=regular',
            idealFor: 'Artistes actifs'
        }
    ];

    return (
        <section className="py-24 sm:py-32 bg-dark-bg relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-secondary/5 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-tertiary/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-24"
                >
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white text-xs font-black uppercase tracking-[0.2em] mb-6">
                        <Target size={14} className="text-brand-secondary" />
                        <span>Solutions Clés en Main</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter uppercase mb-6">
                        Des <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary via-brand-tertiary to-brand-quaternary italic">Solutions</span> Adaptées
                    </h2>
                    <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed font-medium">
                        Chaque profil d'artiste mérite une approche unique. Découvrez nos solutions complètes adaptées à votre niveau et vos objectifs.
                    </p>
                </motion.div>

                {/* Solutions Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative group cursor-pointer ${
                                selectedSolution === solution.id ? 'scale-105' : ''
                            }`}
                            onClick={() => setSelectedSolution(selectedSolution === solution.id ? null : solution.id)}
                        >
                            <div className={`bg-dark-surface/40 backdrop-blur-xl rounded-[2rem] p-8 border transition-all duration-500 ${
                                selectedSolution === solution.id
                                    ? `border-${solution.borderColor.split('-')[1]}/40 shadow-2xl shadow-${solution.textColor.split('-')[1]}/10`
                                    : 'border-white/5 hover:border-white/20'
                            }`}>
                                {/* Header */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center space-x-4">
                                        <div className={`p-3 rounded-xl bg-gradient-to-r ${solution.color}`}>
                                            <div className="text-white">
                                                {solution.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-xs font-black uppercase tracking-widest text-text-secondary mb-1">
                                                {solution.subtitle}
                                            </div>
                                            <h3 className="text-xl font-black text-white">
                                                {solution.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: selectedSolution === solution.id ? 180 : 0 }}
                                        className="text-text-secondary"
                                    >
                                        ▼
                                    </motion.div>
                                </div>

                                <p className="text-text-secondary mb-6 leading-relaxed">
                                    {solution.description}
                                </p>

                                {/* Packages Preview */}
                                <div className="space-y-3 mb-6">
                                    {solution.packages.slice(0, selectedSolution === solution.id ? 3 : 2).map((pkg, pkgIndex) => (
                                        <div key={pkgIndex} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                            <div>
                                                <div className="font-semibold text-white text-sm">{pkg.name}</div>
                                                <div className="text-xs text-text-secondary">{pkg.description}</div>
                                            </div>
                                            <div className="text-right">
                                                <div className={`font-black text-transparent bg-clip-text bg-gradient-to-r ${solution.color}`}>
                                                    {pkg.price}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    {solution.packages.length > 2 && selectedSolution !== solution.id && (
                                        <div className="text-center text-text-secondary text-sm">
                                            +{solution.packages.length - 2} autres packages...
                                        </div>
                                    )}
                                </div>

                                {/* Total & CTA */}
                                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                    <div>
                                        <div className="text-xs text-text-secondary uppercase tracking-widest">Total</div>
                                        <div className={`text-xl font-black text-transparent bg-clip-text bg-gradient-to-r ${solution.color}`}>
                                            {solution.total}
                                        </div>
                                    </div>
                                    <Link to={solution.route} className="no-underline">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`px-6 py-3 rounded-xl bg-gradient-to-r ${solution.color} text-white font-black uppercase tracking-widest text-xs flex items-center space-x-2 shadow-lg hover:shadow-xl transition-shadow`}
                                        >
                                            <span>Voir Détails</span>
                                            <ArrowRight size={14} />
                                        </motion.button>
                                    </Link>
                                </div>

                                {/* Ideal For */}
                                <div className="mt-4 text-center">
                                    <span className="text-xs text-text-secondary bg-white/5 px-3 py-1 rounded-full">
                                        Idéal pour : {solution.idealFor}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="bg-gradient-to-r from-dark-surface/60 to-dark-surface/40 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 border border-white/10">
                        <div className="flex items-center justify-center mb-6">
                            <Users size={48} className="text-brand-secondary mr-4" />
                            <div className="text-left">
                                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                                    Pas sûr de votre profil ?
                                </h3>
                                <p className="text-text-secondary">
                                    Refaites notre diagnostic intelligent pour une recommandation personnalisée
                                </p>
                            </div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="px-8 py-4 bg-gradient-to-r from-brand-secondary to-brand-tertiary text-white font-black uppercase tracking-widest text-sm flex items-center justify-center space-x-3 rounded-xl shadow-lg shadow-brand-secondary/20 hover:shadow-brand-secondary/40 transition-shadow mx-auto"
                        >
                            <Sparkles size={18} />
                            <span>Refaire le Diagnostic</span>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SolutionsSection;
