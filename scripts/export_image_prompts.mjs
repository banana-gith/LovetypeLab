import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { characterGameDesign, sceneCoaching } from "../src/gameDesign.js";
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
  return [
    `恋愛シミュレーションゲームのデートシーン用、縦長スマホUIで使う正方形寄りの写真素材。`,
    character.fixedLook,
    `場面: ${scene.title}。場所/小物: ${scene.location}。`,
    `心理: ${scene.goal}。会話スキルは「${coach.skill}」、見るべきサインは「${coach.watch}」。${design?.visualFormula || ""}`,
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
