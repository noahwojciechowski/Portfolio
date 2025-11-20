import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noah Wojciechowski - Développeur Web Junior | Portfolio",
  description:
    "Portfolio de Noah Wojciechowski, développeur web junior spécialisé en React, Next.js et TypeScript. Découvrez mes projets et contactez-moi pour des opportunités.",
  keywords: [
    "développeur web",
    "développeur web junior",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "portfolio",
    "Noah Wojciechowski",
    "front-end",
    "full-stack",
    "Tailwind CSS",
  ],
  authors: [{ name: "Noah Wojciechowski" }],
  creator: "Noah Wojciechowski",
  metadataBase: new URL("https://example.com"), // TODO: Remplacer par votre vraie URL

  // Open Graph (Facebook, LinkedIn, Discord)
  openGraph: {
    title: "Noah Wojciechowski - Développeur Web Junior",
    description:
      "Portfolio professionnel - Projets React, Next.js, TypeScript. Disponible pour des opportunités.",
    url: "https://example.com", // TODO: Remplacer par votre vraie URL
    siteName: "Noah Wojciechowski Portfolio",
    locale: "fr_FR",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary",
    title: "Noah Wojciechowski - Développeur Web Junior",
    description: "Portfolio professionnel - React, Next.js, TypeScript",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) pour le SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Noah Wojciechowski",
    jobTitle: "Développeur Web Junior",
    url: "https://example.com", // TODO: Remplacer par votre vraie URL
    sameAs: [
      "https://github.com/noahwojciechowski",
      // Ajouter LinkedIn si vous en avez un
    ],
    knowsAbout: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  };

  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
        suppressHydrationWarning
      >
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollToTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
