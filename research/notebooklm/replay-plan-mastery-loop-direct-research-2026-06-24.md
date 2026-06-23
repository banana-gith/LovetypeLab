# Replay Plan Mastery Loop Direct Research - 2026-06-24

## Research Meta

- Topic: Replay goals, mastery feedback loops, and next-run planning for Love Type Lab
- Method: Direct web research fallback while NotebookLM MCP authentication is expired
- Product import target: `src/app.js`, `src/styles.css`, game bible and visual prompt exports
- Status: Imported

## Sources

- Ryan, Rigby, and Przybylski, The Motivational Pull of Video Games: A Self-Determination Theory Approach: https://selfdeterminationtheory.org/SDT/documents/2006_RyanRigbyPrzybylski_MandE.pdf
- University XP, Self-Determination Theory and games: https://www.universityxp.com/blog/2021/2/9/what-is-self-determination-theory
- Amy Jo Kim, Learning Loop: https://amyjokim.medium.com/got-churn-tune-up-your-learning-loop-e2e1c3a5cdb2
- Machinations, game feedback loops: https://machinations.io/articles/game-systems-feedback-loops-and-how-they-help-craft-player-experiences

## Compact Findings

- Self-determination theory maps well to replay design: autonomy through choosing the next route, competence through a concrete skill target, and relatedness through deeper character understanding.
- A useful replay loop should not only show a score. It should tell the player what they learned, what remains locked, and one small plan to try next.
- Feedback loops can reward success but should also create recoverable challenges. In Love Type Lab, repair and rerouting are more valuable than a single perfect path.
- A short post-run plan is especially useful for a static MVP because it creates replay value without requiring a large new branch script.

## Import Payload

```json
{
  "mechanic": "replay_plan",
  "purpose": "Turn the ending screen into a next-run mastery loop.",
  "inputs": ["current_route", "locked_routes", "unopened_switches", "heart_key_score", "decoder_risks"],
  "ui": "Result-screen next-run strategy panel with 3-4 concrete tasks.",
  "asset_prompt_need": "Replay plan notebook UI background showing notes, tickets, small shared objects, and next-date intent."
}
```

## Import Notes

- Added `replayPlanReport` and `replayPlanPanel`.
- Result screen now shows a next-run plan before the mission board.
- Added game bible and visual prompt export rules for replay-plan assets.
