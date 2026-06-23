import { personaCatalog } from "./personas.js";
import { activePersonaSwitch, characterFinaleScene, characterGameDesign, characterRouteEnding, personaSwitchFeedback, relationshipPulse, relationshipRoute, routeEndings, sceneCharacterSubtext, sceneCoaching, sceneDramaturgy, sceneEmotionalContract, sceneReadingCue, sceneTacticalRead } from "./gameDesign.js";
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
    id: "nagi",
    type: "INFP",
    name: "ナギ",
    roman: "NAGI",
    style: "INFP風・価値観ドリーマー型",
    theme: "創作、価値観、やわらかな本音",
    age: "25歳",
    job: "イラストレーター",
    pace: "ゆっくり",
    difficulty: "中級",
    color: "#b26fb0",
    light: "#f5def4",
    hair: "#4f344d",
    emoji: "☾",
    best: "empathize",
    bio: "静かに見えて、内側には強い理想と物語を持つタイプ。好きなものを否定されない安心感と、少しずつ現実にしてくれる誠実さに惹かれる。",
    likes: ["小さなギャラリー", "夜の散歩", "手紙とスケッチ"],
    caution: "理想を笑われること。早い結論や強い批判で心を閉じやすい。",
  },
  {
    id: "aoi",
    type: "INTP",
    name: "アオイ",
    roman: "AOI",
    style: "INTP風・知的探究型",
    theme: "仮説、思考の自由、静かな好意",
    age: "24歳",
    job: "科学館プランナー",
    pace: "ゆっくり",
    difficulty: "上級",
    color: "#4f74c9",
    light: "#e5edff",
    hair: "#26364f",
    emoji: "∴",
    best: "concrete",
    bio: "感情を急に言葉へ固定されるより、一緒に考えているうちに距離が近づくタイプ。好奇心と誠実さを尊重されると、静かに心を開く。",
    likes: ["科学館", "ミニシアター", "深夜の考察"],
    caution: "理屈っぽいと切られること。感情を今すぐ決めるよう迫られること。",
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

const ROUTE_ALBUM_KEY = "love-type-lab-route-album-v1";

function readRouteAlbum() {
  try {
    return JSON.parse(localStorage.getItem(ROUTE_ALBUM_KEY) || "{}") || {};
  } catch {
    return {};
  }
}

function writeRouteAlbum(album) {
  try {
    localStorage.setItem(ROUTE_ALBUM_KEY, JSON.stringify(album));
  } catch {
    // Private browsing or locked storage should not block the game result.
  }
}

function unlockRouteEnding(character, route, total) {
  const album = readRouteAlbum();
  const characterAlbum = album[character.id] || {};
  const previous = characterAlbum[route.key];
  characterAlbum[route.key] = {
    badge: route.badge,
    name: route.name,
    score: Math.max(previous?.score || 0, total),
    unlockedAt: previous?.unlockedAt || new Date().toISOString(),
    lastPlayedAt: new Date().toISOString(),
  };
  album[character.id] = characterAlbum;
  writeRouteAlbum(album);
  return characterAlbum;
}

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

function combineEffects(...effects) {
  const merged = { trust: 0, interest: 0, comfort: 0, pressure: 0, misread: 0 };
  for (const effect of effects) {
    for (const [key, value] of Object.entries(effect || {})) {
      merged[key] = (merged[key] || 0) + value;
    }
  }
  return merged;
}

function momentumRead(choice, history = state.history) {
  const last = history.at(-1);
  const before = history.at(-2);
  const repeated = last && before && last.branch === before.branch && before.branch === choice.branch;
  if (repeated && choice.branch === "safe") {
    return {
      label: "安心に寄りすぎ",
      copy: "丁寧さはあるが、同じ温度が続いて恋の進展が少し鈍る。ここからは小さな主語や具体的な誘いも必要。",
      effect: { interest: -2, misread: 1 },
    };
  }
  if (repeated && choice.branch === "spark") {
    return {
      label: "火花に寄りすぎ",
      copy: "楽しい勢いは出ているが、相手は軽く扱われていないかを見始める。次は安心の着地が欲しい。",
      effect: { pressure: 1, misread: 2, comfort: -2 },
    };
  }
  if (repeated && choice.branch === "strain") {
    return {
      label: "揺れが続いている",
      copy: "押しや流しが続き、相手は本当に見てくれているかを測っている。修復の一手が必要。",
      effect: { pressure: 2, misread: 3, trust: -2 },
    };
  }
  if (last?.branch === "strain" && choice.branch === "safe") {
    return {
      label: "修復の着地",
      copy: "一度ずれたあと、受け取り直す姿勢が見えた。完璧より戻ってくる力が残る。",
      effect: { trust: 3, comfort: 2, misread: -2 },
    };
  }
  if (last?.branch === "spark" && choice.branch === "safe") {
    return {
      label: "火花のあとに大事にする",
      copy: "楽しいだけで終わらせず、相手の気持ちを置ける。場面の駆け引きとしてかなり強い。",
      effect: { trust: 2, comfort: 2, pressure: -1 },
    };
  }
  if (last?.branch === "safe" && choice.branch === "spark") {
    return {
      label: "安心から一歩進める",
      copy: "安全地帯を作ったあと、恋の温度を少し上げられている。守りすぎない良い変化。",
      effect: { interest: 3, comfort: 1 },
    };
  }
  return {
    label: "読み合い継続",
    copy: "前の反応と大きく矛盾せず、次の場面で温度を調整できる。",
    effect: {},
  };
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
        <p>同じ言葉でも、相手の会話スタイルによって受け取られ方は変わります。<br class="desktop">${characters.length}人とのデートを通して、自分らしい伝え方を見つけましょう。</p>
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
          ["01", "相手を選ぶ", `${characters.length}つの会話スタイルから、練習したい相手を選びます。`, "♥"],
          ["02", "会話を選ぶ", "3回のデートで、場面ごとの返答を選びます。", "●"],
          ["03", "相手視点で学ぶ", "なぜ響いたか、なぜすれ違ったかを確認します。", "✦"],
        ].map((step, index) => `<div class="step"><div class="step-icon icon-${index}">${step[3]}<b>${step[0]}</b></div><h3>${step[1]}</h3><p>${step[2]}</p>${index < 2 ? `<span class="step-arrow">›</span>` : ""}</div>`).join("")}
      </div>
    </section>
    <section class="cast">
      <div class="section-head"><span>MEET THE CAST</span><h2>誰との会話を練習しますか？</h2></div>
      <div class="cast-grid">${characters.map((c) => castCard(c)).join("")}</div>
      <button class="secondary" data-go="characters">${characters.length}人のプロフィールを見る →</button>
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
  return stableShuffle(
    choices.map((choice) => {
      const tactic = sceneTacticalRead(c.id, state.sceneIndex, totalScenes(c), choice);
      const momentum = momentumRead(choice);
      const heartKey = heartKeyRead(c, state.sceneIndex, choice, tactic);
      const decoder = decoderRead(c, state.sceneIndex, choice, heartKey);
      const needCompass = needCompassRead(c, state.sceneIndex, choice, tactic, heartKey);
      const connectionBid = connectionBidRead(c, state.sceneIndex, choice, needCompass, heartKey);
      return {
        ...choice,
        tactic,
        momentum,
        heartKey,
        decoder,
        needCompass,
        connectionBid,
        effect: combineEffects(choice.effect, tactic.effect, momentum.effect, heartKey.effect, needCompass.effect, connectionBid.effect),
      };
    }),
    `${c.id}:${state.sceneIndex}`,
  );
}

function decoderRead(character = state.char, sceneIndex = state.sceneIndex, choice = null, heartKey = null) {
  const design = gameDesign(character);
  const active = activePersonaSwitch(character.id, sceneIndex, totalScenes(character));
  const turnOff = design.turnOffs?.[sceneIndex % Math.max(1, design.turnOffs.length)] || design.temptationTrap;
  const risky = choice && (choice.branch === "strain" || heartKey?.tone === "locked");
  if (!choice) {
    return {
      tone: "watch",
      badge: "CHARACTER DECODER",
      title: active.label,
      copy: `${active.tell}。ここで拾えると「${active.opens}」として残る。`,
      repair: `外した時は、${design.lens.risk}前に一度受け取り直す。`,
    };
  }
  if (risky) {
    return {
      tone: "risk",
      badge: "TURN-OFF RADAR",
      title: turnOff,
      copy: `${character.name}には「${turnOff}」に近く聞こえた可能性がある。反論より先に、相手が守りたかったものを言い直すと戻れる。`,
      repair: `「今の言い方だと${turnOff}みたいに聞こえたかも。大事にしたかったのはそこじゃない？」`,
    };
  }
  return {
    tone: heartKey?.tone === "open" ? "open" : "near",
    badge: "ATTRACTION SWITCH",
    title: active.label,
    copy: `「${active.opens}」が伝わり、${character.name}の警戒が少しほどけた。次は同じ方向を繰り返すだけでなく、場面に合わせて温度を変えたい。`,
    repair: active.tell,
  };
}

function needCompassRead(character = state.char, sceneIndex = state.sceneIndex, choice = null, tacticOverride = null, heartKey = null) {
  const progress = sceneAt(sceneIndex, character);
  const total = totalScenes(character);
  const design = gameDesign(character);
  const active = activePersonaSwitch(character.id, sceneIndex, total);
  const reading = sceneReadingCue(character.id, sceneIndex, total);
  const contract = sceneEmotionalContract(character.id, progress.scene, sceneIndex, total);
  const tactic = tacticOverride || sceneTacticalRead(character.id, sceneIndex, total, choice);
  const base = {
    badge: "NEED COMPASS",
    title: active.label,
    need: active.label,
    scene: `${progress.date.title} / ${progress.scene.title}`,
    ask: contract.hiddenAsk,
    signal: reading.signal,
    goodRead: reading.goodRead,
    misread: reading.misread,
    next: `次は「${active.opens}」を、${choice ? "一文で言い直す" : "選択肢の温度で示す"}。`,
    effect: {},
  };
  if (!choice) {
    return {
      ...base,
      tone: "watch",
      status: "観察中",
      copy: `${character.name}はいま「${active.opens}」を満たしてくれる相手かを見ている。サインは「${reading.signal}」。`,
    };
  }
  const risk = choice.branch === "strain" || tactic.choiceRisks || heartKey?.tone === "locked";
  const open = !risk && (heartKey?.tone === "open" || tactic.choiceFits || choice.branch === "safe");
  if (risk) {
    return {
      ...base,
      tone: "risk",
      status: "欲求が傷ついた",
      copy: `${character.name}には「${active.hurts}」に近く響いた。表面の返事より、守りたかった欲求を先に拾い直したい。`,
      next: `「${active.hurts}みたいに聞こえたかも。${active.opens}ってことを大事にしたかった」と戻す。`,
      effect: { pressure: 1, misread: 1 },
    };
  }
  if (open) {
    return {
      ...base,
      tone: "open",
      status: "欲求が満たされた",
      copy: `「${active.opens}」が伝わり、${character.name}は${design.lens.focus}を大事にされたと感じている。`,
      next: `同じ方向を連打せず、次は${design.lens.playerMove}。`,
      effect: { trust: 1, comfort: 1, misread: -1 },
    };
  }
  return {
    ...base,
    tone: "near",
    status: "半歩近い",
    copy: `悪くない返し。ただ、${character.name}が一番見ていた「${contract.hiddenAsk}」にはもう少し踏み込める。`,
    next: `次は「${reading.goodRead}」を言葉か行動で一つ足す。`,
    effect: {},
  };
}

function connectionBidMeta(character = state.char, sceneIndex = state.sceneIndex) {
  const progress = sceneAt(sceneIndex, character);
  const reading = sceneReadingCue(character.id, sceneIndex, totalScenes(character));
  const contract = sceneEmotionalContract(character.id, progress.scene, sceneIndex, totalScenes(character));
  const bidTypes = [
    ["見てほしい", "話題そのものより、緊張や選んだ場所に気づいてほしい", "attention"],
    ["聞いてほしい", "好みや理由を急いで評価せず、興味を持ってほしい", "curiosity"],
    ["認めてほしい", "選んだものや迷った気持ちを、雑に流さず受け取ってほしい", "affirm"],
    ["一緒にいてほしい", "沈黙や余白を失敗扱いせず、同じ空気にいてほしい", "presence"],
    ["次へつなげてほしい", "好意を曖昧にせず、でも選べる余地を残してほしい", "future"],
    ["分かってほしい", "解決より先に、今の感覚を分かろうとしてほしい", "validation"],
    ["守ってほしい", "大切な価値観を、現実論や冗談で小さくしないでほしい", "protect"],
    ["乗ってほしい", "楽しい温度や小さな誘いを、相手任せにせず拾ってほしい", "play"],
    ["覚えていてほしい", "前に話した好みや不安を、攻略ではなく敬意として使ってほしい", "remember"],
    ["近づいてほしい", "甘さを出しつつ、境界線や主導権も残してほしい", "closer"],
    ["戻ってきてほしい", "ズレたあと、正しさより関係の扱い方を直してほしい", "repair"],
    ["受け取ってほしい", "弱さや怖さを直さず、信頼として受け取ってほしい", "vulnerability"],
    ["決め直してほしい", "仲直りの雰囲気だけで流さず、次の扱い方を決めてほしい", "reset"],
    ["待ってほしい", "告白前の緊張を茶化さず、勇気が整うまで見てほしい", "ready"],
    ["言い切ってほしい", "好き・付き合いたい・考えたいを、曖昧にせず返してほしい", "commit"],
    ["大切に続けてほしい", "成立後こそ雑にせず、次の約束で大事に締めてほしい", "after"],
  ];
  const [label, invitation, key] = bidTypes[Math.min(sceneIndex, bidTypes.length - 1)];
  return {
    key,
    label,
    invitation,
    signal: reading.signal,
    ask: contract.hiddenAsk,
    scene: `${progress.date.title} / ${progress.scene.title}`,
  };
}

function connectionBidRead(character = state.char, sceneIndex = state.sceneIndex, choice = null, needCompass = null, heartKey = null) {
  const meta = connectionBidMeta(character, sceneIndex);
  const base = {
    badge: "CONNECTION BID",
    title: meta.label,
    key: meta.key,
    invitation: meta.invitation,
    signal: meta.signal,
    ask: meta.ask,
    scene: meta.scene,
    effect: {},
  };
  if (!choice) {
    return {
      ...base,
      tone: "watch",
      status: "小さなサイン",
      copy: `${character.name}の「${meta.signal}」は、${meta.invitation}という小さな接続の申し出。`,
      next: "返答は、話題の正解より先にサインへ向ける。",
    };
  }
  const against = choice.branch === "strain" && choice.kind === "pushy";
  const away = choice.branch === "strain" || needCompass?.tone === "risk" || heartKey?.tone === "locked";
  if (against) {
    return {
      ...base,
      tone: "against",
      status: "押し返した",
      copy: `接続の申し出に対して、少し勝ち負けや要求の形で返った。${character.name}は気持ちより圧を先に感じやすい。`,
      next: `次は「${meta.invitation}」を一文で受け取り直す。`,
      effect: { pressure: 1, misread: 1 },
    };
  }
  if (away) {
    return {
      ...base,
      tone: "away",
      status: "見送った",
      copy: `悪意はなくても、${character.name}の小さなサインを少し通り過ぎた。まだ戻れるので、次の返しで拾い直したい。`,
      next: `「さっきの${meta.label}サイン、ちゃんと拾いたい」と戻る。`,
      effect: { misread: 1, comfort: -1 },
    };
  }
  if (choice.branch === "spark") {
    return {
      ...base,
      tone: "spark",
      status: "楽しく向いた",
      copy: `接続の申し出に楽しく向き合えた。${character.name}は、反応してくれたこと自体を小さな期待として覚える。`,
      next: "次は楽しさのあとに、大事にする一言を添える。",
      effect: { interest: 1 },
    };
  }
  return {
    ...base,
    tone: "toward",
    status: "向き合った",
    copy: `接続の申し出にちゃんと向き合えた。${character.name}は、自分の小さなサインを見てもらえたと感じている。`,
    next: "次は同じ優しさを、行動か具体的な約束へつなげる。",
    effect: { trust: 1, comfort: 1 },
  };
}

function heartKeyRead(character = state.char, sceneIndex = state.sceneIndex, choice = null, tacticOverride = null) {
  const progress = sceneAt(sceneIndex, character);
  const total = totalScenes(character);
  const active = activePersonaSwitch(character.id, sceneIndex, total);
  const reading = sceneReadingCue(character.id, sceneIndex, total);
  const contract = sceneEmotionalContract(character.id, progress.scene, sceneIndex, total);
  const tactic = tacticOverride || sceneTacticalRead(character.id, sceneIndex, total, choice);
  const base = {
    badge: "HEART KEY",
    title: active.label,
    clue: `${reading.signal}。表の会話より、いまは「${contract.hiddenAsk}」を読めるかが鍵。`,
    ask: contract.hiddenAsk,
    sign: reading.playerQuestion,
    bestMove: tactic.prefer || "場面の温度を見て、相手の主導権を残す",
    trap: tactic.avoid || "読み違い",
    scene: `${progress.date.title} / ${progress.scene.title}`,
  };
  if (!choice) {
    return {
      ...base,
      status: "未読",
      tone: "hidden",
      phrase: "鍵を探す",
      copy: "相手の表情・沈黙・言い直しに、返し方のヒントが出ている。",
      effect: {},
    };
  }
  const modeFit =
    (contract.mode === "戻す" && choice.branch === "safe") ||
    (contract.mode === "近づく" && choice.branch === "spark") ||
    (contract.mode === "決める" && ["action", "concrete"].includes(choice.kind)) ||
    (contract.mode === "入る" && ["empathize", "neutral"].includes(choice.kind));
  const opened = tactic.choiceFits || modeFit;
  const risky = tactic.choiceRisks || choice.branch === "strain";
  if (risky) {
    return {
      ...base,
      status: "鍵がずれた",
      tone: "locked",
      phrase: "LOCKED",
      copy: `${active.hurts}ように響き、${character.name}は少し慎重になった。次は説明より先に、何を守ろうとしていたかを拾いたい。`,
      effect: { pressure: 1, misread: 1 },
    };
  }
  if (opened) {
    return {
      ...base,
      status: "鍵が開いた",
      tone: "open",
      phrase: "UNLOCK",
      copy: `${active.opens}返しになり、${character.name}の本音に一段近づいた。`,
      effect: choice.branch === "spark" ? { interest: 1, comfort: 1 } : { trust: 1, comfort: 1 },
    };
  }
  return {
    ...base,
    status: "鍵に近い",
    tone: "near",
    phrase: "NEAR",
    copy: "悪くない返し。ただ、この場面で相手が一番見ていた願いには、もう半歩だけ届いていない。",
    effect: {},
  };
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
  if (score >= 15) return { rank: "Great!", phrase: "刺さった！", className: "great", cue: "一気に距離が縮まる返し" };
  if (score >= 9) return { rank: "Good", phrase: "いい温度", className: "good", cue: "安心して次に進める返し" };
  if (score >= 2) return { rank: "Close", phrase: "あと一歩", className: "close", cue: "悪くないけど、もう少し場面に合わせたい返し" };
  return { rank: "Miss", phrase: "すれ違い", className: "miss", cue: "相手が少し身構える返し" };
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

function choiceDirection(choice) {
  const label = choiceIntentLabel(choice);
  const branchCopy = {
    safe: "受け止める",
    spark: "温度を上げる",
    strain: choice.kind === "pushy" ? "踏み込む" : "流す",
  };
  return label || branchCopy[choice.branch] || "探る";
}

function sceneArtwork(c, scene, sceneIndex) {
  const image = scene.image || (c.assetSet ? `/assets/${c.assetSet}/scene-${String(sceneIndex + 1).padStart(2, "0")}.${c.assetExt || "jpg"}` : "");
  if (!image) return avatar(c, "avatar-large");
  return `<img class="scene-photo" src="${image}" alt="${c.name} - ${scene.title}">`;
}

function continuityMemoryKey(item, history = state.history) {
  const hadRecentStrain = history
    .filter((prev) => prev.sceneIndex < item.sceneIndex)
    .slice(-2)
    .some((prev) => prev.branch === "strain");
  if (item.branch === "safe" && hadRecentStrain) return "repair";
  return item.branch || "mixed";
}

function continuityScore(item, history = state.history, currentSceneIndex = state.sceneIndex) {
  const key = continuityMemoryKey(item, history);
  const toneWeight = { repair: 9, strain: 7, spark: 6, safe: 5, mixed: 4 };
  const distance = Math.max(1, currentSceneIndex - item.sceneIndex);
  const distanceWeight = distance === 1 ? 1 : distance <= 4 ? 3 : 2;
  const choiceWeight = item.grade === "Great" ? 3 : item.grade === "Good" ? 2 : item.grade === "Close" ? 1 : 0;
  return (toneWeight[key] || 4) + distanceWeight + choiceWeight;
}

function continuityEchoes(character = state.char, history = state.history, currentSceneIndex = state.sceneIndex, limit = 3) {
  const past = history.filter((item) => item.sceneIndex < currentSceneIndex);
  const design = gameDesign(character);
  const total = totalScenes(character);
  const seen = new Set();
  return past
    .map((item) => {
      const key = continuityMemoryKey(item, past);
      const progress = sceneAt(item.sceneIndex, character);
      const memory = design.memoryEcho?.[key] || design.memoryEcho?.mixed || design.memoryEcho?.safe;
      const subtext = sceneCharacterSubtext(character.id, item.sceneIndex, total, item.branch);
      const label = key === "repair" ? "戻ってきた記憶" : key === "strain" ? "残った引っかかり" : key === "spark" ? "熱を帯びた記憶" : "安心として残った記憶";
      return {
        ...item,
        key,
        label,
        sceneTitle: `${progress.date.title} / ${progress.scene.title}`,
        copy: `${progress.scene.title}であなたが選んだ「${item.intent}」が、${character.name}の中で${memory?.label || "小さな記憶"}になっている。${memory?.copy || subtext.copy}`,
        subcopy: `${subtext.title}: ${subtext.copy}`,
        score: continuityScore(item, past, currentSceneIndex),
      };
    })
    .sort((a, b) => b.score - a.score || b.sceneIndex - a.sceneIndex)
    .filter((item) => {
      const signature = `${item.key}-${item.sceneIndex}`;
      if (seen.has(signature)) return false;
      seen.add(signature);
      return true;
    })
    .slice(0, limit);
}

function currentContinuityEcho(character = state.char) {
  return continuityEchoes(character, state.history, state.sceneIndex, 1)[0] || null;
}

function sceneContextParts(date, scene, line) {
  const previousProgress = state.sceneIndex > 0 ? sceneAt(state.sceneIndex - 1) : null;
  const previous = previousProgress?.scene || null;
  const previousChoice = state.history.find((item) => item.sceneIndex === state.sceneIndex - 1);
  const echo = currentContinuityEcho(state.char);
  const previousTone = previousChoice?.branch || "default";
  const previousLine = previous
    ? (typeof previous.line === "string" ? previous.line : previous.line[previousTone] || previous.line.default)
    : "";
  const choiceMemory = previousChoice
    ? `あなたは「${previousChoice.intent}」で返し、${previousChoice.aftertaste}。`
    : "";
  if (previous) {
    const bridge = previousProgress.date.title === date.title ? "\u305d\u306e\u307e\u307e\u5834\u9762\u304c\u9032\u307f" : "\u65e5\u3092\u6539\u3081\u3066";
    return [
      ["直前の会話", `さっきの「${previous.title}」で、${state.char.name}は「${previousLine}」と反応した。`, "now"],
      ["残っている空気", choiceMemory || "まだ前の返しの余韻を探っている。", `tone-${previousChoice?.branch || "mixed"}`],
      ...(echo ? [["覚えている一手", echo.copy, `echo echo-${echo.key}`]] : []),
      ["この一枚", `${bridge}、${scene.location}へ。いま${state.char.name}は「${line}」と切り出している。`, "photo"],
      ["今回読むこと", `ここでは、${scene.goal}かどうかを見られている。`, "read"],
    ];
  }
  return [
    ["直前の流れ", `${date.title}の始まり。今日は${date.purpose}ために会っている。`, "now"],
    ["この一枚", `${scene.location}で合流。まだお互い、踏み込み方を探っている。`, "photo"],
    ["最初の一言", `${state.char.name}は「${line}」と切り出し、あなたの反応を見ている。`, "read"],
    ["今回読むこと", `ここでは、${scene.goal}かどうかを見られている。`, "read"],
  ];
}

function sceneContext(date, scene, line) {
  return `<div class="scene-context-flow">${sceneContextParts(date, scene, line).map(([label, copy, kind = ""]) => `<article class="${kind}"><span>${label}</span><p>${copy}</p></article>`).join("")}</div>`;
}

function heartKeyCard(key) {
  return `<div class="heart-key-card key-${key.tone}"><span>${key.badge}</span><b>${key.title}</b><p>${key.clue}</p><small>読むサイン: ${key.sign}</small></div>`;
}

function decoderCard(decoder) {
  return `<div class="decoder-card decoder-${decoder.tone}"><span>${decoder.badge}</span><b>${decoder.title}</b><p>${decoder.copy}</p></div>`;
}

function needCompassCard(compass) {
  return `<div class="need-compass-card need-${compass.tone}"><span>${compass.badge}</span><b>${compass.status}: ${compass.title}</b><p>${compass.copy}</p><small>${compass.next}</small></div>`;
}

function connectionBidCard(bid) {
  return `<div class="connection-bid-card bid-${bid.tone}"><span>${bid.badge}</span><b>${bid.status}: ${bid.title}</b><p>${bid.copy}</p><small>${bid.next}</small></div>`;
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
  const reading = sceneReadingCue(c.id, state.sceneIndex, count);
  const tactic = sceneTacticalRead(c.id, state.sceneIndex, count);
  const contract = sceneEmotionalContract(c.id, scene, state.sceneIndex, count);
  const heartKey = heartKeyRead(c, state.sceneIndex);
  const decoder = decoderRead(c, state.sceneIndex);
  const needCompass = needCompassRead(c, state.sceneIndex);
  const connectionBid = connectionBidRead(c, state.sceneIndex);
  const mission = dateMissionReport(c, dateIndex);
  const memory = characterMemoryReport(c);
  const stage = relationshipStage(c);
  const compass = routeCompassReport(c);
  return `<div class="game-shell">
    <header class="game-header"><button class="icon-button" data-go="profile">×</button><div class="game-person">${avatar(c)}<div><b>${c.name}</b><span>${c.style}</span></div></div><div class="game-progress"><span>DATE ${dateIndex + 1} <b>${state.sceneIndex + 1} / ${count}</b></span><i><em style="width:${((state.sceneIndex + 1) / count) * 100}%;background:${c.color}"></em></i></div></header>
    <main class="game-main"><aside class="score-strip"><div class="score-hero" style="--c:${c.color};--light:${c.light}"><span class="score-orb">${scoreIcon(tier.icon)}<strong>${total}</strong></span><div class="score-copy"><span>\u7dcf\u5408\u8a55\u4fa1</span><b>${tier.label}</b><p>${tier.sub}</p></div></div>${meters()}<div class="relationship-stage stage-${stage.tone}"><span>${stage.label}</span><p>${stage.copy}</p></div>${routeCompassCard(compass, true)}<div class="meter-help">\u30bf\u30a4\u30d7\u3054\u3068\u306b\u91cd\u304f\u898b\u308b\u30dd\u30a4\u30f3\u30c8\u304c\u5c11\u3057\u9055\u3044\u307e\u3059\u3002</div></aside>
      <section class="scene" style="--c:${c.color}"><div class="scene-label"><span>${date.title} ${local + 1}/${date.scenes.length}</span><b>${scene.title}</b></div><div class="scene-context"><b>今の状況</b>${sceneContext(date, scene, line)}<div class="scene-insight"><span>${dramatic.beat}</span><b>${dramatic.focus}</b></div><div class="scene-coach"><span>${coaching.badge}</span><p><b>${coaching.skill}</b>${coaching.watch}</p></div>${heartKeyCard(heartKey)}${decoderCard(decoder)}${needCompassCard(needCompass)}${connectionBidCard(connectionBid)}<div class="scene-contract"><span>${contract.badge}</span><b>${contract.mode}場面</b><p>${contract.surface}</p><small>隠れた願い: ${contract.hiddenAsk}</small></div><div class="scene-read"><span>READ THE ROOM</span><p><b>${reading.signal}</b>${reading.playerQuestion}</p></div><div class="scene-tactic"><span>${tactic.badge} TACTIC</span><p><b>${tactic.title}</b>${tactic.read}</p><small>刺さりやすい: ${tactic.prefer || "場面次第"} / 危ない: ${tactic.avoid || "読み違い"}</small></div><div class="scene-memory memory-${memory.tone}"><span>MEMORY</span><p><b>${memory.label}</b>${memory.copy}</p></div></div>${dateMissionCard(mission)}<div class="scene-visual" style="background:${c.light}">${sceneArtwork(c, scene, state.sceneIndex)}</div><div class="bubble"><span>${c.name}</span><p>「${line}」</p></div><div class="goal">✦ 駆け引き: ${dramatic.playerMove}</div><h2>あなたなら、どう返しますか？</h2><div class="choices">${choices.map((choice, index) => `<button data-choice="${index}" class="choice-${choice.branch}"><span>${String.fromCharCode(65 + index)}</span><em class="choice-intent"><small>方向性</small>${choiceDirection(choice)}</em><p>${choice.label}</p></button>`).join("")}</div></section>
    </main>${state.picked ? feedback() : ""}
  </div>`;
}

function feedback() {
  const picked = state.picked;
  const grade = choiceGrade(picked);
  const c = state.char;
  const { scene } = currentScene();
  const coaching = sceneCoaching(c.id, scene, state.sceneIndex, totalScenes(c));
  const contract = sceneEmotionalContract(c.id, scene, state.sceneIndex, totalScenes(c));
  const subtext = sceneCharacterSubtext(c.id, state.sceneIndex, totalScenes(c), picked.branch);
  const tactic = picked.tactic || sceneTacticalRead(c.id, state.sceneIndex, totalScenes(c), picked);
  const momentum = picked.momentum || momentumRead(picked);
  const combo = currentCombo();
  return `<div class="feedback-overlay"><div class="feedback-modal chat-modal feedback-stamp-modal grade-${grade.className}">
    <div class="grade-stamp"><small>4段階スタンプ</small><span>${grade.rank}</span><b>${grade.phrase}</b><p>${grade.cue}</p></div>
    <div class="chat-head" style="--c:${c.color};--light:${c.light}">${avatar(c)}<div><span>${grade.rank} / ${choiceDirection(picked)}</span><h3>${c.name}\u306e反応</h3><p>${grade.cue}</p></div></div>
    <div class="chat-thread feedback-simple">
      <div class="chat-bubble you"><b>あなた / ${choiceDirection(picked)}</b><p>${picked.label}</p></div>
      <div class="chat-bubble them" style="--c:${c.color};--light:${c.light}"><b>${c.name}</b><p>「${picked.reaction}」</p></div>
      <div class="chat-bubble subtext"><b>${subtext.badge} / ${subtext.title}</b><p>${subtext.copy}</p></div>
      <div class="chat-bubble key key-${picked.heartKey?.tone || "near"}"><b>${picked.heartKey?.phrase || "KEY"} / ${picked.heartKey?.status || "鍵の読み"}</b><p>${picked.heartKey?.copy || "相手の本音の鍵を読み直す場面。"}</p></div>
      <div class="chat-bubble decoder decoder-${picked.decoder?.tone || "near"}"><b>${picked.decoder?.badge || "DECODER"} / ${picked.decoder?.title || "キャラ理解"}</b><p>${picked.decoder?.copy || "相手の刺さるサインを読み直す場面。"}</p></div>
      <div class="chat-bubble need need-${picked.needCompass?.tone || "near"}"><b>${picked.needCompass?.badge || "NEED"} / ${picked.needCompass?.status || "関係欲求"}</b><p>${picked.needCompass?.copy || "この場面で満たしたい欲求を読み直す場面。"}</p><small>${picked.needCompass?.next || ""}</small></div>
      <div class="chat-bubble bid bid-${picked.connectionBid?.tone || "toward"}"><b>${picked.connectionBid?.badge || "BID"} / ${picked.connectionBid?.status || "接続サイン"}</b><p>${picked.connectionBid?.copy || "相手の小さな接続サインを読み直す場面。"}</p><small>${picked.connectionBid?.next || ""}</small></div>
      <div class="chat-bubble contract"><b>${contract.mode}場面の読み</b><p>${picked.branch === "strain" ? contract.temptingMove : contract.winningMove}</p></div>
      <div class="chat-bubble tactic"><b>${tactic.verdict}</b><p>${tactic.choiceFits ? tactic.payoff : tactic.choiceRisks ? tactic.trap : picked.why}</p></div>
      <div class="chat-bubble switch"><b>${coaching.switch.label}</b><p>${personaSwitchFeedback(c.id, state.sceneIndex, totalScenes(c), picked.branch)}</p></div>
      <div class="chat-bubble momentum"><b>${momentum.label} / ${combo.label}</b><p>${momentum.copy}</p></div>
      <div class="chat-bubble better"><b>次にもっと自然にするなら</b><p>${picked.better}</p></div>
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

function missionFor(character = state.char, dateIndex = currentScene().dateIndex) {
  const missions = gameDesign(character).dateMissions || [];
  return missions[dateIndex] || {
    badge: "DATE MISSION",
    title: "相手の温度を読む",
    aim: gameDesign(character).winningMindset,
    target: "safeかsparkを2回以上、strainを1回以下",
    pass: { safe: 1, spark: 1, strainMax: 1 },
    success: gameDesign(character).mastery,
    risk: gameDesign(character).temptationTrap,
    imageCue: gameDesign(character).visualFormula,
  };
}

function missionHistory(character = state.char, dateIndex = currentScene().dateIndex, history = state.history) {
  const start = dateStartIndex(dateIndex, character);
  const date = storyFor(character.id).dates[dateIndex];
  const end = start + (date?.scenes.length || 0) - 1;
  return history.filter((item) => item.sceneIndex >= start && item.sceneIndex <= end);
}

function hasRepairAfterSpark(items) {
  return items.some((item, index) => item.branch === "spark" && items.slice(index + 1).some((next) => next.branch === "safe"));
}

function dateMissionReport(character = state.char, dateIndex = currentScene().dateIndex, history = state.history) {
  const mission = missionFor(character, dateIndex);
  const items = missionHistory(character, dateIndex, history);
  const counts = branchSummary(items).counts;
  const checks = [];
  if (mission.pass?.safe) checks.push({ key: "safe", label: `安心 ${counts.safe}/${mission.pass.safe}`, done: counts.safe >= mission.pass.safe });
  if (mission.pass?.spark) checks.push({ key: "spark", label: `火花 ${counts.spark}/${mission.pass.spark}`, done: counts.spark >= mission.pass.spark });
  if (Number.isFinite(mission.pass?.strainMax)) checks.push({ key: "strain", label: `揺れ ${counts.strain}/${mission.pass.strainMax}以下`, done: counts.strain <= mission.pass.strainMax });
  if (mission.pass?.repairAfterSpark) checks.push({ key: "repair", label: "火花のあと受け止め", done: hasRepairAfterSpark(items) });
  const done = checks.filter((check) => check.done).length;
  const progress = items.length && checks.length ? Math.round((done / checks.length) * 100) : 0;
  const complete = checks.length > 0 && done === checks.length && items.length > 0;
  let next = mission.success;
  if (!complete) {
    if (counts.strain > (mission.pass?.strainMax ?? 99)) next = "まずは揺れを増やさず、次の一手で相手の言葉を受け取り直す。";
    else if (mission.pass?.safe && counts.safe < mission.pass.safe) next = "次は安心系の返しで、相手が話し続けられる土台を作る。";
    else if (mission.pass?.spark && counts.spark < mission.pass.spark) next = "次は火花のある返しで、恋愛の温度を少し上げる。";
    else if (mission.pass?.repairAfterSpark && !hasRepairAfterSpark(items)) next = "火花を出したあとに、相手の気持ちを一度受け止めて着地させる。";
  }
  return {
    ...mission,
    counts,
    checks,
    progress,
    complete,
    status: complete ? "CLEAR" : items.length ? "IN PROGRESS" : "READY",
    tone: complete ? "clear" : counts.strain > (mission.pass?.strainMax ?? 99) ? "risk" : "active",
    next,
  };
}

function dateMissionCard(report) {
  return `<div class="date-mission mission-${report.tone}"><div><span>${report.badge}</span><b>${report.title}</b><p>${report.aim}</p></div><strong>${report.progress}%</strong><i><em style="width:${report.progress}%"></em></i><small>${report.status}: ${report.checks.map((check) => `<mark class="${check.done ? "done" : ""}">${check.label}</mark>`).join("")}</small></div>`;
}

function hasRecovery(history = state.history) {
  return history.some((item, index) => item.branch === "strain" && history.slice(index + 1, index + 3).some((next) => next.branch === "safe"));
}

function characterMemoryReport(character = state.char, history = state.history) {
  const memory = gameDesign(character).memoryEcho || {};
  if (!history.length) {
    return {
      tone: "blank",
      label: "まだ白紙の記憶",
      copy: `${character.name}は、あなたの最初の一言をこれから覚えていく。どんな距離感で始めるかが第一印象になる。`,
      imageCue: memory.imageCue || gameDesign(character).visualFormula,
    };
  }
  const counts = branchSummary(history).counts;
  const recovered = hasRecovery(history);
  let key = "mixed";
  if (recovered && memory.repair) key = "repair";
  else if (counts.strain >= Math.max(2, counts.safe, counts.spark)) key = "strain";
  else if (counts.spark >= counts.safe + 2) key = "spark";
  else if (counts.safe >= counts.spark + 2) key = "safe";
  const selected = memory[key] || memory.mixed || memory.safe || {
    label: "積み重なった記憶",
    copy: gameDesign(character).winningMindset,
  };
  return {
    ...selected,
    key,
    tone: key,
    counts,
    imageCue: memory.imageCue || gameDesign(character).visualFormula,
  };
}

function playStyleReport(history = state.history) {
  const summary = branchSummary(history);
  const recovered = hasRecovery(history);
  const safe = summary.counts.safe || 0;
  const spark = summary.counts.spark || 0;
  const strain = summary.counts.strain || 0;
  if (recovered) return { title: "リカバリー上手", badge: "RECOVER", copy: "一度揺れた空気を放置せず、関係を戻す選択ができている。" };
  if (strain >= Math.max(safe, spark) && strain >= 2) return { title: "攻めすぎ注意", badge: "CHECK", copy: "踏み込みは魅力になるが、相手の主導権を残すともっと刺さる。" };
  if (safe >= spark + 2) return { title: "信頼ビルダー", badge: "TRUST", copy: "安心感を作るのが得意。終盤は自分の好意も少し強めに出したい。" };
  if (spark >= safe + 2) return { title: "火花メーカー", badge: "SPARK", copy: "会話の温度を上げるのが上手。次は誠実な着地で深さを足す。" };
  return { title: "バランス型", badge: "BALANCE", copy: "安心と火花を場面で切り替えられている。相手の変化を見て次を選べている。" };
}

function arcModeMeta(mode, design) {
  const meta = {
    入る: {
      label: "入口の距離",
      cue: "最初の安心",
      advice: `最初は盛り上げるより、${design.lens.focus}がどこに出るかを見る。`,
    },
    近づく: {
      label: "接近の温度",
      cue: "甘さと余白",
      advice: `${design.lens.playerMove}。楽しいだけ、優しいだけで止めない。`,
    },
    戻す: {
      label: "すれ違い修復",
      cue: "揺れの扱い",
      advice: `${design.lens.risk}前に、相手の言葉を一度正確に受け取り直す。`,
    },
    決める: {
      label: "関係の定義",
      cue: "告白の一手",
      advice: design.innerLayer?.confessionNeed || "曖昧にせず、主語つきで関係の意思を置く。",
    },
  };
  return meta[mode] || meta["近づく"];
}

function relationshipArcReport(character = state.char, history = state.history) {
  const design = gameDesign(character);
  const modes = ["入る", "近づく", "戻す", "決める"];
  const rows = new Map(modes.map((mode) => [mode, { mode, ...arcModeMeta(mode, design), safe: 0, spark: 0, strain: 0, total: 0, scenes: [] }]));
  const total = totalScenes(character);
  for (const item of history) {
    const progress = sceneAt(item.sceneIndex, character);
    const contract = sceneEmotionalContract(character.id, progress.scene, item.sceneIndex, total);
    const row = rows.get(contract.mode) || rows.get("近づく");
    row.total += 1;
    row[item.branch] = (row[item.branch] || 0) + 1;
    row.scenes.push({ ...item, contract, title: `${progress.date.title} / ${progress.scene.title}` });
  }
  const reports = [...rows.values()].map((row) => {
    const raw = row.safe * 34 + row.spark * 28 - row.strain * 32 + row.total * 10;
    const score = row.total ? clamp(Math.round(raw / Math.max(1, row.total))) : 0;
    const status = row.total === 0 ? "未到達" : score >= 76 ? "得意" : score >= 52 ? "育成中" : "要修復";
    const tone = row.total === 0 ? "blank" : score >= 76 ? "open" : score >= 52 ? "near" : "risk";
    const last = row.scenes.at(-1);
    const copy = row.total === 0
      ? `${row.cue}はまだこれから。`
      : last?.branch === "strain"
        ? last.contract.temptingMove
        : last?.contract.winningMove || row.advice;
    return { ...row, score, status, tone, copy };
  });
  const next = reports
    .filter((row) => row.total > 0)
    .sort((a, b) => a.score - b.score)[0] || reports[0];
  return {
    reports,
    next,
    summary: `${design.playerPromise} そのために、${next.label}では「${next.advice}」が次の練習ポイントになる。`,
  };
}

function relationshipArcPanel(character = state.char) {
  const arc = relationshipArcReport(character);
  return `${routeCompassPanel(character)}<div class="arc-panel" style="--c:${character.color};--light:${character.light}"><h3>恋愛ルート読解 <span>${arc.next.label}</span></h3><p>${arc.summary}</p><div>${arc.reports.map((row) => `<article class="arc-${row.tone}"><span>${row.mode}</span><b>${row.label}</b><strong>${row.status} ${row.score}%</strong><i><em style="width:${row.score}%"></em></i><p>${row.copy}</p><small>安心${row.safe} / 火花${row.spark} / 揺れ${row.strain}</small></article>`).join("")}</div></div>${heartKeyPanel(character)}${needCompassPanel(character)}${connectionBidPanel(character)}${characterDecoderPanel(character)}${continuityEchoPanel(character)}`;
}

function routeCompassReport(character = state.char, history = state.history) {
  const design = gameDesign(character);
  const route = relationshipRoute(character.id, state.scores, state.flags, history);
  const counts = branchSummary(history).counts;
  const heart = heartKeySummary(character, history);
  const recovered = hasRecovery(history);
  const distance = Math.abs((counts.safe || 0) - (counts.spark || 0));
  const progress = history.length / Math.max(1, totalScenes(character));
  const confidence = history.length
    ? clamp(Math.round(progress * 44 + distance * 8 + (recovered ? 18 : 0) + (heart.open * 4) - (heart.locked * 5) + 34))
    : 0;
  const routeTone = route.key === "repair" ? "risk" : route.key === "reconnect" ? "repair" : route.key === "spark" ? "spark" : route.key === "trust" ? "trust" : "balance";
  const forkMap = {
    repair: "次は結論より受け取り直し。相手が守りたかったものを一文で言い直すと、修復ルートへ戻せる。",
    reconnect: "このルートは揺れを物語に変えられる。次の会話で同じズレをどう扱うかを決めると強い。",
    spark: `火花は十分。次は${design.lens.playerMove}ことで、遊びではなく恋に変わる。`,
    trust: "安心は届いている。次は聞き役だけで止まらず、自分の希望を少し置くと別ルートも開く。",
    balance: "場面ごとの読み分けができている。次は本音の鍵を開ける選択でエンディングの質が上がる。",
  };
  const factors = [
    `安心${counts.safe || 0}`,
    `火花${counts.spark || 0}`,
    `揺れ${counts.strain || 0}`,
    `鍵解放${heart.open}`,
  ];
  return {
    route,
    tone: routeTone,
    confidence,
    label: history.length ? route.name : "まだ未分岐",
    fork: history.length ? (forkMap[route.key] || route.nextMove) : "最初の数シーンは、相手のテンポと本音の鍵を読むほど分岐の色が決まる。",
    factors,
  };
}

function routeCompassCard(report, compact = false) {
  return `<div class="route-compass route-${report.tone} ${compact ? "compact" : ""}"><span>ROUTE COMPASS</span><b>${report.label}</b><strong>${report.confidence}%</strong><i><em style="width:${report.confidence}%"></em></i><p>${report.fork}</p>${compact ? "" : `<small>${report.factors.join(" / ")}</small>`}</div>`;
}

function routeCompassPanel(character = state.char) {
  const report = routeCompassReport(character);
  return `<div class="route-compass-panel" style="--c:${character.color};--light:${character.light}"><h3>ルートコンパス <span>${report.route.badge || "ROUTE"}</span></h3>${routeCompassCard(report)}<p>選択は一本道ではなく、安心・火花・修復・本音の鍵の積み重ねでエンディングの色が変わります。</p></div>`;
}

function continuityEchoPanel(character = state.char) {
  const echoes = continuityEchoes(character, state.history, totalScenes(character), 4);
  if (!echoes.length) return "";
  return `<div class="continuity-panel" style="--c:${character.color};--light:${character.light}"><h3>伏線回収ログ <span>${echoes.length} cues</span></h3><p>今回のデートで、${character.name}が後半まで覚えていた態度。次に同じ相手を選ぶ時の「効いた一手」です。</p><div>${echoes.map((item) => `<article class="echo-${item.key}"><span>${item.label}</span><b>${item.sceneTitle}</b><p>${item.copy}</p><small>${item.subcopy}</small></article>`).join("")}</div></div>`;
}

function heartKeySummary(character = state.char, history = state.history) {
  const items = history.filter((item) => item.heartKeyTone);
  const open = items.filter((item) => item.heartKeyTone === "open").length;
  const near = items.filter((item) => item.heartKeyTone === "near").length;
  const locked = items.filter((item) => item.heartKeyTone === "locked").length;
  const total = Math.max(1, items.length);
  const score = clamp(Math.round(((open * 1 + near * 0.55 - locked * 0.35) / total) * 100));
  const tone = score >= 72 ? "open" : score >= 46 ? "near" : "locked";
  const label = tone === "open" ? "本音まで届いた" : tone === "near" ? "かなり読めている" : "読み直しが必要";
  const best = [...items].sort((a, b) => {
    const weight = { open: 3, near: 2, locked: 1 };
    return (weight[b.heartKeyTone] || 0) - (weight[a.heartKeyTone] || 0);
  }).slice(0, 4);
  return { character, items, open, near, locked, score, tone, label, best };
}

function heartKeyPanel(character = state.char) {
  const report = heartKeySummary(character);
  if (!report.items.length) return "";
  return `<div class="heart-key-panel key-${report.tone}" style="--c:${character.color};--light:${character.light}"><h3>本音の鍵 読解率 <span>${report.score}%</span></h3><p>${character.name}が本当に見ていた願いをどれだけ読めたか。${report.label}。</p><div class="key-counts"><span>解放 ${report.open}</span><span>接近 ${report.near}</span><span>ズレ ${report.locked}</span></div><div>${report.best.map((item) => `<article class="key-${item.heartKeyTone}"><span>${item.heartKey}</span><b>${item.heartKeyTitle}</b><p>${item.heartKeyCopy}</p></article>`).join("")}</div></div>`;
}

function needCompassSummary(character = state.char, history = state.history) {
  const items = history.filter((item) => item.needTone);
  const open = items.filter((item) => item.needTone === "open").length;
  const near = items.filter((item) => item.needTone === "near").length;
  const risk = items.filter((item) => item.needTone === "risk").length;
  const score = items.length ? clamp(Math.round(((open * 1 + near * 0.55 - risk * 0.45) / items.length) * 100)) : 0;
  const tone = score >= 72 ? "open" : score >= 48 ? "near" : risk >= 3 ? "risk" : "watch";
  const label = tone === "open" ? "欲求の芯まで届いた" : tone === "near" ? "欲求の近くまで読めた" : tone === "risk" ? "欲求の修復が必要" : "読み筋を作っている";
  const latestRisk = [...items].reverse().find((item) => item.needTone === "risk");
  const latestOpen = [...items].reverse().find((item) => item.needTone === "open");
  const active = activePersonaSwitch(character.id, state.sceneIndex, totalScenes(character));
  return {
    items,
    open,
    near,
    risk,
    score,
    tone,
    label,
    focus: latestRisk?.needTitle || latestOpen?.needTitle || active.label,
    next: latestRisk?.needNext || latestOpen?.needNext || `次は「${active.opens}」を場面の温度に合わせて示す。`,
  };
}

function needCompassPanel(character = state.char) {
  const report = needCompassSummary(character);
  if (!report.items.length) return "";
  const rows = [
    ["満たした", report.open, "open"],
    ["近かった", report.near, "near"],
    ["傷ついた", report.risk, "risk"],
  ];
  return `<div class="need-compass-panel need-${report.tone}" style="--c:${character.color};--light:${character.light}"><h3>関係欲求コンパス <span>${report.score}%</span></h3><p>${character.name}が場面ごとに見ていた「自由・理解・具体性」をどれだけ満たせたか。${report.label}。</p><div class="need-counts">${rows.map(([label, value, tone]) => `<span class="need-${tone}">${label}<b>${value}</b></span>`).join("")}</div><article><span>次に読む芯</span><b>${report.focus}</b><p>${report.next}</p></article></div>`;
}

function connectionBidSummary(character = state.char, history = state.history) {
  const items = history.filter((item) => item.bidTone);
  const toward = items.filter((item) => item.bidTone === "toward").length;
  const spark = items.filter((item) => item.bidTone === "spark").length;
  const away = items.filter((item) => item.bidTone === "away").length;
  const against = items.filter((item) => item.bidTone === "against").length;
  const score = items.length ? clamp(Math.round(((toward * 1 + spark * 0.85 - away * 0.35 - against * 0.65) / items.length) * 100)) : 0;
  const tone = score >= 72 ? "toward" : score >= 48 ? "spark" : away + against >= 3 ? "away" : "watch";
  const label = tone === "toward" ? "小さなサインによく向き合えた" : tone === "spark" ? "拾えているが着地を足したい" : tone === "away" ? "見送ったサインを修復したい" : "サインを探っている";
  const latestMiss = [...items].reverse().find((item) => ["away", "against"].includes(item.bidTone));
  const latestHit = [...items].reverse().find((item) => ["toward", "spark"].includes(item.bidTone));
  return {
    items,
    toward,
    spark,
    away,
    against,
    score,
    tone,
    label,
    focus: latestMiss?.bidTitle || latestHit?.bidTitle || "小さなサイン",
    next: latestMiss?.bidNext || latestHit?.bidNext || "次は相手の話題より先に、接続のサインへ反応する。",
  };
}

function connectionBidPanel(character = state.char) {
  const report = connectionBidSummary(character);
  if (!report.items.length) return "";
  const rows = [
    ["向き合った", report.toward, "toward"],
    ["楽しく拾った", report.spark, "spark"],
    ["見送った", report.away, "away"],
    ["押し返した", report.against, "against"],
  ];
  return `<div class="connection-bid-panel bid-${report.tone}" style="--c:${character.color};--light:${character.light}"><h3>接続サイン読解 <span>${report.score}%</span></h3><p>${character.name}の小さな「見て」「聞いて」「戻ってきて」をどれだけ拾えたか。${report.label}。</p><div class="bid-counts">${rows.map(([label, value, tone]) => `<span class="bid-${tone}">${label}<b>${value}</b></span>`).join("")}</div><article><span>次に拾うサイン</span><b>${report.focus}</b><p>${report.next}</p></article></div>`;
}

function characterDecoderSummary(character = state.char, history = state.history) {
  const design = gameDesign(character);
  const items = history.filter((item) => item.decoderTone);
  const open = items.filter((item) => item.decoderTone === "open").length;
  const near = items.filter((item) => item.decoderTone === "near").length;
  const risk = items.filter((item) => item.decoderTone === "risk").length;
  const score = items.length ? clamp(Math.round(((open * 1 + near * 0.6 - risk * 0.45) / items.length) * 100)) : 0;
  const tone = score >= 72 ? "open" : score >= 48 ? "near" : "risk";
  const label = tone === "open" ? "かなり読めている" : tone === "near" ? "もう少しで掴める" : "立て直し優先";
  const lastRisk = [...items].reverse().find((item) => item.decoderTone === "risk");
  const highlights = [...items]
    .filter((item, index, source) => item.decoderTitle && source.findIndex((x) => x.decoderTitle === item.decoderTitle) === index)
    .slice(0, 4);
  return {
    design,
    items,
    open,
    near,
    risk,
    score,
    tone,
    label,
    highlights,
    repair: lastRisk?.decoderRepair || `次は${design.lens.playerMove}。${design.lens.risk}前に、相手のサインをひとつ拾い直す。`,
  };
}

function characterDecoderPanel(character = state.char) {
  const report = characterDecoderSummary(character);
  const switches = report.design.attractionSwitches || [];
  const turnOffs = report.design.turnOffs || [];
  return `<div class="character-decoder-panel decoder-${report.tone}" style="--c:${character.color};--light:${character.light}"><h3>キャラ理解度 <span>${report.score}%</span></h3><p>${character.name}の「刺さる/冷める」をどれだけ読めたか。${report.label}。</p><div class="decoder-columns"><article><span>刺さるスイッチ</span>${switches.map((item) => `<b>${item}</b>`).join("")}</article><article><span>冷めるサイン</span>${turnOffs.map((item) => `<b>${item}</b>`).join("")}</article></div><div class="decoder-log">${report.highlights.map((item) => `<article class="decoder-${item.decoderTone}"><span>${item.decoderTitle}</span><p>${item.decoderCopy}</p></article>`).join("")}</div><small>立て直しの一言: ${report.repair}</small></div>`;
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
  const recovered = hasRecovery();
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

function switchProgressReport(character = state.char) {
  const switches = gameDesign(character).psychologicalSwitches || [];
  const total = totalScenes(character);
  const phaseSize = Math.max(1, Math.ceil(total / Math.max(1, switches.length)));
  return switches.map((item, index) => {
    const start = index * phaseSize;
    const end = Math.min(total - 1, start + phaseSize - 1);
    const picks = state.history.filter((history) => history.sceneIndex >= start && history.sceneIndex <= end);
    const safe = picks.filter((history) => history.branch === "safe").length;
    const spark = picks.filter((history) => history.branch === "spark").length;
    const strain = picks.filter((history) => history.branch === "strain").length;
    const raw = safe * 28 + spark * 24 - strain * 22 + picks.length * 4;
    const score = Math.max(0, Math.min(100, Math.round(raw)));
    const status = score >= 72 ? "解放" : score >= 42 ? "接近" : picks.length ? "揺らぎ" : "未読";
    const tone = score >= 72 ? "open" : score >= 42 ? "near" : picks.length ? "risk" : "blank";
    const next = tone === "open" ? item.tell : tone === "near" ? item.opens : item.hurts;
    return { ...item, score, status, tone, safe, spark, strain, picked: picks.length, next };
  });
}

function switchProgressPanel(character = state.char, compact = false) {
  const report = switchProgressReport(character);
  return `<div class="switch-progress-panel ${compact ? "compact" : ""}"><h3>${character.name}の心理スイッチ <span>${report.filter((item) => item.tone === "open").length}/${report.length} 解放</span></h3><div>${report.map((item) => `<article class="switch-${item.tone}"><b>${item.label}</b><strong>${item.status}</strong><i><em style="width:${item.score}%"></em></i><p>${item.next}</p></article>`).join("")}</div></div>`;
}

function routeAlbumPanel(character = state.char, currentRoute) {
  const album = readRouteAlbum()[character.id] || {};
  const routes = Object.values(routeEndings);
  const unlockedCount = routes.filter((route) => album[route.key] || route.key === currentRoute.key).length;
  return `<div class="route-album" style="--c:${character.color}"><h3>エンディングアルバム <span>${unlockedCount}/${routes.length}</span></h3><div>${routes.map((route) => {
    const flavoredRoute = characterRouteEnding(character.id, route.key);
    const record = album[route.key];
    const unlocked = Boolean(record) || route.key === currentRoute.key;
    return `<article class="${unlocked ? "unlocked" : "locked"} ${route.key === currentRoute.key ? "current" : ""}"><span>${unlocked ? flavoredRoute.badge : "LOCKED"}</span><b>${unlocked ? flavoredRoute.albumName : "未解放ルート"}</b><p>${unlocked ? flavoredRoute.playerPattern : flavoredRoute.replayMission}</p>${record?.score ? `<small>BEST ${record.score}</small>` : route.key === currentRoute.key ? "<small>今回解放</small>" : ""}</article>`;
  }).join("")}</div></div>`;
}

function replayPlanReport(character = state.char, route = relationshipRoute(character.id, state.scores, state.flags, state.history)) {
  const album = readRouteAlbum()[character.id] || {};
  const routes = Object.values(routeEndings);
  const lockedRoute = routes.find((item) => !album[item.key] && item.key !== route.key);
  const switches = switchProgressReport(character);
  const nextSwitch = switches.find((item) => item.tone !== "open") || switches.at(-1);
  const heart = heartKeySummary(character);
  const decoder = characterDecoderSummary(character);
  const tasks = [
    {
      badge: route.badge || "ROUTE",
      title: "今回のルートを磨く",
      copy: route.replayMission || route.nextMove,
    },
  ];
  if (nextSwitch) {
    tasks.push({
      badge: nextSwitch.status,
      title: `${nextSwitch.label}を解放する`,
      copy: nextSwitch.tone === "open" ? nextSwitch.tell : nextSwitch.opens,
    });
  }
  if (heart.score < 72) {
    tasks.push({
      badge: "HEART KEY",
      title: "本音の鍵をもう一段読む",
      copy: heart.locked ? "鍵がずれた場面では、反論より先に隠れた願いを言い直す。" : "鍵に近い場面で、相手のサインを一文だけ具体化する。",
    });
  }
  if (decoder.risk > 0) {
    tasks.push({
      badge: "REPAIR",
      title: "冷めたサインを立て直す",
      copy: decoder.repair,
    });
  }
  if (lockedRoute) {
    const flavored = characterRouteEnding(character.id, lockedRoute.key);
    tasks.push({
      badge: flavored.badge,
      title: `${flavored.albumName}を狙う`,
      copy: flavored.unlockHint || flavored.replayMission,
    });
  }
  const focus = tasks.slice(0, 4);
  return {
    route,
    lockedRoute,
    nextSwitch,
    heart,
    decoder,
    focus,
    headline: lockedRoute ? `次は${characterRouteEnding(character.id, lockedRoute.key).albumName}も狙える` : "全ルート回収に近づいている",
  };
}

function replayPlanPanel(character = state.char, route) {
  const plan = replayPlanReport(character, route);
  return `<div class="replay-plan-panel" style="--c:${character.color};--light:${character.light}"><h3>次周の作戦ノート <span>REPLAY PLAN</span></h3><p>${plan.headline}。今回の読み筋を次のプレイで別のエンディングや深い本音につなげます。</p><div>${plan.focus.map((task) => `<article><span>${task.badge}</span><b>${task.title}</b><p>${task.copy}</p></article>`).join("")}</div></div>`;
}

function missionBoardPanel(character = state.char) {
  const reports = storyFor(character.id).dates.map((date, index) => ({ date, report: dateMissionReport(character, index) }));
  const cleared = reports.filter(({ report }) => report.complete).length;
  const route = relationshipRoute(character.id, state.scores, state.flags, state.history);
  return `${replayPlanPanel(character, route)}<div class="mission-board" style="--c:${character.color}"><h3>デートミッション <span>${cleared}/${reports.length} CLEAR</span></h3><div>${reports.map(({ date, report }, index) => `<article class="mission-${report.tone}"><span>DATE ${index + 1} / ${report.badge}</span><b>${report.title}</b><p>${report.complete ? report.success : report.next}</p><i><em style="width:${report.progress}%"></em></i><small>${date.purpose}</small></article>`).join("")}</div></div>`;
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
  const nextRead = next ? sceneReadingCue(c.id, state.sceneIndex + 1, totalScenes(c)) : null;
  const stage = relationshipStage(c);
  const route = relationshipRoute(c.id, state.scores, state.flags, state.history);
  const heart = heartMemoUnlocks(c);
  const mission = dateMissionReport(c, dateIndex);
  const memory = characterMemoryReport(c);
  const arc = relationshipArcReport(c);
  const compass = routeCompassReport(c);
  const total = compatibilityScore(c);
  const nextCopy = next
    ? `${next.date.title}は「${next.scene.location}」から。次は${nextGuide.skill}。${nextGuide.lesson}`
    : "この先は最終結果で、ふたりの関係の着地を見ます。";
  const nextReadCopy = nextRead ? `読むサイン: ${nextRead.signal} / 合言葉: ${nextRead.playerQuestion}` : "最終結果で、今回の読み筋を振り返ります。";
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
          <article class="mission-${mission.tone}"><span>${mission.badge}</span><b>${mission.title} ${mission.progress}%</b><p>${mission.complete ? mission.success : mission.next}</p></article>
          <article class="memory-${memory.tone}"><span>MEMORY</span><b>${memory.label}</b><p>${memory.copy}</p></article>
          <article class="arc-${arc.next.tone}"><span>LOVE ARC</span><b>${arc.next.label}</b><p>${arc.next.advice}</p></article>
          <article class="route-${compass.tone}"><span>ROUTE</span><b>${compass.label} ${compass.confidence}%</b><p>${compass.fork}</p></article>
        </div>
        <div class="checkpoint-next">
          <span>NEXT SCENE</span>
          <b>${next ? `${next.date.title} / ${next.scene.title}` : "最終結果"}</b>
          <p>${nextCopy} ${nextReadCopy}</p>
        </div>
        <div class="heart-progress"><span>HEART MEMO</span><b>${heart.unlocked.length}/5 解放</b><p>次に見えそうな内面: ${heart.nextHint}</p></div>
        ${switchProgressPanel(c, true)}
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
  const recovered = hasRecovery();
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
  const memory = characterMemoryReport(c);
  const finale = characterFinaleScene(c.id, route.key, memory.key);
  unlockRouteEnding(c, route, total);
  const type = total >= 78 ? "\u304b\u306a\u308a\u76f8\u6027\u304c\u3044\u3044\u4f1a\u8a71" : total >= 62 ? "\u3058\u308f\u3063\u3068\u523a\u3055\u308b\u4f1a\u8a71" : total >= 48 ? "\u3042\u3068\u4e00\u6b69\u3067\u5c4a\u304f\u4f1a\u8a71" : "\u4f5c\u6226\u3092\u5909\u3048\u308b\u3068\u4f38\u3073\u308b\u4f1a\u8a71";
  return `${header(true)}<main class="result-page"><span class="result-kicker">YOUR DATE RESULT</span><div class="ending-icon">${end[0]}</div><h1>${end[1]}</h1><p>${end[2]}</p>
    <div class="report-grid"><div class="share-card" style="--c:${c.color};--light:${c.light}"><div class="share-brand">Love Type Lab ✦</div>${avatar(c)}<span>${c.type}風デート完走</span><h2>${type}</h2><div class="route-card"><small>${route.badge}</small><b>${route.name}</b><p>${route.summary}</p></div><div class="epilogue-card"><span>ENDING SCENE</span><b>${route.epilogueTitle}</b><p>${route.epilogue}</p><small>次回ミッション: ${route.replayMission}</small></div><p>${c.name}との${story(c).dates.length}回のデートで、${gd.mastery}</p><div class="share-tags"><span>#LoveTypeLab</span><span>#${c.type}風</span><span>#会話練習</span></div><small>TYPE DATE TRAINER</small></div>
    <div class="score-report"><div class="total-score-card" style="--c:${c.color};--light:${c.light}"><span class="score-orb">${scoreIcon(tier.icon)}<strong>${total}</strong></span><div class="score-copy"><span>\u30e1\u30a4\u30f3\u8a55\u4fa1</span><b>${tier.label}</b><p>${tier.sub}</p></div></div><div class="relationship-stage result-stage stage-${stage.tone}"><span>${stage.label}</span><p>${stage.copy}</p></div><div class="playstyle-card"><span>${style.badge}</span><b>${style.title}</b><p>${style.copy}</p></div>${relationshipArcPanel(c)}<div class="memory-card memory-${memory.tone}"><span>${c.name}に残った記憶</span><b>${memory.label}</b><p>${memory.copy}</p></div><div class="finale-scene-card" style="--c:${c.color};--light:${c.light}"><span>${finale.badge} FINALE</span><b>${c.name}が最後に残した一言</b><p>「${finale.line}」</p><small>${finale.memoryBridge}</small><em>${finale.nextBeat}</em></div>${missionBoardPanel(c)}<div class="heart-memo-panel"><h3>${c.name}の本音メモ <span>${heart.unlocked.length}/5</span></h3>${heart.unlocked.map((memo) => `<article><b>${memo.title}</b><p>${memo.text}</p></article>`).join("")}${heart.locked ? `<small>未解放メモ: ${heart.locked} / 次の鍵は「${heart.nextHint}」</small>` : `<small>すべての本音メモを解放しました。</small>`}</div>${switchProgressPanel(c)}${routeAlbumPanel(c, route)}<h2>5\u3064\u306e\u7a7a\u6c17\u30e1\u30fc\u30bf\u30fc</h2>${meters()}<div class="skill-panel"><h3>今回身についた会話スキル</h3><div>${playerSkillBadges().map((badge) => `<article><span>${badge.icon}</span><b>${badge.title}</b><p>${badge.text}</p></article>`).join("")}</div></div><div class="learned-strip"><h3>解放した会話レッスン</h3><p>${learned.slice(0, 8).map((item) => `<span>${item.badge} ${item.skill}</span>`).join("")}</p></div><div class="moment-log"><h3>印象に残る選択</h3>${decisiveMoments().map((moment) => `<article class="moment-${moment.branch}"><span>${moment.intent}</span><b>${moment.scene}</b><p>${moment.text}</p></article>`).join("")}</div><div class="insight"><span>✦</span><div><b>あなたの勝ち筋</b><p>${strongestInsight()} ${gd.winningMindset}</p></div></div><div class="insight"><span>→</span><div><b>次の一手</b><p>${route.nextMove}</p></div></div><div class="insight warn"><span>!</span><div><b>次に伸びるポイント</b><p>${growthInsight()} ${gd.temptationTrap}</p></div></div><button class="primary full" data-share>結果をコピーする</button><button class="outline full" data-restart>もう一度デートする</button></div></div>
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
      tactic: state.picked.tactic?.title,
      heartKey: state.picked.heartKey?.status,
      heartKeyTone: state.picked.heartKey?.tone,
      heartKeyTitle: state.picked.heartKey?.title,
      heartKeyCopy: state.picked.heartKey?.copy,
      decoderTone: state.picked.decoder?.tone,
      decoderTitle: state.picked.decoder?.title,
      decoderCopy: state.picked.decoder?.copy,
      decoderRepair: state.picked.decoder?.repair,
      needTone: state.picked.needCompass?.tone,
      needStatus: state.picked.needCompass?.status,
      needTitle: state.picked.needCompass?.title,
      needCopy: state.picked.needCompass?.copy,
      needNext: state.picked.needCompass?.next,
      bidTone: state.picked.connectionBid?.tone,
      bidStatus: state.picked.connectionBid?.status,
      bidTitle: state.picked.connectionBid?.title,
      bidCopy: state.picked.connectionBid?.copy,
      bidNext: state.picked.connectionBid?.next,
      momentum: state.picked.momentum?.label,
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
