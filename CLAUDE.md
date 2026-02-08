# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**放課後メモリーズ (Houkago Memories)** — a short-form romance visual novel that runs in the browser. Mobile-first (portrait orientation, dark theme), single heroine (星空みさき / Hoshizora Misaki), ~15 minute playthrough with 3 endings determined by accumulated affection points. PWA-enabled.

## Running the Game

```powershell
python -m http.server 8080
# Open http://localhost:8080
```

No build step, no bundler, no package.json. The app is vanilla HTML/CSS/JS served as static files.

## Generating Scene Images

Requires `GEMINI_API_KEY` env var and Node.js:

```powershell
$env:GEMINI_API_KEY="<key>"
node scripts/generate-misaki-images.mjs
```

Outputs PNGs and a manifest to `images/misaki_scenes/`.

## Architecture

Everything lives in three files with no dependencies:

- **`app.js`** — All game logic in a single file, organized into sections:
  - **Game Data**: `scenes` object (keyed by scene ID), `endings`, `sceneImages`, `endingImages`, `galleryItems`, `profileData`, `achievementDefs`
  - **State**: mutable `state` object (`sceneId`, `lineIndex`, `affection`, `day`, `mood`, `log`, `autoMode`)
  - **Audio**: BGM via `<audio>` element; SE via Web Audio API (`playSE()` with types: type, click, choice, transition, achievement, message)
  - **Typewriter**: character-by-character text display with skip support
  - **Particles**: CSS-animated cherry blossom petals
  - **Transitions**: fade overlay between screens
  - **Heart Gauge**: visual affection display (7 hearts, ~2.5 affection per heart)
  - **Timed Choices**: countdown timer on select choices (`timed` property in scene data)
  - **Gallery/Profile/Achievements**: persistent systems using LocalStorage
  - **History**: tracks play count, endings seen, max affection across sessions
  - **2nd Playthrough**: choices with `requires2ndPlay: true` only appear after first completion
  - **LINE Messages**: lines with `style: "message"` render as chat bubbles

- **Scene flow**: choices set `state.sceneId` to `next` and reset `lineIndex` to 0. `next: "final_eval"` triggers ending evaluation. Endings: `best` (affection >= 13), `good` (>= 9), `normal` (< 9).

- **`index.html`** — Six screens toggled via `.active` class: `titleScreen`, `gameScreen`, `endingScreen`, `galleryScreen`, `profileScreen`, `achievementScreen`. Dialogs for menu, backlog, and gallery viewer.

- **`style.css`** — Dark warm theme (purple/navy gradient) with sakura pink accents, glassmorphism cards, CSS custom properties. Max width 520px.

- **`sw.js` / `manifest.webmanifest`** — PWA support for installable app experience.

## Key Conventions

- All UI text is in Japanese; variable names and code comments are in English.
- No framework, no transpilation — direct DOM manipulation via a cached `el` object.
- Scene IDs follow the pattern: `intro_1`, `day{N}`, `day{N}_after`, `day{N}_morning`, `day{N}_message`.
- LocalStorage keys are prefixed with `afterschool_memories_`.
