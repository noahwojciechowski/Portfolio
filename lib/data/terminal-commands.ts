/**
 * Commandes disponibles dans le terminal interactif
 * Version améliorée avec couleurs, emojis et easter eggs
 */

import React from "react";

export interface TerminalCommand {
  description: string;
  output: string | React.ReactNode;
}

/**
 * Liste des commandes terminal avec leurs sorties
 * Utilisé dans la vue Terminal du composant About
 */
export const TERMINAL_COMMANDS: Record<string, TerminalCommand> = {
  help: {
    description: "Affiche les commandes disponibles",
    output: React.createElement(
      "div",
      { className: "space-y-2" },
      React.createElement("div", { className: "text-cyan-400 font-mono text-sm" }, "╭─────────────────────────────────────────╮"),
      React.createElement("div", { className: "text-cyan-400 font-mono text-sm" }, "│   TERMINAL INTERACTIF - AIDE         │"),
      React.createElement("div", { className: "text-cyan-400 font-mono text-sm" }, "╰─────────────────────────────────────────╯"),
      React.createElement("div", { className: "mt-3" }),
      React.createElement("div", { className: "text-green-400 font-semibold" }, " Navigation & Info"),
      React.createElement("div", { className: "ml-2 space-y-1 text-gray-300" },
        React.createElement("div", null, "→ about    |   Qui suis-je ?"),
        React.createElement("div", null, "→ skills   | Mes compétences techniques"),
        React.createElement("div", null, "→ experience | Parcours professionnel"),
        React.createElement("div", null, "→ formations | Mon cursus"),
        React.createElement("div", null, "→ contact    | Me contacter")
      ),

      React.createElement("div", { className: "mt-3" }),
      React.createElement("div", { className: "text-yellow-400 text-sm" }, " Astuce: Tapez 'clear' pour nettoyer le terminal")
    ),
  },

  about: {
    description: "Informations personnelles",
    output: React.createElement(
      "div",
      { className: "space-y-2" },
      React.createElement("div", { className: "text-cyan-400 font-semibold" }, " À propos de moi"),
      React.createElement("div", { className: "text-gray-300" },
        "Développeur web junior passionné par la création d'expériences numériques modernes et intuitives. Autodidacte curieux, j'apprends vite et j'aime résoudre des problèmes concrets avec du code propre."
      ),
      React.createElement("div", { className: "mt-2 text-gray-300" },
        "Actuellement en recherche d'alternance pour Janvier 2026, je suis prêt à m'investir dans des projets challengeants et à grandir au sein d'une équipe technique."
      ),
      React.createElement("div", { className: "mt-3 text-green-400 text-sm" }, " Disponible pour opportunités en alternance !")
    ),
  },

  experience: {
    description: "Expériences professionnelles et projets",
    output: React.createElement(
      "div",
      { className: "space-y-3" },
      React.createElement("div", { className: "text-cyan-400 font-semibold" }, " Expériences & Projets"),

      React.createElement("div", { className: "text-yellow-400 text-sm font-semibold" }, "Stages"),
      React.createElement("div", { className: "ml-2 space-y-1 text-gray-300 text-sm" },
        React.createElement("div", null, "• ASI Informatique (2024) - Maintenance informatique et réseaux"),
        React.createElement("div", null, "• Atlantique Habitation (2021) - Support technique entreprise")
      ),

      React.createElement("div", { className: "text-purple-400 text-sm font-semibold mt-2" }, "Projets récents"),
      React.createElement("div", { className: "ml-2 space-y-1 text-gray-300 text-sm" },
        React.createElement("div", null, "• Nami Kumo - Site restaurant avec réservation (React 19, TypeScript)"),
        React.createElement("div", null, "• QuizMaster - Bot Discord de quiz interactifs (JavaScript, Discord.js)"),
        React.createElement("div", null, "• TechVault - E-commerce Tech & Gaming (React, Next.js)"),
        React.createElement("div", null, "• Portfolio - Portfolio moderne avec terminal interactif (Next.js)")
      ),

      React.createElement("div", { className: "text-green-400 text-sm mt-2" }, " Tapez 'projects' dans la navbar pour voir les détails !")
    ),
  },

  skills: {
    description: "Technologies maîtrisées",
    output: React.createElement(
      "div",
      { className: "space-y-3" },
      React.createElement("div", { className: "text-cyan-400 font-semibold" }, " Compétences Techniques"),

      React.createElement("div", { className: "text-blue-400 text-sm font-semibold mt-2" }, " Front-end"),
      React.createElement("div", { className: "ml-2 space-y-1 text-gray-300 text-sm font-mono" },
        React.createElement("div", null, "React 19      ", React.createElement("span", { className: "text-green-400" }, "[█████░░░░░]"), " 50%"),
        React.createElement("div", null, "TypeScript    ", React.createElement("span", { className: "text-green-400" }, "[█████░░░░░]"), " 50%"),
        React.createElement("div", null, "Next.js       ", React.createElement("span", { className: "text-yellow-400" }, "[██░░░░░░░░]"), " 20%"),
        React.createElement("div", null, "Tailwind CSS  ", React.createElement("span", { className: "text-green-400" }, "[███░░░░░░░]"), " 30%"),
      ),

      React.createElement("div", { className: "text-orange-400 text-sm font-semibold mt-2" }, " Back-end"),
      React.createElement("div", { className: "ml-2 space-y-1 text-gray-300 text-sm font-mono" },
        React.createElement("div", null, "Node.js       ", React.createElement("span", { className: "text-yellow-400" }, "[████░░░░░░]"), " 40%"),
      ),

      React.createElement("div", { className: "text-gray-400 text-xs mt-3" }, " Légende: ░ = en cours | █ = maîtrisé")
    ),
  },

  formations: {
    description: "Parcours de formation",
    output: React.createElement(
      "div",
      { className: "space-y-2" },
      React.createElement("div", { className: "text-cyan-400 font-semibold" }, " Formations"),
      React.createElement("div", { className: "text-green-400 text-sm" }, " En recherche d'alternance - Développeur Full Stack - Data & Devops (LiveCampus)"),
      React.createElement("div", { className: "mt-3 space-y-1 text-gray-300 text-sm" },
        React.createElement("div", null, "• BTS C.I.E.L (2025) - Obtenu"),
        React.createElement("div", null, "• BAC Technologique STI2D Option SIN (2023) - Obtenu")
      ),
      React.createElement("div", { className: "text-yellow-400 text-sm mt-2" }, "Recherche alternance pour Janvier 2026 !")
    ),
  },

  contact: {
    description: "Coordonnées de contact",
    output: React.createElement(
      "div",
      { className: "space-y-2" },
      React.createElement("div", { className: "text-cyan-400 font-semibold" }, "Me contacter"),
      React.createElement(
        "div",
        { className: "mt-2 space-y-1.5 text-gray-300" },
        React.createElement(
          "div",
          null,
          "Email: ",
          React.createElement(
            "a",
            {
              href: "mailto:noahwski@gmail.com",
              className: "text-blue-400 hover:text-blue-300 underline",
            },
            "noahwski@gmail.com"
          )
        ),
        React.createElement(
          "div",
          null,
          "GitHub: ",
          React.createElement(
            "a",
            {
              href: "https://github.com/noahwojciechowski",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-blue-400 hover:text-blue-300 underline",
            },
            "@noahwojciechowski"
          )
        ),
        React.createElement(
          "div",
          null,
          "LinkedIn: ",
          React.createElement(
            "a",
            {
              href: "https://www.linkedin.com/in/noah-wojciechowski",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-blue-400 hover:text-blue-300 underline",
            },
            "noah-wojciechowski"
          )
        )
      ),
      React.createElement("div", { className: "text-green-400 text-sm mt-2" }, "N'hésitez pas à me contacter pour discuter d'opportunités !")
    ),
  },

  // ==================== EASTER EGGS ====================

  sudo: {
    description: "Tenter d'exécuter une commande en mode sudo",
    output: React.createElement(
      "div",
      { className: "space-y-1 font-mono text-sm" },
      React.createElement("div", { className: "text-gray-400" }, "[sudo] password pour noah: ●●●●●●●●"),
      React.createElement("div", { className: "text-red-400 mt-1" }, "noah n'est pas dans le fichier sudoers."),
      React.createElement("div", { className: "text-red-400" }, "Cet incident sera signalé. "),
      React.createElement("div", { className: "text-yellow-400 mt-2 text-xs" }, "(Mais t'inquiète, je suis pas VRAIMENT en root 😉)")
    ),
  },

  whoami: {
    description: "Affiche l'utilisateur actuel",
    output: React.createElement(
      "div",
      { className: "space-y-1" },
      React.createElement("div", { className: "text-green-400 font-mono" }, "noah"),
      React.createElement("div", { className: "text-gray-400 text-sm mt-1" }, "Mais la vraie question c'est... qui es-tu, toi ? 🤔")
    ),
  },

  date: {
    description: "Affiche la date actuelle",
    output: React.createElement(
      "div",
      { className: "text-gray-300 font-mono text-sm" },
      new Date().toLocaleString("fr-FR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    ),
  },

  hack: {
    description: "Tenter de hacker le mainframe",
    output: React.createElement(
      "div",
      { className: "space-y-1 font-mono text-sm" },
      React.createElement("div", { className: "text-green-400" }, "[████████████████████] 100%"),
      React.createElement("div", { className: "text-cyan-400" }, "Accessing mainframe..."),
      React.createElement("div", { className: "text-yellow-400" }, "Bypassing firewall..."),
      React.createElement("div", { className: "text-green-400 mt-1" }, "✓ You're in!"),
      React.createElement("div", { className: "text-gray-400 text-xs mt-2" }, "Just kidding "),
      React.createElement("div", { className: "text-blue-400 text-xs" }, "Mais bon portfolio quand même, non ? ")
    ),
  },
};

/**
 * Message initial affiché dans le terminal au chargement
 */
export const INITIAL_TERMINAL_MESSAGE = React.createElement(
  "div",
  { className: "space-y-2" },
  React.createElement("div", { className: "mt-2 text-gray-300" }, "Bonjour ! Je suis Noah, développeur passionné."),
  React.createElement("div", { className: "mt-3 space-y-1 text-gray-400 text-sm" },
    React.createElement("div", null, "Tapez 'help' pour voir les commandes"),
  ),
);
