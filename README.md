# Focus Front End (Angular)

Angular 18 standalone front end for the **JA Focus** news/magazine layout. Migrated from the static HTML export (`asindex`) into a component-based app with routing, reusable homepage widgets, and legacy theme CSS preserved for visual parity.

[![Angular](https://img.shields.io/badge/Angular-18.2-red?logo=angular)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## Features

- **Homepage** — brick masthead, Politics/Business/World sections, sidebar widgets, Tech slider, Sport/Entertainment, video lists
- **Site chrome** — top sponsor strip, utility topbar, brand header, mega menu navigation
- **Inner pages** — article, category, subcategory, search, about, contact, blog, gallery, videos
- **Legacy theme** — Bootstrap 3 + JA Focus styles under `src/styles/legacy/`
- **Standalone components** — no NgModules; lazy-loaded routes where appropriate

## Prerequisites

- [Node.js](https://nodejs.org/) **18.x** or **20.x** (LTS recommended)
- npm **9+**

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

Output: `dist/asindex-web/browser/`

Preview the production build locally:

```bash
npx http-server dist/asindex-web/browser -p 8080
```

## Project structure

```
src/
├── app/
│   ├── content/          # Site chrome data (leaderboard, nav)
│   ├── homepage/         # Home widgets & news sections
│   ├── layout/           # Header, footer, main layout
│   ├── pages/            # Routed page components
│   ├── ui/               # Shared UI pieces
│   └── uni-material/     # News cards, teasers, bricks
├── assets/images/        # Copied to /images at build time
├── styles/
│   ├── legacy/           # Ported JA Focus template CSS
│   └── app-overrides.css # Angular-specific layout fixes
public/                   # Static assets (fonts, reference HTML)
```

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About |
| `/blog` | Blog |
| `/contact` | Contact |
| `/videos` | Videos |
| `/gallery` | Gallery |
| `/search` | Search (`?q=` supported) |
| `/article` | Article |
| `/category` | Category |
| `/subcategory` | Subcategory |
| `**` | In-layout 404 |

Login, registration, and offline static pages are intentionally omitted.

## Assets & images

Images live in `src/assets/images/` and are emitted to `/images/` at build time (see `angular.json`). Use root-relative URLs in templates:

```html
<img src="/images/news-1.jpg" alt="..." />
```

Top sponsor creative: `/images/top-leaderboard.jpg`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Dev server (`ng serve`) |
| `npm run build` | Production build |
| `npm run watch` | Development build with watch |

## Ad blockers & top banner

The top sponsor strip uses neutral class names (`site-hd-sponsor`) instead of `ja-banner` / `banneritem` to reduce false positives from ad blockers. If the banner is missing locally, disable the blocker for `localhost` or hard-refresh.

## Tech stack

- Angular 18 (standalone, signals where used)
- Angular Router
- Font Awesome 4 (legacy icon set matching the template)
- RxJS 7

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-change`
3. Commit with a clear message
4. Open a pull request

## License

MIT — see [LICENSE](LICENSE).

## Acknowledgments

Layout and styling based on the **JA Focus** Joomla template (JoomlArt). Static reference export used for migration parity.
