import { personaCatalog } from "./personas.js";
import { characterGameDesign, personaSwitchFeedback, relationshipPulse, relationshipRoute, sceneCoaching, sceneDramaturgy } from "./gameDesign.js";
import { branchTone, storyFor } from "./story.js";

const $ = (selector) => document.querySelector(selector);

const BASE_SCORES = {
  trust: 35,
  interest: 32,
  comfort: 34,
  pressure: 12,
  misread: 10,
};

const scoreLabels = {
  trust: "信頼",
  interest: "興味",
  comfort: "居心地",
  pressure: "圧",
  misread: "すれ違い",
};

const scoreDecor = {
  trust: { icon: "heart", short: "\u5b89\u5fc3\u611f", hint: "\u4fe1\u983c" },
  interest: { icon: "spark", short: "\u304d\u3085\u3093\u5ea6", hint: "\u60f9\u304b\u308c" },
  comfort: { icon: "cloud", short: "\u3074\u3063\u305f\u308a", hint: "\u7a7a\u6c17" },
  pressure: { icon: "bolt", short: "\u62bc\u3057\u3059\u304e", hint: "\u63a7\u3048\u3081" },
  misread: { icon: "gap", short: "\u3059\u308c\u9055\u3044", hint: "\u8aad\u307f" },
};

function scoreIcon(name) {
  const icons = {
    heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.4-8.8-9.1C1.8 7.3 4 4.5 7.2 4.5c1.8 0 3.1 1 4.8 2.8 1.7-1.8 3-2.8 4.8-2.8 3.2 0 5.4 2.8 4 6.4C19 15.6 12 20 12 20Z"/></svg>',
    spark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z"/><path d="M18 15l.8 2.7L21.5 19l-2.7.8L18 22.5l-.8-2.7-2.7-.8 2.7-1.3L18 15Z"/></svg>',
    cloud: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 18h9.2a4.3 4.3 0 0 0 .4-8.6A6.1 6.1 0 0 0 5.4 11.7 3.3 3.3 0 0 0 7.5 18Z"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2L5 13h6l-1 9 9-13h-6l1-7Z"/></svg>',
    gap: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h7v4H4V7Zm9 6h7v4h-7v-4Z"/><path d="M8 17l2 2 2-2M16 7l-2-2-2 2"/></svg>',
    gauge: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 14a8 8 0 1 1 16 0"/><path d="M12 14l4-5"/><path d="M8 18h8"/></svg>',
  };
  return icons[name] || icons.gauge;
}

const characters = [
  {
    id: "mina",
    type: "INFJ",
    name: "ミナ",
    roman: "MINA",
    style: "INFJ風・静かな共感型",
    theme: "深い会話、余白、丁寧な距離感",
    age: "26歳",
    job: "書店企画",
    pace: "ゆっくり",
    difficulty: "初級",
    color: "#7c6cf2",
    light: "#e9e5ff",
    hair: "#342b5b",
    emoji: "◇",
    best: "empathize",
    bio: "言葉の奥にある気持ちを大切にするタイプ。静かな場所や、急がない会話で安心しやすい。",
    likes: ["読書", "小さな映画館", "夜の散歩"],
    caution: "結論を急がれること。気持ちを軽く扱われること。",
  },
  {
    id: "rio",
    type: "ENFP",
    name: "リオ",
    roman: "RIO",
    style: "ENFP風・ひらめき自由型",
    theme: "楽しさ、自由、テンポの良い反応",
    age: "23歳",
    job: "イベント制作",
    pace: "ふつう",
    difficulty: "中級",
    color: "#f08a3c",
    light: "#ffe7d2",
    hair: "#9b5b38",
    emoji: "✦",
    portrait: "/assets/rio/scene-03.jpg",
    portraitAlt: "カフェのテラスで自然に笑うリオ",
    best: "playful",
    bio: "明るく自然体で、笑うと一気に距離が縮まるタイプ。思いつきを大切にする一方、否定から入られると少し傷つきやすい。",
    likes: ["街歩き", "音楽フェス", "新しいカフェ"],
    caution: "作り込みすぎた空気。ひらめきをすぐ否定されること。",
  },
  {
    id: "haruka",
    type: "ISTJ",
    name: "ハルカ",
    roman: "HARUKA",
    style: "ISTJ風・誠実積み上げ型",
    theme: "約束、具体性、信頼形成",
    age: "28歳",
    job: "プロダクト設計",
    pace: "ゆっくり",
    difficulty: "中級",
    color: "#2d8c7b",
    light: "#d9f3eb",
    hair: "#1d504a",
    emoji: "□",
    best: "concrete",
    bio: "派手な言葉より、約束を守る姿勢に安心するタイプ。具体的で丁寧な誘いが響きやすい。",
    likes: ["建築", "朝の喫茶店", "文房具"],
    caution: "曖昧な誘い。時間や約束へのルーズさ。",
  },
  {
    id: "yu",
    type: "ESTP",
    name: "ユウ",
    roman: "YU",
    style: "ESTP風・体験シェア型",
    theme: "ノリ、行動、軽快な誘い",
    age: "27歳",
    job: "スポーツブランドPR",
    pace: "はやめ",
    difficulty: "上級",
    color: "#e89a27",
    light: "#ffedc9",
    hair: "#684319",
    emoji: "△",
    best: "action",
    bio: "面白そうならまず動いてみたいタイプ。長い説明より、一緒に体験できる誘いに反応しやすい。",
    likes: ["アウトドア", "辛いもの", "夜景ドライブ"],
    caution: "重すぎる話。遠回しすぎる表現。",
  },
  {
    id: "reina",
    type: "ENTJ",
    name: "レイナ",
    roman: "REINA",
    style: "ENTJ風・戦略直進型",
    theme: "知性、行動力、明確な言葉",
    age: "24歳",
    job: "事業開発",
    pace: "はやめ",
    difficulty: "上級",
    color: "#39506d",
    light: "#e6edf5",
    hair: "#2a2325",
    emoji: "♟",
    portrait: "/assets/entj/scene-03.png",
    portraitAlt: "まっすぐな視線で少しだけ笑うレイナ",
    assetSet: "entj",
    assetExt: "png",
    best: "concrete",
    bio: "姿勢がよく、言葉は端的。それでも相手の知性や行動力にはきちんと反応する、静かな熱量を持ったENTJ。曖昧さには弱いけれど、本気になった相手にはまっすぐ向き合う。",
    likes: ["夜景の見える店", "筋の通った会話", "段取りのいい誘い"],
    caution: "感情を後回しにして解決を急ぐと、一気に距離ができる。強さの裏にある緊張を見落とさないこと。",
  },
];

const datePlan = [
  {
    title: "初回デート",
    purpose: "警戒心をほどき、第一印象をつくる",
    scenes: [
      ["待ち合わせ", "少し緊張してたけど、このお店の雰囲気いいね。", "最初の一言で安心感をつくる"],
      ["趣味の聞き方", "休みの日って、気づいたら好きなことに没頭してるかも。", "相手の興味を自然に深掘りする"],
      ["褒め方", "今日の服、実はちょっと迷って選んだんだ。", "外見だけでなく選択を褒める"],
      ["沈黙", "こういう静かな時間も、私は嫌いじゃないな。", "沈黙を焦らず共有する"],
      ["次の約束", "今日は思ったより、あっという間だったね。", "相手に余白を残して提案する"],
    ],
  },
  {
    title: "価値観デート",
    purpose: "相手の大切なものを理解する",
    scenes: [
      ["仕事や生活", "最近、ちょっとペースを見直したいなって思ってて。", "助言より先に理解を示す"],
      ["悩みへの返答", "うまくいかないと、自分が悪いのかなって考えちゃう。", "解決を急がず共感する"],
      ["好きなもの", "好きな作品の話をすると、つい長くなっちゃう。", "熱量を歓迎する"],
      ["自己開示", "あなたは、落ち込んだ時どうしてる？", "重すぎない本音を返す"],
      ["3回目の提案", "また会えたらいいなって、少し思ってる。", "具体性と選択の余白を両立する"],
    ],
  },
  {
    title: "関係進展デート",
    purpose: "好意を伝え、関係の歩幅を合わせる",
    scenes: [
      ["好意の匂わせ", "一緒にいると、いつもより素直に話せる気がする。", "好意を穏やかに言葉にする"],
      ["距離感", "関係を急ぐより、ちゃんと知っていきたいな。", "相手のペースを尊重する"],
      ["迷いへの対応", "嬉しいけど、今すぐ答えるのは少し怖いかも。", "返事を迫らず安心を渡す"],
      ["これから", "会う回数が増えても、自分の時間も大切にしたい。", "境界線を肯定する"],
      ["帰り際", "今日はありがとう。もう少し話していたかったな。", "誠実に次へつなげる"],
    ],
  },
];

const effects = {
  empathize: { trust: 8, interest: 3, comfort: 7, pressure: -2, misread: -1 },
  playful: { trust: 3, interest: 8, comfort: 5, pressure: 0, misread: 0 },
  concrete: { trust: 8, interest: 4, comfort: 4, pressure: -1, misread: -2 },
  action: { trust: 3, interest: 8, comfort: 4, pressure: 1, misread: 0 },
  neutral: { trust: 2, interest: 1, comfort: 2, pressure: 0, misread: 1 },
  dismiss: { trust: -5, interest: -3, comfort: -5, pressure: 3, misread: 8 },
  pushy: { trust: -6, interest: -5, comfort: -6, pressure: 9, misread: 4 },
};

const choiceCopy = {
  empathize: "「そう感じたんだね。よかったら、もう少し聞かせて」",
  playful: "「それ面白そう。今度、一緒に試してみたい」",
  concrete: "「大切にしてるんだね。来週なら土曜の午後はどう？」",
  action: "「じゃあ次はそこ行こう。楽しそうだし、まず体験してみたい」",
};

const reasons = {
  empathize: "気持ちを受け止め、話すかどうかの主導権を相手に渡せます。",
  playful: "明るい反応で可能性を広げ、会話に楽しい余白をつくれます。",
  concrete: "曖昧にせず、相手が判断しやすい誠実な提案になります。",
  action: "長く分析せず、次の体験へ軽やかにつなげられます。",
};

const reactions = {
  empathize: "急かされず、ちゃんと受け止めてもらえた感じがします。",
  playful: "この人となら、何気ない日常も楽しくなりそうです。",
  concrete: "言葉と行動が一致していて、安心して考えられます。",
  action: "テンポが合います。次の時間がすぐ想像できます。",
};

let state = {
  view: "home",
  char: characters[0],
  sceneIndex: 0,
  scores: { ...BASE_SCORES },
  picked: null,
  history: [],
  flags: { safe: 0, spark: 0, strain: 0 },
};

function clamp(value) {
  return Math.max(0, Math.min(100, value));
}

function persona(character = state.char) {
  return personaCatalog[character.type];
}

function story(character = state.char) {
  return storyFor(character.id);
}

function gameDesign(character = state.char) {
  return characterGameDesign[character.id] || characterGameDesign.mina;
}

function applyPersonaBias(effect, kind, character = state.char) {
  const multiplier = persona(character)?.scoringBias?.[kind] ?? 1;
  return Object.fromEntries(
    Object.entries(effect).map(([key, value]) => {
      if (["pressure", "misread"].includes(key) || value <= 0) return [key, value];
      return [key, Math.round(value * multiplier)];
    }),
  );
}

function avatar(c, large = "") {
  if (c.portrait) {
    return `<figure class="avatar avatar-photo ${large}" style="--c:${c.color};--light:${c.light}" aria-label="${c.name}の写真">
      <img src="${c.portrait}" alt="${c.portraitAlt || `${c.name}の写真`}">
      <figcaption>${c.roman}</figcaption>
    </figure>`;
  }
  return `<div class="avatar ${large}" style="--c:${c.color};--light:${c.light};--hair:${c.hair}" aria-label="${c.name}のイラスト">
    <span class="orbit orbit-a"></span><span class="orbit orbit-b"></span>
    <span class="avatar-symbol">${c.emoji}</span>
    <div class="head"><div class="hair"></div><div class="face"><i class="eye left"></i><i class="eye right"></i><i class="mouth"></i></div></div>
    <div class="body"></div><span class="spark one">✦</span><span class="spark two">•</span>
  </div>`;
}

function logo() {
  return `<button class="logo" data-go="home"><span class="logo-mark">♥</span><span>Love Type <em>Lab</em></span></button>`;
}

function header(minimal = false) {
  return `<header class="header ${minimal ? "minimal" : ""}">
    ${logo()}
    ${minimal ? "" : `<nav><button data-go="characters">デート練習</button><button data-scroll="about">このラボについて</button></nav><button class="header-cta" data-go="characters">無料で試す →</button>`}
  </header>`;
}

function footer() {
  return `<footer>${logo()}<p>© 2026 Love Type Lab</p><div><button>利用規約</button><button>プライバシー</button></div></footer>`;
}

function home() {
  return `${header()}<main>
    <section class="hero">
      <div class="hero-copy">
        <div class="eyebrow">✦ 3回のデートで学ぶ、恋愛会話トレーニング</div>
        <h1>「いい人」で終わらない<br><span>会話の距離感</span>を<br>ゲームで身につける。</h1>
        <p>同じ言葉でも、相手の会話スタイルによって受け取られ方は変わります。<br class="desktop">5人とのデートを通して、自分らしい伝え方を見つけましょう。</p>
        <div class="hero-actions"><button class="primary" data-go="characters">デートをはじめる →</button><button class="text-button" data-scroll="how"><span>▶</span>遊び方を見る</button></div>
        <div class="safe-note"><span>18+</span><p>これは診断・攻略ではなく、相手の同意と境界線を大切にする会話練習です。</p></div>
      </div>
      <div class="hero-visual">
        <div class="blob"></div>
        <div class="date-card">
          <div class="card-top"><span>DATE 01</span><span class="live-dot">● PLAYING</span></div>
          <div class="date-person">${avatar(characters[0], "avatar-large")}<div><small>静かな共感型</small><h3>ミナ</h3><p>「今日は、ゆっくり話せそうで少し安心した」</p></div></div>
          <div class="mini-choice"><span>A</span>どうして安心したの？</div>
          <div class="mini-choice active"><span>B</span>そう感じたんだね。聞けてうれしい。</div>
        </div>
        <div class="feedback-float"><span>TRUST</span><strong>+8</strong><p>気持ちを受け止めた</p></div>
      </div>
    </section>
    <section class="promise"><p>会話に、たったひとつの「正解」はありません。</p><span>大切なのは、相手を決めつけず、反応を見ながら歩幅を合わせること。</span></section>
    <section class="how" id="how">
      <div class="section-head"><span>HOW IT WORKS</span><h2>選ぶ。気づく。次に活かす。</h2><p>選択肢ごとの相手視点、理由、改善フレーズをすぐ確認できます。</p></div>
      <div class="steps">
        ${[
          ["01", "相手を選ぶ", "5つの会話スタイルから、練習したい相手を選びます。", "♥"],
          ["02", "会話を選ぶ", "3回のデート、全15シーンで返答を選びます。", "●"],
          ["03", "相手視点で学ぶ", "なぜ響いたか、なぜすれ違ったかを確認します。", "✦"],
        ].map((step, index) => `<div class="step"><div class="step-icon icon-${index}">${step[3]}<b>${step[0]}</b></div><h3>${step[1]}</h3><p>${step[2]}</p>${index < 2 ? `<span class="step-arrow">›</span>` : ""}</div>`).join("")}
      </div>
    </section>
    <section class="cast">
      <div class="section-head"><span>MEET THE CAST</span><h2>誰との会話を練習しますか？</h2></div>
      <div class="cast-grid">${characters.map((c) => castCard(c)).join("")}</div>
      <button class="secondary" data-go="characters">5人のプロフィールを見る →</button>
    </section>
    <section class="lab" id="about"><div><span class="eyebrow">ABOUT THIS LAB</span><h2>タイプは、人を決めつけるためではありません。</h2></div><div><p>16タイプ風の表現は、会話傾向を理解するためのヒントです。心理診断、医療助言、恋愛成功の保証ではありません。</p><ul><li>✓ 相手の同意と境界線を尊重します</li><li>✓ 断られた時の態度も評価します</li><li>✓ 強引な誘い、返答の強要、感情の否定は低評価です</li></ul></div></section>
    <section class="bottom-cta"><span>READY?</span><h2>次の会話を、少しだけ<br>自分らしく。</h2><button class="primary light" data-go="characters">無料でデートをはじめる →</button></section>
  </main>${footer()}`;
}

function castCard(c) {
  return `<button class="cast-card" data-select="${c.id}">${avatar(c)}<div><small style="color:${c.color}">${c.style}</small><h3>${c.name} <span>${c.roman}</span></h3><p>${c.theme}</p></div><span class="chev">›</span></button>`;
}

function charactersView() {
  return `${header()}<main class="page">
    <div class="page-title"><span>CHOOSE YOUR DATE</span><h1>誰との会話を<br class="mobile">練習しますか？</h1><p>難易度より、いま気になる相手を選んでください。</p></div>
    <div class="profile-grid">${characters.map((c) => `<article class="profile-card"><div class="profile-art" style="background:${c.light}"><span class="difficulty">難易度 ${c.difficulty}</span>${avatar(c, "avatar-large")}</div><div class="profile-content"><small style="color:${c.color}">${c.style}</small><h2>${c.name}<span>${c.roman}</span></h2><p>${c.bio}</p><div class="tags">${c.likes.map((x) => `<span>#${x}</span>`).join("")}</div><div class="practice"><b>今回の練習テーマ</b><span>${c.theme}</span></div><button class="card-button" style="background:${c.color}" data-select="${c.id}">プロフィールを見る →</button></div></article>`).join("")}</div>
  </main>${footer()}`;
}

function profile() {
  const c = state.char;
  const p = persona(c);
  const s = story(c);
  const gd = gameDesign(c);
  return `${header(true)}<main class="detail">
    <button class="back" data-go="characters">← 相手を選び直す</button>
    <div class="detail-grid">
      <div class="detail-art" style="background:${c.light}">${avatar(c, "avatar-large")}<div class="type-stamp" style="color:${c.color}">${c.style}</div></div>
      <div class="detail-copy"><span class="roman">${c.roman}</span><h1>${c.name}</h1><p class="lead">${c.bio}</p>
        <div class="facts"><div><span>AGE</span><b>${c.age}</b></div><div><span>WORK</span><b>${c.job}</b></div><div><span>PACE</span><b>${c.pace}</b></div></div>
        <div class="detail-box"><div><span>好き</span><p>${c.likes.join("・")}</p></div><div><span>苦手</span><p>${c.caution}</p></div></div>
        <div class="story-brief">
          <b>${s.profile.fullName}</b>
          <p>${s.profile.backstory}</p>
          <dl>
            <div><dt>惹かれるもの</dt><dd>${s.profile.attraction}</dd></div>
            <div><dt>内側のニーズ</dt><dd>${s.profile.innerNeed}</dd></div>
            <div><dt>今回の物語</dt><dd>${s.profile.dateConcept}</dd></div>
          </dl>
        </div>
        <div class="persona-panel">
          <span>${p.label} / ${p.nickname}</span>
          <p>${p.summary}</p>
          <div class="persona-meta">
            <b>関係ニーズ</b><span>${p.relationshipNeeds.join("・")}</span>
            <b>衝突時の注意</b><span>${p.conflictPattern}</span>
          </div>
          <div class="persona-columns">
            <div><b>会話傾向</b><ul>${p.communication.map((item) => `<li>${item}</li>`).join("")}</ul></div>
            <div><b>デートのコツ</b><ul>${p.dateHints.map((item) => `<li>${item}</li>`).join("")}</ul></div>
          </div>
        </div>
        <div class="game-design-panel" style="--c:${c.color}">
          <span>GAME DESIGN</span>
          <h3>${gd.playerPromise}</h3>
          <p>${gd.coreTension}</p>
          <dl>
            <div><dt>勝ち筋</dt><dd>${gd.winningMindset}</dd></div>
            <div><dt>罠</dt><dd>${gd.temptationTrap}</dd></div>
            <div><dt>幻想</dt><dd>${gd.playerFantasy}</dd></div>
            <div><dt>ジレンマ</dt><dd>${gd.signatureDilemma}</dd></div>
            <div><dt>素材方針</dt><dd>${gd.visualFormula}</dd></div>
          </dl>
        </div>
        <div class="training"><span class="big-spark">✦</span><div><span>TRAINING THEME</span><h3>${c.theme}</h3><p>全${s.dates.length}回のデート / ${totalScenes(c)}シーン</p></div></div>
        <label class="age-check"><input type="checkbox" checked><span>私は18歳以上で、相手への尊重を大切にして練習します。</span></label>
        <button class="primary full" data-start>この相手とデートする →</button>
      </div>
    </div>
  </main>`;
}

function currentScene() {
  return sceneAt(state.sceneIndex);
}

function sceneAt(index, character = state.char) {
  const dates = story(character).dates;
  let cursor = index;
  for (const [dateIndex, date] of dates.entries()) {
    if (cursor < date.scenes.length) {
      return { date, dateIndex, local: cursor, scene: date.scenes[cursor] };
    }
    cursor -= date.scenes.length;
  }
  const date = dates.at(-1);
  return { date, dateIndex: dates.length - 1, local: date.scenes.length - 1, scene: date.scenes.at(-1) };
}

function dateStartIndex(targetDateIndex, character = state.char) {
  return story(character).dates
    .slice(0, targetDateIndex)
    .reduce((total, date) => total + date.scenes.length, 0);
}

function totalScenes(character = state.char) {
  return story(character).dates.reduce((total, date) => total + date.scenes.length, 0);
}

function compatibilityScore(character = state.char, scores = state.scores) {
  const bias = persona(character)?.scoringBias || {};
  const trustWeight = 0.34 + ((bias.concrete ?? 1) - 1) * 0.18 + ((bias.empathize ?? 1) - 1) * 0.08;
  const interestWeight = 0.33 + ((bias.playful ?? 1) - 1) * 0.18 + ((bias.action ?? 1) - 1) * 0.08;
  const comfortWeight = 0.33 + ((bias.empathize ?? 1) - 1) * 0.16;
  const pressureWeight = 0.24 + Math.max(0, (bias.concrete ?? 1) - 1) * 0.12;
  const misreadWeight = 0.24 + Math.max(0, (bias.empathize ?? 1) - 1) * 0.12;
  const positive = scores.trust * trustWeight + scores.interest * interestWeight + scores.comfort * comfortWeight;
  const negative = scores.pressure * pressureWeight + scores.misread * misreadWeight;
  const total = positive / (trustWeight + interestWeight + comfortWeight) - negative * 0.32;
  return clamp(Math.round(total));
}

function compatibilityTier(score) {
  if (score >= 82) return { icon: "gauge", label: "\u304b\u306a\u308a\u3044\u3044\u611f\u3058", sub: "\u3057\u3063\u304b\u308a\u523a\u3055\u3063\u3066\u308b" };
  if (score >= 68) return { icon: "gauge", label: "\u76f8\u6027\u304b\u306a\u308a\u5b89\u5b9a", sub: "\u4f1a\u8a71\u306e\u6e29\u5ea6\u304c\u5408\u3063\u3066\u308b" };
  if (score >= 54) return { icon: "gauge", label: "\u307e\u3060\u4f38\u3073\u308b", sub: "\u3042\u3068\u4e00\u6b69\u3067\u8fd1\u3065\u304f" };
  return { icon: "gauge", label: "\u4f5c\u6226\u898b\u76f4\u3057\u4e2d", sub: "\u8fd4\u3057\u65b9\u3067\u5316\u3051\u308b" };
}

function relationshipStage(character = state.char, scores = state.scores, flags = state.flags) {
  const total = compatibilityScore(character, scores);
  const risky = scores.pressure + scores.misread;
  if (risky >= 86 || (flags.strain || 0) >= 4) {
    return { label: "揺れ戻し中", tone: "risk", copy: "いまは攻めるより、受け取り直す場面" };
  }
  if (total >= 82 && scores.trust >= 66 && scores.interest >= 62) {
    return { label: "告白圏内", tone: "love", copy: "気持ちを主語つきで返せる温度" };
  }
  if (scores.interest >= scores.trust + 8) {
    return { label: "火花が先行", tone: "spark", copy: "遊びだけに見せない誠実さが鍵" };
  }
  if (scores.trust >= scores.interest + 8) {
    return { label: "信頼が先行", tone: "trust", copy: "次は好意を少しだけ見せたい" };
  }
  return { label: "距離調整中", tone: "balance", copy: "安心と火花の配分を読む場面" };
}

function meters() {
  return `<div class="meters">${Object.entries(state.scores).map(([key, value]) => {
    const meta = scoreDecor[key] || { icon: "gauge", short: scoreLabels[key], hint: "" };
    const isRisk = ["pressure", "misread"].includes(key);
    const display = isRisk ? 100 - value : value;
    return `<div class="meter meter-card ${isRisk ? "risk" : "good"}"><span class="meter-icon">${scoreIcon(meta.icon)}</span><div class="meter-copy"><b>${meta.short}</b><small>${meta.hint}</small></div><strong>${display}</strong><i><em style="width:${value}%;background:${isRisk ? "#ef8a79" : state.char.color}"></em></i></div>`;
  }).join("")}</div>`;
}

function sceneChoices() {
  const c = state.char;
  const choices = currentScene().scene.choices.map((choice) => ({
    ...choice,
    effect: applyPersonaBias(choice.effect, choice.kind, c),
  }));
  return stableShuffle(choices, `${c.id}:${state.sceneIndex}`);
}

function stableShuffle(items, seed) {
  return [...items]
    .map((item, index) => ({ item, weight: seededWeight(`${seed}:${index}:${item.label}`) }))
    .sort((a, b) => a.weight - b.weight)
    .map(({ item }) => item);
}

function seededWeight(text) {
  let hash = 2166136261;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function choiceGrade(choice) {
  const positive = (choice.effect.trust || 0) + (choice.effect.interest || 0) + (choice.effect.comfort || 0);
  const negative = (choice.effect.pressure || 0) + (choice.effect.misread || 0);
  const score = positive - negative * 1.2;
  if (score >= 15) return { rank: "Great!", phrase: "\u5fc3\u306b\u523a\u3055\u3063\u305f", className: "great", cue: "\u4e00\u6c17\u306b\u8ddd\u96e2\u304c\u7e2e\u307e\u308b\u8fd4\u3057" };
  if (score >= 9) return { rank: "Good!", phrase: "\u3044\u3044\u6e29\u5ea6", className: "good", cue: "\u5b89\u5fc3\u3057\u3066\u6b21\u306b\u9032\u3081\u308b\u8fd4\u3057" };
  if (score >= 2) return { rank: "Close!", phrase: "\u3042\u3068\u534a\u6b69", className: "close", cue: "\u60aa\u304f\u306a\u3044\u304c\u3001\u3082\u3046\u5c11\u3057\u5408\u308f\u305b\u305f\u3044\u8fd4\u3057" };
  return { rank: "Miss!", phrase: "\u7a7a\u6c17\u304c\u63fa\u308c\u305f", className: "miss", cue: "\u76f8\u624b\u304c\u5c11\u3057\u8eab\u69cb\u3048\u308b\u8fd4\u3057" };
}

function choiceAftertaste(choice) {
  if (choice.branch === "safe") return "相手は少し安心して、次の話を続けやすくなっている";
  if (choice.branch === "spark") return "空気には火花が残り、相手はあなたの反応を少し期待している";
  return "空気が少し揺れ、相手は次の一言で本当に見てくれるかを測っている";
}

function choiceIntentLabel(choice) {
  const cleanIntent = choice.intent && !choice.intent.includes("?") ? choice.intent : "";
  if (cleanIntent) return cleanIntent;
  if (choice.branch === "strain" && choice.kind === "pushy") return "\u3050\u3063\u3068\u653b\u3081\u308b";
  if (choice.branch === "strain" && choice.kind === "dismiss") return "\u8efd\u304f\u6d41\u3059";
  const labels = {
    empathize: "\u5bc4\u308a\u6dfb\u3046",
    playful: "\u697d\u3057\u304f\u4e57\u308b",
    concrete: "\u5177\u4f53\u5316\u3059\u308b",
    action: "\u8a98\u3063\u3066\u52d5\u304f",
    neutral: "\u69d8\u5b50\u3092\u898b\u308b",
  };
  return labels[choice.kind] || "\u63a2\u308b";
}

function sceneArtwork(c, scene, sceneIndex) {
  const image = scene.image || (c.assetSet ? `/assets/${c.assetSet}/scene-${String(sceneIndex + 1).padStart(2, "0")}.${c.assetExt || "jpg"}` : "");
  if (!image) return avatar(c, "avatar-large");
  return `<img class="scene-photo" src="${image}" alt="${c.name} - ${scene.title}">`;
}

function sceneContext(date, scene, local) {
  const previousProgress = state.sceneIndex > 0 ? sceneAt(state.sceneIndex - 1) : null;
  const previous = previousProgress?.scene || null;
  const previousChoice = state.history.find((item) => item.sceneIndex === state.sceneIndex - 1);
  const previousTone = previousChoice?.branch || "default";
  const previousLine = previous
    ? (typeof previous.line === "string" ? previous.line : previous.line[previousTone] || previous.line.default)
    : "";
  const choiceMemory = previousChoice
    ? `あなたは「${previousChoice.intent}」で返し、${previousChoice.aftertaste}。`
    : "";
  if (previous) {
    const bridge = previousProgress.date.title === date.title ? "\u305d\u306e\u307e\u307e\u5834\u9762\u304c\u9032\u307f" : "\u65e5\u3092\u6539\u3081\u3066";
    return `前の場面「${previous.title}」で、${state.char.name}は「${previousLine}」と反応した。${choiceMemory}${bridge}、いまは「${scene.location}」。ここでは、${scene.goal}ことが鍵になる。`;
  }
  return `${date.title}の始まり。${date.purpose}ために「${scene.location}」で向き合っている。まだ会話の温度は探り合いで、最初の鍵は${scene.goal}こと。`;
}

function game() {
  const c = state.char;
  const { date, dateIndex, local, scene } = currentScene();
  const choices = sceneChoices();
  const tone = branchTone(state.flags);
  const line = typeof scene.line === "string" ? scene.line : scene.line[tone] || scene.line.default;
  const count = totalScenes(c);
  const total = compatibilityScore(c);
  const tier = compatibilityTier(total);
  const dramatic = sceneDramaturgy(c.id, scene, state.sceneIndex, count);
  const coaching = sceneCoaching(c.id, scene, state.sceneIndex, count);
  const stage = relationshipStage(c);
  return `<div class="game-shell">
    <header class="game-header"><button class="icon-button" data-go="profile">×</button><div class="game-person">${avatar(c)}<div><b>${c.name}</b><span>${c.style}</span></div></div><div class="game-progress"><span>DATE ${dateIndex + 1} <b>${state.sceneIndex + 1} / ${count}</b></span><i><em style="width:${((state.sceneIndex + 1) / count) * 100}%;background:${c.color}"></em></i></div></header>
    <main class="game-main"><aside class="score-strip"><div class="score-hero" style="--c:${c.color};--light:${c.light}"><span class="score-orb">${scoreIcon(tier.icon)}<strong>${total}</strong></span><div class="score-copy"><span>\u7dcf\u5408\u8a55\u4fa1</span><b>${tier.label}</b><p>${tier.sub}</p></div></div>${meters()}<div class="relationship-stage stage-${stage.tone}"><span>${stage.label}</span><p>${stage.copy}</p></div><div class="meter-help">\u30bf\u30a4\u30d7\u3054\u3068\u306b\u91cd\u304f\u898b\u308b\u30dd\u30a4\u30f3\u30c8\u304c\u5c11\u3057\u9055\u3044\u307e\u3059\u3002</div></aside>
      <section class="scene" style="--c:${c.color}"><div class="scene-label"><span>${date.title} ${local + 1}/${date.scenes.length}</span><b>${scene.title}</b></div><div class="scene-context"><b>今の状況</b><p>${sceneContext(date, scene, local)}</p><div class="scene-insight"><span>${dramatic.beat}</span><b>${dramatic.focus}</b></div><div class="scene-coach"><span>${coaching.badge}</span><p><b>${coaching.skill}</b>${coaching.watch}</p></div></div><div class="scene-visual" style="background:${c.light}">${sceneArtwork(c, scene, state.sceneIndex)}</div><div class="bubble"><span>${c.name}</span><p>「${line}」</p></div><div class="goal">✦ 駆け引き: ${dramatic.playerMove}</div><h2>あなたなら、どう返しますか？</h2><div class="choices">${choices.map((choice, index) => `<button data-choice="${index}" class="choice-${choice.branch}"><span>${String.fromCharCode(65 + index)}</span><em class="choice-intent">${choiceIntentLabel(choice)}</em><p>${choice.label}</p></button>`).join("")}</div></section>
    </main>${state.picked ? feedback() : ""}
  </div>`;
}

function feedback() {
  const picked = state.picked;
  const grade = choiceGrade(picked);
  const c = state.char;
  const { scene } = currentScene();
  const coaching = sceneCoaching(c.id, scene, state.sceneIndex, totalScenes(c));
  const combo = currentCombo();
  const style = playStyleReport();
  return `<div class="feedback-overlay"><div class="feedback-modal chat-modal feedback-stamp-modal grade-${grade.className}">
    <div class="grade-stamp"><small>4 STEP CHECK</small><span>${grade.rank}</span><b>${grade.phrase}</b></div>
    <div class="chat-head" style="--c:${c.color};--light:${c.light}">${avatar(c)}<div><span>${grade.rank} RESPONSE</span><h3>${c.name}\u306e\u53cd\u5fdc</h3><p>${grade.cue}</p></div></div>
    <div class="chat-thread">
      <div class="chat-bubble you"><b>\u3042\u306a\u305f\u306e\u8fd4\u3057 / ${choiceIntentLabel(picked)}</b><p>${picked.label}</p></div>
      <div class="chat-bubble them" style="--c:${c.color};--light:${c.light}"><b>${c.name}</b><p>\u300c${picked.reaction}\u300d</p></div>
      <div class="chat-bubble inner"><b>\u4f55\u304c\u8d77\u304d\u305f\uff1f</b><p>${picked.why}</p></div>
      <div class="chat-bubble switch"><b>心理スイッチ / ${coaching.switch.label}</b><p>${personaSwitchFeedback(c.id, state.sceneIndex, totalScenes(c), picked.branch)}</p></div>
      <div class="chat-bubble pulse"><b>いまの関係の読み筋</b><p>${relationshipPulse(c.id, state.scores, state.flags)}</p></div>
      <div class="chat-bubble coach"><b>攻略ノート / ${coaching.skill}</b><p>${coaching.payoff} ${coaching.trap}</p></div>
      <div class="chat-bubble combo"><b>${combo.label} / ${style.title}</b><p>${style.copy}</p></div>
      <div class="chat-bubble better"><b>\u6b21\u306b\u3082\u3063\u3068\u81ea\u7136\u306b\u3059\u308b\u306a\u3089</b><p>${picked.better}</p></div>
    </div>
    <div class="delta-row">${Object.entries(picked.effect).filter(([, value]) => value !== 0).map(([key, value]) => `<span class="${value > 0 ? "plus" : "minus"}">${scoreIcon(scoreDecor[key]?.icon || "gauge")} ${scoreDecor[key]?.short || scoreLabels[key]} ${value > 0 ? "+" : ""}${value}</span>`).join("")}</div>
    <button class="primary full" data-next>${state.sceneIndex === totalScenes() - 1 ? "\u7d50\u679c\u3092\u898b\u308b" : "\u6b21\u306e\u4f1a\u8a71\u3078"} \u2192</button>
  </div></div>`;
}

function branchSummary(items) {
  const counts = items.reduce((acc, item) => {
    acc[item.branch] = (acc[item.branch] || 0) + 1;
    return acc;
  }, { safe: 0, spark: 0, strain: 0 });
  const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  const labels = {
    safe: ["安心寄り", "相手の温度を丁寧に拾えている"],
    spark: ["火花寄り", "楽しい期待は作れている。次は誠実さも添えたい"],
    strain: ["揺れ寄り", "少し空気が乱れたぶん、次は受け取り直しが鍵"],
  };
  return { key: top, label: labels[top][0], copy: labels[top][1], counts };
}

function currentCombo(history = state.history) {
  const last = history.at(-1);
  if (!last) return { label: "初手待ち", tone: "balance", copy: "まずは相手の反応を一つ読むところから。" };
  let count = 0;
  for (let index = history.length - 1; index >= 0; index -= 1) {
    if (history[index].branch !== last.branch) break;
    count += 1;
  }
  const meta = {
    safe: ["安心コンボ", "trust", "信頼を積めている。次は少しだけ好意を見せると恋愛温度が上がる。"],
    spark: ["火花コンボ", "spark", "楽しい勢いが出ている。軽さだけに見えない一言が次の鍵。"],
    strain: ["修復チャンス", "risk", "空気が揺れている。次の一手で受け取り直せるとドラマになる。"],
  }[last.branch] || ["読み直し中", "balance", "次の反応で流れが変わる。"];
  return { label: `${meta[0]} x${count}`, tone: meta[1], copy: meta[2] };
}

function playStyleReport(history = state.history) {
  const summary = branchSummary(history);
  const recovered = history.some((item, index) => item.branch === "strain" && history.slice(index + 1, index + 3).some((next) => next.branch === "safe"));
  const safe = summary.counts.safe || 0;
  const spark = summary.counts.spark || 0;
  const strain = summary.counts.strain || 0;
  if (recovered) return { title: "リカバリー上手", badge: "RECOVER", copy: "一度揺れた空気を放置せず、関係を戻す選択ができている。" };
  if (strain >= Math.max(safe, spark) && strain >= 2) return { title: "攻めすぎ注意", badge: "CHECK", copy: "踏み込みは魅力になるが、相手の主導権を残すともっと刺さる。" };
  if (safe >= spark + 2) return { title: "信頼ビルダー", badge: "TRUST", copy: "安心感を作るのが得意。終盤は自分の好意も少し強めに出したい。" };
  if (spark >= safe + 2) return { title: "火花メーカー", badge: "SPARK", copy: "会話の温度を上げるのが上手。次は誠実な着地で深さを足す。" };
  return { title: "バランス型", badge: "BALANCE", copy: "安心と火花を場面で切り替えられている。相手の変化を見て次を選べている。" };
}

function learnedSkillLog(history = state.history) {
  const seen = new Map();
  for (const item of history) {
    const { scene } = sceneAt(item.sceneIndex);
    const coach = sceneCoaching(state.char.id, scene, item.sceneIndex, totalScenes());
    if (!seen.has(coach.badge)) {
      seen.set(coach.badge, { badge: coach.badge, skill: coach.skill, branch: item.branch, intent: item.intent });
    }
  }
  return [...seen.values()];
}

function heartMemoUnlocks(character = state.char) {
  const layer = gameDesign(character).innerLayer;
  const total = compatibilityScore(character);
  const recovered = state.history.some((item, index) => item.branch === "strain" && state.history.slice(index + 1, index + 3).some((next) => next.branch === "safe"));
  const risk = state.scores.pressure + state.scores.misread;
  const candidates = [
    { title: "表の顔", condition: state.history.length >= 1, text: layer.mask },
    { title: "安心すると見える本音", condition: state.scores.trust >= 50 || (state.flags.safe || 0) >= 3, text: layer.privateWish },
    { title: "惹かれる瞬間", condition: state.scores.interest >= 52 || (state.flags.spark || 0) >= 3, text: layer.opensWhen },
    { title: "怖さの輪郭", condition: recovered || risk >= 65, text: layer.fear },
    { title: "告白前に必要なもの", condition: total >= 68 && state.scores.trust >= 52, text: layer.confessionNeed },
  ];
  const unlocked = candidates.filter((item) => item.condition);
  return {
    unlocked,
    locked: candidates.length - unlocked.length,
    nextHint: candidates.find((item) => !item.condition)?.title || "すべて解放済み",
  };
}

function checkpoint() {
  const c = state.char;
  const { date, dateIndex, local } = currentScene();
  const start = dateStartIndex(dateIndex, c);
  const picks = state.history.filter((item) => item.sceneIndex >= start && item.sceneIndex <= state.sceneIndex);
  const summary = branchSummary(picks);
  const last = picks.at(-1);
  const combo = currentCombo();
  const style = playStyleReport();
  const next = state.sceneIndex + 1 < totalScenes(c) ? sceneAt(state.sceneIndex + 1, c) : null;
  const nextGuide = next ? sceneCoaching(c.id, next.scene, state.sceneIndex + 1, totalScenes(c)) : null;
  const stage = relationshipStage(c);
  const route = relationshipRoute(c.id, state.scores, state.flags, state.history);
  const heart = heartMemoUnlocks(c);
  const total = compatibilityScore(c);
  const nextCopy = next
    ? `${next.date.title}は「${next.scene.location}」から。次は${nextGuide.skill}。${nextGuide.lesson}`
    : "この先は最終結果で、ふたりの関係の着地を見ます。";
  return `<div class="game-shell checkpoint-shell">
    <header class="game-header"><button class="icon-button" data-go="profile">×</button><div class="game-person">${avatar(c)}<div><b>${c.name}</b><span>${c.style}</span></div></div><div class="game-progress"><span>DATE ${dateIndex + 1} CLEAR <b>${state.sceneIndex + 1} / ${totalScenes(c)}</b></span><i><em style="width:${((state.sceneIndex + 1) / totalScenes(c)) * 100}%;background:${c.color}"></em></i></div></header>
    <main class="checkpoint-main" style="--c:${c.color};--light:${c.light}">
      <section class="checkpoint-card">
        <span class="checkpoint-kicker">DATE ${dateIndex + 1} REVIEW</span>
        <h1>${date.title}の幕間</h1>
        <p>${date.purpose}</p>
        <div class="checkpoint-hero">
          <div><span>総合評価</span><strong>${total}</strong></div>
          <div class="relationship-stage stage-${stage.tone}"><span>${stage.label}</span><p>${stage.copy}</p></div>
        </div>
        <div class="checkpoint-grid">
          <article class="branch-${summary.key}"><span>多かった返し</span><b>${summary.label}</b><p>${summary.copy}</p></article>
          <article><span>今の読み筋</span><b>${route.badge}</b><p>${relationshipPulse(c.id, state.scores, state.flags)}</p></article>
          <article><span>直近の余韻</span><b>${last?.intent || "様子を見る"}</b><p>${last?.aftertaste || "まだ相手の反応を探っている。"}</p></article>
          <article class="stage-${combo.tone}"><span>${style.badge}</span><b>${style.title}</b><p>${combo.label}。${style.copy}</p></article>
        </div>
        <div class="checkpoint-next">
          <span>NEXT SCENE</span>
          <b>${next ? `${next.date.title} / ${next.scene.title}` : "最終結果"}</b>
          <p>${nextCopy}</p>
        </div>
        <div class="heart-progress"><span>HEART MEMO</span><b>${heart.unlocked.length}/5 解放</b><p>次に見えそうな内面: ${heart.nextHint}</p></div>
        <button class="primary full" data-continue-date>${next ? "次のデートへ" : "結果を見る"} →</button>
      </section>
    </main>
  </div>`;
}

function ending() {
  const s = state.scores;
  if (s.pressure >= 55 || s.misread >= 55) {
    return ["!", "すれ違いエンド", "今回は少し距離が必要そうです。相手のペースを尊重できた場面は、次の会話に活かせます。"];
  }
  if (s.trust >= 65 && s.interest >= 60 && s.comfort >= 60) {
    return ["♥", "ふたりのはじまり", "気持ちと距離感の両方を大切にできました。これからを一緒に考えられそうです。"];
  }
  if (s.comfort >= 62 && s.interest < 58) {
    return ["□", "心地よい友達エンド", "安心できる関係を築けました。次は、あなた自身の好意を少しだけ言葉に乗せてみましょう。"];
  }
  return ["✦", "次のデートへ", "信頼の芽は育っています。焦らず、もう少しお互いを知る時間を重ねましょう。"];
}

function sceneTitleAt(index) {
  let cursor = index;
  for (const date of story().dates) {
    if (cursor < date.scenes.length) return `${date.title} / ${date.scenes[cursor].title}`;
    cursor -= date.scenes.length;
  }
  return `Scene ${index + 1}`;
}

function playerSkillBadges() {
  const s = state.scores;
  const strongest = Object.entries({ trust: s.trust, interest: s.interest, comfort: s.comfort }).sort((a, b) => b[1] - a[1])[0][0];
  const recovered = state.history.some((item, index) => item.branch === "strain" && state.history.slice(index + 1, index + 3).some((next) => next.branch === "safe"));
  const style = playStyleReport();
  const badges = [];
  const strongestMap = {
    trust: ["誠実な観察者", "相手の価値観や準備を見落とさず、信頼の土台を作れた。"],
    interest: ["火花を起こす人", "会話に楽しさや期待を足して、恋愛の温度を上げられた。"],
    comfort: ["空気を整える人", "相手が自分らしく話せる余白を作れた。"],
  };
  badges.push({ icon: "✦", title: strongestMap[strongest][0], text: strongestMap[strongest][1] });
  badges.push({ icon: "◆", title: style.title, text: style.copy });
  if (recovered) badges.push({ icon: "↺", title: "修復できる人", text: "一度揺れた空気を、受け取り直して戻す力が見えた。" });
  if (s.pressure < 30) badges.push({ icon: "○", title: "余白を残せた", text: "答えを急がず、相手が選べる余地を守れた。" });
  if (s.misread < 30) badges.push({ icon: "◇", title: "読み取り上手", text: "言葉の表面だけでなく、奥のニーズまで拾えている。" });
  if (badges.length < 3) badges.push({ icon: "→", title: "次に伸びる余地", text: growthInsight() });
  return badges.slice(0, 3);
}

function decisiveMoments() {
  const picks = [];
  const first = state.history[0];
  const firstStrain = state.history.find((item) => item.branch === "strain");
  const recovery = firstStrain ? state.history.find((item) => item.sceneIndex > firstStrain.sceneIndex && item.branch === "safe") : null;
  const last = state.history.at(-1);
  for (const item of [first, firstStrain, recovery, last]) {
    if (item && !picks.some((picked) => picked.sceneIndex === item.sceneIndex)) picks.push(item);
  }
  return picks.map((item) => ({
    scene: sceneTitleAt(item.sceneIndex),
    intent: item.intent,
    branch: item.branch,
    text: item.aftertaste,
  }));
}

function result() {
  const c = state.char;
  const gd = gameDesign(c);
  const end = ending();
  const total = compatibilityScore(c);
  const tier = compatibilityTier(total);
  const route = relationshipRoute(c.id, state.scores, state.flags, state.history);
  const stage = relationshipStage(c);
  const style = playStyleReport();
  const learned = learnedSkillLog();
  const heart = heartMemoUnlocks(c);
  const type = total >= 78 ? "\u304b\u306a\u308a\u76f8\u6027\u304c\u3044\u3044\u4f1a\u8a71" : total >= 62 ? "\u3058\u308f\u3063\u3068\u523a\u3055\u308b\u4f1a\u8a71" : total >= 48 ? "\u3042\u3068\u4e00\u6b69\u3067\u5c4a\u304f\u4f1a\u8a71" : "\u4f5c\u6226\u3092\u5909\u3048\u308b\u3068\u4f38\u3073\u308b\u4f1a\u8a71";
  return `${header(true)}<main class="result-page"><span class="result-kicker">YOUR DATE RESULT</span><div class="ending-icon">${end[0]}</div><h1>${end[1]}</h1><p>${end[2]}</p>
    <div class="report-grid"><div class="share-card" style="--c:${c.color};--light:${c.light}"><div class="share-brand">Love Type Lab ✦</div>${avatar(c)}<span>${c.type}風デート完走</span><h2>${type}</h2><div class="route-card"><small>${route.badge}</small><b>${route.name}</b><p>${route.summary}</p></div><p>${c.name}との${story(c).dates.length}回のデートで、${gd.mastery}</p><div class="share-tags"><span>#LoveTypeLab</span><span>#${c.type}風</span><span>#会話練習</span></div><small>TYPE DATE TRAINER</small></div>
    <div class="score-report"><div class="total-score-card" style="--c:${c.color};--light:${c.light}"><span class="score-orb">${scoreIcon(tier.icon)}<strong>${total}</strong></span><div class="score-copy"><span>\u30e1\u30a4\u30f3\u8a55\u4fa1</span><b>${tier.label}</b><p>${tier.sub}</p></div></div><div class="relationship-stage result-stage stage-${stage.tone}"><span>${stage.label}</span><p>${stage.copy}</p></div><div class="playstyle-card"><span>${style.badge}</span><b>${style.title}</b><p>${style.copy}</p></div><div class="heart-memo-panel"><h3>${c.name}の本音メモ <span>${heart.unlocked.length}/5</span></h3>${heart.unlocked.map((memo) => `<article><b>${memo.title}</b><p>${memo.text}</p></article>`).join("")}${heart.locked ? `<small>未解放メモ: ${heart.locked} / 次の鍵は「${heart.nextHint}」</small>` : `<small>すべての本音メモを解放しました。</small>`}</div><h2>5\u3064\u306e\u7a7a\u6c17\u30e1\u30fc\u30bf\u30fc</h2>${meters()}<div class="skill-panel"><h3>今回身についた会話スキル</h3><div>${playerSkillBadges().map((badge) => `<article><span>${badge.icon}</span><b>${badge.title}</b><p>${badge.text}</p></article>`).join("")}</div></div><div class="learned-strip"><h3>解放した会話レッスン</h3><p>${learned.slice(0, 8).map((item) => `<span>${item.badge} ${item.skill}</span>`).join("")}</p></div><div class="moment-log"><h3>印象に残る選択</h3>${decisiveMoments().map((moment) => `<article class="moment-${moment.branch}"><span>${moment.intent}</span><b>${moment.scene}</b><p>${moment.text}</p></article>`).join("")}</div><div class="insight"><span>✦</span><div><b>あなたの勝ち筋</b><p>${strongestInsight()} ${gd.winningMindset}</p></div></div><div class="insight"><span>→</span><div><b>次の一手</b><p>${route.nextMove}</p></div></div><div class="insight warn"><span>!</span><div><b>次に伸びるポイント</b><p>${growthInsight()} ${gd.temptationTrap}</p></div></div><button class="primary full" data-share>結果をコピーする</button><button class="outline full" data-restart>もう一度デートする</button></div></div>
  </main>`;
}

function strongestInsight() {
  const entries = Object.entries(state.scores).filter(([key]) => !["pressure", "misread"].includes(key));
  const [key] = entries.sort((a, b) => b[1] - a[1])[0];
  const text = {
    trust: "誠実さが伝わり、相手が安心して話せる場面を作れています。",
    interest: "好意や関心が自然に伝わり、会話の温度を上げられています。",
    comfort: "急がない空気づくりが得意で、相手が自分らしくいられます。",
  };
  return text[key];
}

function growthInsight() {
  if (state.scores.pressure > state.scores.misread && state.scores.pressure > 25) return "答えを急がず、相手が選べる余白を残すとさらに良くなります。";
  if (state.scores.misread > 25) return "相手の言葉の奥にある気持ちを一度確認してから返すと、すれ違いが減ります。";
  return "安心感に加えて、あなた自身の好意や希望も少しずつ言葉にしてみましょう。";
}

const views = {
  home,
  characters: charactersView,
  profile,
  game,
  checkpoint,
  result,
};

function render() {
  document.title = state.view === "home" ? "Love Type Lab | 3回のデートで学ぶ恋愛会話" : "Love Type Lab | デート練習";
  $("#app").innerHTML = views[state.view]();
  window.scrollTo(0, 0);
}

function startGame() {
  state.sceneIndex = 0;
  state.scores = { ...BASE_SCORES };
  state.picked = null;
  state.history = [];
  state.flags = { safe: 0, spark: 0, strain: 0 };
  state.view = "game";
  render();
}

document.addEventListener("click", async (event) => {
  const go = event.target.closest("[data-go]");
  if (go) {
    state.view = go.dataset.go;
    state.picked = null;
    render();
    return;
  }

  const selected = event.target.closest("[data-select]");
  if (selected) {
    state.char = characters.find((character) => character.id === selected.dataset.select);
    state.view = "profile";
    render();
    return;
  }

  if (event.target.closest("[data-start]")) {
    startGame();
    return;
  }

  const choice = event.target.closest("[data-choice]");
  if (choice && !state.picked) {
    state.picked = sceneChoices()[Number(choice.dataset.choice)];
    const current = currentScene();
    const grade = choiceGrade(state.picked);
    const coaching = sceneCoaching(state.char.id, current.scene, state.sceneIndex, totalScenes());
    for (const [key, value] of Object.entries(state.picked.effect)) {
      state.scores[key] = clamp(state.scores[key] + value);
    }
    state.flags[state.picked.branch] = (state.flags[state.picked.branch] || 0) + 1;
    state.history.push({
      sceneIndex: state.sceneIndex,
      choice: state.picked.label,
      branch: state.picked.branch,
      intent: choiceIntentLabel(state.picked),
      aftertaste: choiceAftertaste(state.picked),
      grade: grade.rank,
      skill: coaching.skill,
      skillBadge: coaching.badge,
      scores: { ...state.scores },
    });
    render();
    return;
  }

  if (event.target.closest("[data-next]")) {
    if (state.sceneIndex === totalScenes() - 1) state.view = "result";
    else {
      const progress = currentScene();
      if (progress.local === progress.date.scenes.length - 1) state.view = "checkpoint";
      else state.sceneIndex += 1;
    }
    state.picked = null;
    render();
    return;
  }

  if (event.target.closest("[data-continue-date]")) {
    if (state.sceneIndex === totalScenes() - 1) state.view = "result";
    else {
      state.sceneIndex += 1;
      state.view = "game";
    }
    state.picked = null;
    render();
    return;
  }

  if (event.target.closest("[data-restart]")) {
    startGame();
    return;
  }

  if (event.target.closest("[data-share]")) {
    const text = `Love Type Lab の結果は「${ending()[1]}」。会話タイプは「${$(".share-card h2")?.textContent || "デート練習完走"}」でした。 #LoveTypeLab`;
    await navigator.clipboard.writeText(text);
    event.target.textContent = "コピーしました";
    return;
  }

  const scroll = event.target.closest("[data-scroll]");
  if (scroll) {
    document.getElementById(scroll.dataset.scroll)?.scrollIntoView({ behavior: "smooth" });
  }
});

render();
