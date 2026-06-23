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
    url: "https://ap.themyersbriggs.com/content/Relationships_and_Conflict_eBook.pdf",
    takeaway:
      "TJ/FJ/TP/FPで衝突の起点が異なる。選択肢は同じ優しさでも、相手の衝突トリガーに合わせて効き方を変える。",
  },
  {
    title: "16Personalities: Relationship conflict survey",
    url: "https://www.16personalities.com/articles/exploring-relationship-conflict-through-the-lens-of-personality-type",
    takeaway:
      "Thinking/Feelingの違いは衝突時の受け取り方に強く出る。全タイプに感情の揺れはあるため、T型も冷たい攻略対象として描かない。",
  },
  {
    title: "The Myers-Briggs Company: MBTI personality type and relationships",
    url: "https://www.themyersbriggs.com/en-us/access-resources/articles/mbti-personality-type-and-relationships",
    takeaway:
      "関係でタイプを使う価値は、相手を分類することではなく、コミュニケーション・意思決定・違いの扱いを話しやすくすることにある。",
  },
  {
    title: "16Personalities: Internal barriers to romantic connection",
    url: "https://www.16personalities.com/articles/getting-in-your-own-way-internal-barriers-to-romantic-connection-for-every-personality-type",
    takeaway:
      "恋愛の失敗は相手タイプだけでなく、拒絶不安・信頼不安・自己否定など内的バリアでも起きる。ゲームでは良い返しだけでなく、怖さの扱いも評価する。",
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

const skillLadder = [
  ["観察", "OBSERVE", "相手の緊張・視線・距離を読む。最初の正解は盛り上げることではなく、入っていい速度を測ること。"],
  ["自己開示", "OPEN", "聞くだけでなく、自分の基準を一つ渡す。相手があなたを判断できる材料を作る。"],
  ["温度合わせ", "SYNC", "笑った理由を守る。冗談は距離を縮めるが、相手を素材にしない。"],
  ["価値観翻訳", "VALUE", "違いを否定せず、相手が何を守ろうとしているかを言葉にする。"],
  ["修復", "REPAIR", "ズレを勝ち負けにしない。相手の論点を小さく扱わず、受け取り直す。"],
  ["芯を見る", "CORE", "強さ・明るさ・慎重さの裏にある願いを拾う。褒めるなら性格の芯を褒める。"],
  ["余白作り", "SPACE", "ムードに流されすぎず、相手が選べる余地を残す。近づくほど境界線を丁寧に。"],
  ["次へ進める", "MOVE", "気持ちを行動に落とす。曖昧な好意を、次の約束や選択肢に変える。"],
  ["記憶を使う", "REMEMBER", "前に聞いた好みや不安を覚えていると示す。攻略感ではなく敬意として出す。"],
  ["接近の調整", "CLOSER", "甘さを出しつつ、相手の主導権を奪わない。攻める場面ほど逃げ道を残す。"],
  ["衝突運用", "CONFLICT", "揉めたことより、揉め方が見られている。解決速度と感情の安全を両立する。"],
  ["本音受容", "TRUTH", "弱さを直さず、信頼として受け取る。守るより、軽く扱わない姿勢を見せる。"],
  ["再契約", "RESET", "仲直りで終わらせず、次に同じズレが起きた時の扱い方を決める。"],
  ["緊張保持", "READY", "告白前の震えを茶化しすぎない。沈黙も相手の勇気の一部として扱う。"],
  ["明確化", "COMMIT", "返事を濁さない。好き・付き合いたい・考えたいを、主語つきで短く言う。"],
  ["余韻設計", "AFTER", "成立後こそ雑にしない。所有感ではなく、次の約束で大切に締める。"],
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
    playerFantasy: "自分だけが、彼女の静かな本音に招かれる。",
    attractionSwitches: ["沈黙を怖がらない", "言葉の奥の願いを拾う", "未来の話を軽く扱わない"],
    turnOffs: ["感情の矮小化", "質問攻め", "結論急ぎ"],
    signatureDilemma: "安心だけだと友達止まり。深さを守りながら、自分の好意も少し差し出す必要がある。",
    innerLayer: {
      mask: "静かで聞き上手に見えるが、本当は自分の理想や寂しさを重いと思われるのが怖い。",
      fear: "本音を出したあと、相手が急に軽い言葉でまとめてしまうこと。",
      opensWhen: "沈黙や迷いを急かされず、言葉にならない部分まで待ってもらえた時。",
      closesWhen: "気持ちを分析対象にされたり、すぐ正解や助言を出された時。",
      privateWish: "いつか、説明しきれない理想も笑わず聞いてくれる人と、静かな日常を作りたい。",
      confessionNeed: "派手な告白より、これからも大切に聞き続けるという継続の約束。",
    },
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
    playerFantasy: "予想外の寄り道が、二人だけの物語に変わっていく。",
    attractionSwitches: ["ひらめきに乗る", "明るさの裏の傷つきやすさに気づく", "自由を約束として守る"],
    turnOffs: ["冷たい現実論", "テンションの否定", "自由を軽さと決めつける"],
    signatureDilemma: "楽しく乗るだけだと浅く見える。場面によって、自由を大事にする言葉へ着地させる。",
    innerLayer: {
      mask: "明るくて勢いのある人に見えるが、否定されると想像以上に傷つきやすい。",
      fear: "楽しい自分だけを求められて、静かな不安や寂しさを面倒だと思われること。",
      opensWhen: "ひらめきを一緒に面白がったあと、ちゃんと大事にする言葉で受け止めてもらえた時。",
      closesWhen: "自由さを無責任、テンションを幼さとして処理された時。",
      privateWish: "予定外の寄り道も、最後には二人の約束として覚えていてくれる人がいい。",
      confessionNeed: "好きという言葉に、自由を奪わないことと、次も会う具体性が一緒にあること。",
    },
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
    playerFantasy: "小さな約束を重ねるほど、彼女の安心した笑顔が増えていく。",
    attractionSwitches: ["具体的な約束", "準備への感謝", "穏やかな継続意思"],
    turnOffs: ["曖昧な誘い", "時間へのルーズさ", "段取りを退屈扱いする"],
    signatureDilemma: "誠実すぎると安全圏に寄る。信頼の上に、少しだけ好意の温度を乗せる。",
    innerLayer: {
      mask: "落ち着いていて堅実に見えるが、実は自分が退屈だと思われていないか気にしている。",
      fear: "約束や準備を当たり前にされ、自分だけが関係を大切にしているように感じること。",
      opensWhen: "小さな準備や時間への配慮に気づき、具体的な感謝を返してもらえた時。",
      closesWhen: "その場のノリで約束を濁されたり、慎重さを細かいと言われた時。",
      privateWish: "派手ではなくても、次の予定を自然に積み重ねられる関係がほしい。",
      confessionNeed: "好きという感情だけでなく、どう続けたいかが見える具体的な言葉。",
    },
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
    playerFantasy: "一緒に動いて笑ううちに、言葉にしにくい本音がふっと出る。",
    attractionSwitches: ["短く率直な誘い", "体験を一緒に楽しむ", "必要な時だけ意味を添える"],
    turnOffs: ["長い詰問", "重すぎる関係定義", "疑いから入る確認"],
    signatureDilemma: "軽さだけだと逃げに見える。真剣な場面では短くても言葉を足す。",
    innerLayer: {
      mask: "軽くて余裕があるように見えるが、縛られる前提で近づかれるとすぐ身構える。",
      fear: "楽しい時間を、すぐ義務や確認の連続に変えられること。",
      opensWhen: "一緒に動いて笑ったあと、短い言葉でちゃんと意味を置いてもらえた時。",
      closesWhen: "何を考えているか全部説明して、と詰められた時。",
      privateWish: "言葉にするのは得意じゃなくても、行動で伝えた好意を見逃さないでほしい。",
      confessionNeed: "重い宣言より、これからも一緒に動く未来が浮かぶ率直な言葉。",
    },
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
    playerFantasy: "強くまっすぐな彼女が、対等な相手にだけ弱さを預ける。",
    attractionSwitches: ["自分の軸を示す", "具体的に尊敬する", "曖昧にせず進める"],
    turnOffs: ["受け身すぎる態度", "勝ち負け化", "雑な保留や所有感"],
    signatureDilemma: "明確さは必要。でも解決だけ急ぐと感情を置き去りにする。",
    innerLayer: {
      mask: "強くて迷いがないように見えるが、実は弱さを見せた瞬間に雑に扱われることを警戒している。",
      fear: "正しさや勝ち負けで感情を処理され、自分の緊張が見落とされること。",
      opensWhen: "対等な意思と行動力を見せたうえで、強さの裏の不安にも気づいてもらえた時。",
      closesWhen: "全部任せる態度、曖昧な保留、成立後の当然のような所有感を見た時。",
      privateWish: "強いままでも、弱い部分を直されずに預けられる関係がほしい。",
      confessionNeed: "好きと付き合いたいを曖昧に分けず、同じ解像度でまっすぐ返すこと。",
    },
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

export function sceneCoaching(characterId, scene, sceneIndex, totalScenes) {
  const design = characterGameDesign[characterId] || characterGameDesign.mina;
  const skill = skillLadder[Math.min(sceneIndex, skillLadder.length - 1)];
  const beat = sceneBeats[Math.min(sceneIndex, sceneBeats.length - 1)];
  const finalScene = sceneIndex >= totalScenes - 1;
  const activeSkill = finalScene ? skillLadder.at(-1) : skill;
  return {
    badge: activeSkill[1],
    skill: activeSkill[0],
    lesson: activeSkill[2],
    watch: `${design.lens.focus}が表情・沈黙・言葉選びのどこに出るかを見る。`,
    payoff: `${design.attractionSwitches[sceneIndex % design.attractionSwitches.length]}が刺さると、次の本音に進みやすい。`,
    trap: `${design.turnOffs[sceneIndex % design.turnOffs.length]}に寄ると、場面の目的「${scene.goal}」から外れる。`,
    dilemma: `${beat[1]}。${design.signatureDilemma}`,
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
