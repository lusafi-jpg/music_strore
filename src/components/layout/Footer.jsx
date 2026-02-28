import React from 'react';
import { Music, Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark-bg pt-24 pb-12 border-t border-white/5 uppercase">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 sm:mb-20 text-center sm:text-left">
                    <div className="space-y-6">
                        <div className="flex items-center justify-center sm:justify-start space-x-2">
                            <div className="p-2 bg-neon-pink rounded-lg shadow-lg shadow-neon-pink/20">
                                <Music className="text-white w-6 h-6" />
                            </div>
                            <span className="text-2xl font-black italic tracking-tighter text-white">Vibrato</span>
                        </div>
                        <p className="text-slate-500 text-xs font-bold tracking-widest leading-relaxed max-w-xs mx-auto sm:mx-0">
                            La plateforme de référence pour les artistes de Kinshasa.
                            Donnez à votre musique les ailes qu'elle mérite.
                        </p>
                        <div className="flex justify-center sm:justify-start space-x-4">
                            <SocialIcon icon={<Instagram size={30} />} href="https://www.instagram.com/musik_store_distribution?utm_source=qr&igsh=MWFmdmhvbWsweHVpZg==" />
                            <SocialIcon icon={<Twitter size={30} />} href="https://x.com/Musik_Store_" />
                            <SocialIcon icon={<Facebook size={30} />} href="https://www.facebook.com/profile.php?id=61588514274787" />
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-black mb-6 sm:mb-8 tracking-[0.2em] text-white italic">Navigation</h4>
                        <ul className="space-y-4 text-xs font-bold tracking-widest">
                            <li><Link to="/" className="text-slate-400 hover:text-neon-pink transition-colors no-underline uppercase">Accueil</Link></li>
                            <li><a href="#services" className="text-slate-400 hover:text-neon-pink transition-colors no-underline uppercase">Services</a></li>
                            <li><Link to="/start" className="text-slate-400 hover:text-neon-pink transition-colors no-underline uppercase">Démarrer</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-black mb-6 sm:mb-8 tracking-[0.2em] text-white italic">Services</h4>
                        <ul className="space-y-4 text-xs font-bold tracking-widest">
                            <li><Link to="/service/distribution-single" className="text-slate-400 hover:text-neon-pink transition-colors no-underline uppercase">Singles</Link></li>
                            <li><Link to="/service/distribution-ep" className="text-slate-400 hover:text-neon-pink transition-colors no-underline uppercase">Eps & Albums</Link></li>
                            <li><Link to="/service/cover-art" className="text-slate-400 hover:text-neon-pink transition-colors no-underline uppercase">Design Pro</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-black mb-6 sm:mb-8 tracking-[0.2em] text-white italic">Contact</h4>
                        <ul className="space-y-4 text-xs font-bold tracking-widest">
                            <li className="text-slate-400">Kinshasa, RDC</li>
                            <li className="text-slate-400">+243 854 066 780</li>
                            <li className="text-slate-400">contact@vibrato.com</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[10px] font-black tracking-[0.3em] text-slate-500">
                    <p>© 2026 Vibrato. TOUS DROITS RÉSERVÉS.</p>
                    <div className="flex items-center space-x-2">
                        <span>FAIT À KINSHASA AVEC</span>
                        <span className="text-neon-pink text-xl">♥</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialIcon = ({ icon, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-neon-pink hover:text-white transition-all border border-white/5">
        {icon}
    </a>
);

export default Footer;
