import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, TrendingUp, Award, Users, BarChart3, Shield, Clock, Zap, Sparkles } from 'lucide-react';

const ProofsSection = () => {
    const testimonials = [
        {
            name: "Sarah Koné",
            role: "Chanteuse, Côte d'Ivoire",
            image: "/img/testimonial-1.jpg",
            quote: "Grâce à Vibrato, mon premier single a atteint plus de 500k streams en 3 mois. L'accompagnement était professionnel du début à la fin.",
            results: "500K+ streams",
            growth: "+300%",
            packages: ["Vibe-Drop", "Vibe-Boost"]
        },
        {
            name: "Marcus Diallo",
            role: "Producteur, Sénégal",
            image: "/img/testimonial-2.jpg",
            quote: "La stratégie de monétisation de Vibrato m'a permis de gagner mon premier revenu passif. C'est un game changer pour les artistes africains.",
            results: "15K$ revenus",
            growth: "+250%",
            packages: ["Vibe-Master", "Vibe-Impact"]
        },
        {
            name: "Amina Hassan",
            role: "Rappeuse, Kenya",
            image: "/img/testimonial-3.jpg",
            quote: "Mon EP a explosé grâce à leur campagne marketing. Je suis passée de 0 à 50k abonnés en 2 mois.",
            results: "50K abonnés",
            growth: "+500%",
            packages: ["Vibe-Flash", "Vibe-Explosion"]
        }
    ];

    const stats = [
        { number: "10K+", label: "Artistes accompagnés", icon: <Users size={24} /> },
        { number: "50M+", label: "Streams générés", icon: <BarChart3 size={24} /> },
        { number: "2M$", label: "Revenus distribués", icon: <TrendingUp size={24} /> },
        { number: "95%", label: "Taux de satisfaction", icon: <Star size={24} /> }
    ];

    const guarantees = [
        {
            icon: <Shield size={32} />,
            title: "Protection Totale",
            description: "Vos droits d'auteur sont protégés sur toutes les plateformes avec notre système Content ID.",
            color: "from-brand-primary to-brand-secondary"
        },
        {
            icon: <Clock size={32} />,
            title: "Support 24/7",
            description: "Une équipe dédiée disponible pour répondre à vos questions à tout moment.",
            color: "from-brand-secondary to-brand-tertiary"
        },
        {
            icon: <Award size={32} />,
            title: "Résultats Garantis",
            description: "Si vous n'êtes pas satisfait des résultats après 30 jours, nous remboursons intégralement.",
            color: "from-brand-tertiary to-brand-quaternary"
        },
        {
            icon: <Zap size={32} />,
            title: "Traitement Prioritaire",
            description: "Vos sorties sont traitées en priorité pour une publication accélérée.",
            color: "from-brand-quaternary to-brand-quinary"
        }
    ];

    return (
        <section className="py-24 sm:py-32 bg-gradient-to-br from-dark-bg via-dark-surface/30 to-dark-bg relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-brand-tertiary/5 blur-[180px] rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-quaternary/5 blur-[150px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-24"
                >
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white text-xs font-black uppercase tracking-[0.2em] mb-6">
                        <Award size={14} className="text-brand-tertiary" />
                        <span>Preuves & Garanties</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter uppercase mb-6">
                        Des <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-tertiary via-brand-quaternary to-brand-quinary italic">Résultats</span> Prouvés
                    </h2>
                    <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed font-medium">
                        Découvrez pourquoi des milliers d'artistes africains font confiance à Vibrato pour leur carrière musicale.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-dark-surface/40 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/5"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="p-3 bg-gradient-to-r from-brand-quaternary to-brand-quinary rounded-full text-white">
                                    {stat.icon}
                                </div>
                            </div>
                            <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-quaternary to-brand-quinary mb-2">
                                {stat.number}
                            </div>
                            <div className="text-text-secondary font-medium text-sm">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Testimonials */}
                <div className="mb-20">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-black text-center text-white mb-12"
                    >
                        Ils nous font confiance
                    </motion.h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-dark-surface/40 backdrop-blur-xl rounded-2xl p-6 border border-white/5 hover:border-brand-quaternary/30 transition-all duration-300"
                            >
                                <div className="flex items-center space-x-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-brand-quaternary fill-current" />
                                    ))}
                                </div>

                                <blockquote className="text-text-secondary italic mb-6 leading-relaxed">
                                    "{testimonial.quote}"
                                </blockquote>

                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-brand-quaternary to-brand-quinary rounded-full flex items-center justify-center text-white font-black text-lg">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white">{testimonial.name}</div>
                                        <div className="text-sm text-text-secondary">{testimonial.role}</div>
                                    </div>
                                </div>

                                <div className="bg-white/5 rounded-lg p-4 mb-4">
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div>
                                            <div className="text-lg font-black text-brand-quaternary">{testimonial.results}</div>
                                            <div className="text-xs text-text-secondary">RÉSULTATS</div>
                                        </div>
                                        <div>
                                            <div className="text-lg font-black text-brand-secondary">{testimonial.growth}</div>
                                            <div className="text-xs text-text-secondary">CROISSANCE</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {testimonial.packages.map((pkg, pkgIndex) => (
                                        <span key={pkgIndex} className="text-xs bg-brand-quaternary/20 text-brand-quaternary px-3 py-1 rounded-full font-medium">
                                            {pkg}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Guarantees */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="text-2xl md:text-3xl font-black text-center text-white mb-12">
                        Nos Garanties
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {guarantees.map((guarantee, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-dark-surface/40 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/5 hover:border-white/20 transition-all duration-300"
                            >
                                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${guarantee.color} mb-4`}>
                                    <div className="text-white">
                                        {guarantee.icon}
                                    </div>
                                </div>
                                <h4 className="text-lg font-black text-white mb-3">
                                    {guarantee.title}
                                </h4>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    {guarantee.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom Trust Signal */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center bg-gradient-to-r from-dark-surface/60 to-dark-surface/40 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 border border-white/10"
                >
                    <div className="flex items-center justify-center mb-6">
                        <Shield size={48} className="text-brand-tertiary mr-4" />
                        <div className="text-left">
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                                Sécurité & Transparence
                            </h3>
                            <p className="text-text-secondary">
                                Tous nos processus sont transparents et sécurisés. Suivez vos revenus en temps réel.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full">
                            <CheckCircle2 size={16} className="text-brand-quaternary" />
                            <span className="text-white">Paiement Sécurisé SSL</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full">
                            <CheckCircle2 size={16} className="text-brand-quaternary" />
                            <span className="text-white">RGPD Compliant</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full">
                            <CheckCircle2 size={16} className="text-brand-quaternary" />
                            <span className="text-white">Support Francophone</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProofsSection;
