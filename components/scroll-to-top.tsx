"use client";

import { useEffect } from "react";

export function ScrollToTop() {
  useEffect(() => {
    // Scroll en haut seulement au chargement initial/refresh de la page
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return null;
}

