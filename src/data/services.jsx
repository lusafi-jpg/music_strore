import React from 'react';
import { Globe, Palette, Megaphone, Disc, DiscAlbum } from 'lucide-react';

export const servicesData = [
    {
        id: "distribution-single",
        title: "Distribution Single",
        shortDescription: "Sortez votre prochain morceau sur toutes les plateformes.",
        longDescription: "Idéal pour les artistes qui sortent des morceaux régulièrement. Nous gérons la distribution sur Spotify, Apple Music, Boomplay et plus de 150 autres plateformes.",
        price: "15$",
        icon: <Globe size={32} />,
        color: "cyan",
        features: [
            "Ventes et streams illimités",
            "Paiements via Mobile Money",
            "Support à Kinshasa",
            "Codes ISRC/UPC inclus"
        ],
        whatsappMessage: "Bonjour Vibrato,\n\nJe souhaite proposer mon prochain single pour distribution sur votre plateforme. Je serais ravi de collaborer avec vous afin de toucher un large public et partager ma musique avec vos auditeurs.\n\nMerci de me faire savoir la procédure à suivre pour soumettre mon titre.\n\nCordialement,"
    },
    {
        id: "distribution-ep",
        title: "Distribution EP",
        shortDescription: "Pour vos projets de 3 à 6 titres.",
        longDescription: "Donnez de l'ampleur à votre carrière avec un EP. Nous assurons une visibilité maximale pour votre projet multi-titres sur le marché international.",
        price: "35$",
        icon: <Disc size={32} />,
        color: "purple",
        features: [
            "Jusqu'à 6 titres inclus",
            "Distribution Premium",
            "Accompagnement stratégie",
            "Stats détaillées par titre"
        ],
        whatsappMessage: "Bonjour Vibrato,\n\nJe souhaite proposer mon prochain EP pour distribution sur votre plateforme. Je serais ravi de collaborer avec vous afin de toucher un large public et partager ma musique avec vos auditeurs.\n\nMerci de me faire savoir la procédure à suivre pour soumettre mon projet.\n\nCordialement,"
    },
    {
        id: "distribution-album",
        title: "Distribution Album",
        shortDescription: "Consacrez votre talent avec un album complet.",
        longDescription: "L'outil ultime pour les artistes confirmés. Distribution illimitée de titres pour votre album, avec une gestion de catalogue prioritaire.",
        price: "60$",
        icon: <DiscAlbum size={32} />,
        color: "pink",
        features: [
            "Titres illimités",
            "Placement Playlist prioritaire",
            "Vérification de compte artiste",
            "Suivi personnalisé"
        ],
        whatsappMessage: "Bonjour Vibrato,\n\nJe souhaite proposer mon prochain album pour distribution sur votre plateforme. Je serais ravi de collaborer avec vous afin de toucher un large public et partager ma musique avec vos auditeurs.\n\nMerci de me faire savoir la procédure à suivre pour soumettre mon album.\n\nCordialement,"
    },
    {
        id: "cover-art",
        title: "Cover Art / Design",
        shortDescription: "Une identité visuelle unique qui capte l'attention.",
        longDescription: "Nos designers spécialisés créent des pochettes captivantes respectant les normes du streaming tout en imposant votre style visuel.",
        price: "40$",
        icon: <Palette size={32} />,
        color: "pink",
        features: [
            "Design 3000x3000px HQ",
            "Optimisé Streaming",
            "Visuels réseaux sociaux",
            "Retouches illimitées"
        ],
        whatsappMessage: "Bonjour Vibrato,\n\nJe souhaite commander un cover art professionnel pour mon prochain projet. Je serais ravi de collaborer avec vous pour créer une identité visuelle forte.\n\nMerci de me faire savoir la procédure à suivre.\n\nCordialement,"
    },
    {
        id: "promotion",
        title: "Promotion & Playlist",
        shortDescription: "Boostez votre visibilité et intégrez les meilleures playlists.",
        longDescription: "Nous proposons des campagnes ciblées sur Instagram/TikTok et des placements stratégiques pour toucher une audience réelle.",
        price: "25$",
        icon: <Megaphone size={32} />,
        color: "purple",
        features: [
            "Placement Playlist Curatée",
            "Campagne Ads TikTok",
            "Relations presse locales",
            "Analyse de conversion"
        ],
        whatsappMessage: "Bonjour Vibrato,\n\nJe souhaite promouvoir ma musique via votre plateforme et intégrer vos playlists. Je serais ravi de collaborer avec vous pour booster ma visibilité.\n\nMerci de me faire savoir la procédure à suivre.\n\nCordialement,"
    }
];
