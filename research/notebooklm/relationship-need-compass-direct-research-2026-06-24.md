# Relationship Need Compass Direct Research - 2026-06-24

## Research Meta

- Topic: Relationship need satisfaction, player agency, and character-specific dating feedback for Love Type Lab
- Method: Direct web research fallback while NotebookLM MCP authentication is expired
- Product import target: `src/app.js`, `src/styles.css`, `src/gameDesign.js`, game bible and visual prompt exports
- Status: Imported

## Sources

- Self-Determination Theory, Theory overview: https://selfdeterminationtheory.org/theory/
- Hadden, Rodriguez, Knee, and Porter, Relationship autonomy and support provision in romantic relationships: https://selfdeterminationtheory.org/wp-content/uploads/2015/12/Hadden_Rodriguez_Knee_Porter_20151.pdf
- University XP, What is Player Agency?: https://www.universityxp.com/blog/2020/8/20/what-is-player-agency
- The Myers-Briggs Company, MBTI personality type and relationships: https://www.themyersbriggs.com/en-us/access-resources/articles/mbti-personality-type-and-relationships
- Game Developer, When choice becomes a metric, narrative design suffers: https://www.gamedeveloper.com/design/opinion-when-choice-becomes-a-metric-narrative-design-suffers

## Compact Findings

- SDT frames high-quality engagement around autonomy, competence, and relatedness. For a dating game, this maps to leaving the character choice, making the player feel they can improve, and showing how choices affect emotional closeness.
- Relationship autonomy research supports treating care as something that grows when both partners can act with volition. In product terms, pushy affection should not be rewarded just because it is enthusiastic.
- Player agency needs visible consequence and feedback. The app should show not only score deltas but what the choice changed in the character's inner state.
- Narrative choice feedback can become heavy-handed when every choice is reduced to a metric. Love Type Lab should use the metric as a learning overlay while keeping the character's emotional reaction conversational.
- MBTI-style type language is useful as a relationship discussion aid, but product copy should keep individual difference, maturity, consent, and context above type determinism.

## Import Payload

```json
{
  "mechanic": "need_compass",
  "purpose": "Make each scene's character-specific relationship need readable before and after choices.",
  "inputs": ["active_psychological_switch", "scene_contract", "reading_cue", "choice_branch", "tactical_fit", "heart_key_tone"],
  "states": ["watch", "open", "near", "risk"],
  "ui": "Pre-choice compact card and feedback chat bubble; result-screen summary of needs satisfied, nearly met, or threatened.",
  "scoring": "Small trust/comfort/misread adjustments only, so it guides play without replacing existing branch logic.",
  "asset_prompt_need": "Need compass UI cards and per-character state sets showing open/near/risk/watch relationship needs without baked text."
}
```

## Import Notes

- Added `needCompassRead`, `needCompassCard`, `needCompassSummary`, and `needCompassPanel`.
- Choice feedback now names whether the player satisfied, nearly met, or threatened the character's current relationship need.
- Updated research basis, game bible export, and visual prompt export for need-compass assets.
