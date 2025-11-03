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
    liveUrl: "https://portfolio-noah-wojciechowski.vercel.app",
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



