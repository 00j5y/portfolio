@AGENTS.md

# Portfolio — Jay L'héronde

## Contexte

Portfolio personnel de Jay L'héronde, étudiant en BUT 2 informatique, à la recherche d'une alternance.
Objectif : se mettre en valeur auprès de recruteurs techniques qui cliquent depuis son CV.

## Stack technique

- **Framework** : Next.js 16 + React 19
- **Styles** : Tailwind CSS 4
- **Animations** : Framer Motion
- **Icônes & logos** : react-icons
- **Police** : Geist (déjà incluse dans Next.js)
- **Package manager** : bun (toujours `bun add`, jamais npm/yarn)

## Design

- **Thème** : clair (light mode uniquement)
- **Couleur principale** : violet
- Minimaliste mais moderne, animations subtiles

## Infrastructure

- **Repo GitHub** : git@github.com:00j5y/portfolio.git
- **Déploiement** : Vercel — la branche `main` est la prod

## Workflow Git

1. Créer une branche par feature (`git checkout -b feat/nom-feature`)
2. Commiter les changements
3. Pusher la branche
4. **Ne jamais merger** — c'est Jay qui review et merge via Pull Request sur GitHub

## Conventions de commit

Format : `{TYPE} [SUJET] description`

**Types :**
- `ci` — devops (github actions)
- `feat` — nouvelle fonctionnalité
- `fix` — correction de bug
- `perf` — optimisation
- `refactor` — modification de code
- `style` — lisibilité (noms de variables, indentation)
- `docs` — documentation
- `test` — tests
- `build` — système de build

**Sujets :**
- `add` — ajout
- `remove` — suppression
- `change` — modification
- `update` — mise à jour

**Exemples :**
```
{FEAT} [ADD] parsing des fichiers : uniquement les .s
{FIX} [CHANGE] chargeur de config : bug fichier vide
{BUILD} [ADD] Makefile
```

> La description doit être rédigée en français.

## Agents

- **Chef de projet** — planifie, découpe en tâches, coordonne
- **Coder (expert React/Next.js)** — implémente le code
- **Debugger** — diagnostique et corrige les erreurs

## Structure du portfolio (sections dans l'ordre)

1. **Hero** — Prénom + NOM avec effet typewriter et curseur clignotant, hook accrocheur
2. **À propos** — Études (BUT 2 info), passion pour l'informatique, investissement dans le dev
3. **Stack** — Bandeau défilant avec logos des technologies utilisées
4. **Compétences** — Développement, automatisation IA, etc.
5. **Projets** — Présentation en défilement, format ludique pour garder l'attention
6. **Expériences** — Expériences pro informatique + jobs d'été
7. **Contact** — Email, LinkedIn, GitHub, Discord, Telegram, CV téléchargeable

Entre chaque section : **CTA** pour inciter les recruteurs à passer à l'action.
