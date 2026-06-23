# Love Type Lab MVP

恋愛タイプ別の会話スタイルを、3回のデート形式で学ぶスマートフォン対応Web MVPです。

MBTI/16タイプ風の分類は、相手を決めつけるためではなく、会話の癖・距離感・衝突時の受け取り方をゲームとして練習するための娯楽的なモデルとして扱います。

## ローカル起動

外部パッケージは不要です。Node/npm がなくても Python だけで起動できます。

```powershell
python scripts/serve.py
```

起動後、ブラウザで次を開いてください。

```text
http://localhost:4173
```

疎通確認:

```text
http://localhost:4173/healthz
```

ポートを変える場合:

```powershell
$env:PORT = "8080"
python scripts/serve.py
```

Node/npm がある環境では次でも起動できます。

```bash
npm run dev
```

## 現在のMVPスコープ

今はデート版に注力しています。課金、LINE添削、合コンモードは後回しです。

- LP
- キャラクター7人
- キャラクター一覧・詳細
- 3回のデート x 各5シーン
- 選択肢による5メーター採点
- 回答欄のランダム配置
- 選択直後のチャット風フィードバック
- Great / Good / Close / Miss の4段階スタンプ評価
- 本音の鍵、関係ニーズ、接続サイン、場面別タクティックの読解
- デート終了後の相手視点「幕間ノート」
- 5種類のルートエンディングとエンディングアルバム
- 結果カードと共有テキストコピー

## ゲーム体験

各シーンでは、相手の発言そのものだけでなく、表情・沈黙・場所・前回の選択の余韻を読んで返答を選びます。

- `本音の鍵`: その場面で相手が本当に見ている願いを読めたか
- `Need Compass`: 自律性、理解された感覚、次に進める安心感を満たせたか
- `Connection Bid`: 相手の小さな「見て」「聞いて」「戻ってきて」を拾えたか
- `Route Compass`: 安心、火花、修復、バランスなど、今どの恋愛ルートに寄っているか
- `幕間ノート`: デート後に、相手が何を覚え、何に引っかかり、次に何を試すかを表示

同じキャラでも、同じ方向の返しを連打すれば勝てる設計にはしていません。初対面、接近、衝突、和解、告白前後で、刺さる返しと危ない返しが変わります。

## リサーチ運用

NotebookLMに調査・分類・要約を委託し、Codexには圧縮済みJSONだけを渡すための汎用Skillを追加しました。

```text
C:\Users\hitug\.codex\skills\notebooklm-research-delegator
```

NotebookLM MCP/APIが接続済みならこのSkillで調査を委託します。未接続の場合は、NotebookLM側で出力したJSONを貼り付ける運用にできます。

16タイプ風ペルソナ情報は `src/personas.js` に構造化してあります。NotebookLMの追加調査結果は、Skillの `import_payload` 形式にしてからここへ反映します。

研究・設計メモは主に次へ格納します。

- `research/notebooklm/`: NotebookLMまたは直接調査の要約・取り込みメモ
- `research/game-design/love-type-lab-character-bible.md`: キャラクター別の設計バイブル
- `research/visual-prompts/date-scene-prompts.md`: 必要な画像素材と生成プロンプト

設計バイブルと画像プロンプトは、次のコマンドで再生成できます。

```bash
npm run export:game-bible
npm run export:image-prompts
```

## GitHub Pages デプロイ

GitHub の Settings -> Pages -> Build and deployment で Source を `GitHub Actions` に設定してください。

`main` または `work` ブランチへ push すると、`.github/workflows/pages.yml` が `dist/` を生成して GitHub Pages に公開します。

ローカルで Pages 用成果物を作る場合:

```powershell
python scripts/build_pages.py
```

Node/npm がある環境:

```bash
npm run build:pages
```

## 実装済み

- サービス紹介LPと安全性・倫理の案内
- 7キャラクターの一覧・詳細プロフィール
- 各キャラクター3デート x 5シーン
- 5メーターによるルールベース採点
- 選択肢のランダム配置
- 選択肢ごとの方向性ラベル
- チャット風の相手視点・理由・改善フレーズ表示
- 4段階スタンプ評価
- 本音の鍵、心理スイッチ、関係ニーズ、接続サインの読解
- 場面別タクティック、会話レッスン、ルートコンパス
- デートミッション、幕間ノート、キャラクター記憶の継続
- 5種類のエンディング判定
- エンディングアルバムとリプレイ計画
- 恋愛会話レポートと共有テキスト生成
- スマートフォン1画面を意識したレスポンシブUI

## 検証

標準チェック:

```bash
npm run check
```

この環境のように `npm` がPATHにない場合は、バンドルされたNode/PythonをPATHに入れて `pnpm run check` を使うか、次を個別に確認します。

```powershell
node --check src/app.js
node --check src/gameDesign.js
node --check scripts/export_image_prompts.mjs
node --check scripts/export_game_bible.mjs
python -m py_compile scripts/serve.py scripts/build_pages.py
python scripts/build_pages.py
git diff --check
```

ローカルサーバー確認:

```powershell
python scripts/serve.py
```

```text
http://127.0.0.1:4173/healthz
http://127.0.0.1:4173/
http://127.0.0.1:4173/characters
```

## 構成

- `index.html`: エントリーポイント
- `src/app.js`: 状態管理、画面描画、採点、フィードバック、ルート判定
- `src/story.js`: キャラクター別デートシナリオと選択肢
- `src/gameDesign.js`: 心理スイッチ、場面別タクティック、ルート、研究根拠
- `src/personas.js`: 16タイプ風ペルソナ情報
- `src/styles.css`: UI、キャラクターアート、レスポンシブスタイル
- `scripts/serve.py`: ローカル開発サーバー
- `scripts/build_pages.py`: GitHub Pages 用ビルド
- `scripts/export_game_bible.mjs`: ゲーム設計バイブル生成
- `scripts/export_image_prompts.mjs`: 画像プロンプト生成
