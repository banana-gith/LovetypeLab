param(
  [string]$Command = "npm run check && npm run build:pages"
)

$ErrorActionPreference = "Stop"
docker compose run --rm workspace bash -lc $Command
