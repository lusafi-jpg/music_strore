import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqItems = [
    {
        q: "Comment distribuer ma musique ?",
        a: "Il suffit de choisir notre service de distribution, de préparer vos fichiers (WAV/MP3) et votre pochette, puis de nous contacter. Nous nous occupons du reste !"
    },
    {
        q: "Quels sont les délais pour les plateformes ?",
        a: "Pour un Single, comptez environ 5-7 jours. Pour un Album ou un EP, prévoyez 10-14 jours pour garantir une publication simultanée partout."
    },
    {
        q: "Puis-je changer mon nom d'artiste plus tard ?",
        a: "C'est possible mais complexe une fois distribué. Nous vous conseillons de bien fixer votre identité avant la première sortie."
    },
    {
        q: "Comment fonctionnent les royalties ?",
        a: "Les royalties sont automatiquement collectées par les plateformes et reversées selon votre contrat. Vous recevez des rapports mensuels détaillés."
    },
    {
        q: "Quels formats de fichiers acceptez-vous ?",
        a: "Nous acceptons les formats WAV (recommandé), MP3, et FLAC. Pour une qualité optimale, privilégiez le WAV 24-bit/44.1kHz."
    },
    {
        q: "Proposez-vous des services de mastering ?",
        a: "Oui, nos ingénieurs certifiés peuvent master vos pistes pour une qualité professionnelle optimale avant distribution."
    },
    {
        q: "Puis-je distribuer sur certaines plateformes seulement ?",
        a: "Oui, vous pouvez choisir les plateformes de votre choix lors de la configuration de votre distribution."
    },
    {
        q: "Que faire en cas de problème avec ma distribution ?",
        a: "Notre support technique est disponible 24/7. Contactez-nous immédiatement pour résoudre tout problème."
    }
];

const FAQPage = () => {
    return (
        <div className="min-h-screen bg-dark-bg">
            {/* Header */}
            <section className="py-16 bg-gradient-to-br from-dark-bg via-dark-surface/30 to-dark-bg relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/10 blur-[100px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-quaternary/10 blur-[80px] rounded-full"></div>
                </div>

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center space-x-2 text-text-secondary hover:text-white transition-colors mb-8"
                        >
                            <ArrowLeft size={20} />
                            <span>Retour à l'accueil</span>
                        </Link>

                        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0 justify-center text-center sm:text-left mb-8">
                            <HelpCircle className="text-neon-cyan" size={48} />
                            <div>
                                <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white italic mb-2">
                                    Questions Fréquentes
                                </h1>
                                <p className="text-xl text-text-secondary max-w-2xl">
                                    Tout ce que vous devez savoir sur nos services de distribution musicale
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="py-24 bg-dark-surface/20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="space-y-6">
                        {faqItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <FAQItem question={item.q} answer={item.a} />
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-16 text-center"
                    >
                        <div className="bg-dark-surface/40 backdrop-blur-xl rounded-2xl p-8 border border-white/5">
                            <h3 className="text-2xl font-black text-white mb-4">
                                Vous n'avez pas trouvé votre réponse ?
                            </h3>
                            <p className="text-text-secondary mb-8">
                                Notre équipe est là pour vous aider. Contactez-nous pour toute question supplémentaire.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/start" className="no-underline">
                                    <button className="px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-black uppercase tracking-widest text-sm rounded-xl hover:shadow-lg transition-shadow">
                                        Commencer Maintenant
                                    </button>
                                </Link>
                                <a
                                    href="https://wa.me/243836332818"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-black uppercase tracking-widest text-sm rounded-xl transition-colors"
                                >
                                    WhatsApp Support
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-white/5 rounded-[2rem] overflow-hidden bg-white/5 hover:bg-white/10 transition-all shadow-sm">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left bg-transparent cursor-pointer border-none"
            >
                <span className="font-black text-base sm:text-lg tracking-tight text-white uppercase italic">{question}</span>
                <ChevronDown className={`transition-transform duration-500 text-neon-pink ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 p-6 sm:p-8 pt-0' : 'max-h-0 opacity-0'} overflow-hidden text-slate-400 font-bold normal-case tracking-wide text-sm sm:text-base`}>
                {answer}
            </div>
        </div>
    );
};

export default FAQPage;
