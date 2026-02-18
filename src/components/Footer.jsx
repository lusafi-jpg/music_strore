import React from 'react';
import { Music, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white pt-24 pb-12 border-t border-gray-100 uppercase">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-20 text-center md:text-left">
                    <div className="space-y-6">
                        <div className="flex items-center justify-center md:justify-start space-x-2">
                            <div className="p-2 bg-neon-pink rounded-lg shadow-neon-pink">
                                <Music className="text-white w-6 h-6" />
                            </div>
                            <span className="text-2xl font-black italic tracking-tighter text-gray-900">LUSAFI</span>
                        </div>
                        <p className="text-gray-500 text-xs font-bold tracking-widest leading-relaxed">
                            La plateforme de référence pour les artistes de Kinshasa.
                            Donnez à votre musique les ailes qu'elle mérite.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <SocialIcon icon={<Instagram size={20} />} />
                            <SocialIcon icon={<Twitter size={20} />} />
                            <SocialIcon icon={<Youtube size={20} />} />
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-black mb-8 tracking-[0.2em] text-gray-900 italic">Navigation</h4>
                        <ul className="space-y-4 text-xs font-bold tracking-widest">
                            <li><Link to="/" className="text-gray-500 hover:text-neon-pink transition-colors no-underline">Accueil</Link></li>
                            <li><a href="#services" className="text-gray-500 hover:text-neon-pink transition-colors no-underline">Services</a></li>
                            <li><Link to="/start" className="text-gray-500 hover:text-neon-pink transition-colors no-underline">Démarrer</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-black mb-8 tracking-[0.2em] text-gray-900 italic">Services</h4>
                        <ul className="space-y-4 text-xs font-bold tracking-widest">
                            <li><Link to="/service/distribution-single" className="text-gray-500 hover:text-neon-pink transition-colors no-underline">Singles</Link></li>
                            <li><Link to="/service/distribution-ep" className="text-gray-500 hover:text-neon-pink transition-colors no-underline">Eps & Albums</Link></li>
                            <li><Link to="/service/cover-art" className="text-gray-500 hover:text-neon-pink transition-colors no-underline">Design Pro</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-black mb-8 tracking-[0.2em] text-gray-900 italic">Contact</h4>
                        <ul className="space-y-4 text-xs font-bold tracking-widest">
                            <li className="text-gray-500">Kinshasa, RDC</li>
                            <li className="text-gray-500">+243 854 066 780</li>
                            <li className="text-gray-500">contact@lusafi.com</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[10px] font-black tracking-[0.3em] text-gray-400">
                    <p>© 2026 LUSAFI MUSIC STORE. TOUS DROITS RÉSERVÉS.</p>
                    <div className="flex items-center space-x-2">
                        <span>FAIT À KINSHASA AVEC</span>
                        <span className="text-neon-pink text-xl">♥</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialIcon = ({ icon }) => (
    <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-neon-pink hover:text-white transition-all">
        {icon}
    </a>
);

export default Footer;
