import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Play, Globe } from 'lucide-react';

const Stats = () => {
    return (
        <section className="py-40 bg-white relative z-10 border-y border-slate-50 uppercase">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-20">
                    <StatItem icon={<Users className="text-neon-pink" size={40} />} label="Artistes" value="1,200+" />
                    <StatItem icon={<Play className="text-neon-cyan" size={40} />} label="Streams" value="5M+" />
                    <StatItem icon={<Globe className="text-neon-purple" size={40} />} label="Pays" value="150+" />
                </div>
            </div>
        </section>
    );
};

const StatItem = ({ icon, label, value }) => {
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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-8 group"
        >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-slate-50 rounded-[2rem] mb-4 transition-all duration-500 group-hover:bg-slate-900 group-hover:text-white">
                {icon}
            </div>
            <div className="space-y-2">
                <p className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 uppercase tabular-nums">
                    {count.toLocaleString()}{value.includes('+') ? '+' : ''}{value.includes('M') ? 'M' : ''}
                </p>
                <p className="text-slate-400 uppercase tracking-[0.4em] text-[10px] font-black italic">{label}</p>
            </div>
        </motion.div>
    );
};

export default Stats;
