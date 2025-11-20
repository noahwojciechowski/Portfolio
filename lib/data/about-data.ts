/**
 * Données pour la section About
 * Contient les informations affichées dans le mode Bento
 */

export interface ExperienceItem {
  type: "stage" | "projet";
  title: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface EducationItem {
  diploma: string;
  school: string;
  year: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
}

/**
 * Informations personnelles affichées dans la carte Bento "À propos"
 */
export const ABOUT_INFO = {
  name: "Noah Wojciechowski",
  description:
    "Développeur web junior passionné par la création d'expériences numériques modernes et intuitives. Autodidacte curieux, j'apprends vite et j'aime résoudre des problèmes concrets avec du code propre. Actuellement en recherche d'alternance pour Janvier 2026, je suis prêt à m'investir dans des projets challengeants et à grandir au sein d'une équipe technique.",
};

/**
 * Liste des expériences professionnelles et projets
 */
export const EXPERIENCES: ExperienceItem[] = [
  {
    type: "stage",
    title: "ASI Informatique",
    period: "2024",
    description: "Maintenance informatique et réseaux",
  },
  {
    type: "stage",
    title: "Atlantique Habitation",
    period: "2021",
    description: "Maintenance informatique sur du matériel informatique de l'entreprise",
  },
  {
    type: "projet",
    title: "Nami Kumo",
    period: "2024",
    description: "Site web restaurant japonais avec système de réservation (React 19, TypeScript, Tailwind CSS)",
  },
  {
    type: "projet",
    title: "QuizMaster",
    period: "2024",
    description: "Bot Discord de quiz quotidiens avec système de votes (JavaScript, Discord.js)",
  },
  {
    type: "projet",
    title: "TechVault",
    period: "2024",
    description: "Site e-commerce Tech & Gaming (React, TypeScript, Zustand)",
  },
  {
    type: "projet",
    title: "Portfolio Personnel",
    period: "2024",
    description: "Portfolio moderne et responsive (Next.js, TypeScript, shadcn/ui)",
  },
];

/**
 * Compétences techniques organisées par catégorie
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Langages",
    items: ["JavaScript", "TypeScript", "HTML/CSS"],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js", "Vue.js"],
  },
  {
    name: "Backend & Outils",
    items: ["Node.js", "Git", "GitHub", "Vercel"],
  },
];

/**
 * Parcours de formation
 */
export const EDUCATION: EducationItem[] = [
  {
    diploma: "BAC STI2D",
    school: "Baccalauréat Technologique STI2D",
    year: "2023",
  },
  {
    diploma: "BTS C.I.E.L",
    school: "BTS C.I.E.L",
    year: "2025",
  },
];

/**
 * Informations de contact
 */
export const CONTACT_INFO: ContactInfo = {
  email: "noahwski@gmail.com",
  github: "https://github.com/noahwojciechowski",
  linkedin: "https://www.linkedin.com/in/noah-wojciechowski",
};



