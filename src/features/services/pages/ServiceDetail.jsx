import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../../../data/services.jsx';
import { ArrowLeft, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { FloatingParticles } from '../../../components/common';
import { DESIGN_SYSTEM } from '../../../config/design-system';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = servicesData.find(s => s.id === id);

    if (!service) return (
        <div className="pt-40 text-center uppercase font-black min-h-screen bg-white">
            <h1 className="text-4xl text-slate-900">Service non trouvé</h1>
            <Link to="/" className="text-neon-pink mt-6 block no-underline tracking-widest text-sm">Retour à l'accueil</Link>
        </div>
    );

    const whatsappUrl = `https://wa.me/243854066780?text=${encodeURIComponent(service.whatsappMessage)}`;

    return (
        <div className="pt-32 pb-20 bg-gradient-to-br from-[#000] via-[#1c1e1f]/30 to-[#000] min-h-screen relative overflow-hidden">
            {/* Particules flottantes */}
            <FloatingParticles density={DESIGN_SYSTEM.PARTICLE_DENSITY.MEDIUM} />

            {/* Background highlights with Vibrato spectrum */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-brand-primary/20 via-brand-secondary/10 to-brand-tertiary/5 blur-[150px] -mr-32 -mt-32 -z-10 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-brand-quaternary/20 via-brand-quinary/10 to-brand-primary/5 blur-[150px] -ml-32 -mb-32 -z-10 rounded-full"></div>
            
            {/* Additional mesh background */}
            <div className="absolute inset-0 bg-mesh opacity-5"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <Link to="/" className="group inline-flex items-center space-x-2 sm:space-x-3 text-text-secondary hover:text-text-primary mb-8 sm:mb-16 transition-all font-black uppercase tracking-[0.3em] text-[8px] sm:text-[10px] no-underline">
                        <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
                        <span>Plateforme / Services</span>
                    </Link>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 sm:gap-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-12"
                    >
                        <div className="space-y-6 sm:space-y-8">
                            <div className="flex items-center space-x-4 sm:space-x-6">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl sm:rounded-3xl flex items-center justify-center text-text-primary shadow-2xl border border-brand-primary/20">
                                    {React.cloneElement(service.icon, { size: 28 })}
                                </div>
                                <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.4em] px-3 sm:px-5 py-2 rounded-full border border-brand-quaternary/30 bg-gradient-to-r from-brand-quaternary/10 to-brand-quinary/10 text-text-primary backdrop-blur-sm">
                                    {service.id.includes('distribution') ? 'Sortie Musicale' : 'Expertise Artistique'}
                                </span>
                            </div>
                            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-brand-quaternary to-text-primary leading-[0.85] animate-gradient">
                                {service.title}
                            </h1>
                            <div className="flex items-end space-x-2 sm:space-x-4">
                                <p className="text-xl sm:text-3xl font-black text-text-muted tracking-tighter uppercase line-through opacity-50">$80+</p>
                                <p className="text-2xl sm:text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-quaternary to-brand-quinary tracking-tighter uppercase">
                                    {service.price}
                                </p>
                            </div>
                        </div>

                        <p className="text-sm sm:text-lg lg:text-xl text-text-secondary leading-relaxed font-medium normal-case">
                            {service.longDescription}
                        </p>

                        <div className="pt-2 sm:pt-10 flex flex-col sm:flex-row gap-3 sm:gap-6">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center space-x-2 sm:space-x-4 px-4 sm:px-12 py-3 sm:py-6 rounded-xl sm:rounded-3xl bg-gradient-to-r from-brand-primary to-brand-secondary text-text-primary font-black uppercase tracking-widest hover:from-brand-secondary hover:to-brand-tertiary transition-all duration-500 shadow-2xl shadow-brand-primary/20 no-underline text-xs sm:text-sm relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-quaternary/20 to-brand-quinary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <MessageSquare size={16} className="sm:size-20 relative z-10" />
                                <span className="text-xs sm:text-sm relative z-10">Commander</span>
                            </motion.a>
                            <button onClick={() => {
                                const url = window.location.href;
                                navigator.share?.({
                                    title: service.title,
                                    text: service.description,
                                    url: url
                                }).catch(() => {
                                    // Fallback: copy to clipboard
                                    navigator.clipboard.writeText(url);
                                    // You might want to add a toast notification here
                                });
                            }} className="inline-flex items-center justify-center space-x-2 sm:space-x-4 px-4 sm:px-12 py-3 sm:py-6 rounded-xl sm:rounded-3xl bg-dark-surface/50 backdrop-blur-xl border border-brand-primary/30 text-text-primary font-black uppercase tracking-widest hover:bg-brand-primary/10 hover:border-brand-quaternary/50 transition-all duration-500 cursor-pointer text-xs sm:text-sm relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-quaternary/10 to-brand-quinary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <ExternalLink size={16} className="sm:size-20 relative z-10" />
                                <span className="text-xs sm:text-sm relative z-10">Partager</span>
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="card-pro space-y-8 sm:space-y-12 lg:sticky lg:top-40"
                    >
                        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-text-primary italic underline decoration-accent decoration-4 sm:decoration-8 underline-offset-[8px] sm:underline-offset-[12px]">Pris en charge</h3>
                        <ul className="space-y-4 sm:space-y-8">
                            {service.features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start space-x-3 sm:space-x-5 text-text-secondary font-medium normal-case text-sm sm:text-xs tracking-normal"
                                >
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-dark-surface/50 flex items-center justify-center border border-brand-primary/20 flex-shrink-0 mt-0.5">
                                        <CheckCircle2 className="text-accent sm:size-18" size={14} />
                                    </div>
                                    <span className="flex-grow leading-relaxed">{feature}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="p-4 sm:p-8 rounded-xl sm:rounded-[2rem] bg-brand-primary text-text-primary space-y-4 shadow-xl shadow-brand-primary/5">
                            <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em] opacity-60">Estimation de livraison</p>
                            <p className="text-lg sm:text-2xl font-black uppercase italic tracking-tighter">72 Heures Chrono</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
