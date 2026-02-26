# Implementation Plan — martoduran.co

Session-by-session task tracker. Mark tasks ✅ when complete. Update "Current Session Notes" at the start of each session for token-efficient context.

---

## Current Session Notes
> _Update this block at the start of each session. Paste what was last completed, any blockers, and the next priority._

**Last completed:** Project initialized. CLAUDE.md + PLAN.md created. No code yet.
**Next up:** Phase 1 — scaffold the Vite + React project.

---

## Phase 1: Project Scaffold & Config

- [ ] `npm create vite@latest . -- --template react` (in project root)
- [ ] Install Tailwind CSS v3 + PostCSS + Autoprefixer, configure `tailwind.config.js`
- [ ] Install React Router DOM v6, `gh-pages` package
- [ ] Add `homepage` field in `package.json` pointing to `https://martoduran.co`
- [ ] Configure `vite.config.js` — set `base: '/'`
- [ ] Initialize Git repo, create GitHub remote, push `main`
- [ ] Create `.github/workflows/deploy.yml` (build → push to `gh-pages`)
- [ ] Add `public/CNAME` with `martoduran.co`
- [ ] Verify GitHub Pages is serving from `gh-pages` branch

**Namecheap DNS (do once, outside code):**
- [ ] Add 4 A records pointing to GitHub Pages IPs
- [ ] Add CNAME `www` → `martoduran10.github.io`
- [ ] Confirm SSL enabled in GitHub Pages settings

---

## Phase 2: Design System & Shared Components

- [ ] Create `src/styles/tokens.css` — all Beaumont-derived CSS custom properties
- [ ] Extend `tailwind.config.js` with custom colors, fonts, spacing
- [ ] Add Google Fonts link (Albert Sans + STIX Two Text) OR copy woff2 files from `context/beaumont/assets/fonts/` to `public/assets/fonts/` and declare `@font-face`
- [ ] `Header.jsx` — site name ("Martín Durán") + nav links (Home, About, Projects)
- [ ] `Footer.jsx` — copyright + LinkedIn + email links
- [ ] `DiamondSeparator.jsx` — horizontal rule with centered diamond accent
- [ ] `Layout.jsx` — wraps pages with Header + Footer + constrained content width

---

## Phase 3: Content Data Files

- [ ] `src/data/career.js` — array of work history objects (company, title, dates, bullets)
- [ ] `src/data/education.js` — education array
- [ ] `src/data/skills.js` — skills array with category groupings
- [ ] `src/data/projects.js` — empty array with shape defined (title, description, url, tags)

---

## Phase 4: Home Page

_Use copywriting skill to write hero copy and bio intro._

- [ ] Hero section — name, tagline, current role
- [ ] Short bio paragraph (2–3 sentences, editorial tone)
- [ ] Two CTA buttons (About, Projects) — Beaumont button style
- [ ] Responsive layout (mobile-first)

---

## Phase 5: About Page

_Use copywriting skill for bio paragraphs and section intros._

- [ ] Two-column bio block (photo 1/3 + bio text 2/3) — collapses to single column on mobile
- [ ] Skills chips/tags section
- [ ] `Timeline.jsx` component — vertical, LinkedIn style, most-recent-first
- [ ] Populate timeline with career data from `src/data/career.js`
- [ ] Education section
- [ ] DiamondSeparator between each section

---

## Phase 6: Projects Page

- [ ] Placeholder empty state with tasteful copy
- [ ] `ProjectCard.jsx` component (title, description, tags, link)
- [ ] Grid layout (2 columns desktop, 1 column mobile)
- [ ] Page ready to populate — projects data from `src/data/projects.js`

---

## Phase 7: Polish & Launch

- [ ] `<head>` SEO meta tags — title, description, Open Graph, Twitter Card
- [ ] `favicon.ico` / `favicon.svg`
- [ ] Full mobile responsiveness audit
- [ ] Accessibility check (keyboard nav, alt text, color contrast)
- [ ] Performance check (`npm run build` + Lighthouse)
- [ ] First production deploy to `gh-pages`
- [ ] Verify custom domain + HTTPS after DNS propagation

---

## Decisions Log

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Routing | HashRouter | Avoids 404 issues on GitHub Pages with no server config |
| Styling | Tailwind + CSS tokens | Beaumont tokens as CSS vars; Tailwind for utilities |
| Font loading | Local woff2 (from context/) OR Google Fonts | Prefer local for performance; Google Fonts as fallback |
| Build/deploy | Vite + `gh-pages` npm package | Simple; no Docker needed |

---

## Notes for Future Sessions

- Profile photo still needed — user to provide for Phase 5 bio block
- Projects content TBD — user will provide in a later session
- Copy for Home and About pages: invoke `marketing-skills:copywriting` skill with CV context
