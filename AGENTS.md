# portfolio-website — OpenCode Agent Context

This file is read by OpenCode automatically when started in this directory. It tells the coding agent how to behave in this repo.

## What This Project Is

A modern multi-page portfolio site for **Diepreye Charles-Daniel (DiepreyeCD / davephoenix360)**. Optimized for GitHub Pages hosting with a custom domain.

## Stack

- Vite 5 + React 18 + TypeScript 5
- Tailwind CSS 3 (utility-first styling)
- React Router 6 (HashRouter for Pages-friendly routing)
- Framer Motion 11 (animations)
- Three.js + @react-three/fiber + @react-three/drei (3D scenes)
- ESLint + Prettier (linting/formatting)

## File Layout

```
portfolio-website/
├── index.html                 # Vite entry
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
├── .eslintrc.cjs
├── .prettierrc
├── public/
│   ├── CNAME                  # Custom domain for GH Pages
│   └── assets/                # Static images, PDFs, resume placeholder
└── src/
    ├── data/                  # Single source of truth for profile, projects, experience, skills
    ├── pages/                 # Home, Projects, Experience, Skills, About, Contact
    ├── components/            # Nav, cards, modal, toggles
    ├── App.tsx
    └── main.tsx
```

## Architecture Rules

### DO

- Use Tailwind utility classes — keep CSS-in-JS / inline styles minimal
- Put page-specific data in `src/data/` (single source of truth)
- Use HashRouter (not BrowserRouter) for Pages compatibility
- Add new pages in `src/pages/` + register in `App.tsx`
- Use Framer Motion for animations (already a dep)
- Test Lighthouse score locally before committing

### DON'T

- Don't add new heavy runtime dependencies without justification (Lighthouse matters)
- Don't use BrowserRouter (breaks on GH Pages refresh)
- Don't add state management libraries (Zustand, Redux, etc.) — this site is simple enough with React state
- Don't add a backend — pure static site
- Don't add analytics/tracking without explicit user approval
- Don't bump major React/Vite versions without a clean test pass

## Commands

```bash
# Install
npm install

# Dev
npm run dev                   # Vite dev server (HMR)

# Lint
npm run lint                  # ESLint, --max-warnings=0

# Build
npm run build                 # tsc -b && vite build → dist/

# Preview production build
npm run preview               # Serve dist/ locally

# Typecheck
npx tsc -b
```

## Styling Conventions

- Tailwind utility classes (no custom CSS unless absolutely needed)
- Responsive-first: mobile breakpoints (sm/md/lg) — start from mobile
- Color palette: defined in `tailwind.config.ts` (extend the theme)
- Avoid inline styles except for dynamic values (e.g., transform from state)

## Common Tasks

| Task | Approach |
|---|---|
| Add new page | Create `src/pages/<Name>.tsx`, register in `App.tsx`, add route |
| Update project info | Edit `src/data/projects.ts` |
| Update experience | Edit `src/data/experience.ts` |
| Update skills | Edit `src/data/skills.ts` |
| Add animation | Use Framer Motion (`motion.div`, etc.) |
| Add 3D scene | Use `@react-three/fiber` components in `src/components/` |

## Anti-Patterns

- Don't commit `node_modules/` or `dist/` (already in `.gitignore`)
- Don't introduce styled-components or emotion (we use Tailwind)
- Don't add a service worker / PWA config without checking with user
- Don't break the GH Pages deploy by using absolute paths (use HashRouter)

## Current Status (2026-07-04)

- Live at the custom domain (per README)
- Recent commit `2c537fd` removed a stray 0-byte file
- Recent commit `ea4ef75` had three quick wins on the live site
- No active feature branch open

## Reference

- `README.md` in repo root — quickstart + structure
- `dist/` — last build output (regenerated on `npm run build`)
- Vault: `Projects/portfolio-website.md` — broader project context