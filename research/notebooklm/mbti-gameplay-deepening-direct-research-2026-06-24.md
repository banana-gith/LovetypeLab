# MBTI Gameplay Deepening Direct Research - 2026-06-24

## Research Meta

- Topic: Love Type Lab character persona and dating-game logic deepening
- Method: Direct web research fallback after NotebookLM MCP returned `Authentication expired`
- Product import target: `src/app.js`, `scripts/export_game_bible.mjs`, `scripts/export_image_prompts.mjs`
- Status: Imported

## Sources

- Myers & Briggs Foundation, Myers-Briggs overview: https://www.myersbriggs.org/my-mbti-personality-type/myers-briggs-overview/
- The Myers-Briggs Company, MBTI assessment overview and FAQ: https://www.themyersbriggs.com/en-us/explore-solutions/mbti
- 16Personalities, framework overview: https://www.16personalities.com/articles/our-theory

## Compact Findings

- Treat type as a preference language, not a deterministic prediction. The app should teach reading energy, information style, decision style, and closure style without claiming a type guarantees behavior.
- MBTI is positioned by official sources as useful for self-awareness, communication, collaboration, conflict, and relationships. Game systems should therefore reward observing, adapting, repairing, and communicating clearly.
- The Myers-Briggs Company explicitly frames the assessment as having no right or wrong answers and no best type. Love Type Lab should avoid one universal best answer and instead score fit against character, scene, and relationship state.
- 16Personalities emphasizes strengths, weaknesses, worries, and motivations as relationship-understanding material. For the game, this maps to hidden asks, emotional keys, turn-offs, and repair opportunities.

## Import Payload

```json
{
  "mechanic": "heart_key",
  "purpose": "Make each scene feel like a character-specific read, not a generic safe/spark/strain optimization.",
  "player_visible_clue": "Show the current character's observable tell and hidden ask before choices.",
  "choice_feedback": "After the player chooses, report whether the hidden key opened, nearly opened, or locked.",
  "result_feedback": "Summarize how many hidden keys were read across the date route.",
  "asset_prompt_need": "For each scene, create UI cut-in prompts for heart key unlock/near/locked states using gaze, posture, hands, distance, and shared objects without on-image text."
}
```

## Import Notes

- Added a `HEART KEY` scene card and per-choice heart key scoring in `src/app.js`.
- Added feedback bubble and result panel for key read rate.
- Added game bible and visual prompt exports for heart key cut-ins.
