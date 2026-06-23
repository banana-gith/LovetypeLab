# Character Decoder Repair Direct Research - 2026-06-24

## Research Meta

- Topic: Character-specific attraction switches, turn-offs, and repair feedback for Love Type Lab
- Method: Direct web research fallback while NotebookLM MCP authentication is expired
- Product import target: `src/app.js`, `src/styles.css`, game bible and visual prompt exports
- Status: Imported

## Sources

- Gottman Institute, R is for Repair: https://www.gottman.com/blog/r-is-for-repair/
- Gottman Institute, Bids for Connection: https://www.gottman.com/blog/want-to-improve-your-relationship-start-paying-more-attention-to-bids/
- Gottman Institute, Turn Towards Instead of Away: https://www.gottman.com/blog/turn-toward-instead-of-away/
- Gottman Institute, Stop Trying to Fix Your Partner's Feelings: https://www.gottman.com/blog/stop-trying-fix-partners-feelings/

## Compact Findings

- Repair attempts should happen early and can be small statements or actions that prevent negative escalation.
- Small bids for connection may be verbal or nonverbal. Good relationship play should reward noticing the subtext, not only the explicit line.
- Turning toward a bid starts with attention. In Love Type Lab this maps to reading gaze, pauses, posture, topic changes, and small objects.
- Empathy in conflict means understanding the other person's inner world before correcting, defending, or solving.

## Import Payload

```json
{
  "mechanic": "character_decoder",
  "purpose": "Make each character feel distinct by naming what opened attraction, what triggered distance, and how to repair.",
  "positive_feedback": "Name the attraction switch that opened.",
  "risk_feedback": "Name the turn-off and give one repair line.",
  "result_feedback": "Summarize character understanding rate and list switches/turn-offs learned.",
  "asset_prompt_need": "Character decoder state set for attraction, turn-off, and repair states."
}
```

## Import Notes

- Added `decoderRead`, scene decoder cards, feedback decoder bubbles, and result `characterDecoderPanel`.
- Added game bible and visual prompt export rules for decoder states.
