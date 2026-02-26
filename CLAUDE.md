# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for Martín Durán — `martoduran.co` — hosted on GitHub Pages. Static site built with Vite + React + Tailwind CSS. Three pages: **Home**, **About** (LinkedIn-style career timeline), **Projects**.

Design closely follows the [Beaumont WordPress theme](https://andersnoren.se/teman/beaumont-wordpress-theme/) (`context/beaumont/`). Career data comes from `context/Martin-Duran-CV-2026.pdf`.

## Tech Stack

- **Vite + React 18** — SPA with React Router (HashRouter for GitHub Pages compatibility)
- **Tailwind CSS v3** — utility classes extended with Beaumont design tokens
- **Google Fonts** — Albert Sans + STIX Two Text (or local woff2 from `context/beaumont/assets/fonts/`)
- **GitHub Actions** → `gh-pages` branch → GitHub Pages
- **Domain**: martoduran.co (Namecheap DNS → GitHub Pages)

## Build & Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server at localhost:5173
npm run build        # Build to dist/
npm run preview      # Preview production build
npm run deploy       # Build + push dist/ to gh-pages branch (uses gh-pages package)
```

## Project Structure

```
src/
  pages/          # Home.jsx, About.jsx, Projects.jsx
  components/     # Header.jsx, Footer.jsx, DiamondSeparator.jsx, Timeline.jsx
  data/           # career.js (work history), education.js, projects.js
  styles/         # tokens.css (design tokens), global.css
public/
  CNAME           # Contains exactly: martoduran.co
  assets/
    images/       # Profile photo, project images
```

## Design System (Beaumont-Inspired)

Defined in `src/styles/tokens.css` and extended in `tailwind.config.js`:

```css
/* Colors */
--color-bg:        #F7F5F3;   /* warm off-white background */
--color-fg:        #1D201F;   /* near-black foreground */
--color-primary:   #707170;   /* muted gray — accents, secondary text */
--color-secondary: #D6D5D3;   /* light gray — borders, separators */

/* Typography */
--font-sans: "Albert Sans", ui-sans-serif, -apple-system, sans-serif;
--font-serif: "STIX Two Text", ui-serif, Georgia, serif;
--tracking-body:    -0.01em;
--tracking-heading: -0.02em;
--leading-body:     1.45em;
--leading-heading:  1.25;

/* Layout */
--content-width: 632px;
--wide-width:    960px;
```

**Typography rules:**
- Headings → Albert Sans, weight 700, letter-spacing -0.02em
- UI text / labels / nav → Albert Sans, weight 500
- Long-form bio paragraphs → STIX Two Text (serif), weight 400
- Buttons → Albert Sans, weight 600, small size, dark bg / light text

**Signature Beaumont elements to replicate:**
- `DiamondSeparator` — horizontal rule with a centered `◆` diamond (see `context/beaumont/style.css` `.is-style-beaumont-diamond-wide`)
- Generous vertical whitespace between sections
- Minimal color usage; only `--color-primary` as accent

## Pages & Content

### Home
Hero: name ("Martín Durán"), tagline ("Product Operations & SEO"), current role ("KB Product Lead at Uber"), short bio intro, two CTA buttons (About, Projects). Minimal, centered, editorial.

### About
Sections separated by DiamondSeparator:
1. Two-column bio header: photo (left 1/3) + longer bio text (right 2/3)
2. Skills chips
3. Vertical career timeline (LinkedIn style, most-recent-first) — from `src/data/career.js`
4. Education section

### Projects
Project card grid — initially a placeholder with empty-state copy. Cards populated from `src/data/projects.js`.

## Career Data Summary (from CV)

Full data lives in `src/data/career.js`. Key facts:
- **tagline**: "Product Operations | SEO"
- **headline**: "KB Product Lead at Uber | ex-HubSpot"
- **email**: martinduranm2@gmail.com — **LinkedIn**: martinduranm
- **Skills**: Program Management, SEO/IA, Marketing Strategy, CRO, SQL, Data Analytics, Python
- **Hobbies**: Tennis, Coffee Tasting, Hiking
- **Work timeline** (most recent first):
  - Uber — KB Product Lead (Jan 2025–present)
  - Holafly — SEO Product / ASO / Off-site Lead (Jan 2024–Jan 2025)
  - HubSpot — SEO Product Strategist Latam + Spain (Jan 2022–Jan 2024)
  - Skale — SEO Growth Strategy Team Lead (Sep 2021–Jan 2022)
  - Skale — SEO Growth Strategist (Jan 2021–Sep 2021)
  - ForexBoat — Growth Project Manager (Dec 2019–Jan 2021)
  - Bunny Studio — Growth Marketer (Mar 2019–Nov 2019)
  - SuperDataScience — Operations Manager (Jun 2016–Nov 2018)
- **Education**: Reforge (2022), Sup de Co Montpellier (BBA, 2010–2011), Universidad ICESI (Accounting & Finance, 2006–2012)

## GitHub Pages + Custom Domain Setup

### 1. Repository
- Repo: `https://github.com/elmarto87/personal-website`
- Branches: `main` (source) + `gh-pages` (deployed by Actions)

### 2. GitHub Actions Deploy Workflow
Create `.github/workflows/deploy.yml` — builds the Vite project and pushes `dist/` to the `gh-pages` branch on every push to `main`.

### 3. GitHub Pages Configuration
- Repo Settings → Pages → Source: **Deploy from branch** → `gh-pages` → `/ (root)`
- After first deploy, enable **Enforce HTTPS**

### 4. `public/CNAME`
File must contain one line, no protocol: `martoduran.co`

### 5. Namecheap DNS Records
Add these in Namecheap's "Advanced DNS" panel:

| Type  | Host | Value                    |
|-------|------|--------------------------|
| A     | @    | 185.199.108.153          |
| A     | @    | 185.199.109.153          |
| A     | @    | 185.199.110.153          |
| A     | @    | 185.199.111.153          |
| CNAME | www  | elmarto87.github.io      |

DNS propagation: 30 min to 48 h. SSL is auto-provisioned by GitHub via Let's Encrypt after DNS resolves.

### 6. Verification
After DNS propagates, repo Settings → Pages will show the custom domain with a green checkmark. Enable "Enforce HTTPS" if not already done.

## Implementation Plan

See `PLAN.md` for the full session-by-session task tracker.
