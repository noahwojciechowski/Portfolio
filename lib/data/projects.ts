/**
 * Liste des projets du portfolio
 * Chaque projet contient les informations nécessaires à l'affichage dans la section Projects
 */

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  technicalDetails?: {
    architecture?: string[];
    highlights?: string[];
    challenges?: string[];
  };
};

export const projects: Project[] = [
  {
    title: "Nami Kumo",
    description: "Site web moderne pour un restaurant japonais offrant une expérience de réservation en ligne et consultation du menu.",
    image: "/preview/nami-kumo-preview-v3.png",
    technologies: ["React 19", "TypeScript", "Tailwind CSS"],
    features: ["Système de réservation en ligne", "Menu interactif avec photos", "Design responsive", "Interface utilisateur élégante", "Formulaire de contact"],
    githubUrl: "https://github.com/noahwojciechowski/nami-kumo",
    liveUrl: "https://nami-kumo.netlify.app",
    technicalDetails: {
      architecture: [
        "Application React 19 avec dernières fonctionnalités",
        "TypeScript pour la sécurité du code",
        "Gestion d'état moderne avec React Hooks",
        "Design system cohérent avec Tailwind CSS",
      ],
      highlights: [
        "Interface utilisateur immersive et élégante",
        "Système de réservation intuitif",
        "Performance optimisée pour mobile",
        "Design responsive et accessible",
      ],
      challenges: [
        "Intégration d'un système de réservation complet",
        "Design cohérent avec l'identité de la marque",
        "Optimisation des images pour performance",
      ],
    },
  },
  {
    title: "QuizMaster",
    description: "Bot Discord interactif proposant des quiz quotidiens permettant aux membres de voter pour leurs amis.",
    image: "/preview/quizmaster-preview-v2.jpg",
    technologies: ["JavaScript", "Discord.js", "Node.js"],
    features: ["Quiz quotidiens automatiques", "Système de vote interactif", "Questions personnalisables", "Engagement communautaire", "Statistiques des participants"],
    githubUrl: "https://github.com/noahwojciechowski/QuizMaster",
    technicalDetails: {
      architecture: [
        "Bot Discord avec Discord.js",
        "Système de scheduling pour quiz quotidiens",
        "Base de données pour stocker les réponses",
        "Gestion des interactions utilisateur",
      ],
      highlights: [
        "Quiz automatiques chaque jour",
        "Interface de vote intuitive via Discord",
        "Engagement actif de la communauté",
        "Personnalisation des questions",
      ],
      challenges: [
        "Gestion des interactions asynchrones Discord",
        "Système de vote équitable et transparent",
        "Automatisation fiable des quiz quotidiens",
      ],
    },
  },
  {
    title: "TechVault",
    description: "Application e-commerce moderne spécialisée dans la vente de produits Tech & Gaming",
    image: "/preview/techvault-preview2.jpg",
    technologies: ["React", "TypeScript", "Vite", "Zustand", "Tailwind CSS", "Framer Motion"],
    features: ["Catalogue avec filtres avancés", "Recherche temps réel", "Gestion panier", "Design responsive", "Mode sombre"],
    githubUrl: "https://github.com/noahwojciechowski/Techvault",
    liveUrl: "https://techvault-dev.vercel.app",
    technicalDetails: {
      architecture: [
        "Architecture SPA avec React 18 et Hooks",
        "State management centralisé avec Zustand",
        "Routing dynamique avec React Router v6",
        "Composants UI modulaires et réutilisables",
      ],
      highlights: [
        "Système de recherche avec filtres multi-critères",
        "Gestion d'état optimisée pour performances",
        "Animations fluides avec Framer Motion",
        "Build optimisé avec Vite (temps de chargement < 1s)",
      ],
      challenges: [
        "Optimisation des performances avec lazy loading",
        "Gestion complexe du panier avec localStorage",
        "Implémentation du mode sombre global",
      ],
    },
  },
  {
    title: "Portfolio Personnel",
    description: "Portfolio moderne et responsive développé avec Next.js, présentant mes projets et compétences techniques.",
    image: "/preview/portfolio-preview.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    features: ["Design moderne", "Responsive", "Animations fluides", "Carrousel projets", "Mode sombre"],
    githubUrl: "https://github.com/noahwojciechowski/portfolio",
    liveUrl: "https://noah-wojciechowski.vercel.app",
    technicalDetails: {
      architecture: [
        "Framework Next.js 14 avec App Router",
        "Server-Side Rendering (SSR) pour SEO optimal",
        "Composants clients avec React Hooks",
        "Système de design avec shadcn/ui",
      ],
      highlights: [
        "Carrousel interactif avec Embla Carousel",
        "Navigation fluide avec sections scroll",
        "Optimisation images avec Next.js Image",
        "Performance 100/100 sur Lighthouse",
      ],
      challenges: [
        "Intégration complète du mode sombre",
        "Responsive design mobile-first",
        "SEO optimisé avec metadata dynamique",
      ],
    },
  },
];



