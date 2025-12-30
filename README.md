# Portfolio Redesign (2026)

A modern, multi-page portfolio for **Diepreye Charles-Daniel (DiepreyeCD / davephoenix360)**. Built with **Vite + React + TypeScript + Tailwind**, optimized for GitHub Pages and a custom domain.

## Stack
- Vite + React 18 + TypeScript
- Tailwind CSS for styling
- React Router (HashRouter) for Pages-friendly routing
- ESLint + Prettier for linting/formatting

## Structure
- `src/data/` — single source of truth for profile, projects, experience, and skills
- `src/pages/` — individual pages (Home, Projects, Experience, Skills, About, Contact)
- `src/components/` — UI building blocks (navigation, cards, modal, toggles)
- `public/assets/` — static assets (images, resume placeholder, PDFs); `public/CNAME` keeps the custom domain in builds

## Getting started
1. Install dependencies (Node 18+ recommended):
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Lint for fast feedback:
   ```bash
   npm run lint
   ```

## Building
```bash
npm run build
```
Outputs static files to `dist/` suitable for GitHub Pages.

## Previewing the production build
```bash
npm run preview
```

## Deploying to GitHub Pages
- The project uses **HashRouter** to avoid 404s on refresh/deep links.
- `vite.config.ts` sets `base` to `/` by default (works with a custom domain). If you publish to a project subpath, export with `VITE_BASE_PATH="/REPO_NAME/"` before building.
- Ensure `public/CNAME` remains in the repo so the built `dist` includes the domain file. Do **not** remove the root `CNAME` either.

### Suggested workflow to keep production intact
1. Do all redesign work on the feature branch (`redesign-2026`).
2. When ready to switch production, build locally (`npm run build`) and verify the static output under `dist/`.
3. Deploy the new build to GitHub Pages from this branch or merge into `main` once validated. Keep `CNAME` in place to preserve the custom domain.
4. If testing Pages on a separate branch/environment, consider using the `VITE_BASE_PATH` override to avoid conflicts with the live domain.

## Content updates
- Update resume: replace `public/assets/Resume.pdf` or point `resumeUrl` in `src/data/profile.ts` to a new file.
- Edit socials, email, and about text in `src/data/profile.ts`.
- Add or tweak projects in `src/data/projects.ts` (tags power the filters and modal content).
- Update the experience timeline in `src/data/experience.ts`.
- Adjust skill groupings in `src/data/skills.ts`.

## Accessibility & UX
- Minimal palette with strong contrast, focus styles, and semantic sections.
- Dark mode toggle persisted via `localStorage`.
- Responsive grid-based layout with consistent spacing and hover/focus states.

## Notes
- Keep TODO comments in data for links/handles you want to refine later.
- Use `npm run lint` before committing to maintain consistency.
