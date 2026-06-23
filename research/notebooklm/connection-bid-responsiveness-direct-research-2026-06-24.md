# Connection Bid Responsiveness Direct Research - 2026-06-24

## Research Meta

- Topic: Bids for connection, perceived partner responsiveness, and emotional consequence design for Love Type Lab
- Method: Direct web research fallback while NotebookLM MCP authentication is expired
- Product import target: `src/app.js`, `src/styles.css`, `src/gameDesign.js`, game bible and visual prompt exports
- Status: Imported

## Sources

- Reis, Clark, and Holmes, Perceived partner responsiveness as an organizing construct in intimacy and closeness: https://www.sas.rochester.edu/psy/people/faculty/reis_harry/assets/pdf/ReisClarkHolmes_2004.pdf
- The Gottman Institute, Improve Your Relationship by Paying Attention to Bids: https://www.gottman.com/blog/want-to-improve-your-relationship-start-paying-more-attention-to-bids/
- Utah Valley University, Bids for Connection: https://www.uvu.edu/community-clinic/blog/bids_for_connection.html
- Game Studies, This Action Will Have Consequences: https://gamestudies.org/1901/articles/stang
- University XP, What is Player Agency?: https://www.universityxp.com/blog/2020/8/20/what-is-player-agency

## Compact Findings

- Perceived partner responsiveness is a useful product lens for romance gameplay: players should learn whether the character felt seen, understood, and cared for, not only whether a score increased.
- Bids for connection can be verbal or nonverbal and can be very small. A dating sim can make each character line function as a bid for attention, validation, play, repair, vulnerability, or future commitment.
- Bid responses are easier to teach when classified into a small taxonomy: turn toward, turn with spark, turn away, or turn against.
- Narrative choices feel more consequential when the emotional result is visible, even if the core plot remains mostly linear. A bid-response log gives emotional consequence without requiring a large new branch tree.
- This mechanic should be advisory, not diagnostic. The app should frame it as communication practice and preserve consent, context, and individual difference.

## Import Payload

```json
{
  "mechanic": "connection_bid",
  "purpose": "Make small character signals playable as emotional bids the player can notice or miss.",
  "inputs": ["scene_index", "scene_reading_cue", "scene_contract", "choice_branch", "choice_kind", "need_compass_tone", "heart_key_tone"],
  "states": ["watch", "toward", "spark", "away", "against"],
  "bid_types": ["attention", "curiosity", "affirm", "presence", "future", "validation", "protect", "play", "remember", "closer", "repair", "vulnerability", "reset", "ready", "commit", "after"],
  "ui": "Pre-choice connection-bid card, feedback chat bubble, and result-screen bid response summary.",
  "scoring": "Small trust/comfort/interest/misread/pressure adjustments that complement existing route and need-compass logic.",
  "asset_prompt_need": "Connection bid UI cards and per-character state sets for turn toward, turn with spark, turn away, and turn against."
}
```

## Import Notes

- Added `connectionBidRead`, `connectionBidCard`, `connectionBidSummary`, and `connectionBidPanel`.
- Choice feedback now shows whether the answer turned toward, turned with spark, turned away, or turned against the character's bid.
- Updated research basis, game bible export, and visual prompt export for connection-bid assets.
