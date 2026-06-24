# Repository Working Agreements

## Scope

This repository manages the `16Type` / `love-type-lab` web MVP, research artifacts, local serving scripts, and GitHub Pages build output.

Before starting repository work, read this `AGENTS.md` and keep these project rules active for the task.

## Product Rules

- Keep the app static-hostable and easy to run locally.
- Preserve mobile-first interaction quality.
- Keep persona and research-derived content source-backed. Research artifacts live under `research/`; runtime persona data lives in `src/personas.js`.
- Avoid committing generated secrets or private research credentials.

## Linear

- Manage implementation work in the connected Linear workspace under team `Learning Codex`.
- Use Linear project `16Type` for this repository.
- Project URL: `https://linear.app/learning-codex/project/16type-0888b625cf50`.
- Search for an existing Linear issue before creating a new one. Reuse it when scope, title, or acceptance criteria clearly match the work.
- For substantial Codex implementation tasks, create or update a Linear issue with scope, acceptance criteria, verification commands, known risks, branch, commit, PR, artifacts, and follow-up items.
- Use labels `Codex` plus `Feature`, `Bug`, or `Improvement` as appropriate.
- Do not store secrets, API keys, raw credentials, or private `.env.local` values in Linear.

## Verification

- For JavaScript or script changes, run `npm run check` when dependencies are available.
- For deploy-related changes, run `npm run build:pages`.
- For local manual checks, run `python scripts/serve.py` and verify `/healthz`.

## Git

- Stage only files related to the current task and preserve unrelated dirty or untracked files.
- Commit completed repository changes before ending a task unless the user explicitly says not to.
- Push only when the user asks.
