# Teaching notes

- Use local Highlight.js for syntax highlighting in all HTML artifacts: link `assets/highlight.css` after the course stylesheet, then defer `assets/vendor/highlightjs/highlight.min.js` and `assets/highlight.js` in that order. Mark TypeScript blocks with `class="language-typescript"`. Colors follow Latte/Mocha; no CDN is needed at viewing time.

- Color preference: Catppuccin Latte for light mode and Catppuccin Mocha for dark mode, using the official palette. Shared course styles use mauve accents and blue links; print uses Latte text on white paper.

- All HTML artifacts must support light/dark mode. Link shared `assets/course.css` and load `assets/theme.js` in the head without `defer` (adjust relative paths). It adds the accessible toggle, defaults to the system theme, and saves a preference where browser storage is available. Print output stays light.

- User wants to return to professional backend development and currently programs extensively in Python as a data engineer.
- User suggested learning through classic games. Have the learner implement meaningful code; provide hints and review rather than completing their exercises.
- Proposed route: Guess the Number rules → Tic-Tac-Toe state → game API → persistence and concurrent requests. Adapt after evidence of understanding.
- First lesson prepared, not completed. Do not record mastery until the user demonstrates it.
- Existing devenv config enables Bun and TypeScript. Neither tool was established as available in the current shell; first lesson supports the TypeScript Playground without installation.
