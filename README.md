# web-site

A static HTML/CSS/JS website template with HTMX for dynamic interactions. No build step, no dependencies. Created with [dade](https://github.com/theydontwantyoutovibecode/made-in-dade).

## Prerequisites

None. The template uses plain HTML, CSS, and JavaScript.

## Project Structure

```
.
├── index.html          # Main page
├── css/
│   └── style.css       # Stylesheet
├── js/
│   └── main.js         # JavaScript
├── lib/
│   └── htmx.min.js     # HTMX library (vendored)
├── partials/
│   ├── hello.html      # Example HTMX partial
│   └── more.html       # Example HTMX partial
├── dade.toml           # Template manifest
├── AGENTS.md           # AI agent instructions
└── .read-only/
    └── manifest.txt    # Reference repos for AI context
```

## Usage

### Development

```bash
dade dev
```

Starts a built-in static file server. The project is available at `https://<project-name>.<hostname>.local`.

There are no setup commands or dependencies to install. The server serves files from the project root.

### Sharing

```bash
dade share
```

Starts the static server and creates a Cloudflare tunnel for public access. Requires `cloudflared`.

### Not Applicable

- `dade project start` — No production server mode. The static file server is the same in dev and production.
- `dade build` — Nothing to compile.

## HTMX

HTMX is loaded via `lib/htmx.min.js` (vendored, no CDN). Use HTMX attributes on HTML elements to load content dynamically.

The `partials/` directory contains HTML fragments. HTMX requests load these fragments and swaps them into the page without full page reloads.

Example:

```html
<button hx-get="/partials/hello.html" hx-swap="innerHTML" hx-target="#content">
  Load
</button>
<div id="content"></div>
```

## Deployment

The project is a collection of static files. Deploy to any static hosting service:

- Copy the entire project directory to a web server
- Upload to GitHub Pages, Netlify, Vercel, or Cloudflare Pages
- Serve with any HTTP server (nginx, Apache, Caddy)

No build step is required.

## Reference Libraries

The `.read-only/manifest.txt` file lists repositories that are shallow-cloned during `dade dev`:
- htmx — HTMX library source

These provide AI coding agents with reference source code.

## Ticket Tracking

The `.tickets/` directory is used with the `tk` CLI for ticket-driven development. See `AGENTS.md` for the workflow.
