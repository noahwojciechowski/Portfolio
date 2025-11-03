/**
 * Hook personnalisé pour gérer les animations de révélation au scroll
 * 
 * Ajoute des classes CSS pour animer l'apparition d'éléments lors du scroll.
 * Utilisé pour créer des effets de fade-in et slide-up progressifs.
 * 
 * @param delay - Délai en millisecondes avant d'activer l'animation (défaut: 20ms)
 * @returns État mounted indiquant si l'animation doit être activée
 * 
 * @example
 * const mounted = useRevealAnimation();
 * return (
 *   <div className={mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}>
 *     Contenu animé
 *   </div>
 * );
 */

import { useState, useEffect } from "react";

export function useRevealAnimation(delay: number = 20): boolean {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Petit délai pour éviter les animations lors du SSR
    const timer = setTimeout(() => setIsMounted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return isMounted;
}



