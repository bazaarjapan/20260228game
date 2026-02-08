# 放課後メモリーズ (MVP)

スマートフォン縦画面向けの、Webブラウザで動く短編恋愛シミュレーションです。

## 仕様

- 縦画面前提UI
- 攻略対象 1人 (星空みさき)
- 1周 約15分想定
- 分岐による親密度変動
- エンディング 3種
- セーブ/ロード (LocalStorage)
- 自動チェックポイント保存（シーン進行ごと）
- オート再生
- バックログ
- 画像フル表示 + 親密度/感情パラメータのオーバーレイ表示
- BGM再生 (`sound/bgm.mp3`, ループ)

## 起動方法

1. このディレクトリで簡易サーバーを起動

```powershell
python -m http.server 8080
```

2. ブラウザで以下にアクセス

`http://localhost:8080`

## シーン画像の生成

`model=gemini-2.5-flash-image` を使って、星空みさきの各シーン画像を一括生成できます。

```powershell
$env:GEMINI_API_KEY="YOUR_API_KEY"
node scripts/generate-misaki-images.mjs
```

生成先:
- `images/misaki_scenes/*.png`
- `images/misaki_scenes/manifest.json`

## ファイル構成

- `index.html`: 画面レイアウト
- `style.css`: スマホ縦画面向けスタイル
- `app.js`: シナリオ、分岐、状態管理、保存処理、シーン画像切替
- `scripts/generate-misaki-images.mjs`: Gemini画像生成スクリプト
