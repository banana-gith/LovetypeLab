# WSL + Docker + Cursor

This repository can be opened from Cursor with Dev Containers.

1. Install WSL 2, Docker Desktop with WSL integration, and Cursor.
2. From WSL, clone or open this repository under the Linux filesystem.
3. In Cursor, run `Dev Containers: Reopen in Container`.
4. The container loads `.env.local` through `compose.yaml`.

GitHub operations should run inside the container. The image includes `git` and
GitHub CLI (`gh`); provide `GH_TOKEN` or `GITHUB_TOKEN` in `.env.local` for
authenticated GitHub API, workflow, and repository operations.

Local verification:

```bash
./scripts/docker-run.sh
```

Manual command:

```bash
docker compose run --rm workspace bash -lc "npm run check && npm run build:pages"
```
