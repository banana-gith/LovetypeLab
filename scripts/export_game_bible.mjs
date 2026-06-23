import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { activePersonaSwitch, characterFinaleScene, characterGameDesign, characterRouteEnding, researchBasis, routeEndings, sceneCharacterSubtext, sceneCoaching, sceneDramaturgy, sceneEmotionalContract, sceneTacticalRead } from "../src/gameDesign.js";
import { personaCatalog } from "../src/personas.js";
import { storyFor } from "../src/story.js";

const characters = [
  ["mina", "INFJ", "ミナ"],
  ["rio", "ENFP", "リオ"],
  ["nagi", "INFP", "ナギ"],
  ["aoi", "INTP", "アオイ"],
  ["haruka", "ISTJ", "ハルカ"],
  ["yu", "ESTP", "ユウ"],
  ["reina", "ENTJ", "レイナ"],
];

const outDir = path.join(process.cwd(), "research", "game-design");
const outFile = path.join(outDir, "love-type-lab-character-bible.md");

const lines = [
  "# Love Type Lab Character Bible",
  "",
  "This file is generated from product data. Update `src/personas.js`, `src/story.js`, or `src/gameDesign.js`, then rerun `npm run export:game-bible`.",
  "",
  "## Research Basis",
  "",
  ...researchBasis.flatMap((source) => [
    `- [${source.title}](${source.url})`,
    `  - ${source.takeaway}`,
  ]),
  "",
  "## Game Design Principles",
  "",
  "- The player is not choosing a universal correct answer. They are reading this character's needs, wounds, and current emotional temperature.",
  "- Strong answers combine respect, consent, and character-specific timing.",
  "- Bad answers should be plausible enough to tempt the player, but fail because they ignore the scene's emotional logic.",
  "- Every route should teach a reusable communication insight, not just punish the player.",
  "- The game now returns player-facing mastery signals: branch combo, play style, and unlocked conversation lessons.",
  "- Combo labels should make the player feel a readable flow: trust streak, spark streak, or repair chance.",
  "- The final report should explain not only compatibility, but the player's recurring habit and next practice target.",
  "- Psychological switches should work as a readable character-understanding loop: the player sees what opens, what hurts, and which switches they learned to handle.",
  "",
  "## Route Endings",
  "",
  "These endings are selected by the player's pattern, not by a single final answer. Each ending should feel like a playable route with a next-run mission.",
  "",
  ...Object.values(routeEndings).flatMap((route) => [
    `### ${route.badge || route.key.toUpperCase()} / ${route.epilogueTitle}`,
    "",
    `- Key: ${route.key}`,
    `- Album name: ${route.albumName}`,
    `- Unlock hint: ${route.unlockHint}`,
    `- Player pattern: ${route.playerPattern}`,
    `- Epilogue: ${route.epilogue}`,
    `- Next-run mission: ${route.replayMission}`,
    `- Ending CG cue: ${route.cgCue}`,
    "",
  ]),
];

for (const [id, type, name] of characters) {
  const persona = personaCatalog[type];
  const design = characterGameDesign[id];
  const story = storyFor(id);
  const total = story.dates.reduce((sum, date) => sum + date.scenes.length, 0);
  lines.push(`## ${name} / ${type}`);
  lines.push("");
  lines.push(`**Promise:** ${design.playerPromise}`);
  lines.push("");
  lines.push(`**Core tension:** ${design.coreTension}`);
  lines.push("");
  lines.push(`**Winning mindset:** ${design.winningMindset}`);
  lines.push("");
  lines.push(`**Temptation trap:** ${design.temptationTrap}`);
  lines.push("");
  lines.push(`**Visual formula:** ${design.visualFormula}`);
  lines.push("");
  lines.push(`**Player fantasy:** ${design.playerFantasy}`);
  lines.push("");
  lines.push(`**Signature dilemma:** ${design.signatureDilemma}`);
  lines.push("");
  lines.push("### Date Missions");
  lines.push("");
  for (const [missionIndex, mission] of (design.dateMissions || []).entries()) {
    lines.push(`- **Date ${missionIndex + 1}: ${mission.badge} / ${mission.title}**`);
    lines.push(`  - Aim: ${mission.aim}`);
    lines.push(`  - Target: ${mission.target}`);
    lines.push(`  - Success: ${mission.success}`);
    lines.push(`  - Risk: ${mission.risk}`);
    lines.push(`  - Mission image cue: ${mission.imageCue}`);
  }
  lines.push("");
  lines.push("### Relationship Arc Modes");
  lines.push("");
  const modeBuckets = new Map();
  let contractIndex = 0;
  for (const date of story.dates) {
    for (const scene of date.scenes) {
      const contract = sceneEmotionalContract(id, scene, contractIndex, total);
      if (!modeBuckets.has(contract.mode)) modeBuckets.set(contract.mode, []);
      modeBuckets.get(contract.mode).push(`${String(contractIndex + 1).padStart(2, "0")} ${scene.title}: ${contract.hiddenAsk}`);
      contractIndex += 1;
    }
  }
  for (const [mode, items] of modeBuckets) {
    lines.push(`- **${mode}**`);
    for (const item of items) lines.push(`  - ${item}`);
  }
  lines.push("");
  lines.push("### Character Memory Echoes");
  lines.push("");
  lines.push("Use these echoes as continuity callbacks: later scene context should name the earlier player move that is still affecting trust, spark, strain, or repair. The callback should feel like the character remembers a specific attitude, not like a generic score bonus.");
  lines.push("");
  for (const key of ["safe", "spark", "strain", "repair", "mixed"]) {
    const memory = design.memoryEcho?.[key];
    if (!memory) continue;
    lines.push(`- **${key}: ${memory.label}**`);
    lines.push(`  - ${memory.copy}`);
  }
  if (design.memoryEcho?.imageCue) lines.push(`- Memory image cue: ${design.memoryEcho.imageCue}`);
  lines.push("");
  lines.push(`**Attraction switches:** ${design.attractionSwitches.join(" / ")}`);
  lines.push("");
  lines.push(`**Turn-offs:** ${design.turnOffs.join(" / ")}`);
  lines.push("");
  lines.push("### Character Route Endings");
  lines.push("");
  for (const route of Object.values(routeEndings)) {
    const flavoredRoute = characterRouteEnding(id, route.key);
    const finale = characterFinaleScene(id, route.key, "mixed");
    lines.push(`- **${flavoredRoute.badge} / ${flavoredRoute.epilogueTitle}**`);
    lines.push(`  - Player pattern: ${flavoredRoute.playerPattern}`);
    lines.push(`  - Epilogue: ${flavoredRoute.epilogue}`);
    lines.push(`  - Finale line: 「${finale.line}」`);
    lines.push(`  - Finale memory bridge: ${finale.memoryBridge}`);
    lines.push(`  - Next-run mission: ${flavoredRoute.replayMission}`);
    lines.push(`  - Finale next beat: ${finale.nextBeat}`);
    lines.push(`  - Character CG cue: ${flavoredRoute.cgCue}`);
    lines.push(`  - Finale CG cue: ${finale.cgCue}`);
  }
  lines.push("");
  lines.push("### Psychological Switches");
  lines.push("");
  for (const item of design.psychologicalSwitches) {
    lines.push(`- **${item.label}**`);
    lines.push(`  - Opens: ${item.opens}`);
    lines.push(`  - Hurts: ${item.hurts}`);
    lines.push(`  - Tell: ${item.tell}`);
  }
  lines.push("");
  lines.push("### Reading Cues");
  lines.push("");
  for (const item of design.readingCues || []) {
    lines.push(`- Signal: ${item.signal}`);
    lines.push(`  - Good read: ${item.goodRead}`);
    lines.push(`  - Misread: ${item.misread}`);
    lines.push(`  - Player question: ${item.playerQuestion}`);
  }
  lines.push("");
  lines.push("### Inner Layer");
  lines.push("");
  lines.push(`- Public mask: ${design.innerLayer.mask}`);
  lines.push(`- Fear: ${design.innerLayer.fear}`);
  lines.push(`- Opens when: ${design.innerLayer.opensWhen}`);
  lines.push(`- Closes when: ${design.innerLayer.closesWhen}`);
  lines.push(`- Private wish: ${design.innerLayer.privateWish}`);
  lines.push(`- Confession need: ${design.innerLayer.confessionNeed}`);
  lines.push("");
  lines.push("### Persona");
  lines.push("");
  lines.push(`- Summary: ${persona.summary}`);
  lines.push(`- Needs: ${persona.relationshipNeeds.join(" / ")}`);
  lines.push(`- Conflict: ${persona.conflictPattern}`);
  lines.push(`- Reassurance: ${persona.reassuranceStyle}`);
  lines.push(`- Good lines: ${persona.goodLines.join(" / ")}`);
  lines.push(`- Bad lines: ${persona.badLines.join(" / ")}`);
  lines.push("");
  lines.push("### Story Arc");
  lines.push("");
  let index = 0;
  for (const date of story.dates) {
    lines.push(`#### ${date.title}`);
    lines.push("");
    lines.push(`Purpose: ${date.purpose}`);
    lines.push("");
    for (const scene of date.scenes) {
      const beat = sceneDramaturgy(id, scene, index, total);
      const coach = sceneCoaching(id, scene, index, total);
      const tactic = sceneTacticalRead(id, index, total);
      const contract = sceneEmotionalContract(id, scene, index, total);
      const safeSubtext = sceneCharacterSubtext(id, index, total, "safe");
      const sparkSubtext = sceneCharacterSubtext(id, index, total, "spark");
      const strainSubtext = sceneCharacterSubtext(id, index, total, "strain");
      const activeSwitch = activePersonaSwitch(id, index, total);
      lines.push(`${index + 1}. **${scene.title}**`);
      lines.push(`   - Location: ${scene.location}`);
      lines.push(`   - Scene goal: ${scene.goal}`);
      lines.push(`   - Active switch: ${activeSwitch.label} / opens when ${activeSwitch.opens}`);
      lines.push(`   - Switch tell: ${activeSwitch.tell}`);
      lines.push(`   - Dramaturgy: ${beat.beat} / ${beat.focus}`);
      lines.push(`   - Player move: ${beat.playerMove}`);
      lines.push(`   - Love contract: ${contract.mode} / ${contract.surface}`);
      lines.push(`   - Hidden ask: ${contract.hiddenAsk}`);
      lines.push(`   - Tempting wrong move: ${contract.temptingMove}`);
      lines.push(`   - Winning move: ${contract.winningMove}`);
      lines.push(`   - Unsaid safe subtext: ${safeSubtext.title} / ${safeSubtext.copy}`);
      lines.push(`   - Unsaid spark subtext: ${sparkSubtext.title} / ${sparkSubtext.copy}`);
      lines.push(`   - Unsaid strain subtext: ${strainSubtext.title} / ${strainSubtext.copy}`);
      lines.push("   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.");
      lines.push(`   - Skill: ${coach.badge} / ${coach.skill}`);
      lines.push(`   - Player lesson: ${coach.lesson}`);
      lines.push(`   - Tactical read: ${tactic.badge} / ${tactic.title}`);
      lines.push(`   - Preferred move: ${tactic.prefer || "scene-dependent"}`);
      lines.push(`   - Risky move: ${tactic.avoid || "misread"}`);
      lines.push(`   - Tactical note: ${tactic.read}`);
      lines.push(`   - Payoff: ${coach.payoff}`);
      lines.push(`   - Trap: ${coach.trap}`);
      lines.push("");
      index += 1;
    }
  }
}

await mkdir(outDir, { recursive: true });
await writeFile(outFile, `${lines.join("\n").trim()}\n`, "utf8");
console.log(`Wrote ${outFile}`);
