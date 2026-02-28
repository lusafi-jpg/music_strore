import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, MessageSquare, ArrowRight, Mail } from 'lucide-react';

const Partnership = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-primary/10 via-transparent to-transparent opacity-30"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/20 blur-[150px] rounded-full"></div>
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-primary/20 blur-[150px] rounded-full"></div>

            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative p-8 md:p-16 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group"
                >
                    {/* Inner decoration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-brand-primary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                            <Handshake className="text-brand-primary" size={32} />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                            Devenez l'un de nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-accent">Partenaires</span>
                        </h2>

                        <p className="text-text-secondary text-lg max-w-2xl mb-12">
                            Nous sommes toujours à la recherche de nouveaux partenariats avec des labels, des promoteurs et des créateurs de contenu. Collaborons ensemble pour propulser les talents.
                        </p>

                        <div className="flex justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-5 bg-brand-primary text-text-primary font-black uppercase tracking-widest rounded-2xl flex items-center gap-4 group shadow-2xl shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-all duration-300"
                            >
                                Nous contacter
                                <MessageSquare size={22} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </div>
                    </div>

                    {/* Decorative icons in background */}
                    <div className="absolute top-10 right-10 opacity-5 rotate-12 -z-10">
                        <ArrowRight size={120} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Partnership;
