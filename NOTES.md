# Teaching notes

- Use local Highlight.js for syntax highlighting in all HTML artifacts: link `assets/highlight.css` after the course stylesheet, then defer `assets/vendor/highlightjs/highlight.min.js` and `assets/highlight.js` in that order. Mark TypeScript blocks with `class="language-typescript"`. Colors follow Latte/Mocha; no CDN is needed at viewing time.

- Color preference: Catppuccin Latte for light mode and Catppuccin Mocha for dark mode, using the official palette. Shared course styles use mauve accents and blue links; print uses Latte text on white paper.

- All HTML artifacts must support light/dark mode. Link shared `assets/course.css` and load `assets/theme.js` in the head without `defer` (adjust relative paths). It adds the accessible toggle, defaults to the system theme, and saves a preference where browser storage is available. Print output stays light.

- User wants to return to professional backend development and currently programs extensively in Python as a data engineer.
- User suggested learning through classic games. Have the learner implement meaningful code; provide hints and review rather than completing their exercises.
- Proposed route: Guess the Number rules → Tic-Tac-Toe state → game API → persistence and concurrent requests. Adapt after evidence of understanding.
- First lesson completed: local implementation reviewed and checked successfully. See learning record 0002. Ternaries and arrow functions are the requested next refresher; proficiency is not yet established.
- Follow `AGENTS.md` for development environment commands. Bun and TypeScript are available in the current shell; Node.js is disabled and Python is not configured. Use direct commands when available, with non-interactive `devenv shell -- <command>` as the fallback.

- User wants lessons to guide writing their own local code instead of using the TypeScript Playground. Use exercises/ files, small starters, hints, local type-check/run commands, and file review. Leave exercise implementations to the learner.

- Add deferred assets/copy-code.js to every lesson and reference HTML document for copy buttons on code blocks.

- User requests a broad JS/TS control-flow refresher and practical backend project setup (build/watch/run) plus production practices. Lessons 03 and 04 provide the next exercises; no completion or mastery is assumed. Use Bun for the first workflow because it is already configured, while explaining the Node.js alternative. Keep project implementation learner-owned. Existing mission already includes backend development; no mission change needed.

- Prefer official project initializers over manually recreating standard scaffolding, then explain and adapt the generated files. User raised bun init and Vite+; lesson 04 now starts with bun init and compares integrated Vite+ tooling. This question does not authorize installing or migrating to Vite+.
