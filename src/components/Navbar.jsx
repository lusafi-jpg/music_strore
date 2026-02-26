import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, Music, ArrowRight } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-[100] transition-all duration-500 px-4 sm:px-6 ${isScrolled ? 'top-4' : 'top-0'}`}>
            <div className={`max-w-7xl mx-auto transition-all duration-500 px-4 sm:px-8 py-4 flex justify-between items-center ${isScrolled ? 'glass-pro rounded-[2rem]' : 'bg-transparent'}`}>
                <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer no-underline text-white">
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 1 }}
                        className="p-2 bg-white rounded-xl sm:rounded-2xl shadow-lg shadow-white/5"
                    >
                        <Music className="text-dark-bg w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.div>
                    <span className="text-2xl sm:text-3xl font-black tracking-tighter italic">Vibrato</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-12">
                    <nav className="flex items-center space-x-10">
                        <NavLink to="/" label="Accueil" />
                        <a href="#services" className="hover:text-brand-primary transition-colors font-black uppercase text-[10px] tracking-[0.3em] no-underline text-slate-400">Services</a>
                        <a href="#faq" className="hover:text-brand-primary transition-colors font-black uppercase text-[10px] tracking-[0.3em] no-underline text-slate-400">Faq</a>
                    </nav>

                    <Link to="/start" className="no-underline">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-dark-bg px-8 py-3.5 rounded-2xl font-black text-[10px] tracking-[0.2em] uppercase transition-all shadow-lg hover:shadow-white/10"
                        >
                            Démarrer
                        </motion.button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white border-none p-0 bg-transparent cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-24 left-6 right-6 bg-dark-bg/90 backdrop-blur-xl rounded-[3rem] p-10 space-y-10 shadow-2xl z-50 overflow-hidden border border-white/10"
                    >
                        <div className="flex flex-col space-y-8 uppercase">
                            <MobileNavLink to="/" label="Accueil" onClick={() => setIsOpen(false)} />
                            <a href="#services" className="text-4xl font-black tracking-tighter text-white no-underline" onClick={() => setIsOpen(false)}>Services</a>
                            <a href="#faq" className="text-4xl font-black tracking-tighter text-white no-underline" onClick={() => setIsOpen(false)}>Faq</a>
                        </div>
                        <Link to="/start" className="no-underline" onClick={() => setIsOpen(false)}>
                            <button className="w-full py-6 rounded-3xl bg-neon-pink text-white font-black text-xl uppercase tracking-widest shadow-xl shadow-neon-pink/20">
                                Démarrer l'expérience
                            </button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const NavLink = ({ to, label }) => (
    <Link to={to} className="hover:text-neon-pink transition-colors font-black uppercase text-[10px] tracking-[0.3em] no-underline text-slate-400">
        {label}
    </Link>
);

const MobileNavLink = ({ to, label, onClick }) => (
    <Link to={to} className="text-4xl font-black tracking-tighter text-white no-underline" onClick={onClick}>
        {label}
    </Link>
);

export default Navbar;
