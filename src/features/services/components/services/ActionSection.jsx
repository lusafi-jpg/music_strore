import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock, Phone, MessageSquare, Mail, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ActionSection = () => {
    const quickActions = [
        {
            icon: <Phone size={24} />,
            title: "Appel Express",
            description: "15 minutes pour comprendre votre projet",
            duration: "15 min",
            cta: "Réserver un appel",
            route: "/contact?type=call",
            color: "from-brand-primary to-brand-secondary",
            available: "Disponible 9h-18h"
        },
        {
            icon: <MessageSquare size={24} />,
            title: "Chat WhatsApp",
            description: "Réponse sous 30 minutes",
            duration: "30 min",
            cta: "Écrire sur WhatsApp",
            route: "https://wa.me/243836332818",
            color: "from-green-500 to-green-600",
            available: "24/7"
        },
        {
            icon: <Mail size={24} />,
            title: "Email Détaillé",
            description: "Réponse sous 2h avec devis personnalisé",
            duration: "2h",
            cta: "Envoyer un email",
            route: "/contact?type=email",
            color: "from-brand-tertiary to-brand-quaternary",
            available: "24/7"
        }
    ];

    const nextSteps = [
        {
            step: "01",
            title: "Brief Créatif",
            description: "On analyse votre musique et vos objectifs ensemble",
            icon: <CheckCircle2 size={20} />,
            completed: true
        },
        {
            step: "02",
            title: "Devis Personnalisé",
            description: "Proposition sur mesure selon votre profil",
            icon: <CheckCircle2 size={20} />,
            completed: true
        },
        {
            step: "03",
            title: "Lancement Projet",
            description: "Mise en route sous 24-48h après validation",
            icon: <Clock size={20} />,
            completed: false
        },
        {
            step: "04",
            title: "Suivi & Résultats",
            description: "Rapports hebdomadaires et optimisation continue",
            icon: <Sparkles size={20} />,
            completed: false
        }
    ];

    return (
        <section className="py-24 sm:py-32 bg-gradient-to-t from-dark-bg via-dark-surface/50 to-dark-bg relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-quaternary/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white text-xs font-black uppercase tracking-[0.2em] mb-6">
                        <ArrowRight size={14} className="text-brand-quinary" />
                        <span>Action Finalisée</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter uppercase mb-6">
                        Prêt à <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-quinary via-brand-primary to-brand-secondary italic">Lancer</span> ?
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed font-medium mb-8">
                        Choisissez votre moyen de contact préféré. Notre équipe vous accompagne pour transformer votre musique en succès.
                    </p>

                    {/* Urgency Signal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-quinary/20 to-brand-primary/20 border border-brand-quinary/30 rounded-full px-6 py-3 text-brand-quinary font-semibold"
                    >
                        <Clock size={16} />
                        <span>Réponse garantie sous 2h maximum</span>
                    </motion.div>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-6 mb-16"
                >
                    {quickActions.map((action, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <Link to={action.route} className="block">
                                <div className="bg-dark-surface/40 backdrop-blur-xl rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-all duration-300 h-full">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`p-3 rounded-xl bg-gradient-to-r ${action.color} text-white`}>
                                            {action.icon}
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs text-text-secondary uppercase tracking-widest">
                                                {action.available}
                                            </div>
                                            <div className="text-sm font-semibold text-brand-quaternary">
                                                {action.duration}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-black text-white mb-2">
                                        {action.title}
                                    </h3>
                                    <p className="text-text-secondary text-sm leading-relaxed mb-6">
                                        {action.description}
                                    </p>

                                    {/* CTA */}
                                    <div className={`w-full py-3 rounded-xl bg-gradient-to-r ${action.color} text-white font-black uppercase tracking-widest text-xs flex items-center justify-center space-x-2 transition-all duration-300 group-hover:shadow-lg`}>
                                        <span>{action.cta}</span>
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Process Steps */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="text-2xl md:text-3xl font-black text-center text-white mb-12">
                        Notre Processus Simple
                    </h3>

                    <div className="grid md:grid-cols-4 gap-6">
                        {nextSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                                    step.completed
                                        ? 'bg-gradient-to-br from-brand-quaternary/20 to-brand-primary/20 border-brand-quaternary/30'
                                        : 'bg-dark-surface/40 border-white/5'
                                }`}
                            >
                                {/* Step Number */}
                                <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-black text-sm mb-4 ${
                                    step.completed
                                        ? 'bg-gradient-to-r from-brand-quaternary to-brand-primary text-white'
                                        : 'bg-white/10 text-text-secondary'
                                }`}>
                                    {step.step}
                                </div>

                                {/* Icon */}
                                <div className={`inline-flex p-2 rounded-lg mb-4 ${
                                    step.completed
                                        ? 'bg-brand-quaternary/20 text-brand-quaternary'
                                        : 'bg-white/10 text-text-secondary'
                                }`}>
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <h4 className="text-lg font-bold text-white mb-2">
                                    {step.title}
                                </h4>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    {step.description}
                                </p>

                                {/* Connection Line */}
                                {index < nextSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-brand-quaternary/50 to-transparent"></div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center bg-gradient-to-r from-dark-surface/60 via-dark-surface/40 to-dark-surface/60 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 border border-white/10"
                >
                    <div className="max-w-2xl mx-auto">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-brand-quinary to-brand-primary rounded-full mb-6">
                            <Sparkles size={32} className="text-white" />
                        </div>

                        <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                            Votre Succès Commence Aujourd'hui
                        </h3>

                        <p className="text-text-secondary mb-8 leading-relaxed">
                            Ne laissez plus votre musique dormir dans vos dossiers. Avec Vibrato, transformez votre talent en carrière rentable.
                            <strong className="text-white"> Premier contact gratuit et sans engagement.</strong>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/start" className="no-underline">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-gradient-to-r from-brand-primary via-brand-quinary to-brand-secondary text-white font-black uppercase tracking-widest text-sm flex items-center justify-center space-x-3 rounded-xl shadow-2xl shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-shadow"
                                >
                                    <Sparkles size={18} />
                                    <span>Commencer Mon Projet</span>
                                    <ArrowRight size={18} />
                                </motion.button>
                            </Link>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="px-8 py-4 bg-white/10 border border-white/20 text-white font-black uppercase tracking-widest text-sm hover:bg-white/20 transition-colors rounded-xl"
                            >
                                Refaire le Diagnostic
                            </motion.button>
                        </div>

                        <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-text-secondary">
                            <div className="flex items-center space-x-1">
                                <CheckCircle2 size={12} className="text-brand-quaternary" />
                                <span>Sans engagement</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <CheckCircle2 size={12} className="text-brand-quaternary" />
                                <span>Devis gratuit</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <CheckCircle2 size={12} className="text-brand-quaternary" />
                                <span>Lancement sous 24h</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ActionSection;
