/**
 * Skills - Section "Compétences"
 * 
 * Affiche les compétences techniques organisées par catégories
 * Utilise l'effet de survol (hover) pour l'interaction visuelle.
 * 
 * @example
 * <Skills />
 */

"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useRevealAnimation } from "@/lib/hooks/useRevealAnimation";
import { SKILLS_SECTIONS, SKILL_ICON_MAP } from "@/lib/data/skills-data";
import Image from "next/image";

/**
 * Composant pour afficher une liste de compétences avec leurs icônes
 */
import { memo } from "react";

const SkillItemList = memo(function SkillItemList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 list-none pl-0 space-y-3 font-semibold">
      {items.map((skillName) => {
        const iconFilename = SKILL_ICON_MAP[skillName];
        
        if (!iconFilename) {
          // Afficher la compétence sans icône si le mapping n'existe pas
          return (
            <li key={skillName} className="flex items-center gap-3 text-white py-1">
              <span>{skillName}</span>
            </li>
          );
        }

        const iconPath = `/icons/${iconFilename}`;
        
        return (
          <li key={skillName} className="flex items-center gap-3 text-white py-1">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-md" style={{ backgroundColor: "#262626" }}>
              <Image src={iconPath} alt={`Icône ${skillName}`} width={24} height={24} className="object-contain brightness-0 invert" />
            </span>
            <span>{skillName}</span>
          </li>
        );
      })}
    </ul>
  );
});

export default function Skills() {
  const isMounted = useRevealAnimation();

  // Transforme les sections en format attendu par HoverEffect
  const skillsData = SKILLS_SECTIONS.map((section) => ({
    title: section.title,
    content: <SkillItemList items={section.items} />,
  }));

  return (
    <section id="skills" className="relative overflow-hidden py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* ==================== BACKGROUND ==================== */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/5 dark:bg-white/5 blur-3xl" />
      </div>

      {/* ==================== TITLE ==================== */}
      <h2
        className={`text-center text-3xl sm:text-4xl lg:text-5xl font-bold transition-all duration-700 ease-out ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        Compétences
      </h2>

      {/* ==================== CONTENT ==================== */}
      <div
        className={`mx-auto mt-8 lg:mt-12 max-w-7xl transition-all duration-700 ease-out ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        } delay-150`}
      >
        <HoverEffect items={skillsData} />
      </div>
    </section>
  );
}
