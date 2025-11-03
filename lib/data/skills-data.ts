/**
 * Données pour la section Skills
 * Mapping des compétences vers leurs icônes et organisation par catégorie
 */

/**
 * Mapping des noms de compétences vers leurs fichiers d'icônes
 */
export const SKILL_ICON_MAP: Record<string, string> = {
  JavaScript: "javascript.svg",
  TypeScript: "typescript.svg",
  HTML: "html5.svg",
  React: "react.svg",
  "Next.js": "nextdotjs.svg",
  "Vue.js": "vuedotjs.svg",
  "Node.js": "nodedotjs.svg",
  "Tailwind CSS": "tailwindcss.svg",
  Git: "git.svg",
  GitHub: "github.svg",
  Vercel: "vercel.svg",
};

/**
 * Catégories de compétences avec leurs items
 */
export interface SkillsSection {
  title: string;
  items: string[];
}

export const SKILLS_SECTIONS: SkillsSection[] = [
  { title: "Langages", items: ["JavaScript", "TypeScript", "HTML"] },
  { title: "Front-End", items: ["React", "Next.js", "Vue.js"] },
  { title: "Back-End", items: ["Node.js"] },
  { title: "CSS & UI", items: ["Tailwind CSS"] },
  { title: "Outils & Plateformes", items: ["Git", "GitHub", "Vercel"] },
];



