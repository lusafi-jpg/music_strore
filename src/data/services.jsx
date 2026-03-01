import React from 'react';
import { Rocket, Star, Zap, Infinity as InfinityIcon } from 'lucide-react';

export const servicesData = [
    {
        id: "vibe-drop",
        title: "Vibe-Drop",
        shortDescription: "L'essentiel pour poser sa marque.",
        longDescription: "Distribution sur les plateformes mondiales. Idéal pour votre première sortie.",
        price: "29$",
        icon: <Rocket size={32} />,
        color: "cyan",
        cible: "L'artiste qui lance son premier single.",
        features: [
            "📦 1 projet gratuit par an",
            "🎵 Maximum 2 titres inclus par projet",
            "💰 Dépassement: 7$ par projet supplémentaire",
            "🌍 Distribution sur 150+ plateformes digitales",
            "💰 Monétisation automatique activée",
            "🤝 Répartition auto des revenus",
            "✅ Badge artiste vérifié Spotify & Apple Music",
            "🎥 Chaîne Artiste Officielle YouTube (OAC)",
            "🔒 YouTube Content ID activé",
            "🏷️ Utilisation de vos propres codes ISRC",
            "📊 Rapports de vente détaillés",
            "📱 Sorties illimitées sur réseaux sociaux",
            "🛟 Support client sous 72h"
        ],
        whatsappMessage: "Bonjour Vibrato,\n\nJe suis intéressé par l'offre Vibe-Drop. Je souhaite sortir mon premier projet et poser ma marque.\n\nMerci de m'indiquer la marche à suivre."
    },
    {
        id: "vibe-master",
        title: "Vibe-Master",
        shortDescription: "L'image carrée et la gestion pro.",
        longDescription: "Tout le Vibe-Drop, plus une gestion avancée pour les artistes structurés.",
        price: "69$",
        icon: <Star size={32} />,
        color: "purple",
        cible: "L'artiste qui veut une image 'Carrée' et gérer ses droits comme un pro.",
        features: [
            "📦 3 projets gratuits par an",
            "🎵 Maximum 3 titres inclus par projet",
            "💰 Dépassement: 7$ par projet supplémentaire",
            "🌍 Tout le Vibe-Drop inclus",
            "⚡ Gestion prioritaire des mises en ligne",
            "📱 Sorties illimitées sur TikTok, IG, FB & YouTube",
            "✅ Badges de vérification Spotify & Apple Music",
            "🏢 Splits (Répartition auto) + Nom de Label personnalisé",
            "🎨 Outils de création de pochettes d'album pro",
            "🛟 Assistance prioritaire (réponse sous 48h)"
        ],
        whatsappMessage: "Bonjour Vibrato,\n\nJe suis intéressé par l'offre Vibe-Master. Je souhaite gérer mes droits comme un pro et avoir une image carrée.\n\nMerci de m'indiquer la marche à suivre."
    },
    {
        id: "vibe-flash",
        title: "Vibe-Flash",
        shortDescription: "La visibilité maximale pour créer l'impact.",
        longDescription: "Tout le Vibe-Master, avec des données en temps réel et des opportunités promotionnelles.",
        price: "99$",
        icon: <Zap size={32} />,
        color: "pink",
        cible: "L'artiste en plein buzz qui veut saturer le marché et protéger ses revenus.",
        features: [
            "📦 5 projets gratuits par an",
            "🎵 Maximum 5 titres inclus par projet",
            "💰 Dépassement: 7$ par projet supplémentaire",
            "🌍 Tout le Vibe-Master inclus",
            "⚡ Priorité élevée et traitement accéléré",
            "📊 Rapports quotidiens des tendances",
            "🔒 YouTube Content ID pour protection",
            "🎯 Opportunités exclusives (Pitching, Ambassadeurs, Twitch)",
            "🎵 Codes UPC personnalisés + Restrictions géographiques",
            "👑 Support VIP (réponse sous 24h)"
        ],
        whatsappMessage: "Bonjour Vibrato,\n\nJe suis intéressé par l'offre Vibe-Flash. Je veux maximer ma visibilité et protéger mes revenus.\n\nMerci de m'indiquer la marche à suivre."
    },
    {
        id: "vibe-flux",
        title: "Vibe-Flux",
        shortDescription: "L'écosystème illimité pour ceux qui ne s'arrêtent jamais.",
        longDescription: "Abonnement tout compris pour des sorties illimitées et l'accès à notre réseau d'experts.",
        price: "15$/mois",
        icon: <InfinityIcon size={32} />,
        color: "yellow",
        cible: "Le 'Grinder' qui sort un son par mois et veut faire partie d'une communauté d'élite.",
        features: [
            "📦 3 projets gratuits par mois",
            "🎵 Maximum 4 titres inclus par projet",
            "💰 Dépassement: 7$ par projet supplémentaire",
            "🌍 Tous les services des autres formules",
            "♾️ Sorties illimitées - Ne payez plus par morceau",
            "🎥 Création de votre Chaîne d'Artiste Officielle (OAC) YouTube",
            "🤝 Accès aux Ateliers experts et Conférences privées",
            "🤖 Automatisation complète vers nouveaux magasins mondiaux",
            "⭐ Avantages exclusifs pour artistes en vedette",
            "🎵 Accès au lieu d'enregistrement Vibrato",
            "📞 Gestion continue adaptée aux artistes actifs",
            "🚀 Annulation à tout moment"
        ],
        whatsappMessage: "Bonjour Vibrato,\n\nJe souhaite souscrire à l'abonnement Vibe-Flux pour des sorties illimitées et rejoindre votre communauté.\n\nMerci de m'indiquer la marche à suivre."
    }
];
