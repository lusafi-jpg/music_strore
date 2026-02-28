import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Film, Music, Calendar, Radio, Users, Scissors, Camera, Zap, TrendingUp, ArrowRight, ArrowLeft } from 'lucide-react';

const FeaturedArtists = () => {
    const tools = [
        {
            title: "Studio d'Enregistrement",
            description: "Des cabines insonorisées professionnelles et du matériel de pointe pour vos sessions.",
            icon: <Mic size={24} />,
            image: "/img/Un micro professionnel pour le Studio d'Enregistrement.jpg",
            gradient: "from-brand-primary to-brand-secondary",
            delay: 0
        },
        {
            title: "Mixage & Mastering",
            description: "Ingénieurs du son experts pour finaliser vos morceaux avec une qualité radio.",
            icon: <Music size={24} />,
            image: "/img/Une console de mixage pour le Mixage & Mastering.jpg",
            gradient: "from-brand-secondary to-brand-tertiary",
            delay: 0.1
        },
        {
            title: "Réalisation de Clips",
            description: "Caméras 4K, drones, éclairage cinéma et réalisateurs visionnaires pour vos clips musicaux.",
            icon: <Camera size={24} />,
            image: "/img/Une caméra cinéma pour la Réalisation de Clip.jpg",
            gradient: "from-brand-tertiary to-brand-quaternary",
            delay: 0.2
        },
        {
            title: "Montage & Post-prod",
            description: "Étalonnage couleur, effets spéciaux et montage dynamique pour un rendu époustouflant.",
            icon: <Scissors size={24} />,
            image: "/img/mont.jpg",
            gradient: "from-brand-quaternary to-brand-quinary",
            delay: 0.3
        },
        {
            title: "Podcasts & Interviews",
            description: "Plateaux équipés pour enregistrer vos émissions, interviews ou podcasts en haute qualité.",
            icon: <Radio size={24} />,
            image: "/img/montage.jpg",
            gradient: "from-brand-quinary to-brand-primary",
            delay: 0.4
        },
        {
            title: "Documentaires",
            description: "Captation de votre processus créatif ou de votre tournée pour des documentaires immersifs.",
            icon: <Film size={24} />,
            image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
            gradient: "from-brand-primary to-brand-quaternary",
            delay: 0.5
        },
        {
            title: "Concerts & Lives",
            description: "Organisation, sonorisation et captation vidéo multi-caméras de vos performances live.",
            icon: <Users size={24} />,
            image: "/img/Une scène de concert avec des lumières pour Concerts & Live.jpg",
            gradient: "from-brand-secondary to-brand-quinary",
            delay: 0.6
        },
        {
            title: "Événementiel",
            description: "Release parties, showcases et divers événements sur mesure pour promouvoir vos projets.",
            icon: <Calendar size={24} />,
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
            gradient: "from-brand-tertiary to-brand-primary",
            delay: 0.7
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying] = useState(true);
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
                        <span>Le Complexe Vibrato 360°</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6">
                        Des infrastructures pour <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-quaternary to-brand-quinary">concrétiser vos visions</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-4xl mx-auto mb-12">
                        Bien plus qu'un simple label ou distributeur, Vibrato centralise tous les besoins des créateurs: studios d'enregistrement, tournages vidéo, espaces de podcasts ou d'événements. Venez créer chez nous!
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
                                        <div className="h-full bg-dark-surface/40 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-brand-primary/20 transition-all duration-500 hover:shadow-pro hover:-translate-y-2 relative overflow-hidden flex flex-col min-h-[420px]">
                                            {/* Background Image Layer */}
                                            <div className="absolute inset-0 z-0">
                                                <img
                                                    src={tool.image}
                                                    alt={tool.title}
                                                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/60 to-transparent"></div>
                                                <div className="absolute inset-0 bg-dark-bg/30 group-hover:bg-dark-bg/10 transition-colors duration-500"></div>
                                            </div>

                                            {/* Accent Background gradient */}
                                            <div className={`absolute inset-0 z-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay`}></div>

                                            {/* Content */}
                                            <div className="relative z-10 p-8 flex flex-col h-full flex-grow">


                                                {/* Title */}
                                                <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-primary group-hover:to-brand-quaternary transition-all duration-500">
                                                    {tool.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="text-text-secondary mb-6 leading-relaxed flex-grow text-sm drop-shadow-md">
                                                    {tool.description}
                                                </p>

                                                {/* Arrow */}
                                                <div className="flex items-center space-x-2 text-brand-primary group-hover:text-brand-quaternary transition-colors duration-500">
                                                    <span className="text-sm font-medium uppercase tracking-wider">Découvrir</span>
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
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
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

                        <div className="text-left">
                            <p className="text-white font-bold text-lg">Réservez vos sessions dès maintenant</p>
                            <p className="text-white/80 text-sm">Tournage, enregistrement, événementiel...</p>
                        </div>
                        <a
                            href="https://wa.me/243800000000?text=Bonjour%20Vibrato,%20je%20souhaite%20r%C3%A9server%20une%20session%20!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 px-6 py-3 bg-white text-brand-primary font-bold rounded-xl hover:bg-white/90 transition-colors no-underline block"
                        >
                            Réserver
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedArtists;
