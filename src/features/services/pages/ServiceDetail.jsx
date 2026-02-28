import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../../../data/services.jsx';
import { ArrowLeft, CheckCircle2, MessageSquare, ExternalLink, Sparkles, Activity, Music, Zap, Clock, Star } from 'lucide-react';
import { FloatingParticles } from '../../../components/common';
import { DESIGN_SYSTEM } from '../../../config/design-system';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = servicesData.find(s => s.id === id);
    const [animatedPrice, setAnimatedPrice] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    if (!service) return (
        <div className="pt-40 text-center uppercase font-black min-h-screen bg-gradient-to-br from-dark-bg via-dark-surface/30 to-dark-bg relative overflow-hidden">
            <FloatingParticles density={DESIGN_SYSTEM.PARTICLE_DENSITY.LOW} />
            <div className="absolute inset-0 bg-mesh opacity-10"></div>
            <h1 className="text-4xl text-text-primary font-black tracking-tighter">Service non trouvé</h1>
            <Link to="/" className="text-accent mt-6 block no-underline tracking-widest text-sm hover:text-brand-primary transition-colors">Retour à l'accueil</Link>
        </div>
    );

    const whatsappUrl = `https://wa.me/243854066780?text=${encodeURIComponent(service.whatsappMessage)}`;

    // Animated price counter
    useEffect(() => {
        const targetPrice = parseInt(service.price.split(' - ')[0].replace('$', ''));
        const duration = 2000;
        const steps = 60;
        const increment = targetPrice / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= targetPrice) {
                setAnimatedPrice(targetPrice);
                clearInterval(timer);
            } else {
                setAnimatedPrice(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [service.price]);

    return (
        <div className="pt-32 pb-20 bg-gradient-to-br from-dark-bg via-dark-surface/20 to-dark-bg min-h-screen relative overflow-hidden">
            {/* Enhanced floating particles */}
            <FloatingParticles density={DESIGN_SYSTEM.PARTICLE_DENSITY.HIGH} />

            {/* Dynamic background elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-brand-primary/30 via-brand-secondary/20 to-brand-tertiary/10 blur-[200px] -mr-40 -mt-40 -z-10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-brand-quaternary/30 via-brand-quinary/20 to-brand-primary/10 blur-[200px] -ml-40 -mb-40 -z-10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-accent/20 to-brand-secondary/10 blur-[150px] -translate-x-1/2 -translate-y-1/2 -z-10 rounded-full animate-bounce" style={{animationDelay: '4s'}}></div>

            {/* Floating geometric shapes */}
            <motion.div
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-20 right-20 w-32 h-32 border-2 border-brand-primary/20 rounded-full -z-10"
            />
            <motion.div
                animate={{ rotate: -360, scale: [1, 0.9, 1] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-brand-quaternary/10 to-brand-quinary/10 rounded-lg rotate-45 -z-10"
            />

            {/* Enhanced mesh background */}
            <div className="absolute inset-0 bg-mesh opacity-20"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <Link to="/" className="group inline-flex items-center space-x-2 sm:space-x-3 text-text-secondary hover:text-accent mb-8 sm:mb-16 transition-all font-black uppercase tracking-[0.3em] text-[8px] sm:text-[10px] no-underline">
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
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-tertiary rounded-2xl sm:rounded-3xl flex items-center justify-center text-text-primary shadow-2xl border border-brand-primary/30 relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                    {React.cloneElement(service.icon, { size: 28 })}
                                    <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-accent animate-pulse" />
                                </motion.div>
                                <div className="flex flex-col space-y-2">
                                    <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.4em] px-3 sm:px-5 py-2 rounded-full border border-accent/50 bg-gradient-to-r from-accent/20 to-brand-primary/20 text-accent backdrop-blur-sm shadow-lg shadow-accent/20">
                                        {service.id.includes('distribution') ? 'Sortie Musicale' : 'Expertise Artistique'}
                                    </span>
                                    <div className="flex items-center space-x-2">
                                        <Star className="w-4 h-4 text-accent fill-current" />
                                        <span className="text-xs text-text-secondary font-medium">Premium Service</span>
                                    </div>
                                </div>
                            </div>

                            <motion.h1
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                                className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent to-brand-quaternary leading-[0.85] animate-gradient relative"
                            >
                                {service.title}
                                <motion.div
                                    animate={{ x: [0, 10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute -right-4 top-0 text-accent"
                                >
                                    <Zap size={40} className="animate-pulse" />
                                </motion.div>
                            </motion.h1>

                            <div className="flex items-end space-x-2 sm:space-x-4">
                                <motion.p
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="text-xl sm:text-3xl font-black text-text-muted tracking-tighter uppercase line-through opacity-50"
                                >
                                    $80+
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                                    className="relative"
                                >
                                    <p className="text-2xl sm:text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent via-brand-quaternary to-brand-quinary tracking-tighter uppercase">
                                        ${animatedPrice}
                                        <span className="text-lg sm:text-2xl opacity-70"> - 49$</span>
                                    </p>
                                    <motion.div
                                        animate={{ opacity: [0, 1, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute -top-2 -right-2 w-3 h-3 bg-accent rounded-full animate-ping"
                                    />
                                </motion.div>
                            </div>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-sm sm:text-lg lg:text-xl text-text-secondary leading-relaxed font-medium normal-case relative"
                        >
                            {service.longDescription}
                            <motion.div
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -left-8 top-0 text-accent/30"
                            >
                                <Music size={24} />
                            </motion.div>
                        </motion.p>

                        <div className="pt-2 sm:pt-10 flex flex-col sm:flex-row gap-3 sm:gap-6">
                            <motion.a
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="relative inline-flex items-center justify-center space-x-2 sm:space-x-4 px-4 sm:px-12 py-3 sm:py-6 rounded-xl sm:rounded-3xl bg-gradient-to-r from-brand-primary via-accent to-brand-secondary text-text-primary font-black uppercase tracking-widest hover:from-accent hover:via-brand-quaternary hover:to-brand-tertiary transition-all duration-500 shadow-2xl shadow-accent/30 no-underline text-xs sm:text-sm overflow-hidden group"
                            >
                                <motion.div
                                    animate={isHovered ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <motion.div
                                    animate={isHovered ? { rotate: [0, 10, -10, 0] } : { rotate: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <MessageSquare size={16} className="sm:size-20 relative z-10" />
                                </motion.div>
                                <span className="text-xs sm:text-sm relative z-10">Commander Maintenant</span>
                                <motion.div
                                    animate={isHovered ? { x: [0, 5, 0] } : { x: 0 }}
                                    transition={{ duration: 0.3, repeat: Infinity }}
                                    className="absolute right-4 opacity-50"
                                >
                                    <Sparkles size={16} />
                                </motion.div>
                            </motion.a>

                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    const url = window.location.href;
                                    navigator.share?.({
                                        title: service.title,
                                        text: service.description,
                                        url: url
                                    }).catch(() => {
                                        navigator.clipboard.writeText(url);
                                    });
                                }}
                                className="relative inline-flex items-center justify-center space-x-2 sm:space-x-4 px-4 sm:px-12 py-3 sm:py-6 rounded-xl sm:rounded-3xl bg-dark-surface/60 backdrop-blur-xl border border-accent/30 text-text-primary font-black uppercase tracking-widest hover:bg-accent/10 hover:border-accent/60 transition-all duration-500 cursor-pointer text-xs sm:text-sm overflow-hidden group"
                            >
                                <motion.div
                                    animate={{ opacity: [0, 0.5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 bg-gradient-to-r from-accent/10 to-brand-primary/10"
                                />
                                <ExternalLink size={16} className="sm:size-20 relative z-10" />
                                <span className="text-xs sm:text-sm relative z-10">Partager</span>
                            </motion.button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="card-pro space-y-8 sm:space-y-12 lg:sticky lg:top-40"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative"
                        >
                            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-text-primary italic underline decoration-accent decoration-4 sm:decoration-8 underline-offset-[8px] sm:underline-offset-[12px] relative">
                                Pris en charge
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    className="absolute -right-8 -top-4 text-accent/50"
                                >
                                    <Activity size={24} />
                                </motion.div>
                            </h3>
                        </motion.div>

                        <ul className="space-y-4 sm:space-y-8">
                            {service.features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02, x: 10 }}
                                    className="group flex items-start space-x-3 sm:space-x-5 text-text-secondary font-medium normal-case text-sm sm:text-xs tracking-normal cursor-pointer"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-gradient-to-br from-accent/20 to-brand-primary/20 flex items-center justify-center border border-accent/30 flex-shrink-0 mt-0.5 group-hover:border-accent/60 transition-colors duration-300"
                                    >
                                        <CheckCircle2 className="text-accent sm:size-18" size={14} />
                                    </motion.div>
                                    <span className="flex-grow leading-relaxed group-hover:text-accent transition-colors duration-300">{feature}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            className="relative p-4 sm:p-8 rounded-xl sm:rounded-[2rem] bg-gradient-to-br from-accent via-brand-quaternary to-brand-quinary text-text-primary space-y-4 shadow-xl shadow-accent/20 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-4 right-4"
                            >
                                <Clock className="w-6 h-6 text-white/70" />
                            </motion.div>
                            <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em] opacity-80 relative z-10">Estimation de livraison</p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="text-lg sm:text-2xl font-black uppercase italic tracking-tighter relative z-10"
                            >
                                72 Heures Chrono
                            </motion.p>
                            <motion.div
                                animate={{ x: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute bottom-4 right-4 text-white/30"
                            >
                                <Zap size={16} />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
