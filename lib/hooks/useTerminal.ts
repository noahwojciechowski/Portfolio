/**
 * Hook personnalisé pour gérer la logique du terminal interactif
 * 
 * Gère l'historique des commandes, l'exécution et l'affichage des résultats.
 * Utilisé dans le composant About en mode Terminal.
 * 
 * @example
 * const { log, input, setInput, handleSubmit } = useTerminal();
 */

import { useState, useRef, useEffect } from "react";
import { TERMINAL_COMMANDS, INITIAL_TERMINAL_MESSAGE } from "@/lib/data/terminal-commands";

export type LogEntry = {
  type: "input" | "output";
  content: string | React.ReactNode;
};

interface UseTerminalReturn {
  log: LogEntry[];
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  outputRef: React.RefObject<HTMLDivElement | null>;
}

export function useTerminal(): UseTerminalReturn {
  const [log, setLog] = useState<LogEntry[]>([
    { type: "output", content: INITIAL_TERMINAL_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const outputRef = useRef<HTMLDivElement | null>(null);

  /**
   * Scroll automatique vers la sortie la plus récente
   * Ne s'active que si l'historique contient plus d'un élément
   */
  useEffect(() => {
    if (log.length > 1) {
      outputRef.current?.scrollIntoView({ behavior: "auto", block: "nearest" });
    }
  }, [log]);

  /**
   * Gère la soumission d'une commande
   * Ajoute la commande à l'historique, exécute la commande et affiche le résultat
   * 
   * @param e - Event de soumission du formulaire
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    // Ajouter la commande saisie à l'historique
    setLog((prev) => [...prev, { type: "input", content: trimmedInput }]);

    // Traiter la commande
    if (trimmedInput === "clear") {
      // Réinitialiser l'historique
      setLog([{ type: "output", content: INITIAL_TERMINAL_MESSAGE }]);
    } else if (TERMINAL_COMMANDS[trimmedInput]) {
      // Afficher la sortie de la commande
      setLog((prev) => [
        ...prev,
        { type: "output", content: TERMINAL_COMMANDS[trimmedInput].output },
      ]);
    } else {
      // Commande non reconnue
      setLog((prev) => [
        ...prev,
        {
          type: "output",
          content: "Commande non reconnue. Tapez 'help' pour voir les commandes disponibles.",
        },
      ]);
    }

    setInput("");
  };

  return {
    log,
    input,
    setInput,
    handleSubmit,
    inputRef,
    outputRef,
  };
}



