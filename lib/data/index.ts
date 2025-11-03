/**
 * Point d'entrée pour toutes les données du portfolio
 * Centralise les exports pour faciliter les imports
 */

export { projects } from "./projects";
export type { Project } from "./projects";

export { TERMINAL_COMMANDS, INITIAL_TERMINAL_MESSAGE } from "./terminal-commands";
export type { TerminalCommand } from "./terminal-commands";

export {
  ABOUT_INFO,
  EXPERIENCES,
  SKILL_CATEGORIES,
  EDUCATION,
  CONTACT_INFO,
} from "./about-data";
export type { ExperienceItem, SkillCategory, EducationItem, ContactInfo } from "./about-data";

export { SKILL_ICON_MAP, SKILLS_SECTIONS } from "./skills-data";
export type { SkillsSection } from "./skills-data";



