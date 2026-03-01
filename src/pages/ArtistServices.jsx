import React from 'react';
import { motion } from 'framer-motion';
import {
    Play, Users, Music, Video, Palette, Mic, Radio,
    Youtube, Instagram, Facebook, MonitorSpeaker, Trophy,
    ArrowRight, CheckCircle2, Star, Sparkles, Zap, Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ArtistServices = () => {
    const services = [
        {
            id: 'distribution',
            title: 'Distribution Musicale',
            subtitle: 'Distribution mondiale + monétisation',
            description: 'Suivez vos sorties en temps réel et recevez des rapports détaillés sur vos performances.',
            icon: <Globe size={24} />,
            features: [
                'Distribution sur 150+ plateformes',
                'Monétisation automatique',
                'Badges artiste vérifié',
                'Rapports de performance',
                'Support technique 24/7'
            ],
            color: 'from-brand-primary to-brand-secondary',
            link: '/pricing'
        },
        {
            id: 'splits',
            title: 'Vibrato Splits',
            subtitle: 'Collaboration simplifiée',
            description: 'Répartissez automatiquement les revenus entre tous vos collaborateurs musicaux.',
            icon: <Users size={24} />,
            features: [
                'Répartition automatique des royalties',
                'Gestion des droits d\'auteur',
                'Transparence totale',
                'Paiements sécurisés',
                'Contrats légaux inclus'
            ],
            color: 'from-brand-quaternary to-brand-tertiary',
            link: '/pricing'
        },
        {
            id: 'studio',
            title: 'Studio d\'Enregistrement',
            subtitle: 'Production professionnelle',
            description: 'Enregistrez votre musique dans notre studio équipé des dernières technologies.',
            icon: <Mic size={24} />,
            features: [
                'Équipement professionnel',
                'Ingénieurs son expérimentés',
                'Mixage et mastering',
                'Sessions personnalisées',
                'Ambiance africaine unique'
            ],
            color: 'from-green-500 to-green-600',
            link: '/pricing'
        },
        {
            id: 'clips',
            title: 'Production de Clips',
            subtitle: 'Cinéma musical africain',
            description: 'Transformez votre musique en œuvres visuelles captivantes avec notre équipe de cinéastes.',
            icon: <Video size={24} />,
            features: [
                'Caméras 4K professionnelles',
                'Drones et éclairage cinéma',
                'Montage et post-production',
                'Diffusion multi-plateformes',
                'Style afrobeat authentique'
            ],
            color: 'from-purple-500 to-pink-500',
            link: '/pricing'
        },
        {
            id: 'covers',
            title: 'Design de Pochettes',
            subtitle: 'Identité visuelle unique',
            description: 'Créez des pochettes d\'album qui capturent l\'essence de votre musique africaine.',
            icon: <Palette size={24} />,
            features: [
                'Designs personnalisés',
                'Charte graphique cohérente',
                'Formats adaptés à toutes les plateformes',
                'Révisions illimitées',
                'Droits d\'usage inclus'
            ],
            color: 'from-yellow-500 to-orange-500',
            link: '/pricing'
        },
        {
            id: 'promotion',
            title: 'Promotion Musicale',
            subtitle: 'Visibilité maximale',
            description: 'Augmentez votre audience avec nos stratégies de promotion ciblées.',
            icon: <Radio size={24} />,
            features: [
                'Campagnes publicitaires',
                'Diffusion radio',
                'Playlists Spotify/Deezer',
                'Partenariats médias',
                'Analytics détaillés'
            ],
            color: 'from-red-500 to-pink-500',
            link: '/pricing'
        },
        {
            id: 'events',
            title: 'Organisation d\'Événements',
            subtitle: 'Concerts et showcases',
            description: 'Organisez des événements mémorables qui marquent votre carrière musicale.',
            icon: <Trophy size={24} />,
            features: [
                'Production complète',
                'Booking d\'artistes',
                'Promotion et communication',
                'Logistique technique',
                'Billetterie intégrée'
            ],
            color: 'from-indigo-500 to-blue-500',
            link: '/pricing'
        },
        {
            id: 'podcasts',
            title: 'Podcasts & Interviews',
            subtitle: 'Contenu exclusif',
            description: 'Partagez votre histoire et votre musique à travers des formats audio engageants.',
            icon: <MonitorSpeaker size={24} />,
            features: [
                'Interviews exclusives',
                'Sessions acoustiques',
                'Behind the scenes',
                'Diffusion sur plateformes',
                'Archives complètes'
            ],
            color: 'from-teal-500 to-cyan-500',
            link: '/pricing'
        }
    ];

    const platforms = [
        { name: 'Spotify', icon: '🎵', color: 'text-green-400' },
        { name: 'Apple Music', icon: '🍎', color: 'text-gray-300' },
        { name: 'YouTube Music', icon: '📺', color: 'text-red-400' },
        { name: 'Deezer', icon: '🎧', color: 'text-orange-400' },
        { name: 'TikTok', icon: '🎬', color: 'text-pink-400' },
        { name: 'Instagram', icon: '📸', color: 'text-purple-400' },
        { name: 'Facebook', icon: '👥', color: 'text-blue-400' },
        { name: 'SoundCloud', icon: '☁️', color: 'text-orange-500' }
    ];

    return (
        <div className="min-h-screen bg-dark-bg">
            {/* Hero Section */}
            <section className="py-24 sm:py-32 bg-gradient-to-br from-dark-bg via-dark-surface/30 to-dark-bg relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-quaternary/10 blur-[120px] rounded-full"></div>
                </div>

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white text-xs font-black uppercase tracking-[0.2em] mb-6">
                            <Sparkles size={14} className="text-brand-quinary" />
                            <span>Services Complets</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-text-primary tracking-tighter uppercase mb-6">
                            Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-quinary via-brand-primary to-brand-secondary italic">Artistes</span>
                        </h1>

                        <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-medium mb-8">
                            Peu importe où vous en êtes dans votre carrière musicale, nous avons les outils nécessaires pour mieux connecter avec de nouveaux auditeurs et vos fans existants.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/pricing" className="no-underline">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-gradient-to-r from-brand-primary via-brand-quinary to-brand-secondary text-white font-black uppercase tracking-widest text-sm flex items-center justify-center space-x-3 rounded-xl shadow-2xl shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-shadow"
                                >
                                    <Zap size={18} />
                                    <span>Découvrir les Tarifs</span>
                                    <ArrowRight size={18} />
                                </motion.button>
                            </Link>

                            <Link to="/start" className="no-underline">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white/10 border border-white/20 text-white font-black uppercase tracking-widest text-sm hover:bg-white/20 transition-colors rounded-xl"
                                >
                                    Commencer Maintenant
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-dark-surface/20">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6">
                            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-accent">Services</span>
                        </h2>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                            Découvrez tous les outils et services Vibrato pour développer votre carrière musicale africaine.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <Link to={service.link} className="block">
                                    <div className="bg-dark-surface/40 backdrop-blur-xl rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-all duration-300 h-full hover:scale-105">
                                        {/* Icon */}
                                        <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${service.color} text-white rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
                                            {service.icon}
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-xl font-black text-white mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-brand-quinary font-semibold uppercase tracking-wide mb-3">
                                            {service.subtitle}
                                        </p>
                                        <p className="text-text-secondary text-sm leading-relaxed mb-6">
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <ul className="space-y-2 mb-6">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start space-x-2">
                                                    <CheckCircle2 size={14} className="text-brand-quaternary mt-0.5 flex-shrink-0" />
                                                    <span className="text-text-secondary text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA */}
                                        <div className={`w-full py-3 bg-gradient-to-r ${service.color} text-white font-black uppercase tracking-widest text-xs flex items-center justify-center space-x-2 rounded-xl group-hover:shadow-lg transition-shadow`}>
                                            <span>En Savoir Plus</span>
                                            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platforms Section */}
            <section className="py-24 bg-gradient-to-br from-dark-bg to-dark-surface/30">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6">
                            Distribution sur <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-accent">150+ Plateformes</span>
                        </h2>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                            Votre musique disponible partout dans le monde, sur toutes les plateformes majeures.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6"
                    >
                        {platforms.map((platform, index) => (
                            <motion.div
                                key={platform.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center justify-center p-4 bg-dark-surface/40 backdrop-blur-sm rounded-xl border border-white/5 hover:border-white/20 transition-colors"
                            >
                                <div className="text-2xl mb-2">{platform.icon}</div>
                                <span className="text-xs text-text-secondary font-medium">{platform.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-t from-dark-bg to-dark-surface/20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter uppercase mb-6">
                            Prêt à <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-quinary via-brand-primary to-brand-secondary italic">Lancer</span> Votre Carrière ?
                        </h2>
                        <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-medium mb-8">
                            Rejoignez des milliers d'artistes africains qui ont choisi Vibrato pour développer leur musique.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link to="/pricing" className="no-underline">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-brand-primary via-brand-quinary to-brand-secondary text-white font-black uppercase tracking-widest text-sm flex items-center justify-center space-x-3 rounded-xl shadow-2xl shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-shadow"
                            >
                                <Star size={18} />
                                <span>Voir les Tarifs</span>
                                <ArrowRight size={18} />
                            </motion.button>
                        </Link>

                        <Link to="/start" className="no-underline">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white/10 border border-white/20 text-white font-black uppercase tracking-widest text-sm hover:bg-white/20 transition-colors rounded-xl"
                            >
                                Commencer Gratuitement
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ArtistServices;
