import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, Users, Music, TrendingUp, Sparkles } from 'lucide-react';

const DiagnosticSection = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [recommendedSolution, setRecommendedSolution] = useState(null);

    const questions = [
        {
            id: 'experience',
            question: "Quelle est votre expérience musicale ?",
            options: [
                { text: "Débutant (premier single)", value: "beginner", icon: "🎵" },
                { text: "En développement (quelques sorties)", value: "developing", icon: "📈" },
                { text: "Établi (carrière active)", value: "established", icon: "⭐" },
                { text: "Professionnel (plusieurs albums)", value: "professional", icon: "🏆" }
            ]
        },
        {
            id: 'goal',
            question: "Quel est votre objectif principal ?",
            options: [
                { text: "Sortir mon premier titre", value: "first_release", icon: "🚀" },
                { text: "Développer mon audience", value: "grow_audience", icon: "📊" },
                { text: "Monétiser ma musique", value: "monetize", icon: "💰" },
                { text: "Professionnaliser ma carrière", value: "professionalize", icon: "🎯" }
            ]
        },
        {
            id: 'frequency',
            question: "À quelle fréquence sortez-vous de la musique ?",
            options: [
                { text: "Occasionnellement", value: "occasional", icon: "📅" },
                { text: "Régulièrement (1-2/mois)", value: "regular", icon: "🔄" },
                { text: "Très actif (hebdomadaire)", value: "very_active", icon: "⚡" },
                { text: "Pas encore sorti", value: "none", icon: "🎵" }
            ]
        }
    ];

    const solutions = {
        beginner_first_release: {
            title: "🎵 Débutant - Premier Single",
            description: "Vous commencez votre aventure musicale",
            packages: ["Vibe-Drop (29$)", "Vibe-Start (39$)", "Vibe-Boost (49$)"],
            total: "117$",
            route: "/start?profile=beginner"
        },
        developing_grow_audience: {
            title: "📈 En Développement - Croissance Audience",
            description: "Vous voulez développer votre visibilité",
            packages: ["Vibe-Master (69$)", "Vibe-Visual (89$)", "Vibe-Impact (129$)"],
            total: "287$",
            route: "/start?profile=growing"
        },
        established_monetize: {
            title: "💰 Établi - Monétisation Maximale",
            description: "Vous voulez optimiser vos revenus",
            packages: ["Vibe-Flash (99$)", "Vibe-Brand (179$)", "Vibe-Explosion (249$)"],
            total: "527$",
            route: "/start?profile=established"
        },
        professional_professionalize: {
            title: "🏆 Professionnel - Carrière Complète",
            description: "Vous visez l'excellence professionnelle",
            packages: ["Vibe-Flux (15$/mois)", "Vibe-Identity (79$/mois)", "Vibe-Momentum (89$/mois)"],
            total: "183$/mois",
            route: "/start?profile=professional"
        }
    };

    const getRecommendation = () => {
        const key = `${answers.experience}_${answers.goal}`;
        return solutions[key] || solutions.beginner_first_release;
    };

    const handleAnswer = (questionId, value) => {
        const newAnswers = { ...answers, [questionId]: value };
        setAnswers(newAnswers);

        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            const recommendation = getRecommendation();
            setRecommendedSolution(recommendation);
            setShowResult(true);
        }
    };

    const resetDiagnostic = () => {
        setCurrentStep(0);
        setAnswers({});
        setShowResult(false);
        setRecommendedSolution(null);
    };

    return (
        <section className="py-24 sm:py-32 bg-gradient-to-br from-dark-bg via-dark-surface/50 to-dark-bg relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-primary/5 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-quaternary/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white text-xs font-black uppercase tracking-[0.2em] mb-6">
                        <Sparkles size={14} className="text-brand-quaternary" />
                        <span>Diagnostic Intelligent</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter uppercase mb-6">
                        Quel <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-quaternary to-brand-quinary italic">artiste</span> êtes-vous ?
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed font-medium">
                        Répondez à 3 questions simples et découvrez la solution Vibrato parfaitement adaptée à votre profil.
                    </p>
                </motion.div>

                <AnimatePresence mode="wait">
                    {!showResult ? (
                        <motion.div
                            key="diagnostic"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="bg-dark-surface/40 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 border border-white/5"
                        >
                            {/* Progress Bar */}
                            <div className="mb-8">
                                <div className="flex justify-between text-sm text-text-secondary mb-2">
                                    <span>Question {currentStep + 1} sur {questions.length}</span>
                                    <span>{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-2">
                                    <div
                                        className="bg-gradient-to-r from-brand-primary to-brand-quaternary h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                                    ></div>
                                </div>
                            </div>

                            {/* Current Question */}
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-black text-white mb-6">
                                    {questions[currentStep].question}
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {questions[currentStep].options.map((option, index) => (
                                        <motion.button
                                            key={index}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => handleAnswer(questions[currentStep].id, option.value)}
                                            className="p-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 text-left group"
                                        >
                                            <div className="flex items-center space-x-4">
                                                <div className="text-3xl">{option.icon}</div>
                                                <div>
                                                    <div className="text-white font-semibold text-lg">{option.text}</div>
                                                </div>
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-gradient-to-br from-dark-surface/60 to-dark-surface/40 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 border border-brand-quaternary/20 shadow-2xl shadow-brand-quaternary/10"
                        >
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-brand-quaternary to-brand-quinary rounded-full mb-6">
                                    <CheckCircle2 size={32} className="text-white" />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                                    {recommendedSolution.title}
                                </h3>
                                <p className="text-lg text-text-secondary mb-8">
                                    {recommendedSolution.description}
                                </p>
                            </div>

                            <div className="bg-white/5 rounded-xl p-6 mb-8">
                                <h4 className="text-xl font-bold text-white mb-4">Votre Solution Personnalisée :</h4>
                                <div className="space-y-3">
                                    {recommendedSolution.packages.map((pkg, index) => (
                                        <div key={index} className="flex items-center space-x-3 text-text-secondary">
                                            <CheckCircle2 size={16} className="text-brand-quaternary flex-shrink-0" />
                                            <span>{pkg}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 pt-4 border-t border-white/10">
                                    <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-quaternary">
                                        Total : {recommendedSolution.total}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => window.location.href = recommendedSolution.route}
                                    className="px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-black uppercase tracking-widest text-sm flex items-center justify-center space-x-3 rounded-xl shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40 transition-shadow"
                                >
                                    <span>Commencer Maintenant</span>
                                    <ArrowRight size={18} />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={resetDiagnostic}
                                    className="px-8 py-4 bg-white/10 border border-white/20 text-white font-black uppercase tracking-widest text-sm hover:bg-white/20 transition-colors rounded-xl"
                                >
                                    Refaire le Diagnostic
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default DiagnosticSection;
