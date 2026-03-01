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
            </div>
        </section>
    );
};

export default ActionSection;
