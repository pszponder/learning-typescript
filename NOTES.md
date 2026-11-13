# Teaching notes

- Use a recurring D&D-inspired Adventurers’ Guild theme for new lessons and practice: encounters, inventory, spell slots, quests, and party state. Rules are explicitly defined teaching rules, not official D&D rules. Keep the backend mission and concept order; increase challenge through meaningful decisions and boundary cases rather than lore or unfamiliar syntax.
- All lessons and examples must be well documented: explain purpose, inputs, outputs, assumptions, mutation, and surprising syntax; comment meaningful steps in worked code. Practice needs acceptance cases, progressive hints, and a clear local feedback loop. Leave solutions to the learner and do not infer mastery from curriculum changes.

- Use local Highlight.js for syntax highlighting in all HTML artifacts: link `assets/highlight.css` after the course stylesheet, then defer `assets/vendor/highlightjs/highlight.min.js` and `assets/highlight.js` in that order. Mark TypeScript blocks with `class="language-typescript"`. Colors follow Latte/Mocha; no CDN is needed at viewing time.

- Color preference: Catppuccin Latte for light mode and Catppuccin Mocha for dark mode, using the official palette. Shared course styles use mauve accents and blue links; print uses Latte text on white paper.

- All HTML artifacts must support light/dark mode. Link shared `assets/course.css` and load `assets/theme.js` in the head without `defer` (adjust relative paths). It adds the accessible toggle, defaults to the system theme, and saves a preference where browser storage is available. Print output stays light.

- User wants to return to professional backend development and currently programs extensively in Python as a data engineer.
- User suggested learning through classic games. Have the learner implement meaningful code; provide hints and review rather than completing their exercises.
- Proposed route: Guess the Number rules → Tic-Tac-Toe state → game API → persistence and concurrent requests. Adapt after evidence of understanding.
- First lesson completed: local implementation reviewed and checked successfully. See learning record 0002. Ternaries and arrow functions are the requested next refresher; proficiency is not yet established.
- Follow `AGENTS.md` for development environment commands. The configured environment provides Nub, Node.js, and TypeScript; Python is not configured. NODE_EXECUTABLE selects the Nix-managed Node.js. Use direct commands when available, with non-interactive `devenv shell -- <command>` as the fallback.

- User wants lessons to guide writing their own local code instead of using the TypeScript Playground. Use exercises/ files, small starters, hints, local type-check/run commands, and file review. Leave exercise implementations to the learner.

- Add deferred assets/copy-code.js to every lesson and reference HTML document for copy buttons on code blocks.

- User requests a broad JS/TS control-flow refresher and practical backend project setup (build/watch/run) plus production practices. The course map in lessons/index.html defines the exercise order; no completion or mastery is assumed. Use Nub on the Nix-managed Node.js for the first workflow. Keep project implementation learner-owned. Existing mission already includes backend development; no mission change needed.

- Prefer official project initializers over manually recreating standard scaffolding, then explain and adapt the generated files. User raised initializers and Vite+; the project lifecycle lesson now uses nub init for scaffolding, Nub for dependencies and execution, and compares Vite+ tooling. This question does not authorize installing or migrating to Vite+.

- Curriculum preference: separate function forms, branching (including if/else-if/else and ternaries), loops, modules/import-export, and async programming. Teach these fundamentals before project tooling. Canonical sequence is lessons/index.html; the old 0004-project-lifecycle pointer has been removed. Lesson 01 exercise is preserved. Do not infer mastery from this curriculum request.

- Current curriculum: 16 main-path lessons in three stages (language foundations, working with data, organizing/running code). Core collections are arrays, objects, Map, and Set. Array transformations are a follow-up within arrays; tuples are an optional array note; Record is an object-type note. Standalone tuple/dictionary/transformation pages were removed. Interfaces and generics are optional later lessons 17–18. Canonical order is lessons/index.html. Existing exercise paths stay stable. No mastery is inferred from curriculum changes.

- User requests more detailed examples and practice. All 18 lessons now include an additional worked example with trace/output feedback and optional predict/modify/implement practice. Use concrete cases, boundary inputs, progressive hints, and separate practice files; keep short main exercises and learner-owned implementations. No mastery is inferred from the added material.

- Core collection coverage must include creation, indexed/keyed reads, insertion, updates, removal, presence/search, iteration, copies/conversions, size, and clearing/rebuilding. Arrays explicitly cover indexed assignment, splice insert/remove/replace, end operations, invalid/missing indexes, and sparse-array pitfalls. Objects cover optional deletion and own-property enumeration. Each collection has three operation-practice sessions and a shared coverage matrix; do not substitute transformation-only practice for basic edits.

- Nested collection follow-ups are part of arrays, objects, and Map: 2D/ragged arrays, independent row creation and copying, arrays of objects, nested dictionary paths, nested Maps, and Map-of-Set. Teach missing parents, child initialization, shallow aliasing, path copying, and empty-parent cleanup after single-level operations and loops. Keep learner implementations untouched.
