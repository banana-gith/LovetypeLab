import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { activePersonaSwitch, characterFinaleScene, characterGameDesign, characterRouteEnding, routeEndings, sceneCharacterSubtext, sceneCoaching, sceneEmotionalContract, sceneTacticalRead } from "../src/gameDesign.js";
import { storyFor } from "../src/story.js";

const characters = [
  {
    id: "mina",
    type: "INFJ",
    name: "ミナ",
    assetSet: "mina",
    ext: "jpg",
    fixedLook:
      "20代半ばの女性。静かな美人。黒髪寄りのダークブラウン、やわらかいミディアムヘア。生成りや深いネイビーの落ち着いた服。視線は控えめだが、心が動いた時に目元がほどける。",
  },
  {
    id: "rio",
    type: "ENFP",
    name: "リオ",
    assetSet: "rio",
    ext: "jpg",
    fixedLook:
      "20代前半の女性。明るく自然体の可愛い美人。明るめブラウンの肩下ゆるいウェーブ、風で少し乱れる軽さ。白、生成り、淡いオレンジ、デニム、小さなアクセサリー。",
  },
  {
    id: "nagi",
    type: "INFP",
    name: "ナギ",
    assetSet: "nagi",
    ext: "jpg",
    fixedLook:
      "20代半ばの女性。静かで透明感のある美人。柔らかい黒髪からダークブラウンのセミロング、少し癖のある毛先。淡いラベンダー、生成り、グレー、ゆるいカーディガン、細い指先、小さな月形アクセサリー。視線は控えめで、好きなものの話になると目元が静かに明るくなる。",
  },
  {
    id: "aoi",
    type: "INTP",
    name: "アオイ",
    assetSet: "aoi",
    ext: "jpg",
    fixedLook:
      "20代前半から半ばの女性。知的で静かな透明感。黒髪に近いダークネイビーのミディアム、前髪は自然に流れる。白、アイスブルー、グレー、ネイビーのシンプルな服。細い銀縁メガネを時々かける。表情は控えめで、面白い仮説に触れた時だけ目元が少し明るくなる。",
  },
  {
    id: "haruka",
    type: "ISTJ",
    name: "ハルカ",
    assetSet: "haruka",
    ext: "jpg",
    fixedLook:
      "20代後半の女性。清潔感のある端正な美人。暗めブラウンのストレートボブ、白シャツ、淡いグレーのカーディガン、腕時計、整った小物。姿勢がよく、表情は穏やかで慎重。",
  },
  {
    id: "yu",
    type: "ESTP",
    name: "ユウ",
    assetSet: "yu",
    ext: "jpg",
    fixedLook:
      "20代後半の男性。健康的で軽快、スポーツブランドPRらしい自然な華やかさ。短めの黒髪、アウトドアジャケットやカジュアルシャツ。笑う時は距離が近く、真剣な時は視線がまっすぐ。",
  },
  {
    id: "reina",
    type: "ENTJ",
    name: "レイナ",
    assetSet: "entj",
    ext: "png",
    fixedLook:
      "20代前半の女性。大人びすぎない美人。切れ長の目、整った眉、意志の強い口元。黒に近いダークブラウンの肩下ストレートヘア。白シャツ、ネイビーや黒のジャケット、ミニマルで上質な服。",
  },
];

const root = process.cwd();
const outDir = path.join(root, "research", "visual-prompts");
const outFile = path.join(outDir, "date-scene-prompts.md");

function assetPath(character, index) {
  return path.join(root, "assets", character.assetSet, `scene-${String(index + 1).padStart(2, "0")}.${character.ext}`);
}

function promptFor(character, scene, index) {
  const design = characterGameDesign[character.id];
  const story = storyFor(character.id);
  const total = story.dates.reduce((sum, date) => sum + date.scenes.length, 0);
  const coach = sceneCoaching(character.id, scene, index, total);
  const tactic = sceneTacticalRead(character.id, index, total);
  const contract = sceneEmotionalContract(character.id, scene, index, total);
  const activeSwitch = activePersonaSwitch(character.id, index, total);
  return [
    `恋愛シミュレーションゲームのデートシーン用、縦長スマホUIで使う正方形寄りの写真素材。`,
    character.fixedLook,
    `場面: ${scene.title}。場所/小物: ${scene.location}。`,
    `心理: ${scene.goal}。この場面の心理スイッチは「${activeSwitch.label}」。開くサイン: ${activeSwitch.tell}。開く条件: ${activeSwitch.opens}。`,
    `会話スキルは「${coach.skill}」、見るべきサインは「${coach.watch}」。場面別タクティックは「${tactic.title}」、刺さる動きは「${tactic.prefer || "場面次第"}」、危ない動きは「${tactic.avoid || "読み違い"}」。この場面の恋愛契約は「${contract.mode}場面」、隠れた願いは「${contract.hiddenAsk}」。${design?.visualFormula || ""}`,
    `恋愛相手本人は画面に出さず、視線、2人分の飲み物、空いた席、スマホ通知、差し出された小物、余白で相手の存在を示す。`,
    `自然光または映画的な夜の光、浅い被写界深度、上質でリアル、過度な加工なし。画像内に文字、番号、字幕、ロゴを入れない。`,
    `scene-${String(index + 1).padStart(2, "0")}`,
  ].join(" ");
}

const lines = [
  "# Love Type Lab Date Scene Image Prompts",
  "",
  "Generated from `src/story.js` and `src/gameDesign.js`.",
  "All prompts assume: no text in image, no visible dating partner, adult-looking characters, respectful romantic tone.",
  "",
  "## Shared UI Asset Prompts",
  "",
  "- **Feedback stamp set**: Four premium sticker-like UI stamps for a Japanese mobile dating simulation, labels Great / Good / Close / Miss, soft cream paper texture, coral, teal, amber, muted gray variants, rounded rectangle stamp border, no character faces, transparent background, high contrast for mobile.",
  "- **Conversation lesson badges**: Sixteen small pill badges for conversation skills such as OBSERVE, OPEN, SYNC, VALUE, REPAIR, CORE, SPACE, MOVE, REMEMBER, CLOSER, CONFLICT, TRUTH, RESET, READY, COMMIT, AFTER. Luxury minimal style, dark ink and warm cream, subtle colored accent, transparent background.",
  "- **Route and combo cards**: Compact card backgrounds for Trust, Spark, Repair, Balance, and Love routes, glassy cream surface, soft shadows, faint gradient accents, no readable text baked into image, optimized for 390px wide smartphone UI.",
  "- **Ending album route cards**: Five collectible ending album card backgrounds for Repair / Reconnect / Spark / Trust / Balance, premium dark chocolate UI, warm cream foil accents, one locked-state variant with soft blur, no readable text baked into image, optimized for compact Japanese mobile game result screens.",
  "- **Character understanding cards**: Three small progress-card backgrounds for psychological switches, open / near / risk states, warm cream paper, subtle coral-gold accent line, thin progress bar space, no readable text baked into image, transparent background option for UI composition.",
  "- **Read-the-room cue cards**: Compact dark premium UI cards for pre-choice observation hints, warm cream foil label area, tiny icon space for eye / breath / clock / spark / compass, no readable text baked into image, optimized for 390px smartphone scenes.",
  "- **Date mission cards**: Three compact mobile mission card backgrounds for Date 1 / Date 2 / Date 3 progress, premium warm cream and dark chocolate variants, small progress bar space, tiny trophy / compass / heart-line icon slots, no readable text baked into image, optimized for 390px smartphone game UI.",
  "- **Love contract cards**: Compact mobile UI card backgrounds for scene-specific romance tactics, four mode variants named enter / approach / repair / commit, premium cream paper and dark chocolate foil accents, tiny contract seal icon space, no readable text baked into image, optimized for 390px smartphone game UI.",
  "- **Relationship arc report cards**: Four compact result-screen UI cards for a dating simulation, representing entrance distance, approach temperature, repair after conflict, and commitment moment. Premium cream paper, dark chocolate ink, soft coral and character-color accents, tiny progress bar and small seal icon spaces, no readable text baked into image, optimized for 390px smartphone result screens.",
  "- **Unsaid subtext chat cards**: Compact chat-bubble UI cards for character inner subtext after a player choice, three emotional variants trust / spark / risk, premium cream paper, soft shadow, character-color accent line, no readable text baked into image, optimized for immersive Japanese mobile dating-sim feedback overlays.",
  "",
];

for (const character of characters) {
  const story = storyFor(character.id);
  const total = story.dates.reduce((sum, date) => sum + date.scenes.length, 0);
  const existing = Array.from({ length: total }, (_, index) => existsSync(assetPath(character, index))).filter(Boolean).length;
  lines.push(`## ${character.name} / ${character.type}`);
  lines.push("");
  lines.push(`- Required scenes: ${total}`);
  lines.push(`- Existing local assets: ${existing}/${total}`);
  lines.push(`- Missing local assets: ${total - existing}`);
  lines.push(`- Fixed look: ${character.fixedLook}`);
  lines.push("");
  const design = characterGameDesign[character.id];
  lines.push("### Extra route / heart memo assets");
  lines.push("");
  lines.push(`- **Heart memo reveal cut-in**: ${character.fixedLook} 「${design.innerLayer.privateWish}」という内面が静かに伝わる、恋愛シミュレーション結果画面用のカットイン。${design.visualFormula} 画面内に文字、番号、ロゴを入れない。恋愛相手は映さず、視線、手元、余白、二人分の小物で関係性を示す。`);
  lines.push(`- **Route compass UI background set**: ${character.fixedLook} 安心・火花・修復・バランスの4方向に分岐しそうな恋愛シミュレーションUI背景。成功ルートは距離が少し近く、修復ルートは同じ席に戻る余白、火花ルートは笑いの直後の視線、安心ルートは穏やかな手元で表す。${design.visualFormula} 画面内文字なし、UI合成前提、恋愛相手は映さない。`);
  lines.push(`- **Replay plan notebook UI background**: ${character.fixedLook} 次周の作戦ノート画面用の背景。未解放ルート、心理スイッチ、本音の鍵、修復ポイントを思い出している余韻。机上のメモ、スマホの予定、二人分の小物、次に会う場所を示すチケットや地図。${design.visualFormula} 画面内文字なし、UI合成前提、恋愛相手は映さない。`);
  lines.push(`- **Character decoder state set**: ${character.fixedLook} 「刺さるスイッチ」と「冷めるサイン」をUIカード用に見せる差分セット。刺さる状態は${design.attractionSwitches.join("、")}が表情に出る。冷める状態は${design.turnOffs.join("、")}が起きた直後の小さな距離、視線の外れ、手元のこわばりで表す。修復状態は同じ席に戻り、緊張が少しほどける。${design.visualFormula} 画面内文字なし、UI合成前提、恋愛相手は映さない。`);
  for (const route of Object.values(routeEndings)) {
    const flavoredRoute = characterRouteEnding(character.id, route.key);
    const finale = characterFinaleScene(character.id, route.key, "mixed");
    lines.push(`- **Route ending CG / ${route.key}**: ${character.fixedLook} ${flavoredRoute.cgCue}。${design.visualFormula} 画面内に文字、番号、ロゴなし。恋愛相手は映さず、二人分の小物、視線、余白で関係性を示す。`);
    lines.push(`- **Personal finale CG / ${route.key} ${finale.badge}**: ${character.fixedLook} 「${finale.line}」という最後の一言が表情だけで伝わる恋愛シミュレーション結果用CG。${finale.cgCue}。次の余韻は「${finale.nextBeat}」。画面内文字、番号、字幕、ロゴなし。恋愛相手は映さず、視線、二人分の飲み物、空いた席、手元、余白で関係性を示す。`);
  }
  for (const item of design.psychologicalSwitches) {
    lines.push(`- **Psychological switch cut-in / ${item.label}**: ${character.fixedLook} 「${item.tell}」という変化が、表情・視線・手元・余白だけで伝わる一枚。テーマは「${item.opens}」。失敗差分では「${item.hurts}」が起きた直後の少し距離が出た表情にする。UI合成前提、文字・番号・ロゴなし、恋愛相手は映さない。`);
  }
  for (const item of design.readingCues || []) {
    lines.push(`- **Read-the-room cue visual**: ${character.fixedLook} 「${item.signal}」が一目で伝わる観察用カット。良い読みは「${item.goodRead}」、誤読差分は「${item.misread}」。画面内文字なし、視線・手元・二人分の小物・余白で表現。`);
  }
  lines.push(`- **Continuity callback UI card set**: ${character.fixedLook} 以前の選択が今の距離感に残っていることを示す補助カット群。安心は柔らかい視線、火花は少し近い前傾、揺れは視線の外し、修復は緊張がほどける手元で表す。${design.memoryEcho?.imageCue || design.visualFormula}。画面内文字なし、UI合成前提、恋愛相手は映さない。`);
  for (let index = 0; index < total; index += 1) {
    const tactic = sceneTacticalRead(character.id, index, total);
    const contract = sceneEmotionalContract(character.id, story.dates.flatMap((date) => date.scenes)[index], index, total);
    const subtexts = ["safe", "spark", "strain"].map((branch) => sceneCharacterSubtext(character.id, index, total, branch));
    lines.push(`- **Tactical read UI cut-in / ${String(index + 1).padStart(2, "0")} ${tactic.title}**: ${character.fixedLook} 場面別タクティック「${tactic.title}」が表情と余白で伝わる補助カット。刺さる動きは「${tactic.prefer || "場面次第"}」、危ない動きは「${tactic.avoid || "読み違い"}」。${tactic.read} 画面内文字なし、UI合成前提、恋愛相手は映さない。`);
    lines.push(`- **Heart key unlock cut-in / ${String(index + 1).padStart(2, "0")} ${contract.mode}**: ${character.fixedLook} 「${contract.hiddenAsk}」を読めた瞬間の補助カット。成功差分は緊張がほどけて視線が少し近づき、失敗差分は言葉にしない警戒が手元や姿勢に出る。${tactic.read} 画面内文字なし、UI合成前提、恋愛相手は映さない。`);
    lines.push(`- **Love contract UI cut-in / ${String(index + 1).padStart(2, "0")} ${contract.mode}**: ${character.fixedLook} 「${contract.surface}」と「${contract.hiddenAsk}」が、表情・小物・余白だけで伝わる補助カット。勝ち筋は「${contract.winningMove}」、罠差分は「${contract.temptingMove}」。画面内文字なし、UI合成前提、恋愛相手は映さない。`);
    for (const subtext of subtexts) {
      lines.push(`- **Unsaid subtext cut-in / ${String(index + 1).padStart(2, "0")} ${subtext.badge}**: ${character.fixedLook} ${subtext.imageCue} 内面コピーは「${subtext.title}: ${subtext.copy}」。画面内文字なし、UI合成前提、恋愛相手は映さない。`);
    }
  }
  for (const [missionIndex, mission] of (design.dateMissions || []).entries()) {
    lines.push(`- **Date mission clear cut-in / Date ${missionIndex + 1} ${mission.badge}**: ${character.fixedLook} 「${mission.title}」を達成した余韻が伝わる一枚。${mission.imageCue}。成功感は「${mission.success}」、失敗差分では「${mission.risk}」が表情と距離に出る。画面内文字なし、UI合成前提、恋愛相手は映さない。`);
  }
  for (const key of ["safe", "spark", "strain", "repair", "mixed"]) {
    const memory = design.memoryEcho?.[key];
    if (!memory) continue;
    lines.push(`- **Character memory echo / ${key} ${memory.label}**: ${character.fixedLook} プレイヤーの接し方が「${memory.label}」として残っていることが表情・距離・手元で伝わる一枚。${design.memoryEcho.imageCue}。記憶の意味は「${memory.copy}」。画面内文字なし、UI合成前提、恋愛相手は映さず二人分の小物で存在を示す。`);
  }
  lines.push("");
  let cursor = 0;
  for (const date of story.dates) {
    lines.push(`### ${date.title}`);
    lines.push("");
    for (const scene of date.scenes) {
      const prompt = promptFor(character, scene, cursor);
      const status = existsSync(assetPath(character, cursor)) ? "existing" : "needed";
      lines.push(`${cursor + 1}. **${scene.title}** (${status})`);
      lines.push("");
      lines.push(`   ${prompt}`);
      lines.push("");
      cursor += 1;
    }
  }
}

await mkdir(outDir, { recursive: true });
await writeFile(outFile, `${lines.join("\n").trim()}\n`, "utf8");
console.log(`Wrote ${outFile}`);
