/**
 * Hero - Section d'accueil
 * 
 * Première section visible du portfolio avec présentation personnelle,
 * boutons d'action (projets, CV) et liens vers les réseaux sociaux.
 * Inclut un fond animé avec effet grid.
 * 
 * @example
 * <Hero />
 */

"use client";

import { Button } from "@/components/ui/button";
import GridBackgroundDemo from "@/components/ui/grid-background-demo";
import { useRevealAnimation } from "@/lib/hooks/useRevealAnimation";
import { ArrowRight, Download } from "lucide-react";
import { CONTACT_INFO } from "@/lib/data/about-data";
import Image from "next/image";

const CV_PATH = "/CV_Noah_WOJCIECHOWSKI_Dev_Web.pdf";

/**
 * Gère le scroll vers une section spécifique de la page
 * @param sectionId - ID de la section à atteindre (ex: "#projects")
 */
function scrollToSection(sectionId: string) {
  const element = document.querySelector(sectionId);
  element?.scrollIntoView({ behavior: "auto", block: "start" });
}

export default function Hero() {
  const isMounted = useRevealAnimation();

  return (
    <section id="home" className="relative overflow-hidden min-h-[100dvh] flex items-center py-16 lg:py-20 pt-20 lg:pt-20">
      {/* ==================== BACKGROUND ==================== */}
      <div className="absolute inset-0 -z-10">
        <GridBackgroundDemo className="absolute inset-0 h-full w-full" />
      </div>

      {/* ==================== CONTENT ==================== */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* ==================== LEFT COLUMN: PRESENTATION ==================== */}
          <div className="flex flex-col justify-center text-center lg:text-left w-full lg:w-auto">
            {/* Titre principal */}
            <div
              className={`transition-all duration-700 ease-out will-change-transform ${
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="mr-2">👋 Je suis</span>
                <span className="text-cyan-400 block sm:inline">Noah Wojciechowski</span>
              </h1>
              <p
                className={`mt-2 text-3xl sm:text-4xl lg:text-4xl font-extrabold text-white transition-all duration-700 ease-out will-change-transform ${
                  isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                } delay-100`}
              >
                Développeur web junior
              </p>
            </div>

            {/* Boutons d'action */}
            <div
              className={`mt-6 lg:mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start transition-all duration-700 ease-out will-change-transform ${
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              } delay-200`}
            >
              <Button
                onClick={() => scrollToSection("#projects")}
                className="w-full sm:w-auto gap-2 cursor-pointer bg-[#06b6d4] text-white hover:bg-[#06b6d4]/90 border-0 min-h-[44px] px-6 py-3 text-base sm:text-sm"
              >
                Voir les projets
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto gap-2 !border-[#06b6d4] dark:!border-[#06b6d4] text-[#06b6d4] bg-[#121212] hover:bg-[#121212] min-h-[44px] px-6 py-3 text-base sm:text-sm"
              >
                <a href={CV_PATH} target="_blank" rel="noopener noreferrer">
                  Mon CV
                  <Download className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Liens réseaux sociaux */}
            <div
              className={`mt-6 flex items-center gap-4 justify-center lg:justify-start transition-all duration-700 ease-out will-change-transform ${
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              } delay-300`}
            >
              <Button asChild variant="outline" size="icon" aria-label="GitHub" className="min-h-[44px] min-w-[44px]">
                <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer">
                  <Image src="/icons/contact/github.svg" alt="GitHub" width={20} height={20} className="brightness-0 invert" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" aria-label="LinkedIn" className="min-h-[44px] min-w-[44px]">
                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer">
                  <Image src="/icons/contact/linkedin.svg" alt="LinkedIn" width={20} height={20} className="brightness-0 invert" />
                </a>
              </Button>
            </div>
          </div>

          {/* ==================== RIGHT COLUMN: AVATAR PLACEHOLDER ==================== */}
          <div
            className={`relative hidden md:flex items-center justify-center lg:justify-end transition-all duration-700 ease-out will-change-transform ${
              isMounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-[0.98]"
            } delay-200`}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-cyan-500/20 to-cyan-500/20 blur-2xl" />
            <div className="relative rounded-full p-[4px] bg-gradient-to-tr from-cyan-500 via-cyan-500 to-cyan-500">
              <div className="size-[240px] sm:size-[300px] lg:size-[360px] rounded-full bg-background overflow-hidden">
                <Image
                  src="/profilepic.jpg"
                  alt="Noah Wojciechowski"
                  width={360}
                  height={360}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
