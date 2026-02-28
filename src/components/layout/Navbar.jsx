import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { DESIGN_SYSTEM } from '../../config/design-system';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? 'top-2' : 'top-0'} px-4 sm:px-6`}>
            <div className={`max-w-7xl mx-auto transition-all duration-300 px-4 sm:px-6 ${isScrolled ? 'py-2 glass-pro rounded-2xl' : 'py-3 bg-transparent'}`}>
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group cursor-pointer no-underline">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center justify-center"
                        >
                            <img
                                src="/img/logo-vibrato.png"
                                alt="Vibrato Logo"
                                className="h-8 sm:h-10 w-auto object-contain"
                            />
                        </motion.div>
                        <span className="text-lg sm:text-xl font-black tracking-tight text-white hidden sm:block">Vibrato</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <nav className="flex items-center space-x-6">
                            <NavLink to="/" label="Accueil" />
                            <NavLink to="/#service" label="Services" />
                            <NavLink to="/#faq" label="FAQ" />
                        </nav>

                        <Link to="/start" className="no-underline">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white text-dark-bg px-6 py-2.5 rounded-xl font-bold text-xs tracking-wide uppercase transition-all shadow-md hover:shadow-white/20"
                            >
                                Démarrer
                            </motion.button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="mt-4 pb-4 space-y-4">
                                <div className="flex flex-col space-y-3">
                                    <MobileNavLink to="/" label="Accueil" onClick={() => setIsOpen(false)} />
                                    <MobileNavLink to="/#service" label="Services" onClick={() => setIsOpen(false)} />
                                    <MobileNavLink to="/#faq" label="FAQ" onClick={() => setIsOpen(false)} />
                                </div>
                                <Link to="/start" className="no-underline block" onClick={() => setIsOpen(false)}>
                                    <button className="w-full py-3 rounded-xl bg-white text-dark-bg font-bold text-sm uppercase tracking-wide shadow-md hover:shadow-white/20 transition-all">
                                        Démarrer l'expérience
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

const NavLink = ({ to, label }) => (
    <Link to={to} className="hover:text-white transition-colors font-medium uppercase text-sm tracking-wide no-underline text-slate-300 hover:text-white">
        {label}
    </Link>
);

const MobileNavLink = ({ to, label, onClick }) => (
    <Link to={to} className="text-lg font-bold tracking-normal text-white no-underline py-2 block hover:text-neon-pink transition-colors" onClick={onClick}>
        {label}
    </Link>
);

export default Navbar;
