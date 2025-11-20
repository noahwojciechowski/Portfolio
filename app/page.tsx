/**
 * Page principale du portfolio
 * 
 * Assemble toutes les sections principales :
 * - Hero (accueil)
 * - Skills (compétences)
 * - Projects (projets)
 * - About (à propos)
 * - Lien vers CV
 * 
 * @example
 * // Utilisé automatiquement par Next.js App Router
 */

import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";

const CV_PATH = "/cv-livecampus-noah-wojciechowski.pdf";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      {/* ==================== CV LINK SECTION ==================== */}
      <div className="flex justify-center py-12 px-4">
        <a
          href={CV_PATH}
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border-2 border-white/30 bg-white/5 px-6 sm:px-8 py-3 sm:py-4 text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-black min-h-[44px] w-full sm:w-auto max-w-xs sm:max-w-none justify-center text-sm sm:text-base"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Télécharger le CV"
        >
          <span className="relative z-10 font-semibold">Voir mon CV</span>
          <svg
            className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </main>
  );
}
