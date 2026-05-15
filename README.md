# Focus Front End (Angular)

Angular 18 standalone front end for the **JA Focus** news and magazine layout: routing, reusable homepage widgets, and the original theme CSS kept for visual parity with the static demo.

[![Angular](https://img.shields.io/badge/Angular-18.2-red?logo=angular)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## Features

- Homepage — brick masthead, Politics / Business / World, sidebar widgets, Tech slider, Sport / Entertainment, video lists
- Site chrome — top sponsor strip, utility topbar, brand header, mega menu
- Inner pages — article, category, subcategory, search, about, contact, blog, gallery, videos
- Legacy theme — Bootstrap 3 + JA Focus styles in `src/styles/legacy/`
- Standalone components — no NgModules

## Prerequisites

- [Node.js](https://nodejs.org/) 18.x or 20.x (LTS)
- npm 9+

## Quick start

```bash
git clone https://github.com/abbasrezaey1/focus-front-end-angular.git
cd focus-front-end-angular
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200).

### Production build

```bash
npm run build
```

Built files: `dist/focus-front-end-angular/browser/`

Local preview:

```bash
npx http-server dist/focus-front-end-angular/browser -p 8080
```

## Project layout

| Path | Purpose |
|------|---------|
| `src/app/content/` | Site chrome data (leaderboard, nav) |
| `src/app/homepage/` | Home widgets and news sections |
| `src/app/layout/` | Header, footer, main layout |
| `src/app/pages/` | Routed pages |
| `src/app/ui/` | Shared UI |
| `src/app/uni-material/` | News cards, teasers, bricks, stock widget |
| `src/assets/images/` | Images (served as `/images/` at build) |
| `src/styles/legacy/` | Ported JA Focus CSS |
| `src/styles/app-overrides.css` | Angular layout tweaks |
| `public/` | Static assets (fonts, reference HTML) |

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About |
| `/blog` | Blog |
| `/contact` | Contact |
| `/videos` | Videos |
| `/gallery` | Gallery |
| `/search` | Search (`?q=` query) |
| `/article` | Article |
| `/category` | Category |
| `/subcategory` | Subcategory |
| `/**` | In-layout 404 |

Login, registration, and offline pages are not included.

## Images

Put files in `src/assets/images/`. Templates use root-relative URLs:

```html
<img src="/images/news-1.jpg" alt="..." />
```

Top sponsor: `/images/top-leaderboard.jpg`.

## npm scripts

| Script | Description |
|--------|-------------|
| `npm start` | Dev server |
| `npm run build` | Production build |
| `npm run watch` | Dev build with watch |

## Top banner and ad blockers

The sponsor strip uses neutral classes (`site-hd-sponsor`) instead of `ja-banner` / `banneritem`. If the image is missing on localhost, disable the ad blocker for that host or hard-refresh.

## Stack

- Angular 18 (standalone)
- Angular Router
- Font Awesome 4
- RxJS 7

## License

MIT — see [LICENSE](LICENSE).

## Credits

Layout and styling based on the **JA Focus** template (JoomlArt). Migrated from a static HTML export for demo and learning use.
