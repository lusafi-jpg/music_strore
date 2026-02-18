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
        <section id="faq" className="py-24 bg-white uppercase">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex items-center space-x-4 mb-20 justify-center">
                    <HelpCircle className="text-neon-cyan" size={40} />
                    <h2 className="text-5xl font-black uppercase tracking-tighter text-gray-900 italic">Questions Fréquentes</h2>
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
        <div className="border border-gray-100 rounded-[2rem] overflow-hidden bg-gray-50/50 hover:bg-white transition-all shadow-sm">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-8 text-left bg-transparent cursor-pointer border-none"
            >
                <span className="font-black text-lg tracking-tight text-gray-900 uppercase italic">{question}</span>
                <ChevronDown className={`transition-transform duration-500 text-neon-pink ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 p-8 pt-0' : 'max-h-0 opacity-0'} overflow-hidden text-gray-600 font-bold normal-case tracking-wide`}>
                {answer}
            </div>
        </div>
    );
};

export default FAQ;
