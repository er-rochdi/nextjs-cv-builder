# Next.js CV Builder

Un générateur de CV moderne développé avec Next.js, React, TypeScript et Tailwind CSS. L'application permet de remplir son profil professionnel, personnaliser l'apparence du CV, visualiser les changements en temps réel, sauvegarder les données localement et imprimer ou exporter le résultat en PDF via le navigateur.

## À propos

Next.js CV Builder est une application web qui permet de créer, personnaliser, prévisualiser, sauvegarder et exporter un CV professionnel directement depuis le navigateur.

## Fonctionnalités

- Éditeur de CV interactif avec aperçu en temps réel.
- Trois modèles de CV : Classique, Moderne et Élégant.
- Plusieurs couleurs d'accent personnalisables.
- Ajout et modification des informations personnelles.
- Support de la photo de profil.
- Sections complètes : profil, expériences, formations, compétences, langues et certifications.
- Ajout, suppression et réorganisation des éléments répétables.
- Sauvegarde locale dans le navigateur avec `localStorage`.
- Boutons pour enregistrer, annuler les modifications ou réinitialiser le CV.
- Impression ou export PDF avec la fonction native du navigateur.
- Interface responsive adaptée desktop et mobile.

## Comment ça fonctionne

L'application est organisée autour d'un éditeur et d'un aperçu :

1. L'utilisateur modifie ses informations dans le panneau d'édition.
2. Les données sont gardées dans un état React partagé via `CvProvider`.
3. L'aperçu se met à jour instantanément pendant la saisie.
4. Le bouton `Enregistrer` persiste les données dans `localStorage`.
5. Le bouton `Annuler les modifications` restaure la dernière version enregistrée.
6. Le bouton `Réinitialiser` supprime les données sauvegardées et recharge les données d'exemple.
7. Le bouton `Télécharger / Imprimer le CV` lance `window.print()`, ce qui permet d'imprimer ou d'enregistrer le CV en PDF.

## Technologies utilisées

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Installation

Clonez le projet :

```bash
git clone https://github.com/votre-utilisateur/nextjs-cv-builder.git
cd nextjs-cv-builder
```

Installez les dépendances :

```bash
npm install
```

Lancez le serveur de développement :

```bash
npm run dev
```

Ouvrez ensuite l'application dans le navigateur :

```text
http://localhost:3000
```

## Scripts disponibles

```bash
npm run dev
```

Lance l'application en mode développement.

```bash
npm run build
```

Crée une version de production.

```bash
npm run start
```

Démarre la version de production après un build.

```bash
npm run lint
```

Analyse le code avec ESLint.

## Structure du projet

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    cv/
      cv-app.tsx
      cv-context.tsx
      cv-editor.tsx
      cv-preview.tsx
      fields.tsx
      repeater.tsx
      templates/
  lib/
    cv/
      default-data.ts
      storage.ts
      themes.ts
      types.ts
```

## Personnalisation

- Les modèles de CV sont dans `src/components/cv/templates/`.
- Les couleurs et les informations des modèles sont dans `src/lib/cv/themes.ts`.
- Le modèle de données du CV est défini dans `src/lib/cv/types.ts`.
- La persistance locale est gérée dans `src/lib/cv/storage.ts`.

## Description courte pour GitHub

Modern CV builder built with Next.js, React, TypeScript and Tailwind CSS. Create, customize, preview, save and export a professional resume directly from the browser.
