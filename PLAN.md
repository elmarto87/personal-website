# Implementation Plan — martoduran.co

Session-by-session task tracker. Mark tasks ✅ when complete. Update "Current Session Notes" at the start of each session for token-efficient context.

---

## Current Session Notes
> _Update this block at the start of each session. Paste what was last completed, any blockers, and the next priority._

**Last completed:** Phases 1–6 core complete. Copy refined (copywriting skill). Full design polish (frontend-design plugin). DNS live, SSL pending.
**Next up:** Phase 7 — profile photo, projects content, mobile audit, SSL confirmation.
**Pending user action:** Provide profile photo + project descriptions to finish the site.

---

## Phase 1: Project Scaffold & Config ✅

- ✅ Vite + React + Tailwind CSS scaffolded
- ✅ React Router (HashRouter), all design tokens, Beaumont fonts
- ✅ Repo created: `https://github.com/elmarto87/personal-website`
- ✅ GitHub Actions deploy workflow (`.github/workflows/deploy.yml`)
- ✅ `public/CNAME` with `martoduran.co`
- ✅ GitHub Pages live at `https://elmarto87.github.io/personal-website/`

**DNS:**
- ✅ 4 A records + CNAME configured and propagated
- ✅ martoduran.co pointing to GitHub Pages
- ⏳ HTTPS/SSL — GitHub certificate still provisioning (auto, no action needed)

---

## Phase 2: Design System & Shared Components ✅

- ✅ `src/styles/tokens.css` — Beaumont-derived CSS custom properties
- ✅ `tailwind.config.js` with custom colors, fonts, spacing
- ✅ Local woff2 fonts (Albert Sans + STIX Two Text) via `@font-face`
- ✅ `Header.jsx`, `Footer.jsx`, `DiamondSeparator.jsx`, `Layout.jsx`

---

## Phase 3: Content Data Files ✅

- ✅ `src/data/career.js` — full work history from CV
- ✅ `src/data/education.js`
- ✅ `src/data/skills.js`
- ✅ `src/data/projects.js` — empty, shape defined

---

## Phase 4: Home Page ✅

- ✅ STIX Two Text italic hero name
- ✅ Tagline: demand gen → organic search → product arc
- ✅ Bio (Option B: finance → marketing → product → Uber)
- ✅ Uppercase tracked CTAs with → arrow
- ✅ Staggered fade-up animation (5 elements)

---

## Phase 5: About Page ✅

- ✅ Two-column bio (1/3 photo + 2/3 text), collapses mobile
- ✅ Skills chips with hover
- ✅ Timeline: 2-col grid (years left, content right), square dots
- ✅ Education section
- ✅ Section headings: 11px uppercase editorial labels
- [ ] **Replace photo placeholder** — add file to `public/assets/images/` and update `About.jsx` img src

---

## Phase 6: Projects Page

- ✅ Placeholder empty state
- ✅ ProjectCard layout ready
- [ ] **Populate `src/data/projects.js`** — user to provide project descriptions

---

## Phase 7: Polish & Launch

- ✅ SEO meta tags + Open Graph + Twitter Card
- ✅ favicon.svg
- ✅ DNS propagated (martoduran.co live)
- [ ] **Profile photo** (user action — provide image file)
- [ ] **Projects content** (user action — provide descriptions)
- [ ] Mobile responsiveness audit
- [ ] Accessibility check (keyboard nav, alt text, color contrast)
- [ ] SSL confirmation (auto-provisioning, check back in a few hours)
- [ ] Performance check (Lighthouse)

---

## Decisions Log

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Routing | HashRouter | Avoids 404 issues on GitHub Pages with no server config |
| Styling | Tailwind + CSS tokens | Beaumont tokens as CSS vars; Tailwind for utilities |
| Font loading | Local woff2 | Better performance; no external dependency |
| Build/deploy | Vite + `peaceiris/actions-gh-pages@v4` | Deploys `dist/` to `gh-pages` branch on push to `main` |
| Design polish | `frontend-design` plugin | Installed from `claude-code-plugins` marketplace |

---

## Plugins Installed

| Plugin | Source | Purpose |
|--------|--------|---------|
| `frontend-design` | `claude-code-plugins` marketplace | Production-grade UI polish for pages and components |

---

## Notes for Future Sessions

- **Profile photo** → drop file in `public/assets/images/martin.jpg` (or .png), then update the placeholder `<div>` in `About.jsx` to `<img src="/assets/images/martin.jpg" alt="Martín Durán" />`
- **Projects** → share title, description, URL and tags for each; I'll populate `src/data/projects.js`
- **SSL** → GitHub auto-provisions; check repo Settings → Pages in a few hours, then enable "Enforce HTTPS"
