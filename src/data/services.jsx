import React from 'react';
import { Rocket, Star, Zap, Infinity as InfinityIcon } from 'lucide-react';

export const servicesData = [
    {
        id: "vibe-drop",
        title: "Vibe-Drop",
        shortDescription: "L'essentiel pour poser sa marque.",
        longDescription: "Distribution sur les plateformes mondiales. Idéal pour votre première sortie.",
        price: "29 - 49$",
        icon: <Rocket size={32} />,
        color: "cyan",
        cible: "L'artiste qui lance son premier single.",
        features: [
            "Distribution : Plateformes mondiales + Date de sortie au choix.",
            "Propreté : Utilisation de votre propre code ISRC (Traçabilité totale).",
            "Suivi : Rapports de vente officiels.",
            "Support : Assistance client (réponse sous 72h)."
        ],
        whatsappMessage: "Bonjour Vibrato,\n\nJe suis intéressé par l'offre Vibe-Drop. Je souhaite sortir mon premier projet et poser ma marque.\n\nMerci de m'indiquer la marche à suivre."
    },
    {
        id: "vibe-master",
        title: "Vibe-Master",
        shortDescription: "L'image carrée et la gestion pro.",
        longDescription: "Tout le Vibe-Drop, plus une gestion avancée pour les artistes structurés.",
        price: "69 - 99$",
        icon: <Star size={32} />,
        color: "purple",
        cible: "L'artiste qui veut une image 'Carrée' et gérer ses droits comme un pro.",
        features: [
            "Tout le Vibe-Drop",
            "Social Power : Sorties illimitées sur TikTok, IG, FB & YouTube (20% frais).",
            "Identité : Badges de vérification Spotify & Apple Music.",
            "Entreprise : Splits (Répartition auto) + Nom de Label personnalisé.",
            "Visuel : Outils de création de pochettes d'album pro.",
            "Support : Assistance prioritaire (réponse sous 48h)."
        ],
        whatsappMessage: "Bonjour Vibrato,\n\nJe suis intéressé par l'offre Vibe-Master. Je souhaite gérer mes droits comme un pro et avoir une image carrée.\n\nMerci de m'indiquer la marche à suivre."
    },
    {
        id: "vibe-flash",
        title: "Vibe-Flash",
        shortDescription: "La visibilité maximale pour créer l'impact.",
        longDescription: "Tout le Vibe-Master, avec des données en temps réel et des opportunités promotionnelles.",
        price: "99 - 149$",
        icon: <Zap size={32} />,
        color: "pink",
        cible: "L'artiste en plein buzz qui veut saturer le marché et protéger ses revenus.",
        features: [
            "Tout le Vibe-Master",
            "Données : Rapports quotidiens des tendances.",
            "Protection : YouTube Content ID.",
            "Promo : Opportunités exclusives (Pitching, Ambassadeurs, Twitch).",
            "Technique : Codes UPC personnalisés + Restrictions géographiques.",
            "Support : Assistance VIP (réponse sous 24h)."
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
            "Sorties Illimitées : Ne paye plus à chaque morceau.",
            "Visibilité : Création de ta Chaîne d'Artiste Officielle (OAC) sur YouTube.",
            "Réseau : Accès aux Ateliers experts et Conférences privées.",
            "Automator : Envoi automatique vers les nouveaux magasins mondiaux.",
            "Avantages : Coût réduit pour les artistes en vedette + Accès au lieu d'enregistrement."
        ],
        whatsappMessage: "Bonjour Vibrato,\n\nJe souhaite souscrire à l'abonnement Vibe-Flux pour des sorties illimitées et rejoindre votre communauté.\n\nMerci de m'indiquer la marche à suivre."
    }
];
