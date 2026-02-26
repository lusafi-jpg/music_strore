import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services.jsx';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

const Services = () => {
    return (
        <section id="services" className="py-32 bg-gradient-to-b from-[#000] to-[#1c1e1f]/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/3 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/3 blur-3xl rounded-full"></div>
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
                        <span>Nos Solutions</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6">
                        Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-accent">Professionnels</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-3xl mx-auto">
                        Tout ce dont vous avez besoin pour développer votre carrière musicale. 
                        Distribution, design et promotion de qualité professionnelle.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link to={`/service/${service.id}`} className="no-underline group">
                                <div className="h-full bg-dark-surface/40 backdrop-blur-xl rounded-2xl p-8 border border-white/5 hover:border-brand-primary/20 transition-all duration-500 hover:shadow-pro hover:-translate-y-2">
                                    {/* Icon */}
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary/10 rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-brand-primary/20 transition-all duration-500">
                                        <div className="text-brand-primary">
                                            {React.cloneElement(service.icon, { size: 28 })}
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-brand-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className="text-text-secondary mb-6 leading-relaxed">
                                        {service.shortDescription}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-3 mb-8">
                                        {service.features.slice(0, 3).map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-center space-x-3">
                                                <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                                                <span className="text-text-muted text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                                        <div>
                                            <p className="text-text-muted text-xs uppercase tracking-wider mb-1">Prix</p>
                                            <p className="text-2xl font-bold text-text-primary">{service.price}</p>
                                        </div>
                                        <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                                            <ArrowUpRight size={20} />
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
