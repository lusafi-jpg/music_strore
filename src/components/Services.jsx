import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services.jsx';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

const Services = () => {
    return (
        <section id="services" className="py-40 bg-white overflow-hidden uppercase">
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
                            className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900"
                        >
                            NOS <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-400">SERVICES</span> <span className="text-neon-pink">PRO</span>
                        </motion.h2>
                    </div>
                    <div className="lg:col-span-4 pb-4">
                        <p className="text-slate-500 font-bold tracking-widest text-sm leading-relaxed border-l-4 border-slate-100 pl-8">
                            Une suite complète d'outils conçus pour les artistes indépendants qui ne font aucun compromis sur la qualité.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                                    <span className="absolute top-10 right-10 text-8xl font-black text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        0{index + 1}
                                    </span>

                                    <div className="mb-10 p-6 rounded-3xl bg-slate-50 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                                        {React.cloneElement(service.icon, { size: 40 })}
                                    </div>

                                    <h3 className="text-3xl font-black mb-4 text-slate-900 group-hover:text-neon-pink transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-500 mb-10 normal-case font-medium leading-relaxed">
                                        {service.shortDescription}
                                    </p>

                                    <div className="space-y-4 mb-12 w-full pt-8 border-t border-slate-50">
                                        {service.features.slice(0, 3).map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-center space-x-3 text-[10px] font-black text-slate-400 tracking-[0.2em]">
                                                <CheckCircle2 size={16} className="text-neon-cyan" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto w-full flex items-center justify-between">
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black text-slate-300 tracking-widest uppercase">Investissement</p>
                                            <p className="text-3xl font-black text-slate-900 tracking-tighter">{service.price}</p>
                                        </div>
                                        <div className="w-14 h-14 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-neon-pink group-hover:text-white group-hover:border-neon-pink transition-all duration-500">
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
