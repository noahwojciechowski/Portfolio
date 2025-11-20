/**
 * Contact - Section de contact
 * 
 * Formulaire de contact fonctionnel avec EmailJS pour envoyer des emails.
 * Les visiteurs peuvent envoyer un message qui arrive directement dans votre boîte mail.
 * 
 * @example
 * <Contact />
 */

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  /**
   * Gère les changements dans les champs du formulaire
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  /**
   * Gère la soumission du formulaire et l'envoi via EmailJS
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      // Vérifier que les variables d'environnement sont définies
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error("EmailJS configuration missing. Please check your .env.local file.");
        setStatus("error");
        setLoading(false);
        return;
      }

      // Envoyer l'email via EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      // Succès : afficher message et réinitialiser le formulaire
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Masquer le message de succès après 5 secondes
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setStatus("error");

      // Masquer le message d'erreur après 5 secondes
      setTimeout(() => setStatus("idle"), 5000);
    } finally {
      setLoading(false);
    }
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
            <Input
              id="name"
              required
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm">
              Email
            </label>
            <Input
              id="email"
              required
              type="email"
              placeholder="votre@email.com"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm">
              Message
            </label>
            <Textarea
              id="message"
              required
              rows={5}
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <Button type="submit" className="min-h-[44px] w-full" disabled={loading}>
            {loading ? "Envoi en cours..." : "Envoyer"}
          </Button>

          {/* Message de succès */}
          {status === "success" && (
            <div className="rounded-md bg-green-500/10 border border-green-500/20 p-3">
              <p className="text-sm text-green-400">
                ✓ Message envoyé avec succès ! Je vous répondrai bientôt.
              </p>
            </div>
          )}

          {/* Message d'erreur */}
          {status === "error" && (
            <div className="rounded-md bg-red-500/10 border border-red-500/20 p-3">
              <p className="text-sm text-red-400">
                ✗ Erreur lors de l'envoi. Vérifiez la configuration EmailJS ou réessayez.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
