# Angel Antonio Mata Zamora — Portfolio

Static single-page portfolio. HTML, CSS, and a small JavaScript file. No build step.

Visual and content rules live in [`CONSTITUTION.txt`](CONSTITUTION.txt). Read that before changing layout, color, type, or motion.

## Open locally

Double-click `index.html`, or from this folder:

```bash
python -m http.server 4173
```

Then open http://127.0.0.1:4173/

## Files

| File | Role |
| --- | --- |
| `index.html` | All copy and structure |
| `style.css` | Layout and visual system (`:root` tokens) |
| `main.js` | Active nav highlight, footer year |
| `favicon.svg` | Square mark |
| `CONSTITUTION.txt` | Design and content law for later edits |

## Design tokens

Defined at the top of `style.css`:

- Background `#F4F4F0`
- Ink `#111111`
- Accent `#C2340A` (only accent)
- Sans: Inter
- Mono: IBM Plex Mono (labels, dates, tags, nav)

No gradients, blur, shadows, or rounded corners. Hover on buttons is a solid color invert, not an animation.

## Edit content

Change text in `index.html` only. Do not add lorem ipsum.

Typical edits:

- **Experience** — each `<article class="job">`
- **Projects** — `.feature` (AscentraMX) and `.project-list`
- **Education / skills** — `#education`
- **Contact** — `#contact`

Keep claims aligned with the CV. New tools go in the `<ul class="tech">` for that role or project.

## Sections / IDs

Hash links in the header match these ids:

- `#index` hero
- `#experience`
- `#projects`
- `#education`
- `#contact`

`main.js` watches those sections (and the footer) to mark the current nav item. If you add a section, give it an `id` and a matching nav link.

## Layout notes

- Mobile: name stacks word-by-word; header is AAMZ + GitHub, then nav links.
- From 800px: two-column bands (section index | body), GitHub on the right of the masthead.
- `padding` shorthand on `.hero` / `.band` will wipe horizontal inset. Use `padding-block` for vertical spacing so `padding-inline` stays intact.

## Deploy

Upload the folder as static files (GitHub Pages, Netlify, nginx, etc.). Keep `index.html` at the site root. No install, no compile.
