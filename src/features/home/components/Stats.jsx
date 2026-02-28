import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Play, Globe, TrendingUp } from 'lucide-react';
import { DESIGN_SYSTEM } from '../../../config/design-system';

const Stats = () => {
    const stats = [
        {
            icon: Users,
            label: "Artistes",
            value: "1,200+",
            color: "brand-primary",
            ariaLabel: "Plus de 1200 artistes utilisent Vibrato"
        },
        {
            icon: Play,
            label: "Streams",
            value: "5M+",
            color: "accent",
            ariaLabel: "Plus de 5 millions de streams générés"
        },
        {
            icon: Globe,
            label: "Pays",
            value: "150+",
            color: "text-secondary",
            ariaLabel: "Présence dans plus de 150 pays"
        }
    ];

    return (
        <section
            className="py-24 bg-gradient-to-br from-slate-900/50 to-black relative overflow-hidden"
            aria-labelledby="stats-heading"
        >
            {/* Simplified Background Effects */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary/8 blur-3xl rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/6 blur-3xl rounded-full"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 id="stats-heading" className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
                        Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-accent">Résultats</span>
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Des chiffres qui parlent d'eux-mêmes. La confiance de milliers d'artistes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <StatItem
                            key={index}
                            icon={<stat.icon size={24} />}
                            label={stat.label}
                            value={stat.value}
                            color={stat.color}
                            ariaLabel={stat.ariaLabel}
                            delay={index * 0.15}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center space-x-3 px-6 py-3 bg-brand-primary/15 border border-brand-primary/25 rounded-xl backdrop-blur-sm">
                        <TrendingUp size={18} className="text-brand-primary" aria-hidden="true" />
                        <span className="text-text-primary font-medium">+45% de croissance cette année</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const StatItem = ({ icon, label, value, color, ariaLabel, delay }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const targetValue = parseInt(value.replace(/\D/g, ''));

    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true);
            let start = 0;
            const duration = 2000;
            const increment = targetValue / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= targetValue) {
                    setCount(targetValue);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [isInView, hasAnimated, targetValue]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay, duration: 0.6 }}
            className="group"
        >
            <div className="relative">
                {/* Card */}
                <div className="card-pro text-center p-6 md:p-8 border border-white/8 hover:border-brand-primary/20 transition-all duration-300 rounded-2xl bg-dark-bg/50 backdrop-blur-sm">
                    {/* Icon container */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-${color}/15 rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300 border border-${color}/20`}>
                        <div className={`text-${color}`}>
                            {icon}
                        </div>
                    </div>

                    {/* Value */}
                    <div className="mb-4">
                        <p className="text-4xl md:text-5xl font-bold text-text-primary tabular-nums leading-none">
                            {count.toLocaleString()}{value.includes('+') ? '+' : ''}{value.includes('M') ? 'M' : ''}
                        </p>
                    </div>

                    {/* Label */}
                    <p className="text-slate-400 text-sm font-medium uppercase tracking-wide">
                        {label}
                    </p>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 to-accent/6 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Screen reader description */}
                <div className="sr-only" aria-live="polite">
                    {ariaLabel}
                </div>
            </div>
        </motion.div>
    );
};

export default Stats;
