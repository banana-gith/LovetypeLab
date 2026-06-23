import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { activePersonaSwitch, characterGameDesign, researchBasis, routeEndings, sceneCoaching, sceneDramaturgy } from "../src/gameDesign.js";
import { personaCatalog } from "../src/personas.js";
import { storyFor } from "../src/story.js";

const characters = [
  ["mina", "INFJ", "ミナ"],
  ["rio", "ENFP", "リオ"],
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
  lines.push(`**Attraction switches:** ${design.attractionSwitches.join(" / ")}`);
  lines.push("");
  lines.push(`**Turn-offs:** ${design.turnOffs.join(" / ")}`);
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
      const activeSwitch = activePersonaSwitch(id, index, total);
      lines.push(`${index + 1}. **${scene.title}**`);
      lines.push(`   - Location: ${scene.location}`);
      lines.push(`   - Scene goal: ${scene.goal}`);
      lines.push(`   - Active switch: ${activeSwitch.label} / opens when ${activeSwitch.opens}`);
      lines.push(`   - Switch tell: ${activeSwitch.tell}`);
      lines.push(`   - Dramaturgy: ${beat.beat} / ${beat.focus}`);
      lines.push(`   - Player move: ${beat.playerMove}`);
      lines.push(`   - Skill: ${coach.badge} / ${coach.skill}`);
      lines.push(`   - Player lesson: ${coach.lesson}`);
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
