import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/services.jsx';
import { ArrowLeft, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';

const ServiceDetail = () => {
    const { id } = useParams();
    const service = servicesData.find(s => s.id === id);

    if (!service) return (
        <div className="pt-40 text-center uppercase font-black min-h-screen bg-white">
            <h1 className="text-4xl text-slate-900">Service non trouvé</h1>
            <Link to="/" className="text-neon-pink mt-6 block no-underline tracking-widest text-sm">Retour à l'accueil</Link>
        </div>
    );

    const whatsappUrl = `https://wa.me/243854066780?text=${encodeURIComponent(service.whatsappMessage)}`;

    return (
        <div className="pt-48 pb-40 bg-white min-h-screen relative overflow-hidden">
            {/* Background highlights */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-50 blur-[150px] -mr-32 -mt-32 -z-10 rounded-full"></div>

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <Link to="/" className="group inline-flex items-center space-x-3 text-slate-400 hover:text-slate-900 mb-16 transition-all font-black uppercase tracking-[0.3em] text-[10px] no-underline">
                        <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
                        <span>Plateforme / Services</span>
                    </Link>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-12"
                    >
                        <div className="space-y-8">
                            <div className="flex items-center space-x-6">
                                <div className="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center text-white shadow-xl">
                                    {React.cloneElement(service.icon, { size: 36 })}
                                </div>
                                <span className={`text-[10px] font-black uppercase tracking-[0.4em] px-5 py-2 rounded-full border border-slate-100
                                    ${service.color === 'pink' ? 'text-neon-pink' : service.color === 'cyan' ? 'text-neon-cyan' : 'text-neon-purple'}`}>
                                    {service.id.includes('distribution') ? 'Sortie Musicale' : 'Expertise Artistique'}
                                </span>
                            </div>
                            <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase text-slate-900 leading-[0.85]">
                                {service.title}
                            </h1>
                            <div className="flex items-end space-x-4">
                                <p className="text-4xl font-black text-slate-300 tracking-tighter uppercase line-through opacity-50">$80+</p>
                                <p className="text-6xl font-black text-neon-pink tracking-tighter uppercase">
                                    {service.price}
                                </p>
                            </div>
                        </div>

                        <p className="text-xl text-slate-500 leading-relaxed font-bold normal-case">
                            {service.longDescription}
                        </p>

                        <div className="pt-10 flex flex-col sm:flex-row gap-6">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center justify-center space-x-4 px-12 py-6 rounded-3xl bg-slate-900 text-white font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 no-underline"
                            >
                                <MessageSquare size={20} />
                                <span>Commander par WhatsApp</span>
                            </motion.a>
                            <button className="inline-flex items-center justify-center space-x-4 px-12 py-6 rounded-3xl bg-white border border-slate-100 text-slate-400 font-black uppercase tracking-widest hover:border-slate-300 transition-all cursor-pointer">
                                <ExternalLink size={20} />
                                <span>Partager</span>
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="card-pro space-y-12 sticky top-40 bg-slate-50/50 backdrop-blur-sm"
                    >
                        <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 italic underline decoration-neon-pink decoration-8 underline-offset-[12px]">Pris en charge</h3>
                        <ul className="space-y-8">
                            {service.features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center space-x-5 text-slate-600 font-black uppercase text-xs tracking-[0.2em]"
                                >
                                    <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                        <CheckCircle2 className="text-neon-cyan" size={18} />
                                    </div>
                                    <span className="flex-grow">{feature}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="p-8 rounded-[2rem] bg-slate-900 text-white space-y-4">
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60">Estimation de livraison</p>
                            <p className="text-2xl font-black uppercase italic tracking-tighter">72 Heures Chrono</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
