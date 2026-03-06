# AGENTS.md — Web Site Template

## Stack

- **HTML / CSS / JavaScript** — vanilla, no frameworks
- **HTMX** — declarative AJAX and server interaction
- **Static serving** — served directly by dade's Caddy reverse proxy

## Project Structure

```
.
├── index.html          # Entry point
├── css/                # Stylesheets
├── js/                 # Client-side scripts
├── assets/             # Images, fonts, static files
├── .read-only/         # Reference libraries (auto-synced, do not edit)
│   └── manifest.txt    # Declares which repos to sync
└── .tickets/           # Ticket tracking (tk CLI)
```

## Development Workflow

All work is **ticket-driven**. Never start implementation without a ticket.

### Planning Phase

1. Receive a request → analyze fully before acting
2. Create granular tickets with `tk`:
   ```
   tk create "Add contact form with HTMX submission" -t task -p 1 --tags "feature" -d "Definition of done: form submits via hx-post, shows success message, validates email client-side"
   ```
3. Break complex work into subtasks. Each ticket must have:
   - Clear definition of done
   - Caveats and edge cases identified
   - Test plan (manual verification steps for static sites)
4. Surface open questions before implementation

### Execution Phase

- **One ticket = one commit.** Never work on multiple tickets simultaneously.
- Mark ticket in-progress: `tk start <id>`
- Implement the full solution for that ticket
- Verify against the definition of done
- Close ticket: `tk close <id>`
- Commit with ticket ID in message

### Reference Libraries

The `.read-only/` directory contains reference implementations synced from `manifest.txt`. Use these for context on patterns and conventions — never modify files in `.read-only/`.

## Stack Notes

- HTMX attributes go directly on HTML elements (`hx-get`, `hx-post`, `hx-target`, `hx-swap`)
- Use `hx-boost="true"` on `<body>` for SPA-like navigation
- CSS custom properties preferred over preprocessors
- No build step — files are served as-is
- Test by opening in browser; dade proxies via HTTPS automatically
