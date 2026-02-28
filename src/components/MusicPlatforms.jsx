import React from 'react';
import { motion } from 'framer-motion';

const platforms = [
    {
        name: 'Spotify',
        logo: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 md:h-8 w-auto">
                <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.508 17.304c-.216.348-.672.456-1.02.24-2.856-1.74-6.456-2.124-10.68-1.152-.396.096-.792-.156-.888-.552-.096-.396.156-.792.552-.888 4.632-1.056 8.604-.624 11.808 1.32.336.216.444.672.228 1.032zm1.464-3.264c-.276.444-.864.588-1.308.312-3.264-2.004-8.244-2.592-12.108-1.416-.504.156-1.032-.144-1.188-.648-.156-.504.144-1.032.648-1.188 4.392-1.332 9.912-.66 13.632 1.632.444.276.588.864.324 1.308zm.132-3.396c-3.912-2.328-10.38-2.544-14.136-1.404-.6.18-1.248-.156-1.428-.756-.18-.6.156-1.248.756-1.428 4.32-1.308 11.448-1.044 15.96 1.632.54.324.72 1.02.396 1.56-.324.54-1.02.72-1.548.396z" />
            </svg>
        )
    },
    {
        name: 'Apple Music',
        logo: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 md:h-8 w-auto">
                <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM7.5 16.5v-9L17 12l-9.5 4.5z" />
            </svg>
        )
    },
    {
        name: 'YouTube',
        logo: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 md:h-8 w-auto">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
        )
    },
    {
        name: 'Amazon Music',
        logo: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 md:h-8 w-auto">
                <path d="M15.932 17.564c-2.408 0-4.103-1.341-4.103-3.414 0-2.071 1.695-3.414 4.103-3.414 2.408 0 4.103 1.343 4.103 3.414 0 2.073-1.695 3.414-4.103 3.414zm0-5.83c-1.6 0-2.731.895-2.731 2.416 0 1.521 1.131 2.416 2.731 2.416 1.6 0 2.731-.895 2.731-2.416 0-1.521-1.131-2.416-2.731-2.416zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm7.143 14.15c0 2.508-1.93 4.336-4.343 4.336-2.414 0-4.343-1.828-4.343-4.336 0-2.508 1.93-4.336 4.343-4.336 2.414 0 4.343 1.828 4.343 4.336zm4.857-2.15c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12z" />
            </svg>
        )
    },
    {
        name: 'Tidal',
        logo: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 md:h-8 w-auto">
                <path d="M12.012 7.212l-4.806 4.806 4.806 4.806 4.806-4.806-4.806-4.806zm0-7.212l4.806 4.806-4.806 4.806-4.806-4.806 4.806-4.806zm7.212 7.212l4.806 4.806-4.806 4.806-4.806-4.806 4.806-4.806zm-14.424 0l4.806 4.806-4.806 4.806-4.806-4.806 4.806-4.806z" />
            </svg>
        )
    },
    {
        name: 'Beatport',
        logo: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 md:h-8 w-auto">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.1 16.5l-5.1-4.2v4.2c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2v4.2l5.1-4.2v8.4z" />
            </svg>
        )
    },
    {
        name: 'TikTok',
        logo: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 md:h-8 w-auto">
                <path d="M12.525.02c1.31 0 2.59.3 3.73.86.13.06.2.22.16.36-.1.35-.15.7-.15 1.05 0 1.25.5 2.45 1.35 3.3.85.85 2.05 1.35 3.3 1.35.35 0 .7-.05 1.05-.15.14-.04.3.03.36.16.51 1.21.78 2.51.78 3.84 0 5.52-4.48 10-10 10S3.105 16.45 3.105 10.93s4.48-10 10-10c.16-.01-.58-.91-.58-.91z" />
            </svg>
        )
    },
    {
        name: 'Instagram',
        logo: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 md:h-8 w-auto">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        )
    },
    {
        name: 'Facebook',
        logo: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 md:h-8 w-auto">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        )
    },
    {
        name: 'SoundCloud',
        logo: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 md:h-8 w-auto">
                <path d="M12 18.333c-.183 0-.333-.15-.333-.333v-12c0-.183.15-.333.333-.333s.333.15.333.333v12c0 .183-.15.333-.333.333zm-4-1.333c-.183 0-.333-.15-.333-.333v-9.333c0-.183.15-.333.333-.333s.333.15.333.333v9.333c0 .183-.15.333-.333.333zm-4-2.667c-.183 0-.333-.15-.333-.333v-4c0-.183.15-.333.333-.333s.333.15.333.333v4c0 .183-.15.333-.333.333zm12-1.333c-.183 0-.333-.15-.333-.333v-14.667c0-.183.15-.333.333-.333s.333.15.333.333v14.667c0 .183-.15.333-.333.333zm4-2.667c-.183 0-.333-.15-.333-.333v-9.333c0-.183.15-.333.333-.333s.333.15.333.333v9.333c0 .183-.15.333-.333.333zm4-1.334c-.183 0-.333-.15-.333-.333v-4c0-.183.15-.333.333-.333s.333.15.333.333v4c0 .183-.15.333-.333.333z" />
            </svg>
        )
    },
    {
        name: 'Deezer',
        logo: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 md:h-8 w-auto">
                <path d="M2.4 12h2.4v2.4H2.4zM2.4 15.6h2.4V18H2.4zM6 12h2.4v2.4H6zM6 15.6h2.4V18H6zM6 8.4h2.4v2.4H6zM9.6 12h2.4v2.4H9.6zM9.6 15.6h2.4V18H9.6zM9.6 8.4h2.4v2.4H9.6zM9.6 4.8h2.4v2.4H9.6zM13.2 12h2.4v2.4h-2.4zM13.2 15.6h2.4V18h-2.4zM13.2 8.4h2.4v2.4h-2.4zM13.2 4.8h2.4v2.4h-2.4zM13.2 1.2h2.4v2.4h-2.4zM16.8 12h2.4v2.4h-2.4zM16.8 15.6h2.4V18h-2.4zM16.8 8.4h2.4v2.4h-2.4zM16.8 4.8h2.4v2.4h-2.4zM20.4 12h2.4v2.4h-2.4zM20.4 15.6h2.4V18h-2.4zM20.4 8.4h2.4v2.4h-2.4z" />
            </svg>
        )
    },
    {
        name: 'Boomplay',
        logo: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 md:h-8 w-auto">
                <path d="M12 0L0 12l12 12 12-12L12 0zm0 18.5c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zM11 9l4 3-4 3V9z" />
            </svg>
        )
    },
    {
        name: 'Napster',
        logo: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 md:h-8 w-auto">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.1 16.5c-2.3 0-5.1-1.9-5.1-4.2s1.9-4.2 4.2-4.2c2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2h.9zM7.5 12c0 2.5 2 4.5 4.5 4.5h-4.5V12z" />
            </svg>
        )
    },
    {
        name: 'Anghami',
        logo: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 md:h-8 w-auto">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zM11 9l4 3-4 3V9z" />
            </svg>
        )
    },
    {
        name: 'Pandora',
        logo: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 md:h-8 w-auto">
                <path d="M1.882 0v24H8.32a.15.15 0 0 0 .15-.15V13.6h2.71c4.545 0 7.82-3.136 7.82-7.07C19 2.503 15.654 0 10.957 0H1.882z" />
            </svg>
        )
    },
    {
        name: 'iHeartRadio',
        logo: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 md:h-8 w-auto">
                <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm0 18.667a6.667 6.667 0 1 1 6.667-6.667 6.674 6.674 0 0 1-6.667 6.667zM12 8a4 4 0 1 0 4 4 4.005 4.005 0 0 0-4-4z" />
            </svg>
        )
    },
    {
        name: 'Qobuz',
        logo: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 md:h-8 w-auto">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
            </svg>
        )
    },
    {
        name: 'Twitch',
        logo: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 md:h-8 w-auto">
                <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
            </svg>
        )
    }
];

const MusicPlatforms = () => {
    return (
        <section className="py-12 bg-[#050505] border-y border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 italic">Distribution Mondiale</span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-primary italic">+150 Plateformes</span>
            </div>
            <div className="flex overflow-hidden group">
                <motion.div
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 35,
                            ease: "linear",
                        },
                    }}
                    className="flex flex-nowrap shrink-0 items-center gap-12 md:gap-24 px-12 md:px-24"
                >
                    {platforms.map((platform, index) => (
                        <div
                            key={`${platform.name}-${index}`}
                            className="flex items-center gap-3 text-white/40 hover:text-white transition-colors duration-500 whitespace-nowrap cursor-default grayscale hover:grayscale-0 opacity-50 hover:opacity-100"
                        >
                            {platform.logo}
                            <span className="text-sm md:text-lg font-black tracking-tighter uppercase italic">{platform.name}</span>
                        </div>
                    ))}
                    {/* Duplicate logos for seamless loop */}
                    {platforms.map((platform, index) => (
                        <div
                            key={`${platform.name}-duplicate-${index}`}
                            className="flex items-center gap-3 text-white/40 hover:text-white transition-colors duration-500 whitespace-nowrap cursor-default grayscale hover:grayscale-0 opacity-50 hover:opacity-100"
                        >
                            {platform.logo}
                            <span className="text-sm md:text-lg font-black tracking-tighter uppercase italic">{platform.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Side fades for premium look */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
        </section>
    );
};

export default MusicPlatforms;
