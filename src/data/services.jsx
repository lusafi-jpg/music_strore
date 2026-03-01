import React from 'react';
import { Rocket, Star, Zap, Infinity as InfinityIcon } from 'lucide-react';
import { Package, Music, DollarSign, Globe, Handshake, CheckCircle2, Video, Lock, Tag, BarChart3, Smartphone, LifeBuoy, Crown, Target, Bot, Star as StarIcon, Phone, Rocket as RocketIcon } from 'lucide-react';

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
            { icon: <Package size={16} />, text: "1 projet gratuit par an" },
            { icon: <Music size={16} />, text: "Maximum 2 titres inclus par projet" },
            { icon: <DollarSign size={16} />, text: "Dépassement: 7$ par projet supplémentaire" },
            { icon: <Globe size={16} />, text: "Distribution sur 150+ plateformes digitales" },
            { icon: <DollarSign size={16} />, text: "Monétisation automatique activée" },
            { icon: <Handshake size={16} />, text: "Répartition auto des revenus" },
            { icon: <CheckCircle2 size={16} />, text: "Badge artiste vérifié Spotify & Apple Music" },
            { icon: <Video size={16} />, text: "Chaîne Artiste Officielle YouTube (OAC)" },
            { icon: <Lock size={16} />, text: "YouTube Content ID activé" },
            { icon: <Tag size={16} />, text: "Utilisation de vos propres codes ISRC" },
            { icon: <BarChart3 size={16} />, text: "Rapports de vente détaillés" },
            { icon: <Smartphone size={16} />, text: "Sorties illimitées sur réseaux sociaux" },
            { icon: <LifeBuoy size={16} />, text: "Support client sous 72h" }
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
            { icon: <Package size={16} />, text: "3 projets gratuits par an" },
            { icon: <Music size={16} />, text: "Maximum 3 titres inclus par projet" },
            { icon: <DollarSign size={16} />, text: "Dépassement: 7$ par projet supplémentaire" },
            { icon: <Globe size={16} />, text: "Tout le Vibe-Drop inclus" },
            { icon: <Zap size={16} />, text: "Gestion prioritaire des mises en ligne" },
            { icon: <Smartphone size={16} />, text: "Sorties illimitées sur TikTok, IG, FB & YouTube" },
            { icon: <CheckCircle2 size={16} />, text: "Badges de vérification Spotify & Apple Music" },
            { icon: <Package size={16} />, text: "Splits (Répartition auto) + Nom de Label personnalisé" },
            { icon: <Video size={16} />, text: "Outils de création de pochettes d'album pro" },
            { icon: <LifeBuoy size={16} />, text: "Assistance prioritaire (réponse sous 48h)" }
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
            { icon: <Package size={16} />, text: "5 projets gratuits par an" },
            { icon: <Music size={16} />, text: "Maximum 5 titres inclus par projet" },
            { icon: <DollarSign size={16} />, text: "Dépassement: 7$ par projet supplémentaire" },
            { icon: <Globe size={16} />, text: "Tout le Vibe-Master inclus" },
            { icon: <Zap size={16} />, text: "Priorité élevée et traitement accéléré" },
            { icon: <BarChart3 size={16} />, text: "Rapports quotidiens des tendances" },
            { icon: <Lock size={16} />, text: "YouTube Content ID pour protection" },
            { icon: <Target size={16} />, text: "Opportunités exclusives (Pitching, Ambassadeurs, Twitch)" },
            { icon: <Music size={16} />, text: "Codes UPC personnalisés + Restrictions géographiques" },
            { icon: <Crown size={16} />, text: "Support VIP (réponse sous 24h)" }
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
            { icon: <Package size={16} />, text: "3 projets gratuits par mois" },
            { icon: <Music size={16} />, text: "Maximum 4 titres inclus par projet" },
            { icon: <DollarSign size={16} />, text: "Dépassement: 7$ par projet supplémentaire" },
            { icon: <Globe size={16} />, text: "Tous les services des autres formules" },
            { icon: <InfinityIcon size={16} />, text: "Sorties illimitées - Ne payez plus par morceau" },
            { icon: <Video size={16} />, text: "Création de votre Chaîne d'Artiste Officielle (OAC) YouTube" },
            { icon: <Handshake size={16} />, text: "Accès aux Ateliers experts et Conférences privées" },
            { icon: <Bot size={16} />, text: "Automatisation complète vers nouveaux magasins mondiaux" },
            { icon: <StarIcon size={16} />, text: "Avantages exclusifs pour artistes en vedette" },
            { icon: <Music size={16} />, text: "Accès au lieu d'enregistrement Vibrato" },
            { icon: <Phone size={16} />, text: "Gestion continue adaptée aux artistes actifs" },
            { icon: <RocketIcon size={16} />, text: "Annulation à tout moment" }
        ],
        whatsappMessage: "Bonjour Vibrato,\n\nJe souhaite souscrire à l'abonnement Vibe-Flux pour des sorties illimitées et rejoindre votre communauté.\n\nMerci de m'indiquer la marche à suivre."
    }
];
