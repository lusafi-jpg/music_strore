import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services.jsx';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

const Services = () => {
    return (
        <section id="services" className="py-40 bg-dark-bg overflow-hidden uppercase">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-16 items-end mb-24">
                    <div className="lg:col-span-8 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-neon-purple font-black tracking-[0.3em] text-sm"
                        >
                            Passez au niveau supérieur
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white"
                        >
                            NOS <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-indigo-400">TARIFS</span>
                        </motion.h2>
                    </div>
                    <div className="lg:col-span-4 pb-4">
                        <p className="text-slate-400 font-bold tracking-widest text-sm leading-relaxed border-l-4 border-white/5 pl-8">
                            Une suite complète d'outils conçus pour les artistes indépendants qui ne font aucun compromis sur la qualité.
                        </p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link to={`/service/${service.id}`} className="no-underline group">
                                <div className="card-pro h-full flex flex-col items-start relative overflow-hidden">
                                    {/* Subtle decorative number */}
                                    <span className="absolute top-10 right-10 text-8xl font-black text-white/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                                        0{index + 1}
                                    </span>

                                    <div className="mb-10 p-6 rounded-3xl bg-white/5 group-hover:bg-white group-hover:text-dark-bg transition-all duration-500 border border-white/10 group-hover:border-white">
                                        {React.cloneElement(service.icon, { size: 40 })}
                                    </div>

                                    <h3 className="text-3xl font-black mb-4 text-white group-hover:text-neon-pink transition-colors uppercase">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-400 mb-10 normal-case font-medium leading-relaxed">
                                        {service.shortDescription}
                                    </p>

                                    <div className="mb-6 space-y-2 w-full pt-6 border-t border-white/5">
                                        <p className="text-[11px] font-black text-neon-cyan/80 uppercase tracking-widest">
                                            Cible : <span className="text-white normal-case font-medium">{service.cible}</span>
                                        </p>
                                    </div>

                                    <div className="space-y-4 mb-12 w-full">
                                        {service.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-start space-x-3 text-[10px] lg:text-xs font-black text-slate-400 tracking-[0.1em] lg:tracking-[0.15em] leading-relaxed">
                                                <CheckCircle2 size={16} className="text-neon-cyan shrink-0 mt-0.5" />
                                                <span className="normal-case">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto w-full flex items-center justify-between">
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black text-slate-500 tracking-widest uppercase">Investissement</p>
                                            <p className="text-3xl font-black text-white tracking-tighter">{service.price}</p>
                                        </div>
                                        <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-neon-pink group-hover:text-white group-hover:border-neon-pink transition-all duration-500">
                                            <ArrowUpRight size={24} />
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

export default Services;
