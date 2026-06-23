const sharedSourceNote =
  "MBTI/16タイプは娯楽的な会話傾向のモデルとして扱い、個人差・同意・境界線を優先する。";

export const researchBasis = [
  {
    title: "Myers & Briggs Foundation: Personality Type and Relationships",
    url: "https://www.myersbriggs.org/type-in-my-life/personality-type-and-relationships/",
    takeaway:
      "タイプ差は成長にも衝突にもなり、成熟度と相互理解が関係の質を左右する。ゲームでは攻略ではなく、違いを読む練習として扱う。",
  },
  {
    title: "The Myers-Briggs Company: MBTI type and conflict",
    url: "https://www.mbtionline.com/articles/mbti-type-and-conflict",
    takeaway:
      "TJ/FJ/TP/FPで衝突の起点が異なる。選択肢は同じ優しさでも、相手の衝突トリガーに合わせて効き方を変える。",
  },
  {
    title: "16Personalities: Relationship conflict survey",
    url: "https://www.16personalities.com/articles/how-personality-types-handle-relationship-conflict-a-study",
    takeaway:
      "Thinking/Feelingの違いは衝突時の受け取り方に強く出る。全タイプに感情の揺れはあるため、T型も冷たい攻略対象として描かない。",
  },
];

const sceneBeats = [
  ["入口", "第一印象の安全確認", "相手のテンポを観察し、いきなり型にはめない"],
  ["輪郭", "自分の軸を少し見せる", "聞き役に逃げず、相手が判断できる材料を出す"],
  ["ほころび", "表情がゆるむ瞬間", "笑いを取りに行くより、警戒がほどけた理由を守る"],
  ["価値観", "恋愛観や生活観の違い", "反論ではなく、相手の言葉の芯を確認する"],
  ["小さなズレ", "受け取り違いの修正", "勝ち負けにせず、何がずれたかを再接続する"],
  ["核", "相手の大事な基準", "厳しさや明るさの裏にある願いを言語化する"],
  ["夜", "本音が出やすい空気", "ムードに頼り切らず、選択肢を残す"],
  ["誘い", "次に進む意思表示", "好意だけでなく、現実の行動へ落とす"],
  ["準備", "相手の好みを覚えている証拠", "攻略感ではなく観察と敬意として見せる"],
  ["接近", "甘さと境界線の同時処理", "近づくほど相手の主導権を奪わない"],
  ["衝突", "関係の扱い方が試される", "逃げではなく方法の違いとして伝える"],
  ["本音", "弱さや怖さの開示", "保護ではなく信頼として受け取る"],
  ["和解", "揉め方を学ぶ", "雰囲気で流さず、次の扱い方を一つ決める"],
  ["告白前", "緊張を守る", "茶化しすぎず、聞く姿勢をはっきり見せる"],
  ["告白", "関係の定義", "曖昧さに逃げず、短くても主語を持って返す"],
  ["余韻", "成立後の敬意", "所有感ではなく、次の約束で大切に締める"],
];

export const characterGameDesign = {
  mina: {
    sourceNote: sharedSourceNote,
    playerPromise: "静かな人が心を開く瞬間を、急かさず見届ける恋。",
    coreTension: "深い話をしたい気持ちと、重いと思われたくない怖さ。",
    winningMindset: "沈黙・迷い・理想を失敗扱いせず、言葉の奥にある願いを拾う。",
    temptationTrap: "正解っぽい助言、早い告白、沈黙を埋めるための質問攻め。",
    mastery: "安心を作るだけでなく、自分の好意も静かに差し出せるようになった。",
    visualFormula: "夜の本屋、雨の窓辺、川沿いの灯り。余白・手元・視線で距離を語る。",
    lens: {
      focus: "言葉の奥にある本音",
      playerMove: "急がず受け止め、必要な時だけ具体化する",
      risk: "軽い処理や結論急ぎで心の扉が閉じる",
    },
  },
  rio: {
    sourceNote: sharedSourceNote,
    playerPromise: "明るさの奥にある傷つきやすさごと、自由に恋を進める物語。",
    coreTension: "自由でいたい。でも、雑に扱われたいわけではない。",
    winningMindset: "ひらめきをまず面白がり、あとから誠実な形に整える。",
    temptationTrap: "冷静な否定、予定優先の正論、明るさを役割として求めること。",
    mastery: "楽しいノリと大事にする言葉を両立し、自由を不安に変えなかった。",
    visualFormula: "風、カフェ、夜の街、二人分の飲み物。予定外の動きを写真に残す。",
    lens: {
      focus: "ひらめきと自由の扱い方",
      playerMove: "一緒に広げてから、約束として着地させる",
      risk: "自由を軽さと決めつけると一気にしぼむ",
    },
  },
  haruka: {
    sourceNote: sharedSourceNote,
    playerPromise: "約束を守る小さな行動で、ゆっくり信頼が積み上がる恋。",
    coreTension: "安定したい気持ちと、堅い人だと思われたくない迷い。",
    winningMindset: "時間・場所・理由を具体化し、相手の準備に気づく。",
    temptationTrap: "ノリ任せ、曖昧な誘い、定番や段取りを退屈扱いすること。",
    mastery: "派手な言葉より、次も信じられる行動で好意を伝えられた。",
    visualFormula: "朝の喫茶店、建築展示、整った小物。清潔な構図と穏やかな表情。",
    lens: {
      focus: "信頼できる具体性",
      playerMove: "約束を言葉と行動で見える化する",
      risk: "曖昧さや時間へのルーズさが不信に直結する",
    },
  },
  yu: {
    sourceNote: sharedSourceNote,
    playerPromise: "言葉より先に動く人と、体験の中で本音へ近づく恋。",
    coreTension: "重い空気は苦手。でも、逃げたいわけではない。",
    winningMindset: "短く率直に誘い、体験の後で必要な言葉を足す。",
    temptationTrap: "長すぎる感情確認、関係の定義を急ぐこと、疑いから入ること。",
    mastery: "軽快さを壊さず、必要な場面では逃げずに言葉を足せた。",
    visualFormula: "ボルダリング、夜景ドライブ、海沿い。動き・距離・笑いの瞬間を重視。",
    lens: {
      focus: "行動と本音の接続",
      playerMove: "まず一緒に動き、あとで短く意味づけする",
      risk: "重い確認を浴びせると逃げ場を探す",
    },
  },
  reina: {
    sourceNote: sharedSourceNote,
    playerPromise: "強く見える人が、対等な相手にだけ見せる柔らかさへ近づく恋。",
    coreTension: "曖昧さは嫌い。でも、感情を急いで処理されるのも傷つく。",
    winningMindset: "意思をはっきり示しつつ、強さの裏の緊張を見落とさない。",
    temptationTrap: "全部任せる、勝ち負けにする、告白や衝突を雑にまとめること。",
    mastery: "知性と行動力で信頼され、最後はまっすぐな言葉に逃げず返せた。",
    visualFormula: "白シャツ、ネイビー、夜景、直線的な構図。視線と余白で相手の存在を出す。",
    lens: {
      focus: "明確さと感情の両立",
      playerMove: "軸を見せ、必要な時は感情も主語つきで返す",
      risk: "保留や雑な軽口が拒絶として響きやすい",
    },
  },
};

export function sceneDramaturgy(characterId, scene, sceneIndex, totalScenes) {
  const design = characterGameDesign[characterId] || characterGameDesign.mina;
  const beat = sceneBeats[Math.min(sceneIndex, sceneBeats.length - 1)];
  const finalScene = sceneIndex >= totalScenes - 1;
  return {
    beat: finalScene ? "余韻" : beat[0],
    focus: finalScene ? "成立した関係を雑に扱わない" : `${design.lens.focus}: ${beat[1]}`,
    playerMove: finalScene ? "次の約束まで丁寧に置く" : `${design.lens.playerMove}。${beat[2]}`,
    risk: design.lens.risk,
  };
}

export function relationshipPulse(characterId, scores, flags) {
  const design = characterGameDesign[characterId] || characterGameDesign.mina;
  const totalPositive = scores.trust + scores.interest + scores.comfort;
  const totalRisk = scores.pressure + scores.misread;
  if (totalRisk >= 90 || (flags.strain || 0) >= 4) {
    return `${design.lens.risk}。いまは押すより、相手の言葉を一度正確に受け取る場面。`;
  }
  if (totalPositive >= 210 && scores.pressure < 35) {
    return `${design.mastery} この調子なら、次はあなた自身の気持ちも少し強めに出せる。`;
  }
  if ((flags.spark || 0) > (flags.safe || 0)) {
    return `火花は出ている。次は${design.lens.playerMove}と、関係が遊びだけで終わらない。`;
  }
  return `安心は育っている。次は${design.lens.focus}をもう一段深く拾うと、キャラの本音に近づける。`;
}

export function relationshipRoute(characterId, scores, flags, history = []) {
  const design = characterGameDesign[characterId] || characterGameDesign.mina;
  const safe = flags.safe || 0;
  const spark = flags.spark || 0;
  const strain = flags.strain || 0;
  const recovered = history.some((item, index) => item.branch === "strain" && history.slice(index + 1, index + 3).some((next) => next.branch === "safe"));
  const totalRisk = scores.pressure + scores.misread;
  if (totalRisk >= 90 || strain >= 5) {
    return {
      name: "距離を取り直すルート",
      badge: "REPAIR",
      summary: `${design.lens.risk}。相手はまだ完全には閉じていないが、次は踏み込む前に受け取り直す必要がある。`,
      nextMove: "謝罪より先に、相手が何を大事にしていたかを一文で確認する。",
    };
  }
  if (recovered) {
    return {
      name: "すれ違い修復ルート",
      badge: "RECONNECT",
      summary: "一度空気が揺れたあと、関係の扱い方を学び直せた。恋愛ゲームとして一番ドラマが出る進み方。",
      nextMove: "うまくいった返しだけでなく、揉めた時の戻り方を二人のルールにする。",
    };
  }
  if (spark > safe + 2) {
    return {
      name: "火花先行ルート",
      badge: "SPARK",
      summary: "会話の熱量と駆け引きで距離を縮めた。魅力は強いが、遊びだけに見せない誠実さが次の鍵。",
      nextMove: `${design.winningMindset} そのうえで、次の約束を具体化する。`,
    };
  }
  if (safe >= spark) {
    return {
      name: "安心積み上げルート",
      badge: "TRUST",
      summary: "相手のペースを尊重しながら信頼を育てた。静かな強さがあり、終盤で好意を出せるとさらに刺さる。",
      nextMove: "受け止め役に寄りすぎず、自分の希望や好意も主語つきで置く。",
    };
  }
  return {
    name: "バランス接近ルート",
    badge: "BALANCE",
    summary: "安心と火花の両方を使い分けた。場面ごとに攻め方を変えられている。",
    nextMove: `${design.lens.focus}を読みながら、決める場面では曖昧にしない。`,
  };
}
