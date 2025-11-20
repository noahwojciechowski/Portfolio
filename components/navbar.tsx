/**
 * Navbar - Barre de navigation fixe
 * 
 * Navigation flottante en bas de page avec :
 * - Détection automatique de la section active via IntersectionObserver
 * - Liens vers les sections principales
 * - Liens vers réseaux sociaux
 * - Animations au hover/active
 * 
 * @example
 * <Navbar />
 */

"use client";

import { useEffect, useState, useRef } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useRevealAnimation } from "@/lib/hooks/useRevealAnimation";
import { CONTACT_INFO } from "@/lib/data/about-data";
import { Home, Code2, FolderOpen, User, Mail } from "lucide-react";
import Image from "next/image";

type NavKey = "home" | "skills" | "projects" | "about" | "contact";

interface NavItem {
  key: NavKey;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { key: "home", label: "Accueil", icon: Home, href: "#home" },
  { key: "skills", label: "Compétences", icon: Code2, href: "#skills" },
  { key: "projects", label: "Projets", icon: FolderOpen, href: "#projects" },
  { key: "about", label: "À propos", icon: User, href: "#about" },
  { key: "contact", label: "Contact", icon: Mail, href: "#contact" },
];

/**
 * Hook personnalisé pour gérer la détection de section active
 * Utilise IntersectionObserver pour détecter quelle section est visible
 */
function useActiveSection() {
  const [activeSection, setActiveSection] = useState<NavKey>("home");
  const hasScrolledRef = useRef(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    /**
     * Crée un IntersectionObserver adapté à la taille d'écran
     * Mobile: threshold plus bas, rootMargin ajusté
     * Desktop: threshold plus élevé
     */
    const createObserver = () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      const isMobile = window.innerWidth < 1024;
      observerRef.current = new IntersectionObserver(
        (entries) => {
          // Trouve la section la plus visible parmi celles intersectées
          type MostVisible = { id: NavKey; ratio: number };
          let mostVisible: MostVisible | null = null;

          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0) {
              const id = entry.target.getAttribute("id") as NavKey | null;
              if (id && (!mostVisible || entry.intersectionRatio > mostVisible.ratio)) {
                mostVisible = { id, ratio: entry.intersectionRatio };
              }
            }
          });

          if (mostVisible !== null) {
            setActiveSection((mostVisible as MostVisible).id);
          }
        },
        {
          root: null,
          threshold: isMobile ? [0.1, 0.2, 0.3, 0.4, 0.5] : 0.6,
          rootMargin: isMobile ? "-10% 0px -60% 0px" : "0px",
        }
      );

      return observerRef.current;
    };

    createObserver();

    // Reconstruire l'observer lors du resize
    const handleResize = () => {
      createObserver();
      if (hasScrolledRef.current && observerRef.current) {
        const sections = NAV_ITEMS.map((n) => document.querySelector(n.href)).filter(Boolean) as Element[];
        sections.forEach((s) => observerRef.current?.observe(s));
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Attacher les sections à observer après le premier scroll
  useEffect(() => {
    if (!observerRef.current) return;

    const handleScroll = () => {
      if (!hasScrolledRef.current && observerRef.current) {
        hasScrolledRef.current = true;
        const sections = NAV_ITEMS.map((n) => document.querySelector(n.href)).filter(Boolean) as Element[];
        sections.forEach((s) => observerRef.current?.observe(s));
      }
    };

    window.addEventListener("scroll", handleScroll, { once: true });

    // Délai de sécurité pour attacher les sections
    const timeoutId = setTimeout(() => {
      if (!hasScrolledRef.current && observerRef.current) {
        hasScrolledRef.current = true;
        const sections = NAV_ITEMS.map((n) => document.querySelector(n.href)).filter(Boolean) as Element[];
        sections.forEach((s) => observerRef.current?.observe(s));
      }
    }, 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
      if (observerRef.current) {
        const sections = NAV_ITEMS.map((n) => document.querySelector(n.href)).filter(Boolean) as Element[];
        sections.forEach((s) => observerRef.current?.unobserve(s));
      }
    };
  }, []);

  return activeSection;
}

export default function Navbar() {
  const activeSection = useActiveSection();
  const isMounted = useRevealAnimation();
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  /**
   * Gère le clic sur un lien de navigation
   * Scroll vers la section cible avec comportement smooth
   */
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "auto", block: "start" });
  };

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center transition-all duration-700 ease-out ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
    >
      <div className="pointer-events-auto flex items-center gap-3 rounded-2xl border bg-background/60 px-3 py-2 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out hover:scale-x-105">
        <TooltipProvider delayDuration={700}>
          {/* ==================== NAVIGATION ITEMS ==================== */}
          {NAV_ITEMS.map(({ key, label, icon: Icon, href }) => {
            const isActive = activeSection === key;
            return (
              <Tooltip key={key}>
                <TooltipTrigger asChild>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    onMouseEnter={() => setHoveredKey(key)}
                    onMouseLeave={() => setHoveredKey(null)}
                    aria-label={label}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-md transition-all duration-300 ease-out ${isActive
                      ? "bg-primary text-primary-foreground scale-110 lg:scale-100 z-10"
                      : "text-muted-foreground scale-90 lg:scale-100"
                      } ${hoveredKey === key
                        ? "lg:scale-125 lg:bg-accent/80 lg:shadow-lg lg:-translate-y-0.5 lg:z-10"
                        : hoveredKey && hoveredKey !== key
                          ? "lg:opacity-50 lg:scale-95"
                          : "lg:hover:bg-accent lg:hover:scale-105"
                      }`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top">{label}</TooltipContent>
              </Tooltip>
            );
          })}

          {/* ==================== SEPARATOR ==================== */}
          <div className="mx-1 h-6 w-px bg-border" />

          {/* ==================== SOCIAL LINKS ==================== */}
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                onMouseEnter={() => setHoveredKey("github")}
                onMouseLeave={() => setHoveredKey(null)}
                className={`inline-flex h-10 w-10 items-center justify-center rounded-md transition-all duration-300 ease-out ${hoveredKey === "github"
                  ? "scale-125 bg-accent/80 shadow-lg -translate-y-0.5 z-10"
                  : hoveredKey && hoveredKey !== "github"
                    ? "opacity-50 scale-95"
                    : "hover:bg-accent hover:scale-105"
                  }`}
              >
                <Image src="/icons/contact/github.svg" alt="GitHub" width={20} height={20} className="brightness-0 invert" />
              </a>
            </TooltipTrigger>
            <TooltipContent side="top">GitHub</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                onMouseEnter={() => setHoveredKey("linkedin")}
                onMouseLeave={() => setHoveredKey(null)}
                className={`inline-flex h-10 w-10 items-center justify-center rounded-md transition-all duration-300 ease-out ${hoveredKey === "linkedin"
                  ? "scale-125 bg-accent/80 shadow-lg -translate-y-0.5 z-10"
                  : hoveredKey && hoveredKey !== "linkedin"
                    ? "opacity-50 scale-95"
                    : "hover:bg-accent hover:scale-105"
                  }`}
              >
                <Image src="/icons/contact/linkedin.svg" alt="LinkedIn" width={20} height={20} className="brightness-0 invert" />
              </a>
            </TooltipTrigger>
            <TooltipContent side="top">LinkedIn</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
