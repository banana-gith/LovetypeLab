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
  {
    title: "16Personalities: How personality types handle relationship conflict",
    url: "https://www.16personalities.com/articles/how-personality-types-handle-relationship-conflict-a-study",
    takeaway:
      "衝突時の反応はタイプ差だけでなく自己防衛の普遍性も強い。ゲームではT/FやE/Iを固定的に扱わず、場面ごとの防衛反応と修復の余地を描く。",
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
    psychologicalSwitches: [
      {
        label: "沈黙の安全",
        opens: "沈黙や迷いを急かさず、そこにいていい空気を作る",
        hurts: "間を失敗扱いして質問や冗談で埋める",
        tell: "視線が少し長く残り、言葉の数より呼吸が落ち着く",
      },
      {
        label: "理想の保護",
        opens: "現実論で切らず、理想を関係の設計図として一緒に持つ",
        hurts: "重い・考えすぎ・きれいごととして片づける",
        tell: "声が少し小さくなり、比喩や未来の話が増える",
      },
      {
        label: "相互の本音",
        opens: "聞き役だけでなく、自分の弱さや好意も静かに差し出す",
        hurts: "ミナだけを開かせ、自分は安全圏に残る",
        tell: "質問があなた自身に向き、距離の近い沈黙が生まれる",
      },
    ],
    readingCues: [
      {
        signal: "返事の前に視線が少し落ち、言葉を探す間が長くなる",
        goodRead: "沈黙は拒絶ではなく、安心できる言葉を選んでいる時間として待つ",
        misread: "間を気まずさとして処理し、質問や冗談で急いで埋める",
        playerQuestion: "いま急がせずに待てているか？",
      },
      {
        signal: "理想や未来の話になると声が小さくなるが、話は切らない",
        goodRead: "重い話ではなく、大事にしたい世界を少し預けてくれていると読む",
        misread: "考えすぎ、きれいごと、と現実論で小さくする",
        playerQuestion: "彼女の理想を守る言葉を一つ返せるか？",
      },
      {
        signal: "質問があなた自身に向き、聞き役だけでは終われない空気になる",
        goodRead: "ミナだけを開かせず、自分の弱さや好意も静かに差し出す",
        misread: "安全な聞き役に逃げて、彼女だけを深く話させる",
        playerQuestion: "自分の本音も同じ温度で置けているか？",
      },
    ],
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
    psychologicalSwitches: [
      {
        label: "ひらめきの共犯",
        opens: "思いつきを否定せず、まず一緒に面白がる",
        hurts: "現実的な正しさで熱量を止める",
        tell: "表情が一気に動き、次の案をあなたに預けてくる",
      },
      {
        label: "明るさの裏側",
        opens: "楽しさの奥にある不安や寂しさも軽く扱わない",
        hurts: "明るい役割だけを求め、静かな気持ちを面倒にする",
        tell: "笑ったあとに少しだけ視線が外れ、反応を待つ",
      },
      {
        label: "自由の約束",
        opens: "自由を奪わず、次も会う具体性を一緒に置く",
        hurts: "束縛か放置のどちらかに寄る",
        tell: "予定外の寄り道を、二人の思い出として言い直す",
      },
    ],
    readingCues: [
      {
        signal: "目線がよく動き、思いついた瞬間に表情が一気に明るくなる",
        goodRead: "まず一緒に面白がり、正しさより熱量を止めない",
        misread: "現実的かどうかを先に判定して、勢いをしぼませる",
        playerQuestion: "いま否定より先に乗れているか？",
      },
      {
        signal: "笑った直後に少し視線が外れ、反応を待つような間がある",
        goodRead: "明るさの裏にある不安も軽く扱わず、ちゃんと大事にする",
        misread: "明るいから平気だと決めつけ、静かな気持ちを見落とす",
        playerQuestion: "楽しさの奥にある寂しさも拾えているか？",
      },
      {
        signal: "次の予定を話しながら、自由が残っているかを確かめてくる",
        goodRead: "会う具体性を置きつつ、寄り道できる余白も残す",
        misread: "束縛か放置のどちらかに寄って、自由を雑に扱う",
        playerQuestion: "約束と自由を同時に守れているか？",
      },
    ],
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
    psychologicalSwitches: [
      {
        label: "約束の見える化",
        opens: "日時・場所・代案を具体的にして、考えていることを行動にする",
        hurts: "いつか・適当に・任せるで関係をぼかす",
        tell: "返事の前に予定を確認し、安心したように表情が緩む",
      },
      {
        label: "準備への敬意",
        opens: "小さな段取りや気遣いに気づき、具体的に感謝する",
        hurts: "準備を当然扱いし、慎重さを細かいと片づける",
        tell: "持ち物や時間の話から、自分の生活ペースを少し見せる",
      },
      {
        label: "安定の中の甘さ",
        opens: "信頼を守りながら、好意の温度を一段だけ上げる",
        hurts: "安全すぎて友達のように終わる、または急に押す",
        tell: "堅い言い方の中に、次も会いたいニュアンスが混ざる",
      },
    ],
    readingCues: [
      {
        signal: "返事の前に予定や時間を一度確認し、言葉を選んでいる",
        goodRead: "迷いではなく、信頼できる約束にできるかを見ていると読む",
        misread: "慎重さをノリが悪いと受け取り、曖昧な誘いで押す",
        playerQuestion: "日時・場所・代案まで見える言葉になっているか？",
      },
      {
        signal: "持ち物や段取りの話から、生活ペースを少し見せてくる",
        goodRead: "準備や気遣いに具体的に気づき、当然扱いしない",
        misread: "細かいね、と冗談にして努力を軽くする",
        playerQuestion: "彼女の準備を一つ具体的に褒められるか？",
      },
      {
        signal: "丁寧な言い方の中に、次も会いたい含みが混ざる",
        goodRead: "信頼を壊さず、好意の温度を一段だけ上げる",
        misread: "安全に寄りすぎて友達のまま終わる、または急に押す",
        playerQuestion: "誠実さの上に甘さを少し乗せられるか？",
      },
    ],
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
    psychologicalSwitches: [
      {
        label: "体験で近づく",
        opens: "長い説明より、一緒に動ける提案で距離を縮める",
        hurts: "座ったまま感情確認を続け、テンポを止める",
        tell: "すぐ立ち上がる、次の動きを提案する、笑いながら試す",
      },
      {
        label: "短い本音",
        opens: "重くしすぎず、短く意味のある言葉を置く",
        hurts: "軽口だけで逃げる、または長文で詰める",
        tell: "ふざけたあとに一瞬だけ真顔が混ざる",
      },
      {
        label: "自由の信頼",
        opens: "縛らず疑わず、行動で伝えた好意を見逃さない",
        hurts: "確認・義務・束縛の言葉で自由を奪う",
        tell: "次の予定を軽く言いながら、あなたの反応を見る",
      },
    ],
    readingCues: [
      {
        signal: "座ったままの説明より、立ち上がる・移動する提案が増える",
        goodRead: "言葉を詰めるより、一緒に動ける選択肢で距離を縮める",
        misread: "逃げていると決めつけ、座ったまま感情確認を続ける",
        playerQuestion: "会話を体験に逃がす余白を作れているか？",
      },
      {
        signal: "軽口のあとに一瞬だけ真顔が混ざる",
        goodRead: "短く意味のある本音を置けば受け取れるタイミングだと読む",
        misread: "軽い人だと決めつける、または長文で詰める",
        playerQuestion: "短く率直に言えているか？",
      },
      {
        signal: "次の予定を軽く言いながら、縛られないか反応を見る",
        goodRead: "自由を疑わず、行動で出した好意を見逃さない",
        misread: "確認や義務の言葉で、楽しい時間を重くする",
        playerQuestion: "自由を残したまま次へ誘えているか？",
      },
    ],
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
    psychologicalSwitches: [
      {
        label: "対等な意思",
        opens: "任せきりにせず、自分の希望や判断をまっすぐ出す",
        hurts: "全部決めて、なんでもいい、で主導権を丸投げする",
        tell: "試すような質問が増え、あなたの判断理由を見てくる",
      },
      {
        label: "尊敬の具体性",
        opens: "強さや成果を、どこがすごいのか具体的に認める",
        hurts: "強いね・怖いねで雑にラベル化する",
        tell: "表情は控えめでも、会話のテンポが少し柔らかくなる",
      },
      {
        label: "感情の置き場所",
        opens: "解決だけ急がず、強さの裏の緊張にも気づく",
        hurts: "正しさや勝ち負けで感情を処理する",
        tell: "言い切ったあとに沈黙があり、本当に見ているかを測る",
      },
    ],
    readingCues: [
      {
        signal: "試すような質問が増え、あなたの判断理由を見てくる",
        goodRead: "任せきりにせず、自分の希望や判断を対等に出す",
        misread: "全部任せる、なんでもいい、と主導権を丸投げする",
        playerQuestion: "自分の意思を短く出せているか？",
      },
      {
        signal: "表情は控えめでも、具体的に認められると会話のテンポが柔らかくなる",
        goodRead: "強さを雑にラベル化せず、どこを尊敬したか具体化する",
        misread: "強いね、怖いね、で一言にまとめる",
        playerQuestion: "成果ではなく判断のどこを見ているか言えるか？",
      },
      {
        signal: "言い切ったあとに沈黙があり、正しさ以外を見ているか測っている",
        goodRead: "解決だけ急がず、強さの裏の緊張にも気づく",
        misread: "勝ち負けや正論で感情を処理する",
        playerQuestion: "正しさの前に感情の置き場所を作れているか？",
      },
    ],
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

export function activePersonaSwitch(characterId, sceneIndex, totalScenes = 15) {
  const design = characterGameDesign[characterId] || characterGameDesign.mina;
  const switches = design.psychologicalSwitches || [];
  if (!switches.length) {
    return {
      label: design.lens.focus,
      opens: design.lens.playerMove,
      hurts: design.lens.risk,
      tell: "表情・沈黙・言葉選びに出る",
    };
  }
  const phaseSize = Math.max(1, Math.ceil(totalScenes / switches.length));
  return switches[Math.min(switches.length - 1, Math.floor(sceneIndex / phaseSize))];
}

export function sceneReadingCue(characterId, sceneIndex, totalScenes = 15) {
  const design = characterGameDesign[characterId] || characterGameDesign.mina;
  const phaseSize = Math.max(1, Math.ceil(totalScenes / Math.max(1, (design.psychologicalSwitches || []).length || 1)));
  const index = Math.min((design.readingCues || []).length - 1, Math.floor(sceneIndex / phaseSize));
  const activeSwitch = activePersonaSwitch(characterId, sceneIndex, totalScenes);
  return (design.readingCues || [])[index] || {
    signal: activeSwitch.tell,
    goodRead: activeSwitch.opens,
    misread: activeSwitch.hurts,
    playerQuestion: `${design.lens.focus}を読めているか？`,
  };
}

export function personaSwitchFeedback(characterId, sceneIndex, totalScenes, branch) {
  const active = activePersonaSwitch(characterId, sceneIndex, totalScenes);
  if (branch === "safe") {
    return `「${active.label}」が少し開いた。${active.opens}返しとして受け取られている。`;
  }
  if (branch === "spark") {
    return `「${active.label}」に火花が入った。${active.opens}だけでなく、次は大事にする言葉も置きたい。`;
  }
  return `「${active.label}」が少し閉じた。${active.hurts}ように聞こえた可能性がある。`;
}

export function sceneDramaturgy(characterId, scene, sceneIndex, totalScenes) {
  const design = characterGameDesign[characterId] || characterGameDesign.mina;
  const beat = sceneBeats[Math.min(sceneIndex, sceneBeats.length - 1)];
  const activeSwitch = activePersonaSwitch(characterId, sceneIndex, totalScenes);
  const finalScene = sceneIndex >= totalScenes - 1;
  return {
    beat: finalScene ? "余韻" : beat[0],
    focus: finalScene ? "成立した関係を雑に扱わない" : `${activeSwitch.label}: ${beat[1]}`,
    playerMove: finalScene ? "次の約束まで丁寧に置く" : `${activeSwitch.opens}。${beat[2]}`,
    risk: design.lens.risk,
    switch: activeSwitch,
  };
}

export function sceneCoaching(characterId, scene, sceneIndex, totalScenes) {
  const design = characterGameDesign[characterId] || characterGameDesign.mina;
  const skill = skillLadder[Math.min(sceneIndex, skillLadder.length - 1)];
  const beat = sceneBeats[Math.min(sceneIndex, sceneBeats.length - 1)];
  const activeSwitch = activePersonaSwitch(characterId, sceneIndex, totalScenes);
  const finalScene = sceneIndex >= totalScenes - 1;
  const activeSkill = finalScene ? skillLadder.at(-1) : skill;
  return {
    badge: activeSkill[1],
    skill: activeSkill[0],
    lesson: activeSkill[2],
    watch: `${activeSwitch.tell}。${design.lens.focus}が表情・沈黙・言葉選びのどこに出るかを見る。`,
    payoff: `心理スイッチ「${activeSwitch.label}」が開くと、次の本音に進みやすい。${activeSwitch.opens}こと。`,
    trap: `${activeSwitch.hurts}と、場面の目的「${scene.goal}」から外れる。`,
    dilemma: `${beat[1]}。${design.signatureDilemma}`,
    switch: activeSwitch,
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

export const routeEndings = {
  repair: {
    key: "repair",
    badge: "REPAIR",
    albumName: "距離を取り直すルート",
    unlockHint: "ミスや押しすぎが重なった時に到達。次は受け取り直しの練習になる。",
    playerPattern: "踏み込みすぎ、または相手の反応を読み違えたまま進めた",
    epilogueTitle: "少し離れて、もう一度見つめ直す",
    epilogue:
      "帰り道、会話は少し少なくなる。それでも完全に途切れたわけではなく、相手は最後に一度だけ振り返る。次に会うなら、謝ることより先に、何を大切にしていたのかを言葉にできるかが試される。",
    replayMission: "次回は最初の5シーンでstrainを1回以下に抑え、相手の心理スイッチを1つ以上「接近」まで進める。",
    cgCue: "少し距離を置いて歩く帰り道、振り返る表情、まだ関係が切れていない余白",
  },
  reconnect: {
    key: "reconnect",
    badge: "RECONNECT",
    albumName: "すれ違い修復ルート",
    unlockHint: "一度ズレたあと、2シーン以内に安全な返しで戻すと近づく。",
    playerPattern: "衝突をなかったことにせず、関係の扱い方を学び直した",
    epilogueTitle: "すれ違ったから、扱い方がわかった",
    epilogue:
      "一度だけ空気が止まったあと、二人は言葉を選び直す。完璧なデートではないけれど、関係を雑に終わらせなかったことが、相手の中に強く残る。",
    replayMission: "次回はあえて火花の選択も混ぜながら、衝突後2シーン以内にsafeで修復する流れを狙う。",
    cgCue: "小さな衝突のあと、同じ席に戻って話し直す、緊張が残るが目線は切れていない",
  },
  spark: {
    key: "spark",
    badge: "SPARK",
    albumName: "火花先行ルート",
    unlockHint: "safeよりsparkを多く選び、会話の熱量で距離を縮める。",
    playerPattern: "楽しい駆け引きや勢いで惹きつけたが、誠実な着地が次の鍵になった",
    epilogueTitle: "火花は強い。だから約束に変える",
    epilogue:
      "相手は今日の会話を何度か思い出す。楽しかった、だけで終わらせないためには、次の一言で自由や熱量をちゃんと大事にする必要がある。",
    replayMission: "次回はsparkを活かしながら、終盤3シーンでtrustかcomfortを伸ばす選択を最低2回入れる。",
    cgCue: "夜の街やカフェの余韻、笑いの直後に少し真剣な目になる、火花と約束のあいだ",
  },
  trust: {
    key: "trust",
    badge: "TRUST",
    albumName: "安心積み上げルート",
    unlockHint: "safeを軸にして、相手のペースと心理スイッチを丁寧に守る。",
    playerPattern: "受け止める力で信頼を育てたが、自分の望みを出す余地が残った",
    epilogueTitle: "安心の先に、もう一歩だけ踏み出す",
    epilogue:
      "相手はあなたといる時間を安全だと感じている。ただ、恋として進めるには、受け止めるだけでなく、あなた自身の望みを少し見せる必要がある。",
    replayMission: "次回はsafeを土台にしつつ、各デートの最後に自分の希望を置く選択を1回ずつ狙う。",
    cgCue: "穏やかな席、二人分の飲み物、安心した表情の中に次を待つ小さな期待",
  },
  balance: {
    key: "balance",
    badge: "BALANCE",
    albumName: "バランス接近ルート",
    unlockHint: "safeとsparkを場面ごとに使い分け、リスクを低く保つ。",
    playerPattern: "安心と火花を読み分け、相手を攻略対象ではなく一人の人として扱えた",
    epilogueTitle: "読み合いが、恋の形になりはじめる",
    epilogue:
      "安心と火花のどちらにも偏りすぎず、場面ごとに距離を調整できた。相手は、あなたが自分を攻略対象ではなく一人の人として見ていることを感じている。",
    replayMission: "次回は3つの心理スイッチをすべて「解放」し、最後の告白前にpressureとmisreadを低く保つ。",
    cgCue: "告白前後の静かな余韻、安心と高揚が同時にある表情、二人の未来を示す小物",
  },
};

export const characterRouteMoments = {
  mina: {
    repair: {
      epilogueTitle: "振り返った沈黙が、まだ終わりじゃない",
      epilogue:
        "ミナは改札前で少しだけ足を止める。怒っているというより、言葉にしきれなかった理想を軽く扱われたかもしれないと確かめている。次に会うなら、沈黙を埋めるより先に、彼女が守りたかった気持ちを一つだけ言い直したい。",
      replayMission: "次回はミナの沈黙を質問で埋めず、最初の5シーンでsafeを3回以上選ぶ。",
      playerPattern: "深さに触れたが、少し結論や安心の言葉を急ぎすぎた",
      cgCue: "駅前の薄い夜光、ミナが半歩だけ振り返る、手元の文庫本、言葉にならない余白",
    },
    reconnect: {
      epilogueTitle: "言い直せた言葉だけが、静かに残る",
      epilogue:
        "一度空気が冷えたあと、ミナはあなたの言い直しを最後まで聞いた。完璧な返事より、ずれたまま終わらせない姿勢が残っている。別れ際の小さな会釈は、もう一度話してもいいという控えめな合図だった。",
      replayMission: "次回は一度ズレた場面の直後に、ミナの言葉の奥の願いを確認する選択を狙う。",
      playerPattern: "すれ違いを急いで消さず、静かな本音へ戻る道を作った",
      cgCue: "雨上がりの書店前、二人分の傘の距離、ミナの目元が少しほどける",
    },
    spark: {
      epilogueTitle: "静かな人の胸にも、火花は残る",
      epilogue:
        "今日の会話には、ミナが予想していなかった熱があった。けれど彼女にとって火花は、すぐ形にされるより、ゆっくり意味を持たせたいもの。次は高揚を急がず、未来の話へ丁寧に置き換えたい。",
      replayMission: "次回はsparkの後にsafeを入れ、盛り上がりを未来の約束へつなげる。",
      playerPattern: "距離を縮める火花は作れたが、ミナの深さに合わせた着地が課題になった",
      cgCue: "川沿いの灯り、ミナが笑ったあとに視線を落とす、二人分の温かい飲み物",
    },
    trust: {
      epilogueTitle: "安心は届いた。次はあなたの本音を",
      epilogue:
        "ミナは今日、無理に明るくしなくてもいい時間を過ごせた。ただ、聞いてくれる人から恋人候補へ進むには、あなた自身の願いも少し見たい。次は彼女の理想を守りながら、自分の好意を静かに置く番だ。",
      replayMission: "次回は安心を守りつつ、終盤で自分の好意を主語つきで一度伝える。",
      playerPattern: "ミナの安全地帯になれたが、恋の温度をもう一段見せる余地が残った",
      cgCue: "静かなカフェ、ミナの前に置かれた二杯目の飲み物、穏やかな期待の表情",
    },
    balance: {
      epilogueTitle: "深さと好意が、同じ速度で歩き出す",
      epilogue:
        "あなたはミナの沈黙を待ち、必要な時には自分の気持ちも差し出した。彼女は帰り道、今日の会話を何度か思い出すはずだ。重さではなく、続いていく静かな約束として。",
      replayMission: "次回は3つの心理スイッチをすべて解放し、告白前の沈黙を急がず守る。",
      playerPattern: "安心と深い好意を両立し、ミナが本音を預けやすい速度を作った",
      cgCue: "夜の川沿い、ミナが横顔で少し笑う、二人の歩幅が揃っている余韻",
    },
  },
  rio: {
    repair: {
      epilogueTitle: "笑ったあと、少しだけ風が止まる",
      epilogue:
        "リオは最後まで明るく振る舞うけれど、ふとスマホを見る時間が増える。自由さを否定された痛みを、笑って隠している。次に会うなら、予定を整えるより先に、彼女のひらめきを面白がれなかったことを言い直したい。",
      replayMission: "次回はリオの思いつきを否定せず、最初の5シーンでsparkかsafeを4回以上選ぶ。",
      playerPattern: "楽しさに乗りきれず、自由を軽さとして扱ったように見えた",
      cgCue: "夕方のテラス席、リオの髪が風で乱れる、笑顔の奥に少し残る寂しさ",
    },
    reconnect: {
      epilogueTitle: "ごめんね、より「それ面白いね」が効く",
      epilogue:
        "一度しぼんだ空気を、あなたはもう一度広げ直した。リオは『そういう言い方なら好き』と笑う。彼女にとって修復は重い謝罪だけでなく、自由をちゃんと大事にし直すことだった。",
      replayMission: "次回は衝突後、リオの案を一つ拾って具体的な寄り道に変える。",
      playerPattern: "ズレを放置せず、リオの自由をもう一度肯定して関係を戻した",
      cgCue: "カフェの窓際、リオがストローを持ったまま笑い直す、空いた席に柔らかい光",
    },
    spark: {
      epilogueTitle: "楽しい、だけで終わらない約束",
      epilogue:
        "リオは帰り道、今日の会話を友達に話したくなるくらい楽しんでいる。けれど本当に刺さったのは、笑ったあとにあなたが次の約束を雑にしなかったこと。自由の中にちゃんと大事にされる感じが残った。",
      replayMission: "次回はsparkを多めに選びつつ、終盤でtrustを2回以上伸ばす。",
      playerPattern: "リオのテンポに乗り、火花を約束へ変える入口まで進めた",
      cgCue: "夜の街灯、リオが振り返って笑う、二人分のドリンクと次の予定の通知",
    },
    trust: {
      epilogueTitle: "安心しすぎると、少しだけ退屈になる",
      epilogue:
        "リオはあなたといると傷つきにくい。でも、すべてが優しく整いすぎると、彼女の中の『どこかへ行きたい』が眠ってしまう。次は安心の上に、少しだけ予定外の楽しさを足したい。",
      replayMission: "次回はsafeの後にsparkを混ぜ、リオが提案したくなる余白を作る。",
      playerPattern: "大事にする姿勢は届いたが、リオの冒険心をもう少し呼び起こせる",
      cgCue: "昼のカフェ、安心したリオが窓の外を見ている、次の寄り道を待つ表情",
    },
    balance: {
      epilogueTitle: "予定外が、二人の約束になる",
      epilogue:
        "あなたはリオの思いつきに乗り、必要なところではちゃんと大事にした。彼女は帰り際、次の予定を決めながらも『寄り道してもいい？』と聞く。自由を奪わない約束が、恋の形になりはじめている。",
      replayMission: "次回はリオの3つの心理スイッチをすべて解放し、最後に自由を守る告白を選ぶ。",
      playerPattern: "楽しいノリと誠実な着地を両立し、リオが自然体で近づける流れを作った",
      cgCue: "夕暮れの歩道、リオがスマホで次の店を見せる、二人の影が近い",
    },
  },
  haruka: {
    repair: {
      epilogueTitle: "約束の輪郭を、もう一度描き直す",
      epilogue:
        "ハルカは怒るより先に、今日の会話を静かに整理している。曖昧な言葉や勢いが、彼女には関係を軽く扱われたように響いた。次は謝るだけでなく、日時・理由・代案まで見える形で信頼を戻したい。",
      replayMission: "次回は曖昧な誘いを避け、約束や感謝を具体的にする選択を3回以上入れる。",
      playerPattern: "気持ちはあったが、ハルカが安心できる具体性が足りなかった",
      cgCue: "朝の喫茶店の外、ハルカが予定表を見ながら少し考える、整った小物",
    },
    reconnect: {
      epilogueTitle: "話し直せる人は、信頼できる",
      epilogue:
        "一度崩れた段取りを、あなたはごまかさず組み直した。ハルカは小さく頷き、次の予定を確認する。彼女にとって修復とは、雰囲気を戻すことではなく、次に同じズレが起きない形を作ることだった。",
      replayMission: "次回は衝突後、具体的な代案や次のルールを一文で出す。",
      playerPattern: "ズレを感情だけで流さず、信頼できる形へ組み直した",
      cgCue: "カフェのテーブル、二人分の予定メモ、ハルカの表情が少し柔らかい",
    },
    spark: {
      epilogueTitle: "少し珍しい予定も、理由があれば嬉しい",
      epilogue:
        "あなたの勢いはハルカにとって少し予想外だった。でも、そこに彼女を思って選んだ理由があれば、冒険は不安ではなく楽しみになる。次は火花を、丁寧な準備で支えたい。",
      replayMission: "次回はsparkの誘いに、場所・時間・彼女を選んだ理由を添える。",
      playerPattern: "会話に新鮮さは出せたが、ハルカが安心できる設計が次の鍵になった",
      cgCue: "建築展示の入口、ハルカが少し驚いて笑う、手元に予約画面",
    },
    trust: {
      epilogueTitle: "小さな約束が、恋の足場になる",
      epilogue:
        "ハルカは今日、あなたの言葉を信じても大丈夫だと思えた。派手な一言より、覚えていたこと、時間を守ったこと、具体的に誘ったことが効いている。次は信頼の上に、好意の温度を少し乗せたい。",
      replayMission: "次回はsafeを軸にしつつ、終盤で好意を具体的に伝える選択を入れる。",
      playerPattern: "約束と準備でハルカの安心を積み上げた",
      cgCue: "朝の喫茶店、ハルカがカップを両手で持ち安心して笑う、整ったテーブル",
    },
    balance: {
      epilogueTitle: "きちんとした恋に、少しだけ甘さが混ざる",
      epilogue:
        "あなたは約束を守りながら、ただ安全なだけでは終わらせなかった。ハルカは次の予定を確認したあと、少しだけ照れたように笑う。信頼と好意が、同じ場所に積み上がっている。",
      replayMission: "次回は3つの心理スイッチを解放し、具体性と甘さの両方を最後まで保つ。",
      playerPattern: "誠実さと恋の温度を両立し、ハルカが安心して進める関係を作った",
      cgCue: "夕方の街角、ハルカが次の約束を確認しながら微笑む、腕時計と小さな花",
    },
  },
  yu: {
    repair: {
      epilogueTitle: "重くなった空気から、一度外へ出る",
      epilogue:
        "ユウは笑って流そうとするけれど、足取りは少し速い。問い詰められたような空気が、彼には自由を奪われる予感として残った。次は長く説明させるより、一緒に動ける提案で空気を戻したい。",
      replayMission: "次回は長い確認を避け、体験に誘う選択を序盤で2回以上入れる。",
      playerPattern: "関係を確かめようとして、ユウのテンポを止めすぎた",
      cgCue: "夜の海沿い、ユウが少し先を歩く、距離はあるが完全には離れていない",
    },
    reconnect: {
      epilogueTitle: "じゃあ歩きながら話そう、で戻れる",
      epilogue:
        "止まった空気を、あなたは場所ごと動かした。ユウは歩き出すと少しずつ言葉を戻す。彼にとって修復は、重い話し合いに閉じ込めることではなく、動きながら本音を置ける余白を作ることだった。",
      replayMission: "次回は衝突後、短い本音と一緒に行動提案を出す。",
      playerPattern: "ズレた空気を体験へ移し、ユウが逃げずに話せるテンポを作った",
      cgCue: "夜景の歩道、ユウが振り返って少し真顔になる、並んで歩く余白",
    },
    spark: {
      epilogueTitle: "勢いで近づいて、短い本音で残す",
      epilogue:
        "ユウは今日のテンポをかなり気に入っている。笑って、動いて、少し無茶をして、そのあとに短い本音が残った。次は軽さを逃げに見せず、ここぞという場面で意味を足したい。",
      replayMission: "次回はsparkを活かしつつ、終盤で短い本音のsafeを2回以上入れる。",
      playerPattern: "体験の勢いで距離を縮め、ユウが自然に本音を出せる入口を作った",
      cgCue: "夜景ドライブの停車中、ユウが笑ったあと少し真剣な目になる、車内の光",
    },
    trust: {
      epilogueTitle: "安心はある。次は一緒に動きたい",
      epilogue:
        "あなたの誠実さはユウに届いている。ただ、守られてばかりの会話だと、彼の身体が先に退屈を感じる。次は安心を土台に、短く誘って一緒に体験する流れを作りたい。",
      replayMission: "次回はsafeの後にaction系の選択を混ぜ、会話を体験へつなげる。",
      playerPattern: "ユウを縛らない安心は作れたが、体験の熱量を足せる余地がある",
      cgCue: "昼の公園、ユウが立ち上がって手元のチケットを見せる、軽い笑顔",
    },
    balance: {
      epilogueTitle: "動いたあとに残る言葉が、ちゃんと本音になる",
      epilogue:
        "あなたはユウの軽快さに乗り、必要なところで逃げずに言葉を足した。彼は最後に『次、どこ行く？』と聞く。軽い誘いに見えて、その声には続けたい気持ちが混ざっている。",
      replayMission: "次回は3つの心理スイッチを解放し、最後の告白を短く率直に返す。",
      playerPattern: "行動と本音を接続し、ユウが自由なまま近づける関係を作った",
      cgCue: "夜の海沿い、ユウが次の場所を指差す、笑いと本音が同時にある表情",
    },
  },
  reina: {
    repair: {
      epilogueTitle: "正しさでは、緊張はほどけない",
      epilogue:
        "レイナは表情を崩さずに別れる。でも、沈黙の長さがいつもより少しだけ違う。感情を勝ち負けで処理されたように感じたのかもしれない。次は正論より先に、彼女が見せなかった緊張に気づけるかが試される。",
      replayMission: "次回はレイナに主導権を丸投げせず、対等な意思を序盤で2回以上見せる。",
      playerPattern: "明確さは出したが、レイナの感情の置き場所を見落とした",
      cgCue: "夜景の見える歩道、レイナが背筋を伸ばしたまま少し視線を外す、直線的な光",
    },
    reconnect: {
      epilogueTitle: "言い負かさず、並び直す",
      epilogue:
        "一度鋭くなった空気を、あなたは勝ち負けにしなかった。レイナは短く『それなら分かる』と言う。彼女にとって修復は、弱くなることではなく、対等なまま感情を置ける場所を作ることだった。",
      replayMission: "次回は衝突後、正しさの整理と感情の確認を両方入れる。",
      playerPattern: "対等さを失わず、レイナの緊張を置ける形で関係を戻した",
      cgCue: "夜景の窓際、レイナが腕をほどき少しだけ目元を緩める、二人分のグラス",
    },
    spark: {
      epilogueTitle: "火花は評価になる。だが曖昧さは残せない",
      epilogue:
        "レイナはあなたの切り返しや行動力を面白いと思っている。ただ、熱量だけで関係を進める相手ではない。次は刺激を、明確な意思と具体的な約束に変える必要がある。",
      replayMission: "次回はsparkで惹きつけた後、次の行動を明確に提案する。",
      playerPattern: "知性とテンポで惹きつけたが、関係の定義を曖昧にしないことが課題になった",
      cgCue: "夜のバーラウンジ、レイナが挑むように少し笑う、スマホに次の予定",
    },
    trust: {
      epilogueTitle: "任せられる。でも、それだけでは足りない",
      epilogue:
        "レイナはあなたを信頼できる相手として見始めている。ただ、合わせてくれるだけの人には惹かれきらない。次は彼女の強さを尊重しつつ、自分の判断と欲しい未来をまっすぐ見せたい。",
      replayMission: "次回はsafeを軸にしつつ、自分の希望を明確に出す選択を各デートで入れる。",
      playerPattern: "安心と尊敬は届いたが、対等な意思表示をさらに見せる余地がある",
      cgCue: "静かなレストラン、レイナが資料ではなくあなたを見る、安心と評価が混ざる表情",
    },
    balance: {
      epilogueTitle: "対等なまま、少しだけ柔らかくなる",
      epilogue:
        "あなたはレイナに任せきりにせず、必要な時には自分の意思を出した。そのうえで、強さの裏の緊張も見落とさなかった。彼女は最後に短く予定を確認する。言葉は端的でも、声は少し柔らかい。",
      replayMission: "次回は3つの心理スイッチを解放し、告白では好きと付き合いたいを曖昧に分けない。",
      playerPattern: "明確さと感情の扱いを両立し、レイナが対等に預けられる関係を作った",
      cgCue: "夜景のテラス、レイナがまっすぐ見つめながら少し微笑む、二人分の余白",
    },
  },
};

export function characterRouteEnding(characterId, routeKey) {
  const base = routeEndings[routeKey] || routeEndings.balance;
  const flavor = characterRouteMoments[characterId]?.[routeKey] || {};
  return { ...base, ...flavor };
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
      ...characterRouteEnding(characterId, "repair"),
      name: "距離を取り直すルート",
      badge: "REPAIR",
      summary: `${design.lens.risk}。相手はまだ完全には閉じていないが、次は踏み込む前に受け取り直す必要がある。`,
      nextMove: "謝罪より先に、相手が何を大事にしていたかを一文で確認する。",
    };
  }
  if (recovered) {
    return {
      ...characterRouteEnding(characterId, "reconnect"),
      name: "すれ違い修復ルート",
      badge: "RECONNECT",
      summary: "一度空気が揺れたあと、関係の扱い方を学び直せた。恋愛ゲームとして一番ドラマが出る進み方。",
      nextMove: "うまくいった返しだけでなく、揉めた時の戻り方を二人のルールにする。",
    };
  }
  if (spark > safe + 2) {
    return {
      ...characterRouteEnding(characterId, "spark"),
      name: "火花先行ルート",
      badge: "SPARK",
      summary: "会話の熱量と駆け引きで距離を縮めた。魅力は強いが、遊びだけに見せない誠実さが次の鍵。",
      nextMove: `${design.winningMindset} そのうえで、次の約束を具体化する。`,
    };
  }
  if (safe >= spark) {
    return {
      ...characterRouteEnding(characterId, "trust"),
      name: "安心積み上げルート",
      badge: "TRUST",
      summary: "相手のペースを尊重しながら信頼を育てた。静かな強さがあり、終盤で好意を出せるとさらに刺さる。",
      nextMove: "受け止め役に寄りすぎず、自分の希望や好意も主語つきで置く。",
    };
  }
  return {
    ...characterRouteEnding(characterId, "balance"),
    name: "バランス接近ルート",
    badge: "BALANCE",
    summary: "安心と火花の両方を使い分けた。場面ごとに攻め方を変えられている。",
    nextMove: `${design.lens.focus}を読みながら、決める場面では曖昧にしない。`,
  };
}
