/**
 * Contact - Section de contact
 * 
 * Formulaire de contact permettant d'envoyer un message.
 * Note: Actuellement en mode démo, nécessite intégration backend pour fonctionnement complet.
 * 
 * @example
 * <Contact />
 */

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  /**
   * Gère la soumission du formulaire
   * Affiche un message de confirmation (mode démo)
   * TODO: Intégrer avec API backend pour envoi réel d'emails
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Réinitialiser le message après 3 secondes
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <h2 className="text-center text-3xl font-bold">Contact</h2>
      <div className="mx-auto mt-8 max-w-xl px-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm">
              Nom
            </label>
            <Input id="name" required placeholder="Votre nom" />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm">
              Email
            </label>
            <Input id="email" required type="email" placeholder="votre@email.com" />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm">
              Message
            </label>
            <Textarea id="message" required rows={5} placeholder="Votre message" />
          </div>
          <Button type="submit" className="min-h-[44px] w-full">
            Envoyer
          </Button>
          {isSubmitted ? (
            <p className="text-sm text-green-500">Message envoyé (exemple) ✔</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
