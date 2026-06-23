# Date Intermission Reflection Direct Research

## Research Meta

- Date: 2026-06-24
- Topic: Date intermissions, post-action reflection, episodic consequence, and character-perspective continuity for Love Type Lab
- Method: Direct Codex web research fallback while the NotebookLM handoff flow remains available for larger source packs.
- Scope: No new characters. Deepen existing character routes by making each completed date feel like an episode that carries emotional memory into the next date.

## Sources

- MDPI Education Sciences, Assessing the Efficacy of Reflective Game Design: https://www.mdpi.com/2227-7102/13/12/1204
- Machinations, Game systems: Feedback loops and how they help craft player experiences: https://machinations.io/articles/game-systems-feedback-loops-and-how-they-help-craft-player-experiences
- Wired, How Dreamfall Chapters adds guilt and emotion to episodic gaming: https://www.wired.com/story/dreamfall-chapters-interview/
- Game Studies, This Action Will Have Consequences: Interactivity and Player Agency: https://gamestudies.org/1901/articles/stang
- Reis, Clark, and Holmes, Perceived partner responsiveness as an organizing construct in intimacy and closeness: https://www.sas.rochester.edu/psy/people/faculty/reis_harry/assets/pdf/ReisClarkHolmes_2004.pdf

## Compact Findings

- Reflective game design supports a post-action review loop: after a player acts, the game should help them interpret what happened, what feedback mattered, and what to try next.
- Feedback loops become stronger when action, response, and the next goal are connected. A checkpoint should therefore close the current date and open the next one, rather than only showing a percentage.
- Episodic narrative games can make choices feel consequential through chapter-end narrative wrap-ups. Love Type Lab can borrow this at MVP scale by showing a short character-perspective intermission after each date.
- Player agency in a mostly linear story can still feel real when emotional consequences are visible. The character remembering a specific attitude is more useful than a generic score bump.
- Perceived responsiveness research supports the same product direction: intimacy grows when the other person feels seen, understood, and cared for. The intermission should name whether the player picked up a bid, missed a need, or left a fragile point for later repair.

## Import Payload

```json
{
  "mechanic": "date_intermission",
  "placement": "after each date checkpoint",
  "player_value": "understand what the character privately remembers and what the next date will test",
  "character_value": "make existing personas feel more continuous, specific, and emotionally responsive without adding new characters",
  "required_fields": [
    "private_line",
    "strongest_memory",
    "fragile_point",
    "carryover",
    "next_hook",
    "image_cue"
  ],
  "tone_variants": ["open", "spark", "near", "risk"]
}
```

## Implementation Notes

- Added `dateIntermissionReport()` to derive the current date's strongest remembered move, fragile point, carryover lesson, next hook, and image cue from mission history, bid response, need compass, and heart-key state.
- Added `intermissionPanel()` to the checkpoint screen so the date review now includes a character-perspective note before the detailed stats.
- Added compact premium styling for the new intermission panel, including mobile text clamping so it stays inside the one-screen checkpoint layout.
- Added the Date intermission rule to the generated game bible.
- Added shared and per-character intermission prompt guidance to `research/visual-prompts/date-scene-prompts.md`.

## Design Rule

The intermission is not a score screen. It is the character's private after-date note: what stayed warm, what still stung, and what the next meeting will quietly test.
