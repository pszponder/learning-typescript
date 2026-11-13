# Learning TypeScript with AI

The purpose of this repo is to learn to use Matt Pocock's [/teach skill](https://www.aihero.dev/skills-teach) to learn a programming language, starting with TypeScript.

## Lessons

Open the [course map](lessons/index.html) for the ordered foundations lessons and local exercises.

## Prerequisites

- [devenv](https://devenv.sh/)

## Starting the Dev Environment (via devenv)

```sh
devenv shell
```

The environment provides Nub, Node.js, and TypeScript. Run one exercise at a time:

```sh
tsc --noEmit --strict exercises/0001-guess-result.ts
nub exercises/0001-guess-result.ts
```

`NODE_EXECUTABLE` selects the Nix-managed Node.js for Nub. Commit `devenv.lock`
to keep the environment inputs reproducible.

Nub v0.11.0 comes from the upstream release archive through `nix/nub-bin.nix`,
with a pinned SHA-256 hash and NixOS library setup. This package currently supports
`x86_64-linux`. Updating Nub requires changing both its version/URL and archive hash.

## Resources / References
- [devenv](https://devenv.sh/)
- [numtide/llm-agents](https://github.com/numtide/llm-agents.nix)
- [Matt Pocock - Teach Skill](https://www.aihero.dev/skills-teach)
