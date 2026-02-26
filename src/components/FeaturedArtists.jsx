import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, TrendingUp, ArrowRight, ArrowLeft, PieChart, Zap, Link2, Music, Image } from 'lucide-react';

const FeaturedArtists = () => {
    const tools = [
        {
            title: "Splits",
            description: "Répartissez vos revenus entre plusieurs créateurs",
            icon: <PieChart size={24} />,
            gradient: "from-brand-primary to-brand-secondary",
            delay: 0
        },
        {
            title: "Accelerator", 
            description: "Développez votre carrière grâce à nos outils de promotion automatisés",
            icon: <Zap size={24} />,
            gradient: "from-brand-secondary to-brand-tertiary",
            delay: 0.1
        },
        {
            title: "Linkshare",
            description: "Obtenez un multi-lien pour promouvoir votre sortie sur chaque plateforme",
            icon: <Link2 size={24} />,
            gradient: "from-brand-tertiary to-brand-quaternary",
            delay: 0.2
        },
        {
            title: "Mastering",
            description: "Optimisez vos fichiers audio grâce à l'IA",
            icon: <Music size={24} />,
            gradient: "from-brand-quaternary to-brand-quinary",
            delay: 0.3
        },
        {
            title: "Artwork",
            description: "Créez facilement vos visuels de sortie",
            icon: <Image size={24} />,
            gradient: "from-brand-quinary to-brand-primary",
            delay: 0.4
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [itemsPerView, setItemsPerView] = useState(3);

    // Responsive items per view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerView(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerView(2);
            } else {
                setItemsPerView(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                (prevIndex + 1) % Math.ceil(tools.length / itemsPerView)
            );
        }, 4000);
        
        return () => clearInterval(interval);
    }, [isAutoPlaying, itemsPerView, tools.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex + 1) % Math.ceil(tools.length / itemsPerView)
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + Math.ceil(tools.length / itemsPerView)) % Math.ceil(tools.length / itemsPerView)
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const totalSlides = Math.ceil(tools.length / itemsPerView);
    const startIndex = currentIndex * itemsPerView;
    const visibleTools = tools.slice(startIndex, startIndex + itemsPerView);

    return (
        <section className="py-32 bg-gradient-to-br from-[#000] via-[#1c1e1f]/30 to-[#000] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/5 to-transparent blur-3xl rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-brand-quaternary/10 via-brand-quinary/5 to-transparent blur-3xl rounded-full"></div>
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
                        <TrendingUp size={16} />
                        <span>Outils Professionnels</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6">
                        Des outils pour <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-quaternary to-brand-quinary">tous les artistes</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-4xl mx-auto mb-12">
                        En plus de distribuer votre musique, Vibrato vous accompagne avec une suite complète d'outils et des technologies innovantes, pour vous permettre de préparer et d'optimiser toutes vos sorties musicales !
                    </p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative mb-16">
                    {/* Navigation Arrows */}
                    <button 
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-dark-surface/80 backdrop-blur-xl rounded-full flex items-center justify-center text-text-primary hover:bg-brand-primary hover:text-white transition-all duration-300 border border-white/10 hover:border-brand-primary/50 shadow-lg hover:shadow-brand-primary/20"
                        aria-label="Slide précédent"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    
                    <button 
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-dark-surface/80 backdrop-blur-xl rounded-full flex items-center justify-center text-text-primary hover:bg-brand-primary hover:text-white transition-all duration-300 border border-white/10 hover:border-brand-primary/50 shadow-lg hover:shadow-brand-primary/20"
                        aria-label="Slide suivant"
                    >
                        <ArrowRight size={20} />
                    </button>

                    {/* Carousel Content */}
                    <div className="overflow-hidden rounded-2xl">
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={currentIndex}
                                initial={{ opacity: 0, x: 300 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -300 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.2}
                                onDragEnd={(event, info) => {
                                    const swipeThreshold = 50;
                                    if (info.offset.x > swipeThreshold) {
                                        prevSlide();
                                    } else if (info.offset.x < -swipeThreshold) {
                                        nextSlide();
                                    }
                                }}
                                className="flex gap-8 cursor-grab active:cursor-grabbing"
                            >
                                {visibleTools.map((tool, index) => (
                                    <motion.div
                                        key={`${currentIndex}-${index}`}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`flex-1 min-w-0 group relative`}
                                    >
                                        <div className="h-full bg-dark-surface/40 backdrop-blur-xl rounded-2xl p-8 border border-white/5 hover:border-brand-primary/20 transition-all duration-500 hover:shadow-pro hover:-translate-y-2 relative overflow-hidden">
                                            {/* Background gradient */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                            
                                            {/* Content */}
                                            <div className="relative z-10">
                                                {/* Icon */}
                                                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${tool.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                                    <div className="text-text-primary">
                                                        {tool.icon}
                                                    </div>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-primary group-hover:to-brand-quaternary transition-all duration-500">
                                                    {tool.title}
                                                </h3>
                                                
                                                {/* Description */}
                                                <p className="text-text-secondary mb-6 leading-relaxed">
                                                    {tool.description}
                                                </p>

                                                {/* Arrow */}
                                                <div className="flex items-center space-x-2 text-brand-primary group-hover:text-brand-quaternary transition-colors duration-500">
                                                    <span className="text-sm font-medium uppercase tracking-wider">Découvrir</span>
                                                    <div className="w-8 h-8 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center group-hover:bg-brand-quaternary/10 group-hover:border-brand-quaternary/30 transition-all duration-500">
                                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Slide Indicators */}
                    <div className="flex justify-center space-x-3 mt-8">
                        {Array.from({ length: totalSlides }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentIndex 
                                        ? 'bg-brand-quaternary scale-125 shadow-lg shadow-brand-quaternary/30' 
                                        : 'bg-text-secondary/50 hover:bg-text-secondary'
                                }`}
                                aria-label={`Aller au slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center space-x-6 px-8 py-4 bg-gradient-to-r from-brand-primary via-brand-quaternary to-brand-quinary rounded-2xl shadow-2xl shadow-brand-primary/20">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                            <Zap size={24} className="text-white" />
                        </div>
                        <div className="text-left">
                            <p className="text-white font-bold text-lg">Accédez à tous les outils</p>
                            <p className="text-white/80 text-sm">Optimisez votre carrière musicale</p>
                        </div>
                        <button className="ml-4 px-6 py-3 bg-white text-brand-primary font-bold rounded-xl hover:bg-white/90 transition-colors">
                            Commencer
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedArtists;
