# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

UkuleleCodeは、ウクレレ演奏支援のための完成したWebアプリケーションです。実際の楽曲で使用される人気のコード進行パターンと、Web Audio APIを使用したリアルタイム音声再生機能を提供します。

## アプリケーション仕様

### 完成済み機能
- **全12キー対応**: C, C#, D, D#, E, F, F#, G, G#, A, A#, B
- **3セクション構成**: Aメロ、Bメロ、サビの進行パターン
- **実際の楽曲で使用される進行**: カノン進行、王道進行、Let It Be進行、小室進行など15種類以上
- **80種類以上のコード運指**: 基本コード、7th、sus4、add9、ディミニッシュなど
- **リアルタイム音声再生**: Web Audio APIによる4弦同時発音
- **レスポンシブデザイン**: PC・モバイル両対応
- **美しいアニメーション**: フローティング、パルス、グロー効果

### ファイル構成
```
UkuleleCode/
├── index.html          # メインHTMLファイル
├── styles.css          # スタイルシート（アニメーション含む）
├── script.js           # JavaScript（コード進行DB、音声合成、UI制御）
├── README.md           # プロジェクト説明
└── CLAUDE.md           # このファイル
```

## 技術スタック

- **HTML5**: セマンティックな構造、レスポンシブレイアウト
- **CSS3**: CSS Grid、Flexbox、アニメーション、グラデーション
- **JavaScript ES6+**: クラスベース設計、Web Audio API、非同期処理
- **Web Audio API**: リアルタイム音声合成

## アーキテクチャ

### JavaScriptクラス構成
1. **AudioSynthesizer**: Web Audio APIを使用した音声合成
2. **UkuleleApp**: メインアプリケーションロジック

### データベース構成
1. **chordProgressions**: 全12キーのコード進行パターン
2. **chordFingerings**: 80種類以上のコード運指データ

## 開発環境セットアップ

このアプリケーションは純粋なHTML/CSS/JavaScriptで構築されており、特別な開発環境は不要です。

### インストール
```bash
git clone https://github.com/amidaMangrove/UkuleleCode.git
cd UkuleleCode
```

### 実行
ブラウザで`index.html`を開くだけで使用できます。

## 既存コードの理解

### コード進行データ構造
```javascript
chordProgressions = {
  'C': {
    verse: [
      { name: 'カノン進行', chords: ['C', 'G', 'Am', 'F'] },
      // ...
    ],
    bridge: [...],
    chorus: [...]
  }
}
```

### コード運指データ構造
```javascript
chordFingerings = {
  'C': ['0003', 'G-C-E-A'],  // [フレット, 弦名]
  'Am7': ['0000', 'G-C-E-A'],
  // ...
}
```

### 音声合成の仕組み
- ウクレレの4弦（G-C-E-A）の基本周波数から計算
- フレット番号に基づく周波数変換
- エンベロープ設定による自然な音色

## メンテナンス・拡張時の注意事項

### コード進行の追加
新しいコード進行を追加する場合：
1. `chordProgressions`オブジェクトに追加
2. 使用するコードが`chordFingerings`に存在することを確認
3. 全12キーで一貫性を保つ

### 新しいコードの追加
新しいコード運指を追加する場合：
1. `chordFingerings`オブジェクトに追加
2. フレット番号は4桁の文字列（例：'0003'）
3. 弦の順序はG-C-E-A

### スタイルの変更
CSSアニメーションは以下の方針で設計：
- `float`: コードカードの浮遊効果
- `pulse`: 選択中要素の鼓動効果
- `fadeIn/slideIn`: 要素の表示アニメーション

## パフォーマンス考慮事項

- 音声再生は非同期処理
- アニメーションはCSS3を活用（GPU加速）
- コード進行データはメモリ効率を重視した構造

## ブラウザ互換性

- Web Audio API対応ブラウザ（Chrome, Firefox, Safari, Edge）
- CSS Grid/Flexbox対応ブラウザ
- ES6+対応ブラウザ

## 今後の拡張候補

- コード進行の保存・共有機能
- メトロノーム機能
- MIDI出力対応
- 楽曲検索・分析機能
- ユーザー投稿型コード進行DB
