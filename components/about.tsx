/**
 * About - Section "À propos de moi"
 * 
 * Composant principal affichant les informations personnelles et professionnelles.
 * Propose deux modes d'affichage :
 * - Terminal : Interface terminal interactive avec commandes
 * - Bento : Vue en cartes organisées de style bento
 * 
 * @example
 * <About />
 */

"use client";

import { useState } from "react";
import { useRevealAnimation } from "@/lib/hooks/useRevealAnimation";
import { useTerminal, type LogEntry } from "@/lib/hooks/useTerminal";
import {
  ABOUT_INFO,
  EXPERIENCES,
  SKILL_CATEGORIES,
  EDUCATION,
  CONTACT_INFO,
} from "@/lib/data/about-data";
import type { ExperienceItem, SkillCategory, EducationItem } from "@/lib/data/about-data";
import Image from "next/image";

/**
 * Composant principal About avec switch Terminal/Bento
 */
export default function About() {
  const [viewMode, setViewMode] = useState<"terminal" | "bento">("terminal");
  const isMounted = useRevealAnimation();

  /**
   * Gère le changement de mode d'affichage
   */
  const handleModeToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setViewMode(e.target.checked ? "bento" : "terminal");
  };

  return (
    <section id="about" className="py-16 lg:py-24" style={{ backgroundColor: "#121212" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ==================== HEADER ==================== */}
        <div
          className={`mb-8 lg:mb-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 transition-all duration-700 ease-out ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-white">À propos de moi</h2>
          <label className="relative inline-flex cursor-pointer items-center min-h-[44px]" aria-label="Basculer entre terminal et bento">
            <input
              type="checkbox"
              checked={viewMode === "bento"}
              onChange={handleModeToggle}
              className="peer sr-only"
            />
            <div className="top-4 h-9 w-20 rounded-full bg-gray-600 transition-colors duration-300"></div>
            <span className="absolute left-1 top-1.7 flex h-7.5 w-7.5 items-center justify-center rounded-full bg-white transition-all duration-300 peer-checked:translate-x-10">
              {viewMode === "terminal" ? (
                <Image src="/icons/switch/terminal.svg" alt="terminal" width={16} height={16} />
              ) : (
                <Image src="/icons/switch/user.svg" alt="user" width={16} height={16} />
              )}
            </span>
          </label>
        </div>

        {/* ==================== INFO TEXT ==================== */}
        <p className="text-center text-lg text-gray-400 mb-6 lg:mb-8 px-4">
          Si vous n&apos;êtes pas familier avec le terminal, vous pouvez appuyer sur le bouton ci dessus pour passer en mode carte bento.
        </p>

        {/* ==================== CONTENT ==================== */}
        <div
          className={`transition-all duration-700 ease-out ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          } delay-150`}
        >
          {viewMode === "terminal" ? <TerminalView /> : <BentoView />}
        </div>
      </div>
    </section>
  );
}

/**
 * Vue Terminal - Interface terminal interactive
 * Permet d'exécuter des commandes pour afficher les informations
 */
function TerminalView() {
  const { log, input, setInput, handleSubmit, inputRef, outputRef } = useTerminal();

  return (
    <div className="mx-auto max-w-5xl">
      <div className="rounded-lg border-2 border-gray-600 bg-zinc-950">
        {/* ==================== TERMINAL HEADER ==================== */}
        <div className="flex h-10 sm:h-12 items-center justify-between border-b border-gray-600 bg-zinc-900/50 px-3 sm:px-4">
          <div className="flex gap-1.5 sm:gap-2" aria-label="Boutons de contrôle du terminal">
            <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-red-500" aria-label="Fermer"></div>
            <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-yellow-500" aria-label="Réduire"></div>
            <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-green-500" aria-label="Agrandir"></div>
          </div>
          <span className="font-mono text-xs sm:text-sm text-white truncate ml-2">
            noah.wojciechowski@portfolio:~$
          </span>
        </div>

        {/* ==================== OUTPUT AREA ==================== */}
        <div
          className="min-h-[300px] sm:min-h-[400px] max-h-[400px] sm:max-h-[500px] overflow-y-auto bg-black p-3 sm:p-6 font-mono text-xs sm:text-sm"
          role="log"
          aria-label="Historique du terminal"
        >
          {log.map((entry: LogEntry, idx: number) => (
            <div key={idx} className="mb-4">
              {entry.type === "input" && (
                <div className="flex flex-wrap gap-1">
                  <span className="text-white">&gt;_ $</span>
                  <span className="text-white break-words">{entry.content}</span>
                </div>
              )}
              {entry.type === "output" && (
                <div className="text-gray-300">
                  {typeof entry.content === "string" ? (
                    <pre className="whitespace-pre-wrap break-words">&gt;_ {entry.content}</pre>
                  ) : (
                    entry.content
                  )}
                </div>
              )}
            </div>
          ))}
          <div ref={outputRef} />
        </div>

        {/* ==================== INPUT LINE ==================== */}
        <div className="border-t-2 border-gray-600"></div>
        <div className="bg-zinc-900 p-3 sm:p-4">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <span className="font-mono text-xs sm:text-sm text-white">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tapez une commande..."
              className="flex-1 border-none bg-transparent font-mono text-xs sm:text-sm text-white outline-none placeholder:text-gray-500 min-h-[44px]"
              aria-label="Saisie de commande terminal"
            />
            <span className="animate-pulse font-mono text-white" aria-hidden="true">|</span>
          </form>
        </div>
      </div>
    </div>
  );
}

/**
 * Vue Bento - Cartes organisées de style bento
 * Affiche les informations dans des cartes visuelles structurées
 */
function BentoView() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* ==================== CARTE À PROPOS ==================== */}
        <div className="rounded-lg p-4 sm:p-6" style={{ backgroundColor: "#262626" }}>
          <div className="mb-4 flex items-center gap-3">
            <Image src="/icons/bento/user.svg" alt="Icône utilisateur" width={24} height={24} className="brightness-0 invert" />
            <h3 className="text-lg sm:text-xl font-bold text-white">{ABOUT_INFO.name}</h3>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-gray-400">{ABOUT_INFO.description}</p>
        </div>

        {/* ==================== CARTE EXPÉRIENCE ==================== */}
        <div className="rounded-lg p-4 sm:p-6" style={{ backgroundColor: "#262626" }}>
          <div className="mb-4 flex items-center gap-3">
            <Image src="/icons/bento/briefcase.svg" alt="Icône expérience" width={24} height={24} className="brightness-0 invert" />
            <h3 className="text-lg sm:text-xl font-bold text-white">Expérience</h3>
          </div>
          <div className="text-xs sm:text-sm text-gray-400">
            <p className="mt-5 mb-2 font-semibold text-gray-300">
              Voici les différentes expériences professionnelles et projets réalisés durant mes études:
            </p>
            <ul className="list-inside list-disc space-y-1 text-gray-400">
              {EXPERIENCES.filter((exp: ExperienceItem) => exp.type === "stage").map((exp: ExperienceItem, idx: number) => (
                <li key={idx}>
                  Stage : {exp.title} ({exp.period}) - {exp.description}
                </li>
              ))}
            </ul>
            <p className="mt-5 mb-2 font-semibold text-gray-300">Projets d&apos;études :</p>
            <ul className="list-inside list-disc space-y-1 text-gray-400">
              {EXPERIENCES.filter((exp: ExperienceItem) => exp.type === "projet").map((exp: ExperienceItem, idx: number) => (
                <li key={idx}>
                  {exp.title} - {exp.description}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ==================== CARTE COMPÉTENCES ==================== */}
        <div className="rounded-lg p-4 sm:p-6 order-3 sm:order-3 lg:order-3" style={{ backgroundColor: "#262626" }}>
          <div className="mb-4 flex items-center gap-3">
            <Image src="/icons/bento/sourcecode.svg" alt="Icône compétences" width={24} height={24} className="brightness-0 invert" />
            <h3 className="text-lg sm:text-xl font-bold text-white">Compétences</h3>
          </div>
          <div className="space-y-3 text-xs sm:text-sm text-gray-400">
            {SKILL_CATEGORIES.map((category: SkillCategory, idx: number) => (
              <div key={idx}>
                <p className="font-semibold text-white">{category.name}</p>
                <p className="text-gray-400">{category.items.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== CARTE FORMATION ==================== */}
        <div className="rounded-lg p-4 sm:p-6 order-4 sm:order-4 lg:order-4" style={{ backgroundColor: "#262626" }}>
          <div className="mb-4 flex items-center gap-3">
            <Image src="/icons/bento/book.svg" alt="Icône formation" width={24} height={24} className="brightness-0 invert" />
            <h3 className="text-lg sm:text-xl font-bold text-white">Formation</h3>
          </div>
          <div className="space-y-3 text-xs sm:text-sm text-gray-400">
            {EDUCATION.map((edu: EducationItem, idx: number) => (
              <div key={idx}>
                <p className="font-semibold text-white">{edu.diploma}</p>
                <p className="text-gray-400">
                  {edu.school} ({edu.year})
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== CARTE CONTACT ==================== */}
        <div
          className="rounded-lg p-4 sm:p-6 lg:p-5 sm:col-span-2 lg:col-span-1 lg:col-start-3 lg:row-span-2 lg:row-start-1 flex flex-col order-last sm:order-last"
          style={{ backgroundColor: "#262626" }}
        >
          <div className="mb-4 lg:mb-5 flex items-center gap-3">
            <Image src="/icons/bento/mail.svg" alt="Icône contact" width={24} height={24} className="brightness-0 invert" />
            <h3 className="text-lg sm:text-xl font-bold text-white">Contact</h3>
          </div>
          <div className="flex flex-col gap-4 sm:gap-4 sm:grid sm:grid-cols-3 lg:grid-cols-1 lg:flex lg:flex-col flex-1 lg:gap-6 lg:justify-center">
            {/* Email */}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-3 rounded-lg p-3 lg:p-4 transition-all hover:bg-gray-700/80 hover:scale-[1.02] border border-gray-700/50 lg:border-gray-700/30"
              aria-label={`Envoyer un email à ${CONTACT_INFO.email}`}
            >
              <div className="flex-shrink-0 w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center rounded-lg">
                <Image src="/icons/contact/mailopen.svg" alt="Email" width={20} height={20} className="brightness-0 invert" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-300 text-sm lg:text-base mb-0.5">Email</p>
                <p className="text-xs lg:text-sm text-gray-400 truncate">{CONTACT_INFO.email}</p>
              </div>
            </a>
            {/* GitHub */}
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg p-3 lg:p-4 transition-all hover:bg-gray-700/80 hover:scale-[1.02] border border-gray-700/50 lg:border-gray-700/30"
              aria-label="Visiter le profil GitHub"
            >
              <div className="flex-shrink-0 w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center rounded-lg">
                <Image src="/icons/contact/github.svg" alt="GitHub" width={20} height={20} className="brightness-0 invert" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-300 text-sm lg:text-base mb-0.5">GitHub</p>
                <p className="text-xs lg:text-sm text-gray-400 truncate">@noahwojciechowski</p>
              </div>
            </a>
            {/* LinkedIn */}
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg p-3 lg:p-4 transition-all hover:bg-gray-700/80 hover:scale-[1.02] border border-gray-700/50 lg:border-gray-700/30"
              aria-label="Visiter le profil LinkedIn"
            >
              <div className="flex-shrink-0 w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center rounded-lg">
                <Image src="/icons/contact/linkedin.svg" alt="LinkedIn" width={20} height={20} className="brightness-0 invert" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-300 text-sm lg:text-base mb-0.5">LinkedIn</p>
                <p className="text-xs lg:text-sm text-gray-400 truncate">noahwojciechowski</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
