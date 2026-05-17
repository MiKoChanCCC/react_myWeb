# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

YOASOBI fan website — a React (Create React App) reimplementation of the original static HTML site. The original static site lives in the parent directory at `../121.40.238.147/`. This React version mirrors all 5 pages with the same visual design.

## Commands

```bash
npm start          # Dev server at http://localhost:3000
npm run build      # Production build to build/
npm test           # Run tests in watch mode (Jest + React Testing Library)
```

No other tooling (linting is built into CRA's `react-scripts`).

## Architecture

**Routing**: React Router v7 with 5 routes defined in `src/App.js`:

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `pages/Home.js` | Homepage: Swiper carousel + member bios |
| `/news` | `pages/News.js` | THE FIRST TAKE performances + YouTube links |
| `/myself` | `pages/Myself.js` | Site owner's derivative works (VOCALOID, GarageBand) |
| `/video` | `pages/Video.js` | Official MV gallery + Live Bilibili/YouTube links |
| `/preview` | `pages/Preview.js` | Inline HTML5 video preview (hover to play, 9 MP4 files) |

**Shared components** (`src/components/`):
- `Layout.js` — wraps every page with Header + Footer
- `Header.js` — logo + nav (NavLink with active state) + social SVG icons. Accepts `style2` prop: homepage uses transparent overlay header; all other pages pass `headerStyle2={true}` for white-background variant.
- `Footer.js` — logo + nav + ICP备案 + copyright

**CSS layering** (imported in `src/index.js`, order matters):
1. `assets/icon/iconfont.css` — iconfont definitions
2. `styles/common.css` — reset, CSS variables (`--bgColor: rgb(205,86,86)`, `--bgColor2`), custom font, container, breadcrumb, video container
3. `styles/main.css` — all component styles: header, banner, index-about, footer, page-hobby, page-photo with hover animations
4. `index.css` + `App.css` — CRA defaults, mostly unused

**Key CSS variables**: `--bgColor` (theme red) and `--bgColor2` (semi-transparent red) drive the color scheme across headers, footers, hover overlays, and pagination.

**Responsive approach**: `common.css` sets `html font-size` via media queries (16px → 14px → 12px). Layout uses `rem` units throughout. Container is 75rem wide.

## Known issues

- `styles/common.css` references `../assets/fonts/zaozigongfangnaisiti.ttf` but the actual font file is at `public/icon/zaozigongfangnaisiti.ttf`. In CRA, this should be `/icon/zaozigongfangnaisiti.ttf` (served from the public root). The custom font likely doesn't load in development.
- `App.test.js` still contains the default CRA test ("renders learn react link") which will fail since the app uses Router and the text doesn't exist.

## Key interaction patterns

- **Image hover overlays**: `.page-hobby a .layer` slides up on hover; `.page-photo .img .layer` scales from 0→1
- **Video preview hover-swap**: CSS `:hover` toggles thumbnail → video display on `.video-container`, with JS `onMouseEnter`/`onMouseLeave` handlers for play/pause control
- **Swiper**: `pages/Home.js` uses Swiper with autoplay (3500ms), loop, navigation arrows (hidden until hover), and pagination bullets
- **NavLink active state**: `Header.js` uses React Router `NavLink` with `end` prop on the home route. CSS targets `.active` class for underline indicator and color change
