# Love Type Lab Character Bible

This file is generated from product data. Update `src/personas.js`, `src/story.js`, or `src/gameDesign.js`, then rerun `npm run export:game-bible`.

## Research Basis

- [Myers & Briggs Foundation: Personality Type and Relationships](https://www.myersbriggs.org/type-in-my-life/personality-type-and-relationships/)
  - タイプ差は成長にも衝突にもなり、成熟度と相互理解が関係の質を左右する。ゲームでは攻略ではなく、違いを読む練習として扱う。
- [The Myers-Briggs Company: MBTI type and conflict](https://ap.themyersbriggs.com/content/Relationships_and_Conflict_eBook.pdf)
  - TJ/FJ/TP/FPで衝突の起点が異なる。選択肢は同じ優しさでも、相手の衝突トリガーに合わせて効き方を変える。
- [16Personalities: Relationship conflict survey](https://www.16personalities.com/articles/exploring-relationship-conflict-through-the-lens-of-personality-type)
  - Thinking/Feelingの違いは衝突時の受け取り方に強く出る。全タイプに感情の揺れはあるため、T型も冷たい攻略対象として描かない。
- [The Myers-Briggs Company: MBTI personality type and relationships](https://www.themyersbriggs.com/en-us/access-resources/articles/mbti-personality-type-and-relationships)
  - 関係でタイプを使う価値は、相手を分類することではなく、コミュニケーション・意思決定・違いの扱いを話しやすくすることにある。
- [16Personalities: Internal barriers to romantic connection](https://www.16personalities.com/articles/getting-in-your-own-way-internal-barriers-to-romantic-connection-for-every-personality-type)
  - 恋愛の失敗は相手タイプだけでなく、拒絶不安・信頼不安・自己否定など内的バリアでも起きる。ゲームでは良い返しだけでなく、怖さの扱いも評価する。
- [16Personalities: How personality types handle relationship conflict](https://www.16personalities.com/articles/how-personality-types-handle-relationship-conflict-a-study)
  - 衝突時の反応はタイプ差だけでなく自己防衛の普遍性も強い。ゲームではT/FやE/Iを固定的に扱わず、場面ごとの防衛反応と修復の余地を描く。
- [Self-Determination Theory: Theory overview](https://selfdeterminationtheory.org/theory/)
  - 自律性・有能感・関係性の欲求が満たされるほど内発的な関与が強まる。恋愛会話では、相手の選ぶ余地、理解された感覚、次に進める具体性を場面ごとに読む。
- [Hadden, Rodriguez, Knee, and Porter: Relationship autonomy and support provision](https://selfdeterminationtheory.org/wp-content/uploads/2015/12/Hadden_Rodriguez_Knee_Porter_20151.pdf)
  - 関係内の自律性は相手へのケアや支援と結びつく。ゲームでは好意を押し通すより、相手が自分で選べる余地を残すほど信頼が育つ設計にする。
- [University XP: What is Player Agency?](https://www.universityxp.com/blog/2020/8/20/what-is-player-agency)
  - プレイヤーの選択は結果・フィードバック・意味のつながりが見えるほど主体性が増す。選択後は点数だけでなく、どの関係欲求を満たしたかを返す。
- [Reis, Clark, and Holmes: Perceived partner responsiveness](https://www.sas.rochester.edu/psy/people/faculty/reis_harry/assets/pdf/ReisClarkHolmes_2004.pdf)
  - 相手が自分のニーズや願いに応答してくれると感じることは、親密さの中心的プロセス。ゲームでは小さなサインを拾ったかどうかを、キャラの記憶と親密度に反映する。
- [The Gottman Institute: Bids for connection](https://www.gottman.com/blog/want-to-improve-your-relationship-start-paying-more-attention-to-bids/)
  - 接続の申し出は大きな告白だけでなく、質問・表情・軽い話題にも出る。選択肢は、向き合う・見送る・押し返すの違いが出るように設計する。
- [Game Studies: This Action Will Have Consequences](https://gamestudies.org/1901/articles/stang)
  - 物語上の選択は、結果が分岐しなくても感情的な帰結が見えると意味を持つ。Love Type Labでは、会話後の相手の記憶・サイン・修復余地で結果を返す。
- [MDPI Education Sciences: Assessing the Efficacy of Reflective Game Design](https://www.mdpi.com/2227-7102/13/12/1204)
  - ゲーム内の経験は、行動後に振り返れる構造があるほど学習として定着しやすい。デート後は点数だけでなく、相手視点の記憶・揺れ・次の課題を短い幕間として返す。
- [Machinations: Game systems feedback loops](https://machinations.io/articles/game-systems-feedback-loops-and-how-they-help-craft-player-experiences)
  - 行動、反応、次の目標がつながるフィードバックループは挑戦と達成感を保つ。Love Type Labでは各デートの選択を幕間で閉じ、次のデートの読み筋へつなげる。
- [Wired: How Dreamfall Chapters adds guilt and emotion to episodic gaming](https://www.wired.com/story/dreamfall-chapters-interview/)
  - 章末の選択要約は単なる統計画面ではなく、選択で形が変わる物語として提示できる。幕間ノートは、線形なMVPでも感情的な帰結をキャラの声で見せるために使う。

## Game Design Principles

- The player is not choosing a universal correct answer. They are reading this character's needs, wounds, and current emotional temperature.
- Strong answers combine respect, consent, and character-specific timing.
- Bad answers should be plausible enough to tempt the player, but fail because they ignore the scene's emotional logic.
- Every route should teach a reusable communication insight, not just punish the player.
- The game now returns player-facing mastery signals: branch combo, play style, and unlocked conversation lessons.
- Combo labels should make the player feel a readable flow: trust streak, spark streak, or repair chance.
- The final report should explain not only compatibility, but the player's recurring habit and next practice target.
- Psychological switches should work as a readable character-understanding loop: the player sees what opens, what hurts, and which switches they learned to handle.

## Route Endings

These endings are selected by the player's pattern, not by a single final answer. Each ending should feel like a playable route with a next-run mission.

### REPAIR / 少し離れて、もう一度見つめ直す

- Key: repair
- Album name: 距離を取り直すルート
- Unlock hint: ミスや押しすぎが重なった時に到達。次は受け取り直しの練習になる。
- Player pattern: 踏み込みすぎ、または相手の反応を読み違えたまま進めた
- Epilogue: 帰り道、会話は少し少なくなる。それでも完全に途切れたわけではなく、相手は最後に一度だけ振り返る。次に会うなら、謝ることより先に、何を大切にしていたのかを言葉にできるかが試される。
- Next-run mission: 次回は最初の5シーンでstrainを1回以下に抑え、相手の心理スイッチを1つ以上「接近」まで進める。
- Ending CG cue: 少し距離を置いて歩く帰り道、振り返る表情、まだ関係が切れていない余白

### RECONNECT / すれ違ったから、扱い方がわかった

- Key: reconnect
- Album name: すれ違い修復ルート
- Unlock hint: 一度ズレたあと、2シーン以内に安全な返しで戻すと近づく。
- Player pattern: 衝突をなかったことにせず、関係の扱い方を学び直した
- Epilogue: 一度だけ空気が止まったあと、二人は言葉を選び直す。完璧なデートではないけれど、関係を雑に終わらせなかったことが、相手の中に強く残る。
- Next-run mission: 次回はあえて火花の選択も混ぜながら、衝突後2シーン以内にsafeで修復する流れを狙う。
- Ending CG cue: 小さな衝突のあと、同じ席に戻って話し直す、緊張が残るが目線は切れていない

### SPARK / 火花は強い。だから約束に変える

- Key: spark
- Album name: 火花先行ルート
- Unlock hint: safeよりsparkを多く選び、会話の熱量で距離を縮める。
- Player pattern: 楽しい駆け引きや勢いで惹きつけたが、誠実な着地が次の鍵になった
- Epilogue: 相手は今日の会話を何度か思い出す。楽しかった、だけで終わらせないためには、次の一言で自由や熱量をちゃんと大事にする必要がある。
- Next-run mission: 次回はsparkを活かしながら、終盤3シーンでtrustかcomfortを伸ばす選択を最低2回入れる。
- Ending CG cue: 夜の街やカフェの余韻、笑いの直後に少し真剣な目になる、火花と約束のあいだ

### TRUST / 安心の先に、もう一歩だけ踏み出す

- Key: trust
- Album name: 安心積み上げルート
- Unlock hint: safeを軸にして、相手のペースと心理スイッチを丁寧に守る。
- Player pattern: 受け止める力で信頼を育てたが、自分の望みを出す余地が残った
- Epilogue: 相手はあなたといる時間を安全だと感じている。ただ、恋として進めるには、受け止めるだけでなく、あなた自身の望みを少し見せる必要がある。
- Next-run mission: 次回はsafeを土台にしつつ、各デートの最後に自分の希望を置く選択を1回ずつ狙う。
- Ending CG cue: 穏やかな席、二人分の飲み物、安心した表情の中に次を待つ小さな期待

### BALANCE / 読み合いが、恋の形になりはじめる

- Key: balance
- Album name: バランス接近ルート
- Unlock hint: safeとsparkを場面ごとに使い分け、リスクを低く保つ。
- Player pattern: 安心と火花を読み分け、相手を攻略対象ではなく一人の人として扱えた
- Epilogue: 安心と火花のどちらにも偏りすぎず、場面ごとに距離を調整できた。相手は、あなたが自分を攻略対象ではなく一人の人として見ていることを感じている。
- Next-run mission: 次回は3つの心理スイッチをすべて「解放」し、最後の告白前にpressureとmisreadを低く保つ。
- Ending CG cue: 告白前後の静かな余韻、安心と高揚が同時にある表情、二人の未来を示す小物

## ミナ / INFJ

**Promise:** 静かな人が心を開く瞬間を、急かさず見届ける恋。

**Core tension:** 深い話をしたい気持ちと、重いと思われたくない怖さ。

**Winning mindset:** 沈黙・迷い・理想を失敗扱いせず、言葉の奥にある願いを拾う。

**Temptation trap:** 正解っぽい助言、早い告白、沈黙を埋めるための質問攻め。

**Visual formula:** 夜の本屋、雨の窓辺、川沿いの灯り。余白・手元・視線で距離を語る。

**Player fantasy:** 自分だけが、彼女の静かな本音に招かれる。

**Signature dilemma:** 安心だけだと友達止まり。深さを守りながら、自分の好意も少し差し出す必要がある。

### Date Missions

- **Date 1: QUIET TRUST / 沈黙を味方にする**
  - Aim: 初回デートでは、話を盛り上げるより先に、ミナが言葉を探せる余白を守る。
  - Target: safeを2回以上、strainを1回以下
  - Success: 沈黙が怖くない相手として記憶され、ミナの視線が少し長く残る。
  - Risk: 間を埋めようとしすぎると、深い話の入口が閉じる。
  - Mission image cue: 閉店後の本屋、二人分の影、手元の本、言葉を待つ静かな余白
- **Date 2: IDEAL CARE / 理想を小さくしない**
  - Aim: 価値観デートでは、現実論で切らずに、ミナの理想を関係の設計図として扱う。
  - Target: safeを2回以上、またはspark後にsafeで受け止める
  - Success: きれいごとを笑わない人として、本音メモの奥が開きやすくなる。
  - Risk: 正論や助言を急ぐと、ミナはまた自分だけ重いと思い込む。
  - Mission image cue: 雨の日の喫茶店、窓の水滴、冷めかけの紅茶、少し下がった視線
- **Date 3: GENTLE COMMIT / 静かに主語を出す**
  - Aim: 終盤では聞き役に留まらず、あなた自身の好意を短く、でも逃げずに置く。
  - Target: safeを1回以上、sparkかconcrete系を1回以上、strainを1回以下
  - Success: 安心だけでなく恋愛の温度が生まれ、告白前の沈黙が味方になる。
  - Risk: 優しいだけだと、ミナは自分だけが開いたように感じる。
  - Mission image cue: 川沿いの夜、少し離れた二人分の飲み物、告白前の灯りと沈黙

### Relationship Arc Modes

- **入る**
  - 01 待ち合わせ: 沈黙や迷いを急かさず、そこにいていい空気を作ることで、言葉の奥にある本音を大切にすること
  - 02 好きな本: 沈黙や迷いを急かさず、そこにいていい空気を作ることで、言葉の奥にある本音を大切にすること
  - 03 褒め方: 沈黙や迷いを急かさず、そこにいていい空気を作ることで、言葉の奥にある本音を大切にすること
- **近づく**
  - 04 沈黙: 沈黙や迷いを急かさず、そこにいていい空気を作ることで、言葉の奥にある本音を大切にすること
  - 05 次の約束: 沈黙や迷いを急かさず、そこにいていい空気を作ることで、言葉の奥にある本音を大切にすること
  - 06 仕事の疲れ: 現実論で切らず、理想を関係の設計図として一緒に持つことで、言葉の奥にある本音を大切にすること
  - 07 理想の関係: 現実論で切らず、理想を関係の設計図として一緒に持つことで、言葉の奥にある本音を大切にすること
  - 08 過去の傷: 現実論で切らず、理想を関係の設計図として一緒に持つことで、言葉の奥にある本音を大切にすること
  - 09 あなたの本音: 現実論で切らず、理想を関係の設計図として一緒に持つことで、言葉の奥にある本音を大切にすること
  - 10 三回目の誘い: 現実論で切らず、理想を関係の設計図として一緒に持つことで、言葉の奥にある本音を大切にすること
- **戻す**
  - 11 好意の言葉: ズレた時に、ミナだけを開かせ、自分は安全圏に残るで済ませず関係の扱い方を直すこと
  - 12 境界線: ズレた時に、ミナだけを開かせ、自分は安全圏に残るで済ませず関係の扱い方を直すこと
- **決める**
  - 13 迷い: 派手な告白より、これからも大切に聞き続けるという継続の約束。
  - 14 未来の話: 派手な告白より、これからも大切に聞き続けるという継続の約束。
  - 15 帰り際: 派手な告白より、これからも大切に聞き続けるという継続の約束。

### Character Memory Echoes

Use these echoes as continuity callbacks: later scene context should name the earlier player move that is still affecting trust, spark, strain, or repair. The callback should feel like the character remembers a specific attitude, not like a generic score bonus.

- **safe: 待ってくれた記憶**
  - ミナは、あなたが沈黙や迷いを急がせなかった場面を覚えている。次は聞くだけでなく、同じ温度で自分の本音も少し置きたい。
- **spark: 詩的に拾われた記憶**
  - ミナは、あなたが空気や比喩を大事にしてくれたことを覚えている。美しい言葉の後に、継続の約束があるともっと安心する。
- **strain: 急がされた記憶**
  - ミナは、言葉を急かされたり気持ちを軽くまとめられた場面をまだ気にしている。次の一手は説明より、まず受け取り直し。
- **repair: 戻ってきてくれた記憶**
  - ミナは、一度ずれたあとにあなたが戻ってきたことを覚えている。完璧さより、関係を直そうとする静かな誠実さが残っている。
- **mixed: 丁寧に探っている記憶**
  - ミナは、あなたが安全な距離を探っていることを感じている。次は優しさを守りながら、あなた自身の気持ちも一文だけ渡したい。
- Memory image cue: 本の端に残る指先、読まずに閉じたページ、言葉を待った時間が二人の間に残る静かなカット

**Attraction switches:** 沈黙を怖がらない / 言葉の奥の願いを拾う / 未来の話を軽く扱わない

**Turn-offs:** 感情の矮小化 / 質問攻め / 結論急ぎ

### Character Decoder Rule

During play, surface the character's attraction switches and turn-offs as learnable signals. Positive choices should name what opened; risky choices should name the turn-off and provide one repair line rather than only punishing the player.

### Character Route Endings

Route compass rule: during play, show the likely route tendency without locking the player in. The forecast should make choices feel consequential while still allowing rerouting through repair, heart-key unlocks, and late-scene clarity.

Replay plan rule: after each ending, give the player one concrete next-run plan using the current route, locked routes, unopened psychological switches, heart-key misses, and character turn-offs. The plan should support autonomy, competence, and relatedness: choose a route, practice one skill, and understand the character more deeply.

Need compass rule: each scene should expose the relationship need being tested, then score whether the player's answer satisfied, nearly satisfied, or threatened it. The need should be character-specific, drawn from the active psychological switch, and should explain autonomy, felt understanding, and concrete next-step safety without turning the character into a fixed stereotype.

Connection bid rule: treat each character line as a small bid for attention, validation, play, repair, vulnerability, or future commitment. Feedback should say whether the player turned toward, turned with spark, turned away, or turned against the bid. This creates emotional consequence even when the main plot remains linear.

Date intermission rule: after each date, insert a character-perspective note that names what the character privately remembers, what still feels fragile, and what the next date will test. The intermission should feel like an episodic story beat shaped by the player's choices, not a neutral score screen.

- **REPAIR / 振り返った沈黙が、まだ終わりじゃない**
  - Player pattern: 深さに触れたが、少し結論や安心の言葉を急ぎすぎた
  - Epilogue: ミナは改札前で少しだけ足を止める。怒っているというより、言葉にしきれなかった理想を軽く扱われたかもしれないと確かめている。次に会うなら、沈黙を埋めるより先に、彼女が守りたかった気持ちを一つだけ言い直したい。
  - Finale line: 「今日は少しだけ、言葉を置いて帰りたい。次は急がずに聞かせて。」
  - Finale memory bridge: 丁寧に探っている記憶として残った今回の接し方が、この最後の表情を少し変えている。ミナは、あなたが安全な距離を探っていることを感じている。次は優しさを守りながら、あなた自身の気持ちも一文だけ渡したい。
  - Next-run mission: 次回はミナの沈黙を質問で埋めず、最初の5シーンでsafeを3回以上選ぶ。
  - Finale next beat: 次回は沈黙を修復の入口として扱い、彼女が守りたかった理想を一文で言い直す。
  - Character CG cue: 駅前の薄い夜光、ミナが半歩だけ振り返る、手元の文庫本、言葉にならない余白
  - Finale CG cue: 駅の明かりの下、ミナが文庫本を胸元に寄せ、言葉を探して振り返る。夜の本屋、雨の窓辺、川沿いの灯り。余白・手元・視線で距離を語る。
- **RECONNECT / 言い直せた言葉だけが、静かに残る**
  - Player pattern: すれ違いを急いで消さず、静かな本音へ戻る道を作った
  - Epilogue: 一度空気が冷えたあと、ミナはあなたの言い直しを最後まで聞いた。完璧な返事より、ずれたまま終わらせない姿勢が残っている。別れ際の小さな会釈は、もう一度話してもいいという控えめな合図だった。
  - Finale line: 「言い直してくれたの、ちゃんと残ってる。完璧じゃなくても、戻ってきてくれるなら話せる。」
  - Finale memory bridge: 丁寧に探っている記憶として残った今回の接し方が、この最後の表情を少し変えている。ミナは、あなたが安全な距離を探っていることを感じている。次は優しさを守りながら、あなた自身の気持ちも一文だけ渡したい。
  - Next-run mission: 次回は一度ズレた場面の直後に、ミナの言葉の奥の願いを確認する選択を狙う。
  - Finale next beat: 言い直せた記憶を足場にして、次は深い理想を一緒に持つ。
  - Character CG cue: 雨上がりの書店前、二人分の傘の距離、ミナの目元が少しほどける
  - Finale CG cue: 雨上がりの書店前、二人分の傘の距離が少しだけ近づく。夜の本屋、雨の窓辺、川沿いの灯り。余白・手元・視線で距離を語る。
- **SPARK / 静かな人の胸にも、火花は残る**
  - Player pattern: 距離を縮める火花は作れたが、ミナの深さに合わせた着地が課題になった
  - Epilogue: 今日の会話には、ミナが予想していなかった熱があった。けれど彼女にとって火花は、すぐ形にされるより、ゆっくり意味を持たせたいもの。次は高揚を急がず、未来の話へ丁寧に置き換えたい。
  - Finale line: 「少しびっくりした。でも、胸に残る熱って悪くないね。」
  - Finale memory bridge: 丁寧に探っている記憶として残った今回の接し方が、この最後の表情を少し変えている。ミナは、あなたが安全な距離を探っていることを感じている。次は優しさを守りながら、あなた自身の気持ちも一文だけ渡したい。
  - Next-run mission: 次回はsparkの後にsafeを入れ、盛り上がりを未来の約束へつなげる。
  - Finale next beat: 火花を急いで形にせず、ミナが意味を持たせる時間を守る。
  - Character CG cue: 川沿いの灯り、ミナが笑ったあとに視線を落とす、二人分の温かい飲み物
  - Finale CG cue: 川沿いの灯り、笑ったあと視線を落とすミナ、温かい飲み物の湯気。夜の本屋、雨の窓辺、川沿いの灯り。余白・手元・視線で距離を語る。
- **TRUST / 安心は届いた。次はあなたの本音を**
  - Player pattern: ミナの安全地帯になれたが、恋の温度をもう一段見せる余地が残った
  - Epilogue: ミナは今日、無理に明るくしなくてもいい時間を過ごせた。ただ、聞いてくれる人から恋人候補へ進むには、あなた自身の願いも少し見たい。次は彼女の理想を守りながら、自分の好意を静かに置く番だ。
  - Finale line: 「安心できた。だから今度は、あなたの本音も少し聞きたい。」
  - Finale memory bridge: 丁寧に探っている記憶として残った今回の接し方が、この最後の表情を少し変えている。ミナは、あなたが安全な距離を探っていることを感じている。次は優しさを守りながら、あなた自身の気持ちも一文だけ渡したい。
  - Next-run mission: 次回は安心を守りつつ、終盤で自分の好意を主語つきで一度伝える。
  - Finale next beat: 聞き役から恋人候補へ進むため、自分の願いを静かに差し出す。
  - Character CG cue: 静かなカフェ、ミナの前に置かれた二杯目の飲み物、穏やかな期待の表情
  - Finale CG cue: 静かなカフェ、ミナが二杯目の飲み物越しに穏やかに待っている。夜の本屋、雨の窓辺、川沿いの灯り。余白・手元・視線で距離を語る。
- **BALANCE / 深さと好意が、同じ速度で歩き出す**
  - Player pattern: 安心と深い好意を両立し、ミナが本音を預けやすい速度を作った
  - Epilogue: あなたはミナの沈黙を待ち、必要な時には自分の気持ちも差し出した。彼女は帰り道、今日の会話を何度か思い出すはずだ。重さではなく、続いていく静かな約束として。
  - Finale line: 「重いんじゃなくて、大事にできる人なんだって思えた。」
  - Finale memory bridge: 丁寧に探っている記憶として残った今回の接し方が、この最後の表情を少し変えている。ミナは、あなたが安全な距離を探っていることを感じている。次は優しさを守りながら、あなた自身の気持ちも一文だけ渡したい。
  - Next-run mission: 次回は3つの心理スイッチをすべて解放し、告白前の沈黙を急がず守る。
  - Finale next beat: 深さと好意を同じ速度で進め、告白前の沈黙を味方にする。
  - Character CG cue: 夜の川沿い、ミナが横顔で少し笑う、二人の歩幅が揃っている余韻
  - Finale CG cue: 夜の川沿い、歩幅が揃い、ミナの横顔が少しほどける。夜の本屋、雨の窓辺、川沿いの灯り。余白・手元・視線で距離を語る。

### Psychological Switches

- **沈黙の安全**
  - Opens: 沈黙や迷いを急かさず、そこにいていい空気を作る
  - Hurts: 間を失敗扱いして質問や冗談で埋める
  - Tell: 視線が少し長く残り、言葉の数より呼吸が落ち着く
- **理想の保護**
  - Opens: 現実論で切らず、理想を関係の設計図として一緒に持つ
  - Hurts: 重い・考えすぎ・きれいごととして片づける
  - Tell: 声が少し小さくなり、比喩や未来の話が増える
- **相互の本音**
  - Opens: 聞き役だけでなく、自分の弱さや好意も静かに差し出す
  - Hurts: ミナだけを開かせ、自分は安全圏に残る
  - Tell: 質問があなた自身に向き、距離の近い沈黙が生まれる

### Reading Cues

- Signal: 返事の前に視線が少し落ち、言葉を探す間が長くなる
  - Good read: 沈黙は拒絶ではなく、安心できる言葉を選んでいる時間として待つ
  - Misread: 間を気まずさとして処理し、質問や冗談で急いで埋める
  - Player question: いま急がせずに待てているか？
- Signal: 理想や未来の話になると声が小さくなるが、話は切らない
  - Good read: 重い話ではなく、大事にしたい世界を少し預けてくれていると読む
  - Misread: 考えすぎ、きれいごと、と現実論で小さくする
  - Player question: 彼女の理想を守る言葉を一つ返せるか？
- Signal: 質問があなた自身に向き、聞き役だけでは終われない空気になる
  - Good read: ミナだけを開かせず、自分の弱さや好意も静かに差し出す
  - Misread: 安全な聞き役に逃げて、彼女だけを深く話させる
  - Player question: 自分の本音も同じ温度で置けているか？

### Inner Layer

- Public mask: 静かで聞き上手に見えるが、本当は自分の理想や寂しさを重いと思われるのが怖い。
- Fear: 本音を出したあと、相手が急に軽い言葉でまとめてしまうこと。
- Opens when: 沈黙や迷いを急かされず、言葉にならない部分まで待ってもらえた時。
- Closes when: 気持ちを分析対象にされたり、すぐ正解や助言を出された時。
- Private wish: いつか、説明しきれない理想も笑わず聞いてくれる人と、静かな日常を作りたい。
- Confession need: 派手な告白より、これからも大切に聞き続けるという継続の約束。

### Persona

- Summary: 表面的なやり取りより、誠実さ・意味・未来への共感を大切にするタイプ。静かな対話の中で、相手の本音や可能性を丁寧に見つめます。
- Needs: 深い理解 / 誠実さ / 将来への志や価値観の共有
- Conflict: 対立そのものを苦痛に感じやすい。すぐ結論を迫られるより、落ち着く時間と誠実な再対話が必要。
- Reassurance: 深い対話、ビジョンへの共感、言葉と行動が一致していること。
- Good lines: その話、大切にしてきたことなんだね / 急がなくていいよ。聞ける範囲で教えて / 次も落ち着いて話せる場所にしよう
- Bad lines: 考えすぎじゃない？ / つまり結論は？ / 重い話は苦手だから楽しくいこう

### Story Arc

#### 初回デート: 閉店後の本屋

Purpose: 安心できる余白を作り、ミナが本音を出せる入口を開く

1. **待ち合わせ**
   - Location: 駅から少し離れた小さな書店の前
   - Scene goal: 沈黙や緊張を否定せず、ミナのペースに合わせる
   - Active switch: 沈黙の安全 / opens when 沈黙や迷いを急かさず、そこにいていい空気を作る
   - Switch tell: 視線が少し長く残り、言葉の数より呼吸が落ち着く
   - Dramaturgy: 入口 / 沈黙の安全: 第一印象の安全確認
   - Player move: 沈黙や迷いを急かさず、そこにいていい空気を作る。相手のテンポを観察し、いきなり型にはめない
   - Love contract: 入る / 表面は「待ち合わせ」の会話。でも本当は、第一印象の安全確認を通して沈黙の安全を見られている。
   - Hidden ask: 沈黙や迷いを急かさず、そこにいていい空気を作ることで、言葉の奥にある本音を大切にすること
   - Heart key: 沈黙の安全 / clue 視線が少し長く残り、言葉の数より呼吸が落ち着く / unlock by 沈黙や迷いを急かさず、そこにいていい空気を作る
   - Tempting wrong move: 正解を急ぐほど、深さではなく圧に変わる。
   - Winning move: 待ってくれた上で、関係を続ける意思も見える。
   - Unsaid safe subtext: 口にしない安心 / 視線が少し長く残り、言葉の数より呼吸が落ち着く。「いつか、説明しきれない理想も笑わず聞いてくれる人と、静かな日常を作りたい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 視線が少し長く残り、言葉の数より呼吸が落ち着く。楽しい温度は届いている。次は「派手な告白より、これからも大切に聞き続けるという継続の約束」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 間を失敗扱いして質問や冗談で埋めるように響き、「本音を出したあと、相手が急に軽い言葉でまとめてしまうこと」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: OBSERVE / 観察
   - Player lesson: 相手の緊張・視線・距離を読む。最初の正解は盛り上げることではなく、入っていい速度を測ること。
   - Tactical read: OBSERVE / 余白を守る
   - Preferred move: empathize / concrete
   - Risky move: pushy / dismiss
   - Tactical note: ミナは言葉の奥を見ている。安心だけで止まらず、静かな主語を一つ置くと恋の温度になる。
   - Payoff: 心理スイッチ「沈黙の安全」が開くと、次の本音に進みやすい。沈黙や迷いを急かさず、そこにいていい空気を作ること。
   - Trap: 間を失敗扱いして質問や冗談で埋めると、場面の目的「沈黙や緊張を否定せず、ミナのペースに合わせる」から外れる。

2. **好きな本**
   - Location: 文芸棚の前
   - Scene goal: 好みの背景を聞き、評価ではなく理解の姿勢を示す
   - Active switch: 沈黙の安全 / opens when 沈黙や迷いを急かさず、そこにいていい空気を作る
   - Switch tell: 視線が少し長く残り、言葉の数より呼吸が落ち着く
   - Dramaturgy: 輪郭 / 沈黙の安全: 自分の軸を少し見せる
   - Player move: 沈黙や迷いを急かさず、そこにいていい空気を作る。聞き役に逃げず、相手が判断できる材料を出す
   - Love contract: 入る / 表面は「好きな本」の会話。でも本当は、自分の軸を少し見せるを通して沈黙の安全を見られている。
   - Hidden ask: 沈黙や迷いを急かさず、そこにいていい空気を作ることで、言葉の奥にある本音を大切にすること
   - Heart key: 沈黙の安全 / clue 視線が少し長く残り、言葉の数より呼吸が落ち着く / unlock by 沈黙や迷いを急かさず、そこにいていい空気を作る
   - Tempting wrong move: 正解を急ぐほど、深さではなく圧に変わる。
   - Winning move: 待ってくれた上で、関係を続ける意思も見える。
   - Unsaid safe subtext: 口にしない安心 / 視線が少し長く残り、言葉の数より呼吸が落ち着く。「いつか、説明しきれない理想も笑わず聞いてくれる人と、静かな日常を作りたい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 視線が少し長く残り、言葉の数より呼吸が落ち着く。楽しい温度は届いている。次は「派手な告白より、これからも大切に聞き続けるという継続の約束」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 間を失敗扱いして質問や冗談で埋めるように響き、「本音を出したあと、相手が急に軽い言葉でまとめてしまうこと」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: OPEN / 自己開示
   - Player lesson: 聞くだけでなく、自分の基準を一つ渡す。相手があなたを判断できる材料を作る。
   - Tactical read: OPEN / 余白を守る
   - Preferred move: empathize / concrete
   - Risky move: pushy / dismiss
   - Tactical note: ミナは言葉の奥を見ている。安心だけで止まらず、静かな主語を一つ置くと恋の温度になる。
   - Payoff: 心理スイッチ「沈黙の安全」が開くと、次の本音に進みやすい。沈黙や迷いを急かさず、そこにいていい空気を作ること。
   - Trap: 間を失敗扱いして質問や冗談で埋めると、場面の目的「好みの背景を聞き、評価ではなく理解の姿勢を示す」から外れる。

3. **褒め方**
   - Location: 店内奥の読書席
   - Scene goal: 外見ではなく、選んだ意図や雰囲気を褒める
   - Active switch: 沈黙の安全 / opens when 沈黙や迷いを急かさず、そこにいていい空気を作る
   - Switch tell: 視線が少し長く残り、言葉の数より呼吸が落ち着く
   - Dramaturgy: ほころび / 沈黙の安全: 表情がゆるむ瞬間
   - Player move: 沈黙や迷いを急かさず、そこにいていい空気を作る。笑いを取りに行くより、警戒がほどけた理由を守る
   - Love contract: 入る / 表面は「褒め方」の会話。でも本当は、表情がゆるむ瞬間を通して沈黙の安全を見られている。
   - Hidden ask: 沈黙や迷いを急かさず、そこにいていい空気を作ることで、言葉の奥にある本音を大切にすること
   - Heart key: 沈黙の安全 / clue 視線が少し長く残り、言葉の数より呼吸が落ち着く / unlock by 沈黙や迷いを急かさず、そこにいていい空気を作る
   - Tempting wrong move: 正解を急ぐほど、深さではなく圧に変わる。
   - Winning move: 待ってくれた上で、関係を続ける意思も見える。
   - Unsaid safe subtext: 口にしない安心 / 視線が少し長く残り、言葉の数より呼吸が落ち着く。「いつか、説明しきれない理想も笑わず聞いてくれる人と、静かな日常を作りたい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 視線が少し長く残り、言葉の数より呼吸が落ち着く。楽しい温度は届いている。次は「派手な告白より、これからも大切に聞き続けるという継続の約束」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 間を失敗扱いして質問や冗談で埋めるように響き、「本音を出したあと、相手が急に軽い言葉でまとめてしまうこと」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: SYNC / 温度合わせ
   - Player lesson: 笑った理由を守る。冗談は距離を縮めるが、相手を素材にしない。
   - Tactical read: SYNC / 余白を守る
   - Preferred move: empathize / concrete
   - Risky move: pushy / dismiss
   - Tactical note: ミナは言葉の奥を見ている。安心だけで止まらず、静かな主語を一つ置くと恋の温度になる。
   - Payoff: 心理スイッチ「沈黙の安全」が開くと、次の本音に進みやすい。沈黙や迷いを急かさず、そこにいていい空気を作ること。
   - Trap: 間を失敗扱いして質問や冗談で埋めると、場面の目的「外見ではなく、選んだ意図や雰囲気を褒める」から外れる。

4. **沈黙**
   - Location: 閉店後の静かな通路
   - Scene goal: 沈黙を失敗扱いせず、共有できる時間にする
   - Active switch: 沈黙の安全 / opens when 沈黙や迷いを急かさず、そこにいていい空気を作る
   - Switch tell: 視線が少し長く残り、言葉の数より呼吸が落ち着く
   - Dramaturgy: 価値観 / 沈黙の安全: 恋愛観や生活観の違い
   - Player move: 沈黙や迷いを急かさず、そこにいていい空気を作る。反論ではなく、相手の言葉の芯を確認する
   - Love contract: 近づく / 表面は「沈黙」の会話。でも本当は、恋愛観や生活観の違いを通して沈黙の安全を見られている。
   - Hidden ask: 沈黙や迷いを急かさず、そこにいていい空気を作ることで、言葉の奥にある本音を大切にすること
   - Heart key: 沈黙の安全 / clue 視線が少し長く残り、言葉の数より呼吸が落ち着く / unlock by 沈黙や迷いを急かさず、そこにいていい空気を作る
   - Tempting wrong move: 正解を急ぐほど、深さではなく圧に変わる。
   - Winning move: 待ってくれた上で、関係を続ける意思も見える。
   - Unsaid safe subtext: 口にしない安心 / 視線が少し長く残り、言葉の数より呼吸が落ち着く。「いつか、説明しきれない理想も笑わず聞いてくれる人と、静かな日常を作りたい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 視線が少し長く残り、言葉の数より呼吸が落ち着く。楽しい温度は届いている。次は「派手な告白より、これからも大切に聞き続けるという継続の約束」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 間を失敗扱いして質問や冗談で埋めるように響き、「本音を出したあと、相手が急に軽い言葉でまとめてしまうこと」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: VALUE / 価値観翻訳
   - Player lesson: 違いを否定せず、相手が何を守ろうとしているかを言葉にする。
   - Tactical read: VALUE / 余白を守る
   - Preferred move: empathize / concrete
   - Risky move: pushy / dismiss
   - Tactical note: ミナは言葉の奥を見ている。安心だけで止まらず、静かな主語を一つ置くと恋の温度になる。
   - Payoff: 心理スイッチ「沈黙の安全」が開くと、次の本音に進みやすい。沈黙や迷いを急かさず、そこにいていい空気を作ること。
   - Trap: 間を失敗扱いして質問や冗談で埋めると、場面の目的「沈黙を失敗扱いせず、共有できる時間にする」から外れる。

5. **次の約束**
   - Location: 書店を出た夜道
   - Scene goal: 好意を示しつつ、返事を迫らない
   - Active switch: 沈黙の安全 / opens when 沈黙や迷いを急かさず、そこにいていい空気を作る
   - Switch tell: 視線が少し長く残り、言葉の数より呼吸が落ち着く
   - Dramaturgy: 小さなズレ / 沈黙の安全: 受け取り違いの修正
   - Player move: 沈黙や迷いを急かさず、そこにいていい空気を作る。勝ち負けにせず、何がずれたかを再接続する
   - Love contract: 近づく / 表面は「次の約束」の会話。でも本当は、受け取り違いの修正を通して沈黙の安全を見られている。
   - Hidden ask: 沈黙や迷いを急かさず、そこにいていい空気を作ることで、言葉の奥にある本音を大切にすること
   - Heart key: 沈黙の安全 / clue 視線が少し長く残り、言葉の数より呼吸が落ち着く / unlock by 沈黙や迷いを急かさず、そこにいていい空気を作る
   - Tempting wrong move: 正解を急ぐほど、深さではなく圧に変わる。
   - Winning move: 待ってくれた上で、関係を続ける意思も見える。
   - Unsaid safe subtext: 口にしない安心 / 視線が少し長く残り、言葉の数より呼吸が落ち着く。「いつか、説明しきれない理想も笑わず聞いてくれる人と、静かな日常を作りたい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 視線が少し長く残り、言葉の数より呼吸が落ち着く。楽しい温度は届いている。次は「派手な告白より、これからも大切に聞き続けるという継続の約束」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 間を失敗扱いして質問や冗談で埋めるように響き、「本音を出したあと、相手が急に軽い言葉でまとめてしまうこと」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: REPAIR / 修復
   - Player lesson: ズレを勝ち負けにしない。相手の論点を小さく扱わず、受け取り直す。
   - Tactical read: REPAIR / 余白を守る
   - Preferred move: empathize / concrete
   - Risky move: pushy / dismiss
   - Tactical note: ミナは言葉の奥を見ている。安心だけで止まらず、静かな主語を一つ置くと恋の温度になる。
   - Payoff: 心理スイッチ「沈黙の安全」が開くと、次の本音に進みやすい。沈黙や迷いを急かさず、そこにいていい空気を作ること。
   - Trap: 間を失敗扱いして質問や冗談で埋めると、場面の目的「好意を示しつつ、返事を迫らない」から外れる。

#### 価値観デート: 雨の日の喫茶店

Purpose: 理想・不安・生活ペースを丁寧に共有する

6. **仕事の疲れ**
   - Location: 雨音が聞こえる窓際席
   - Scene goal: 助言より先に、疲れの感覚を理解する
   - Active switch: 理想の保護 / opens when 現実論で切らず、理想を関係の設計図として一緒に持つ
   - Switch tell: 声が少し小さくなり、比喩や未来の話が増える
   - Dramaturgy: 核 / 理想の保護: 相手の大事な基準
   - Player move: 現実論で切らず、理想を関係の設計図として一緒に持つ。厳しさや明るさの裏にある願いを言語化する
   - Love contract: 近づく / 表面は「仕事の疲れ」の会話。でも本当は、相手の大事な基準を通して理想の保護を見られている。
   - Hidden ask: 現実論で切らず、理想を関係の設計図として一緒に持つことで、言葉の奥にある本音を大切にすること
   - Heart key: 理想の保護 / clue 声が少し小さくなり、比喩や未来の話が増える / unlock by 現実論で切らず、理想を関係の設計図として一緒に持つ
   - Tempting wrong move: 正解を急ぐほど、深さではなく圧に変わる。
   - Winning move: 待ってくれた上で、関係を続ける意思も見える。
   - Unsaid safe subtext: 口にしない安心 / 声が少し小さくなり、比喩や未来の話が増える。「いつか、説明しきれない理想も笑わず聞いてくれる人と、静かな日常を作りたい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 声が少し小さくなり、比喩や未来の話が増える。楽しい温度は届いている。次は「派手な告白より、これからも大切に聞き続けるという継続の約束」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 重い・考えすぎ・きれいごととして片づけるように響き、「本音を出したあと、相手が急に軽い言葉でまとめてしまうこと」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: CORE / 芯を見る
   - Player lesson: 強さ・明るさ・慎重さの裏にある願いを拾う。褒めるなら性格の芯を褒める。
   - Tactical read: CORE / 余白を守る
   - Preferred move: empathize / concrete
   - Risky move: pushy / dismiss
   - Tactical note: ミナは言葉の奥を見ている。安心だけで止まらず、静かな主語を一つ置くと恋の温度になる。
   - Payoff: 心理スイッチ「理想の保護」が開くと、次の本音に進みやすい。現実論で切らず、理想を関係の設計図として一緒に持つこと。
   - Trap: 重い・考えすぎ・きれいごととして片づけると、場面の目的「助言より先に、疲れの感覚を理解する」から外れる。

7. **理想の関係**
   - Location: 二杯目の紅茶を待つ間
   - Scene goal: 理想を現実逃避ではなく、関係の設計図として扱う
   - Active switch: 理想の保護 / opens when 現実論で切らず、理想を関係の設計図として一緒に持つ
   - Switch tell: 声が少し小さくなり、比喩や未来の話が増える
   - Dramaturgy: 夜 / 理想の保護: 本音が出やすい空気
   - Player move: 現実論で切らず、理想を関係の設計図として一緒に持つ。ムードに頼り切らず、選択肢を残す
   - Love contract: 近づく / 表面は「理想の関係」の会話。でも本当は、本音が出やすい空気を通して理想の保護を見られている。
   - Hidden ask: 現実論で切らず、理想を関係の設計図として一緒に持つことで、言葉の奥にある本音を大切にすること
   - Heart key: 理想の保護 / clue 声が少し小さくなり、比喩や未来の話が増える / unlock by 現実論で切らず、理想を関係の設計図として一緒に持つ
   - Tempting wrong move: 正解を急ぐほど、深さではなく圧に変わる。
   - Winning move: 待ってくれた上で、関係を続ける意思も見える。
   - Unsaid safe subtext: 口にしない安心 / 声が少し小さくなり、比喩や未来の話が増える。「いつか、説明しきれない理想も笑わず聞いてくれる人と、静かな日常を作りたい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 声が少し小さくなり、比喩や未来の話が増える。楽しい温度は届いている。次は「派手な告白より、これからも大切に聞き続けるという継続の約束」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 重い・考えすぎ・きれいごととして片づけるように響き、「本音を出したあと、相手が急に軽い言葉でまとめてしまうこと」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: SPACE / 余白作り
   - Player lesson: ムードに流されすぎず、相手が選べる余地を残す。近づくほど境界線を丁寧に。
   - Tactical read: SPACE / 余白を守る
   - Preferred move: empathize / concrete
   - Risky move: pushy / dismiss
   - Tactical note: ミナは言葉の奥を見ている。安心だけで止まらず、静かな主語を一つ置くと恋の温度になる。
   - Payoff: 心理スイッチ「理想の保護」が開くと、次の本音に進みやすい。現実論で切らず、理想を関係の設計図として一緒に持つこと。
   - Trap: 重い・考えすぎ・きれいごととして片づけると、場面の目的「理想を現実逃避ではなく、関係の設計図として扱う」から外れる。

8. **過去の傷**
   - Location: 雨が強くなる午後
   - Scene goal: 傷を評価せず、話してくれたこと自体を大切にする
   - Active switch: 理想の保護 / opens when 現実論で切らず、理想を関係の設計図として一緒に持つ
   - Switch tell: 声が少し小さくなり、比喩や未来の話が増える
   - Dramaturgy: 誘い / 理想の保護: 次に進む意思表示
   - Player move: 現実論で切らず、理想を関係の設計図として一緒に持つ。好意だけでなく、現実の行動へ落とす
   - Love contract: 近づく / 表面は「過去の傷」の会話。でも本当は、次に進む意思表示を通して理想の保護を見られている。
   - Hidden ask: 現実論で切らず、理想を関係の設計図として一緒に持つことで、言葉の奥にある本音を大切にすること
   - Heart key: 理想の保護 / clue 声が少し小さくなり、比喩や未来の話が増える / unlock by 現実論で切らず、理想を関係の設計図として一緒に持つ
   - Tempting wrong move: 正解を急ぐほど、深さではなく圧に変わる。
   - Winning move: 待ってくれた上で、関係を続ける意思も見える。
   - Unsaid safe subtext: 口にしない安心 / 声が少し小さくなり、比喩や未来の話が増える。「いつか、説明しきれない理想も笑わず聞いてくれる人と、静かな日常を作りたい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 声が少し小さくなり、比喩や未来の話が増える。楽しい温度は届いている。次は「派手な告白より、これからも大切に聞き続けるという継続の約束」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 重い・考えすぎ・きれいごととして片づけるように響き、「本音を出したあと、相手が急に軽い言葉でまとめてしまうこと」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: MOVE / 次へ進める
   - Player lesson: 気持ちを行動に落とす。曖昧な好意を、次の約束や選択肢に変える。
   - Tactical read: MOVE / 余白を守る
   - Preferred move: empathize / concrete
   - Risky move: pushy / dismiss
   - Tactical note: ミナは言葉の奥を見ている。安心だけで止まらず、静かな主語を一つ置くと恋の温度になる。
   - Payoff: 心理スイッチ「理想の保護」が開くと、次の本音に進みやすい。現実論で切らず、理想を関係の設計図として一緒に持つこと。
   - Trap: 重い・考えすぎ・きれいごととして片づけると、場面の目的「傷を評価せず、話してくれたこと自体を大切にする」から外れる。

9. **あなたの本音**
   - Location: 喫茶店を出る直前
   - Scene goal: 相手に合わせるだけでなく、自分も適度に開く
   - Active switch: 理想の保護 / opens when 現実論で切らず、理想を関係の設計図として一緒に持つ
   - Switch tell: 声が少し小さくなり、比喩や未来の話が増える
   - Dramaturgy: 準備 / 理想の保護: 相手の好みを覚えている証拠
   - Player move: 現実論で切らず、理想を関係の設計図として一緒に持つ。攻略感ではなく観察と敬意として見せる
   - Love contract: 近づく / 表面は「あなたの本音」の会話。でも本当は、相手の好みを覚えている証拠を通して理想の保護を見られている。
   - Hidden ask: 現実論で切らず、理想を関係の設計図として一緒に持つことで、言葉の奥にある本音を大切にすること
   - Heart key: 理想の保護 / clue 声が少し小さくなり、比喩や未来の話が増える / unlock by 現実論で切らず、理想を関係の設計図として一緒に持つ
   - Tempting wrong move: 正解を急ぐほど、深さではなく圧に変わる。
   - Winning move: 待ってくれた上で、関係を続ける意思も見える。
   - Unsaid safe subtext: 口にしない安心 / 声が少し小さくなり、比喩や未来の話が増える。「いつか、説明しきれない理想も笑わず聞いてくれる人と、静かな日常を作りたい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 声が少し小さくなり、比喩や未来の話が増える。楽しい温度は届いている。次は「派手な告白より、これからも大切に聞き続けるという継続の約束」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 重い・考えすぎ・きれいごととして片づけるように響き、「本音を出したあと、相手が急に軽い言葉でまとめてしまうこと」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: REMEMBER / 記憶を使う
   - Player lesson: 前に聞いた好みや不安を覚えていると示す。攻略感ではなく敬意として出す。
   - Tactical read: REMEMBER / 余白を守る
   - Preferred move: empathize / concrete
   - Risky move: pushy / dismiss
   - Tactical note: ミナは言葉の奥を見ている。安心だけで止まらず、静かな主語を一つ置くと恋の温度になる。
   - Payoff: 心理スイッチ「理想の保護」が開くと、次の本音に進みやすい。現実論で切らず、理想を関係の設計図として一緒に持つこと。
   - Trap: 重い・考えすぎ・きれいごととして片づけると、場面の目的「相手に合わせるだけでなく、自分も適度に開く」から外れる。

10. **三回目の誘い**
   - Location: 雨上がりの商店街
   - Scene goal: 好意と余白を両立して三回目へつなげる
   - Active switch: 理想の保護 / opens when 現実論で切らず、理想を関係の設計図として一緒に持つ
   - Switch tell: 声が少し小さくなり、比喩や未来の話が増える
   - Dramaturgy: 接近 / 理想の保護: 甘さと境界線の同時処理
   - Player move: 現実論で切らず、理想を関係の設計図として一緒に持つ。近づくほど相手の主導権を奪わない
   - Love contract: 近づく / 表面は「三回目の誘い」の会話。でも本当は、甘さと境界線の同時処理を通して理想の保護を見られている。
   - Hidden ask: 現実論で切らず、理想を関係の設計図として一緒に持つことで、言葉の奥にある本音を大切にすること
   - Heart key: 理想の保護 / clue 声が少し小さくなり、比喩や未来の話が増える / unlock by 現実論で切らず、理想を関係の設計図として一緒に持つ
   - Tempting wrong move: 正解を急ぐほど、深さではなく圧に変わる。
   - Winning move: 待ってくれた上で、関係を続ける意思も見える。
   - Unsaid safe subtext: 口にしない安心 / 声が少し小さくなり、比喩や未来の話が増える。「いつか、説明しきれない理想も笑わず聞いてくれる人と、静かな日常を作りたい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 声が少し小さくなり、比喩や未来の話が増える。楽しい温度は届いている。次は「派手な告白より、これからも大切に聞き続けるという継続の約束」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 重い・考えすぎ・きれいごととして片づけるように響き、「本音を出したあと、相手が急に軽い言葉でまとめてしまうこと」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: CLOSER / 接近の調整
   - Player lesson: 甘さを出しつつ、相手の主導権を奪わない。攻める場面ほど逃げ道を残す。
   - Tactical read: CLOSER / 余白を守る
   - Preferred move: empathize / concrete
   - Risky move: pushy / dismiss
   - Tactical note: ミナは言葉の奥を見ている。安心だけで止まらず、静かな主語を一つ置くと恋の温度になる。
   - Payoff: 心理スイッチ「理想の保護」が開くと、次の本音に進みやすい。現実論で切らず、理想を関係の設計図として一緒に持つこと。
   - Trap: 重い・考えすぎ・きれいごととして片づけると、場面の目的「好意と余白を両立して三回目へつなげる」から外れる。

#### 関係進展デート: 川沿いの夜散歩

Purpose: 好意・境界線・これからの歩幅を合わせる

11. **好意の言葉**
   - Location: 川沿いのベンチ
   - Scene goal: 好意を受け止め、自分の好意も穏やかに返す
   - Active switch: 相互の本音 / opens when 聞き役だけでなく、自分の弱さや好意も静かに差し出す
   - Switch tell: 質問があなた自身に向き、距離の近い沈黙が生まれる
   - Dramaturgy: 衝突 / 相互の本音: 関係の扱い方が試される
   - Player move: 聞き役だけでなく、自分の弱さや好意も静かに差し出す。逃げではなく方法の違いとして伝える
   - Love contract: 戻す / 表面は「好意の言葉」の会話。でも本当は、関係の扱い方が試されるを通して相互の本音を見られている。
   - Hidden ask: ズレた時に、ミナだけを開かせ、自分は安全圏に残るで済ませず関係の扱い方を直すこと
   - Heart key: 相互の本音 / clue 質問があなた自身に向き、距離の近い沈黙が生まれる / unlock by 聞き役だけでなく、自分の弱さや好意も静かに差し出す
   - Tempting wrong move: 正解を急ぐほど、深さではなく圧に変わる。
   - Winning move: 待ってくれた上で、関係を続ける意思も見える。
   - Unsaid safe subtext: 口にしない安心 / 質問があなた自身に向き、距離の近い沈黙が生まれる。「いつか、説明しきれない理想も笑わず聞いてくれる人と、静かな日常を作りたい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 質問があなた自身に向き、距離の近い沈黙が生まれる。楽しい温度は届いている。次は「派手な告白より、これからも大切に聞き続けるという継続の約束」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / ミナだけを開かせ、自分は安全圏に残るように響き、「本音を出したあと、相手が急に軽い言葉でまとめてしまうこと」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: CONFLICT / 衝突運用
   - Player lesson: 揉めたことより、揉め方が見られている。解決速度と感情の安全を両立する。
   - Tactical read: CONFLICT / 余白を守る
   - Preferred move: empathize / concrete
   - Risky move: pushy / dismiss
   - Tactical note: ミナは言葉の奥を見ている。安心だけで止まらず、静かな主語を一つ置くと恋の温度になる。
   - Payoff: 心理スイッチ「相互の本音」が開くと、次の本音に進みやすい。聞き役だけでなく、自分の弱さや好意も静かに差し出すこと。
   - Trap: ミナだけを開かせ、自分は安全圏に残ると、場面の目的「好意を受け止め、自分の好意も穏やかに返す」から外れる。

12. **境界線**
   - Location: 街灯の下
   - Scene goal: 境界線を拒絶ではなく、関係を続ける条件として理解する
   - Active switch: 相互の本音 / opens when 聞き役だけでなく、自分の弱さや好意も静かに差し出す
   - Switch tell: 質問があなた自身に向き、距離の近い沈黙が生まれる
   - Dramaturgy: 本音 / 相互の本音: 弱さや怖さの開示
   - Player move: 聞き役だけでなく、自分の弱さや好意も静かに差し出す。保護ではなく信頼として受け取る
   - Love contract: 戻す / 表面は「境界線」の会話。でも本当は、弱さや怖さの開示を通して相互の本音を見られている。
   - Hidden ask: ズレた時に、ミナだけを開かせ、自分は安全圏に残るで済ませず関係の扱い方を直すこと
   - Heart key: 相互の本音 / clue 質問があなた自身に向き、距離の近い沈黙が生まれる / unlock by 聞き役だけでなく、自分の弱さや好意も静かに差し出す
   - Tempting wrong move: 正解を急ぐほど、深さではなく圧に変わる。
   - Winning move: 待ってくれた上で、関係を続ける意思も見える。
   - Unsaid safe subtext: 口にしない安心 / 質問があなた自身に向き、距離の近い沈黙が生まれる。「いつか、説明しきれない理想も笑わず聞いてくれる人と、静かな日常を作りたい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 質問があなた自身に向き、距離の近い沈黙が生まれる。楽しい温度は届いている。次は「派手な告白より、これからも大切に聞き続けるという継続の約束」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / ミナだけを開かせ、自分は安全圏に残るように響き、「本音を出したあと、相手が急に軽い言葉でまとめてしまうこと」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: TRUTH / 本音受容
   - Player lesson: 弱さを直さず、信頼として受け取る。守るより、軽く扱わない姿勢を見せる。
   - Tactical read: TRUTH / 余白を守る
   - Preferred move: empathize / concrete
   - Risky move: pushy / dismiss
   - Tactical note: ミナは言葉の奥を見ている。安心だけで止まらず、静かな主語を一つ置くと恋の温度になる。
   - Payoff: 心理スイッチ「相互の本音」が開くと、次の本音に進みやすい。聞き役だけでなく、自分の弱さや好意も静かに差し出すこと。
   - Trap: ミナだけを開かせ、自分は安全圏に残ると、場面の目的「境界線を拒絶ではなく、関係を続ける条件として理解する」から外れる。

13. **迷い**
   - Location: 橋の上
   - Scene goal: 返事を迫らず、迷いも好意の一部として扱う
   - Active switch: 相互の本音 / opens when 聞き役だけでなく、自分の弱さや好意も静かに差し出す
   - Switch tell: 質問があなた自身に向き、距離の近い沈黙が生まれる
   - Dramaturgy: 和解 / 相互の本音: 揉め方を学ぶ
   - Player move: 聞き役だけでなく、自分の弱さや好意も静かに差し出す。雰囲気で流さず、次の扱い方を一つ決める
   - Love contract: 決める / 表面は「迷い」の会話。でも本当は、揉め方を学ぶを通して相互の本音を見られている。
   - Hidden ask: 派手な告白より、これからも大切に聞き続けるという継続の約束。
   - Heart key: 相互の本音 / clue 質問があなた自身に向き、距離の近い沈黙が生まれる / unlock by 聞き役だけでなく、自分の弱さや好意も静かに差し出す
   - Tempting wrong move: 正解を急ぐほど、深さではなく圧に変わる。
   - Winning move: 待ってくれた上で、関係を続ける意思も見える。
   - Unsaid safe subtext: 口にしない安心 / 質問があなた自身に向き、距離の近い沈黙が生まれる。「いつか、説明しきれない理想も笑わず聞いてくれる人と、静かな日常を作りたい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 質問があなた自身に向き、距離の近い沈黙が生まれる。楽しい温度は届いている。次は「派手な告白より、これからも大切に聞き続けるという継続の約束」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / ミナだけを開かせ、自分は安全圏に残るように響き、「本音を出したあと、相手が急に軽い言葉でまとめてしまうこと」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: RESET / 再契約
   - Player lesson: 仲直りで終わらせず、次に同じズレが起きた時の扱い方を決める。
   - Tactical read: RESET / 余白を守る
   - Preferred move: empathize / concrete
   - Risky move: pushy / dismiss
   - Tactical note: ミナは言葉の奥を見ている。安心だけで止まらず、静かな主語を一つ置くと恋の温度になる。
   - Payoff: 心理スイッチ「相互の本音」が開くと、次の本音に進みやすい。聞き役だけでなく、自分の弱さや好意も静かに差し出すこと。
   - Trap: ミナだけを開かせ、自分は安全圏に残ると、場面の目的「返事を迫らず、迷いも好意の一部として扱う」から外れる。

14. **未来の話**
   - Location: 川面が見える階段
   - Scene goal: 未来を語りながら、相手を所有しない姿勢を示す
   - Active switch: 相互の本音 / opens when 聞き役だけでなく、自分の弱さや好意も静かに差し出す
   - Switch tell: 質問があなた自身に向き、距離の近い沈黙が生まれる
   - Dramaturgy: 告白前 / 相互の本音: 緊張を守る
   - Player move: 聞き役だけでなく、自分の弱さや好意も静かに差し出す。茶化しすぎず、聞く姿勢をはっきり見せる
   - Love contract: 決める / 表面は「未来の話」の会話。でも本当は、緊張を守るを通して相互の本音を見られている。
   - Hidden ask: 派手な告白より、これからも大切に聞き続けるという継続の約束。
   - Heart key: 相互の本音 / clue 質問があなた自身に向き、距離の近い沈黙が生まれる / unlock by 聞き役だけでなく、自分の弱さや好意も静かに差し出す
   - Tempting wrong move: 正解を急ぐほど、深さではなく圧に変わる。
   - Winning move: 待ってくれた上で、関係を続ける意思も見える。
   - Unsaid safe subtext: 口にしない安心 / 質問があなた自身に向き、距離の近い沈黙が生まれる。「いつか、説明しきれない理想も笑わず聞いてくれる人と、静かな日常を作りたい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 質問があなた自身に向き、距離の近い沈黙が生まれる。楽しい温度は届いている。次は「派手な告白より、これからも大切に聞き続けるという継続の約束」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / ミナだけを開かせ、自分は安全圏に残るように響き、「本音を出したあと、相手が急に軽い言葉でまとめてしまうこと」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: READY / 緊張保持
   - Player lesson: 告白前の震えを茶化しすぎない。沈黙も相手の勇気の一部として扱う。
   - Tactical read: READY / 緊張を急がせない
   - Preferred move: empathize / concrete
   - Risky move: pushy
   - Tactical note: 告白前の震えは拒絶ではなく、大事に決めたいサイン。言い切りより先に待つ姿勢が効く。
   - Payoff: 心理スイッチ「相互の本音」が開くと、次の本音に進みやすい。聞き役だけでなく、自分の弱さや好意も静かに差し出すこと。
   - Trap: ミナだけを開かせ、自分は安全圏に残ると、場面の目的「未来を語りながら、相手を所有しない姿勢を示す」から外れる。

15. **帰り際**
   - Location: 駅前の改札
   - Scene goal: 余韻を大切にし、次への意思を誠実に伝える
   - Active switch: 相互の本音 / opens when 聞き役だけでなく、自分の弱さや好意も静かに差し出す
   - Switch tell: 質問があなた自身に向き、距離の近い沈黙が生まれる
   - Dramaturgy: 余韻 / 成立した関係を雑に扱わない
   - Player move: 次の約束まで丁寧に置く
   - Love contract: 決める / 表面は「帰り際」の会話。でも本当は、関係の定義を通して相互の本音を見られている。
   - Hidden ask: 派手な告白より、これからも大切に聞き続けるという継続の約束。
   - Heart key: 相互の本音 / clue 質問があなた自身に向き、距離の近い沈黙が生まれる / unlock by 聞き役だけでなく、自分の弱さや好意も静かに差し出す
   - Tempting wrong move: 正解を急ぐほど、深さではなく圧に変わる。
   - Winning move: 待ってくれた上で、関係を続ける意思も見える。
   - Unsaid safe subtext: 口にしない安心 / 質問があなた自身に向き、距離の近い沈黙が生まれる。「いつか、説明しきれない理想も笑わず聞いてくれる人と、静かな日常を作りたい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 質問があなた自身に向き、距離の近い沈黙が生まれる。楽しい温度は届いている。次は「派手な告白より、これからも大切に聞き続けるという継続の約束」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / ミナだけを開かせ、自分は安全圏に残るように響き、「本音を出したあと、相手が急に軽い言葉でまとめてしまうこと」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: AFTER / 余韻設計
   - Player lesson: 成立後こそ雑にしない。所有感ではなく、次の約束で大切に締める。
   - Tactical read: COMMIT / 主語を小さく出す
   - Preferred move: concrete / empathize
   - Risky move: dismiss / pushy
   - Tactical note: 最後は受け止めるだけでは弱い。短く自分の好意を置き、答えを迫らないのが強い。
   - Payoff: 心理スイッチ「相互の本音」が開くと、次の本音に進みやすい。聞き役だけでなく、自分の弱さや好意も静かに差し出すこと。
   - Trap: ミナだけを開かせ、自分は安全圏に残ると、場面の目的「余韻を大切にし、次への意思を誠実に伝える」から外れる。

## リオ / ENFP

**Promise:** 明るさの奥にある傷つきやすさごと、自由に恋を進める物語。

**Core tension:** 自由でいたい。でも、雑に扱われたいわけではない。

**Winning mindset:** ひらめきをまず面白がり、あとから誠実な形に整える。

**Temptation trap:** 冷静な否定、予定優先の正論、明るさを役割として求めること。

**Visual formula:** 風、カフェ、夜の街、二人分の飲み物。予定外の動きを写真に残す。

**Player fantasy:** 予想外の寄り道が、二人だけの物語に変わっていく。

**Signature dilemma:** 楽しく乗るだけだと浅く見える。場面によって、自由を大事にする言葉へ着地させる。

### Date Missions

- **Date 1: SPARK FIRST / 思いつきに最初に乗る**
  - Aim: 初回デートでは、リオの明るさを評価せず、まず一緒に面白がる共犯になる。
  - Target: sparkを2回以上、strainを1回以下
  - Success: リオが次の話題をあなたに預けやすくなり、会話が自然に転がる。
  - Risk: 現実的な指摘から入ると、楽しい空気ごとしぼむ。
  - Mission image cue: 風のあるテラスカフェ、乱れた髪、二人分のアイスラテ、笑い出す直前
- **Date 2: BRIGHT BUT REAL / 明るさの裏を拾う**
  - Aim: 価値観デートでは、楽しいノリの後に見える不安を軽く扱わない。
  - Target: safeを2回以上、sparkを1回以上
  - Success: 楽しいだけで終わらず、リオが静かな気持ちも見せやすくなる。
  - Risk: 明るいから平気と決めつけると、リオは笑って距離を取る。
  - Mission image cue: 夜の街角、笑った後に少し視線が外れる表情、スマホ通知の光
- **Date 3: FREE PROMISE / 自由を残して約束する**
  - Aim: 終盤では、束縛でも放置でもなく、次も会う具体性と寄り道の余白を両立する。
  - Target: sparkを1回以上、safeまたはconcrete系を2回以上、strainを1回以下
  - Success: リオは自由を奪われないまま、大事にされていると感じられる。
  - Risk: 好きの言葉だけが強いと、自由を失う予感として響く。
  - Mission image cue: 夜景の帰り道、開いた予定アプリ、未定の余白が残る次の約束

### Relationship Arc Modes

- **入る**
  - 01 初めての出会い: 思いつきを否定せず、まず一緒に面白がることで、ひらめきと自由の扱い方を大切にすること
  - 02 ぎこちない自己紹介: 思いつきを否定せず、まず一緒に面白がることで、ひらめきと自由の扱い方を大切にすること
  - 03 初めて少し笑う瞬間: 思いつきを否定せず、まず一緒に面白がることで、ひらめきと自由の扱い方を大切にすること
- **近づく**
  - 04 カフェで発想が広がる会話: 思いつきを否定せず、まず一緒に面白がることで、ひらめきと自由の扱い方を大切にすること
  - 05 否定されて少し気まずくなる: 思いつきを否定せず、まず一緒に面白がることで、ひらめきと自由の扱い方を大切にすること
  - 06 相手の価値観を知る: 思いつきを否定せず、まず一緒に面白がることで、ひらめきと自由の扱い方を大切にすること
  - 07 夜の散歩: 楽しさの奥にある不安や寂しさも軽く扱わないことで、ひらめきと自由の扱い方を大切にすること
  - 08 2回目のデートへの誘い: 楽しさの奥にある不安や寂しさも軽く扱わないことで、ひらめきと自由の扱い方を大切にすること
  - 09 食事デート: 楽しさの奥にある不安や寂しさも軽く扱わないことで、ひらめきと自由の扱い方を大切にすること
  - 10 距離が近づく瞬間: 楽しさの奥にある不安や寂しさも軽く扱わないことで、ひらめきと自由の扱い方を大切にすること
- **戻す**
  - 11 小さな衝突: ズレた時に、明るい役割だけを求め、静かな気持ちを面倒にするで済ませず関係の扱い方を直すこと
  - 12 本音が見える: ズレた時に、明るい役割だけを求め、静かな気持ちを面倒にするで済ませず関係の扱い方を直すこと
  - 13 静かな和解: ズレた時に、束縛か放置のどちらかに寄るで済ませず関係の扱い方を直すこと
- **決める**
  - 14 告白前の緊張: 好きという言葉に、自由を奪わないことと、次も会う具体性が一緒にあること。
  - 15 告白の瞬間: 好きという言葉に、自由を奪わないことと、次も会う具体性が一緒にあること。
  - 16 告白後の余韻: 好きという言葉に、自由を奪わないことと、次も会う具体性が一緒にあること。

### Character Memory Echoes

Use these echoes as continuity callbacks: later scene context should name the earlier player move that is still affecting trust, spark, strain, or repair. The callback should feel like the character remembers a specific attitude, not like a generic score bonus.

- **safe: 大事にされた記憶**
  - リオは、明るさの奥の不安まで拾われた場面を覚えている。次はその安心に、少し冒険したくなる火花を足したい。
- **spark: 一緒に跳ねた記憶**
  - リオは、あなたが思いつきに最初に乗ってくれたことを覚えている。楽しい勢いを、次の約束として形にできると強い。
- **strain: 止められた記憶**
  - リオは、ひらめきや自由を先に判定された場面を少し覚えている。次は正しさより先に、面白がる一言で空気を戻したい。
- **repair: また笑えた記憶**
  - リオは、一度しぼんだ空気をあなたが拾い直してくれたことを覚えている。自由を否定しない修復は、かなり効いている。
- **mixed: 揺れながら近づく記憶**
  - リオは、楽しい反応と慎重な反応の両方を見ている。次はノリで広げて、最後に大事にする言葉で締めたい。
- Memory image cue: 風に乱れた髪、少し笑い直す表情、テーブルに残る二人分の飲み物と次の予定の余白

**Attraction switches:** ひらめきに乗る / 明るさの裏の傷つきやすさに気づく / 自由を約束として守る

**Turn-offs:** 冷たい現実論 / テンションの否定 / 自由を軽さと決めつける

### Character Decoder Rule

During play, surface the character's attraction switches and turn-offs as learnable signals. Positive choices should name what opened; risky choices should name the turn-off and provide one repair line rather than only punishing the player.

### Character Route Endings

Route compass rule: during play, show the likely route tendency without locking the player in. The forecast should make choices feel consequential while still allowing rerouting through repair, heart-key unlocks, and late-scene clarity.

Replay plan rule: after each ending, give the player one concrete next-run plan using the current route, locked routes, unopened psychological switches, heart-key misses, and character turn-offs. The plan should support autonomy, competence, and relatedness: choose a route, practice one skill, and understand the character more deeply.

Need compass rule: each scene should expose the relationship need being tested, then score whether the player's answer satisfied, nearly satisfied, or threatened it. The need should be character-specific, drawn from the active psychological switch, and should explain autonomy, felt understanding, and concrete next-step safety without turning the character into a fixed stereotype.

Connection bid rule: treat each character line as a small bid for attention, validation, play, repair, vulnerability, or future commitment. Feedback should say whether the player turned toward, turned with spark, turned away, or turned against the bid. This creates emotional consequence even when the main plot remains linear.

Date intermission rule: after each date, insert a character-perspective note that names what the character privately remembers, what still feels fragile, and what the next date will test. The intermission should feel like an episodic story beat shaped by the player's choices, not a neutral score screen.

- **REPAIR / 笑ったあと、少しだけ風が止まる**
  - Player pattern: 楽しさに乗りきれず、自由を軽さとして扱ったように見えた
  - Epilogue: リオは最後まで明るく振る舞うけれど、ふとスマホを見る時間が増える。自由さを否定された痛みを、笑って隠している。次に会うなら、予定を整えるより先に、彼女のひらめきを面白がれなかったことを言い直したい。
  - Finale line: 「笑ってるけど、ちょっとだけ刺さってた。次は私の楽しいを、先に面白がってほしいな。」
  - Finale memory bridge: 揺れながら近づく記憶として残った今回の接し方が、この最後の表情を少し変えている。リオは、楽しい反応と慎重な反応の両方を見ている。次はノリで広げて、最後に大事にする言葉で締めたい。
  - Next-run mission: 次回はリオの思いつきを否定せず、最初の5シーンでsparkかsafeを4回以上選ぶ。
  - Finale next beat: 謝罪より先に、リオのひらめきをもう一度肯定して空気を戻す。
  - Character CG cue: 夕方のテラス席、リオの髪が風で乱れる、笑顔の奥に少し残る寂しさ
  - Finale CG cue: 夕方のテラス席、風で髪が乱れ、リオが笑顔の奥に寂しさを残す。風、カフェ、夜の街、二人分の飲み物。予定外の動きを写真に残す。
- **RECONNECT / ごめんね、より「それ面白いね」が効く**
  - Player pattern: ズレを放置せず、リオの自由をもう一度肯定して関係を戻した
  - Epilogue: 一度しぼんだ空気を、あなたはもう一度広げ直した。リオは『そういう言い方なら好き』と笑う。彼女にとって修復は重い謝罪だけでなく、自由をちゃんと大事にし直すことだった。
  - Finale line: 「戻ってきてくれるなら、私もまた話したくなる。そういうの、けっこう好き。」
  - Finale memory bridge: 揺れながら近づく記憶として残った今回の接し方が、この最後の表情を少し変えている。リオは、楽しい反応と慎重な反応の両方を見ている。次はノリで広げて、最後に大事にする言葉で締めたい。
  - Next-run mission: 次回は衝突後、リオの案を一つ拾って具体的な寄り道に変える。
  - Finale next beat: 修復を重くしすぎず、拾い直したアイデアを次の寄り道へ変える。
  - Character CG cue: カフェの窓際、リオがストローを持ったまま笑い直す、空いた席に柔らかい光
  - Finale CG cue: カフェの窓際、リオがストローを持ったまま笑い直す。風、カフェ、夜の街、二人分の飲み物。予定外の動きを写真に残す。
- **SPARK / 楽しい、だけで終わらない約束**
  - Player pattern: リオのテンポに乗り、火花を約束へ変える入口まで進めた
  - Epilogue: リオは帰り道、今日の会話を友達に話したくなるくらい楽しんでいる。けれど本当に刺さったのは、笑ったあとにあなたが次の約束を雑にしなかったこと。自由の中にちゃんと大事にされる感じが残った。
  - Finale line: 「楽しかった、だけじゃなくて。ちゃんと大事にされてる感じもした。」
  - Finale memory bridge: 揺れながら近づく記憶として残った今回の接し方が、この最後の表情を少し変えている。リオは、楽しい反応と慎重な反応の両方を見ている。次はノリで広げて、最後に大事にする言葉で締めたい。
  - Next-run mission: 次回はsparkを多めに選びつつ、終盤でtrustを2回以上伸ばす。
  - Finale next beat: 火花の後に約束を置き、自由を放置ではなく大事にする形へ進める。
  - Character CG cue: 夜の街灯、リオが振り返って笑う、二人分のドリンクと次の予定の通知
  - Finale CG cue: 夜の街灯、リオが振り返って笑い、スマホに次の予定の通知が光る。風、カフェ、夜の街、二人分の飲み物。予定外の動きを写真に残す。
- **TRUST / 安心しすぎると、少しだけ退屈になる**
  - Player pattern: 大事にする姿勢は届いたが、リオの冒険心をもう少し呼び起こせる
  - Epilogue: リオはあなたといると傷つきにくい。でも、すべてが優しく整いすぎると、彼女の中の『どこかへ行きたい』が眠ってしまう。次は安心の上に、少しだけ予定外の楽しさを足したい。
  - Finale line: 「安心する。でも、次はちょっとだけ予定外もしたい。」
  - Finale memory bridge: 揺れながら近づく記憶として残った今回の接し方が、この最後の表情を少し変えている。リオは、楽しい反応と慎重な反応の両方を見ている。次はノリで広げて、最後に大事にする言葉で締めたい。
  - Next-run mission: 次回はsafeの後にsparkを混ぜ、リオが提案したくなる余白を作る。
  - Finale next beat: 安心を土台に、リオが自分から提案したくなる余白を作る。
  - Character CG cue: 昼のカフェ、安心したリオが窓の外を見ている、次の寄り道を待つ表情
  - Finale CG cue: 昼のカフェ、窓の外を見るリオ、次の寄り道を待つ表情。風、カフェ、夜の街、二人分の飲み物。予定外の動きを写真に残す。
- **BALANCE / 予定外が、二人の約束になる**
  - Player pattern: 楽しいノリと誠実な着地を両立し、リオが自然体で近づける流れを作った
  - Epilogue: あなたはリオの思いつきに乗り、必要なところではちゃんと大事にした。彼女は帰り際、次の予定を決めながらも『寄り道してもいい？』と聞く。自由を奪わない約束が、恋の形になりはじめている。
  - Finale line: 「約束してるのに、自由でいられる。そういうの、かなりいい。」
  - Finale memory bridge: 揺れながら近づく記憶として残った今回の接し方が、この最後の表情を少し変えている。リオは、楽しい反応と慎重な反応の両方を見ている。次はノリで広げて、最後に大事にする言葉で締めたい。
  - Next-run mission: 次回はリオの3つの心理スイッチをすべて解放し、最後に自由を守る告白を選ぶ。
  - Finale next beat: 寄り道できる約束として恋を進め、告白後の次の遊びまで見せる。
  - Character CG cue: 夕暮れの歩道、リオがスマホで次の店を見せる、二人の影が近い
  - Finale CG cue: 夕暮れの歩道、リオがスマホで次の店を見せ、二人の影が近い。風、カフェ、夜の街、二人分の飲み物。予定外の動きを写真に残す。

### Psychological Switches

- **ひらめきの共犯**
  - Opens: 思いつきを否定せず、まず一緒に面白がる
  - Hurts: 現実的な正しさで熱量を止める
  - Tell: 表情が一気に動き、次の案をあなたに預けてくる
- **明るさの裏側**
  - Opens: 楽しさの奥にある不安や寂しさも軽く扱わない
  - Hurts: 明るい役割だけを求め、静かな気持ちを面倒にする
  - Tell: 笑ったあとに少しだけ視線が外れ、反応を待つ
- **自由の約束**
  - Opens: 自由を奪わず、次も会う具体性を一緒に置く
  - Hurts: 束縛か放置のどちらかに寄る
  - Tell: 予定外の寄り道を、二人の思い出として言い直す

### Reading Cues

- Signal: 目線がよく動き、思いついた瞬間に表情が一気に明るくなる
  - Good read: まず一緒に面白がり、正しさより熱量を止めない
  - Misread: 現実的かどうかを先に判定して、勢いをしぼませる
  - Player question: いま否定より先に乗れているか？
- Signal: 笑った直後に少し視線が外れ、反応を待つような間がある
  - Good read: 明るさの裏にある不安も軽く扱わず、ちゃんと大事にする
  - Misread: 明るいから平気だと決めつけ、静かな気持ちを見落とす
  - Player question: 楽しさの奥にある寂しさも拾えているか？
- Signal: 次の予定を話しながら、自由が残っているかを確かめてくる
  - Good read: 会う具体性を置きつつ、寄り道できる余白も残す
  - Misread: 束縛か放置のどちらかに寄って、自由を雑に扱う
  - Player question: 約束と自由を同時に守れているか？

### Inner Layer

- Public mask: 明るくて勢いのある人に見えるが、否定されると想像以上に傷つきやすい。
- Fear: 楽しい自分だけを求められて、静かな不安や寂しさを面倒だと思われること。
- Opens when: ひらめきを一緒に面白がったあと、ちゃんと大事にする言葉で受け止めてもらえた時。
- Closes when: 自由さを無責任、テンションを幼さとして処理された時。
- Private wish: 予定外の寄り道も、最後には二人の約束として覚えていてくれる人がいい。
- Confession need: 好きという言葉に、自由を奪わないことと、次も会う具体性が一緒にあること。

### Persona

- Summary: 好奇心と熱量で場を明るくするタイプ。相手の夢や個性を面白がり、予想外の展開も一緒に楽しみたい気持ちが強めです。
- Needs: 励まし / オープンマインド / 感情的な深いつながり
- Conflict: 感情的な正直さを求める一方、束縛や冷たい否定には強く反応しやすい。
- Reassurance: 質の高い時間、肯定的な言葉、可能性を一緒に広げる姿勢。
- Good lines: それ最高。今度一緒にやってみたい / その話もっと聞きたい、ワクワクする / 予定変えて寄り道するのもありだね
- Bad lines: 現実的に無理でしょ / ちゃんと計画してからにしよう / テンション高すぎない？

### Story Arc

#### 出会い: 風のあるテラスカフェ

Purpose: 明るさに乗りつつ、雑に扱わない第一印象を作る

1. **初めての出会い**
   - Location: テラス席、二人分のアイスラテと空いた向かい席
   - Scene goal: 第一声は明るさに乗る。ただし外見いじりや評価に寄せすぎない
   - Active switch: ひらめきの共犯 / opens when 思いつきを否定せず、まず一緒に面白がる
   - Switch tell: 表情が一気に動き、次の案をあなたに預けてくる
   - Dramaturgy: 入口 / ひらめきの共犯: 第一印象の安全確認
   - Player move: 思いつきを否定せず、まず一緒に面白がる。相手のテンポを観察し、いきなり型にはめない
   - Love contract: 入る / 表面は「初めての出会い」の会話。でも本当は、第一印象の安全確認を通してひらめきの共犯を見られている。
   - Hidden ask: 思いつきを否定せず、まず一緒に面白がることで、ひらめきと自由の扱い方を大切にすること
   - Heart key: ひらめきの共犯 / clue 表情が一気に動き、次の案をあなたに預けてくる / unlock by 思いつきを否定せず、まず一緒に面白がる
   - Tempting wrong move: 冷静な否定から入ると、笑顔のまま距離が開く。
   - Winning move: 自由を否定せず、二人の次の予定へ変えられる。
   - Unsaid safe subtext: 口にしない安心 / 表情が一気に動き、次の案をあなたに預けてくる。「予定外の寄り道も、最後には二人の約束として覚えていてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 表情が一気に動き、次の案をあなたに預けてくる。楽しい温度は届いている。次は「好きという言葉に、自由を奪わないことと、次も会う具体性が一緒にあること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 現実的な正しさで熱量を止めるように響き、「楽しい自分だけを求められて、静かな不安や寂しさを面倒だと思われること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: OBSERVE / 観察
   - Player lesson: 相手の緊張・視線・距離を読む。最初の正解は盛り上げることではなく、入っていい速度を測ること。
   - Tactical read: OBSERVE / ノリを約束にする
   - Preferred move: playful / action
   - Risky move: dismiss
   - Tactical note: リオは最初の熱量を見ている。まず面白がり、最後に大事にする言葉で着地させる。
   - Payoff: 心理スイッチ「ひらめきの共犯」が開くと、次の本音に進みやすい。思いつきを否定せず、まず一緒に面白がること。
   - Trap: 現実的な正しさで熱量を止めると、場面の目的「第一声は明るさに乗る。ただし外見いじりや評価に寄せすぎない」から外れる。

2. **ぎこちない自己紹介**
   - Location: スマホの通知が一度光り、リオが慌てて伏せる
   - Scene goal: 質問攻めにせず、仕事の熱量を自然に広げる
   - Active switch: ひらめきの共犯 / opens when 思いつきを否定せず、まず一緒に面白がる
   - Switch tell: 表情が一気に動き、次の案をあなたに預けてくる
   - Dramaturgy: 輪郭 / ひらめきの共犯: 自分の軸を少し見せる
   - Player move: 思いつきを否定せず、まず一緒に面白がる。聞き役に逃げず、相手が判断できる材料を出す
   - Love contract: 入る / 表面は「ぎこちない自己紹介」の会話。でも本当は、自分の軸を少し見せるを通してひらめきの共犯を見られている。
   - Hidden ask: 思いつきを否定せず、まず一緒に面白がることで、ひらめきと自由の扱い方を大切にすること
   - Heart key: ひらめきの共犯 / clue 表情が一気に動き、次の案をあなたに預けてくる / unlock by 思いつきを否定せず、まず一緒に面白がる
   - Tempting wrong move: 冷静な否定から入ると、笑顔のまま距離が開く。
   - Winning move: 自由を否定せず、二人の次の予定へ変えられる。
   - Unsaid safe subtext: 口にしない安心 / 表情が一気に動き、次の案をあなたに預けてくる。「予定外の寄り道も、最後には二人の約束として覚えていてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 表情が一気に動き、次の案をあなたに預けてくる。楽しい温度は届いている。次は「好きという言葉に、自由を奪わないことと、次も会う具体性が一緒にあること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 現実的な正しさで熱量を止めるように響き、「楽しい自分だけを求められて、静かな不安や寂しさを面倒だと思われること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: OPEN / 自己開示
   - Player lesson: 聞くだけでなく、自分の基準を一つ渡す。相手があなたを判断できる材料を作る。
   - Tactical read: OPEN / ノリを約束にする
   - Preferred move: playful / action
   - Risky move: dismiss
   - Tactical note: リオは最初の熱量を見ている。まず面白がり、最後に大事にする言葉で着地させる。
   - Payoff: 心理スイッチ「ひらめきの共犯」が開くと、次の本音に進みやすい。思いつきを否定せず、まず一緒に面白がること。
   - Trap: 現実的な正しさで熱量を止めると、場面の目的「質問攻めにせず、仕事の熱量を自然に広げる」から外れる。

3. **初めて少し笑う瞬間**
   - Location: ラテの氷が鳴り、向かいの席に小さなアクセサリーが置かれる
   - Scene goal: リオの自虐を否定しすぎず、安心して笑える空気にする
   - Active switch: ひらめきの共犯 / opens when 思いつきを否定せず、まず一緒に面白がる
   - Switch tell: 表情が一気に動き、次の案をあなたに預けてくる
   - Dramaturgy: ほころび / ひらめきの共犯: 表情がゆるむ瞬間
   - Player move: 思いつきを否定せず、まず一緒に面白がる。笑いを取りに行くより、警戒がほどけた理由を守る
   - Love contract: 入る / 表面は「初めて少し笑う瞬間」の会話。でも本当は、表情がゆるむ瞬間を通してひらめきの共犯を見られている。
   - Hidden ask: 思いつきを否定せず、まず一緒に面白がることで、ひらめきと自由の扱い方を大切にすること
   - Heart key: ひらめきの共犯 / clue 表情が一気に動き、次の案をあなたに預けてくる / unlock by 思いつきを否定せず、まず一緒に面白がる
   - Tempting wrong move: 冷静な否定から入ると、笑顔のまま距離が開く。
   - Winning move: 自由を否定せず、二人の次の予定へ変えられる。
   - Unsaid safe subtext: 口にしない安心 / 表情が一気に動き、次の案をあなたに預けてくる。「予定外の寄り道も、最後には二人の約束として覚えていてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 表情が一気に動き、次の案をあなたに預けてくる。楽しい温度は届いている。次は「好きという言葉に、自由を奪わないことと、次も会う具体性が一緒にあること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 現実的な正しさで熱量を止めるように響き、「楽しい自分だけを求められて、静かな不安や寂しさを面倒だと思われること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: SYNC / 温度合わせ
   - Player lesson: 笑った理由を守る。冗談は距離を縮めるが、相手を素材にしない。
   - Tactical read: SYNC / ノリを約束にする
   - Preferred move: playful / action
   - Risky move: dismiss
   - Tactical note: リオは最初の熱量を見ている。まず面白がり、最後に大事にする言葉で着地させる。
   - Payoff: 心理スイッチ「ひらめきの共犯」が開くと、次の本音に進みやすい。思いつきを否定せず、まず一緒に面白がること。
   - Trap: 現実的な正しさで熱量を止めると、場面の目的「リオの自虐を否定しすぎず、安心して笑える空気にする」から外れる。

4. **カフェで発想が広がる会話**
   - Location: 二人分の飲み物、開きっぱなしのメニュー、リオの視線があちこち動く
   - Scene goal: アイデアはまず広げる。現実性はあとで添える
   - Active switch: ひらめきの共犯 / opens when 思いつきを否定せず、まず一緒に面白がる
   - Switch tell: 表情が一気に動き、次の案をあなたに預けてくる
   - Dramaturgy: 価値観 / ひらめきの共犯: 恋愛観や生活観の違い
   - Player move: 思いつきを否定せず、まず一緒に面白がる。反論ではなく、相手の言葉の芯を確認する
   - Love contract: 近づく / 表面は「カフェで発想が広がる会話」の会話。でも本当は、恋愛観や生活観の違いを通してひらめきの共犯を見られている。
   - Hidden ask: 思いつきを否定せず、まず一緒に面白がることで、ひらめきと自由の扱い方を大切にすること
   - Heart key: ひらめきの共犯 / clue 表情が一気に動き、次の案をあなたに預けてくる / unlock by 思いつきを否定せず、まず一緒に面白がる
   - Tempting wrong move: 冷静な否定から入ると、笑顔のまま距離が開く。
   - Winning move: 自由を否定せず、二人の次の予定へ変えられる。
   - Unsaid safe subtext: 口にしない安心 / 表情が一気に動き、次の案をあなたに預けてくる。「予定外の寄り道も、最後には二人の約束として覚えていてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 表情が一気に動き、次の案をあなたに預けてくる。楽しい温度は届いている。次は「好きという言葉に、自由を奪わないことと、次も会う具体性が一緒にあること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 現実的な正しさで熱量を止めるように響き、「楽しい自分だけを求められて、静かな不安や寂しさを面倒だと思われること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: VALUE / 価値観翻訳
   - Player lesson: 違いを否定せず、相手が何を守ろうとしているかを言葉にする。
   - Tactical read: VALUE / ノリを約束にする
   - Preferred move: playful / action
   - Risky move: dismiss
   - Tactical note: リオは最初の熱量を見ている。まず面白がり、最後に大事にする言葉で着地させる。
   - Payoff: 心理スイッチ「ひらめきの共犯」が開くと、次の本音に進みやすい。思いつきを否定せず、まず一緒に面白がること。
   - Trap: 現実的な正しさで熱量を止めると、場面の目的「アイデアはまず広げる。現実性はあとで添える」から外れる。

5. **否定されて少し気まずくなる**
   - Location: カフェの帰り道、スマホ通知を見てリオが少し黙る
   - Scene goal: すれ違いを軽視せず、でも重くしすぎず修復する
   - Active switch: ひらめきの共犯 / opens when 思いつきを否定せず、まず一緒に面白がる
   - Switch tell: 表情が一気に動き、次の案をあなたに預けてくる
   - Dramaturgy: 小さなズレ / ひらめきの共犯: 受け取り違いの修正
   - Player move: 思いつきを否定せず、まず一緒に面白がる。勝ち負けにせず、何がずれたかを再接続する
   - Love contract: 近づく / 表面は「否定されて少し気まずくなる」の会話。でも本当は、受け取り違いの修正を通してひらめきの共犯を見られている。
   - Hidden ask: 思いつきを否定せず、まず一緒に面白がることで、ひらめきと自由の扱い方を大切にすること
   - Heart key: ひらめきの共犯 / clue 表情が一気に動き、次の案をあなたに預けてくる / unlock by 思いつきを否定せず、まず一緒に面白がる
   - Tempting wrong move: 冷静な否定から入ると、笑顔のまま距離が開く。
   - Winning move: 自由を否定せず、二人の次の予定へ変えられる。
   - Unsaid safe subtext: 口にしない安心 / 表情が一気に動き、次の案をあなたに預けてくる。「予定外の寄り道も、最後には二人の約束として覚えていてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 表情が一気に動き、次の案をあなたに預けてくる。楽しい温度は届いている。次は「好きという言葉に、自由を奪わないことと、次も会う具体性が一緒にあること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 現実的な正しさで熱量を止めるように響き、「楽しい自分だけを求められて、静かな不安や寂しさを面倒だと思われること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: REPAIR / 修復
   - Player lesson: ズレを勝ち負けにしない。相手の論点を小さく扱わず、受け取り直す。
   - Tactical read: REPAIR / ノリを約束にする
   - Preferred move: playful / action
   - Risky move: dismiss
   - Tactical note: リオは最初の熱量を見ている。まず面白がり、最後に大事にする言葉で着地させる。
   - Payoff: 心理スイッチ「ひらめきの共犯」が開くと、次の本音に進みやすい。思いつきを否定せず、まず一緒に面白がること。
   - Trap: 現実的な正しさで熱量を止めると、場面の目的「すれ違いを軽視せず、でも重くしすぎず修復する」から外れる。

#### 距離が近づく: 夜の街歩きと食事

Purpose: 自由さと誠実さを両立し、楽しいだけではない関係へ進める

6. **相手の価値観を知る**
   - Location: 夜の雑貨店、差し出された小さなキーホルダー
   - Scene goal: ENFPの自由さを不誠実と決めつけない
   - Active switch: ひらめきの共犯 / opens when 思いつきを否定せず、まず一緒に面白がる
   - Switch tell: 表情が一気に動き、次の案をあなたに預けてくる
   - Dramaturgy: 核 / ひらめきの共犯: 相手の大事な基準
   - Player move: 思いつきを否定せず、まず一緒に面白がる。厳しさや明るさの裏にある願いを言語化する
   - Love contract: 近づく / 表面は「相手の価値観を知る」の会話。でも本当は、相手の大事な基準を通してひらめきの共犯を見られている。
   - Hidden ask: 思いつきを否定せず、まず一緒に面白がることで、ひらめきと自由の扱い方を大切にすること
   - Heart key: ひらめきの共犯 / clue 表情が一気に動き、次の案をあなたに預けてくる / unlock by 思いつきを否定せず、まず一緒に面白がる
   - Tempting wrong move: 冷静な否定から入ると、笑顔のまま距離が開く。
   - Winning move: 自由を否定せず、二人の次の予定へ変えられる。
   - Unsaid safe subtext: 口にしない安心 / 表情が一気に動き、次の案をあなたに預けてくる。「予定外の寄り道も、最後には二人の約束として覚えていてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 表情が一気に動き、次の案をあなたに預けてくる。楽しい温度は届いている。次は「好きという言葉に、自由を奪わないことと、次も会う具体性が一緒にあること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 現実的な正しさで熱量を止めるように響き、「楽しい自分だけを求められて、静かな不安や寂しさを面倒だと思われること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: CORE / 芯を見る
   - Player lesson: 強さ・明るさ・慎重さの裏にある願いを拾う。褒めるなら性格の芯を褒める。
   - Tactical read: CORE / ノリを約束にする
   - Preferred move: playful / action
   - Risky move: dismiss
   - Tactical note: リオは最初の熱量を見ている。まず面白がり、最後に大事にする言葉で着地させる。
   - Payoff: 心理スイッチ「ひらめきの共犯」が開くと、次の本音に進みやすい。思いつきを否定せず、まず一緒に面白がること。
   - Trap: 現実的な正しさで熱量を止めると、場面の目的「ENFPの自由さを不誠実と決めつけない」から外れる。

7. **夜の散歩**
   - Location: 川沿い、街灯、二人分の影
   - Scene goal: 明るさを求めすぎず、静かなリオも受け止める
   - Active switch: 明るさの裏側 / opens when 楽しさの奥にある不安や寂しさも軽く扱わない
   - Switch tell: 笑ったあとに少しだけ視線が外れ、反応を待つ
   - Dramaturgy: 夜 / 明るさの裏側: 本音が出やすい空気
   - Player move: 楽しさの奥にある不安や寂しさも軽く扱わない。ムードに頼り切らず、選択肢を残す
   - Love contract: 近づく / 表面は「夜の散歩」の会話。でも本当は、本音が出やすい空気を通して明るさの裏側を見られている。
   - Hidden ask: 楽しさの奥にある不安や寂しさも軽く扱わないことで、ひらめきと自由の扱い方を大切にすること
   - Heart key: 明るさの裏側 / clue 笑ったあとに少しだけ視線が外れ、反応を待つ / unlock by 楽しさの奥にある不安や寂しさも軽く扱わない
   - Tempting wrong move: 冷静な否定から入ると、笑顔のまま距離が開く。
   - Winning move: 自由を否定せず、二人の次の予定へ変えられる。
   - Unsaid safe subtext: 口にしない安心 / 笑ったあとに少しだけ視線が外れ、反応を待つ。「予定外の寄り道も、最後には二人の約束として覚えていてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 笑ったあとに少しだけ視線が外れ、反応を待つ。楽しい温度は届いている。次は「好きという言葉に、自由を奪わないことと、次も会う具体性が一緒にあること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 明るい役割だけを求め、静かな気持ちを面倒にするように響き、「楽しい自分だけを求められて、静かな不安や寂しさを面倒だと思われること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: SPACE / 余白作り
   - Player lesson: ムードに流されすぎず、相手が選べる余地を残す。近づくほど境界線を丁寧に。
   - Tactical read: SPACE / ノリを約束にする
   - Preferred move: playful / action
   - Risky move: dismiss
   - Tactical note: リオは最初の熱量を見ている。まず面白がり、最後に大事にする言葉で着地させる。
   - Payoff: 心理スイッチ「明るさの裏側」が開くと、次の本音に進みやすい。楽しさの奥にある不安や寂しさも軽く扱わないこと。
   - Trap: 明るい役割だけを求め、静かな気持ちを面倒にすると、場面の目的「明るさを求めすぎず、静かなリオも受け止める」から外れる。

8. **2回目のデートへの誘い**
   - Location: 駅前、スマホに候補の店を二つ表示
   - Scene goal: 誘いの照れを受け取り、具体的に返す
   - Active switch: 明るさの裏側 / opens when 楽しさの奥にある不安や寂しさも軽く扱わない
   - Switch tell: 笑ったあとに少しだけ視線が外れ、反応を待つ
   - Dramaturgy: 誘い / 明るさの裏側: 次に進む意思表示
   - Player move: 楽しさの奥にある不安や寂しさも軽く扱わない。好意だけでなく、現実の行動へ落とす
   - Love contract: 近づく / 表面は「2回目のデートへの誘い」の会話。でも本当は、次に進む意思表示を通して明るさの裏側を見られている。
   - Hidden ask: 楽しさの奥にある不安や寂しさも軽く扱わないことで、ひらめきと自由の扱い方を大切にすること
   - Heart key: 明るさの裏側 / clue 笑ったあとに少しだけ視線が外れ、反応を待つ / unlock by 楽しさの奥にある不安や寂しさも軽く扱わない
   - Tempting wrong move: 冷静な否定から入ると、笑顔のまま距離が開く。
   - Winning move: 自由を否定せず、二人の次の予定へ変えられる。
   - Unsaid safe subtext: 口にしない安心 / 笑ったあとに少しだけ視線が外れ、反応を待つ。「予定外の寄り道も、最後には二人の約束として覚えていてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 笑ったあとに少しだけ視線が外れ、反応を待つ。楽しい温度は届いている。次は「好きという言葉に、自由を奪わないことと、次も会う具体性が一緒にあること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 明るい役割だけを求め、静かな気持ちを面倒にするように響き、「楽しい自分だけを求められて、静かな不安や寂しさを面倒だと思われること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: MOVE / 次へ進める
   - Player lesson: 気持ちを行動に落とす。曖昧な好意を、次の約束や選択肢に変える。
   - Tactical read: MOVE / ノリを約束にする
   - Preferred move: playful / action
   - Risky move: dismiss
   - Tactical note: リオは最初の熱量を見ている。まず面白がり、最後に大事にする言葉で着地させる。
   - Payoff: 心理スイッチ「明るさの裏側」が開くと、次の本音に進みやすい。楽しさの奥にある不安や寂しさも軽く扱わないこと。
   - Trap: 明るい役割だけを求め、静かな気持ちを面倒にすると、場面の目的「誘いの照れを受け取り、具体的に返す」から外れる。

9. **食事デート**
   - Location: 小さなビストロ、二人分のグラス、空いた隣の席
   - Scene goal: 雰囲気を一緒に味わい、採点ではなく共有にする
   - Active switch: 明るさの裏側 / opens when 楽しさの奥にある不安や寂しさも軽く扱わない
   - Switch tell: 笑ったあとに少しだけ視線が外れ、反応を待つ
   - Dramaturgy: 準備 / 明るさの裏側: 相手の好みを覚えている証拠
   - Player move: 楽しさの奥にある不安や寂しさも軽く扱わない。攻略感ではなく観察と敬意として見せる
   - Love contract: 近づく / 表面は「食事デート」の会話。でも本当は、相手の好みを覚えている証拠を通して明るさの裏側を見られている。
   - Hidden ask: 楽しさの奥にある不安や寂しさも軽く扱わないことで、ひらめきと自由の扱い方を大切にすること
   - Heart key: 明るさの裏側 / clue 笑ったあとに少しだけ視線が外れ、反応を待つ / unlock by 楽しさの奥にある不安や寂しさも軽く扱わない
   - Tempting wrong move: 冷静な否定から入ると、笑顔のまま距離が開く。
   - Winning move: 自由を否定せず、二人の次の予定へ変えられる。
   - Unsaid safe subtext: 口にしない安心 / 笑ったあとに少しだけ視線が外れ、反応を待つ。「予定外の寄り道も、最後には二人の約束として覚えていてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 笑ったあとに少しだけ視線が外れ、反応を待つ。楽しい温度は届いている。次は「好きという言葉に、自由を奪わないことと、次も会う具体性が一緒にあること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 明るい役割だけを求め、静かな気持ちを面倒にするように響き、「楽しい自分だけを求められて、静かな不安や寂しさを面倒だと思われること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: REMEMBER / 記憶を使う
   - Player lesson: 前に聞いた好みや不安を覚えていると示す。攻略感ではなく敬意として出す。
   - Tactical read: REMEMBER / ノリを約束にする
   - Preferred move: playful / action
   - Risky move: dismiss
   - Tactical note: リオは最初の熱量を見ている。まず面白がり、最後に大事にする言葉で着地させる。
   - Payoff: 心理スイッチ「明るさの裏側」が開くと、次の本音に進みやすい。楽しさの奥にある不安や寂しさも軽く扱わないこと。
   - Trap: 明るい役割だけを求め、静かな気持ちを面倒にすると、場面の目的「雰囲気を一緒に味わい、採点ではなく共有にする」から外れる。

10. **距離が近づく瞬間**
   - Location: テーブル越しに差し出された小皿、リオのアクセサリーが揺れる
   - Scene goal: 近づく空気を受け取りつつ、急に詰めない
   - Active switch: 明るさの裏側 / opens when 楽しさの奥にある不安や寂しさも軽く扱わない
   - Switch tell: 笑ったあとに少しだけ視線が外れ、反応を待つ
   - Dramaturgy: 接近 / 明るさの裏側: 甘さと境界線の同時処理
   - Player move: 楽しさの奥にある不安や寂しさも軽く扱わない。近づくほど相手の主導権を奪わない
   - Love contract: 近づく / 表面は「距離が近づく瞬間」の会話。でも本当は、甘さと境界線の同時処理を通して明るさの裏側を見られている。
   - Hidden ask: 楽しさの奥にある不安や寂しさも軽く扱わないことで、ひらめきと自由の扱い方を大切にすること
   - Heart key: 明るさの裏側 / clue 笑ったあとに少しだけ視線が外れ、反応を待つ / unlock by 楽しさの奥にある不安や寂しさも軽く扱わない
   - Tempting wrong move: 冷静な否定から入ると、笑顔のまま距離が開く。
   - Winning move: 自由を否定せず、二人の次の予定へ変えられる。
   - Unsaid safe subtext: 口にしない安心 / 笑ったあとに少しだけ視線が外れ、反応を待つ。「予定外の寄り道も、最後には二人の約束として覚えていてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 笑ったあとに少しだけ視線が外れ、反応を待つ。楽しい温度は届いている。次は「好きという言葉に、自由を奪わないことと、次も会う具体性が一緒にあること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 明るい役割だけを求め、静かな気持ちを面倒にするように響き、「楽しい自分だけを求められて、静かな不安や寂しさを面倒だと思われること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: CLOSER / 接近の調整
   - Player lesson: 甘さを出しつつ、相手の主導権を奪わない。攻める場面ほど逃げ道を残す。
   - Tactical read: CLOSER / ノリを約束にする
   - Preferred move: playful / action
   - Risky move: dismiss
   - Tactical note: リオは最初の熱量を見ている。まず面白がり、最後に大事にする言葉で着地させる。
   - Payoff: 心理スイッチ「明るさの裏側」が開くと、次の本音に進みやすい。楽しさの奥にある不安や寂しさも軽く扱わないこと。
   - Trap: 明るい役割だけを求め、静かな気持ちを面倒にすると、場面の目的「近づく空気を受け取りつつ、急に詰めない」から外れる。

#### 本音: 小さな衝突から告白へ

Purpose: すれ違いを修復し、自由さと安心を両方持てる関係にする

11. **小さな衝突**
   - Location: 店を出たあと、リオが少し歩く速度を落とす
   - Scene goal: ナンセンスな否定ではなく、実際に起こりそうなすれ違いを修復する
   - Active switch: 明るさの裏側 / opens when 楽しさの奥にある不安や寂しさも軽く扱わない
   - Switch tell: 笑ったあとに少しだけ視線が外れ、反応を待つ
   - Dramaturgy: 衝突 / 明るさの裏側: 関係の扱い方が試される
   - Player move: 楽しさの奥にある不安や寂しさも軽く扱わない。逃げではなく方法の違いとして伝える
   - Love contract: 戻す / 表面は「小さな衝突」の会話。でも本当は、関係の扱い方が試されるを通して明るさの裏側を見られている。
   - Hidden ask: ズレた時に、明るい役割だけを求め、静かな気持ちを面倒にするで済ませず関係の扱い方を直すこと
   - Heart key: 明るさの裏側 / clue 笑ったあとに少しだけ視線が外れ、反応を待つ / unlock by 楽しさの奥にある不安や寂しさも軽く扱わない
   - Tempting wrong move: 冷静な否定から入ると、笑顔のまま距離が開く。
   - Winning move: 自由を否定せず、二人の次の予定へ変えられる。
   - Unsaid safe subtext: 口にしない安心 / 笑ったあとに少しだけ視線が外れ、反応を待つ。「予定外の寄り道も、最後には二人の約束として覚えていてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 笑ったあとに少しだけ視線が外れ、反応を待つ。楽しい温度は届いている。次は「好きという言葉に、自由を奪わないことと、次も会う具体性が一緒にあること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 明るい役割だけを求め、静かな気持ちを面倒にするように響き、「楽しい自分だけを求められて、静かな不安や寂しさを面倒だと思われること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: CONFLICT / 衝突運用
   - Player lesson: 揉めたことより、揉め方が見られている。解決速度と感情の安全を両立する。
   - Tactical read: CONFLICT / 笑顔の奥を拾う
   - Preferred move: empathize / playful
   - Risky move: dismiss / pushy
   - Tactical note: 衝突場面ではノリだけだと軽く見える。楽しいを肯定してから、傷ついた所を拾う。
   - Payoff: 心理スイッチ「明るさの裏側」が開くと、次の本音に進みやすい。楽しさの奥にある不安や寂しさも軽く扱わないこと。
   - Trap: 明るい役割だけを求め、静かな気持ちを面倒にすると、場面の目的「ナンセンスな否定ではなく、実際に起こりそうなすれ違いを修復する」から外れる。

12. **本音が見える**
   - Location: 夜道、リオがスマホを握り直す
   - Scene goal: 明るさの裏にある承認欲求と不安を受け止める
   - Active switch: 明るさの裏側 / opens when 楽しさの奥にある不安や寂しさも軽く扱わない
   - Switch tell: 笑ったあとに少しだけ視線が外れ、反応を待つ
   - Dramaturgy: 本音 / 明るさの裏側: 弱さや怖さの開示
   - Player move: 楽しさの奥にある不安や寂しさも軽く扱わない。保護ではなく信頼として受け取る
   - Love contract: 戻す / 表面は「本音が見える」の会話。でも本当は、弱さや怖さの開示を通して明るさの裏側を見られている。
   - Hidden ask: ズレた時に、明るい役割だけを求め、静かな気持ちを面倒にするで済ませず関係の扱い方を直すこと
   - Heart key: 明るさの裏側 / clue 笑ったあとに少しだけ視線が外れ、反応を待つ / unlock by 楽しさの奥にある不安や寂しさも軽く扱わない
   - Tempting wrong move: 冷静な否定から入ると、笑顔のまま距離が開く。
   - Winning move: 自由を否定せず、二人の次の予定へ変えられる。
   - Unsaid safe subtext: 口にしない安心 / 笑ったあとに少しだけ視線が外れ、反応を待つ。「予定外の寄り道も、最後には二人の約束として覚えていてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 笑ったあとに少しだけ視線が外れ、反応を待つ。楽しい温度は届いている。次は「好きという言葉に、自由を奪わないことと、次も会う具体性が一緒にあること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 明るい役割だけを求め、静かな気持ちを面倒にするように響き、「楽しい自分だけを求められて、静かな不安や寂しさを面倒だと思われること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: TRUTH / 本音受容
   - Player lesson: 弱さを直さず、信頼として受け取る。守るより、軽く扱わない姿勢を見せる。
   - Tactical read: TRUTH / ノリを約束にする
   - Preferred move: playful / action
   - Risky move: dismiss
   - Tactical note: リオは最初の熱量を見ている。まず面白がり、最後に大事にする言葉で着地させる。
   - Payoff: 心理スイッチ「明るさの裏側」が開くと、次の本音に進みやすい。楽しさの奥にある不安や寂しさも軽く扱わないこと。
   - Trap: 明るい役割だけを求め、静かな気持ちを面倒にすると、場面の目的「明るさの裏にある承認欲求と不安を受け止める」から外れる。

13. **静かな和解**
   - Location: 閉店後のカフェ前、片付けられた外席
   - Scene goal: 和解で相手だけに謝らせず、関係の安全を作る
   - Active switch: 自由の約束 / opens when 自由を奪わず、次も会う具体性を一緒に置く
   - Switch tell: 予定外の寄り道を、二人の思い出として言い直す
   - Dramaturgy: 和解 / 自由の約束: 揉め方を学ぶ
   - Player move: 自由を奪わず、次も会う具体性を一緒に置く。雰囲気で流さず、次の扱い方を一つ決める
   - Love contract: 戻す / 表面は「静かな和解」の会話。でも本当は、揉め方を学ぶを通して自由の約束を見られている。
   - Hidden ask: ズレた時に、束縛か放置のどちらかに寄るで済ませず関係の扱い方を直すこと
   - Heart key: 自由の約束 / clue 予定外の寄り道を、二人の思い出として言い直す / unlock by 自由を奪わず、次も会う具体性を一緒に置く
   - Tempting wrong move: 冷静な否定から入ると、笑顔のまま距離が開く。
   - Winning move: 自由を否定せず、二人の次の予定へ変えられる。
   - Unsaid safe subtext: 口にしない安心 / 予定外の寄り道を、二人の思い出として言い直す。「予定外の寄り道も、最後には二人の約束として覚えていてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 予定外の寄り道を、二人の思い出として言い直す。楽しい温度は届いている。次は「好きという言葉に、自由を奪わないことと、次も会う具体性が一緒にあること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 束縛か放置のどちらかに寄るように響き、「楽しい自分だけを求められて、静かな不安や寂しさを面倒だと思われること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: RESET / 再契約
   - Player lesson: 仲直りで終わらせず、次に同じズレが起きた時の扱い方を決める。
   - Tactical read: RESET / ノリを約束にする
   - Preferred move: playful / action
   - Risky move: dismiss
   - Tactical note: リオは最初の熱量を見ている。まず面白がり、最後に大事にする言葉で着地させる。
   - Payoff: 心理スイッチ「自由の約束」が開くと、次の本音に進みやすい。自由を奪わず、次も会う具体性を一緒に置くこと。
   - Trap: 束縛か放置のどちらかに寄ると、場面の目的「和解で相手だけに謝らせず、関係の安全を作る」から外れる。

14. **告白前の緊張**
   - Location: 駅へ続く歩道橋、リオの視線が落ち着かない
   - Scene goal: 好意の気配を受け取り、急に結論へ飛ばない
   - Active switch: 自由の約束 / opens when 自由を奪わず、次も会う具体性を一緒に置く
   - Switch tell: 予定外の寄り道を、二人の思い出として言い直す
   - Dramaturgy: 告白前 / 自由の約束: 緊張を守る
   - Player move: 自由を奪わず、次も会う具体性を一緒に置く。茶化しすぎず、聞く姿勢をはっきり見せる
   - Love contract: 決める / 表面は「告白前の緊張」の会話。でも本当は、緊張を守るを通して自由の約束を見られている。
   - Hidden ask: 好きという言葉に、自由を奪わないことと、次も会う具体性が一緒にあること。
   - Heart key: 自由の約束 / clue 予定外の寄り道を、二人の思い出として言い直す / unlock by 自由を奪わず、次も会う具体性を一緒に置く
   - Tempting wrong move: 冷静な否定から入ると、笑顔のまま距離が開く。
   - Winning move: 自由を否定せず、二人の次の予定へ変えられる。
   - Unsaid safe subtext: 口にしない安心 / 予定外の寄り道を、二人の思い出として言い直す。「予定外の寄り道も、最後には二人の約束として覚えていてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 予定外の寄り道を、二人の思い出として言い直す。楽しい温度は届いている。次は「好きという言葉に、自由を奪わないことと、次も会う具体性が一緒にあること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 束縛か放置のどちらかに寄るように響き、「楽しい自分だけを求められて、静かな不安や寂しさを面倒だと思われること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: READY / 緊張保持
   - Player lesson: 告白前の震えを茶化しすぎない。沈黙も相手の勇気の一部として扱う。
   - Tactical read: READY / ノリを約束にする
   - Preferred move: playful / action
   - Risky move: dismiss
   - Tactical note: リオは最初の熱量を見ている。まず面白がり、最後に大事にする言葉で着地させる。
   - Payoff: 心理スイッチ「自由の約束」が開くと、次の本音に進みやすい。自由を奪わず、次も会う具体性を一緒に置くこと。
   - Trap: 束縛か放置のどちらかに寄ると、場面の目的「好意の気配を受け取り、急に結論へ飛ばない」から外れる。

15. **告白の瞬間**
   - Location: 歩道橋の上、風で髪が少し乱れる
   - Scene goal: 告白を茶化しすぎず、でもリオの照れに合う温度で返す
   - Active switch: 自由の約束 / opens when 自由を奪わず、次も会う具体性を一緒に置く
   - Switch tell: 予定外の寄り道を、二人の思い出として言い直す
   - Dramaturgy: 告白 / 自由の約束: 関係の定義
   - Player move: 自由を奪わず、次も会う具体性を一緒に置く。曖昧さに逃げず、短くても主語を持って返す
   - Love contract: 決める / 表面は「告白の瞬間」の会話。でも本当は、関係の定義を通して自由の約束を見られている。
   - Hidden ask: 好きという言葉に、自由を奪わないことと、次も会う具体性が一緒にあること。
   - Heart key: 自由の約束 / clue 予定外の寄り道を、二人の思い出として言い直す / unlock by 自由を奪わず、次も会う具体性を一緒に置く
   - Tempting wrong move: 冷静な否定から入ると、笑顔のまま距離が開く。
   - Winning move: 自由を否定せず、二人の次の予定へ変えられる。
   - Unsaid safe subtext: 口にしない安心 / 予定外の寄り道を、二人の思い出として言い直す。「予定外の寄り道も、最後には二人の約束として覚えていてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 予定外の寄り道を、二人の思い出として言い直す。楽しい温度は届いている。次は「好きという言葉に、自由を奪わないことと、次も会う具体性が一緒にあること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 束縛か放置のどちらかに寄るように響き、「楽しい自分だけを求められて、静かな不安や寂しさを面倒だと思われること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: COMMIT / 明確化
   - Player lesson: 返事を濁さない。好き・付き合いたい・考えたいを、主語つきで短く言う。
   - Tactical read: COMMIT / 自由を縛らず約束する
   - Preferred move: action / empathize
   - Risky move: pushy
   - Tactical note: 告白では勢いより、自由を奪わない具体的な次の約束が刺さる。
   - Payoff: 心理スイッチ「自由の約束」が開くと、次の本音に進みやすい。自由を奪わず、次も会う具体性を一緒に置くこと。
   - Trap: 束縛か放置のどちらかに寄ると、場面の目的「告白を茶化しすぎず、でもリオの照れに合う温度で返す」から外れる。

16. **告白後の余韻**
   - Location: 駅前、二人分の飲み物の空きカップ、まだ少し帰りたくない空気
   - Scene goal: 告白後の余韻を大切にし、次の安心を残す
   - Active switch: 自由の約束 / opens when 自由を奪わず、次も会う具体性を一緒に置く
   - Switch tell: 予定外の寄り道を、二人の思い出として言い直す
   - Dramaturgy: 余韻 / 成立した関係を雑に扱わない
   - Player move: 次の約束まで丁寧に置く
   - Love contract: 決める / 表面は「告白後の余韻」の会話。でも本当は、成立後の敬意を通して自由の約束を見られている。
   - Hidden ask: 好きという言葉に、自由を奪わないことと、次も会う具体性が一緒にあること。
   - Heart key: 自由の約束 / clue 予定外の寄り道を、二人の思い出として言い直す / unlock by 自由を奪わず、次も会う具体性を一緒に置く
   - Tempting wrong move: 冷静な否定から入ると、笑顔のまま距離が開く。
   - Winning move: 自由を否定せず、二人の次の予定へ変えられる。
   - Unsaid safe subtext: 口にしない安心 / 予定外の寄り道を、二人の思い出として言い直す。「予定外の寄り道も、最後には二人の約束として覚えていてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 予定外の寄り道を、二人の思い出として言い直す。楽しい温度は届いている。次は「好きという言葉に、自由を奪わないことと、次も会う具体性が一緒にあること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 束縛か放置のどちらかに寄るように響き、「楽しい自分だけを求められて、静かな不安や寂しさを面倒だと思われること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: AFTER / 余韻設計
   - Player lesson: 成立後こそ雑にしない。所有感ではなく、次の約束で大切に締める。
   - Tactical read: AFTER / ノリを約束にする
   - Preferred move: playful / action
   - Risky move: dismiss
   - Tactical note: リオは最初の熱量を見ている。まず面白がり、最後に大事にする言葉で着地させる。
   - Payoff: 心理スイッチ「自由の約束」が開くと、次の本音に進みやすい。自由を奪わず、次も会う具体性を一緒に置くこと。
   - Trap: 束縛か放置のどちらかに寄ると、場面の目的「告白後の余韻を大切にし、次の安心を残す」から外れる。

## ナギ / INFP

**Promise:** 静かな理想と創作の奥へ、急かさず招かれる恋。

**Core tension:** 本当は見てほしい。でも、好きなものを笑われたり売れる/売れないで裁かれるのが怖い。

**Winning mindset:** 価値観を評価せず受け取り、言葉になった分だけを大事にし、最後は小さな現実の約束へ置く。

**Temptation trap:** 夢見がち、考えすぎ、実用性、売れそう、という外側の評価でまとめること。

**Visual formula:** 小さなギャラリー、古本市、夜の川沿い、手紙とポストカード。淡い光と余白で内面を見せる。

**Player fantasy:** 自分だけが、彼女のスケッチ帳と手紙の奥にある本音を受け取る。

**Signature dilemma:** 受け止めるだけだと遠い。終盤は自分の好意と次の行動を、急がず具体化する必要がある。

### Date Missions

- **Date 1: SOFT WORLD / 曖昧な好きを守る**
  - Aim: 初回デートでは、ナギの感性を評価や正解にせず、説明できない好きごと受け取る。
  - Target: safeを2回以上、strainを1回以下
  - Success: ナギは好きなものを話しても笑われない相手として、少しだけ自分の世界を開く。
  - Risk: 外側の評価でまとめると、作品の話はすぐ浅くなる。
  - Mission image cue: 白いギャラリー、淡い青の絵、二人分のパンフレット、ポストカードを選ぶ手元
- **Date 2: CREATIVE TRUST / 作品を急いで評価しない**
  - Aim: 価値観デートでは、創作を見せる怖さを受け取り、批評より先に勇気を扱う。
  - Target: safeを1回以上、sparkまたはconcrete系を1回以上、strainを1回以下
  - Success: ナギは、見せる範囲を自分で選べる安心から、もう少し深い本音を出せる。
  - Risk: 売れる/明るい/実用性の話が先に来ると、次は見せない方が安全だと思う。
  - Mission image cue: 古本市の詩集、閉じかけたスケッチ帳、雨粒の窓、二つのカップ
- **Date 3: REAL IDEAL / 理想を小さく現実に置く**
  - Aim: 終盤では、理想を守るだけでなく、明日の連絡や次の予定へ接続する。
  - Target: safeを1回以上、sparkまたはconcrete系を1回以上、strainを1回以下
  - Success: ナギは、夢みたいな気持ちが明日も続くと信じられる。
  - Risk: 曖昧な保留や雑な別れ方は、告白後の現実感を一気に薄くする。
  - Mission image cue: 夜の川沿い、封筒、温かい飲み物、ポストカードを入れた紙袋

### Relationship Arc Modes

- **入る**
  - 01 初めての出会い: 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱うことで、価値観と創作の主導権を大切にすること
  - 02 好きな絵の前: 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱うことで、価値観と創作の主導権を大切にすること
  - 03 初めて少し笑う瞬間: 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱うことで、価値観と創作の主導権を大切にすること
- **近づく**
  - 04 言葉にならない沈黙: 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱うことで、価値観と創作の主導権を大切にすること
  - 05 次の約束: 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱うことで、価値観と創作の主導権を大切にすること
  - 06 古本市での発見: 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱うことで、価値観と創作の主導権を大切にすること
  - 07 創作の話: 見せる範囲や感想の聞き方をナギに委ねることで、価値観と創作の主導権を大切にすること
  - 08 批評とすれ違い: 見せる範囲や感想の聞き方をナギに委ねることで、価値観と創作の主導権を大切にすること
  - 09 あなたの価値観: 見せる範囲や感想の聞き方をナギに委ねることで、価値観と創作の主導権を大切にすること
  - 10 三回目の誘い: 見せる範囲や感想の聞き方をナギに委ねることで、価値観と創作の主導権を大切にすること
- **戻す**
  - 11 距離が近づく瞬間: ズレた時に、見せて、全部知りたい、もっと売れそう、と鑑賞より評価を急ぐで済ませず関係の扱い方を直すこと
  - 12 小さな衝突: ズレた時に、見せて、全部知りたい、もっと売れそう、と鑑賞より評価を急ぐで済ませず関係の扱い方を直すこと
  - 13 本音が見える: ズレた時に、理想は理想、現実を見よう、と先に切り分けるで済ませず関係の扱い方を直すこと
- **決める**
  - 14 告白前の緊張: 好きという返事に、明日も続ける具体的な行動が添えられていること。
  - 15 告白の瞬間: 好きという返事に、明日も続ける具体的な行動が添えられていること。
  - 16 告白後の余韻: 好きという返事に、明日も続ける具体的な行動が添えられていること。

### Character Memory Echoes

Use these echoes as continuity callbacks: later scene context should name the earlier player move that is still affecting trust, spark, strain, or repair. The callback should feel like the character remembers a specific attitude, not like a generic score bonus.

- **safe: 笑われなかった記憶**
  - ナギは、説明できない好きや沈黙をあなたが待った場面を覚えている。次は聞くだけでなく、あなた自身の好きも少し置きたい。
- **spark: 一緒に物語にした記憶**
  - ナギは、あなたが比喩や小さな遊びで世界に入ってきたことを覚えている。軽さの後に、現実の約束があると強い。
- **strain: 評価された記憶**
  - ナギは、作品や理想を外側の基準でまとめられた場面を少し気にしている。次はまず、見せてくれた勇気を受け取り直したい。
- **repair: 受け取り直された記憶**
  - ナギは、言葉が刺さった後にあなたが順番を直してくれたことを覚えている。完璧な感想より、扱い直す姿勢が残っている。
- **mixed: 手探りで近づいた記憶**
  - ナギは、あなたが自分の世界に入ろうとしていることを感じている。次は理想を守りつつ、明日の行動へつなげたい。
- Memory image cue: 封筒の角、閉じたスケッチ帳、ポストカード、言葉になる前の余白が残る夜のカット

**Attraction switches:** 曖昧な好きを守る / 作品を見せる主導権を尊重する / 理想を現実の約束へ置く

**Turn-offs:** 雑な現実論 / 作品への早すぎる批評 / 本音を引き出す圧

### Character Decoder Rule

During play, surface the character's attraction switches and turn-offs as learnable signals. Positive choices should name what opened; risky choices should name the turn-off and provide one repair line rather than only punishing the player.

### Character Route Endings

Route compass rule: during play, show the likely route tendency without locking the player in. The forecast should make choices feel consequential while still allowing rerouting through repair, heart-key unlocks, and late-scene clarity.

Replay plan rule: after each ending, give the player one concrete next-run plan using the current route, locked routes, unopened psychological switches, heart-key misses, and character turn-offs. The plan should support autonomy, competence, and relatedness: choose a route, practice one skill, and understand the character more deeply.

Need compass rule: each scene should expose the relationship need being tested, then score whether the player's answer satisfied, nearly satisfied, or threatened it. The need should be character-specific, drawn from the active psychological switch, and should explain autonomy, felt understanding, and concrete next-step safety without turning the character into a fixed stereotype.

Connection bid rule: treat each character line as a small bid for attention, validation, play, repair, vulnerability, or future commitment. Feedback should say whether the player turned toward, turned with spark, turned away, or turned against the bid. This creates emotional consequence even when the main plot remains linear.

Date intermission rule: after each date, insert a character-perspective note that names what the character privately remembers, what still feels fragile, and what the next date will test. The intermission should feel like an episodic story beat shaped by the player's choices, not a neutral score screen.

- **REPAIR / しまいかけた手紙が、まだ手元にある**
  - Player pattern: 優しさはあったが、理想や創作を外側の評価でまとめてしまった
  - Epilogue: ナギは笑って別れるけれど、封筒を紙袋の奥へしまう。完全に拒絶したわけではない。ただ、見せたかったものを急いで評価された痛みが残っている。次に会うなら、作品や理想より先に、見せてくれた勇気を受け取り直したい。
  - Finale line: 「今日は少しだけ、しまって帰るね。でも、捨てたわけじゃない。」
  - Finale memory bridge: 手探りで近づいた記憶として残った今回の接し方が、この最後の表情を少し変えている。ナギは、あなたが自分の世界に入ろうとしていることを感じている。次は理想を守りつつ、明日の行動へつなげたい。
  - Next-run mission: 次回は最初の5シーンでstrainを1回以下に抑え、作品の感想より先に感覚を受け取る選択を狙う。
  - Finale next beat: 次回は評価より先に、見せてくれた勇気を受け取り直す。
  - Character CG cue: 夜の帰り道、紙袋の奥にしまわれた封筒、少し視線を落とすナギ、まだ残る余白
  - Finale CG cue: 夜の帰り道、ナギが封筒を紙袋にしまいながら一度だけ振り返る。小さなギャラリー、古本市、夜の川沿い、手紙とポストカード。淡い光と余白で内面を見せる。
- **RECONNECT / 言葉の順番を、もう一度選び直す**
  - Player pattern: すれ違いを正論で押し切らず、作品を出した勇気へ戻れた
  - Epilogue: 一度刺さった言葉のあと、あなたは感想の順番を直した。ナギはすぐ全部を見せるわけではないけれど、スケッチ帳を完全には閉じない。関係を壊さず扱い直せる人として、少し信頼が戻っている。
  - Finale line: 「言葉の順番を選び直してくれたの、ちゃんと分かった。」
  - Finale memory bridge: 手探りで近づいた記憶として残った今回の接し方が、この最後の表情を少し変えている。ナギは、あなたが自分の世界に入ろうとしていることを感じている。次は理想を守りつつ、明日の行動へつなげたい。
  - Next-run mission: 次回は創作を見せる場面で、見せる範囲と感想の聞き方をナギに委ねる。
  - Finale next beat: 見せる範囲をナギに委ねながら、もう一度スケッチ帳の前へ戻る。
  - Character CG cue: カフェの窓際、閉じかけたスケッチ帳、二人分のカップ、少し戻った視線
  - Finale CG cue: カフェの窓際、閉じかけたスケッチ帳に指先を置いたまま目元が少しほどける。小さなギャラリー、古本市、夜の川沿い、手紙とポストカード。淡い光と余白で内面を見せる。
- **SPARK / 物語みたい。でも明日も続けたい**
  - Player pattern: 詩的な距離の縮め方はできたが、現実へ置く一言が次の鍵になった
  - Epilogue: 今日の会話には、ナギが好きな比喩や小さな遊びがたくさん残った。ただ、夢みたいな時間はそのままだと不安にもなる。次は火花を、明日の連絡や次の約束へそっと置きたい。
  - Finale line: 「物語みたいで、少し怖い。でも、明日も続いたらうれしい。」
  - Finale memory bridge: 手探りで近づいた記憶として残った今回の接し方が、この最後の表情を少し変えている。ナギは、あなたが自分の世界に入ろうとしていることを感じている。次は理想を守りつつ、明日の行動へつなげたい。
  - Next-run mission: 次回はsparkを活かしながら、各デート終盤でconcreteかsafeを入れて現実感を残す。
  - Finale next beat: 比喩や余韻を、明日の連絡と次の約束へそっとつなげる。
  - Character CG cue: 夜の川沿い、ポストカードと温かい飲み物、夢のような表情に少し不安が混ざる
  - Finale CG cue: 夜の川沿い、ポストカードと温かい飲み物、夢のような表情に小さな期待。小さなギャラリー、古本市、夜の川沿い、手紙とポストカード。淡い光と余白で内面を見せる。
- **TRUST / 安心は届いた。次はあなたの好きも聞きたい**
  - Player pattern: ナギの安全地帯にはなれたが、相互性と具体的な進展が少し足りなかった
  - Epilogue: ナギはあなたの前で、好きなものを笑われずに話せた。ただ、聞いてくれる人から恋の相手へ進むには、あなた自身の好きや望みも知りたい。次はナギだけを開かせず、自分の世界も少し差し出す番だ。
  - Finale line: 「安心した。だから今度は、あなたの好きも少し聞きたい。」
  - Finale memory bridge: 手探りで近づいた記憶として残った今回の接し方が、この最後の表情を少し変えている。ナギは、あなたが自分の世界に入ろうとしていることを感じている。次は理想を守りつつ、明日の行動へつなげたい。
  - Next-run mission: 次回はsafeを軸にしつつ、終盤で自分の価値観や好意を主語つきで2回以上置く。
  - Finale next beat: 聞き役から恋の相手へ進むため、自分の価値観も差し出す。
  - Character CG cue: 静かなギャラリーのベンチ、開いたパンフレット、ナギがこちらの言葉を待つ表情
  - Finale CG cue: 白いギャラリーのベンチ、ナギがパンフレット越しにこちらの言葉を待つ。小さなギャラリー、古本市、夜の川沿い、手紙とポストカード。淡い光と余白で内面を見せる。
- **BALANCE / 理想が、小さな約束として歩き出す**
  - Player pattern: 感性を守り、見せる主導権を尊重し、理想を現実の行動へ接続できた
  - Epilogue: あなたはナギの曖昧な好きも、創作を見せる怖さも、夢のような告白も急がせなかった。そして最後に、明日も続く小さな約束を置いた。ナギにとってそれは、理想が現実に触れた瞬間だった。
  - Finale line: 「夢みたいなのに、ちゃんと明日も続く気がする。」
  - Finale memory bridge: 手探りで近づいた記憶として残った今回の接し方が、この最後の表情を少し変えている。ナギは、あなたが自分の世界に入ろうとしていることを感じている。次は理想を守りつつ、明日の行動へつなげたい。
  - Next-run mission: 次回はナギの3つの心理スイッチをすべて解放し、告白後に明日へ続く具体的な約束を選ぶ。
  - Finale next beat: 理想を小さな約束として続け、次のデートで日常に置く。
  - Character CG cue: 夜の帰り道、ポストカードを入れた紙袋、封筒、二人分の影が並ぶ静かな余韻
  - Finale CG cue: 夜の帰り道、封筒とポストカードを入れた紙袋、二人分の影が並ぶ。小さなギャラリー、古本市、夜の川沿い、手紙とポストカード。淡い光と余白で内面を見せる。

### Psychological Switches

- **曖昧な好きの保護**
  - Opens: 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱う
  - Hurts: 雰囲気だけ、夢見がち、考えすぎ、と雑にまとめる
  - Tell: 言葉が途中で止まっても、視線は作品や小物に残る
- **創作の主導権**
  - Opens: 見せる範囲や感想の聞き方をナギに委ねる
  - Hurts: 見せて、全部知りたい、もっと売れそう、と鑑賞より評価を急ぐ
  - Tell: スケッチ帳や手紙を握り直し、見せるかどうかを迷う
- **理想の現実化**
  - Opens: 理想を笑わず、小さな予定や約束として現実に置く
  - Hurts: 理想は理想、現実を見よう、と先に切り分ける
  - Tell: 怖いと言いながらも、次の場所や明日の連絡に反応する

### Reading Cues

- Signal: 好きなものの前で言葉が途切れるが、視線はまだ離れていない
  - Good read: 説明を急がせず、曖昧な好きごと大事に受け取る
  - Misread: 雰囲気だけ、つまり好みでしょ、と外側からまとめる
  - Player question: ナギの言葉になる前の感覚を急がせていないか？
- Signal: スケッチ帳や手紙を差し出しかけて、指先が止まる
  - Good read: 見せる主導権をナギに残し、感想の順番まで丁寧に扱う
  - Misread: もっと見たい、全部見せて、と好意の名で踏み込む
  - Player question: 見たい気持ちより、見せる怖さを先に見ているか？
- Signal: 理想を話したあと、現実にできるかを怖そうに確かめる
  - Good read: 理想を守りつつ、次の予定や小さな行動へ置く
  - Misread: 現実論で先に切り、本人の勇気を消す
  - Player question: 理想を夢のままにせず、急がず現実へ置けているか？

### Inner Layer

- Public mask: 穏やかで空想的に見えるが、本当は好きなものを否定される痛みにとても敏感。
- Fear: 自分の理想や作品を、夢見がち・売れない・重いと外側から裁かれること。
- Opens when: 説明しきれない感覚を待ってもらい、見せる範囲を自分で決めさせてもらえた時。
- Closes when: 好意の名で全部知ろうとされたり、現実論で先に結論を出された時。
- Private wish: 夢みたいな気持ちを、明日も続く小さな約束にしてくれる人がいい。
- Confession need: 好きという返事に、明日も続ける具体的な行動が添えられていること。

### Persona

- Summary: 心の純度や価値観の一致を重視するタイプ。急かされず、安心できる場で少しずつ内面を開きます。
- Needs: 誠実さ / 価値観の共有 / 創造的な自由
- Conflict: 感情を強く感じるが、すぐ言語化できず黙り込むことがある。
- Reassurance: 肯定的な言葉、静かな二人時間、価値観を尊重する態度。
- Good lines: その世界観、あなたらしくて素敵だね / 無理に言葉にしなくても大丈夫 / 大切にしている理由を聞いてみたい
- Bad lines: 理想高すぎ / 現実を見なよ / 早く決めて

### Story Arc

#### 出会い: 小さなギャラリー

Purpose: ナギの世界観を評価せず、安心して話せる入口を作る

1. **初めての出会い**
   - Location: 白い壁の小さなギャラリー、二人分のパンフレット
   - Scene goal: 作品の評価より先に、ナギが話せる空気を作る
   - Active switch: 曖昧な好きの保護 / opens when 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱う
   - Switch tell: 言葉が途中で止まっても、視線は作品や小物に残る
   - Dramaturgy: 入口 / 曖昧な好きの保護: 第一印象の安全確認
   - Player move: 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱う。相手のテンポを観察し、いきなり型にはめない
   - Love contract: 入る / 表面は「初めての出会い」の会話。でも本当は、第一印象の安全確認を通して曖昧な好きの保護を見られている。
   - Hidden ask: 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱うことで、価値観と創作の主導権を大切にすること
   - Heart key: 曖昧な好きの保護 / clue 言葉が途中で止まっても、視線は作品や小物に残る / unlock by 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱う
   - Tempting wrong move: 外側の評価や実用性から入ると、作品も本音も閉じる。
   - Winning move: 好きなものを見せても笑われない相手として、少し世界が開く。
   - Unsaid safe subtext: 口にしない安心 / 言葉が途中で止まっても、視線は作品や小物に残る。「夢みたいな気持ちを、明日も続く小さな約束にしてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 言葉が途中で止まっても、視線は作品や小物に残る。楽しい温度は届いている。次は「好きという返事に、明日も続ける具体的な行動が添えられていること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 雰囲気だけ、夢見がち、考えすぎ、と雑にまとめるように響き、「自分の理想や作品を、夢見がち・売れない・重いと外側から裁かれること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: OBSERVE / 観察
   - Player lesson: 相手の緊張・視線・距離を読む。最初の正解は盛り上げることではなく、入っていい速度を測ること。
   - Tactical read: OBSERVE / 感性を急がせない
   - Preferred move: empathize / concrete
   - Risky move: dismiss / pushy
   - Tactical note: ナギは説明できない好きごと見てほしい。最初は評価より、言葉になる前の余白を守る。
   - Payoff: 心理スイッチ「曖昧な好きの保護」が開くと、次の本音に進みやすい。説明できない好きや沈黙を、未熟さではなく大切な感覚として扱うこと。
   - Trap: 雰囲気だけ、夢見がち、考えすぎ、と雑にまとめると、場面の目的「作品の評価より先に、ナギが話せる空気を作る」から外れる。

2. **好きな絵の前**
   - Location: 淡い青の絵の前、ナギが少し足を止める
   - Scene goal: 曖昧な好きに、正解ではなく余白を返す
   - Active switch: 曖昧な好きの保護 / opens when 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱う
   - Switch tell: 言葉が途中で止まっても、視線は作品や小物に残る
   - Dramaturgy: 輪郭 / 曖昧な好きの保護: 自分の軸を少し見せる
   - Player move: 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱う。聞き役に逃げず、相手が判断できる材料を出す
   - Love contract: 入る / 表面は「好きな絵の前」の会話。でも本当は、自分の軸を少し見せるを通して曖昧な好きの保護を見られている。
   - Hidden ask: 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱うことで、価値観と創作の主導権を大切にすること
   - Heart key: 曖昧な好きの保護 / clue 言葉が途中で止まっても、視線は作品や小物に残る / unlock by 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱う
   - Tempting wrong move: 外側の評価や実用性から入ると、作品も本音も閉じる。
   - Winning move: 好きなものを見せても笑われない相手として、少し世界が開く。
   - Unsaid safe subtext: 口にしない安心 / 言葉が途中で止まっても、視線は作品や小物に残る。「夢みたいな気持ちを、明日も続く小さな約束にしてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 言葉が途中で止まっても、視線は作品や小物に残る。楽しい温度は届いている。次は「好きという返事に、明日も続ける具体的な行動が添えられていること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 雰囲気だけ、夢見がち、考えすぎ、と雑にまとめるように響き、「自分の理想や作品を、夢見がち・売れない・重いと外側から裁かれること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: OPEN / 自己開示
   - Player lesson: 聞くだけでなく、自分の基準を一つ渡す。相手があなたを判断できる材料を作る。
   - Tactical read: OPEN / 感性を急がせない
   - Preferred move: empathize / concrete
   - Risky move: dismiss / pushy
   - Tactical note: ナギは説明できない好きごと見てほしい。最初は評価より、言葉になる前の余白を守る。
   - Payoff: 心理スイッチ「曖昧な好きの保護」が開くと、次の本音に進みやすい。説明できない好きや沈黙を、未熟さではなく大切な感覚として扱うこと。
   - Trap: 雰囲気だけ、夢見がち、考えすぎ、と雑にまとめると、場面の目的「曖昧な好きに、正解ではなく余白を返す」から外れる。

3. **初めて少し笑う瞬間**
   - Location: 物販棚、ポストカードを二枚見比べる手元
   - Scene goal: ナギの小さな感性を、からかわず一緒に楽しむ
   - Active switch: 曖昧な好きの保護 / opens when 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱う
   - Switch tell: 言葉が途中で止まっても、視線は作品や小物に残る
   - Dramaturgy: ほころび / 曖昧な好きの保護: 表情がゆるむ瞬間
   - Player move: 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱う。笑いを取りに行くより、警戒がほどけた理由を守る
   - Love contract: 入る / 表面は「初めて少し笑う瞬間」の会話。でも本当は、表情がゆるむ瞬間を通して曖昧な好きの保護を見られている。
   - Hidden ask: 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱うことで、価値観と創作の主導権を大切にすること
   - Heart key: 曖昧な好きの保護 / clue 言葉が途中で止まっても、視線は作品や小物に残る / unlock by 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱う
   - Tempting wrong move: 外側の評価や実用性から入ると、作品も本音も閉じる。
   - Winning move: 好きなものを見せても笑われない相手として、少し世界が開く。
   - Unsaid safe subtext: 口にしない安心 / 言葉が途中で止まっても、視線は作品や小物に残る。「夢みたいな気持ちを、明日も続く小さな約束にしてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 言葉が途中で止まっても、視線は作品や小物に残る。楽しい温度は届いている。次は「好きという返事に、明日も続ける具体的な行動が添えられていること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 雰囲気だけ、夢見がち、考えすぎ、と雑にまとめるように響き、「自分の理想や作品を、夢見がち・売れない・重いと外側から裁かれること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: SYNC / 温度合わせ
   - Player lesson: 笑った理由を守る。冗談は距離を縮めるが、相手を素材にしない。
   - Tactical read: SYNC / 感性を急がせない
   - Preferred move: empathize / concrete
   - Risky move: dismiss / pushy
   - Tactical note: ナギは説明できない好きごと見てほしい。最初は評価より、言葉になる前の余白を守る。
   - Payoff: 心理スイッチ「曖昧な好きの保護」が開くと、次の本音に進みやすい。説明できない好きや沈黙を、未熟さではなく大切な感覚として扱うこと。
   - Trap: 雰囲気だけ、夢見がち、考えすぎ、と雑にまとめると、場面の目的「ナギの小さな感性を、からかわず一緒に楽しむ」から外れる。

4. **言葉にならない沈黙**
   - Location: ギャラリー奥のベンチ、窓から夕方の光
   - Scene goal: 沈黙を会話の失敗にしない
   - Active switch: 曖昧な好きの保護 / opens when 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱う
   - Switch tell: 言葉が途中で止まっても、視線は作品や小物に残る
   - Dramaturgy: 価値観 / 曖昧な好きの保護: 恋愛観や生活観の違い
   - Player move: 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱う。反論ではなく、相手の言葉の芯を確認する
   - Love contract: 近づく / 表面は「言葉にならない沈黙」の会話。でも本当は、恋愛観や生活観の違いを通して曖昧な好きの保護を見られている。
   - Hidden ask: 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱うことで、価値観と創作の主導権を大切にすること
   - Heart key: 曖昧な好きの保護 / clue 言葉が途中で止まっても、視線は作品や小物に残る / unlock by 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱う
   - Tempting wrong move: 外側の評価や実用性から入ると、作品も本音も閉じる。
   - Winning move: 好きなものを見せても笑われない相手として、少し世界が開く。
   - Unsaid safe subtext: 口にしない安心 / 言葉が途中で止まっても、視線は作品や小物に残る。「夢みたいな気持ちを、明日も続く小さな約束にしてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 言葉が途中で止まっても、視線は作品や小物に残る。楽しい温度は届いている。次は「好きという返事に、明日も続ける具体的な行動が添えられていること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 雰囲気だけ、夢見がち、考えすぎ、と雑にまとめるように響き、「自分の理想や作品を、夢見がち・売れない・重いと外側から裁かれること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: VALUE / 価値観翻訳
   - Player lesson: 違いを否定せず、相手が何を守ろうとしているかを言葉にする。
   - Tactical read: VALUE / 感性を急がせない
   - Preferred move: empathize / concrete
   - Risky move: dismiss / pushy
   - Tactical note: ナギは説明できない好きごと見てほしい。最初は評価より、言葉になる前の余白を守る。
   - Payoff: 心理スイッチ「曖昧な好きの保護」が開くと、次の本音に進みやすい。説明できない好きや沈黙を、未熟さではなく大切な感覚として扱うこと。
   - Trap: 雰囲気だけ、夢見がち、考えすぎ、と雑にまとめると、場面の目的「沈黙を会話の失敗にしない」から外れる。

5. **次の約束**
   - Location: ギャラリーを出た夕方、手元のポストカード
   - Scene goal: 好意を示しつつ、返事を迫らない具体性を置く
   - Active switch: 曖昧な好きの保護 / opens when 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱う
   - Switch tell: 言葉が途中で止まっても、視線は作品や小物に残る
   - Dramaturgy: 小さなズレ / 曖昧な好きの保護: 受け取り違いの修正
   - Player move: 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱う。勝ち負けにせず、何がずれたかを再接続する
   - Love contract: 近づく / 表面は「次の約束」の会話。でも本当は、受け取り違いの修正を通して曖昧な好きの保護を見られている。
   - Hidden ask: 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱うことで、価値観と創作の主導権を大切にすること
   - Heart key: 曖昧な好きの保護 / clue 言葉が途中で止まっても、視線は作品や小物に残る / unlock by 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱う
   - Tempting wrong move: 外側の評価や実用性から入ると、作品も本音も閉じる。
   - Winning move: 好きなものを見せても笑われない相手として、少し世界が開く。
   - Unsaid safe subtext: 口にしない安心 / 言葉が途中で止まっても、視線は作品や小物に残る。「夢みたいな気持ちを、明日も続く小さな約束にしてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 言葉が途中で止まっても、視線は作品や小物に残る。楽しい温度は届いている。次は「好きという返事に、明日も続ける具体的な行動が添えられていること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 雰囲気だけ、夢見がち、考えすぎ、と雑にまとめるように響き、「自分の理想や作品を、夢見がち・売れない・重いと外側から裁かれること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: REPAIR / 修復
   - Player lesson: ズレを勝ち負けにしない。相手の論点を小さく扱わず、受け取り直す。
   - Tactical read: REPAIR / 感性を急がせない
   - Preferred move: empathize / concrete
   - Risky move: dismiss / pushy
   - Tactical note: ナギは説明できない好きごと見てほしい。最初は評価より、言葉になる前の余白を守る。
   - Payoff: 心理スイッチ「曖昧な好きの保護」が開くと、次の本音に進みやすい。説明できない好きや沈黙を、未熟さではなく大切な感覚として扱うこと。
   - Trap: 雰囲気だけ、夢見がち、考えすぎ、と雑にまとめると、場面の目的「好意を示しつつ、返事を迫らない具体性を置く」から外れる。

#### 価値観: 古本市と夜の散歩

Purpose: 理想を守りながら、現実へ置く会話に進める

6. **古本市での発見**
   - Location: 屋外の古本市、古い詩集と二人分の紙袋
   - Scene goal: ナギの物語化する癖を、夢見がちで片づけない
   - Active switch: 曖昧な好きの保護 / opens when 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱う
   - Switch tell: 言葉が途中で止まっても、視線は作品や小物に残る
   - Dramaturgy: 核 / 曖昧な好きの保護: 相手の大事な基準
   - Player move: 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱う。厳しさや明るさの裏にある願いを言語化する
   - Love contract: 近づく / 表面は「古本市での発見」の会話。でも本当は、相手の大事な基準を通して曖昧な好きの保護を見られている。
   - Hidden ask: 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱うことで、価値観と創作の主導権を大切にすること
   - Heart key: 曖昧な好きの保護 / clue 言葉が途中で止まっても、視線は作品や小物に残る / unlock by 説明できない好きや沈黙を、未熟さではなく大切な感覚として扱う
   - Tempting wrong move: 外側の評価や実用性から入ると、作品も本音も閉じる。
   - Winning move: 好きなものを見せても笑われない相手として、少し世界が開く。
   - Unsaid safe subtext: 口にしない安心 / 言葉が途中で止まっても、視線は作品や小物に残る。「夢みたいな気持ちを、明日も続く小さな約束にしてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 言葉が途中で止まっても、視線は作品や小物に残る。楽しい温度は届いている。次は「好きという返事に、明日も続ける具体的な行動が添えられていること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 雰囲気だけ、夢見がち、考えすぎ、と雑にまとめるように響き、「自分の理想や作品を、夢見がち・売れない・重いと外側から裁かれること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: CORE / 芯を見る
   - Player lesson: 強さ・明るさ・慎重さの裏にある願いを拾う。褒めるなら性格の芯を褒める。
   - Tactical read: CORE / 感性を急がせない
   - Preferred move: empathize / concrete
   - Risky move: dismiss / pushy
   - Tactical note: ナギは説明できない好きごと見てほしい。最初は評価より、言葉になる前の余白を守る。
   - Payoff: 心理スイッチ「曖昧な好きの保護」が開くと、次の本音に進みやすい。説明できない好きや沈黙を、未熟さではなく大切な感覚として扱うこと。
   - Trap: 雰囲気だけ、夢見がち、考えすぎ、と雑にまとめると、場面の目的「ナギの物語化する癖を、夢見がちで片づけない」から外れる。

7. **創作の話**
   - Location: 川沿いのベンチ、膝の上の小さなスケッチ帳
   - Scene goal: 作品を見たい気持ちと、見せる主導権を尊重する
   - Active switch: 創作の主導権 / opens when 見せる範囲や感想の聞き方をナギに委ねる
   - Switch tell: スケッチ帳や手紙を握り直し、見せるかどうかを迷う
   - Dramaturgy: 夜 / 創作の主導権: 本音が出やすい空気
   - Player move: 見せる範囲や感想の聞き方をナギに委ねる。ムードに頼り切らず、選択肢を残す
   - Love contract: 近づく / 表面は「創作の話」の会話。でも本当は、本音が出やすい空気を通して創作の主導権を見られている。
   - Hidden ask: 見せる範囲や感想の聞き方をナギに委ねることで、価値観と創作の主導権を大切にすること
   - Heart key: 創作の主導権 / clue スケッチ帳や手紙を握り直し、見せるかどうかを迷う / unlock by 見せる範囲や感想の聞き方をナギに委ねる
   - Tempting wrong move: 外側の評価や実用性から入ると、作品も本音も閉じる。
   - Winning move: 好きなものを見せても笑われない相手として、少し世界が開く。
   - Unsaid safe subtext: 口にしない安心 / スケッチ帳や手紙を握り直し、見せるかどうかを迷う。「夢みたいな気持ちを、明日も続く小さな約束にしてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / スケッチ帳や手紙を握り直し、見せるかどうかを迷う。楽しい温度は届いている。次は「好きという返事に、明日も続ける具体的な行動が添えられていること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 見せて、全部知りたい、もっと売れそう、と鑑賞より評価を急ぐように響き、「自分の理想や作品を、夢見がち・売れない・重いと外側から裁かれること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: SPACE / 余白作り
   - Player lesson: ムードに流されすぎず、相手が選べる余地を残す。近づくほど境界線を丁寧に。
   - Tactical read: SPACE / 感性を急がせない
   - Preferred move: empathize / concrete
   - Risky move: dismiss / pushy
   - Tactical note: ナギは説明できない好きごと見てほしい。最初は評価より、言葉になる前の余白を守る。
   - Payoff: 心理スイッチ「創作の主導権」が開くと、次の本音に進みやすい。見せる範囲や感想の聞き方をナギに委ねること。
   - Trap: 見せて、全部知りたい、もっと売れそう、と鑑賞より評価を急ぐと、場面の目的「作品を見たい気持ちと、見せる主導権を尊重する」から外れる。

8. **批評とすれ違い**
   - Location: 小さなカフェ、ナギがスケッチ帳を閉じる
   - Scene goal: 助言の正しさより先に、作品を出した勇気を受け取る
   - Active switch: 創作の主導権 / opens when 見せる範囲や感想の聞き方をナギに委ねる
   - Switch tell: スケッチ帳や手紙を握り直し、見せるかどうかを迷う
   - Dramaturgy: 誘い / 創作の主導権: 次に進む意思表示
   - Player move: 見せる範囲や感想の聞き方をナギに委ねる。好意だけでなく、現実の行動へ落とす
   - Love contract: 近づく / 表面は「批評とすれ違い」の会話。でも本当は、次に進む意思表示を通して創作の主導権を見られている。
   - Hidden ask: 見せる範囲や感想の聞き方をナギに委ねることで、価値観と創作の主導権を大切にすること
   - Heart key: 創作の主導権 / clue スケッチ帳や手紙を握り直し、見せるかどうかを迷う / unlock by 見せる範囲や感想の聞き方をナギに委ねる
   - Tempting wrong move: 外側の評価や実用性から入ると、作品も本音も閉じる。
   - Winning move: 好きなものを見せても笑われない相手として、少し世界が開く。
   - Unsaid safe subtext: 口にしない安心 / スケッチ帳や手紙を握り直し、見せるかどうかを迷う。「夢みたいな気持ちを、明日も続く小さな約束にしてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / スケッチ帳や手紙を握り直し、見せるかどうかを迷う。楽しい温度は届いている。次は「好きという返事に、明日も続ける具体的な行動が添えられていること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 見せて、全部知りたい、もっと売れそう、と鑑賞より評価を急ぐように響き、「自分の理想や作品を、夢見がち・売れない・重いと外側から裁かれること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: MOVE / 次へ進める
   - Player lesson: 気持ちを行動に落とす。曖昧な好意を、次の約束や選択肢に変える。
   - Tactical read: MOVE / 感性を急がせない
   - Preferred move: empathize / concrete
   - Risky move: dismiss / pushy
   - Tactical note: ナギは説明できない好きごと見てほしい。最初は評価より、言葉になる前の余白を守る。
   - Payoff: 心理スイッチ「創作の主導権」が開くと、次の本音に進みやすい。見せる範囲や感想の聞き方をナギに委ねること。
   - Trap: 見せて、全部知りたい、もっと売れそう、と鑑賞より評価を急ぐと、場面の目的「助言の正しさより先に、作品を出した勇気を受け取る」から外れる。

9. **あなたの価値観**
   - Location: カフェの窓際、雨粒と二つのカップ
   - Scene goal: 聞くだけに逃げず、自分の価値観も少し渡す
   - Active switch: 創作の主導権 / opens when 見せる範囲や感想の聞き方をナギに委ねる
   - Switch tell: スケッチ帳や手紙を握り直し、見せるかどうかを迷う
   - Dramaturgy: 準備 / 創作の主導権: 相手の好みを覚えている証拠
   - Player move: 見せる範囲や感想の聞き方をナギに委ねる。攻略感ではなく観察と敬意として見せる
   - Love contract: 近づく / 表面は「あなたの価値観」の会話。でも本当は、相手の好みを覚えている証拠を通して創作の主導権を見られている。
   - Hidden ask: 見せる範囲や感想の聞き方をナギに委ねることで、価値観と創作の主導権を大切にすること
   - Heart key: 創作の主導権 / clue スケッチ帳や手紙を握り直し、見せるかどうかを迷う / unlock by 見せる範囲や感想の聞き方をナギに委ねる
   - Tempting wrong move: 外側の評価や実用性から入ると、作品も本音も閉じる。
   - Winning move: 好きなものを見せても笑われない相手として、少し世界が開く。
   - Unsaid safe subtext: 口にしない安心 / スケッチ帳や手紙を握り直し、見せるかどうかを迷う。「夢みたいな気持ちを、明日も続く小さな約束にしてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / スケッチ帳や手紙を握り直し、見せるかどうかを迷う。楽しい温度は届いている。次は「好きという返事に、明日も続ける具体的な行動が添えられていること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 見せて、全部知りたい、もっと売れそう、と鑑賞より評価を急ぐように響き、「自分の理想や作品を、夢見がち・売れない・重いと外側から裁かれること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: REMEMBER / 記憶を使う
   - Player lesson: 前に聞いた好みや不安を覚えていると示す。攻略感ではなく敬意として出す。
   - Tactical read: REMEMBER / 感性を急がせない
   - Preferred move: empathize / concrete
   - Risky move: dismiss / pushy
   - Tactical note: ナギは説明できない好きごと見てほしい。最初は評価より、言葉になる前の余白を守る。
   - Payoff: 心理スイッチ「創作の主導権」が開くと、次の本音に進みやすい。見せる範囲や感想の聞き方をナギに委ねること。
   - Trap: 見せて、全部知りたい、もっと売れそう、と鑑賞より評価を急ぐと、場面の目的「聞くだけに逃げず、自分の価値観も少し渡す」から外れる。

10. **三回目の誘い**
   - Location: 雨上がりの商店街、小さな画材店の前
   - Scene goal: 曖昧さを許しつつ、次の行動へ置く
   - Active switch: 創作の主導権 / opens when 見せる範囲や感想の聞き方をナギに委ねる
   - Switch tell: スケッチ帳や手紙を握り直し、見せるかどうかを迷う
   - Dramaturgy: 接近 / 創作の主導権: 甘さと境界線の同時処理
   - Player move: 見せる範囲や感想の聞き方をナギに委ねる。近づくほど相手の主導権を奪わない
   - Love contract: 近づく / 表面は「三回目の誘い」の会話。でも本当は、甘さと境界線の同時処理を通して創作の主導権を見られている。
   - Hidden ask: 見せる範囲や感想の聞き方をナギに委ねることで、価値観と創作の主導権を大切にすること
   - Heart key: 創作の主導権 / clue スケッチ帳や手紙を握り直し、見せるかどうかを迷う / unlock by 見せる範囲や感想の聞き方をナギに委ねる
   - Tempting wrong move: 外側の評価や実用性から入ると、作品も本音も閉じる。
   - Winning move: 好きなものを見せても笑われない相手として、少し世界が開く。
   - Unsaid safe subtext: 口にしない安心 / スケッチ帳や手紙を握り直し、見せるかどうかを迷う。「夢みたいな気持ちを、明日も続く小さな約束にしてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / スケッチ帳や手紙を握り直し、見せるかどうかを迷う。楽しい温度は届いている。次は「好きという返事に、明日も続ける具体的な行動が添えられていること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 見せて、全部知りたい、もっと売れそう、と鑑賞より評価を急ぐように響き、「自分の理想や作品を、夢見がち・売れない・重いと外側から裁かれること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: CLOSER / 接近の調整
   - Player lesson: 甘さを出しつつ、相手の主導権を奪わない。攻める場面ほど逃げ道を残す。
   - Tactical read: CLOSER / 感性を急がせない
   - Preferred move: empathize / concrete
   - Risky move: dismiss / pushy
   - Tactical note: ナギは説明できない好きごと見てほしい。最初は評価より、言葉になる前の余白を守る。
   - Payoff: 心理スイッチ「創作の主導権」が開くと、次の本音に進みやすい。見せる範囲や感想の聞き方をナギに委ねること。
   - Trap: 見せて、全部知りたい、もっと売れそう、と鑑賞より評価を急ぐと、場面の目的「曖昧さを許しつつ、次の行動へ置く」から外れる。

#### 告白前: 夜散歩と手紙

Purpose: 理想を守るだけでなく、関係を現実の約束へ進める

11. **距離が近づく瞬間**
   - Location: 夜の川沿い、ナギが小さな封筒を差し出す
   - Scene goal: 手紙の重さを否定せず、勇気として受け取る
   - Active switch: 創作の主導権 / opens when 見せる範囲や感想の聞き方をナギに委ねる
   - Switch tell: スケッチ帳や手紙を握り直し、見せるかどうかを迷う
   - Dramaturgy: 衝突 / 創作の主導権: 関係の扱い方が試される
   - Player move: 見せる範囲や感想の聞き方をナギに委ねる。逃げではなく方法の違いとして伝える
   - Love contract: 戻す / 表面は「距離が近づく瞬間」の会話。でも本当は、関係の扱い方が試されるを通して創作の主導権を見られている。
   - Hidden ask: ズレた時に、見せて、全部知りたい、もっと売れそう、と鑑賞より評価を急ぐで済ませず関係の扱い方を直すこと
   - Heart key: 創作の主導権 / clue スケッチ帳や手紙を握り直し、見せるかどうかを迷う / unlock by 見せる範囲や感想の聞き方をナギに委ねる
   - Tempting wrong move: 外側の評価や実用性から入ると、作品も本音も閉じる。
   - Winning move: 好きなものを見せても笑われない相手として、少し世界が開く。
   - Unsaid safe subtext: 口にしない安心 / スケッチ帳や手紙を握り直し、見せるかどうかを迷う。「夢みたいな気持ちを、明日も続く小さな約束にしてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / スケッチ帳や手紙を握り直し、見せるかどうかを迷う。楽しい温度は届いている。次は「好きという返事に、明日も続ける具体的な行動が添えられていること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 見せて、全部知りたい、もっと売れそう、と鑑賞より評価を急ぐように響き、「自分の理想や作品を、夢見がち・売れない・重いと外側から裁かれること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: CONFLICT / 衝突運用
   - Player lesson: 揉めたことより、揉め方が見られている。解決速度と感情の安全を両立する。
   - Tactical read: CONFLICT / 感性を急がせない
   - Preferred move: empathize / concrete
   - Risky move: dismiss / pushy
   - Tactical note: ナギは説明できない好きごと見てほしい。最初は評価より、言葉になる前の余白を守る。
   - Payoff: 心理スイッチ「創作の主導権」が開くと、次の本音に進みやすい。見せる範囲や感想の聞き方をナギに委ねること。
   - Trap: 見せて、全部知りたい、もっと売れそう、と鑑賞より評価を急ぐと、場面の目的「手紙の重さを否定せず、勇気として受け取る」から外れる。

12. **小さな衝突**
   - Location: 橋の上、風で封筒の角が少し揺れる
   - Scene goal: 受け止め役から一歩出て、自分の好意を主語で返す
   - Active switch: 創作の主導権 / opens when 見せる範囲や感想の聞き方をナギに委ねる
   - Switch tell: スケッチ帳や手紙を握り直し、見せるかどうかを迷う
   - Dramaturgy: 本音 / 創作の主導権: 弱さや怖さの開示
   - Player move: 見せる範囲や感想の聞き方をナギに委ねる。保護ではなく信頼として受け取る
   - Love contract: 戻す / 表面は「小さな衝突」の会話。でも本当は、弱さや怖さの開示を通して創作の主導権を見られている。
   - Hidden ask: ズレた時に、見せて、全部知りたい、もっと売れそう、と鑑賞より評価を急ぐで済ませず関係の扱い方を直すこと
   - Heart key: 創作の主導権 / clue スケッチ帳や手紙を握り直し、見せるかどうかを迷う / unlock by 見せる範囲や感想の聞き方をナギに委ねる
   - Tempting wrong move: 外側の評価や実用性から入ると、作品も本音も閉じる。
   - Winning move: 好きなものを見せても笑われない相手として、少し世界が開く。
   - Unsaid safe subtext: 口にしない安心 / スケッチ帳や手紙を握り直し、見せるかどうかを迷う。「夢みたいな気持ちを、明日も続く小さな約束にしてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / スケッチ帳や手紙を握り直し、見せるかどうかを迷う。楽しい温度は届いている。次は「好きという返事に、明日も続ける具体的な行動が添えられていること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 見せて、全部知りたい、もっと売れそう、と鑑賞より評価を急ぐように響き、「自分の理想や作品を、夢見がち・売れない・重いと外側から裁かれること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: TRUTH / 本音受容
   - Player lesson: 弱さを直さず、信頼として受け取る。守るより、軽く扱わない姿勢を見せる。
   - Tactical read: TRUTH / 見せる怖さを受け取る
   - Preferred move: empathize / concrete
   - Risky move: dismiss
   - Tactical note: 本音場面では、聞き役に隠れず自分の弱さも一文置くと、ナギだけが開く構図にならない。
   - Payoff: 心理スイッチ「創作の主導権」が開くと、次の本音に進みやすい。見せる範囲や感想の聞き方をナギに委ねること。
   - Trap: 見せて、全部知りたい、もっと売れそう、と鑑賞より評価を急ぐと、場面の目的「受け止め役から一歩出て、自分の好意を主語で返す」から外れる。

13. **本音が見える**
   - Location: 夜道の自販機前、二人分の温かい飲み物
   - Scene goal: 理想を守りながら、現実へ置く約束を作る
   - Active switch: 理想の現実化 / opens when 理想を笑わず、小さな予定や約束として現実に置く
   - Switch tell: 怖いと言いながらも、次の場所や明日の連絡に反応する
   - Dramaturgy: 和解 / 理想の現実化: 揉め方を学ぶ
   - Player move: 理想を笑わず、小さな予定や約束として現実に置く。雰囲気で流さず、次の扱い方を一つ決める
   - Love contract: 戻す / 表面は「本音が見える」の会話。でも本当は、揉め方を学ぶを通して理想の現実化を見られている。
   - Hidden ask: ズレた時に、理想は理想、現実を見よう、と先に切り分けるで済ませず関係の扱い方を直すこと
   - Heart key: 理想の現実化 / clue 怖いと言いながらも、次の場所や明日の連絡に反応する / unlock by 理想を笑わず、小さな予定や約束として現実に置く
   - Tempting wrong move: 外側の評価や実用性から入ると、作品も本音も閉じる。
   - Winning move: 好きなものを見せても笑われない相手として、少し世界が開く。
   - Unsaid safe subtext: 口にしない安心 / 怖いと言いながらも、次の場所や明日の連絡に反応する。「夢みたいな気持ちを、明日も続く小さな約束にしてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 怖いと言いながらも、次の場所や明日の連絡に反応する。楽しい温度は届いている。次は「好きという返事に、明日も続ける具体的な行動が添えられていること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 理想は理想、現実を見よう、と先に切り分けるように響き、「自分の理想や作品を、夢見がち・売れない・重いと外側から裁かれること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: RESET / 再契約
   - Player lesson: 仲直りで終わらせず、次に同じズレが起きた時の扱い方を決める。
   - Tactical read: RESET / 感性を急がせない
   - Preferred move: empathize / concrete
   - Risky move: dismiss / pushy
   - Tactical note: ナギは説明できない好きごと見てほしい。最初は評価より、言葉になる前の余白を守る。
   - Payoff: 心理スイッチ「理想の現実化」が開くと、次の本音に進みやすい。理想を笑わず、小さな予定や約束として現実に置くこと。
   - Trap: 理想は理想、現実を見よう、と先に切り分けると、場面の目的「理想を守りながら、現実へ置く約束を作る」から外れる。

14. **告白前の緊張**
   - Location: 街灯の下、ナギが封筒の端を指でなぞる
   - Scene goal: 緊張を守り、答えを急がず受け取る姿勢を見せる
   - Active switch: 理想の現実化 / opens when 理想を笑わず、小さな予定や約束として現実に置く
   - Switch tell: 怖いと言いながらも、次の場所や明日の連絡に反応する
   - Dramaturgy: 告白前 / 理想の現実化: 緊張を守る
   - Player move: 理想を笑わず、小さな予定や約束として現実に置く。茶化しすぎず、聞く姿勢をはっきり見せる
   - Love contract: 決める / 表面は「告白前の緊張」の会話。でも本当は、緊張を守るを通して理想の現実化を見られている。
   - Hidden ask: 好きという返事に、明日も続ける具体的な行動が添えられていること。
   - Heart key: 理想の現実化 / clue 怖いと言いながらも、次の場所や明日の連絡に反応する / unlock by 理想を笑わず、小さな予定や約束として現実に置く
   - Tempting wrong move: 外側の評価や実用性から入ると、作品も本音も閉じる。
   - Winning move: 好きなものを見せても笑われない相手として、少し世界が開く。
   - Unsaid safe subtext: 口にしない安心 / 怖いと言いながらも、次の場所や明日の連絡に反応する。「夢みたいな気持ちを、明日も続く小さな約束にしてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 怖いと言いながらも、次の場所や明日の連絡に反応する。楽しい温度は届いている。次は「好きという返事に、明日も続ける具体的な行動が添えられていること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 理想は理想、現実を見よう、と先に切り分けるように響き、「自分の理想や作品を、夢見がち・売れない・重いと外側から裁かれること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: READY / 緊張保持
   - Player lesson: 告白前の震えを茶化しすぎない。沈黙も相手の勇気の一部として扱う。
   - Tactical read: READY / 感性を急がせない
   - Preferred move: empathize / concrete
   - Risky move: dismiss / pushy
   - Tactical note: ナギは説明できない好きごと見てほしい。最初は評価より、言葉になる前の余白を守る。
   - Payoff: 心理スイッチ「理想の現実化」が開くと、次の本音に進みやすい。理想を笑わず、小さな予定や約束として現実に置くこと。
   - Trap: 理想は理想、現実を見よう、と先に切り分けると、場面の目的「緊張を守り、答えを急がず受け取る姿勢を見せる」から外れる。

15. **告白の瞬間**
   - Location: 川沿いの灯り、ナギが少しだけ顔を上げる
   - Scene goal: 告白をまっすぐ受け取り、自分の返事もぼかさない
   - Active switch: 理想の現実化 / opens when 理想を笑わず、小さな予定や約束として現実に置く
   - Switch tell: 怖いと言いながらも、次の場所や明日の連絡に反応する
   - Dramaturgy: 告白 / 理想の現実化: 関係の定義
   - Player move: 理想を笑わず、小さな予定や約束として現実に置く。曖昧さに逃げず、短くても主語を持って返す
   - Love contract: 決める / 表面は「告白の瞬間」の会話。でも本当は、関係の定義を通して理想の現実化を見られている。
   - Hidden ask: 好きという返事に、明日も続ける具体的な行動が添えられていること。
   - Heart key: 理想の現実化 / clue 怖いと言いながらも、次の場所や明日の連絡に反応する / unlock by 理想を笑わず、小さな予定や約束として現実に置く
   - Tempting wrong move: 外側の評価や実用性から入ると、作品も本音も閉じる。
   - Winning move: 好きなものを見せても笑われない相手として、少し世界が開く。
   - Unsaid safe subtext: 口にしない安心 / 怖いと言いながらも、次の場所や明日の連絡に反応する。「夢みたいな気持ちを、明日も続く小さな約束にしてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 怖いと言いながらも、次の場所や明日の連絡に反応する。楽しい温度は届いている。次は「好きという返事に、明日も続ける具体的な行動が添えられていること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 理想は理想、現実を見よう、と先に切り分けるように響き、「自分の理想や作品を、夢見がち・売れない・重いと外側から裁かれること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: COMMIT / 明確化
   - Player lesson: 返事を濁さない。好き・付き合いたい・考えたいを、主語つきで短く言う。
   - Tactical read: COMMIT / 理想を現実に置く
   - Preferred move: concrete / empathize
   - Risky move: dismiss / pushy
   - Tactical note: 告白では夢みたいな余韻を守りつつ、明日も続く具体的な約束を添えると刺さる。
   - Payoff: 心理スイッチ「理想の現実化」が開くと、次の本音に進みやすい。理想を笑わず、小さな予定や約束として現実に置くこと。
   - Trap: 理想は理想、現実を見よう、と先に切り分けると、場面の目的「告白をまっすぐ受け取り、自分の返事もぼかさない」から外れる。

16. **告白後の余韻**
   - Location: 帰り道、ポストカードと封筒を入れた小さな紙袋
   - Scene goal: 余韻を夢で終わらせず、次の小さな約束を置く
   - Active switch: 理想の現実化 / opens when 理想を笑わず、小さな予定や約束として現実に置く
   - Switch tell: 怖いと言いながらも、次の場所や明日の連絡に反応する
   - Dramaturgy: 余韻 / 成立した関係を雑に扱わない
   - Player move: 次の約束まで丁寧に置く
   - Love contract: 決める / 表面は「告白後の余韻」の会話。でも本当は、成立後の敬意を通して理想の現実化を見られている。
   - Hidden ask: 好きという返事に、明日も続ける具体的な行動が添えられていること。
   - Heart key: 理想の現実化 / clue 怖いと言いながらも、次の場所や明日の連絡に反応する / unlock by 理想を笑わず、小さな予定や約束として現実に置く
   - Tempting wrong move: 外側の評価や実用性から入ると、作品も本音も閉じる。
   - Winning move: 好きなものを見せても笑われない相手として、少し世界が開く。
   - Unsaid safe subtext: 口にしない安心 / 怖いと言いながらも、次の場所や明日の連絡に反応する。「夢みたいな気持ちを、明日も続く小さな約束にしてくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 怖いと言いながらも、次の場所や明日の連絡に反応する。楽しい温度は届いている。次は「好きという返事に、明日も続ける具体的な行動が添えられていること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 理想は理想、現実を見よう、と先に切り分けるように響き、「自分の理想や作品を、夢見がち・売れない・重いと外側から裁かれること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: AFTER / 余韻設計
   - Player lesson: 成立後こそ雑にしない。所有感ではなく、次の約束で大切に締める。
   - Tactical read: AFTER / 明日に続ける
   - Preferred move: concrete / playful
   - Risky move: dismiss
   - Tactical note: 成立後は余韻だけで終わらせない。連絡、次の会話、小さな約束で現実感を残す。
   - Payoff: 心理スイッチ「理想の現実化」が開くと、次の本音に進みやすい。理想を笑わず、小さな予定や約束として現実に置くこと。
   - Trap: 理想は理想、現実を見よう、と先に切り分けると、場面の目的「余韻を夢で終わらせず、次の小さな約束を置く」から外れる。

## アオイ / INTP

**Promise:** 仮説と沈黙の奥で、静かに確度が上がっていく恋。

**Core tension:** 一緒に考えたい。でも、感情をすぐ定義されたり、思考を冷たいと切られるのが怖い。

**Winning mindset:** 結論を急がず、仮説を一緒に遊び、感情は分析より先に近くで受け取る。

**Temptation trap:** 理屈っぽい、普通にして、好きか今決めて、という形式や即答を迫ること。

**Visual formula:** 科学館、錯視展示、ミニシアター、深夜カフェ、天文台。青い光と静かな余白で思考の距離を見せる。

**Player fantasy:** 自分だけが、彼女の仮説と沈黙の中にある好意を読み取れる。

**Signature dilemma:** 考察だけでは友達に留まる。終盤はアオイの語彙を尊重しながら、自分の好意を短く明確に返す必要がある。

### Date Missions

- **Date 1: THINK WITH HER / 一緒に考える入口を作る**
  - Aim: 初回デートでは、変わった場所や仮説を評価せず、観察してから一緒に面白がる。
  - Target: concreteまたはsafeを2回以上、strainを1回以下
  - Success: アオイは、考えることを止められない相手としてあなたを認識する。
  - Risk: 普通の恋愛っぽさを急ぐと、アオイは自分の思考をしまう。
  - Mission image cue: 閉館前の科学館、フーコーの振り子、錯視展示、二人分のチケット
- **Date 2: FEEL BEFORE FIX / 分析より先に近くにいる**
  - Aim: 中盤では、考察の楽しさを残しながら、寂しさや不安を原因分析だけで処理しない。
  - Target: safeを1回以上、concrete系を1回以上、strainを1回以下
  - Success: アオイは、分析される対象ではなく、近くにいる相手として扱われたと感じる。
  - Risk: 正しい改善案だけを返すと、恋愛温度は下がる。
  - Mission image cue: 深夜カフェ、閉じたノート、半券、冷めかけたコーヒー
- **Date 3: ODD CONFESSION / 独特な告白を受け取る**
  - Aim: 終盤では、アオイの言葉の形式を直させず、短く明確な好意で返す。
  - Target: safeを1回以上、sparkまたはconcrete系を1回以上、strainを1回以下
  - Success: アオイは、普通の言い方でなくても届く相手だと信じられる。
  - Risk: 告白や連絡頻度を仕様化しすぎると、成立直後に息が詰まる。
  - Mission image cue: 天文台の赤い誘導灯、曇り空、望遠鏡、帰りのホームの半券

### Relationship Arc Modes

- **入る**
  - 01 初めての出会い: 仮説や保留を、逃げではなくアオイの自然な接近方法として扱うことで、思考の自由と感情の順番を大切にすること
  - 02 展示の前で仮説が始まる: 仮説や保留を、逃げではなくアオイの自然な接近方法として扱うことで、思考の自由と感情の順番を大切にすること
  - 03 初めて少し笑う瞬間: 仮説や保留を、逃げではなくアオイの自然な接近方法として扱うことで、思考の自由と感情の順番を大切にすること
- **近づく**
  - 04 沈黙の展示室: 仮説や保留を、逃げではなくアオイの自然な接近方法として扱うことで、思考の自由と感情の順番を大切にすること
  - 05 次の約束: 仮説や保留を、逃げではなくアオイの自然な接近方法として扱うことで、思考の自由と感情の順番を大切にすること
  - 06 映画後の考察: 仮説や保留を、逃げではなくアオイの自然な接近方法として扱うことで、思考の自由と感情の順番を大切にすること
  - 07 深夜カフェの議論: 原因分析より先に、寂しさや不安を近くで受け取ることで、思考の自由と感情の順番を大切にすること
  - 08 感情を分析しすぎるすれ違い: 原因分析より先に、寂しさや不安を近くで受け取ることで、思考の自由と感情の順番を大切にすること
  - 09 ひとり時間の扱い: 原因分析より先に、寂しさや不安を近くで受け取ることで、思考の自由と感情の順番を大切にすること
  - 10 三回目の誘い: 原因分析より先に、寂しさや不安を近くで受け取ることで、思考の自由と感情の順番を大切にすること
- **戻す**
  - 11 夜間公開の列: ズレた時に、改善点や原因だけを整理し、アオイ自身を観察対象にするで済ませず関係の扱い方を直すこと
  - 12 望遠鏡を覗く: ズレた時に、改善点や原因だけを整理し、アオイ自身を観察対象にするで済ませず関係の扱い方を直すこと
  - 13 小さな衝突: ズレた時に、普通の告白や連絡頻度を要求し、関係を早く仕様化するで済ませず関係の扱い方を直すこと
- **決める**
  - 14 告白前の静けさ: 自分の言い方を告白として成立させてもらい、相手からは短く明確な好きが返ること。
  - 15 告白の瞬間: 自分の言い方を告白として成立させてもらい、相手からは短く明確な好きが返ること。
  - 16 告白後の余韻: 自分の言い方を告白として成立させてもらい、相手からは短く明確な好きが返ること。

### Character Memory Echoes

Use these echoes as continuity callbacks: later scene context should name the earlier player move that is still affecting trust, spark, strain, or repair. The callback should feel like the character remembers a specific attitude, not like a generic score bonus.

- **safe: 考える余白を守られた記憶**
  - アオイは、あなたが沈黙や保留を急かさなかった場面を覚えている。次はその余白に、短い好意を置けると進展する。
- **spark: 仮説で近づいた記憶**
  - アオイは、知的な遊びの中で恋愛温度を少し上げられたことを覚えている。軽さの後に、誠実な受け取りがあると強い。
- **strain: 定義を急がれた記憶**
  - アオイは、好きかどうかや普通の形を急がれた場面を気にしている。次は形式より先に、彼女の言葉のまま聞きたい。
- **repair: 分析を止めて戻った記憶**
  - アオイは、あなたが正しさより先に近くに戻ってくれたことを覚えている。完璧な理解より、順番を直せることが残っている。
- **mixed: 観察しながら近づいた記憶**
  - アオイは、あなたが自分を理解しようとしていることを感じている。次は攻略ではなく、一緒に考え続けたいという意思を見せたい。
- Memory image cue: 半券、閉じたノート、青い星図、消さずに残した会話の余韻

**Attraction switches:** 思考の自由を守る / 分析より先に近くにいる / 独特な好意表現を受け取る

**Turn-offs:** 感情の即答要求 / 理屈っぽいという切り捨て / 最適解で攻略する態度

### Character Decoder Rule

During play, surface the character's attraction switches and turn-offs as learnable signals. Positive choices should name what opened; risky choices should name the turn-off and provide one repair line rather than only punishing the player.

### Character Route Endings

Route compass rule: during play, show the likely route tendency without locking the player in. The forecast should make choices feel consequential while still allowing rerouting through repair, heart-key unlocks, and late-scene clarity.

Replay plan rule: after each ending, give the player one concrete next-run plan using the current route, locked routes, unopened psychological switches, heart-key misses, and character turn-offs. The plan should support autonomy, competence, and relatedness: choose a route, practice one skill, and understand the character more deeply.

Need compass rule: each scene should expose the relationship need being tested, then score whether the player's answer satisfied, nearly satisfied, or threatened it. The need should be character-specific, drawn from the active psychological switch, and should explain autonomy, felt understanding, and concrete next-step safety without turning the character into a fixed stereotype.

Connection bid rule: treat each character line as a small bid for attention, validation, play, repair, vulnerability, or future commitment. Feedback should say whether the player turned toward, turned with spark, turned away, or turned against the bid. This creates emotional consequence even when the main plot remains linear.

Date intermission rule: after each date, insert a character-perspective note that names what the character privately remembers, what still feels fragile, and what the next date will test. The intermission should feel like an episodic story beat shaped by the player's choices, not a neutral score screen.

- **REPAIR / 閉じたノートに、まだ余白が残っている**
  - Player pattern: 好意はあったが、形式や最適解を急ぎすぎてアオイの思考の自由を狭めた
  - Epilogue: アオイは穏やかに別れるけれど、帰り際にノートを開かない。感情を急いで定義されたり、正解探しで近づかれた違和感が残っている。次に会うなら、まず彼女を攻略対象ではなく、一緒に考える相手として扱い直したい。
  - Finale line: 「今日は少し整理して帰る。でも、会話を消したいわけではない。」
  - Finale memory bridge: 観察しながら近づいた記憶として残った今回の接し方が、この最後の表情を少し変えている。アオイは、あなたが自分を理解しようとしていることを感じている。次は攻略ではなく、一緒に考え続けたいという意思を見せたい。
  - Next-run mission: 次回は感情の即答を迫らず、沈黙や保留を肯定する選択を3回以上入れる。
  - Finale next beat: 次回は答えを急がず、アオイの保留を関係の余白として扱い直す。
  - Character CG cue: 深夜カフェ、閉じたノート、冷めかけたコーヒー、アオイが視線を少し外す
  - Finale CG cue: 深夜カフェ、閉じたノートと半券、アオイが考え込む横顔。科学館、錯視展示、ミニシアター、深夜カフェ、天文台。青い光と静かな余白で思考の距離を見せる。
- **RECONNECT / 解析を止めて、隣に戻る**
  - Player pattern: 分析の順番を直し、アオイを観察対象ではなく恋の相手として扱い直した
  - Epilogue: あなたは原因分析を一度止め、アオイが本当に欲しかった距離へ戻った。彼女は短く『それなら続けられる』と言う。修復とは、正しい答えを出すことではなく、対象化しすぎた視線を隣の位置へ戻すことだった。
  - Finale line: 「分析を止めて戻ってきてくれたの、ちゃんと分かった。」
  - Finale memory bridge: 観察しながら近づいた記憶として残った今回の接し方が、この最後の表情を少し変えている。アオイは、あなたが自分を理解しようとしていることを感じている。次は攻略ではなく、一緒に考え続けたいという意思を見せたい。
  - Next-run mission: 次回は衝突後、原因説明より先に感情を受け取る選択を入れる。
  - Finale next beat: 感情を改善対象にする前に、近くにいる順番を守る。
  - Character CG cue: カフェの窓際、閉じたノートの横でアオイの目元が少しほどける
  - Finale CG cue: カフェの窓際、アオイがノートを閉じたまま少しだけ目を合わせる。科学館、錯視展示、ミニシアター、深夜カフェ、天文台。青い光と静かな余白で思考の距離を見せる。
- **SPARK / 仮説は楽しい。次は確度を上げたい**
  - Player pattern: 会話の火花は強かったが、関係の確度を上げる一言がもう少し必要だった
  - Epilogue: アオイはあなたとの知的な遊びをかなり楽しんでいる。ただ、仮説のままでは恋は始まりきらない。次はその軽い火花に、短い好意と負担の少ない次の約束を添えたい。
  - Finale line: 「あなたと話すと、仮説が増える。困るけど、たぶん楽しい。」
  - Finale memory bridge: 観察しながら近づいた記憶として残った今回の接し方が、この最後の表情を少し変えている。アオイは、あなたが自分を理解しようとしていることを感じている。次は攻略ではなく、一緒に考え続けたいという意思を見せたい。
  - Next-run mission: 次回はplayfulで温度を上げた後、終盤で明確な好きや次の接点を置く。
  - Finale next beat: 知的な火花を、短い好意と次の約束で確度のある恋へ変える。
  - Character CG cue: 天文台の屋上、望遠鏡の横でアオイが少し照れて笑う、青い夜光
  - Finale CG cue: 天文台の屋上、望遠鏡の横でアオイが照れたように笑う。科学館、錯視展示、ミニシアター、深夜カフェ、天文台。青い光と静かな余白で思考の距離を見せる。
- **TRUST / 考える余白は守られた。次は好意も置きたい**
  - Player pattern: 思考の自由を守れたが、恋愛温度を明確にする一手が控えめだった
  - Epilogue: アオイは、あなたが沈黙や保留を尊重してくれる人だと分かった。ただ、安心だけでは研究仲間に近い。次は、考える自由を守ったまま、あなた自身の好意を短く明確に差し出したい。
  - Finale line: 「考える時間をくれる人は貴重。だから次は、あなたの答えも聞きたい。」
  - Finale memory bridge: 観察しながら近づいた記憶として残った今回の接し方が、この最後の表情を少し変えている。アオイは、あなたが自分を理解しようとしていることを感じている。次は攻略ではなく、一緒に考え続けたいという意思を見せたい。
  - Next-run mission: 次回はsafeを軸にしつつ、各デートの終盤で自分の好意を一文置く。
  - Finale next beat: 安心の余白に、自分の好きという主語を短く置く。
  - Character CG cue: 科学館の展示室、アオイが半券を見ながらこちらの言葉を待つ静かな表情
  - Finale CG cue: 科学館の展示室、アオイが半券を指先で持ちこちらを待つ。科学館、錯視展示、ミニシアター、深夜カフェ、天文台。青い光と静かな余白で思考の距離を見せる。
- **BALANCE / 答えの出ない問いを、二人で持ち帰る**
  - Player pattern: 思考の自由、感情の順番、独自の好意表現をすべて尊重できた
  - Epilogue: あなたはアオイの仮説に乗り、感情を分析しすぎた時には戻り、最後は彼女の独特な告白をそのまま受け取った。恋人という言葉はまだ少し照れる。でも二人なら、答えの出ない問いを急がず持ち続けられる。
  - Finale line: 「結論はまだ増えると思う。でも、あなたと続けたい確度は高い。」
  - Finale memory bridge: 観察しながら近づいた記憶として残った今回の接し方が、この最後の表情を少し変えている。アオイは、あなたが自分を理解しようとしていることを感じている。次は攻略ではなく、一緒に考え続けたいという意思を見せたい。
  - Next-run mission: 次回は3つの心理スイッチを解放し、告白後に負担の少ない明日の接点を置く。
  - Finale next beat: 答えの出ない問いを二人で持ち、明日の小さな連絡へ続ける。
  - Character CG cue: 帰りのホーム、半券と星図、アオイが小さく笑いながら電車を待つ
  - Finale CG cue: 帰りのホーム、青い星図と半券、アオイの静かな笑顔。科学館、錯視展示、ミニシアター、深夜カフェ、天文台。青い光と静かな余白で思考の距離を見せる。

### Psychological Switches

- **思考の自由**
  - Opens: 仮説や保留を、逃げではなくアオイの自然な接近方法として扱う
  - Hurts: 普通は、考えすぎ、つまり好きなの、などで思考を止める
  - Tell: 言葉を選ぶ時間が長くても、視線は展示や半券に残っている
- **感情の非対象化**
  - Opens: 原因分析より先に、寂しさや不安を近くで受け取る
  - Hurts: 改善点や原因だけを整理し、アオイ自身を観察対象にする
  - Tell: ノートやスマホを閉じ、会話の温度を確かめるように間を置く
- **独自言語の告白**
  - Opens: 好きという形式に直させず、アオイなりの確度や継続意思をそのまま受け取る
  - Hurts: 普通の告白や連絡頻度を要求し、関係を早く仕様化する
  - Tell: 照れ隠しのように用語を選びながら、逃げずにこちらを見る

### Reading Cues

- Signal: 問いを投げたあと、すぐ答えずに展示や半券を見ている
  - Good read: 無関心ではなく、考える余白を使っていると読む
  - Misread: 気まずい、退屈、脈なしと早合点して話題を変える
  - Player question: 沈黙を不安で埋めず、思考の余白として残せているか？
- Signal: 感情の話になると、原因や構造の言葉に逃げる
  - Good read: 分析の裏にある近くにいてほしい気持ちを拾う
  - Misread: 分析が正しければ安心するはず、とさらに説明を重ねる
  - Player question: 正しさより先に、今の気持ちを受け取っているか？
- Signal: 好意を確度、観測、続けたいなど独特な言い方で出す
  - Good read: 言い直させず、その表現ごと告白として受け取る
  - Misread: ちゃんと好きって言って、と形式を要求する
  - Player question: 普通の恋愛語彙ではなく、アオイの言葉で届いているか？

### Inner Layer

- Public mask: 淡々として見えるが、本当は自分の考え方を否定されることに敏感。
- Fear: 理屈っぽい、冷たい、普通じゃないと切られ、好意の表現形式まで直されること。
- Opens when: 考える時間を尊重され、独特な言葉のまま受け取ってもらえた時。
- Closes when: 感情の即答や普通の恋愛らしさを要求され、思考の自由を狭められた時。
- Private wish: 答えが出ない問いを、面倒がらずに一緒に持ってくれる人がいい。
- Confession need: 自分の言い方を告白として成立させてもらい、相手からは短く明確な好きが返ること。

### Persona

- Summary: 考える自由と知的な遊びを大切にするタイプ。感情を急に詰められるより、自然な興味でつながるほうが安心します。
- Needs: 独立性 / 知的な配慮 / 誠実さ
- Conflict: 問題を論理的に解こうとして、相手の感情を置き去りにしがち。
- Reassurance: 知的な対話、肯定的な言葉、考える時間の尊重。
- Good lines: その仮説、面白い。もう少し聞きたい / 答えを急がなくていいよ / 一緒に考えるの楽しい
- Bad lines: で、好きなの？今決めて / 理屈っぽいね / 普通にして

### Story Arc

#### 出会い: 閉館前の科学館

Purpose: アオイの知的好奇心に、評価ではなく一緒に考える姿勢で入る

1. **初めての出会い**
   - Location: 閉館前の科学館ロビー、揺れるフーコーの振り子と二人分のチケット
   - Scene goal: 場所選びを変わっていると評価せず、好奇心を共有する
   - Active switch: 思考の自由 / opens when 仮説や保留を、逃げではなくアオイの自然な接近方法として扱う
   - Switch tell: 言葉を選ぶ時間が長くても、視線は展示や半券に残っている
   - Dramaturgy: 入口 / 思考の自由: 第一印象の安全確認
   - Player move: 仮説や保留を、逃げではなくアオイの自然な接近方法として扱う。相手のテンポを観察し、いきなり型にはめない
   - Love contract: 入る / 表面は「初めての出会い」の会話。でも本当は、第一印象の安全確認を通して思考の自由を見られている。
   - Hidden ask: 仮説や保留を、逃げではなくアオイの自然な接近方法として扱うことで、思考の自由と感情の順番を大切にすること
   - Heart key: 思考の自由 / clue 言葉を選ぶ時間が長くても、視線は展示や半券に残っている / unlock by 仮説や保留を、逃げではなくアオイの自然な接近方法として扱う
   - Tempting wrong move: 普通の恋愛らしさを急ぐと、攻略されているように見える。
   - Winning move: 思考の自由が守られ、会話が恋愛の温度へゆっくり接続される。
   - Unsaid safe subtext: 口にしない安心 / 言葉を選ぶ時間が長くても、視線は展示や半券に残っている。「答えが出ない問いを、面倒がらずに一緒に持ってくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 言葉を選ぶ時間が長くても、視線は展示や半券に残っている。楽しい温度は届いている。次は「自分の言い方を告白として成立させてもらい、相手からは短く明確な好きが返ること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 普通は、考えすぎ、つまり好きなの、などで思考を止めるように響き、「理屈っぽい、冷たい、普通じゃないと切られ、好意の表現形式まで直されること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: OBSERVE / 観察
   - Player lesson: 相手の緊張・視線・距離を読む。最初の正解は盛り上げることではなく、入っていい速度を測ること。
   - Tactical read: OBSERVE / 結論を急がない
   - Preferred move: concrete / empathize
   - Risky move: pushy / dismiss
   - Tactical note: アオイは好意を仮説や観察として出す。答えを迫らず、一緒に考える姿勢が入口になる。
   - Payoff: 心理スイッチ「思考の自由」が開くと、次の本音に進みやすい。仮説や保留を、逃げではなくアオイの自然な接近方法として扱うこと。
   - Trap: 普通は、考えすぎ、つまり好きなの、などで思考を止めると、場面の目的「場所選びを変わっていると評価せず、好奇心を共有する」から外れる。

2. **展示の前で仮説が始まる**
   - Location: 錯視展示の前、光るパネルと並んだ二人の影
   - Scene goal: 知的な話題を恋愛の温度にゆっくり接続する
   - Active switch: 思考の自由 / opens when 仮説や保留を、逃げではなくアオイの自然な接近方法として扱う
   - Switch tell: 言葉を選ぶ時間が長くても、視線は展示や半券に残っている
   - Dramaturgy: 輪郭 / 思考の自由: 自分の軸を少し見せる
   - Player move: 仮説や保留を、逃げではなくアオイの自然な接近方法として扱う。聞き役に逃げず、相手が判断できる材料を出す
   - Love contract: 入る / 表面は「展示の前で仮説が始まる」の会話。でも本当は、自分の軸を少し見せるを通して思考の自由を見られている。
   - Hidden ask: 仮説や保留を、逃げではなくアオイの自然な接近方法として扱うことで、思考の自由と感情の順番を大切にすること
   - Heart key: 思考の自由 / clue 言葉を選ぶ時間が長くても、視線は展示や半券に残っている / unlock by 仮説や保留を、逃げではなくアオイの自然な接近方法として扱う
   - Tempting wrong move: 普通の恋愛らしさを急ぐと、攻略されているように見える。
   - Winning move: 思考の自由が守られ、会話が恋愛の温度へゆっくり接続される。
   - Unsaid safe subtext: 口にしない安心 / 言葉を選ぶ時間が長くても、視線は展示や半券に残っている。「答えが出ない問いを、面倒がらずに一緒に持ってくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 言葉を選ぶ時間が長くても、視線は展示や半券に残っている。楽しい温度は届いている。次は「自分の言い方を告白として成立させてもらい、相手からは短く明確な好きが返ること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 普通は、考えすぎ、つまり好きなの、などで思考を止めるように響き、「理屈っぽい、冷たい、普通じゃないと切られ、好意の表現形式まで直されること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: OPEN / 自己開示
   - Player lesson: 聞くだけでなく、自分の基準を一つ渡す。相手があなたを判断できる材料を作る。
   - Tactical read: OPEN / 結論を急がない
   - Preferred move: concrete / empathize
   - Risky move: pushy / dismiss
   - Tactical note: アオイは好意を仮説や観察として出す。答えを迫らず、一緒に考える姿勢が入口になる。
   - Payoff: 心理スイッチ「思考の自由」が開くと、次の本音に進みやすい。仮説や保留を、逃げではなくアオイの自然な接近方法として扱うこと。
   - Trap: 普通は、考えすぎ、つまり好きなの、などで思考を止めると、場面の目的「知的な話題を恋愛の温度にゆっくり接続する」から外れる。

3. **初めて少し笑う瞬間**
   - Location: 宇宙展示の暗い通路、星図の光と空いたベンチ
   - Scene goal: アオイの照れ隠しを拾い、深刻にしすぎない
   - Active switch: 思考の自由 / opens when 仮説や保留を、逃げではなくアオイの自然な接近方法として扱う
   - Switch tell: 言葉を選ぶ時間が長くても、視線は展示や半券に残っている
   - Dramaturgy: ほころび / 思考の自由: 表情がゆるむ瞬間
   - Player move: 仮説や保留を、逃げではなくアオイの自然な接近方法として扱う。笑いを取りに行くより、警戒がほどけた理由を守る
   - Love contract: 入る / 表面は「初めて少し笑う瞬間」の会話。でも本当は、表情がゆるむ瞬間を通して思考の自由を見られている。
   - Hidden ask: 仮説や保留を、逃げではなくアオイの自然な接近方法として扱うことで、思考の自由と感情の順番を大切にすること
   - Heart key: 思考の自由 / clue 言葉を選ぶ時間が長くても、視線は展示や半券に残っている / unlock by 仮説や保留を、逃げではなくアオイの自然な接近方法として扱う
   - Tempting wrong move: 普通の恋愛らしさを急ぐと、攻略されているように見える。
   - Winning move: 思考の自由が守られ、会話が恋愛の温度へゆっくり接続される。
   - Unsaid safe subtext: 口にしない安心 / 言葉を選ぶ時間が長くても、視線は展示や半券に残っている。「答えが出ない問いを、面倒がらずに一緒に持ってくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 言葉を選ぶ時間が長くても、視線は展示や半券に残っている。楽しい温度は届いている。次は「自分の言い方を告白として成立させてもらい、相手からは短く明確な好きが返ること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 普通は、考えすぎ、つまり好きなの、などで思考を止めるように響き、「理屈っぽい、冷たい、普通じゃないと切られ、好意の表現形式まで直されること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: SYNC / 温度合わせ
   - Player lesson: 笑った理由を守る。冗談は距離を縮めるが、相手を素材にしない。
   - Tactical read: SYNC / 結論を急がない
   - Preferred move: concrete / empathize
   - Risky move: pushy / dismiss
   - Tactical note: アオイは好意を仮説や観察として出す。答えを迫らず、一緒に考える姿勢が入口になる。
   - Payoff: 心理スイッチ「思考の自由」が開くと、次の本音に進みやすい。仮説や保留を、逃げではなくアオイの自然な接近方法として扱うこと。
   - Trap: 普通は、考えすぎ、つまり好きなの、などで思考を止めると、場面の目的「アオイの照れ隠しを拾い、深刻にしすぎない」から外れる。

4. **沈黙の展示室**
   - Location: 音のない展示室、反射するガラスケースと小さな説明文
   - Scene goal: 沈黙を不安で埋めず、共有できる時間にする
   - Active switch: 思考の自由 / opens when 仮説や保留を、逃げではなくアオイの自然な接近方法として扱う
   - Switch tell: 言葉を選ぶ時間が長くても、視線は展示や半券に残っている
   - Dramaturgy: 価値観 / 思考の自由: 恋愛観や生活観の違い
   - Player move: 仮説や保留を、逃げではなくアオイの自然な接近方法として扱う。反論ではなく、相手の言葉の芯を確認する
   - Love contract: 近づく / 表面は「沈黙の展示室」の会話。でも本当は、恋愛観や生活観の違いを通して思考の自由を見られている。
   - Hidden ask: 仮説や保留を、逃げではなくアオイの自然な接近方法として扱うことで、思考の自由と感情の順番を大切にすること
   - Heart key: 思考の自由 / clue 言葉を選ぶ時間が長くても、視線は展示や半券に残っている / unlock by 仮説や保留を、逃げではなくアオイの自然な接近方法として扱う
   - Tempting wrong move: 普通の恋愛らしさを急ぐと、攻略されているように見える。
   - Winning move: 思考の自由が守られ、会話が恋愛の温度へゆっくり接続される。
   - Unsaid safe subtext: 口にしない安心 / 言葉を選ぶ時間が長くても、視線は展示や半券に残っている。「答えが出ない問いを、面倒がらずに一緒に持ってくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 言葉を選ぶ時間が長くても、視線は展示や半券に残っている。楽しい温度は届いている。次は「自分の言い方を告白として成立させてもらい、相手からは短く明確な好きが返ること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 普通は、考えすぎ、つまり好きなの、などで思考を止めるように響き、「理屈っぽい、冷たい、普通じゃないと切られ、好意の表現形式まで直されること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: VALUE / 価値観翻訳
   - Player lesson: 違いを否定せず、相手が何を守ろうとしているかを言葉にする。
   - Tactical read: VALUE / 結論を急がない
   - Preferred move: concrete / empathize
   - Risky move: pushy / dismiss
   - Tactical note: アオイは好意を仮説や観察として出す。答えを迫らず、一緒に考える姿勢が入口になる。
   - Payoff: 心理スイッチ「思考の自由」が開くと、次の本音に進みやすい。仮説や保留を、逃げではなくアオイの自然な接近方法として扱うこと。
   - Trap: 普通は、考えすぎ、つまり好きなの、などで思考を止めると、場面の目的「沈黙を不安で埋めず、共有できる時間にする」から外れる。

5. **次の約束**
   - Location: 科学館の出口、閉館アナウンスと手元のパンフレット
   - Scene goal: 次の誘いを具体化しつつ、関係の定義を急がない
   - Active switch: 思考の自由 / opens when 仮説や保留を、逃げではなくアオイの自然な接近方法として扱う
   - Switch tell: 言葉を選ぶ時間が長くても、視線は展示や半券に残っている
   - Dramaturgy: 小さなズレ / 思考の自由: 受け取り違いの修正
   - Player move: 仮説や保留を、逃げではなくアオイの自然な接近方法として扱う。勝ち負けにせず、何がずれたかを再接続する
   - Love contract: 近づく / 表面は「次の約束」の会話。でも本当は、受け取り違いの修正を通して思考の自由を見られている。
   - Hidden ask: 仮説や保留を、逃げではなくアオイの自然な接近方法として扱うことで、思考の自由と感情の順番を大切にすること
   - Heart key: 思考の自由 / clue 言葉を選ぶ時間が長くても、視線は展示や半券に残っている / unlock by 仮説や保留を、逃げではなくアオイの自然な接近方法として扱う
   - Tempting wrong move: 普通の恋愛らしさを急ぐと、攻略されているように見える。
   - Winning move: 思考の自由が守られ、会話が恋愛の温度へゆっくり接続される。
   - Unsaid safe subtext: 口にしない安心 / 言葉を選ぶ時間が長くても、視線は展示や半券に残っている。「答えが出ない問いを、面倒がらずに一緒に持ってくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 言葉を選ぶ時間が長くても、視線は展示や半券に残っている。楽しい温度は届いている。次は「自分の言い方を告白として成立させてもらい、相手からは短く明確な好きが返ること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 普通は、考えすぎ、つまり好きなの、などで思考を止めるように響き、「理屈っぽい、冷たい、普通じゃないと切られ、好意の表現形式まで直されること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: REPAIR / 修復
   - Player lesson: ズレを勝ち負けにしない。相手の論点を小さく扱わず、受け取り直す。
   - Tactical read: REPAIR / 結論を急がない
   - Preferred move: concrete / empathize
   - Risky move: pushy / dismiss
   - Tactical note: アオイは好意を仮説や観察として出す。答えを迫らず、一緒に考える姿勢が入口になる。
   - Payoff: 心理スイッチ「思考の自由」が開くと、次の本音に進みやすい。仮説や保留を、逃げではなくアオイの自然な接近方法として扱うこと。
   - Trap: 普通は、考えすぎ、つまり好きなの、などで思考を止めると、場面の目的「次の誘いを具体化しつつ、関係の定義を急がない」から外れる。

#### 考察: ミニシアターと深夜カフェ

Purpose: 知的な接続を恋愛温度へ変え、感情を分析しすぎない

6. **映画後の考察**
   - Location: ミニシアターの外、半券と小さなポスター
   - Scene goal: 感情の感想を強要せず、解釈の違いを楽しむ
   - Active switch: 思考の自由 / opens when 仮説や保留を、逃げではなくアオイの自然な接近方法として扱う
   - Switch tell: 言葉を選ぶ時間が長くても、視線は展示や半券に残っている
   - Dramaturgy: 核 / 思考の自由: 相手の大事な基準
   - Player move: 仮説や保留を、逃げではなくアオイの自然な接近方法として扱う。厳しさや明るさの裏にある願いを言語化する
   - Love contract: 近づく / 表面は「映画後の考察」の会話。でも本当は、相手の大事な基準を通して思考の自由を見られている。
   - Hidden ask: 仮説や保留を、逃げではなくアオイの自然な接近方法として扱うことで、思考の自由と感情の順番を大切にすること
   - Heart key: 思考の自由 / clue 言葉を選ぶ時間が長くても、視線は展示や半券に残っている / unlock by 仮説や保留を、逃げではなくアオイの自然な接近方法として扱う
   - Tempting wrong move: 普通の恋愛らしさを急ぐと、攻略されているように見える。
   - Winning move: 思考の自由が守られ、会話が恋愛の温度へゆっくり接続される。
   - Unsaid safe subtext: 口にしない安心 / 言葉を選ぶ時間が長くても、視線は展示や半券に残っている。「答えが出ない問いを、面倒がらずに一緒に持ってくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 言葉を選ぶ時間が長くても、視線は展示や半券に残っている。楽しい温度は届いている。次は「自分の言い方を告白として成立させてもらい、相手からは短く明確な好きが返ること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 普通は、考えすぎ、つまり好きなの、などで思考を止めるように響き、「理屈っぽい、冷たい、普通じゃないと切られ、好意の表現形式まで直されること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: CORE / 芯を見る
   - Player lesson: 強さ・明るさ・慎重さの裏にある願いを拾う。褒めるなら性格の芯を褒める。
   - Tactical read: CORE / 結論を急がない
   - Preferred move: concrete / empathize
   - Risky move: pushy / dismiss
   - Tactical note: アオイは好意を仮説や観察として出す。答えを迫らず、一緒に考える姿勢が入口になる。
   - Payoff: 心理スイッチ「思考の自由」が開くと、次の本音に進みやすい。仮説や保留を、逃げではなくアオイの自然な接近方法として扱うこと。
   - Trap: 普通は、考えすぎ、つまり好きなの、などで思考を止めると、場面の目的「感情の感想を強要せず、解釈の違いを楽しむ」から外れる。

7. **深夜カフェの議論**
   - Location: 深夜営業のカフェ、ノートに描かれた相関図と二つのマグ
   - Scene goal: 知的な安心を、好意の入口として扱う
   - Active switch: 感情の非対象化 / opens when 原因分析より先に、寂しさや不安を近くで受け取る
   - Switch tell: ノートやスマホを閉じ、会話の温度を確かめるように間を置く
   - Dramaturgy: 夜 / 感情の非対象化: 本音が出やすい空気
   - Player move: 原因分析より先に、寂しさや不安を近くで受け取る。ムードに頼り切らず、選択肢を残す
   - Love contract: 近づく / 表面は「深夜カフェの議論」の会話。でも本当は、本音が出やすい空気を通して感情の非対象化を見られている。
   - Hidden ask: 原因分析より先に、寂しさや不安を近くで受け取ることで、思考の自由と感情の順番を大切にすること
   - Heart key: 感情の非対象化 / clue ノートやスマホを閉じ、会話の温度を確かめるように間を置く / unlock by 原因分析より先に、寂しさや不安を近くで受け取る
   - Tempting wrong move: 普通の恋愛らしさを急ぐと、攻略されているように見える。
   - Winning move: 思考の自由が守られ、会話が恋愛の温度へゆっくり接続される。
   - Unsaid safe subtext: 口にしない安心 / ノートやスマホを閉じ、会話の温度を確かめるように間を置く。「答えが出ない問いを、面倒がらずに一緒に持ってくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / ノートやスマホを閉じ、会話の温度を確かめるように間を置く。楽しい温度は届いている。次は「自分の言い方を告白として成立させてもらい、相手からは短く明確な好きが返ること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 改善点や原因だけを整理し、アオイ自身を観察対象にするように響き、「理屈っぽい、冷たい、普通じゃないと切られ、好意の表現形式まで直されること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: SPACE / 余白作り
   - Player lesson: ムードに流されすぎず、相手が選べる余地を残す。近づくほど境界線を丁寧に。
   - Tactical read: SPACE / 結論を急がない
   - Preferred move: concrete / empathize
   - Risky move: pushy / dismiss
   - Tactical note: アオイは好意を仮説や観察として出す。答えを迫らず、一緒に考える姿勢が入口になる。
   - Payoff: 心理スイッチ「感情の非対象化」が開くと、次の本音に進みやすい。原因分析より先に、寂しさや不安を近くで受け取ること。
   - Trap: 改善点や原因だけを整理し、アオイ自身を観察対象にすると、場面の目的「知的な安心を、好意の入口として扱う」から外れる。

8. **感情を分析しすぎるすれ違い**
   - Location: カフェの窓際、冷めかけたコーヒーと閉じたノート
   - Scene goal: 分析の正しさより先に、寂しさを近くで受け取る
   - Active switch: 感情の非対象化 / opens when 原因分析より先に、寂しさや不安を近くで受け取る
   - Switch tell: ノートやスマホを閉じ、会話の温度を確かめるように間を置く
   - Dramaturgy: 誘い / 感情の非対象化: 次に進む意思表示
   - Player move: 原因分析より先に、寂しさや不安を近くで受け取る。好意だけでなく、現実の行動へ落とす
   - Love contract: 近づく / 表面は「感情を分析しすぎるすれ違い」の会話。でも本当は、次に進む意思表示を通して感情の非対象化を見られている。
   - Hidden ask: 原因分析より先に、寂しさや不安を近くで受け取ることで、思考の自由と感情の順番を大切にすること
   - Heart key: 感情の非対象化 / clue ノートやスマホを閉じ、会話の温度を確かめるように間を置く / unlock by 原因分析より先に、寂しさや不安を近くで受け取る
   - Tempting wrong move: 普通の恋愛らしさを急ぐと、攻略されているように見える。
   - Winning move: 思考の自由が守られ、会話が恋愛の温度へゆっくり接続される。
   - Unsaid safe subtext: 口にしない安心 / ノートやスマホを閉じ、会話の温度を確かめるように間を置く。「答えが出ない問いを、面倒がらずに一緒に持ってくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / ノートやスマホを閉じ、会話の温度を確かめるように間を置く。楽しい温度は届いている。次は「自分の言い方を告白として成立させてもらい、相手からは短く明確な好きが返ること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 改善点や原因だけを整理し、アオイ自身を観察対象にするように響き、「理屈っぽい、冷たい、普通じゃないと切られ、好意の表現形式まで直されること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: MOVE / 次へ進める
   - Player lesson: 気持ちを行動に落とす。曖昧な好意を、次の約束や選択肢に変える。
   - Tactical read: MOVE / 結論を急がない
   - Preferred move: concrete / empathize
   - Risky move: pushy / dismiss
   - Tactical note: アオイは好意を仮説や観察として出す。答えを迫らず、一緒に考える姿勢が入口になる。
   - Payoff: 心理スイッチ「感情の非対象化」が開くと、次の本音に進みやすい。原因分析より先に、寂しさや不安を近くで受け取ること。
   - Trap: 改善点や原因だけを整理し、アオイ自身を観察対象にすると、場面の目的「分析の正しさより先に、寂しさを近くで受け取る」から外れる。

9. **ひとり時間の扱い**
   - Location: 駅へ向かう静かな道、スマホに未読通知
   - Scene goal: 一人時間を拒絶と誤読せず、次の接続を残す
   - Active switch: 感情の非対象化 / opens when 原因分析より先に、寂しさや不安を近くで受け取る
   - Switch tell: ノートやスマホを閉じ、会話の温度を確かめるように間を置く
   - Dramaturgy: 準備 / 感情の非対象化: 相手の好みを覚えている証拠
   - Player move: 原因分析より先に、寂しさや不安を近くで受け取る。攻略感ではなく観察と敬意として見せる
   - Love contract: 近づく / 表面は「ひとり時間の扱い」の会話。でも本当は、相手の好みを覚えている証拠を通して感情の非対象化を見られている。
   - Hidden ask: 原因分析より先に、寂しさや不安を近くで受け取ることで、思考の自由と感情の順番を大切にすること
   - Heart key: 感情の非対象化 / clue ノートやスマホを閉じ、会話の温度を確かめるように間を置く / unlock by 原因分析より先に、寂しさや不安を近くで受け取る
   - Tempting wrong move: 普通の恋愛らしさを急ぐと、攻略されているように見える。
   - Winning move: 思考の自由が守られ、会話が恋愛の温度へゆっくり接続される。
   - Unsaid safe subtext: 口にしない安心 / ノートやスマホを閉じ、会話の温度を確かめるように間を置く。「答えが出ない問いを、面倒がらずに一緒に持ってくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / ノートやスマホを閉じ、会話の温度を確かめるように間を置く。楽しい温度は届いている。次は「自分の言い方を告白として成立させてもらい、相手からは短く明確な好きが返ること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 改善点や原因だけを整理し、アオイ自身を観察対象にするように響き、「理屈っぽい、冷たい、普通じゃないと切られ、好意の表現形式まで直されること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: REMEMBER / 記憶を使う
   - Player lesson: 前に聞いた好みや不安を覚えていると示す。攻略感ではなく敬意として出す。
   - Tactical read: REMEMBER / 結論を急がない
   - Preferred move: concrete / empathize
   - Risky move: pushy / dismiss
   - Tactical note: アオイは好意を仮説や観察として出す。答えを迫らず、一緒に考える姿勢が入口になる。
   - Payoff: 心理スイッチ「感情の非対象化」が開くと、次の本音に進みやすい。原因分析より先に、寂しさや不安を近くで受け取ること。
   - Trap: 改善点や原因だけを整理し、アオイ自身を観察対象にすると、場面の目的「一人時間を拒絶と誤読せず、次の接続を残す」から外れる。

10. **三回目の誘い**
   - Location: 駅前の改札、終電前の静かな電光掲示板
   - Scene goal: 知的な理由と恋愛の温度を両方残して誘いに乗る
   - Active switch: 感情の非対象化 / opens when 原因分析より先に、寂しさや不安を近くで受け取る
   - Switch tell: ノートやスマホを閉じ、会話の温度を確かめるように間を置く
   - Dramaturgy: 接近 / 感情の非対象化: 甘さと境界線の同時処理
   - Player move: 原因分析より先に、寂しさや不安を近くで受け取る。近づくほど相手の主導権を奪わない
   - Love contract: 近づく / 表面は「三回目の誘い」の会話。でも本当は、甘さと境界線の同時処理を通して感情の非対象化を見られている。
   - Hidden ask: 原因分析より先に、寂しさや不安を近くで受け取ることで、思考の自由と感情の順番を大切にすること
   - Heart key: 感情の非対象化 / clue ノートやスマホを閉じ、会話の温度を確かめるように間を置く / unlock by 原因分析より先に、寂しさや不安を近くで受け取る
   - Tempting wrong move: 普通の恋愛らしさを急ぐと、攻略されているように見える。
   - Winning move: 思考の自由が守られ、会話が恋愛の温度へゆっくり接続される。
   - Unsaid safe subtext: 口にしない安心 / ノートやスマホを閉じ、会話の温度を確かめるように間を置く。「答えが出ない問いを、面倒がらずに一緒に持ってくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / ノートやスマホを閉じ、会話の温度を確かめるように間を置く。楽しい温度は届いている。次は「自分の言い方を告白として成立させてもらい、相手からは短く明確な好きが返ること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 改善点や原因だけを整理し、アオイ自身を観察対象にするように響き、「理屈っぽい、冷たい、普通じゃないと切られ、好意の表現形式まで直されること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: CLOSER / 接近の調整
   - Player lesson: 甘さを出しつつ、相手の主導権を奪わない。攻める場面ほど逃げ道を残す。
   - Tactical read: CLOSER / 結論を急がない
   - Preferred move: concrete / empathize
   - Risky move: pushy / dismiss
   - Tactical note: アオイは好意を仮説や観察として出す。答えを迫らず、一緒に考える姿勢が入口になる。
   - Payoff: 心理スイッチ「感情の非対象化」が開くと、次の本音に進みやすい。原因分析より先に、寂しさや不安を近くで受け取ること。
   - Trap: 改善点や原因だけを整理し、アオイ自身を観察対象にすると、場面の目的「知的な理由と恋愛の温度を両方残して誘いに乗る」から外れる。

#### 告白前: 天文台の夜

Purpose: 答えの出ない問いを一緒に持ち、好意を短く現実へ置く

11. **夜間公開の列**
   - Location: 天文台の入口、赤い誘導灯と二人分の整理券
   - Scene goal: 負荷を軽視せず、退避できる安心を作る
   - Active switch: 感情の非対象化 / opens when 原因分析より先に、寂しさや不安を近くで受け取る
   - Switch tell: ノートやスマホを閉じ、会話の温度を確かめるように間を置く
   - Dramaturgy: 衝突 / 感情の非対象化: 関係の扱い方が試される
   - Player move: 原因分析より先に、寂しさや不安を近くで受け取る。逃げではなく方法の違いとして伝える
   - Love contract: 戻す / 表面は「夜間公開の列」の会話。でも本当は、関係の扱い方が試されるを通して感情の非対象化を見られている。
   - Hidden ask: ズレた時に、改善点や原因だけを整理し、アオイ自身を観察対象にするで済ませず関係の扱い方を直すこと
   - Heart key: 感情の非対象化 / clue ノートやスマホを閉じ、会話の温度を確かめるように間を置く / unlock by 原因分析より先に、寂しさや不安を近くで受け取る
   - Tempting wrong move: 普通の恋愛らしさを急ぐと、攻略されているように見える。
   - Winning move: 思考の自由が守られ、会話が恋愛の温度へゆっくり接続される。
   - Unsaid safe subtext: 口にしない安心 / ノートやスマホを閉じ、会話の温度を確かめるように間を置く。「答えが出ない問いを、面倒がらずに一緒に持ってくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / ノートやスマホを閉じ、会話の温度を確かめるように間を置く。楽しい温度は届いている。次は「自分の言い方を告白として成立させてもらい、相手からは短く明確な好きが返ること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 改善点や原因だけを整理し、アオイ自身を観察対象にするように響き、「理屈っぽい、冷たい、普通じゃないと切られ、好意の表現形式まで直されること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: CONFLICT / 衝突運用
   - Player lesson: 揉めたことより、揉め方が見られている。解決速度と感情の安全を両立する。
   - Tactical read: CONFLICT / 分析を一度止める
   - Preferred move: empathize / concrete
   - Risky move: dismiss / pushy
   - Tactical note: 衝突では原因分析より先に、寂しさや違和感を近くで受け取る。正しさは二手目でいい。
   - Payoff: 心理スイッチ「感情の非対象化」が開くと、次の本音に進みやすい。原因分析より先に、寂しさや不安を近くで受け取ること。
   - Trap: 改善点や原因だけを整理し、アオイ自身を観察対象にすると、場面の目的「負荷を軽視せず、退避できる安心を作る」から外れる。

12. **望遠鏡を覗く**
   - Location: 屋上の望遠鏡、冬の星と吐く息の白さ
   - Scene goal: 珍しい好意の表現を、解説させずに受け取る
   - Active switch: 感情の非対象化 / opens when 原因分析より先に、寂しさや不安を近くで受け取る
   - Switch tell: ノートやスマホを閉じ、会話の温度を確かめるように間を置く
   - Dramaturgy: 本音 / 感情の非対象化: 弱さや怖さの開示
   - Player move: 原因分析より先に、寂しさや不安を近くで受け取る。保護ではなく信頼として受け取る
   - Love contract: 戻す / 表面は「望遠鏡を覗く」の会話。でも本当は、弱さや怖さの開示を通して感情の非対象化を見られている。
   - Hidden ask: ズレた時に、改善点や原因だけを整理し、アオイ自身を観察対象にするで済ませず関係の扱い方を直すこと
   - Heart key: 感情の非対象化 / clue ノートやスマホを閉じ、会話の温度を確かめるように間を置く / unlock by 原因分析より先に、寂しさや不安を近くで受け取る
   - Tempting wrong move: 普通の恋愛らしさを急ぐと、攻略されているように見える。
   - Winning move: 思考の自由が守られ、会話が恋愛の温度へゆっくり接続される。
   - Unsaid safe subtext: 口にしない安心 / ノートやスマホを閉じ、会話の温度を確かめるように間を置く。「答えが出ない問いを、面倒がらずに一緒に持ってくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / ノートやスマホを閉じ、会話の温度を確かめるように間を置く。楽しい温度は届いている。次は「自分の言い方を告白として成立させてもらい、相手からは短く明確な好きが返ること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 改善点や原因だけを整理し、アオイ自身を観察対象にするように響き、「理屈っぽい、冷たい、普通じゃないと切られ、好意の表現形式まで直されること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: TRUTH / 本音受容
   - Player lesson: 弱さを直さず、信頼として受け取る。守るより、軽く扱わない姿勢を見せる。
   - Tactical read: TRUTH / 対象化しない
   - Preferred move: empathize / playful
   - Risky move: pushy
   - Tactical note: 本音場面では、アオイを理解対象にしすぎない。自分の気持ちも短く置くと対等になる。
   - Payoff: 心理スイッチ「感情の非対象化」が開くと、次の本音に進みやすい。原因分析より先に、寂しさや不安を近くで受け取ること。
   - Trap: 改善点や原因だけを整理し、アオイ自身を観察対象にすると、場面の目的「珍しい好意の表現を、解説させずに受け取る」から外れる。

13. **小さな衝突**
   - Location: 屋上の隅、スマホの星座アプリと冷たい手すり
   - Scene goal: 攻略感を認め、最適化ではなく関係として向き合う
   - Active switch: 独自言語の告白 / opens when 好きという形式に直させず、アオイなりの確度や継続意思をそのまま受け取る
   - Switch tell: 照れ隠しのように用語を選びながら、逃げずにこちらを見る
   - Dramaturgy: 和解 / 独自言語の告白: 揉め方を学ぶ
   - Player move: 好きという形式に直させず、アオイなりの確度や継続意思をそのまま受け取る。雰囲気で流さず、次の扱い方を一つ決める
   - Love contract: 戻す / 表面は「小さな衝突」の会話。でも本当は、揉め方を学ぶを通して独自言語の告白を見られている。
   - Hidden ask: ズレた時に、普通の告白や連絡頻度を要求し、関係を早く仕様化するで済ませず関係の扱い方を直すこと
   - Heart key: 独自言語の告白 / clue 照れ隠しのように用語を選びながら、逃げずにこちらを見る / unlock by 好きという形式に直させず、アオイなりの確度や継続意思をそのまま受け取る
   - Tempting wrong move: 普通の恋愛らしさを急ぐと、攻略されているように見える。
   - Winning move: 思考の自由が守られ、会話が恋愛の温度へゆっくり接続される。
   - Unsaid safe subtext: 口にしない安心 / 照れ隠しのように用語を選びながら、逃げずにこちらを見る。「答えが出ない問いを、面倒がらずに一緒に持ってくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 照れ隠しのように用語を選びながら、逃げずにこちらを見る。楽しい温度は届いている。次は「自分の言い方を告白として成立させてもらい、相手からは短く明確な好きが返ること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 普通の告白や連絡頻度を要求し、関係を早く仕様化するように響き、「理屈っぽい、冷たい、普通じゃないと切られ、好意の表現形式まで直されること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: RESET / 再契約
   - Player lesson: 仲直りで終わらせず、次に同じズレが起きた時の扱い方を決める。
   - Tactical read: RESET / 結論を急がない
   - Preferred move: concrete / empathize
   - Risky move: pushy / dismiss
   - Tactical note: アオイは好意を仮説や観察として出す。答えを迫らず、一緒に考える姿勢が入口になる。
   - Payoff: 心理スイッチ「独自言語の告白」が開くと、次の本音に進みやすい。好きという形式に直させず、アオイなりの確度や継続意思をそのまま受け取ること。
   - Trap: 普通の告白や連絡頻度を要求し、関係を早く仕様化すると、場面の目的「攻略感を認め、最適化ではなく関係として向き合う」から外れる。

14. **告白前の静けさ**
   - Location: 天文台から少し離れた歩道、星の見えない曇り空
   - Scene goal: 予定外を失敗にせず、二人の記憶として意味づける
   - Active switch: 独自言語の告白 / opens when 好きという形式に直させず、アオイなりの確度や継続意思をそのまま受け取る
   - Switch tell: 照れ隠しのように用語を選びながら、逃げずにこちらを見る
   - Dramaturgy: 告白前 / 独自言語の告白: 緊張を守る
   - Player move: 好きという形式に直させず、アオイなりの確度や継続意思をそのまま受け取る。茶化しすぎず、聞く姿勢をはっきり見せる
   - Love contract: 決める / 表面は「告白前の静けさ」の会話。でも本当は、緊張を守るを通して独自言語の告白を見られている。
   - Hidden ask: 自分の言い方を告白として成立させてもらい、相手からは短く明確な好きが返ること。
   - Heart key: 独自言語の告白 / clue 照れ隠しのように用語を選びながら、逃げずにこちらを見る / unlock by 好きという形式に直させず、アオイなりの確度や継続意思をそのまま受け取る
   - Tempting wrong move: 普通の恋愛らしさを急ぐと、攻略されているように見える。
   - Winning move: 思考の自由が守られ、会話が恋愛の温度へゆっくり接続される。
   - Unsaid safe subtext: 口にしない安心 / 照れ隠しのように用語を選びながら、逃げずにこちらを見る。「答えが出ない問いを、面倒がらずに一緒に持ってくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 照れ隠しのように用語を選びながら、逃げずにこちらを見る。楽しい温度は届いている。次は「自分の言い方を告白として成立させてもらい、相手からは短く明確な好きが返ること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 普通の告白や連絡頻度を要求し、関係を早く仕様化するように響き、「理屈っぽい、冷たい、普通じゃないと切られ、好意の表現形式まで直されること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: READY / 緊張保持
   - Player lesson: 告白前の震えを茶化しすぎない。沈黙も相手の勇気の一部として扱う。
   - Tactical read: READY / 結論を急がない
   - Preferred move: concrete / empathize
   - Risky move: pushy / dismiss
   - Tactical note: アオイは好意を仮説や観察として出す。答えを迫らず、一緒に考える姿勢が入口になる。
   - Payoff: 心理スイッチ「独自言語の告白」が開くと、次の本音に進みやすい。好きという形式に直させず、アオイなりの確度や継続意思をそのまま受け取ること。
   - Trap: 普通の告白や連絡頻度を要求し、関係を早く仕様化すると、場面の目的「予定外を失敗にせず、二人の記憶として意味づける」から外れる。

15. **告白の瞬間**
   - Location: 駅前の静かな歩道、ポケットの中の半券
   - Scene goal: 独特な告白を、言い直させずにまっすぐ返す
   - Active switch: 独自言語の告白 / opens when 好きという形式に直させず、アオイなりの確度や継続意思をそのまま受け取る
   - Switch tell: 照れ隠しのように用語を選びながら、逃げずにこちらを見る
   - Dramaturgy: 告白 / 独自言語の告白: 関係の定義
   - Player move: 好きという形式に直させず、アオイなりの確度や継続意思をそのまま受け取る。曖昧さに逃げず、短くても主語を持って返す
   - Love contract: 決める / 表面は「告白の瞬間」の会話。でも本当は、関係の定義を通して独自言語の告白を見られている。
   - Hidden ask: 自分の言い方を告白として成立させてもらい、相手からは短く明確な好きが返ること。
   - Heart key: 独自言語の告白 / clue 照れ隠しのように用語を選びながら、逃げずにこちらを見る / unlock by 好きという形式に直させず、アオイなりの確度や継続意思をそのまま受け取る
   - Tempting wrong move: 普通の恋愛らしさを急ぐと、攻略されているように見える。
   - Winning move: 思考の自由が守られ、会話が恋愛の温度へゆっくり接続される。
   - Unsaid safe subtext: 口にしない安心 / 照れ隠しのように用語を選びながら、逃げずにこちらを見る。「答えが出ない問いを、面倒がらずに一緒に持ってくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 照れ隠しのように用語を選びながら、逃げずにこちらを見る。楽しい温度は届いている。次は「自分の言い方を告白として成立させてもらい、相手からは短く明確な好きが返ること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 普通の告白や連絡頻度を要求し、関係を早く仕様化するように響き、「理屈っぽい、冷たい、普通じゃないと切られ、好意の表現形式まで直されること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: COMMIT / 明確化
   - Player lesson: 返事を濁さない。好き・付き合いたい・考えたいを、主語つきで短く言う。
   - Tactical read: COMMIT / 独自の告白を成立させる
   - Preferred move: concrete / empathize
   - Risky move: pushy / dismiss
   - Tactical note: 告白では普通の言い方を要求しない。アオイの言葉を受け取り、自分の好きは明確に返す。
   - Payoff: 心理スイッチ「独自言語の告白」が開くと、次の本音に進みやすい。好きという形式に直させず、アオイなりの確度や継続意思をそのまま受け取ること。
   - Trap: 普通の告白や連絡頻度を要求し、関係を早く仕様化すると、場面の目的「独特な告白を、言い直させずにまっすぐ返す」から外れる。

16. **告白後の余韻**
   - Location: 帰りのホーム、電車待ちのベンチと二人分の影
   - Scene goal: 成立後も自由を守りながら、次の接点を約束する
   - Active switch: 独自言語の告白 / opens when 好きという形式に直させず、アオイなりの確度や継続意思をそのまま受け取る
   - Switch tell: 照れ隠しのように用語を選びながら、逃げずにこちらを見る
   - Dramaturgy: 余韻 / 成立した関係を雑に扱わない
   - Player move: 次の約束まで丁寧に置く
   - Love contract: 決める / 表面は「告白後の余韻」の会話。でも本当は、成立後の敬意を通して独自言語の告白を見られている。
   - Hidden ask: 自分の言い方を告白として成立させてもらい、相手からは短く明確な好きが返ること。
   - Heart key: 独自言語の告白 / clue 照れ隠しのように用語を選びながら、逃げずにこちらを見る / unlock by 好きという形式に直させず、アオイなりの確度や継続意思をそのまま受け取る
   - Tempting wrong move: 普通の恋愛らしさを急ぐと、攻略されているように見える。
   - Winning move: 思考の自由が守られ、会話が恋愛の温度へゆっくり接続される。
   - Unsaid safe subtext: 口にしない安心 / 照れ隠しのように用語を選びながら、逃げずにこちらを見る。「答えが出ない問いを、面倒がらずに一緒に持ってくれる人がいい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 照れ隠しのように用語を選びながら、逃げずにこちらを見る。楽しい温度は届いている。次は「自分の言い方を告白として成立させてもらい、相手からは短く明確な好きが返ること」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 普通の告白や連絡頻度を要求し、関係を早く仕様化するように響き、「理屈っぽい、冷たい、普通じゃないと切られ、好意の表現形式まで直されること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: AFTER / 余韻設計
   - Player lesson: 成立後こそ雑にしない。所有感ではなく、次の約束で大切に締める。
   - Tactical read: AFTER / 負担の少ない次を置く
   - Preferred move: concrete / playful
   - Risky move: pushy
   - Tactical note: 成立後は連絡頻度を仕様化しすぎず、明日一つ送るくらいの軽い具体性が効く。
   - Payoff: 心理スイッチ「独自言語の告白」が開くと、次の本音に進みやすい。好きという形式に直させず、アオイなりの確度や継続意思をそのまま受け取ること。
   - Trap: 普通の告白や連絡頻度を要求し、関係を早く仕様化すると、場面の目的「成立後も自由を守りながら、次の接点を約束する」から外れる。

## ハルカ / ISTJ

**Promise:** 約束を守る小さな行動で、ゆっくり信頼が積み上がる恋。

**Core tension:** 安定したい気持ちと、堅い人だと思われたくない迷い。

**Winning mindset:** 時間・場所・理由を具体化し、相手の準備に気づく。

**Temptation trap:** ノリ任せ、曖昧な誘い、定番や段取りを退屈扱いすること。

**Visual formula:** 朝の喫茶店、建築展示、整った小物。清潔な構図と穏やかな表情。

**Player fantasy:** 小さな約束を重ねるほど、彼女の安心した笑顔が増えていく。

**Signature dilemma:** 誠実すぎると安全圏に寄る。信頼の上に、少しだけ好意の温度を乗せる。

### Date Missions

- **Date 1: CLEAR PLAN / 約束を見える形にする**
  - Aim: 初回デートでは、好意を雰囲気任せにせず、時間・場所・代案で安心を作る。
  - Target: concreteまたはsafeを2回以上、strainを1回以下
  - Success: ハルカは慎重さを尊重されたと感じ、次の予定を考えやすくなる。
  - Risk: 曖昧な誘いは、気持ちがないよりも信頼できないサインに見える。
  - Mission image cue: 朝の喫茶店、卓上の手帳と腕時計、整った二人分のカップ
- **Date 2: NOTICE CARE / 準備に気づく**
  - Aim: 価値観デートでは、段取りや気遣いを当然扱いせず、具体的に見ていると伝える。
  - Target: safeを2回以上、dismiss系strainを0回
  - Success: 堅い人ではなく、大切に積み上げる人として見られた安心が生まれる。
  - Risk: 細かいね、と軽くすると、ハルカは努力ごと閉じてしまう。
  - Mission image cue: 建築展示の白い空間、整えられたパンフレット、少し和らいだ横顔
- **Date 3: SWEET STEADY / 誠実さに甘さを足す**
  - Aim: 終盤では、信頼を壊さないまま、友達止まりにならない温度を一段上げる。
  - Target: safeを1回以上、sparkを1回以上、pressureを上げすぎない
  - Success: ハルカは続けられる関係として、好意を現実の予定に置ける。
  - Risk: 安全に寄りすぎると恋愛の温度が見えず、急に押すと不安になる。
  - Mission image cue: 落ち着いたレストラン、控えめな笑顔、次の予定を書いた小さなメモ

### Relationship Arc Modes

- **入る**
  - 01 五分前到着: 日時・場所・代案を具体的にして、考えていることを行動にすることで、信頼できる具体性を大切にすること
  - 02 注文: 日時・場所・代案を具体的にして、考えていることを行動にすることで、信頼できる具体性を大切にすること
  - 03 仕事の話: 日時・場所・代案を具体的にして、考えていることを行動にすることで、信頼できる具体性を大切にすること
- **近づく**
  - 04 予定確認: 日時・場所・代案を具体的にして、考えていることを行動にすることで、信頼できる具体性を大切にすること
  - 05 次回提案: 日時・場所・代案を具体的にして、考えていることを行動にすることで、信頼できる具体性を大切にすること
  - 06 展示の見方: 小さな段取りや気遣いに気づき、具体的に感謝することで、信頼できる具体性を大切にすること
  - 07 感情表現: 小さな段取りや気遣いに気づき、具体的に感謝することで、信頼できる具体性を大切にすること
  - 08 予定変更: 小さな段取りや気遣いに気づき、具体的に感謝することで、信頼できる具体性を大切にすること
  - 09 過去の不信: 小さな段取りや気遣いに気づき、具体的に感謝することで、信頼できる具体性を大切にすること
  - 10 三回目の提案: 小さな段取りや気遣いに気づき、具体的に感謝することで、信頼できる具体性を大切にすること
- **戻す**
  - 11 体調への配慮: ズレた時に、安全すぎて友達のように終わる、または急に押すで済ませず関係の扱い方を直すこと
  - 12 好意の伝え方: ズレた時に、安全すぎて友達のように終わる、または急に押すで済ませず関係の扱い方を直すこと
- **決める**
  - 13 意見の違い: 好きという感情だけでなく、どう続けたいかが見える具体的な言葉。
  - 14 関係の確認: 好きという感情だけでなく、どう続けたいかが見える具体的な言葉。
  - 15 帰り際: 好きという感情だけでなく、どう続けたいかが見える具体的な言葉。

### Character Memory Echoes

Use these echoes as continuity callbacks: later scene context should name the earlier player move that is still affecting trust, spark, strain, or repair. The callback should feel like the character remembers a specific attitude, not like a generic score bonus.

- **safe: 約束を見てくれた記憶**
  - ハルカは、あなたが時間や準備を具体的に扱ったことを覚えている。次はその信頼の上に、少しだけ好意の温度を乗せたい。
- **spark: 少し照れた記憶**
  - ハルカは、誠実さを崩さずに温度を上げた場面を覚えている。軽さより、理由のある甘さが効いている。
- **strain: 曖昧にされた記憶**
  - ハルカは、予定や気遣いが曖昧に扱われた場面を覚えている。次は候補・理由・代案の三点で信頼を戻したい。
- **repair: 整え直した記憶**
  - ハルカは、ずれた後にあなたが具体的な代案で整え直したことを覚えている。修復は言葉より段取りで伝わっている。
- **mixed: 慎重に積み上げた記憶**
  - ハルカは、あなたが関係を雑に進めていないことを感じている。次は安全だけで終わらない、控えめな好意を置きたい。
- Memory image cue: 腕時計、手帳、整ったカップ、丁寧に畳まれたナプキン、覚えていてくれた準備が残るカット

**Attraction switches:** 具体的な約束 / 準備への感謝 / 穏やかな継続意思

**Turn-offs:** 曖昧な誘い / 時間へのルーズさ / 段取りを退屈扱いする

### Character Decoder Rule

During play, surface the character's attraction switches and turn-offs as learnable signals. Positive choices should name what opened; risky choices should name the turn-off and provide one repair line rather than only punishing the player.

### Character Route Endings

Route compass rule: during play, show the likely route tendency without locking the player in. The forecast should make choices feel consequential while still allowing rerouting through repair, heart-key unlocks, and late-scene clarity.

Replay plan rule: after each ending, give the player one concrete next-run plan using the current route, locked routes, unopened psychological switches, heart-key misses, and character turn-offs. The plan should support autonomy, competence, and relatedness: choose a route, practice one skill, and understand the character more deeply.

Need compass rule: each scene should expose the relationship need being tested, then score whether the player's answer satisfied, nearly satisfied, or threatened it. The need should be character-specific, drawn from the active psychological switch, and should explain autonomy, felt understanding, and concrete next-step safety without turning the character into a fixed stereotype.

Connection bid rule: treat each character line as a small bid for attention, validation, play, repair, vulnerability, or future commitment. Feedback should say whether the player turned toward, turned with spark, turned away, or turned against the bid. This creates emotional consequence even when the main plot remains linear.

Date intermission rule: after each date, insert a character-perspective note that names what the character privately remembers, what still feels fragile, and what the next date will test. The intermission should feel like an episodic story beat shaped by the player's choices, not a neutral score screen.

- **REPAIR / 約束の輪郭を、もう一度描き直す**
  - Player pattern: 気持ちはあったが、ハルカが安心できる具体性が足りなかった
  - Epilogue: ハルカは怒るより先に、今日の会話を静かに整理している。曖昧な言葉や勢いが、彼女には関係を軽く扱われたように響いた。次は謝るだけでなく、日時・理由・代案まで見える形で信頼を戻したい。
  - Finale line: 「気持ちは分かりました。次は、形でもう一度見せてください。」
  - Finale memory bridge: 慎重に積み上げた記憶として残った今回の接し方が、この最後の表情を少し変えている。ハルカは、あなたが関係を雑に進めていないことを感じている。次は安全だけで終わらない、控えめな好意を置きたい。
  - Next-run mission: 次回は曖昧な誘いを避け、約束や感謝を具体的にする選択を3回以上入れる。
  - Finale next beat: 曖昧な謝意ではなく、日時・理由・代案まで見える信頼回復をする。
  - Character CG cue: 朝の喫茶店の外、ハルカが予定表を見ながら少し考える、整った小物
  - Finale CG cue: 朝の喫茶店の外、ハルカが予定表を見ながら静かに考える。朝の喫茶店、建築展示、整った小物。清潔な構図と穏やかな表情。
- **RECONNECT / 話し直せる人は、信頼できる**
  - Player pattern: ズレを感情だけで流さず、信頼できる形へ組み直した
  - Epilogue: 一度崩れた段取りを、あなたはごまかさず組み直した。ハルカは小さく頷き、次の予定を確認する。彼女にとって修復とは、雰囲気を戻すことではなく、次に同じズレが起きない形を作ることだった。
  - Finale line: 「話し直せるなら、大丈夫です。同じことが起きた時の決め方も、作れますから。」
  - Finale memory bridge: 慎重に積み上げた記憶として残った今回の接し方が、この最後の表情を少し変えている。ハルカは、あなたが関係を雑に進めていないことを感じている。次は安全だけで終わらない、控えめな好意を置きたい。
  - Next-run mission: 次回は衝突後、具体的な代案や次のルールを一文で出す。
  - Finale next beat: 修復のあと、次に同じズレが起きた時の扱い方を一緒に決める。
  - Character CG cue: カフェのテーブル、二人分の予定メモ、ハルカの表情が少し柔らかい
  - Finale CG cue: カフェのテーブル、二人分の予定メモ、ハルカの表情が少し柔らかい。朝の喫茶店、建築展示、整った小物。清潔な構図と穏やかな表情。
- **SPARK / 少し珍しい予定も、理由があれば嬉しい**
  - Player pattern: 会話に新鮮さは出せたが、ハルカが安心できる設計が次の鍵になった
  - Epilogue: あなたの勢いはハルカにとって少し予想外だった。でも、そこに彼女を思って選んだ理由があれば、冒険は不安ではなく楽しみになる。次は火花を、丁寧な準備で支えたい。
  - Finale line: 「少し予想外でした。でも、理由がある予定なら嬉しいです。」
  - Finale memory bridge: 慎重に積み上げた記憶として残った今回の接し方が、この最後の表情を少し変えている。ハルカは、あなたが関係を雑に進めていないことを感じている。次は安全だけで終わらない、控えめな好意を置きたい。
  - Next-run mission: 次回はsparkの誘いに、場所・時間・彼女を選んだ理由を添える。
  - Finale next beat: 新鮮な誘いに、彼女を選んだ理由と段取りを添える。
  - Character CG cue: 建築展示の入口、ハルカが少し驚いて笑う、手元に予約画面
  - Finale CG cue: 建築展示の入口、ハルカが予約画面を見て少し驚いて笑う。朝の喫茶店、建築展示、整った小物。清潔な構図と穏やかな表情。
- **TRUST / 小さな約束が、恋の足場になる**
  - Player pattern: 約束と準備でハルカの安心を積み上げた
  - Epilogue: ハルカは今日、あなたの言葉を信じても大丈夫だと思えた。派手な一言より、覚えていたこと、時間を守ったこと、具体的に誘ったことが効いている。次は信頼の上に、好意の温度を少し乗せたい。
  - Finale line: 「こういう積み重ねなら、信じてもいいと思えます。」
  - Finale memory bridge: 慎重に積み上げた記憶として残った今回の接し方が、この最後の表情を少し変えている。ハルカは、あなたが関係を雑に進めていないことを感じている。次は安全だけで終わらない、控えめな好意を置きたい。
  - Next-run mission: 次回はsafeを軸にしつつ、終盤で好意を具体的に伝える選択を入れる。
  - Finale next beat: 信頼の足場に、具体的な好意の言葉を少し乗せる。
  - Character CG cue: 朝の喫茶店、ハルカがカップを両手で持ち安心して笑う、整ったテーブル
  - Finale CG cue: 朝の喫茶店、ハルカがカップを両手で持ち安心して笑う。朝の喫茶店、建築展示、整った小物。清潔な構図と穏やかな表情。
- **BALANCE / きちんとした恋に、少しだけ甘さが混ざる**
  - Player pattern: 誠実さと恋の温度を両立し、ハルカが安心して進める関係を作った
  - Epilogue: あなたは約束を守りながら、ただ安全なだけでは終わらせなかった。ハルカは次の予定を確認したあと、少しだけ照れたように笑う。信頼と好意が、同じ場所に積み上がっている。
  - Finale line: 「きちんとしているのに、少し甘い。そういう関係なら進めそうです。」
  - Finale memory bridge: 慎重に積み上げた記憶として残った今回の接し方が、この最後の表情を少し変えている。ハルカは、あなたが関係を雑に進めていないことを感じている。次は安全だけで終わらない、控えめな好意を置きたい。
  - Next-run mission: 次回は3つの心理スイッチを解放し、具体性と甘さの両方を最後まで保つ。
  - Finale next beat: 具体性と甘さを両立し、次の約束を恋の温度で締める。
  - Character CG cue: 夕方の街角、ハルカが次の約束を確認しながら微笑む、腕時計と小さな花
  - Finale CG cue: 夕方の街角、ハルカが次の約束を確認しながら微笑む。朝の喫茶店、建築展示、整った小物。清潔な構図と穏やかな表情。

### Psychological Switches

- **約束の見える化**
  - Opens: 日時・場所・代案を具体的にして、考えていることを行動にする
  - Hurts: いつか・適当に・任せるで関係をぼかす
  - Tell: 返事の前に予定を確認し、安心したように表情が緩む
- **準備への敬意**
  - Opens: 小さな段取りや気遣いに気づき、具体的に感謝する
  - Hurts: 準備を当然扱いし、慎重さを細かいと片づける
  - Tell: 持ち物や時間の話から、自分の生活ペースを少し見せる
- **安定の中の甘さ**
  - Opens: 信頼を守りながら、好意の温度を一段だけ上げる
  - Hurts: 安全すぎて友達のように終わる、または急に押す
  - Tell: 堅い言い方の中に、次も会いたいニュアンスが混ざる

### Reading Cues

- Signal: 返事の前に予定や時間を一度確認し、言葉を選んでいる
  - Good read: 迷いではなく、信頼できる約束にできるかを見ていると読む
  - Misread: 慎重さをノリが悪いと受け取り、曖昧な誘いで押す
  - Player question: 日時・場所・代案まで見える言葉になっているか？
- Signal: 持ち物や段取りの話から、生活ペースを少し見せてくる
  - Good read: 準備や気遣いに具体的に気づき、当然扱いしない
  - Misread: 細かいね、と冗談にして努力を軽くする
  - Player question: 彼女の準備を一つ具体的に褒められるか？
- Signal: 丁寧な言い方の中に、次も会いたい含みが混ざる
  - Good read: 信頼を壊さず、好意の温度を一段だけ上げる
  - Misread: 安全に寄りすぎて友達のまま終わる、または急に押す
  - Player question: 誠実さの上に甘さを少し乗せられるか？

### Inner Layer

- Public mask: 落ち着いていて堅実に見えるが、実は自分が退屈だと思われていないか気にしている。
- Fear: 約束や準備を当たり前にされ、自分だけが関係を大切にしているように感じること。
- Opens when: 小さな準備や時間への配慮に気づき、具体的な感謝を返してもらえた時。
- Closes when: その場のノリで約束を濁されたり、慎重さを細かいと言われた時。
- Private wish: 派手ではなくても、次の予定を自然に積み重ねられる関係がほしい。
- Confession need: 好きという感情だけでなく、どう続けたいかが見える具体的な言葉。

### Persona

- Summary: 信頼は言葉より行動で積み上げると感じるタイプ。具体性、約束、時間への配慮を大切にします。
- Needs: 献身 / 誠実さ / 計画通りの安定した関係
- Conflict: 感情より事実を優先しがち。感情的に責められると距離を取りやすい。
- Reassurance: 有言実行、変わらないルーチン、現実的なサポート。
- Good lines: 来週土曜の午後ならどう？無理なら別日でも大丈夫 / ちゃんと考えて誘いたかった / 時間を作ってくれてありがとう
- Bad lines: いつか適当に行こう / 細かいことは気にしなくてよくない？ / ノリで決めようよ

### Story Arc

#### 初回デート: 朝の喫茶店

Purpose: 約束を守る姿勢と具体的な安心を示す

1. **五分前到着**
   - Location: 駅前の老舗喫茶店
   - Scene goal: 時間と約束への敬意を言葉にする
   - Active switch: 約束の見える化 / opens when 日時・場所・代案を具体的にして、考えていることを行動にする
   - Switch tell: 返事の前に予定を確認し、安心したように表情が緩む
   - Dramaturgy: 入口 / 約束の見える化: 第一印象の安全確認
   - Player move: 日時・場所・代案を具体的にして、考えていることを行動にする。相手のテンポを観察し、いきなり型にはめない
   - Love contract: 入る / 表面は「五分前到着」の会話。でも本当は、第一印象の安全確認を通して約束の見える化を見られている。
   - Hidden ask: 日時・場所・代案を具体的にして、考えていることを行動にすることで、信頼できる具体性を大切にすること
   - Heart key: 約束の見える化 / clue 返事の前に予定を確認し、安心したように表情が緩む / unlock by 日時・場所・代案を具体的にして、考えていることを行動にする
   - Tempting wrong move: 雰囲気だけで押すと、誠実さより不確実さが残る。
   - Winning move: 曖昧な好意が、信頼できる約束に変わる。
   - Unsaid safe subtext: 口にしない安心 / 返事の前に予定を確認し、安心したように表情が緩む。「派手ではなくても、次の予定を自然に積み重ねられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 返事の前に予定を確認し、安心したように表情が緩む。楽しい温度は届いている。次は「好きという感情だけでなく、どう続けたいかが見える具体的な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / いつか・適当に・任せるで関係をぼかすように響き、「約束や準備を当たり前にされ、自分だけが関係を大切にしているように感じること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: OBSERVE / 観察
   - Player lesson: 相手の緊張・視線・距離を読む。最初の正解は盛り上げることではなく、入っていい速度を測ること。
   - Tactical read: OBSERVE / 気持ちを形にする
   - Preferred move: concrete / empathize
   - Risky move: dismiss / pushy
   - Tactical note: ハルカは優しさそのものより、続けられる形を見ている。具体性が安心になる。
   - Payoff: 心理スイッチ「約束の見える化」が開くと、次の本音に進みやすい。日時・場所・代案を具体的にして、考えていることを行動にすること。
   - Trap: いつか・適当に・任せるで関係をぼかすと、場面の目的「時間と約束への敬意を言葉にする」から外れる。

2. **注文**
   - Location: 窓際の席
   - Scene goal: 安定志向を退屈扱いせず、理由を聞く
   - Active switch: 約束の見える化 / opens when 日時・場所・代案を具体的にして、考えていることを行動にする
   - Switch tell: 返事の前に予定を確認し、安心したように表情が緩む
   - Dramaturgy: 輪郭 / 約束の見える化: 自分の軸を少し見せる
   - Player move: 日時・場所・代案を具体的にして、考えていることを行動にする。聞き役に逃げず、相手が判断できる材料を出す
   - Love contract: 入る / 表面は「注文」の会話。でも本当は、自分の軸を少し見せるを通して約束の見える化を見られている。
   - Hidden ask: 日時・場所・代案を具体的にして、考えていることを行動にすることで、信頼できる具体性を大切にすること
   - Heart key: 約束の見える化 / clue 返事の前に予定を確認し、安心したように表情が緩む / unlock by 日時・場所・代案を具体的にして、考えていることを行動にする
   - Tempting wrong move: 雰囲気だけで押すと、誠実さより不確実さが残る。
   - Winning move: 曖昧な好意が、信頼できる約束に変わる。
   - Unsaid safe subtext: 口にしない安心 / 返事の前に予定を確認し、安心したように表情が緩む。「派手ではなくても、次の予定を自然に積み重ねられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 返事の前に予定を確認し、安心したように表情が緩む。楽しい温度は届いている。次は「好きという感情だけでなく、どう続けたいかが見える具体的な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / いつか・適当に・任せるで関係をぼかすように響き、「約束や準備を当たり前にされ、自分だけが関係を大切にしているように感じること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: OPEN / 自己開示
   - Player lesson: 聞くだけでなく、自分の基準を一つ渡す。相手があなたを判断できる材料を作る。
   - Tactical read: OPEN / 気持ちを形にする
   - Preferred move: concrete / empathize
   - Risky move: dismiss / pushy
   - Tactical note: ハルカは優しさそのものより、続けられる形を見ている。具体性が安心になる。
   - Payoff: 心理スイッチ「約束の見える化」が開くと、次の本音に進みやすい。日時・場所・代案を具体的にして、考えていることを行動にすること。
   - Trap: いつか・適当に・任せるで関係をぼかすと、場面の目的「安定志向を退屈扱いせず、理由を聞く」から外れる。

3. **仕事の話**
   - Location: コーヒーが冷める前
   - Scene goal: 見えない努力を具体的に認める
   - Active switch: 約束の見える化 / opens when 日時・場所・代案を具体的にして、考えていることを行動にする
   - Switch tell: 返事の前に予定を確認し、安心したように表情が緩む
   - Dramaturgy: ほころび / 約束の見える化: 表情がゆるむ瞬間
   - Player move: 日時・場所・代案を具体的にして、考えていることを行動にする。笑いを取りに行くより、警戒がほどけた理由を守る
   - Love contract: 入る / 表面は「仕事の話」の会話。でも本当は、表情がゆるむ瞬間を通して約束の見える化を見られている。
   - Hidden ask: 日時・場所・代案を具体的にして、考えていることを行動にすることで、信頼できる具体性を大切にすること
   - Heart key: 約束の見える化 / clue 返事の前に予定を確認し、安心したように表情が緩む / unlock by 日時・場所・代案を具体的にして、考えていることを行動にする
   - Tempting wrong move: 雰囲気だけで押すと、誠実さより不確実さが残る。
   - Winning move: 曖昧な好意が、信頼できる約束に変わる。
   - Unsaid safe subtext: 口にしない安心 / 返事の前に予定を確認し、安心したように表情が緩む。「派手ではなくても、次の予定を自然に積み重ねられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 返事の前に予定を確認し、安心したように表情が緩む。楽しい温度は届いている。次は「好きという感情だけでなく、どう続けたいかが見える具体的な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / いつか・適当に・任せるで関係をぼかすように響き、「約束や準備を当たり前にされ、自分だけが関係を大切にしているように感じること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: SYNC / 温度合わせ
   - Player lesson: 笑った理由を守る。冗談は距離を縮めるが、相手を素材にしない。
   - Tactical read: SYNC / 気持ちを形にする
   - Preferred move: concrete / empathize
   - Risky move: dismiss / pushy
   - Tactical note: ハルカは優しさそのものより、続けられる形を見ている。具体性が安心になる。
   - Payoff: 心理スイッチ「約束の見える化」が開くと、次の本音に進みやすい。日時・場所・代案を具体的にして、考えていることを行動にすること。
   - Trap: いつか・適当に・任せるで関係をぼかすと、場面の目的「見えない努力を具体的に認める」から外れる。

4. **予定確認**
   - Location: 会計前
   - Scene goal: 予定の境界線を尊重する
   - Active switch: 約束の見える化 / opens when 日時・場所・代案を具体的にして、考えていることを行動にする
   - Switch tell: 返事の前に予定を確認し、安心したように表情が緩む
   - Dramaturgy: 価値観 / 約束の見える化: 恋愛観や生活観の違い
   - Player move: 日時・場所・代案を具体的にして、考えていることを行動にする。反論ではなく、相手の言葉の芯を確認する
   - Love contract: 近づく / 表面は「予定確認」の会話。でも本当は、恋愛観や生活観の違いを通して約束の見える化を見られている。
   - Hidden ask: 日時・場所・代案を具体的にして、考えていることを行動にすることで、信頼できる具体性を大切にすること
   - Heart key: 約束の見える化 / clue 返事の前に予定を確認し、安心したように表情が緩む / unlock by 日時・場所・代案を具体的にして、考えていることを行動にする
   - Tempting wrong move: 雰囲気だけで押すと、誠実さより不確実さが残る。
   - Winning move: 曖昧な好意が、信頼できる約束に変わる。
   - Unsaid safe subtext: 口にしない安心 / 返事の前に予定を確認し、安心したように表情が緩む。「派手ではなくても、次の予定を自然に積み重ねられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 返事の前に予定を確認し、安心したように表情が緩む。楽しい温度は届いている。次は「好きという感情だけでなく、どう続けたいかが見える具体的な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / いつか・適当に・任せるで関係をぼかすように響き、「約束や準備を当たり前にされ、自分だけが関係を大切にしているように感じること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: VALUE / 価値観翻訳
   - Player lesson: 違いを否定せず、相手が何を守ろうとしているかを言葉にする。
   - Tactical read: VALUE / 気持ちを形にする
   - Preferred move: concrete / empathize
   - Risky move: dismiss / pushy
   - Tactical note: ハルカは優しさそのものより、続けられる形を見ている。具体性が安心になる。
   - Payoff: 心理スイッチ「約束の見える化」が開くと、次の本音に進みやすい。日時・場所・代案を具体的にして、考えていることを行動にすること。
   - Trap: いつか・適当に・任せるで関係をぼかすと、場面の目的「予定の境界線を尊重する」から外れる。

5. **次回提案**
   - Location: 駅までの道
   - Scene goal: 誘いに具体的に応じる
   - Active switch: 約束の見える化 / opens when 日時・場所・代案を具体的にして、考えていることを行動にする
   - Switch tell: 返事の前に予定を確認し、安心したように表情が緩む
   - Dramaturgy: 小さなズレ / 約束の見える化: 受け取り違いの修正
   - Player move: 日時・場所・代案を具体的にして、考えていることを行動にする。勝ち負けにせず、何がずれたかを再接続する
   - Love contract: 近づく / 表面は「次回提案」の会話。でも本当は、受け取り違いの修正を通して約束の見える化を見られている。
   - Hidden ask: 日時・場所・代案を具体的にして、考えていることを行動にすることで、信頼できる具体性を大切にすること
   - Heart key: 約束の見える化 / clue 返事の前に予定を確認し、安心したように表情が緩む / unlock by 日時・場所・代案を具体的にして、考えていることを行動にする
   - Tempting wrong move: 雰囲気だけで押すと、誠実さより不確実さが残る。
   - Winning move: 曖昧な好意が、信頼できる約束に変わる。
   - Unsaid safe subtext: 口にしない安心 / 返事の前に予定を確認し、安心したように表情が緩む。「派手ではなくても、次の予定を自然に積み重ねられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 返事の前に予定を確認し、安心したように表情が緩む。楽しい温度は届いている。次は「好きという感情だけでなく、どう続けたいかが見える具体的な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / いつか・適当に・任せるで関係をぼかすように響き、「約束や準備を当たり前にされ、自分だけが関係を大切にしているように感じること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: REPAIR / 修復
   - Player lesson: ズレを勝ち負けにしない。相手の論点を小さく扱わず、受け取り直す。
   - Tactical read: REPAIR / 気持ちを形にする
   - Preferred move: concrete / empathize
   - Risky move: dismiss / pushy
   - Tactical note: ハルカは優しさそのものより、続けられる形を見ている。具体性が安心になる。
   - Payoff: 心理スイッチ「約束の見える化」が開くと、次の本音に進みやすい。日時・場所・代案を具体的にして、考えていることを行動にすること。
   - Trap: いつか・適当に・任せるで関係をぼかすと、場面の目的「誘いに具体的に応じる」から外れる。

#### 価値観デート: 建築展示

Purpose: 信頼・責任感・感情表現の違いをすり合わせる

6. **展示の見方**
   - Location: 模型展示室
   - Scene goal: 具体的な観察に付き合う
   - Active switch: 準備への敬意 / opens when 小さな段取りや気遣いに気づき、具体的に感謝する
   - Switch tell: 持ち物や時間の話から、自分の生活ペースを少し見せる
   - Dramaturgy: 核 / 準備への敬意: 相手の大事な基準
   - Player move: 小さな段取りや気遣いに気づき、具体的に感謝する。厳しさや明るさの裏にある願いを言語化する
   - Love contract: 近づく / 表面は「展示の見方」の会話。でも本当は、相手の大事な基準を通して準備への敬意を見られている。
   - Hidden ask: 小さな段取りや気遣いに気づき、具体的に感謝することで、信頼できる具体性を大切にすること
   - Heart key: 準備への敬意 / clue 持ち物や時間の話から、自分の生活ペースを少し見せる / unlock by 小さな段取りや気遣いに気づき、具体的に感謝する
   - Tempting wrong move: 雰囲気だけで押すと、誠実さより不確実さが残る。
   - Winning move: 曖昧な好意が、信頼できる約束に変わる。
   - Unsaid safe subtext: 口にしない安心 / 持ち物や時間の話から、自分の生活ペースを少し見せる。「派手ではなくても、次の予定を自然に積み重ねられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 持ち物や時間の話から、自分の生活ペースを少し見せる。楽しい温度は届いている。次は「好きという感情だけでなく、どう続けたいかが見える具体的な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 準備を当然扱いし、慎重さを細かいと片づけるように響き、「約束や準備を当たり前にされ、自分だけが関係を大切にしているように感じること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: CORE / 芯を見る
   - Player lesson: 強さ・明るさ・慎重さの裏にある願いを拾う。褒めるなら性格の芯を褒める。
   - Tactical read: CORE / 気持ちを形にする
   - Preferred move: concrete / empathize
   - Risky move: dismiss / pushy
   - Tactical note: ハルカは優しさそのものより、続けられる形を見ている。具体性が安心になる。
   - Payoff: 心理スイッチ「準備への敬意」が開くと、次の本音に進みやすい。小さな段取りや気遣いに気づき、具体的に感謝すること。
   - Trap: 準備を当然扱いし、慎重さを細かいと片づけると、場面の目的「具体的な観察に付き合う」から外れる。

7. **感情表現**
   - Location: 休憩スペース
   - Scene goal: 感情表現の薄さを好意の薄さと決めつけない
   - Active switch: 準備への敬意 / opens when 小さな段取りや気遣いに気づき、具体的に感謝する
   - Switch tell: 持ち物や時間の話から、自分の生活ペースを少し見せる
   - Dramaturgy: 夜 / 準備への敬意: 本音が出やすい空気
   - Player move: 小さな段取りや気遣いに気づき、具体的に感謝する。ムードに頼り切らず、選択肢を残す
   - Love contract: 近づく / 表面は「感情表現」の会話。でも本当は、本音が出やすい空気を通して準備への敬意を見られている。
   - Hidden ask: 小さな段取りや気遣いに気づき、具体的に感謝することで、信頼できる具体性を大切にすること
   - Heart key: 準備への敬意 / clue 持ち物や時間の話から、自分の生活ペースを少し見せる / unlock by 小さな段取りや気遣いに気づき、具体的に感謝する
   - Tempting wrong move: 雰囲気だけで押すと、誠実さより不確実さが残る。
   - Winning move: 曖昧な好意が、信頼できる約束に変わる。
   - Unsaid safe subtext: 口にしない安心 / 持ち物や時間の話から、自分の生活ペースを少し見せる。「派手ではなくても、次の予定を自然に積み重ねられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 持ち物や時間の話から、自分の生活ペースを少し見せる。楽しい温度は届いている。次は「好きという感情だけでなく、どう続けたいかが見える具体的な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 準備を当然扱いし、慎重さを細かいと片づけるように響き、「約束や準備を当たり前にされ、自分だけが関係を大切にしているように感じること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: SPACE / 余白作り
   - Player lesson: ムードに流されすぎず、相手が選べる余地を残す。近づくほど境界線を丁寧に。
   - Tactical read: SPACE / 気持ちを形にする
   - Preferred move: concrete / empathize
   - Risky move: dismiss / pushy
   - Tactical note: ハルカは優しさそのものより、続けられる形を見ている。具体性が安心になる。
   - Payoff: 心理スイッチ「準備への敬意」が開くと、次の本音に進みやすい。小さな段取りや気遣いに気づき、具体的に感謝すること。
   - Trap: 準備を当然扱いし、慎重さを細かいと片づけると、場面の目的「感情表現の薄さを好意の薄さと決めつけない」から外れる。

8. **予定変更**
   - Location: 展示出口
   - Scene goal: トラブル時に落ち着き、共同で代替案を作る
   - Active switch: 準備への敬意 / opens when 小さな段取りや気遣いに気づき、具体的に感謝する
   - Switch tell: 持ち物や時間の話から、自分の生活ペースを少し見せる
   - Dramaturgy: 誘い / 準備への敬意: 次に進む意思表示
   - Player move: 小さな段取りや気遣いに気づき、具体的に感謝する。好意だけでなく、現実の行動へ落とす
   - Love contract: 近づく / 表面は「予定変更」の会話。でも本当は、次に進む意思表示を通して準備への敬意を見られている。
   - Hidden ask: 小さな段取りや気遣いに気づき、具体的に感謝することで、信頼できる具体性を大切にすること
   - Heart key: 準備への敬意 / clue 持ち物や時間の話から、自分の生活ペースを少し見せる / unlock by 小さな段取りや気遣いに気づき、具体的に感謝する
   - Tempting wrong move: 雰囲気だけで押すと、誠実さより不確実さが残る。
   - Winning move: 曖昧な好意が、信頼できる約束に変わる。
   - Unsaid safe subtext: 口にしない安心 / 持ち物や時間の話から、自分の生活ペースを少し見せる。「派手ではなくても、次の予定を自然に積み重ねられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 持ち物や時間の話から、自分の生活ペースを少し見せる。楽しい温度は届いている。次は「好きという感情だけでなく、どう続けたいかが見える具体的な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 準備を当然扱いし、慎重さを細かいと片づけるように響き、「約束や準備を当たり前にされ、自分だけが関係を大切にしているように感じること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: MOVE / 次へ進める
   - Player lesson: 気持ちを行動に落とす。曖昧な好意を、次の約束や選択肢に変える。
   - Tactical read: MOVE / 誘いを曖昧にしない
   - Preferred move: concrete / action
   - Risky move: dismiss
   - Tactical note: 次の予定は、日程・理由・代案のどれかがあると一気に信頼が上がる。
   - Payoff: 心理スイッチ「準備への敬意」が開くと、次の本音に進みやすい。小さな段取りや気遣いに気づき、具体的に感謝すること。
   - Trap: 準備を当然扱いし、慎重さを細かいと片づけると、場面の目的「トラブル時に落ち着き、共同で代替案を作る」から外れる。

9. **過去の不信**
   - Location: 代替カフェの席
   - Scene goal: 慎重さを細かさではなく自己防衛として理解する
   - Active switch: 準備への敬意 / opens when 小さな段取りや気遣いに気づき、具体的に感謝する
   - Switch tell: 持ち物や時間の話から、自分の生活ペースを少し見せる
   - Dramaturgy: 準備 / 準備への敬意: 相手の好みを覚えている証拠
   - Player move: 小さな段取りや気遣いに気づき、具体的に感謝する。攻略感ではなく観察と敬意として見せる
   - Love contract: 近づく / 表面は「過去の不信」の会話。でも本当は、相手の好みを覚えている証拠を通して準備への敬意を見られている。
   - Hidden ask: 小さな段取りや気遣いに気づき、具体的に感謝することで、信頼できる具体性を大切にすること
   - Heart key: 準備への敬意 / clue 持ち物や時間の話から、自分の生活ペースを少し見せる / unlock by 小さな段取りや気遣いに気づき、具体的に感謝する
   - Tempting wrong move: 雰囲気だけで押すと、誠実さより不確実さが残る。
   - Winning move: 曖昧な好意が、信頼できる約束に変わる。
   - Unsaid safe subtext: 口にしない安心 / 持ち物や時間の話から、自分の生活ペースを少し見せる。「派手ではなくても、次の予定を自然に積み重ねられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 持ち物や時間の話から、自分の生活ペースを少し見せる。楽しい温度は届いている。次は「好きという感情だけでなく、どう続けたいかが見える具体的な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 準備を当然扱いし、慎重さを細かいと片づけるように響き、「約束や準備を当たり前にされ、自分だけが関係を大切にしているように感じること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: REMEMBER / 記憶を使う
   - Player lesson: 前に聞いた好みや不安を覚えていると示す。攻略感ではなく敬意として出す。
   - Tactical read: REMEMBER / 気持ちを形にする
   - Preferred move: concrete / empathize
   - Risky move: dismiss / pushy
   - Tactical note: ハルカは優しさそのものより、続けられる形を見ている。具体性が安心になる。
   - Payoff: 心理スイッチ「準備への敬意」が開くと、次の本音に進みやすい。小さな段取りや気遣いに気づき、具体的に感謝すること。
   - Trap: 準備を当然扱いし、慎重さを細かいと片づけると、場面の目的「慎重さを細かさではなく自己防衛として理解する」から外れる。

10. **三回目の提案**
   - Location: カフェを出た夕方
   - Scene goal: 長めのデートを具体的に設計する
   - Active switch: 準備への敬意 / opens when 小さな段取りや気遣いに気づき、具体的に感謝する
   - Switch tell: 持ち物や時間の話から、自分の生活ペースを少し見せる
   - Dramaturgy: 接近 / 準備への敬意: 甘さと境界線の同時処理
   - Player move: 小さな段取りや気遣いに気づき、具体的に感謝する。近づくほど相手の主導権を奪わない
   - Love contract: 近づく / 表面は「三回目の提案」の会話。でも本当は、甘さと境界線の同時処理を通して準備への敬意を見られている。
   - Hidden ask: 小さな段取りや気遣いに気づき、具体的に感謝することで、信頼できる具体性を大切にすること
   - Heart key: 準備への敬意 / clue 持ち物や時間の話から、自分の生活ペースを少し見せる / unlock by 小さな段取りや気遣いに気づき、具体的に感謝する
   - Tempting wrong move: 雰囲気だけで押すと、誠実さより不確実さが残る。
   - Winning move: 曖昧な好意が、信頼できる約束に変わる。
   - Unsaid safe subtext: 口にしない安心 / 持ち物や時間の話から、自分の生活ペースを少し見せる。「派手ではなくても、次の予定を自然に積み重ねられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 持ち物や時間の話から、自分の生活ペースを少し見せる。楽しい温度は届いている。次は「好きという感情だけでなく、どう続けたいかが見える具体的な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 準備を当然扱いし、慎重さを細かいと片づけるように響き、「約束や準備を当たり前にされ、自分だけが関係を大切にしているように感じること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: CLOSER / 接近の調整
   - Player lesson: 甘さを出しつつ、相手の主導権を奪わない。攻める場面ほど逃げ道を残す。
   - Tactical read: CLOSER / 気持ちを形にする
   - Preferred move: concrete / empathize
   - Risky move: dismiss / pushy
   - Tactical note: ハルカは優しさそのものより、続けられる形を見ている。具体性が安心になる。
   - Payoff: 心理スイッチ「準備への敬意」が開くと、次の本音に進みやすい。小さな段取りや気遣いに気づき、具体的に感謝すること。
   - Trap: 準備を当然扱いし、慎重さを細かいと片づけると、場面の目的「長めのデートを具体的に設計する」から外れる。

#### 関係進展デート: 半日の街歩き

Purpose: 好意を行動で示し、予定外にも信頼を保つ

11. **体調への配慮**
   - Location: 美術館前
   - Scene goal: 相手の段取りを尊重し、共同で調整する
   - Active switch: 安定の中の甘さ / opens when 信頼を守りながら、好意の温度を一段だけ上げる
   - Switch tell: 堅い言い方の中に、次も会いたいニュアンスが混ざる
   - Dramaturgy: 衝突 / 安定の中の甘さ: 関係の扱い方が試される
   - Player move: 信頼を守りながら、好意の温度を一段だけ上げる。逃げではなく方法の違いとして伝える
   - Love contract: 戻す / 表面は「体調への配慮」の会話。でも本当は、関係の扱い方が試されるを通して安定の中の甘さを見られている。
   - Hidden ask: ズレた時に、安全すぎて友達のように終わる、または急に押すで済ませず関係の扱い方を直すこと
   - Heart key: 安定の中の甘さ / clue 堅い言い方の中に、次も会いたいニュアンスが混ざる / unlock by 信頼を守りながら、好意の温度を一段だけ上げる
   - Tempting wrong move: 雰囲気だけで押すと、誠実さより不確実さが残る。
   - Winning move: 曖昧な好意が、信頼できる約束に変わる。
   - Unsaid safe subtext: 口にしない安心 / 堅い言い方の中に、次も会いたいニュアンスが混ざる。「派手ではなくても、次の予定を自然に積み重ねられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 堅い言い方の中に、次も会いたいニュアンスが混ざる。楽しい温度は届いている。次は「好きという感情だけでなく、どう続けたいかが見える具体的な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 安全すぎて友達のように終わる、または急に押すように響き、「約束や準備を当たり前にされ、自分だけが関係を大切にしているように感じること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: CONFLICT / 衝突運用
   - Player lesson: 揉めたことより、揉め方が見られている。解決速度と感情の安全を両立する。
   - Tactical read: CONFLICT / 修復ルールを作る
   - Preferred move: concrete / empathize
   - Risky move: playful / dismiss
   - Tactical note: 衝突では感情だけで流さず、次に同じズレが起きた時の扱い方を一つ決める。
   - Payoff: 心理スイッチ「安定の中の甘さ」が開くと、次の本音に進みやすい。信頼を守りながら、好意の温度を一段だけ上げること。
   - Trap: 安全すぎて友達のように終わる、または急に押すと、場面の目的「相手の段取りを尊重し、共同で調整する」から外れる。

12. **好意の伝え方**
   - Location: 昼食後の静かな道
   - Scene goal: 好意を茶化さず、具体的に返す
   - Active switch: 安定の中の甘さ / opens when 信頼を守りながら、好意の温度を一段だけ上げる
   - Switch tell: 堅い言い方の中に、次も会いたいニュアンスが混ざる
   - Dramaturgy: 本音 / 安定の中の甘さ: 弱さや怖さの開示
   - Player move: 信頼を守りながら、好意の温度を一段だけ上げる。保護ではなく信頼として受け取る
   - Love contract: 戻す / 表面は「好意の伝え方」の会話。でも本当は、弱さや怖さの開示を通して安定の中の甘さを見られている。
   - Hidden ask: ズレた時に、安全すぎて友達のように終わる、または急に押すで済ませず関係の扱い方を直すこと
   - Heart key: 安定の中の甘さ / clue 堅い言い方の中に、次も会いたいニュアンスが混ざる / unlock by 信頼を守りながら、好意の温度を一段だけ上げる
   - Tempting wrong move: 雰囲気だけで押すと、誠実さより不確実さが残る。
   - Winning move: 曖昧な好意が、信頼できる約束に変わる。
   - Unsaid safe subtext: 口にしない安心 / 堅い言い方の中に、次も会いたいニュアンスが混ざる。「派手ではなくても、次の予定を自然に積み重ねられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 堅い言い方の中に、次も会いたいニュアンスが混ざる。楽しい温度は届いている。次は「好きという感情だけでなく、どう続けたいかが見える具体的な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 安全すぎて友達のように終わる、または急に押すように響き、「約束や準備を当たり前にされ、自分だけが関係を大切にしているように感じること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: TRUTH / 本音受容
   - Player lesson: 弱さを直さず、信頼として受け取る。守るより、軽く扱わない姿勢を見せる。
   - Tactical read: TRUTH / 気持ちを形にする
   - Preferred move: concrete / empathize
   - Risky move: dismiss / pushy
   - Tactical note: ハルカは優しさそのものより、続けられる形を見ている。具体性が安心になる。
   - Payoff: 心理スイッチ「安定の中の甘さ」が開くと、次の本音に進みやすい。信頼を守りながら、好意の温度を一段だけ上げること。
   - Trap: 安全すぎて友達のように終わる、または急に押すと、場面の目的「好意を茶化さず、具体的に返す」から外れる。

13. **意見の違い**
   - Location: 次の行き先を決める交差点
   - Scene goal: 違いを勝ち負けにせず、条件を整理する
   - Active switch: 安定の中の甘さ / opens when 信頼を守りながら、好意の温度を一段だけ上げる
   - Switch tell: 堅い言い方の中に、次も会いたいニュアンスが混ざる
   - Dramaturgy: 和解 / 安定の中の甘さ: 揉め方を学ぶ
   - Player move: 信頼を守りながら、好意の温度を一段だけ上げる。雰囲気で流さず、次の扱い方を一つ決める
   - Love contract: 決める / 表面は「意見の違い」の会話。でも本当は、揉め方を学ぶを通して安定の中の甘さを見られている。
   - Hidden ask: 好きという感情だけでなく、どう続けたいかが見える具体的な言葉。
   - Heart key: 安定の中の甘さ / clue 堅い言い方の中に、次も会いたいニュアンスが混ざる / unlock by 信頼を守りながら、好意の温度を一段だけ上げる
   - Tempting wrong move: 雰囲気だけで押すと、誠実さより不確実さが残る。
   - Winning move: 曖昧な好意が、信頼できる約束に変わる。
   - Unsaid safe subtext: 口にしない安心 / 堅い言い方の中に、次も会いたいニュアンスが混ざる。「派手ではなくても、次の予定を自然に積み重ねられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 堅い言い方の中に、次も会いたいニュアンスが混ざる。楽しい温度は届いている。次は「好きという感情だけでなく、どう続けたいかが見える具体的な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 安全すぎて友達のように終わる、または急に押すように響き、「約束や準備を当たり前にされ、自分だけが関係を大切にしているように感じること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: RESET / 再契約
   - Player lesson: 仲直りで終わらせず、次に同じズレが起きた時の扱い方を決める。
   - Tactical read: RESET / 気持ちを形にする
   - Preferred move: concrete / empathize
   - Risky move: dismiss / pushy
   - Tactical note: ハルカは優しさそのものより、続けられる形を見ている。具体性が安心になる。
   - Payoff: 心理スイッチ「安定の中の甘さ」が開くと、次の本音に進みやすい。信頼を守りながら、好意の温度を一段だけ上げること。
   - Trap: 安全すぎて友達のように終わる、または急に押すと、場面の目的「違いを勝ち負けにせず、条件を整理する」から外れる。

14. **関係の確認**
   - Location: 夕方の公園
   - Scene goal: 関係確認から逃げず、期限を押しつけない
   - Active switch: 安定の中の甘さ / opens when 信頼を守りながら、好意の温度を一段だけ上げる
   - Switch tell: 堅い言い方の中に、次も会いたいニュアンスが混ざる
   - Dramaturgy: 告白前 / 安定の中の甘さ: 緊張を守る
   - Player move: 信頼を守りながら、好意の温度を一段だけ上げる。茶化しすぎず、聞く姿勢をはっきり見せる
   - Love contract: 決める / 表面は「関係の確認」の会話。でも本当は、緊張を守るを通して安定の中の甘さを見られている。
   - Hidden ask: 好きという感情だけでなく、どう続けたいかが見える具体的な言葉。
   - Heart key: 安定の中の甘さ / clue 堅い言い方の中に、次も会いたいニュアンスが混ざる / unlock by 信頼を守りながら、好意の温度を一段だけ上げる
   - Tempting wrong move: 雰囲気だけで押すと、誠実さより不確実さが残る。
   - Winning move: 曖昧な好意が、信頼できる約束に変わる。
   - Unsaid safe subtext: 口にしない安心 / 堅い言い方の中に、次も会いたいニュアンスが混ざる。「派手ではなくても、次の予定を自然に積み重ねられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 堅い言い方の中に、次も会いたいニュアンスが混ざる。楽しい温度は届いている。次は「好きという感情だけでなく、どう続けたいかが見える具体的な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 安全すぎて友達のように終わる、または急に押すように響き、「約束や準備を当たり前にされ、自分だけが関係を大切にしているように感じること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: READY / 緊張保持
   - Player lesson: 告白前の震えを茶化しすぎない。沈黙も相手の勇気の一部として扱う。
   - Tactical read: READY / 気持ちを形にする
   - Preferred move: concrete / empathize
   - Risky move: dismiss / pushy
   - Tactical note: ハルカは優しさそのものより、続けられる形を見ている。具体性が安心になる。
   - Payoff: 心理スイッチ「安定の中の甘さ」が開くと、次の本音に進みやすい。信頼を守りながら、好意の温度を一段だけ上げること。
   - Trap: 安全すぎて友達のように終わる、または急に押すと、場面の目的「関係確認から逃げず、期限を押しつけない」から外れる。

15. **帰り際**
   - Location: 駅のホーム
   - Scene goal: 今日の信頼を締め、次の行動を約束する
   - Active switch: 安定の中の甘さ / opens when 信頼を守りながら、好意の温度を一段だけ上げる
   - Switch tell: 堅い言い方の中に、次も会いたいニュアンスが混ざる
   - Dramaturgy: 余韻 / 成立した関係を雑に扱わない
   - Player move: 次の約束まで丁寧に置く
   - Love contract: 決める / 表面は「帰り際」の会話。でも本当は、関係の定義を通して安定の中の甘さを見られている。
   - Hidden ask: 好きという感情だけでなく、どう続けたいかが見える具体的な言葉。
   - Heart key: 安定の中の甘さ / clue 堅い言い方の中に、次も会いたいニュアンスが混ざる / unlock by 信頼を守りながら、好意の温度を一段だけ上げる
   - Tempting wrong move: 雰囲気だけで押すと、誠実さより不確実さが残る。
   - Winning move: 曖昧な好意が、信頼できる約束に変わる。
   - Unsaid safe subtext: 口にしない安心 / 堅い言い方の中に、次も会いたいニュアンスが混ざる。「派手ではなくても、次の予定を自然に積み重ねられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 堅い言い方の中に、次も会いたいニュアンスが混ざる。楽しい温度は届いている。次は「好きという感情だけでなく、どう続けたいかが見える具体的な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 安全すぎて友達のように終わる、または急に押すように響き、「約束や準備を当たり前にされ、自分だけが関係を大切にしているように感じること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: AFTER / 余韻設計
   - Player lesson: 成立後こそ雑にしない。所有感ではなく、次の約束で大切に締める。
   - Tactical read: COMMIT / 気持ちを形にする
   - Preferred move: concrete / empathize
   - Risky move: dismiss / pushy
   - Tactical note: ハルカは優しさそのものより、続けられる形を見ている。具体性が安心になる。
   - Payoff: 心理スイッチ「安定の中の甘さ」が開くと、次の本音に進みやすい。信頼を守りながら、好意の温度を一段だけ上げること。
   - Trap: 安全すぎて友達のように終わる、または急に押すと、場面の目的「今日の信頼を締め、次の行動を約束する」から外れる。

## ユウ / ESTP

**Promise:** 言葉より先に動く人と、体験の中で本音へ近づく恋。

**Core tension:** 重い空気は苦手。でも、逃げたいわけではない。

**Winning mindset:** 短く率直に誘い、体験の後で必要な言葉を足す。

**Temptation trap:** 長すぎる感情確認、関係の定義を急ぐこと、疑いから入ること。

**Visual formula:** ボルダリング、夜景ドライブ、海沿い。動き・距離・笑いの瞬間を重視。

**Player fantasy:** 一緒に動いて笑ううちに、言葉にしにくい本音がふっと出る。

**Signature dilemma:** 軽さだけだと逃げに見える。真剣な場面では短くても言葉を足す。

### Date Missions

- **Date 1: MOVE WITH HIM / 会話を体験に変える**
  - Aim: 初回デートでは、説明で詰めず、一緒に動ける提案で距離を縮める。
  - Target: sparkまたはaction系を2回以上、strainを1回以下
  - Success: ユウは気を使いすぎずに、あなたとのテンポを楽しいものとして覚える。
  - Risk: 座ったまま気持ちを確認し続けると、逃げ道を探し始める。
  - Mission image cue: ボルダリングジム、チョークのついた手、笑って振り返る瞬間
- **Date 2: SHORT TRUTH / 短い本音を置く**
  - Aim: 価値観デートでは、軽さを壊さず、一瞬の真顔に短く意味を返す。
  - Target: safeを1回以上、sparkを1回以上、strainを1回以下
  - Success: 軽口の奥にある真剣さを見逃さない相手として、ユウの信頼が上がる。
  - Risk: 軽い人だと決めつけるか、長文で詰めると本音が戻る。
  - Mission image cue: 夜景ドライブ前の駐車場、冗談の後に少し真顔になる横顔
- **Date 3: FREE NEXT / 自由のまま次へ誘う**
  - Aim: 終盤では、義務にせず、でも行動で好意を見せて次の体験へつなぐ。
  - Target: actionまたはsparkを1回以上、safeを1回以上、strainを1回以下
  - Success: 縛られないのに大事にされる感覚が残り、ユウが自分から近づきやすくなる。
  - Risk: 確認や義務の言葉が増えると、楽しい時間が重くなる。
  - Mission image cue: 海沿いの夕方、次の目的地を指す手、風で揺れるジャケット

### Relationship Arc Modes

- **入る**
  - 01 集合: 長い説明より、一緒に動ける提案で距離を縮めることで、行動と本音の接続を大切にすること
  - 02 失敗: 長い説明より、一緒に動ける提案で距離を縮めることで、行動と本音の接続を大切にすること
  - 03 距離の縮め方: 長い説明より、一緒に動ける提案で距離を縮めることで、行動と本音の接続を大切にすること
- **近づく**
  - 04 急な誘い: 長い説明より、一緒に動ける提案で距離を縮めることで、行動と本音の接続を大切にすること
  - 05 次の約束: 長い説明より、一緒に動ける提案で距離を縮めることで、行動と本音の接続を大切にすること
  - 06 安全確認: 重くしすぎず、短く意味のある言葉を置くことで、行動と本音の接続を大切にすること
  - 07 真剣な話への抵抗: 重くしすぎず、短く意味のある言葉を置くことで、行動と本音の接続を大切にすること
  - 08 好意のサイン: 重くしすぎず、短く意味のある言葉を置くことで、行動と本音の接続を大切にすること
  - 09 ペースの違い: 重くしすぎず、短く意味のある言葉を置くことで、行動と本音の接続を大切にすること
  - 10 三回目へ: 重くしすぎず、短く意味のある言葉を置くことで、行動と本音の接続を大切にすること
- **戻す**
  - 11 海沿いの到着: ズレた時に、確認・義務・束縛の言葉で自由を奪うで済ませず関係の扱い方を直すこと
  - 12 不安の共有: ズレた時に、確認・義務・束縛の言葉で自由を奪うで済ませず関係の扱い方を直すこと
- **決める**
  - 13 好意の確認: 重い宣言より、これからも一緒に動く未来が浮かぶ率直な言葉。
  - 14 これからの形: 重い宣言より、これからも一緒に動く未来が浮かぶ率直な言葉。
  - 15 帰り際: 重い宣言より、これからも一緒に動く未来が浮かぶ率直な言葉。

### Character Memory Echoes

Use these echoes as continuity callbacks: later scene context should name the earlier player move that is still affecting trust, spark, strain, or repair. The callback should feel like the character remembers a specific attitude, not like a generic score bonus.

- **safe: ちゃんと受け取った記憶**
  - ユウは、短い本音を重くしすぎず受け取ってくれた場面を覚えている。次は言葉を増やすより、一緒に動く提案が効く。
- **spark: 一緒に動いた記憶**
  - ユウは、あなたが会話を体験に変えてくれたことを覚えている。楽しかった記憶に、短い本音を少し足すと近づく。
- **strain: 詰められた記憶**
  - ユウは、自由やテンポを確認で重くされた場面を覚えている。次は問い詰めるより、逃げ道のある誘いで戻したい。
- **repair: 軽く戻れた記憶**
  - ユウは、気まずさを長引かせず行動で戻してくれたことを覚えている。修復を重くしないのは、かなり相性がいい。
- **mixed: テンポを探った記憶**
  - ユウは、あなたが軽さと真剣さの置き場所を探っているのを感じている。次は短く率直に、行動で示したい。
- Memory image cue: 動き出す足元、笑いの後に残る真顔、次の目的地を示す手、余白のあるアウトドアカット

**Attraction switches:** 短く率直な誘い / 体験を一緒に楽しむ / 必要な時だけ意味を添える

**Turn-offs:** 長い詰問 / 重すぎる関係定義 / 疑いから入る確認

### Character Decoder Rule

During play, surface the character's attraction switches and turn-offs as learnable signals. Positive choices should name what opened; risky choices should name the turn-off and provide one repair line rather than only punishing the player.

### Character Route Endings

Route compass rule: during play, show the likely route tendency without locking the player in. The forecast should make choices feel consequential while still allowing rerouting through repair, heart-key unlocks, and late-scene clarity.

Replay plan rule: after each ending, give the player one concrete next-run plan using the current route, locked routes, unopened psychological switches, heart-key misses, and character turn-offs. The plan should support autonomy, competence, and relatedness: choose a route, practice one skill, and understand the character more deeply.

Need compass rule: each scene should expose the relationship need being tested, then score whether the player's answer satisfied, nearly satisfied, or threatened it. The need should be character-specific, drawn from the active psychological switch, and should explain autonomy, felt understanding, and concrete next-step safety without turning the character into a fixed stereotype.

Connection bid rule: treat each character line as a small bid for attention, validation, play, repair, vulnerability, or future commitment. Feedback should say whether the player turned toward, turned with spark, turned away, or turned against the bid. This creates emotional consequence even when the main plot remains linear.

Date intermission rule: after each date, insert a character-perspective note that names what the character privately remembers, what still feels fragile, and what the next date will test. The intermission should feel like an episodic story beat shaped by the player's choices, not a neutral score screen.

- **REPAIR / 重くなった空気から、一度外へ出る**
  - Player pattern: 関係を確かめようとして、ユウのテンポを止めすぎた
  - Epilogue: ユウは笑って流そうとするけれど、足取りは少し速い。問い詰められたような空気が、彼には自由を奪われる予感として残った。次は長く説明させるより、一緒に動ける提案で空気を戻したい。
  - Finale line: 「悪い人じゃないのは分かる。でも今日は、ちょっと足が止まった。」
  - Finale memory bridge: テンポを探った記憶として残った今回の接し方が、この最後の表情を少し変えている。ユウは、あなたが軽さと真剣さの置き場所を探っているのを感じている。次は短く率直に、行動で示したい。
  - Next-run mission: 次回は長い確認を避け、体験に誘う選択を序盤で2回以上入れる。
  - Finale next beat: 長い確認をやめ、短い受け取り直しと一緒に動ける提案を出す。
  - Character CG cue: 夜の海沿い、ユウが少し先を歩く、距離はあるが完全には離れていない
  - Finale CG cue: 夜の海沿い、ユウが少し先を歩き、距離はあるが振り返る。ボルダリング、夜景ドライブ、海沿い。動き・距離・笑いの瞬間を重視。
- **RECONNECT / じゃあ歩きながら話そう、で戻れる**
  - Player pattern: ズレた空気を体験へ移し、ユウが逃げずに話せるテンポを作った
  - Epilogue: 止まった空気を、あなたは場所ごと動かした。ユウは歩き出すと少しずつ言葉を戻す。彼にとって修復は、重い話し合いに閉じ込めることではなく、動きながら本音を置ける余白を作ることだった。
  - Finale line: 「歩きながらなら、ちゃんと話せる。止まったまま責められるのは苦手なんだ。」
  - Finale memory bridge: テンポを探った記憶として残った今回の接し方が、この最後の表情を少し変えている。ユウは、あなたが軽さと真剣さの置き場所を探っているのを感じている。次は短く率直に、行動で示したい。
  - Next-run mission: 次回は衝突後、短い本音と一緒に行動提案を出す。
  - Finale next beat: 衝突後の会話を体験へ移し、動きながら本音を置ける余白を作る。
  - Character CG cue: 夜景の歩道、ユウが振り返って少し真顔になる、並んで歩く余白
  - Finale CG cue: 夜景の歩道、ユウが振り返って少し真顔になる。ボルダリング、夜景ドライブ、海沿い。動き・距離・笑いの瞬間を重視。
- **SPARK / 勢いで近づいて、短い本音で残す**
  - Player pattern: 体験の勢いで距離を縮め、ユウが自然に本音を出せる入口を作った
  - Epilogue: ユウは今日のテンポをかなり気に入っている。笑って、動いて、少し無茶をして、そのあとに短い本音が残った。次は軽さを逃げに見せず、ここぞという場面で意味を足したい。
  - Finale line: 「今日みたいなの、かなり好き。軽いだけじゃないって伝わってたらいいけど。」
  - Finale memory bridge: テンポを探った記憶として残った今回の接し方が、この最後の表情を少し変えている。ユウは、あなたが軽さと真剣さの置き場所を探っているのを感じている。次は短く率直に、行動で示したい。
  - Next-run mission: 次回はsparkを活かしつつ、終盤で短い本音のsafeを2回以上入れる。
  - Finale next beat: 勢いの後に短い本音を置き、軽さを逃げに見せない。
  - Character CG cue: 夜景ドライブの停車中、ユウが笑ったあと少し真剣な目になる、車内の光
  - Finale CG cue: 夜景ドライブの停車中、ユウが笑ったあと少し真剣な目になる。ボルダリング、夜景ドライブ、海沿い。動き・距離・笑いの瞬間を重視。
- **TRUST / 安心はある。次は一緒に動きたい**
  - Player pattern: ユウを縛らない安心は作れたが、体験の熱量を足せる余地がある
  - Epilogue: あなたの誠実さはユウに届いている。ただ、守られてばかりの会話だと、彼の身体が先に退屈を感じる。次は安心を土台に、短く誘って一緒に体験する流れを作りたい。
  - Finale line: 「安心はする。次はさ、考えるより先に一回行ってみよう。」
  - Finale memory bridge: テンポを探った記憶として残った今回の接し方が、この最後の表情を少し変えている。ユウは、あなたが軽さと真剣さの置き場所を探っているのを感じている。次は短く率直に、行動で示したい。
  - Next-run mission: 次回はsafeの後にaction系の選択を混ぜ、会話を体験へつなげる。
  - Finale next beat: 安全を確認したうえで、ユウが身体で近づける体験へつなげる。
  - Character CG cue: 昼の公園、ユウが立ち上がって手元のチケットを見せる、軽い笑顔
  - Finale CG cue: 昼の公園、ユウが立ち上がって手元のチケットを見せる。ボルダリング、夜景ドライブ、海沿い。動き・距離・笑いの瞬間を重視。
- **BALANCE / 動いたあとに残る言葉が、ちゃんと本音になる**
  - Player pattern: 行動と本音を接続し、ユウが自由なまま近づける関係を作った
  - Epilogue: あなたはユウの軽快さに乗り、必要なところで逃げずに言葉を足した。彼は最後に『次、どこ行く？』と聞く。軽い誘いに見えて、その声には続けたい気持ちが混ざっている。
  - Finale line: 「楽しいことも、ちゃんとしたことも、どっちも逃げないでやれそう。」
  - Finale memory bridge: テンポを探った記憶として残った今回の接し方が、この最後の表情を少し変えている。ユウは、あなたが軽さと真剣さの置き場所を探っているのを感じている。次は短く率直に、行動で示したい。
  - Next-run mission: 次回は3つの心理スイッチを解放し、最後の告白を短く率直に返す。
  - Finale next beat: 行動と本音を接続し、次の場所への誘いで関係を進める。
  - Character CG cue: 夜の海沿い、ユウが次の場所を指差す、笑いと本音が同時にある表情
  - Finale CG cue: 夜の海沿い、ユウが次の場所を指差し、笑いと本音が同時にある。ボルダリング、夜景ドライブ、海沿い。動き・距離・笑いの瞬間を重視。

### Psychological Switches

- **体験で近づく**
  - Opens: 長い説明より、一緒に動ける提案で距離を縮める
  - Hurts: 座ったまま感情確認を続け、テンポを止める
  - Tell: すぐ立ち上がる、次の動きを提案する、笑いながら試す
- **短い本音**
  - Opens: 重くしすぎず、短く意味のある言葉を置く
  - Hurts: 軽口だけで逃げる、または長文で詰める
  - Tell: ふざけたあとに一瞬だけ真顔が混ざる
- **自由の信頼**
  - Opens: 縛らず疑わず、行動で伝えた好意を見逃さない
  - Hurts: 確認・義務・束縛の言葉で自由を奪う
  - Tell: 次の予定を軽く言いながら、あなたの反応を見る

### Reading Cues

- Signal: 座ったままの説明より、立ち上がる・移動する提案が増える
  - Good read: 言葉を詰めるより、一緒に動ける選択肢で距離を縮める
  - Misread: 逃げていると決めつけ、座ったまま感情確認を続ける
  - Player question: 会話を体験に逃がす余白を作れているか？
- Signal: 軽口のあとに一瞬だけ真顔が混ざる
  - Good read: 短く意味のある本音を置けば受け取れるタイミングだと読む
  - Misread: 軽い人だと決めつける、または長文で詰める
  - Player question: 短く率直に言えているか？
- Signal: 次の予定を軽く言いながら、縛られないか反応を見る
  - Good read: 自由を疑わず、行動で出した好意を見逃さない
  - Misread: 確認や義務の言葉で、楽しい時間を重くする
  - Player question: 自由を残したまま次へ誘えているか？

### Inner Layer

- Public mask: 軽くて余裕があるように見えるが、縛られる前提で近づかれるとすぐ身構える。
- Fear: 楽しい時間を、すぐ義務や確認の連続に変えられること。
- Opens when: 一緒に動いて笑ったあと、短い言葉でちゃんと意味を置いてもらえた時。
- Closes when: 何を考えているか全部説明して、と詰められた時。
- Private wish: 言葉にするのは得意じゃなくても、行動で伝えた好意を見逃さないでほしい。
- Confession need: 重い宣言より、これからも一緒に動く未来が浮かぶ率直な言葉。

### Persona

- Summary: 考え込むより、まず体験して距離を縮めたいタイプ。テンポ、率直さ、その場の楽しさを大切にします。
- Needs: 共通の体験 / 熱意 / 退屈しない刺激
- Conflict: 対立を恐れず、その場で決着をつけたい。感情が強く出ても長く引きずらないことが多い。
- Reassurance: 一緒に動くこと、スキンシップ、楽しい体験の共有。
- Good lines: 次はそこ行こう。まず試してみたい / 話してたら行きたくなってきた / 今度はもっと動けるデートにしよう
- Bad lines: この関係を定義したいから朝まで話そう / 察してほしい / 失敗したらどうするか先に全部決めたい

### Story Arc

#### 初回デート: ボルダリングジム

Purpose: 一緒に動き、短く率直な会話で距離を縮める

1. **集合**
   - Location: ジムの受付前
   - Scene goal: 行動提案を面白がり、短く乗る
   - Active switch: 体験で近づく / opens when 長い説明より、一緒に動ける提案で距離を縮める
   - Switch tell: すぐ立ち上がる、次の動きを提案する、笑いながら試す
   - Dramaturgy: 入口 / 体験で近づく: 第一印象の安全確認
   - Player move: 長い説明より、一緒に動ける提案で距離を縮める。相手のテンポを観察し、いきなり型にはめない
   - Love contract: 入る / 表面は「集合」の会話。でも本当は、第一印象の安全確認を通して体験で近づくを見られている。
   - Hidden ask: 長い説明より、一緒に動ける提案で距離を縮めることで、行動と本音の接続を大切にすること
   - Heart key: 体験で近づく / clue すぐ立ち上がる、次の動きを提案する、笑いながら試す / unlock by 長い説明より、一緒に動ける提案で距離を縮める
   - Tempting wrong move: 感情確認を長く続けると、足が止まって逃げたくなる。
   - Winning move: 考える前に一緒に動ける相手として距離が縮まる。
   - Unsaid safe subtext: 口にしない安心 / すぐ立ち上がる、次の動きを提案する、笑いながら試す。「言葉にするのは得意じゃなくても、行動で伝えた好意を見逃さないでほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / すぐ立ち上がる、次の動きを提案する、笑いながら試す。楽しい温度は届いている。次は「重い宣言より、これからも一緒に動く未来が浮かぶ率直な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 座ったまま感情確認を続け、テンポを止めるように響き、「楽しい時間を、すぐ義務や確認の連続に変えられること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: OBSERVE / 観察
   - Player lesson: 相手の緊張・視線・距離を読む。最初の正解は盛り上げることではなく、入っていい速度を測ること。
   - Tactical read: OBSERVE / 動きながら本音を置く
   - Preferred move: action / playful
   - Risky move: pushy
   - Tactical note: ユウは長い確認より、体験の中で近づくほうが自然。重さを短い本音に変える。
   - Payoff: 心理スイッチ「体験で近づく」が開くと、次の本音に進みやすい。長い説明より、一緒に動ける提案で距離を縮めること。
   - Trap: 座ったまま感情確認を続け、テンポを止めると、場面の目的「行動提案を面白がり、短く乗る」から外れる。

2. **失敗**
   - Location: 初心者用ウォール
   - Scene goal: 失敗を軽やかに扱いつつ安全確認する
   - Active switch: 体験で近づく / opens when 長い説明より、一緒に動ける提案で距離を縮める
   - Switch tell: すぐ立ち上がる、次の動きを提案する、笑いながら試す
   - Dramaturgy: 輪郭 / 体験で近づく: 自分の軸を少し見せる
   - Player move: 長い説明より、一緒に動ける提案で距離を縮める。聞き役に逃げず、相手が判断できる材料を出す
   - Love contract: 入る / 表面は「失敗」の会話。でも本当は、自分の軸を少し見せるを通して体験で近づくを見られている。
   - Hidden ask: 長い説明より、一緒に動ける提案で距離を縮めることで、行動と本音の接続を大切にすること
   - Heart key: 体験で近づく / clue すぐ立ち上がる、次の動きを提案する、笑いながら試す / unlock by 長い説明より、一緒に動ける提案で距離を縮める
   - Tempting wrong move: 感情確認を長く続けると、足が止まって逃げたくなる。
   - Winning move: 考える前に一緒に動ける相手として距離が縮まる。
   - Unsaid safe subtext: 口にしない安心 / すぐ立ち上がる、次の動きを提案する、笑いながら試す。「言葉にするのは得意じゃなくても、行動で伝えた好意を見逃さないでほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / すぐ立ち上がる、次の動きを提案する、笑いながら試す。楽しい温度は届いている。次は「重い宣言より、これからも一緒に動く未来が浮かぶ率直な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 座ったまま感情確認を続け、テンポを止めるように響き、「楽しい時間を、すぐ義務や確認の連続に変えられること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: OPEN / 自己開示
   - Player lesson: 聞くだけでなく、自分の基準を一つ渡す。相手があなたを判断できる材料を作る。
   - Tactical read: OPEN / 動きながら本音を置く
   - Preferred move: action / playful
   - Risky move: pushy
   - Tactical note: ユウは長い確認より、体験の中で近づくほうが自然。重さを短い本音に変える。
   - Payoff: 心理スイッチ「体験で近づく」が開くと、次の本音に進みやすい。長い説明より、一緒に動ける提案で距離を縮めること。
   - Trap: 座ったまま感情確認を続け、テンポを止めると、場面の目的「失敗を軽やかに扱いつつ安全確認する」から外れる。

3. **距離の縮め方**
   - Location: 休憩ベンチ
   - Scene goal: 行動で伝わる好意も認める
   - Active switch: 体験で近づく / opens when 長い説明より、一緒に動ける提案で距離を縮める
   - Switch tell: すぐ立ち上がる、次の動きを提案する、笑いながら試す
   - Dramaturgy: ほころび / 体験で近づく: 表情がゆるむ瞬間
   - Player move: 長い説明より、一緒に動ける提案で距離を縮める。笑いを取りに行くより、警戒がほどけた理由を守る
   - Love contract: 入る / 表面は「距離の縮め方」の会話。でも本当は、表情がゆるむ瞬間を通して体験で近づくを見られている。
   - Hidden ask: 長い説明より、一緒に動ける提案で距離を縮めることで、行動と本音の接続を大切にすること
   - Heart key: 体験で近づく / clue すぐ立ち上がる、次の動きを提案する、笑いながら試す / unlock by 長い説明より、一緒に動ける提案で距離を縮める
   - Tempting wrong move: 感情確認を長く続けると、足が止まって逃げたくなる。
   - Winning move: 考える前に一緒に動ける相手として距離が縮まる。
   - Unsaid safe subtext: 口にしない安心 / すぐ立ち上がる、次の動きを提案する、笑いながら試す。「言葉にするのは得意じゃなくても、行動で伝えた好意を見逃さないでほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / すぐ立ち上がる、次の動きを提案する、笑いながら試す。楽しい温度は届いている。次は「重い宣言より、これからも一緒に動く未来が浮かぶ率直な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 座ったまま感情確認を続け、テンポを止めるように響き、「楽しい時間を、すぐ義務や確認の連続に変えられること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: SYNC / 温度合わせ
   - Player lesson: 笑った理由を守る。冗談は距離を縮めるが、相手を素材にしない。
   - Tactical read: SYNC / 動きながら本音を置く
   - Preferred move: action / playful
   - Risky move: pushy
   - Tactical note: ユウは長い確認より、体験の中で近づくほうが自然。重さを短い本音に変える。
   - Payoff: 心理スイッチ「体験で近づく」が開くと、次の本音に進みやすい。長い説明より、一緒に動ける提案で距離を縮めること。
   - Trap: 座ったまま感情確認を続け、テンポを止めると、場面の目的「行動で伝わる好意も認める」から外れる。

4. **急な誘い**
   - Location: ジム出口
   - Scene goal: 即興に乗るか、断るなら軽く代案を出す
   - Active switch: 体験で近づく / opens when 長い説明より、一緒に動ける提案で距離を縮める
   - Switch tell: すぐ立ち上がる、次の動きを提案する、笑いながら試す
   - Dramaturgy: 価値観 / 体験で近づく: 恋愛観や生活観の違い
   - Player move: 長い説明より、一緒に動ける提案で距離を縮める。反論ではなく、相手の言葉の芯を確認する
   - Love contract: 近づく / 表面は「急な誘い」の会話。でも本当は、恋愛観や生活観の違いを通して体験で近づくを見られている。
   - Hidden ask: 長い説明より、一緒に動ける提案で距離を縮めることで、行動と本音の接続を大切にすること
   - Heart key: 体験で近づく / clue すぐ立ち上がる、次の動きを提案する、笑いながら試す / unlock by 長い説明より、一緒に動ける提案で距離を縮める
   - Tempting wrong move: 感情確認を長く続けると、足が止まって逃げたくなる。
   - Winning move: 考える前に一緒に動ける相手として距離が縮まる。
   - Unsaid safe subtext: 口にしない安心 / すぐ立ち上がる、次の動きを提案する、笑いながら試す。「言葉にするのは得意じゃなくても、行動で伝えた好意を見逃さないでほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / すぐ立ち上がる、次の動きを提案する、笑いながら試す。楽しい温度は届いている。次は「重い宣言より、これからも一緒に動く未来が浮かぶ率直な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 座ったまま感情確認を続け、テンポを止めるように響き、「楽しい時間を、すぐ義務や確認の連続に変えられること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: VALUE / 価値観翻訳
   - Player lesson: 違いを否定せず、相手が何を守ろうとしているかを言葉にする。
   - Tactical read: VALUE / 動きながら本音を置く
   - Preferred move: action / playful
   - Risky move: pushy
   - Tactical note: ユウは長い確認より、体験の中で近づくほうが自然。重さを短い本音に変える。
   - Payoff: 心理スイッチ「体験で近づく」が開くと、次の本音に進みやすい。長い説明より、一緒に動ける提案で距離を縮めること。
   - Trap: 座ったまま感情確認を続け、テンポを止めると、場面の目的「即興に乗るか、断るなら軽く代案を出す」から外れる。

5. **次の約束**
   - Location: ラーメン店の外
   - Scene goal: 軽快な誘いを受け、必要な安全確認も自然にする
   - Active switch: 体験で近づく / opens when 長い説明より、一緒に動ける提案で距離を縮める
   - Switch tell: すぐ立ち上がる、次の動きを提案する、笑いながら試す
   - Dramaturgy: 小さなズレ / 体験で近づく: 受け取り違いの修正
   - Player move: 長い説明より、一緒に動ける提案で距離を縮める。勝ち負けにせず、何がずれたかを再接続する
   - Love contract: 近づく / 表面は「次の約束」の会話。でも本当は、受け取り違いの修正を通して体験で近づくを見られている。
   - Hidden ask: 長い説明より、一緒に動ける提案で距離を縮めることで、行動と本音の接続を大切にすること
   - Heart key: 体験で近づく / clue すぐ立ち上がる、次の動きを提案する、笑いながら試す / unlock by 長い説明より、一緒に動ける提案で距離を縮める
   - Tempting wrong move: 感情確認を長く続けると、足が止まって逃げたくなる。
   - Winning move: 考える前に一緒に動ける相手として距離が縮まる。
   - Unsaid safe subtext: 口にしない安心 / すぐ立ち上がる、次の動きを提案する、笑いながら試す。「言葉にするのは得意じゃなくても、行動で伝えた好意を見逃さないでほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / すぐ立ち上がる、次の動きを提案する、笑いながら試す。楽しい温度は届いている。次は「重い宣言より、これからも一緒に動く未来が浮かぶ率直な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 座ったまま感情確認を続け、テンポを止めるように響き、「楽しい時間を、すぐ義務や確認の連続に変えられること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: REPAIR / 修復
   - Player lesson: ズレを勝ち負けにしない。相手の論点を小さく扱わず、受け取り直す。
   - Tactical read: REPAIR / 動きながら本音を置く
   - Preferred move: action / playful
   - Risky move: pushy
   - Tactical note: ユウは長い確認より、体験の中で近づくほうが自然。重さを短い本音に変える。
   - Payoff: 心理スイッチ「体験で近づく」が開くと、次の本音に進みやすい。長い説明より、一緒に動ける提案で距離を縮めること。
   - Trap: 座ったまま感情確認を続け、テンポを止めると、場面の目的「軽快な誘いを受け、必要な安全確認も自然にする」から外れる。

#### 価値観デート: 夜景ドライブ

Purpose: 軽快さの奥にある誠実さと境界線を確認する

6. **安全確認**
   - Location: 集合場所の駐車場
   - Scene goal: 行動派のデートでも安全と境界線を明確にする
   - Active switch: 短い本音 / opens when 重くしすぎず、短く意味のある言葉を置く
   - Switch tell: ふざけたあとに一瞬だけ真顔が混ざる
   - Dramaturgy: 核 / 短い本音: 相手の大事な基準
   - Player move: 重くしすぎず、短く意味のある言葉を置く。厳しさや明るさの裏にある願いを言語化する
   - Love contract: 近づく / 表面は「安全確認」の会話。でも本当は、相手の大事な基準を通して短い本音を見られている。
   - Hidden ask: 重くしすぎず、短く意味のある言葉を置くことで、行動と本音の接続を大切にすること
   - Heart key: 短い本音 / clue ふざけたあとに一瞬だけ真顔が混ざる / unlock by 重くしすぎず、短く意味のある言葉を置く
   - Tempting wrong move: 感情確認を長く続けると、足が止まって逃げたくなる。
   - Winning move: 考える前に一緒に動ける相手として距離が縮まる。
   - Unsaid safe subtext: 口にしない安心 / ふざけたあとに一瞬だけ真顔が混ざる。「言葉にするのは得意じゃなくても、行動で伝えた好意を見逃さないでほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / ふざけたあとに一瞬だけ真顔が混ざる。楽しい温度は届いている。次は「重い宣言より、これからも一緒に動く未来が浮かぶ率直な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 軽口だけで逃げる、または長文で詰めるように響き、「楽しい時間を、すぐ義務や確認の連続に変えられること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: CORE / 芯を見る
   - Player lesson: 強さ・明るさ・慎重さの裏にある願いを拾う。褒めるなら性格の芯を褒める。
   - Tactical read: CORE / 動きながら本音を置く
   - Preferred move: action / playful
   - Risky move: pushy
   - Tactical note: ユウは長い確認より、体験の中で近づくほうが自然。重さを短い本音に変える。
   - Payoff: 心理スイッチ「短い本音」が開くと、次の本音に進みやすい。重くしすぎず、短く意味のある言葉を置くこと。
   - Trap: 軽口だけで逃げる、または長文で詰めると、場面の目的「行動派のデートでも安全と境界線を明確にする」から外れる。

7. **真剣な話への抵抗**
   - Location: 展望台へ向かう車内
   - Scene goal: 重い話を責める場にしない
   - Active switch: 短い本音 / opens when 重くしすぎず、短く意味のある言葉を置く
   - Switch tell: ふざけたあとに一瞬だけ真顔が混ざる
   - Dramaturgy: 夜 / 短い本音: 本音が出やすい空気
   - Player move: 重くしすぎず、短く意味のある言葉を置く。ムードに頼り切らず、選択肢を残す
   - Love contract: 近づく / 表面は「真剣な話への抵抗」の会話。でも本当は、本音が出やすい空気を通して短い本音を見られている。
   - Hidden ask: 重くしすぎず、短く意味のある言葉を置くことで、行動と本音の接続を大切にすること
   - Heart key: 短い本音 / clue ふざけたあとに一瞬だけ真顔が混ざる / unlock by 重くしすぎず、短く意味のある言葉を置く
   - Tempting wrong move: 感情確認を長く続けると、足が止まって逃げたくなる。
   - Winning move: 考える前に一緒に動ける相手として距離が縮まる。
   - Unsaid safe subtext: 口にしない安心 / ふざけたあとに一瞬だけ真顔が混ざる。「言葉にするのは得意じゃなくても、行動で伝えた好意を見逃さないでほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / ふざけたあとに一瞬だけ真顔が混ざる。楽しい温度は届いている。次は「重い宣言より、これからも一緒に動く未来が浮かぶ率直な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 軽口だけで逃げる、または長文で詰めるように響き、「楽しい時間を、すぐ義務や確認の連続に変えられること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: SPACE / 余白作り
   - Player lesson: ムードに流されすぎず、相手が選べる余地を残す。近づくほど境界線を丁寧に。
   - Tactical read: SPACE / 動きながら本音を置く
   - Preferred move: action / playful
   - Risky move: pushy
   - Tactical note: ユウは長い確認より、体験の中で近づくほうが自然。重さを短い本音に変える。
   - Payoff: 心理スイッチ「短い本音」が開くと、次の本音に進みやすい。重くしすぎず、短く意味のある言葉を置くこと。
   - Trap: 軽口だけで逃げる、または長文で詰めると、場面の目的「重い話を責める場にしない」から外れる。

8. **好意のサイン**
   - Location: 夜景スポット
   - Scene goal: 照れ隠しの奥の好意を受け取る
   - Active switch: 短い本音 / opens when 重くしすぎず、短く意味のある言葉を置く
   - Switch tell: ふざけたあとに一瞬だけ真顔が混ざる
   - Dramaturgy: 誘い / 短い本音: 次に進む意思表示
   - Player move: 重くしすぎず、短く意味のある言葉を置く。好意だけでなく、現実の行動へ落とす
   - Love contract: 近づく / 表面は「好意のサイン」の会話。でも本当は、次に進む意思表示を通して短い本音を見られている。
   - Hidden ask: 重くしすぎず、短く意味のある言葉を置くことで、行動と本音の接続を大切にすること
   - Heart key: 短い本音 / clue ふざけたあとに一瞬だけ真顔が混ざる / unlock by 重くしすぎず、短く意味のある言葉を置く
   - Tempting wrong move: 感情確認を長く続けると、足が止まって逃げたくなる。
   - Winning move: 考える前に一緒に動ける相手として距離が縮まる。
   - Unsaid safe subtext: 口にしない安心 / ふざけたあとに一瞬だけ真顔が混ざる。「言葉にするのは得意じゃなくても、行動で伝えた好意を見逃さないでほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / ふざけたあとに一瞬だけ真顔が混ざる。楽しい温度は届いている。次は「重い宣言より、これからも一緒に動く未来が浮かぶ率直な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 軽口だけで逃げる、または長文で詰めるように響き、「楽しい時間を、すぐ義務や確認の連続に変えられること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: MOVE / 次へ進める
   - Player lesson: 気持ちを行動に落とす。曖昧な好意を、次の約束や選択肢に変える。
   - Tactical read: MOVE / 動きながら本音を置く
   - Preferred move: action / playful
   - Risky move: pushy
   - Tactical note: ユウは長い確認より、体験の中で近づくほうが自然。重さを短い本音に変える。
   - Payoff: 心理スイッチ「短い本音」が開くと、次の本音に進みやすい。重くしすぎず、短く意味のある言葉を置くこと。
   - Trap: 軽口だけで逃げる、または長文で詰めると、場面の目的「照れ隠しの奥の好意を受け取る」から外れる。

9. **ペースの違い**
   - Location: 自販機の前
   - Scene goal: 行動力と配慮を切り分けて見る
   - Active switch: 短い本音 / opens when 重くしすぎず、短く意味のある言葉を置く
   - Switch tell: ふざけたあとに一瞬だけ真顔が混ざる
   - Dramaturgy: 準備 / 短い本音: 相手の好みを覚えている証拠
   - Player move: 重くしすぎず、短く意味のある言葉を置く。攻略感ではなく観察と敬意として見せる
   - Love contract: 近づく / 表面は「ペースの違い」の会話。でも本当は、相手の好みを覚えている証拠を通して短い本音を見られている。
   - Hidden ask: 重くしすぎず、短く意味のある言葉を置くことで、行動と本音の接続を大切にすること
   - Heart key: 短い本音 / clue ふざけたあとに一瞬だけ真顔が混ざる / unlock by 重くしすぎず、短く意味のある言葉を置く
   - Tempting wrong move: 感情確認を長く続けると、足が止まって逃げたくなる。
   - Winning move: 考える前に一緒に動ける相手として距離が縮まる。
   - Unsaid safe subtext: 口にしない安心 / ふざけたあとに一瞬だけ真顔が混ざる。「言葉にするのは得意じゃなくても、行動で伝えた好意を見逃さないでほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / ふざけたあとに一瞬だけ真顔が混ざる。楽しい温度は届いている。次は「重い宣言より、これからも一緒に動く未来が浮かぶ率直な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 軽口だけで逃げる、または長文で詰めるように響き、「楽しい時間を、すぐ義務や確認の連続に変えられること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: REMEMBER / 記憶を使う
   - Player lesson: 前に聞いた好みや不安を覚えていると示す。攻略感ではなく敬意として出す。
   - Tactical read: REMEMBER / 動きながら本音を置く
   - Preferred move: action / playful
   - Risky move: pushy
   - Tactical note: ユウは長い確認より、体験の中で近づくほうが自然。重さを短い本音に変える。
   - Payoff: 心理スイッチ「短い本音」が開くと、次の本音に進みやすい。重くしすぎず、短く意味のある言葉を置くこと。
   - Trap: 軽口だけで逃げる、または長文で詰めると、場面の目的「行動力と配慮を切り分けて見る」から外れる。

10. **三回目へ**
   - Location: 帰りの車内
   - Scene goal: 冒険の提案を、境界線込みで受ける
   - Active switch: 短い本音 / opens when 重くしすぎず、短く意味のある言葉を置く
   - Switch tell: ふざけたあとに一瞬だけ真顔が混ざる
   - Dramaturgy: 接近 / 短い本音: 甘さと境界線の同時処理
   - Player move: 重くしすぎず、短く意味のある言葉を置く。近づくほど相手の主導権を奪わない
   - Love contract: 近づく / 表面は「三回目へ」の会話。でも本当は、甘さと境界線の同時処理を通して短い本音を見られている。
   - Hidden ask: 重くしすぎず、短く意味のある言葉を置くことで、行動と本音の接続を大切にすること
   - Heart key: 短い本音 / clue ふざけたあとに一瞬だけ真顔が混ざる / unlock by 重くしすぎず、短く意味のある言葉を置く
   - Tempting wrong move: 感情確認を長く続けると、足が止まって逃げたくなる。
   - Winning move: 考える前に一緒に動ける相手として距離が縮まる。
   - Unsaid safe subtext: 口にしない安心 / ふざけたあとに一瞬だけ真顔が混ざる。「言葉にするのは得意じゃなくても、行動で伝えた好意を見逃さないでほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / ふざけたあとに一瞬だけ真顔が混ざる。楽しい温度は届いている。次は「重い宣言より、これからも一緒に動く未来が浮かぶ率直な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 軽口だけで逃げる、または長文で詰めるように響き、「楽しい時間を、すぐ義務や確認の連続に変えられること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: CLOSER / 接近の調整
   - Player lesson: 甘さを出しつつ、相手の主導権を奪わない。攻める場面ほど逃げ道を残す。
   - Tactical read: CLOSER / 動きながら本音を置く
   - Preferred move: action / playful
   - Risky move: pushy
   - Tactical note: ユウは長い確認より、体験の中で近づくほうが自然。重さを短い本音に変える。
   - Payoff: 心理スイッチ「短い本音」が開くと、次の本音に進みやすい。重くしすぎず、短く意味のある言葉を置くこと。
   - Trap: 軽口だけで逃げる、または長文で詰めると、場面の目的「冒険の提案を、境界線込みで受ける」から外れる。

#### 関係進展デート: 海沿いショートトリップ

Purpose: 勢いと誠実さを両立し、関係の次の形を選ぶ

11. **海沿いの到着**
   - Location: 海が見える駐車場
   - Scene goal: 軽快さの奥にある真剣さを受け取る
   - Active switch: 自由の信頼 / opens when 縛らず疑わず、行動で伝えた好意を見逃さない
   - Switch tell: 次の予定を軽く言いながら、あなたの反応を見る
   - Dramaturgy: 衝突 / 自由の信頼: 関係の扱い方が試される
   - Player move: 縛らず疑わず、行動で伝えた好意を見逃さない。逃げではなく方法の違いとして伝える
   - Love contract: 戻す / 表面は「海沿いの到着」の会話。でも本当は、関係の扱い方が試されるを通して自由の信頼を見られている。
   - Hidden ask: ズレた時に、確認・義務・束縛の言葉で自由を奪うで済ませず関係の扱い方を直すこと
   - Heart key: 自由の信頼 / clue 次の予定を軽く言いながら、あなたの反応を見る / unlock by 縛らず疑わず、行動で伝えた好意を見逃さない
   - Tempting wrong move: 感情確認を長く続けると、足が止まって逃げたくなる。
   - Winning move: 考える前に一緒に動ける相手として距離が縮まる。
   - Unsaid safe subtext: 口にしない安心 / 次の予定を軽く言いながら、あなたの反応を見る。「言葉にするのは得意じゃなくても、行動で伝えた好意を見逃さないでほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 次の予定を軽く言いながら、あなたの反応を見る。楽しい温度は届いている。次は「重い宣言より、これからも一緒に動く未来が浮かぶ率直な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 確認・義務・束縛の言葉で自由を奪うように響き、「楽しい時間を、すぐ義務や確認の連続に変えられること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: CONFLICT / 衝突運用
   - Player lesson: 揉めたことより、揉め方が見られている。解決速度と感情の安全を両立する。
   - Tactical read: CONFLICT / 動きながら本音を置く
   - Preferred move: action / playful
   - Risky move: pushy
   - Tactical note: ユウは長い確認より、体験の中で近づくほうが自然。重さを短い本音に変える。
   - Payoff: 心理スイッチ「自由の信頼」が開くと、次の本音に進みやすい。縛らず疑わず、行動で伝えた好意を見逃さないこと。
   - Trap: 確認・義務・束縛の言葉で自由を奪うと、場面の目的「軽快さの奥にある真剣さを受け取る」から外れる。

12. **不安の共有**
   - Location: 海辺の遊歩道
   - Scene goal: 不足を責めず、改善可能な会話にする
   - Active switch: 自由の信頼 / opens when 縛らず疑わず、行動で伝えた好意を見逃さない
   - Switch tell: 次の予定を軽く言いながら、あなたの反応を見る
   - Dramaturgy: 本音 / 自由の信頼: 弱さや怖さの開示
   - Player move: 縛らず疑わず、行動で伝えた好意を見逃さない。保護ではなく信頼として受け取る
   - Love contract: 戻す / 表面は「不安の共有」の会話。でも本当は、弱さや怖さの開示を通して自由の信頼を見られている。
   - Hidden ask: ズレた時に、確認・義務・束縛の言葉で自由を奪うで済ませず関係の扱い方を直すこと
   - Heart key: 自由の信頼 / clue 次の予定を軽く言いながら、あなたの反応を見る / unlock by 縛らず疑わず、行動で伝えた好意を見逃さない
   - Tempting wrong move: 感情確認を長く続けると、足が止まって逃げたくなる。
   - Winning move: 考える前に一緒に動ける相手として距離が縮まる。
   - Unsaid safe subtext: 口にしない安心 / 次の予定を軽く言いながら、あなたの反応を見る。「言葉にするのは得意じゃなくても、行動で伝えた好意を見逃さないでほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 次の予定を軽く言いながら、あなたの反応を見る。楽しい温度は届いている。次は「重い宣言より、これからも一緒に動く未来が浮かぶ率直な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 確認・義務・束縛の言葉で自由を奪うように響き、「楽しい時間を、すぐ義務や確認の連続に変えられること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: TRUTH / 本音受容
   - Player lesson: 弱さを直さず、信頼として受け取る。守るより、軽く扱わない姿勢を見せる。
   - Tactical read: TRUTH / 軽さの奥を見せる
   - Preferred move: empathize / concrete
   - Risky move: dismiss
   - Tactical note: 本音場面では行動だけだと逃げに見える。短い一文で真剣さを混ぜる。
   - Payoff: 心理スイッチ「自由の信頼」が開くと、次の本音に進みやすい。縛らず疑わず、行動で伝えた好意を見逃さないこと。
   - Trap: 確認・義務・束縛の言葉で自由を奪うと、場面の目的「不足を責めず、改善可能な会話にする」から外れる。

13. **好意の確認**
   - Location: 海の見えるベンチ
   - Scene goal: 不器用な好意を正解判定せず受け取る
   - Active switch: 自由の信頼 / opens when 縛らず疑わず、行動で伝えた好意を見逃さない
   - Switch tell: 次の予定を軽く言いながら、あなたの反応を見る
   - Dramaturgy: 和解 / 自由の信頼: 揉め方を学ぶ
   - Player move: 縛らず疑わず、行動で伝えた好意を見逃さない。雰囲気で流さず、次の扱い方を一つ決める
   - Love contract: 決める / 表面は「好意の確認」の会話。でも本当は、揉め方を学ぶを通して自由の信頼を見られている。
   - Hidden ask: 重い宣言より、これからも一緒に動く未来が浮かぶ率直な言葉。
   - Heart key: 自由の信頼 / clue 次の予定を軽く言いながら、あなたの反応を見る / unlock by 縛らず疑わず、行動で伝えた好意を見逃さない
   - Tempting wrong move: 感情確認を長く続けると、足が止まって逃げたくなる。
   - Winning move: 考える前に一緒に動ける相手として距離が縮まる。
   - Unsaid safe subtext: 口にしない安心 / 次の予定を軽く言いながら、あなたの反応を見る。「言葉にするのは得意じゃなくても、行動で伝えた好意を見逃さないでほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 次の予定を軽く言いながら、あなたの反応を見る。楽しい温度は届いている。次は「重い宣言より、これからも一緒に動く未来が浮かぶ率直な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 確認・義務・束縛の言葉で自由を奪うように響き、「楽しい時間を、すぐ義務や確認の連続に変えられること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: RESET / 再契約
   - Player lesson: 仲直りで終わらせず、次に同じズレが起きた時の扱い方を決める。
   - Tactical read: RESET / 動きながら本音を置く
   - Preferred move: action / playful
   - Risky move: pushy
   - Tactical note: ユウは長い確認より、体験の中で近づくほうが自然。重さを短い本音に変える。
   - Payoff: 心理スイッチ「自由の信頼」が開くと、次の本音に進みやすい。縛らず疑わず、行動で伝えた好意を見逃さないこと。
   - Trap: 確認・義務・束縛の言葉で自由を奪うと、場面の目的「不器用な好意を正解判定せず受け取る」から外れる。

14. **これからの形**
   - Location: 帰り支度の前
   - Scene goal: 重い話への苦手さと誠実さを両立して理解する
   - Active switch: 自由の信頼 / opens when 縛らず疑わず、行動で伝えた好意を見逃さない
   - Switch tell: 次の予定を軽く言いながら、あなたの反応を見る
   - Dramaturgy: 告白前 / 自由の信頼: 緊張を守る
   - Player move: 縛らず疑わず、行動で伝えた好意を見逃さない。茶化しすぎず、聞く姿勢をはっきり見せる
   - Love contract: 決める / 表面は「これからの形」の会話。でも本当は、緊張を守るを通して自由の信頼を見られている。
   - Hidden ask: 重い宣言より、これからも一緒に動く未来が浮かぶ率直な言葉。
   - Heart key: 自由の信頼 / clue 次の予定を軽く言いながら、あなたの反応を見る / unlock by 縛らず疑わず、行動で伝えた好意を見逃さない
   - Tempting wrong move: 感情確認を長く続けると、足が止まって逃げたくなる。
   - Winning move: 考える前に一緒に動ける相手として距離が縮まる。
   - Unsaid safe subtext: 口にしない安心 / 次の予定を軽く言いながら、あなたの反応を見る。「言葉にするのは得意じゃなくても、行動で伝えた好意を見逃さないでほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 次の予定を軽く言いながら、あなたの反応を見る。楽しい温度は届いている。次は「重い宣言より、これからも一緒に動く未来が浮かぶ率直な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 確認・義務・束縛の言葉で自由を奪うように響き、「楽しい時間を、すぐ義務や確認の連続に変えられること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: READY / 緊張保持
   - Player lesson: 告白前の震えを茶化しすぎない。沈黙も相手の勇気の一部として扱う。
   - Tactical read: READY / 動きながら本音を置く
   - Preferred move: action / playful
   - Risky move: pushy
   - Tactical note: ユウは長い確認より、体験の中で近づくほうが自然。重さを短い本音に変える。
   - Payoff: 心理スイッチ「自由の信頼」が開くと、次の本音に進みやすい。縛らず疑わず、行動で伝えた好意を見逃さないこと。
   - Trap: 確認・義務・束縛の言葉で自由を奪うと、場面の目的「重い話への苦手さと誠実さを両立して理解する」から外れる。

15. **帰り際**
   - Location: 車に戻る前
   - Scene goal: 行動派の約束を信じつつ、次の具体性を確認する
   - Active switch: 自由の信頼 / opens when 縛らず疑わず、行動で伝えた好意を見逃さない
   - Switch tell: 次の予定を軽く言いながら、あなたの反応を見る
   - Dramaturgy: 余韻 / 成立した関係を雑に扱わない
   - Player move: 次の約束まで丁寧に置く
   - Love contract: 決める / 表面は「帰り際」の会話。でも本当は、関係の定義を通して自由の信頼を見られている。
   - Hidden ask: 重い宣言より、これからも一緒に動く未来が浮かぶ率直な言葉。
   - Heart key: 自由の信頼 / clue 次の予定を軽く言いながら、あなたの反応を見る / unlock by 縛らず疑わず、行動で伝えた好意を見逃さない
   - Tempting wrong move: 感情確認を長く続けると、足が止まって逃げたくなる。
   - Winning move: 考える前に一緒に動ける相手として距離が縮まる。
   - Unsaid safe subtext: 口にしない安心 / 次の予定を軽く言いながら、あなたの反応を見る。「言葉にするのは得意じゃなくても、行動で伝えた好意を見逃さないでほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 次の予定を軽く言いながら、あなたの反応を見る。楽しい温度は届いている。次は「重い宣言より、これからも一緒に動く未来が浮かぶ率直な言葉」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 確認・義務・束縛の言葉で自由を奪うように響き、「楽しい時間を、すぐ義務や確認の連続に変えられること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: AFTER / 余韻設計
   - Player lesson: 成立後こそ雑にしない。所有感ではなく、次の約束で大切に締める。
   - Tactical read: COMMIT / 次の場所へ誘う
   - Preferred move: action / concrete
   - Risky move: pushy
   - Tactical note: 定義を長く語るより、好きという意思と次の体験をセットで出すとユウらしく進む。
   - Payoff: 心理スイッチ「自由の信頼」が開くと、次の本音に進みやすい。縛らず疑わず、行動で伝えた好意を見逃さないこと。
   - Trap: 確認・義務・束縛の言葉で自由を奪うと、場面の目的「行動派の約束を信じつつ、次の具体性を確認する」から外れる。

## レイナ / ENTJ

**Promise:** 強く見える人が、対等な相手にだけ見せる柔らかさへ近づく恋。

**Core tension:** 曖昧さは嫌い。でも、感情を急いで処理されるのも傷つく。

**Winning mindset:** 意思をはっきり示しつつ、強さの裏の緊張を見落とさない。

**Temptation trap:** 全部任せる、勝ち負けにする、告白や衝突を雑にまとめること。

**Visual formula:** 白シャツ、ネイビー、夜景、直線的な構図。視線と余白で相手の存在を出す。

**Player fantasy:** 強くまっすぐな彼女が、対等な相手にだけ弱さを預ける。

**Signature dilemma:** 明確さは必要。でも解決だけ急ぐと感情を置き去りにする。

### Date Missions

- **Date 1: EQUAL WILL / 自分の意思を見せる**
  - Aim: 初回デートでは、レイナに任せきりにせず、対等に判断理由を出す。
  - Target: concreteまたはsparkを2回以上、strainを1回以下
  - Success: レイナはあなたを、合わせるだけでなく並んで考えられる相手として見る。
  - Risk: なんでもいい、任せる、は優しさより責任放棄に見えやすい。
  - Mission image cue: 駅前の広い歩道、逆光、まっすぐな視線、空いた隣のスペース
- **Date 2: SPECIFIC RESPECT / 尊敬を具体化する**
  - Aim: 価値観デートでは、強い・すごいで終わらせず、判断のどこを尊敬したか伝える。
  - Target: safeを1回以上、concreteまたはsparkを1回以上、strainを1回以下
  - Success: 成果ではなく思考を見られたことで、レイナの会話のテンポが柔らかくなる。
  - Risk: 強いね、怖いね、と雑にラベル化すると距離が戻る。
  - Mission image cue: 静かなカフェ、資料を閉じた手元、表情は控えめでも和らいだ視線
- **Date 3: CLEAR HEART / 明確さと感情を両立する**
  - Aim: 終盤では、結論を曖昧にせず、でも正しさだけで感情を処理しない。
  - Target: safeを1回以上、sparkまたはconcrete系を1回以上、strainを1回以下
  - Success: レイナは強いままでも弱さを預けられる相手として、関係を前へ進める。
  - Risk: 勝ち負けや正論でまとめると、告白前の緊張が置き去りになる。
  - Mission image cue: 夜景のテラス、言い切った後の沈黙、握りしめた手とまっすぐな視線

### Relationship Arc Modes

- **入る**
  - 01 初めての出会い: 任せきりにせず、自分の希望や判断をまっすぐ出すことで、明確さと感情の両立を大切にすること
  - 02 ぎこちない自己紹介: 任せきりにせず、自分の希望や判断をまっすぐ出すことで、明確さと感情の両立を大切にすること
  - 03 初めて少し笑う瞬間: 任せきりにせず、自分の希望や判断をまっすぐ出すことで、明確さと感情の両立を大切にすること
- **近づく**
  - 04 カフェでの会話: 任せきりにせず、自分の希望や判断をまっすぐ出すことで、明確さと感情の両立を大切にすること
  - 05 会話が噛み合わず少し気まずくなる: 任せきりにせず、自分の希望や判断をまっすぐ出すことで、明確さと感情の両立を大切にすること
  - 06 相手の価値観を知る: 任せきりにせず、自分の希望や判断をまっすぐ出すことで、明確さと感情の両立を大切にすること
  - 07 夜の散歩: 強さや成果を、どこがすごいのか具体的に認めることで、明確さと感情の両立を大切にすること
  - 08 2回目のデートへの誘い: 強さや成果を、どこがすごいのか具体的に認めることで、明確さと感情の両立を大切にすること
  - 09 食事デート: 強さや成果を、どこがすごいのか具体的に認めることで、明確さと感情の両立を大切にすること
  - 10 距離が近づく瞬間: 強さや成果を、どこがすごいのか具体的に認めることで、明確さと感情の両立を大切にすること
- **戻す**
  - 11 すれ違い・小さな衝突: ズレた時に、強いね・怖いねで雑にラベル化するで済ませず関係の扱い方を直すこと
  - 12 相手の本音が見える: ズレた時に、強いね・怖いねで雑にラベル化するで済ませず関係の扱い方を直すこと
  - 13 静かな和解: ズレた時に、正しさや勝ち負けで感情を処理するで済ませず関係の扱い方を直すこと
- **決める**
  - 14 告白前の緊張: 好きと付き合いたいを曖昧に分けず、同じ解像度でまっすぐ返すこと。
  - 15 告白の瞬間: 好きと付き合いたいを曖昧に分けず、同じ解像度でまっすぐ返すこと。
  - 16 告白後の余韻: 好きと付き合いたいを曖昧に分けず、同じ解像度でまっすぐ返すこと。

### Character Memory Echoes

Use these echoes as continuity callbacks: later scene context should name the earlier player move that is still affecting trust, spark, strain, or repair. The callback should feel like the character remembers a specific attitude, not like a generic score bonus.

- **safe: 対等に見られた記憶**
  - レイナは、あなたが判断理由や感情を主語つきで返した場面を覚えている。次は曖昧にせず、行動まで示したい。
- **spark: 惹かれた判断の記憶**
  - レイナは、あなたが遠慮せず意思を出した場面を覚えている。強い言葉の後に、感情の置き場所も作れると深く刺さる。
- **strain: 丸投げされた記憶**
  - レイナは、任せきりや勝ち負けの言葉をまだ覚えている。次は短くても、自分の希望と理由を出して立て直したい。
- **repair: 向き合い直した記憶**
  - レイナは、正しさだけで終わらせず戻ってきたことを覚えている。解決と感情を両方扱える相手として見直している。
- **mixed: 測り合っている記憶**
  - レイナは、あなたの軸と迷いの両方を見ている。次は遠慮より、対等な意思表示で関係を前に進めたい。
- Memory image cue: まっすぐな視線、閉じたノートPC、二人分のグラス、言い切った後の沈黙が残る夜景カット

**Attraction switches:** 自分の軸を示す / 具体的に尊敬する / 曖昧にせず進める

**Turn-offs:** 受け身すぎる態度 / 勝ち負け化 / 雑な保留や所有感

### Character Decoder Rule

During play, surface the character's attraction switches and turn-offs as learnable signals. Positive choices should name what opened; risky choices should name the turn-off and provide one repair line rather than only punishing the player.

### Character Route Endings

Route compass rule: during play, show the likely route tendency without locking the player in. The forecast should make choices feel consequential while still allowing rerouting through repair, heart-key unlocks, and late-scene clarity.

Replay plan rule: after each ending, give the player one concrete next-run plan using the current route, locked routes, unopened psychological switches, heart-key misses, and character turn-offs. The plan should support autonomy, competence, and relatedness: choose a route, practice one skill, and understand the character more deeply.

Need compass rule: each scene should expose the relationship need being tested, then score whether the player's answer satisfied, nearly satisfied, or threatened it. The need should be character-specific, drawn from the active psychological switch, and should explain autonomy, felt understanding, and concrete next-step safety without turning the character into a fixed stereotype.

Connection bid rule: treat each character line as a small bid for attention, validation, play, repair, vulnerability, or future commitment. Feedback should say whether the player turned toward, turned with spark, turned away, or turned against the bid. This creates emotional consequence even when the main plot remains linear.

Date intermission rule: after each date, insert a character-perspective note that names what the character privately remembers, what still feels fragile, and what the next date will test. The intermission should feel like an episodic story beat shaped by the player's choices, not a neutral score screen.

- **REPAIR / 正しさでは、緊張はほどけない**
  - Player pattern: 明確さは出したが、レイナの感情の置き場所を見落とした
  - Epilogue: レイナは表情を崩さずに別れる。でも、沈黙の長さがいつもより少しだけ違う。感情を勝ち負けで処理されたように感じたのかもしれない。次は正論より先に、彼女が見せなかった緊張に気づけるかが試される。
  - Finale line: 「正しさは分かります。でも、私が何を飲み込んだかも見てほしかった。」
  - Finale memory bridge: 測り合っている記憶として残った今回の接し方が、この最後の表情を少し変えている。レイナは、あなたの軸と迷いの両方を見ている。次は遠慮より、対等な意思表示で関係を前に進めたい。
  - Next-run mission: 次回はレイナに主導権を丸投げせず、対等な意思を序盤で2回以上見せる。
  - Finale next beat: 正論の前に、レイナが見せなかった緊張を言葉にして受け取る。
  - Character CG cue: 夜景の見える歩道、レイナが背筋を伸ばしたまま少し視線を外す、直線的な光
  - Finale CG cue: 夜景の歩道、レイナが背筋を伸ばしたまま少し視線を外す。白シャツ、ネイビー、夜景、直線的な構図。視線と余白で相手の存在を出す。
- **RECONNECT / 言い負かさず、並び直す**
  - Player pattern: 対等さを失わず、レイナの緊張を置ける形で関係を戻した
  - Epilogue: 一度鋭くなった空気を、あなたは勝ち負けにしなかった。レイナは短く『それなら分かる』と言う。彼女にとって修復は、弱くなることではなく、対等なまま感情を置ける場所を作ることだった。
  - Finale line: 「言い負かされなかったのは、助かりました。並び直せるなら、続けられます。」
  - Finale memory bridge: 測り合っている記憶として残った今回の接し方が、この最後の表情を少し変えている。レイナは、あなたの軸と迷いの両方を見ている。次は遠慮より、対等な意思表示で関係を前に進めたい。
  - Next-run mission: 次回は衝突後、正しさの整理と感情の確認を両方入れる。
  - Finale next beat: 対等さを保ったまま、整理と感情確認の両方を入れる。
  - Character CG cue: 夜景の窓際、レイナが腕をほどき少しだけ目元を緩める、二人分のグラス
  - Finale CG cue: 夜景の窓際、レイナが腕をほどき少しだけ目元を緩める。白シャツ、ネイビー、夜景、直線的な構図。視線と余白で相手の存在を出す。
- **SPARK / 火花は評価になる。だが曖昧さは残せない**
  - Player pattern: 知性とテンポで惹きつけたが、関係の定義を曖昧にしないことが課題になった
  - Epilogue: レイナはあなたの切り返しや行動力を面白いと思っている。ただ、熱量だけで関係を進める相手ではない。次は刺激を、明確な意思と具体的な約束に変える必要がある。
  - Finale line: 「面白い人ですね。ただ、曖昧なまま進むつもりはありません。」
  - Finale memory bridge: 測り合っている記憶として残った今回の接し方が、この最後の表情を少し変えている。レイナは、あなたの軸と迷いの両方を見ている。次は遠慮より、対等な意思表示で関係を前に進めたい。
  - Next-run mission: 次回はsparkで惹きつけた後、次の行動を明確に提案する。
  - Finale next beat: 刺激を明確な意思と次の行動に変え、関係の定義から逃げない。
  - Character CG cue: 夜のバーラウンジ、レイナが挑むように少し笑う、スマホに次の予定
  - Finale CG cue: 夜のバーラウンジ、レイナが挑むように少し笑い、スマホに次の予定。白シャツ、ネイビー、夜景、直線的な構図。視線と余白で相手の存在を出す。
- **TRUST / 任せられる。でも、それだけでは足りない**
  - Player pattern: 安心と尊敬は届いたが、対等な意思表示をさらに見せる余地がある
  - Epilogue: レイナはあなたを信頼できる相手として見始めている。ただ、合わせてくれるだけの人には惹かれきらない。次は彼女の強さを尊重しつつ、自分の判断と欲しい未来をまっすぐ見せたい。
  - Finale line: 「任せられるとは思いました。次は、あなたが何を望むかを聞きたいです。」
  - Finale memory bridge: 測り合っている記憶として残った今回の接し方が、この最後の表情を少し変えている。レイナは、あなたの軸と迷いの両方を見ている。次は遠慮より、対等な意思表示で関係を前に進めたい。
  - Next-run mission: 次回はsafeを軸にしつつ、自分の希望を明確に出す選択を各デートで入れる。
  - Finale next beat: 合わせるだけでなく、自分の判断と欲しい未来をまっすぐ見せる。
  - Character CG cue: 静かなレストラン、レイナが資料ではなくあなたを見る、安心と評価が混ざる表情
  - Finale CG cue: 静かなレストラン、レイナが資料ではなくあなたを見る。白シャツ、ネイビー、夜景、直線的な構図。視線と余白で相手の存在を出す。
- **BALANCE / 対等なまま、少しだけ柔らかくなる**
  - Player pattern: 明確さと感情の扱いを両立し、レイナが対等に預けられる関係を作った
  - Epilogue: あなたはレイナに任せきりにせず、必要な時には自分の意思を出した。そのうえで、強さの裏の緊張も見落とさなかった。彼女は最後に短く予定を確認する。言葉は端的でも、声は少し柔らかい。
  - Finale line: 「対等でいられるのに、少し気が抜ける。これは、悪くないです。」
  - Finale memory bridge: 測り合っている記憶として残った今回の接し方が、この最後の表情を少し変えている。レイナは、あなたの軸と迷いの両方を見ている。次は遠慮より、対等な意思表示で関係を前に進めたい。
  - Next-run mission: 次回は3つの心理スイッチを解放し、告白では好きと付き合いたいを曖昧に分けない。
  - Finale next beat: 明確さと感情の扱いを両立し、告白では好きと付き合いたいを曖昧に分けない。
  - Character CG cue: 夜景のテラス、レイナがまっすぐ見つめながら少し微笑む、二人分の余白
  - Finale CG cue: 夜景のテラス、レイナがまっすぐ見つめながら少し微笑む。白シャツ、ネイビー、夜景、直線的な構図。視線と余白で相手の存在を出す。

### Psychological Switches

- **対等な意思**
  - Opens: 任せきりにせず、自分の希望や判断をまっすぐ出す
  - Hurts: 全部決めて、なんでもいい、で主導権を丸投げする
  - Tell: 試すような質問が増え、あなたの判断理由を見てくる
- **尊敬の具体性**
  - Opens: 強さや成果を、どこがすごいのか具体的に認める
  - Hurts: 強いね・怖いねで雑にラベル化する
  - Tell: 表情は控えめでも、会話のテンポが少し柔らかくなる
- **感情の置き場所**
  - Opens: 解決だけ急がず、強さの裏の緊張にも気づく
  - Hurts: 正しさや勝ち負けで感情を処理する
  - Tell: 言い切ったあとに沈黙があり、本当に見ているかを測る

### Reading Cues

- Signal: 試すような質問が増え、あなたの判断理由を見てくる
  - Good read: 任せきりにせず、自分の希望や判断を対等に出す
  - Misread: 全部任せる、なんでもいい、と主導権を丸投げする
  - Player question: 自分の意思を短く出せているか？
- Signal: 表情は控えめでも、具体的に認められると会話のテンポが柔らかくなる
  - Good read: 強さを雑にラベル化せず、どこを尊敬したか具体化する
  - Misread: 強いね、怖いね、で一言にまとめる
  - Player question: 成果ではなく判断のどこを見ているか言えるか？
- Signal: 言い切ったあとに沈黙があり、正しさ以外を見ているか測っている
  - Good read: 解決だけ急がず、強さの裏の緊張にも気づく
  - Misread: 勝ち負けや正論で感情を処理する
  - Player question: 正しさの前に感情の置き場所を作れているか？

### Inner Layer

- Public mask: 強くて迷いがないように見えるが、実は弱さを見せた瞬間に雑に扱われることを警戒している。
- Fear: 正しさや勝ち負けで感情を処理され、自分の緊張が見落とされること。
- Opens when: 対等な意思と行動力を見せたうえで、強さの裏の不安にも気づいてもらえた時。
- Closes when: 全部任せる態度、曖昧な保留、成立後の当然のような所有感を見た時。
- Private wish: 強いままでも、弱い部分を直されずに預けられる関係がほしい。
- Confession need: 好きと付き合いたいを曖昧に分けず、同じ解像度でまっすぐ返すこと。

### Persona

- Summary: 目標、成長、率直さに魅力を感じるタイプ。遠回しな駆け引きより、互いを高める明確な関係を好みます。
- Needs: 敬意 / 知的な刺激 / 有能さへの信頼
- Conflict: 問題を構造的に捉え、迅速に決着をつけたい。感情的なもたつきに苛立ちやすい。
- Reassurance: 質の高い時間、戦略的な支援、相手の成果を具体的に認めること。
- Good lines: 私はまた会いたい。来週この予定はどう？ / そこまでやり切るの、尊敬する / 一緒にいると刺激をもらえる
- Bad lines: 全部決めて / なんとなくでいいよ / 強すぎて怖い

### Story Arc

#### 初回デート

Purpose: 知性とテンポを見せながら、軽く見られない安心感を作る

1. **初めての出会い**
   - Location: 駅前の広い歩道、少し逆光の午後
   - Scene goal: 軽さだけで押さず、レイナに“対等に会話できそう”と思わせる
   - Active switch: 対等な意思 / opens when 任せきりにせず、自分の希望や判断をまっすぐ出す
   - Switch tell: 試すような質問が増え、あなたの判断理由を見てくる
   - Dramaturgy: 入口 / 対等な意思: 第一印象の安全確認
   - Player move: 任せきりにせず、自分の希望や判断をまっすぐ出す。相手のテンポを観察し、いきなり型にはめない
   - Love contract: 入る / 表面は「初めての出会い」の会話。でも本当は、第一印象の安全確認を通して対等な意思を見られている。
   - Hidden ask: 任せきりにせず、自分の希望や判断をまっすぐ出すことで、明確さと感情の両立を大切にすること
   - Heart key: 対等な意思 / clue 試すような質問が増え、あなたの判断理由を見てくる / unlock by 任せきりにせず、自分の希望や判断をまっすぐ出す
   - Tempting wrong move: 任せきりやご機嫌取りは、対等さを失わせる。
   - Winning move: 有能さと誠実さが両方見え、戦友ではなく恋の相手として認識される。
   - Unsaid safe subtext: 口にしない安心 / 試すような質問が増え、あなたの判断理由を見てくる。「強いままでも、弱い部分を直されずに預けられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 試すような質問が増え、あなたの判断理由を見てくる。楽しい温度は届いている。次は「好きと付き合いたいを曖昧に分けず、同じ解像度でまっすぐ返すこと」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 全部決めて、なんでもいい、で主導権を丸投げするように響き、「正しさや勝ち負けで感情を処理され、自分の緊張が見落とされること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: OBSERVE / 観察
   - Player lesson: 相手の緊張・視線・距離を読む。最初の正解は盛り上げることではなく、入っていい速度を測ること。
   - Tactical read: OBSERVE / 対等に言い切る
   - Preferred move: concrete / action
   - Risky move: dismiss
   - Tactical note: レイナは曖昧な迎合を見抜く。敬意を示しながら、自分の意思も明確に出す。
   - Payoff: 心理スイッチ「対等な意思」が開くと、次の本音に進みやすい。任せきりにせず、自分の希望や判断をまっすぐ出すこと。
   - Trap: 全部決めて、なんでもいい、で主導権を丸投げすると、場面の目的「軽さだけで押さず、レイナに“対等に会話できそう”と思わせる」から外れる。

2. **ぎこちない自己紹介**
   - Location: カフェの窓際席
   - Scene goal: 自分の軸を短く言語化し、会話の密度を上げる
   - Active switch: 対等な意思 / opens when 任せきりにせず、自分の希望や判断をまっすぐ出す
   - Switch tell: 試すような質問が増え、あなたの判断理由を見てくる
   - Dramaturgy: 輪郭 / 対等な意思: 自分の軸を少し見せる
   - Player move: 任せきりにせず、自分の希望や判断をまっすぐ出す。聞き役に逃げず、相手が判断できる材料を出す
   - Love contract: 入る / 表面は「ぎこちない自己紹介」の会話。でも本当は、自分の軸を少し見せるを通して対等な意思を見られている。
   - Hidden ask: 任せきりにせず、自分の希望や判断をまっすぐ出すことで、明確さと感情の両立を大切にすること
   - Heart key: 対等な意思 / clue 試すような質問が増え、あなたの判断理由を見てくる / unlock by 任せきりにせず、自分の希望や判断をまっすぐ出す
   - Tempting wrong move: 任せきりやご機嫌取りは、対等さを失わせる。
   - Winning move: 有能さと誠実さが両方見え、戦友ではなく恋の相手として認識される。
   - Unsaid safe subtext: 口にしない安心 / 試すような質問が増え、あなたの判断理由を見てくる。「強いままでも、弱い部分を直されずに預けられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 試すような質問が増え、あなたの判断理由を見てくる。楽しい温度は届いている。次は「好きと付き合いたいを曖昧に分けず、同じ解像度でまっすぐ返すこと」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 全部決めて、なんでもいい、で主導権を丸投げするように響き、「正しさや勝ち負けで感情を処理され、自分の緊張が見落とされること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: OPEN / 自己開示
   - Player lesson: 聞くだけでなく、自分の基準を一つ渡す。相手があなたを判断できる材料を作る。
   - Tactical read: OPEN / 対等に言い切る
   - Preferred move: concrete / action
   - Risky move: dismiss
   - Tactical note: レイナは曖昧な迎合を見抜く。敬意を示しながら、自分の意思も明確に出す。
   - Payoff: 心理スイッチ「対等な意思」が開くと、次の本音に進みやすい。任せきりにせず、自分の希望や判断をまっすぐ出すこと。
   - Trap: 全部決めて、なんでもいい、で主導権を丸投げすると、場面の目的「自分の軸を短く言語化し、会話の密度を上げる」から外れる。

3. **初めて少し笑う瞬間**
   - Location: 窓から光が入るテーブル席
   - Scene goal: 笑わせることより、レイナの警戒をほどく
   - Active switch: 対等な意思 / opens when 任せきりにせず、自分の希望や判断をまっすぐ出す
   - Switch tell: 試すような質問が増え、あなたの判断理由を見てくる
   - Dramaturgy: ほころび / 対等な意思: 表情がゆるむ瞬間
   - Player move: 任せきりにせず、自分の希望や判断をまっすぐ出す。笑いを取りに行くより、警戒がほどけた理由を守る
   - Love contract: 入る / 表面は「初めて少し笑う瞬間」の会話。でも本当は、表情がゆるむ瞬間を通して対等な意思を見られている。
   - Hidden ask: 任せきりにせず、自分の希望や判断をまっすぐ出すことで、明確さと感情の両立を大切にすること
   - Heart key: 対等な意思 / clue 試すような質問が増え、あなたの判断理由を見てくる / unlock by 任せきりにせず、自分の希望や判断をまっすぐ出す
   - Tempting wrong move: 任せきりやご機嫌取りは、対等さを失わせる。
   - Winning move: 有能さと誠実さが両方見え、戦友ではなく恋の相手として認識される。
   - Unsaid safe subtext: 口にしない安心 / 試すような質問が増え、あなたの判断理由を見てくる。「強いままでも、弱い部分を直されずに預けられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 試すような質問が増え、あなたの判断理由を見てくる。楽しい温度は届いている。次は「好きと付き合いたいを曖昧に分けず、同じ解像度でまっすぐ返すこと」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 全部決めて、なんでもいい、で主導権を丸投げするように響き、「正しさや勝ち負けで感情を処理され、自分の緊張が見落とされること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: SYNC / 温度合わせ
   - Player lesson: 笑った理由を守る。冗談は距離を縮めるが、相手を素材にしない。
   - Tactical read: SYNC / 対等に言い切る
   - Preferred move: concrete / action
   - Risky move: dismiss
   - Tactical note: レイナは曖昧な迎合を見抜く。敬意を示しながら、自分の意思も明確に出す。
   - Payoff: 心理スイッチ「対等な意思」が開くと、次の本音に進みやすい。任せきりにせず、自分の希望や判断をまっすぐ出すこと。
   - Trap: 全部決めて、なんでもいい、で主導権を丸投げすると、場面の目的「笑わせることより、レイナの警戒をほどく」から外れる。

4. **カフェでの会話**
   - Location: 少し静かな奥の席
   - Scene goal: 恋愛観の違いを怖がらず、ちゃんと会話する
   - Active switch: 対等な意思 / opens when 任せきりにせず、自分の希望や判断をまっすぐ出す
   - Switch tell: 試すような質問が増え、あなたの判断理由を見てくる
   - Dramaturgy: 価値観 / 対等な意思: 恋愛観や生活観の違い
   - Player move: 任せきりにせず、自分の希望や判断をまっすぐ出す。反論ではなく、相手の言葉の芯を確認する
   - Love contract: 近づく / 表面は「カフェでの会話」の会話。でも本当は、恋愛観や生活観の違いを通して対等な意思を見られている。
   - Hidden ask: 任せきりにせず、自分の希望や判断をまっすぐ出すことで、明確さと感情の両立を大切にすること
   - Heart key: 対等な意思 / clue 試すような質問が増え、あなたの判断理由を見てくる / unlock by 任せきりにせず、自分の希望や判断をまっすぐ出す
   - Tempting wrong move: 任せきりやご機嫌取りは、対等さを失わせる。
   - Winning move: 有能さと誠実さが両方見え、戦友ではなく恋の相手として認識される。
   - Unsaid safe subtext: 口にしない安心 / 試すような質問が増え、あなたの判断理由を見てくる。「強いままでも、弱い部分を直されずに預けられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 試すような質問が増え、あなたの判断理由を見てくる。楽しい温度は届いている。次は「好きと付き合いたいを曖昧に分けず、同じ解像度でまっすぐ返すこと」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 全部決めて、なんでもいい、で主導権を丸投げするように響き、「正しさや勝ち負けで感情を処理され、自分の緊張が見落とされること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: VALUE / 価値観翻訳
   - Player lesson: 違いを否定せず、相手が何を守ろうとしているかを言葉にする。
   - Tactical read: VALUE / 対等に言い切る
   - Preferred move: concrete / action
   - Risky move: dismiss
   - Tactical note: レイナは曖昧な迎合を見抜く。敬意を示しながら、自分の意思も明確に出す。
   - Payoff: 心理スイッチ「対等な意思」が開くと、次の本音に進みやすい。任せきりにせず、自分の希望や判断をまっすぐ出すこと。
   - Trap: 全部決めて、なんでもいい、で主導権を丸投げすると、場面の目的「恋愛観の違いを怖がらず、ちゃんと会話する」から外れる。

5. **会話が噛み合わず少し気まずくなる**
   - Location: 飲み物が少し残ったテーブル
   - Scene goal: 防御しすぎず、すれ違いを修正する
   - Active switch: 対等な意思 / opens when 任せきりにせず、自分の希望や判断をまっすぐ出す
   - Switch tell: 試すような質問が増え、あなたの判断理由を見てくる
   - Dramaturgy: 小さなズレ / 対等な意思: 受け取り違いの修正
   - Player move: 任せきりにせず、自分の希望や判断をまっすぐ出す。勝ち負けにせず、何がずれたかを再接続する
   - Love contract: 近づく / 表面は「会話が噛み合わず少し気まずくなる」の会話。でも本当は、受け取り違いの修正を通して対等な意思を見られている。
   - Hidden ask: 任せきりにせず、自分の希望や判断をまっすぐ出すことで、明確さと感情の両立を大切にすること
   - Heart key: 対等な意思 / clue 試すような質問が増え、あなたの判断理由を見てくる / unlock by 任せきりにせず、自分の希望や判断をまっすぐ出す
   - Tempting wrong move: 任せきりやご機嫌取りは、対等さを失わせる。
   - Winning move: 有能さと誠実さが両方見え、戦友ではなく恋の相手として認識される。
   - Unsaid safe subtext: 口にしない安心 / 試すような質問が増え、あなたの判断理由を見てくる。「強いままでも、弱い部分を直されずに預けられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 試すような質問が増え、あなたの判断理由を見てくる。楽しい温度は届いている。次は「好きと付き合いたいを曖昧に分けず、同じ解像度でまっすぐ返すこと」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 全部決めて、なんでもいい、で主導権を丸投げするように響き、「正しさや勝ち負けで感情を処理され、自分の緊張が見落とされること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: REPAIR / 修復
   - Player lesson: ズレを勝ち負けにしない。相手の論点を小さく扱わず、受け取り直す。
   - Tactical read: REPAIR / 対等に言い切る
   - Preferred move: concrete / action
   - Risky move: dismiss
   - Tactical note: レイナは曖昧な迎合を見抜く。敬意を示しながら、自分の意思も明確に出す。
   - Payoff: 心理スイッチ「対等な意思」が開くと、次の本音に進みやすい。任せきりにせず、自分の希望や判断をまっすぐ出すこと。
   - Trap: 全部決めて、なんでもいい、で主導権を丸投げすると、場面の目的「防御しすぎず、すれ違いを修正する」から外れる。

6. **相手の価値観を知る**
   - Location: 店を出る前、席で少し落ち着いた時間
   - Scene goal: レイナの厳しさの裏にある誠実さを理解する
   - Active switch: 対等な意思 / opens when 任せきりにせず、自分の希望や判断をまっすぐ出す
   - Switch tell: 試すような質問が増え、あなたの判断理由を見てくる
   - Dramaturgy: 核 / 対等な意思: 相手の大事な基準
   - Player move: 任せきりにせず、自分の希望や判断をまっすぐ出す。厳しさや明るさの裏にある願いを言語化する
   - Love contract: 近づく / 表面は「相手の価値観を知る」の会話。でも本当は、相手の大事な基準を通して対等な意思を見られている。
   - Hidden ask: 任せきりにせず、自分の希望や判断をまっすぐ出すことで、明確さと感情の両立を大切にすること
   - Heart key: 対等な意思 / clue 試すような質問が増え、あなたの判断理由を見てくる / unlock by 任せきりにせず、自分の希望や判断をまっすぐ出す
   - Tempting wrong move: 任せきりやご機嫌取りは、対等さを失わせる。
   - Winning move: 有能さと誠実さが両方見え、戦友ではなく恋の相手として認識される。
   - Unsaid safe subtext: 口にしない安心 / 試すような質問が増え、あなたの判断理由を見てくる。「強いままでも、弱い部分を直されずに預けられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 試すような質問が増え、あなたの判断理由を見てくる。楽しい温度は届いている。次は「好きと付き合いたいを曖昧に分けず、同じ解像度でまっすぐ返すこと」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 全部決めて、なんでもいい、で主導権を丸投げするように響き、「正しさや勝ち負けで感情を処理され、自分の緊張が見落とされること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: CORE / 芯を見る
   - Player lesson: 強さ・明るさ・慎重さの裏にある願いを拾う。褒めるなら性格の芯を褒める。
   - Tactical read: CORE / 対等に言い切る
   - Preferred move: concrete / action
   - Risky move: dismiss
   - Tactical note: レイナは曖昧な迎合を見抜く。敬意を示しながら、自分の意思も明確に出す。
   - Payoff: 心理スイッチ「対等な意思」が開くと、次の本音に進みやすい。任せきりにせず、自分の希望や判断をまっすぐ出すこと。
   - Trap: 全部決めて、なんでもいい、で主導権を丸投げすると、場面の目的「レイナの厳しさの裏にある誠実さを理解する」から外れる。

#### 2回目のデート

Purpose: 尊敬と好意を両立させながら、衝突の手前で駆け引きする

7. **夜の散歩**
   - Location: 川沿いの遊歩道、風が少し強い夜
   - Scene goal: 夜の空気に飲まれず、静かな親密さを作る
   - Active switch: 尊敬の具体性 / opens when 強さや成果を、どこがすごいのか具体的に認める
   - Switch tell: 表情は控えめでも、会話のテンポが少し柔らかくなる
   - Dramaturgy: 夜 / 尊敬の具体性: 本音が出やすい空気
   - Player move: 強さや成果を、どこがすごいのか具体的に認める。ムードに頼り切らず、選択肢を残す
   - Love contract: 近づく / 表面は「夜の散歩」の会話。でも本当は、本音が出やすい空気を通して尊敬の具体性を見られている。
   - Hidden ask: 強さや成果を、どこがすごいのか具体的に認めることで、明確さと感情の両立を大切にすること
   - Heart key: 尊敬の具体性 / clue 表情は控えめでも、会話のテンポが少し柔らかくなる / unlock by 強さや成果を、どこがすごいのか具体的に認める
   - Tempting wrong move: 任せきりやご機嫌取りは、対等さを失わせる。
   - Winning move: 有能さと誠実さが両方見え、戦友ではなく恋の相手として認識される。
   - Unsaid safe subtext: 口にしない安心 / 表情は控えめでも、会話のテンポが少し柔らかくなる。「強いままでも、弱い部分を直されずに預けられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 表情は控えめでも、会話のテンポが少し柔らかくなる。楽しい温度は届いている。次は「好きと付き合いたいを曖昧に分けず、同じ解像度でまっすぐ返すこと」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 強いね・怖いねで雑にラベル化するように響き、「正しさや勝ち負けで感情を処理され、自分の緊張が見落とされること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: SPACE / 余白作り
   - Player lesson: ムードに流されすぎず、相手が選べる余地を残す。近づくほど境界線を丁寧に。
   - Tactical read: SPACE / 対等に言い切る
   - Preferred move: concrete / action
   - Risky move: dismiss
   - Tactical note: レイナは曖昧な迎合を見抜く。敬意を示しながら、自分の意思も明確に出す。
   - Payoff: 心理スイッチ「尊敬の具体性」が開くと、次の本音に進みやすい。強さや成果を、どこがすごいのか具体的に認めること。
   - Trap: 強いね・怖いねで雑にラベル化すると、場面の目的「夜の空気に飲まれず、静かな親密さを作る」から外れる。

8. **2回目のデートへの誘い**
   - Location: 帰り道、別れ際
   - Scene goal: 誘いに対して、好意と意思の両方を返す
   - Active switch: 尊敬の具体性 / opens when 強さや成果を、どこがすごいのか具体的に認める
   - Switch tell: 表情は控えめでも、会話のテンポが少し柔らかくなる
   - Dramaturgy: 誘い / 尊敬の具体性: 次に進む意思表示
   - Player move: 強さや成果を、どこがすごいのか具体的に認める。好意だけでなく、現実の行動へ落とす
   - Love contract: 近づく / 表面は「2回目のデートへの誘い」の会話。でも本当は、次に進む意思表示を通して尊敬の具体性を見られている。
   - Hidden ask: 強さや成果を、どこがすごいのか具体的に認めることで、明確さと感情の両立を大切にすること
   - Heart key: 尊敬の具体性 / clue 表情は控えめでも、会話のテンポが少し柔らかくなる / unlock by 強さや成果を、どこがすごいのか具体的に認める
   - Tempting wrong move: 任せきりやご機嫌取りは、対等さを失わせる。
   - Winning move: 有能さと誠実さが両方見え、戦友ではなく恋の相手として認識される。
   - Unsaid safe subtext: 口にしない安心 / 表情は控えめでも、会話のテンポが少し柔らかくなる。「強いままでも、弱い部分を直されずに預けられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 表情は控えめでも、会話のテンポが少し柔らかくなる。楽しい温度は届いている。次は「好きと付き合いたいを曖昧に分けず、同じ解像度でまっすぐ返すこと」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 強いね・怖いねで雑にラベル化するように響き、「正しさや勝ち負けで感情を処理され、自分の緊張が見落とされること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: MOVE / 次へ進める
   - Player lesson: 気持ちを行動に落とす。曖昧な好意を、次の約束や選択肢に変える。
   - Tactical read: MOVE / 対等に言い切る
   - Preferred move: concrete / action
   - Risky move: dismiss
   - Tactical note: レイナは曖昧な迎合を見抜く。敬意を示しながら、自分の意思も明確に出す。
   - Payoff: 心理スイッチ「尊敬の具体性」が開くと、次の本音に進みやすい。強さや成果を、どこがすごいのか具体的に認めること。
   - Trap: 強いね・怖いねで雑にラベル化すると、場面の目的「誘いに対して、好意と意思の両方を返す」から外れる。

9. **食事デート**
   - Location: 落ち着いた照明のレストラン
   - Scene goal: 準備と好意を“やりすぎず自然に”見せる
   - Active switch: 尊敬の具体性 / opens when 強さや成果を、どこがすごいのか具体的に認める
   - Switch tell: 表情は控えめでも、会話のテンポが少し柔らかくなる
   - Dramaturgy: 準備 / 尊敬の具体性: 相手の好みを覚えている証拠
   - Player move: 強さや成果を、どこがすごいのか具体的に認める。攻略感ではなく観察と敬意として見せる
   - Love contract: 近づく / 表面は「食事デート」の会話。でも本当は、相手の好みを覚えている証拠を通して尊敬の具体性を見られている。
   - Hidden ask: 強さや成果を、どこがすごいのか具体的に認めることで、明確さと感情の両立を大切にすること
   - Heart key: 尊敬の具体性 / clue 表情は控えめでも、会話のテンポが少し柔らかくなる / unlock by 強さや成果を、どこがすごいのか具体的に認める
   - Tempting wrong move: 任せきりやご機嫌取りは、対等さを失わせる。
   - Winning move: 有能さと誠実さが両方見え、戦友ではなく恋の相手として認識される。
   - Unsaid safe subtext: 口にしない安心 / 表情は控えめでも、会話のテンポが少し柔らかくなる。「強いままでも、弱い部分を直されずに預けられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 表情は控えめでも、会話のテンポが少し柔らかくなる。楽しい温度は届いている。次は「好きと付き合いたいを曖昧に分けず、同じ解像度でまっすぐ返すこと」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 強いね・怖いねで雑にラベル化するように響き、「正しさや勝ち負けで感情を処理され、自分の緊張が見落とされること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: REMEMBER / 記憶を使う
   - Player lesson: 前に聞いた好みや不安を覚えていると示す。攻略感ではなく敬意として出す。
   - Tactical read: REMEMBER / 対等に言い切る
   - Preferred move: concrete / action
   - Risky move: dismiss
   - Tactical note: レイナは曖昧な迎合を見抜く。敬意を示しながら、自分の意思も明確に出す。
   - Payoff: 心理スイッチ「尊敬の具体性」が開くと、次の本音に進みやすい。強さや成果を、どこがすごいのか具体的に認めること。
   - Trap: 強いね・怖いねで雑にラベル化すると、場面の目的「準備と好意を“やりすぎず自然に”見せる」から外れる。

10. **距離が近づく瞬間**
   - Location: 食後、テーブル越しの会話が少しゆるんだ時間
   - Scene goal: 好意を急がず、でも逃さず返す
   - Active switch: 尊敬の具体性 / opens when 強さや成果を、どこがすごいのか具体的に認める
   - Switch tell: 表情は控えめでも、会話のテンポが少し柔らかくなる
   - Dramaturgy: 接近 / 尊敬の具体性: 甘さと境界線の同時処理
   - Player move: 強さや成果を、どこがすごいのか具体的に認める。近づくほど相手の主導権を奪わない
   - Love contract: 近づく / 表面は「距離が近づく瞬間」の会話。でも本当は、甘さと境界線の同時処理を通して尊敬の具体性を見られている。
   - Hidden ask: 強さや成果を、どこがすごいのか具体的に認めることで、明確さと感情の両立を大切にすること
   - Heart key: 尊敬の具体性 / clue 表情は控えめでも、会話のテンポが少し柔らかくなる / unlock by 強さや成果を、どこがすごいのか具体的に認める
   - Tempting wrong move: 任せきりやご機嫌取りは、対等さを失わせる。
   - Winning move: 有能さと誠実さが両方見え、戦友ではなく恋の相手として認識される。
   - Unsaid safe subtext: 口にしない安心 / 表情は控えめでも、会話のテンポが少し柔らかくなる。「強いままでも、弱い部分を直されずに預けられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 表情は控えめでも、会話のテンポが少し柔らかくなる。楽しい温度は届いている。次は「好きと付き合いたいを曖昧に分けず、同じ解像度でまっすぐ返すこと」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 強いね・怖いねで雑にラベル化するように響き、「正しさや勝ち負けで感情を処理され、自分の緊張が見落とされること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: CLOSER / 接近の調整
   - Player lesson: 甘さを出しつつ、相手の主導権を奪わない。攻める場面ほど逃げ道を残す。
   - Tactical read: CLOSER / 対等に言い切る
   - Preferred move: concrete / action
   - Risky move: dismiss
   - Tactical note: レイナは曖昧な迎合を見抜く。敬意を示しながら、自分の意思も明確に出す。
   - Payoff: 心理スイッチ「尊敬の具体性」が開くと、次の本音に進みやすい。強さや成果を、どこがすごいのか具体的に認めること。
   - Trap: 強いね・怖いねで雑にラベル化すると、場面の目的「好意を急がず、でも逃さず返す」から外れる。

11. **すれ違い・小さな衝突**
   - Location: 店を出た後の外気、少し冷えた歩道
   - Scene goal: “解決の速さ”と“気持ちの処理”の違いを乗り越える
   - Active switch: 尊敬の具体性 / opens when 強さや成果を、どこがすごいのか具体的に認める
   - Switch tell: 表情は控えめでも、会話のテンポが少し柔らかくなる
   - Dramaturgy: 衝突 / 尊敬の具体性: 関係の扱い方が試される
   - Player move: 強さや成果を、どこがすごいのか具体的に認める。逃げではなく方法の違いとして伝える
   - Love contract: 戻す / 表面は「すれ違い・小さな衝突」の会話。でも本当は、関係の扱い方が試されるを通して尊敬の具体性を見られている。
   - Hidden ask: ズレた時に、強いね・怖いねで雑にラベル化するで済ませず関係の扱い方を直すこと
   - Heart key: 尊敬の具体性 / clue 表情は控えめでも、会話のテンポが少し柔らかくなる / unlock by 強さや成果を、どこがすごいのか具体的に認める
   - Tempting wrong move: 任せきりやご機嫌取りは、対等さを失わせる。
   - Winning move: 有能さと誠実さが両方見え、戦友ではなく恋の相手として認識される。
   - Unsaid safe subtext: 口にしない安心 / 表情は控えめでも、会話のテンポが少し柔らかくなる。「強いままでも、弱い部分を直されずに預けられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 表情は控えめでも、会話のテンポが少し柔らかくなる。楽しい温度は届いている。次は「好きと付き合いたいを曖昧に分けず、同じ解像度でまっすぐ返すこと」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 強いね・怖いねで雑にラベル化するように響き、「正しさや勝ち負けで感情を処理され、自分の緊張が見落とされること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: CONFLICT / 衝突運用
   - Player lesson: 揉めたことより、揉め方が見られている。解決速度と感情の安全を両立する。
   - Tactical read: CONFLICT / 解決より先に感情を拾う
   - Preferred move: empathize / concrete
   - Risky move: dismiss / pushy
   - Tactical note: 衝突では正しさだけだと刺さる。論点を整理しつつ、彼女が飲み込んだ感情も扱う。
   - Payoff: 心理スイッチ「尊敬の具体性」が開くと、次の本音に進みやすい。強さや成果を、どこがすごいのか具体的に認めること。
   - Trap: 強いね・怖いねで雑にラベル化すると、場面の目的「“解決の速さ”と“気持ちの処理”の違いを乗り越える」から外れる。

#### 3回目のデート

Purpose: 本音を受け止め合い、曖昧さを越えて関係を決める

12. **相手の本音が見える**
   - Location: 少し落ち着いた室内席、グラスの水滴だけが動く時間
   - Scene goal: レイナの弱さを“保護”ではなく“信頼”として受け取る
   - Active switch: 尊敬の具体性 / opens when 強さや成果を、どこがすごいのか具体的に認める
   - Switch tell: 表情は控えめでも、会話のテンポが少し柔らかくなる
   - Dramaturgy: 本音 / 尊敬の具体性: 弱さや怖さの開示
   - Player move: 強さや成果を、どこがすごいのか具体的に認める。保護ではなく信頼として受け取る
   - Love contract: 戻す / 表面は「相手の本音が見える」の会話。でも本当は、弱さや怖さの開示を通して尊敬の具体性を見られている。
   - Hidden ask: ズレた時に、強いね・怖いねで雑にラベル化するで済ませず関係の扱い方を直すこと
   - Heart key: 尊敬の具体性 / clue 表情は控えめでも、会話のテンポが少し柔らかくなる / unlock by 強さや成果を、どこがすごいのか具体的に認める
   - Tempting wrong move: 任せきりやご機嫌取りは、対等さを失わせる。
   - Winning move: 有能さと誠実さが両方見え、戦友ではなく恋の相手として認識される。
   - Unsaid safe subtext: 口にしない安心 / 表情は控えめでも、会話のテンポが少し柔らかくなる。「強いままでも、弱い部分を直されずに預けられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 表情は控えめでも、会話のテンポが少し柔らかくなる。楽しい温度は届いている。次は「好きと付き合いたいを曖昧に分けず、同じ解像度でまっすぐ返すこと」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 強いね・怖いねで雑にラベル化するように響き、「正しさや勝ち負けで感情を処理され、自分の緊張が見落とされること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: TRUTH / 本音受容
   - Player lesson: 弱さを直さず、信頼として受け取る。守るより、軽く扱わない姿勢を見せる。
   - Tactical read: TRUTH / 対等に言い切る
   - Preferred move: concrete / action
   - Risky move: dismiss
   - Tactical note: レイナは曖昧な迎合を見抜く。敬意を示しながら、自分の意思も明確に出す。
   - Payoff: 心理スイッチ「尊敬の具体性」が開くと、次の本音に進みやすい。強さや成果を、どこがすごいのか具体的に認めること。
   - Trap: 強いね・怖いねで雑にラベル化すると、場面の目的「レイナの弱さを“保護”ではなく“信頼”として受け取る」から外れる。

13. **静かな和解**
   - Location: 帰り道のベンチ、少し間を置いて座る
   - Scene goal: 和解を“なんとなく”で済ませず、関係の前進として残す
   - Active switch: 感情の置き場所 / opens when 解決だけ急がず、強さの裏の緊張にも気づく
   - Switch tell: 言い切ったあとに沈黙があり、本当に見ているかを測る
   - Dramaturgy: 和解 / 感情の置き場所: 揉め方を学ぶ
   - Player move: 解決だけ急がず、強さの裏の緊張にも気づく。雰囲気で流さず、次の扱い方を一つ決める
   - Love contract: 戻す / 表面は「静かな和解」の会話。でも本当は、揉め方を学ぶを通して感情の置き場所を見られている。
   - Hidden ask: ズレた時に、正しさや勝ち負けで感情を処理するで済ませず関係の扱い方を直すこと
   - Heart key: 感情の置き場所 / clue 言い切ったあとに沈黙があり、本当に見ているかを測る / unlock by 解決だけ急がず、強さの裏の緊張にも気づく
   - Tempting wrong move: 任せきりやご機嫌取りは、対等さを失わせる。
   - Winning move: 有能さと誠実さが両方見え、戦友ではなく恋の相手として認識される。
   - Unsaid safe subtext: 口にしない安心 / 言い切ったあとに沈黙があり、本当に見ているかを測る。「強いままでも、弱い部分を直されずに預けられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 言い切ったあとに沈黙があり、本当に見ているかを測る。楽しい温度は届いている。次は「好きと付き合いたいを曖昧に分けず、同じ解像度でまっすぐ返すこと」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 正しさや勝ち負けで感情を処理するように響き、「正しさや勝ち負けで感情を処理され、自分の緊張が見落とされること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: RESET / 再契約
   - Player lesson: 仲直りで終わらせず、次に同じズレが起きた時の扱い方を決める。
   - Tactical read: RESET / 対等に言い切る
   - Preferred move: concrete / action
   - Risky move: dismiss
   - Tactical note: レイナは曖昧な迎合を見抜く。敬意を示しながら、自分の意思も明確に出す。
   - Payoff: 心理スイッチ「感情の置き場所」が開くと、次の本音に進みやすい。解決だけ急がず、強さの裏の緊張にも気づくこと。
   - Trap: 正しさや勝ち負けで感情を処理すると、場面の目的「和解を“なんとなく”で済ませず、関係の前進として残す」から外れる。

14. **告白前の緊張**
   - Location: 夜景の見えるテラス、光が揺れる手前
   - Scene goal: 緊張を読んで、茶化さず、でも重くしすぎない
   - Active switch: 感情の置き場所 / opens when 解決だけ急がず、強さの裏の緊張にも気づく
   - Switch tell: 言い切ったあとに沈黙があり、本当に見ているかを測る
   - Dramaturgy: 告白前 / 感情の置き場所: 緊張を守る
   - Player move: 解決だけ急がず、強さの裏の緊張にも気づく。茶化しすぎず、聞く姿勢をはっきり見せる
   - Love contract: 決める / 表面は「告白前の緊張」の会話。でも本当は、緊張を守るを通して感情の置き場所を見られている。
   - Hidden ask: 好きと付き合いたいを曖昧に分けず、同じ解像度でまっすぐ返すこと。
   - Heart key: 感情の置き場所 / clue 言い切ったあとに沈黙があり、本当に見ているかを測る / unlock by 解決だけ急がず、強さの裏の緊張にも気づく
   - Tempting wrong move: 任せきりやご機嫌取りは、対等さを失わせる。
   - Winning move: 有能さと誠実さが両方見え、戦友ではなく恋の相手として認識される。
   - Unsaid safe subtext: 口にしない安心 / 言い切ったあとに沈黙があり、本当に見ているかを測る。「強いままでも、弱い部分を直されずに預けられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 言い切ったあとに沈黙があり、本当に見ているかを測る。楽しい温度は届いている。次は「好きと付き合いたいを曖昧に分けず、同じ解像度でまっすぐ返すこと」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 正しさや勝ち負けで感情を処理するように響き、「正しさや勝ち負けで感情を処理され、自分の緊張が見落とされること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: READY / 緊張保持
   - Player lesson: 告白前の震えを茶化しすぎない。沈黙も相手の勇気の一部として扱う。
   - Tactical read: READY / 対等に言い切る
   - Preferred move: concrete / action
   - Risky move: dismiss
   - Tactical note: レイナは曖昧な迎合を見抜く。敬意を示しながら、自分の意思も明確に出す。
   - Payoff: 心理スイッチ「感情の置き場所」が開くと、次の本音に進みやすい。解決だけ急がず、強さの裏の緊張にも気づくこと。
   - Trap: 正しさや勝ち負けで感情を処理すると、場面の目的「緊張を読んで、茶化さず、でも重くしすぎない」から外れる。

15. **告白の瞬間**
   - Location: テラスの手すり近く、街の光がにじむ場所
   - Scene goal: 返事は、短くても逃げずに、まっすぐ返す
   - Active switch: 感情の置き場所 / opens when 解決だけ急がず、強さの裏の緊張にも気づく
   - Switch tell: 言い切ったあとに沈黙があり、本当に見ているかを測る
   - Dramaturgy: 告白 / 感情の置き場所: 関係の定義
   - Player move: 解決だけ急がず、強さの裏の緊張にも気づく。曖昧さに逃げず、短くても主語を持って返す
   - Love contract: 決める / 表面は「告白の瞬間」の会話。でも本当は、関係の定義を通して感情の置き場所を見られている。
   - Hidden ask: 好きと付き合いたいを曖昧に分けず、同じ解像度でまっすぐ返すこと。
   - Heart key: 感情の置き場所 / clue 言い切ったあとに沈黙があり、本当に見ているかを測る / unlock by 解決だけ急がず、強さの裏の緊張にも気づく
   - Tempting wrong move: 任せきりやご機嫌取りは、対等さを失わせる。
   - Winning move: 有能さと誠実さが両方見え、戦友ではなく恋の相手として認識される。
   - Unsaid safe subtext: 口にしない安心 / 言い切ったあとに沈黙があり、本当に見ているかを測る。「強いままでも、弱い部分を直されずに預けられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 言い切ったあとに沈黙があり、本当に見ているかを測る。楽しい温度は届いている。次は「好きと付き合いたいを曖昧に分けず、同じ解像度でまっすぐ返すこと」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 正しさや勝ち負けで感情を処理するように響き、「正しさや勝ち負けで感情を処理され、自分の緊張が見落とされること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: COMMIT / 明確化
   - Player lesson: 返事を濁さない。好き・付き合いたい・考えたいを、主語つきで短く言う。
   - Tactical read: COMMIT / 曖昧さを残さない
   - Preferred move: concrete / action
   - Risky move: dismiss
   - Tactical note: 告白では好きと付き合いたいを分けて言う。逃げない明確さが安心に変わる。
   - Payoff: 心理スイッチ「感情の置き場所」が開くと、次の本音に進みやすい。解決だけ急がず、強さの裏の緊張にも気づくこと。
   - Trap: 正しさや勝ち負けで感情を処理すると、場面の目的「返事は、短くても逃げずに、まっすぐ返す」から外れる。

16. **告白後の余韻**
   - Location: 別れ際、夜景を背にした静かな横顔
   - Scene goal: 成立した関係を、次につながる約束で締める
   - Active switch: 感情の置き場所 / opens when 解決だけ急がず、強さの裏の緊張にも気づく
   - Switch tell: 言い切ったあとに沈黙があり、本当に見ているかを測る
   - Dramaturgy: 余韻 / 成立した関係を雑に扱わない
   - Player move: 次の約束まで丁寧に置く
   - Love contract: 決める / 表面は「告白後の余韻」の会話。でも本当は、成立後の敬意を通して感情の置き場所を見られている。
   - Hidden ask: 好きと付き合いたいを曖昧に分けず、同じ解像度でまっすぐ返すこと。
   - Heart key: 感情の置き場所 / clue 言い切ったあとに沈黙があり、本当に見ているかを測る / unlock by 解決だけ急がず、強さの裏の緊張にも気づく
   - Tempting wrong move: 任せきりやご機嫌取りは、対等さを失わせる。
   - Winning move: 有能さと誠実さが両方見え、戦友ではなく恋の相手として認識される。
   - Unsaid safe subtext: 口にしない安心 / 言い切ったあとに沈黙があり、本当に見ているかを測る。「強いままでも、弱い部分を直されずに預けられる関係がほしい」という願いに、少し近い相手として残った。
   - Unsaid spark subtext: 口にしない期待 / 言い切ったあとに沈黙があり、本当に見ているかを測る。楽しい温度は届いている。次は「好きと付き合いたいを曖昧に分けず、同じ解像度でまっすぐ返すこと」へ着地すると、火花が恋の輪郭になる。
   - Unsaid strain subtext: 飲み込んだ違和感 / 正しさや勝ち負けで感情を処理するように響き、「正しさや勝ち負けで感情を処理され、自分の緊張が見落とされること」という怖さが少し顔を出した。次は言い訳より先に受け取り直したい。
   - Continuity callback note: if this scene follows a memorable safe, spark, strain, or repair choice, restate the earlier attitude as something still visible in the character's gaze, posture, and wording.
   - Skill: AFTER / 余韻設計
   - Player lesson: 成立後こそ雑にしない。所有感ではなく、次の約束で大切に締める。
   - Tactical read: AFTER / 対等に言い切る
   - Preferred move: concrete / action
   - Risky move: dismiss
   - Tactical note: レイナは曖昧な迎合を見抜く。敬意を示しながら、自分の意思も明確に出す。
   - Payoff: 心理スイッチ「感情の置き場所」が開くと、次の本音に進みやすい。解決だけ急がず、強さの裏の緊張にも気づくこと。
   - Trap: 正しさや勝ち負けで感情を処理すると、場面の目的「成立した関係を、次につながる約束で締める」から外れる。
