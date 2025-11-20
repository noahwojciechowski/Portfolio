/**
 * Projects - Section "Projets"
 * 
 * Affiche les projets dans un carrousel horizontal avec navigation.
 * Chaque projet peut être cliqué pour ouvrir une modale avec les détails complets.
 * 
 * @example
 * <Projects />
 */

"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { useRevealAnimation } from "@/lib/hooks/useRevealAnimation";
import { projects } from "@/lib/data/projects";

export default function Projects() {
  const isMounted = useRevealAnimation();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  // Configuration du carrousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
    watchDrag: true,
  });

  /**
   * Gère le scroll précédent
   */
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  /**
   * Gère le scroll suivant
   */
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  /**
   * Met à jour l'état des boutons de navigation selon la position dans le carrousel
   */
  const updateScrollButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  // Écoute les changements de sélection pour mettre à jour les boutons
  useEffect(() => {
    if (!emblaApi) return;

    // Initialiser l'état des boutons après le premier render
    const initButtons = () => {
      updateScrollButtons();
    };
    // Utiliser setTimeout pour éviter l'appel synchrone dans useEffect
    setTimeout(initButtons, 0);

    emblaApi.on("select", updateScrollButtons);

    return () => {
      emblaApi.off("select", updateScrollButtons);
    };
  }, [emblaApi, updateScrollButtons]);

  return (
    <section id="projects" className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* ==================== TITLE ==================== */}
      <h2
        className={`text-center text-3xl sm:text-4xl lg:text-5xl font-bold transition-all duration-700 ease-out ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
      >
        Projets
      </h2>

      {/* ==================== CAROUSEL ==================== */}
      <div
        className={`mx-auto mt-8 lg:mt-12 max-w-7xl transition-all duration-700 ease-out ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          } delay-150`}
      >
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 lg:gap-6">
              {projects.map((project) => (
                <div key={project.title} className="min-w-0 flex-[0_0_100%] lg:flex-[0_0_calc(100%-1.5rem)]">
                  <div className="group relative">
                    {/* ==================== PROJECT IMAGE ==================== */}
                    <div className="relative aspect-video overflow-hidden rounded-xl">
                      <Image
                        src={project.image}
                        alt={`Aperçu du projet ${project.title}`}
                        fill
                        sizes="(min-width: 1024px) 960px, 100vw"
                        className="object-cover"
                        priority={false}
                      />
                    </div>
                    {/* Overlay gradient */}
                    <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90" />

                    {/* ==================== PROJECT INFO ==================== */}
                    <div className="absolute inset-x-0 bottom-0 p-4 lg:p-6">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 lg:mb-2">
                        {project.title}
                      </h3>
                      {/* Description visible uniquement sur desktop */}
                      <p className="hidden lg:block text-white/90 text-lg leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      {/* Technologies visibles uniquement sur desktop */}
                      <div className="hidden lg:flex mb-4 flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-white hover:bg-gray-300 text-black border-gray-600 rounded-md text-xs px-2 py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* ==================== MODAL TRIGGER ==================== */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="bg-gray-800 hover:bg-gray-900 text-white border-0 cursor-pointer min-h-[40px] lg:min-h-[44px] px-2 py-1.5 lg:px-4 lg:py-2 text-[10px] sm:text-xs lg:text-base w-full sm:w-auto">
                            En savoir plus →
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-6xl max-h-[90vh] mx-4 sm:mx-auto">
                          <DialogHeader>
                            <DialogTitle className="text-xl sm:text-2xl">{project.title}</DialogTitle>
                          </DialogHeader>
                          <div className="max-h-[calc(95vh-180px)] space-y-3 sm:space-y-4 overflow-y-auto pr-2">
                            {/* Image projet */}
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
                              <Image
                                src={project.image}
                                alt={`Aperçu du projet ${project.title}`}
                                fill
                                sizes="(min-width: 1024px) 960px, 100vw"
                                className="object-cover"
                                priority={false}
                              />
                            </div>
                            {/* Description */}
                            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed px-1">
                              {project.description}
                            </p>
                            {/* Technologies */}
                            <div>
                              <h4 className="font-semibold mb-2 text-xs sm:text-sm lg:text-base px-1">
                                Technologies utilisées
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                  <Badge key={tech} variant="secondary" className="text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            {/* Fonctionnalités */}
                            {project.features?.length ? (
                              <div>
                                <h4 className="font-semibold mb-2 text-xs sm:text-sm lg:text-base px-1">
                                  Fonctionnalités clés
                                </h4>
                                <ul className="list-disc pl-4 sm:pl-6 space-y-1">
                                  {project.features.map((feature) => (
                                    <li key={feature} className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}
                            {/* Détails techniques */}
                            {project.technicalDetails?.architecture && (
                              <div>
                                <h4 className="font-semibold mb-2 text-xs sm:text-sm lg:text-base px-1">Architecture</h4>
                                <ul className="list-disc pl-4 sm:pl-6 space-y-1">
                                  {project.technicalDetails.architecture.map((item, idx) => (
                                    <li key={idx} className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {project.technicalDetails?.highlights && (
                              <div>
                                <h4 className="font-semibold mb-2 text-xs sm:text-sm lg:text-base px-1">Points forts</h4>
                                <ul className="list-disc pl-4 sm:pl-6 space-y-1">
                                  {project.technicalDetails.highlights.map((item, idx) => (
                                    <li key={idx} className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {project.technicalDetails?.challenges && (
                              <div>
                                <h4 className="font-semibold mb-2 text-xs sm:text-sm lg:text-base px-1">Défis relevés</h4>
                                <ul className="list-disc pl-4 sm:pl-6 space-y-1">
                                  {project.technicalDetails.challenges.map((item, idx) => (
                                    <li key={idx} className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {/* Liens */}
                            <div className="flex flex-col sm:flex-row gap-3">
                              <Button asChild className="w-full sm:w-auto min-h-[44px]">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                  Voir le code
                                </a>
                              </Button>
                              {project.liveUrl ? (
                                <Button asChild variant="secondary" className="w-full sm:w-auto min-h-[44px]">
                                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    Demo live
                                  </a>
                                </Button>
                              ) : null}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ==================== NAVIGATION BUTTONS (Desktop only) ==================== */}
          <button
            aria-label="Projet précédent"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={`hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm p-3 shadow-lg transition-colors min-h-[44px] min-w-[44px] items-center justify-center ${canScrollPrev
              ? "bg-white/10 hover:bg-white/20 cursor-pointer"
              : "bg-white/5 cursor-not-allowed opacity-50"
              }`}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            aria-label="Projet suivant"
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={`hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm p-3 shadow-lg transition-colors min-h-[44px] min-w-[44px] items-center justify-center ${canScrollNext
              ? "bg-white/10 hover:bg-white/20 cursor-pointer"
              : "bg-white/5 cursor-not-allowed opacity-50"
              }`}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
