import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Play, Globe, TrendingUp } from 'lucide-react';

const Stats = () => {
    const stats = [
        { icon: Users, label: "Artistes", value: "1,200+", color: "brand-primary" },
        { icon: Play, label: "Streams", value: "5M+", color: "accent" },
        { icon: Globe, label: "Pays", value: "150+", color: "text-secondary" }
    ];

    return (
        <section className="py-32 bg-gradient-to-br from-[#1c1e1f]/50 to-[#000] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-primary/5 blur-3xl rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 blur-3xl rounded-full"></div>
            </div>
            
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-text-primary mb-4">
                        Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-accent">Résultats</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Des chiffres qui parlent d'eux-mêmes. La confiance de milliers d'artistes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <StatItem 
                            key={index}
                            icon={<stat.icon size={28} />}
                            label={stat.label}
                            value={stat.value}
                            color={stat.color}
                            delay={index * 0.1}
                        />
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex items-center space-x-3 px-6 py-3 bg-brand-primary/10 border border-brand-primary/20 rounded-full">
                        <TrendingUp size={20} className="text-brand-primary" />
                        <span className="text-text-primary font-semibold">+45% de croissance cette année</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const StatItem = ({ icon, label, value, color, delay }) => {
    const [count, setCount] = useState(0);
    const targetValue = parseInt(value.replace(/\D/g, ''));

    useEffect(() => {
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
    }, [targetValue]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="group"
        >
            <div className="relative">
                {/* Card */}
                <div className="card-pro text-center p-8 md:p-10 border border-white/5 hover:border-brand-primary/20 transition-all duration-500">
                    {/* Icon container */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-${color}/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                        <div className={`text-${color}`}>
                            {icon}
                        </div>
                    </div>

                    {/* Value */}
                    <div className="mb-4">
                        <p className="text-5xl md:text-6xl font-bold text-text-primary tabular-nums">
                            {count.toLocaleString()}{value.includes('+') ? '+' : ''}{value.includes('M') ? 'M' : ''}
                        </p>
                    </div>

                    {/* Label */}
                    <p className="text-text-secondary text-sm font-medium uppercase tracking-wider">
                        {label}
                    </p>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
            </div>
        </motion.div>
    );
};

export default Stats;
