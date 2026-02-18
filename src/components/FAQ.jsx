import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

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
    }
];

const FAQ = () => {
    return (
        <section id="faq" className="py-24 bg-dark-bg uppercase">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0 mb-12 sm:mb-20 justify-center text-center sm:text-left">
                    <HelpCircle className="text-neon-cyan" size={32} />
                    <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white italic">Questions Fréquentes</h2>
                </div>
                <div className="space-y-6">
                    {faqItems.map((item, index) => (
                        <FAQItem key={index} question={item.q} answer={item.a} />
                    ))}
                </div>
            </div>
        </section>
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

export default FAQ;
