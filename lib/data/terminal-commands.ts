/**
 * Commandes disponibles dans le terminal interactif
 * Structure pour gérer les commandes et leurs sorties
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
    output: "Commandes disponibles : about, experience, skills, formations, contact, clear",
  },
  about: {
    description: "Informations personnelles",
    output:
      "Développeur web junior passionné par la création d'expériences numériques modernes et intuitives. Autodidacte curieux, j'apprends vite et j'aime résoudre des problèmes concrets avec du code propre.\nActuellement en recherche d'alternance pour Janvier 2026, je suis prêt à m'investir dans des projets challengeants et à grandir au sein d'une équipe technique.",
  },
  experience: {
    description: "Expériences professionnelles et projets",
    output:
      "Voici les différentes experiences professionnelles et projets réalisés durant mes études:\n  - [Stage]: ASI Informatique (2024) - Maintenance informatique et réseaux\n  - [Stage]: Atlantique Habitation (2021) - Maintenance informatique sur du matériel informatique de l'entreprise\n  - [Projet 1]: Site e-commerce avec Next.js\n  - [Projet 2]: Application web React + TypeScript",
  },
  skills: {
    description: "Technologies maîtrisées",
    output:
      "Technologies maîtrisées et/ou en cours d'apprentissage:\n- Langages: JavaScript, TypeScript, HTML/CSS\n- Frontend: React, Next.js, Vue.js\n- Backend: Node.js\n- Outils: Git, GitHub, Vercel,",
  },
  formations: {
    description: "Parcours de formation",
    output:
      "Je suis actuellement en recherche d'alternance pour une formation de développeur full stack chez LiveCampus.\n Voici les différentes formations et diplômes obtenus:\n  - [BAC]: Baccalauréat Technologique STI2D (2023)\n  - [BTS]: BTS C.I.E.L (2025)",
  },
  contact: {
    description: "Coordonnées de contact",
    output: React.createElement(
      "div",
      { className: "text-gray-300" },
      React.createElement("span", { className: "text-gray-500" }, ">_ "),
      React.createElement("span", null, "Mes coordonnées :"),
      React.createElement(
        "div",
        { className: "mt-2 space-y-1" },
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
      )
    ),
  },
};

/**
 * Message initial affiché dans le terminal au chargement
 */
export const INITIAL_TERMINAL_MESSAGE = "Tapez 'help' pour voir les commandes disponibles.";
