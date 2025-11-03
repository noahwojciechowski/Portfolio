# Portfolio • Noah Wojciechowski

Portfolio personnel développé avec Next.js, React et TypeScript. Présente mes projets, compétences et un mode About interactif (Terminal/Bento).

## 🚀 Démarrage

Prérequis: Node 18+.

```bash
npm install
npm run dev
# http://localhost:3000
```

## 📦 Build & Production

```bash
npm run build
npm start
```

## 📁 Structure du projet

Le code applicatif principal est dans `app/` (App Router). Les composants et données sont organisés ainsi:

```
app/
  layout.tsx
  page.tsx

components/
  hero.tsx           # Section d’accueil
  skills.tsx         # Section compétences
  projects.tsx       # Section projets (carrousel + modale)
  about.tsx          # Section à propos (Terminal/Bento)
  navbar.tsx         # Barre de navigation flottante
  footer.tsx         # Pied de page
  scroll-to-top.tsx  # Scroll en haut au chargement
  ui/                # Composants UI réutilisables (button, badge, dialog...)

lib/
  utils.ts           # helpers utilitaires (cn)
  hooks/             # hooks custom
    useRevealAnimation.ts
    useTerminal.ts
  data/              # données centralisées
    index.ts
    projects.ts
    about-data.ts
    skills-data.ts
    terminal-commands.ts
```

## 🧠 Points clés d’implémentation

- About propose 2 vues: Terminal (commandes depuis `lib/data/terminal-commands.ts`) et Bento.
- Projets chargent les images optimisées avec `next/image` et affichent une modale détaillée.
- Compétences affichées via `HoverEffect` et `next/image` pour les icônes.
- `Navbar` détecte la section active via `IntersectionObserver`.
- Animations d’apparition gérées via `useRevealAnimation`.

## 🧹 Qualité & Conventions

- TypeScript strict sur les hooks/props clés.
- Nommage cohérent: PascalCase (composants), camelCase (fonctions/variables), préfixes is/has pour booléens.
- Commentaires JSDoc sur composants/logiciels non triviaux.
- Imports ordonnés: Framework → Librairies → Composants → Hooks → Data/Utils → Styles.

## 🛠️ Scripts

```bash
npm run dev     # Démarrage dev
npm run lint    # Lint ESLint
npm run build   # Build production
npm run start   # Démarrage production
```

## 📚 Technologies

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui (Dialog, Tooltip, Button, etc.)
- Embla Carousel

## 📝 Modification du contenu

- Projets: `lib/data/projects.ts`
- Compétences/icônes: `lib/data/skills-data.ts`
- Données About (Bento): `lib/data/about-data.ts`
- Commandes du terminal: `lib/data/terminal-commands.ts`

## 🔍 Checklist de validation

- [x] Lint sans erreurs
- [x] Build OK
- [x] Navigation/sections fonctionnelles
- [x] Images optimisées (`next/image`)
- [x] Responsive (mobile/tablette/desktop)

## 📦 Déploiement

Recommandé: Vercel.

```bash
npm run build
npm run start
```

Configurez les domaines/URLs si nécessaire dans `next.config.ts` (images externes, etc.).
