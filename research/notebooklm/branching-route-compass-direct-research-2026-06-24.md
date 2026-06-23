# Branching Route Compass Direct Research - 2026-06-24

## Research Meta

- Topic: Player agency, branching narrative, and route forecast mechanics for Love Type Lab
- Method: Direct web research fallback while NotebookLM MCP authentication is expired
- Product import target: `src/app.js`, `src/styles.css`, game bible and visual prompt exports
- Status: Imported

## Sources

- GDC Vault, All Choice No Consequence: Efficiently Branching Narrative: https://www.gdcvault.com/play/1023409/All-Choice-No-Consequence-Efficiently
- Game Developer, Meaningful Decisions in Branching Narratives: https://www.gamedeveloper.com/design/meaningful-decisions-in-branching-narratives
- Game Studies, This Action Will Have Consequences: Interactivity and Player Agency: https://gamestudies.org/1901/articles/stang
- Lemma Soft Forums, visual novel route organization discussion: https://lemmasoft.renai.us/forums/viewtopic.php?t=43496

## Compact Findings

- Branching narrative feels stronger when choices influence conclusions, not only the next line.
- Efficient branching can use route tendencies and convergence rather than exploding into fully separate scripts.
- Romance and visual novel route design often mixes point accumulation with key choices that unlock or color important scenes.
- Player-facing feedback should show consequence without making the game feel solved. A route forecast should be suggestive and reroutable.

## Import Payload

```json
{
  "mechanic": "route_compass",
  "purpose": "Show the player that repeated choices are steering the ending route while preserving the ability to recover or reroute.",
  "inputs": ["safe_count", "spark_count", "strain_count", "heart_key_opens", "repair_after_strain", "route_progress"],
  "ui": "Compact in-game compass, checkpoint fork advice, and result route explanation panel.",
  "asset_prompt_need": "Route compass UI backgrounds for trust, spark, repair, balance, and risk states."
}
```

## Import Notes

- Added `routeCompassReport`, compact scene card, checkpoint route article, and result route compass panel.
- Route forecast is intentionally not a hard lock; recovery and heart-key choices can still shift the path.
