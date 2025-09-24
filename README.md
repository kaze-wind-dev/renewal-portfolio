# Kaze Portfolio（Renewal）

モダンフロントエンド技術を活用したポートフォリオサイトのリニューアル版

## サイト情報

- **URL**: [https://portfolio.kaze-develop.com/](https://renewal-portfolio.vercel.app/)
- **技術スタック**: Next.js 15.3.5, TypeScript, SCSS
- **デプロイ**: Vercel

## プロジェクト概要

コーダーからフロントエンドエンジニアへのキャリアチェンジを目指し、モダンなJamstack技術を活用して制作したポートフォリオサイトです。
前回作成したポートフォリオのリニューアル版になります。

## 主な特徴

- **レスポンシブデザイン**: モバイルファーストでコーディングされたUI/UX
- **パフォーマンス最適化**: Next.js 15の最新機能を活用
- **アニメーション**: IntersectionObserverやSplideを用いたマイクロインタラクション、Gsapを用いたオープニングアニメーション
- **SEO対策**: メタデータ最適化とサイトマップ生成

## 前回からの変更点

- オープニングアニメーションの実装を前提とした設計に変更
- 各コンテンツが見やすくなるよう、デザインやコンテンツ構成を変更
- Aboutページのコンテンツの追加・整理
- Webアクセシビリティを意識したコーディング（ナビゲーション、リンク周り）
- ページネーションの改修（Previous,Nextの追加）
- clsxライブラリの採用

### フロントエンド

- **Next.js 15.3.5** - React フレームワーク（App Router使用）
- **TypeScript** - 型安全な開発
- **Sass/SCSS** - CSS設計手法（BEM/FLOCSS）
- **React.js** - コンポーネントベース開発

### API・データ連携

- **microCMS** - 記事一覧・詳細情報
- **Zenn API** - 記事一覧

### 開発・デプロイメント

- **Vercel** - ホスティング・CI/CD（Next.js最適化）
- **SSG/ISR** - 静的生成・段階的静的再生成
- **Git** - バージョン管理
- **ESLint/Prettier** - コード品質管理

### パフォーマンス・品質

- **Core Web Vitals** - 良好な評価
- **SEO最適化** - 構造化データ・メタタグ対応

## プロジェクト構成

```
├── app/
│   ├── components/         # 再利用可能なコンポーネント
│   ├── (pages)/            # ページコンポーネント
│   ├── globals.css         # グローバルスタイル
│   └── layout.tsx          # ルートレイアウト
├── public/
│   └── images/             # 画像アセット
├── types/                  # TypeScript型定義
├── libs/                   # ユーティリティ関数・API連携
└── styles/                 # スタイル
```

## 作業時間
約38時間

## 今後の予定

- **GSAP導入**: アニメーション実装
- **画像差し替え**
- **ナビゲーションにカレントクラス追加**
- **SEO対策**:sitemap.xmlの追加
- **テストコードの追加**
- **エラーハンドリングの追加**
- **ドメイン設定**

## お問い合わせ

ポートフォリオに関するご意見やご質問などは以下からお気軽にどうぞ。

- **Portfolio**: [https://portfolio.kaze-develop.com](https://renewal-portfolio.vercel.app/)
- **GitHub**: [https://github.com/kaze-wind-dev](https://github.com/kaze-wind-dev)
