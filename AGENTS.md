# Development environment

- Read `devenv.nix` before choosing runtimes or adding tooling. This workspace provides Bun and TypeScript; Node.js is explicitly disabled, and Python is not configured.
- Check required tools with `command -v bun` and `command -v tsc`. If available, run them directly in the current shell. Do not start another devenv shell unnecessarily.
- If a required configured tool is missing from PATH, run a non-interactive command from the repository root, for example `devenv shell -- tsc --noEmit --strict exercises/0001-guess-result.ts` or `devenv shell -- bun run exercises/0001-guess-result.ts`.
- Use Bun for JavaScript/TypeScript scripts and one-off file processing. Do not assume `node`, `python`, or `python3` exists, or add a runtime just to perform routine file edits. Prefer `apply_patch` for edits.
- Check and run only the relevant exercise file. Independent lessons may reuse top-level type and function names, so compiling all exercises together can create unrelated duplicate declarations.
- If devenv fails because sandbox restrictions block Nix state or network access, request escalation for the needed command. Do not repeatedly retry the same restricted command.
- Distinguish exercise verification time from lesson preparation when reporting progress. Report actual tool failures and their impact accurately.
