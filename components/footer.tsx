/**
 * Footer - Pied de page
 * 
 * Affiche les informations de contact, navigation et réseaux sociaux.
 * Section finale du portfolio avec copyright.
 * 
 * @example
 * <Footer />
 */

import { Github, Linkedin } from "lucide-react";
import { CONTACT_INFO } from "@/lib/data/about-data";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ==================== MAIN CONTENT ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Colonne 1 : Informations personnelles */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-2 text-white">Noah Wojciechowski</h3>
            <p className="text-sm text-gray-400">Développeur Web Junior</p>
          </div>

          {/* Colonne 2 : Navigation */}
          <div className="text-center">
            <h4 className="font-semibold mb-3 text-white">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Compétences
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  À propos
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Réseaux sociaux */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-3 text-white">Réseaux</h4>
            <div className="flex gap-4 justify-center md:justify-end">
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* ==================== COPYRIGHT ==================== */}
        <div className="text-center pt-8 border-t border-zinc-800">
          <p className="text-sm text-gray-500">© 2025 Noah Wojciechowski. Tous droits réservés.</p>
          <p className="text-xs text-gray-600 mt-2">Fait avec React, Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
