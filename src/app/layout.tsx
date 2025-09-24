import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New, Outfit } from "next/font/google";
import clsx from "clsx";
import "@/styles/global.scss";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const ZenKakuGothicNewFont = Zen_Kaku_Gothic_New({
  weight: ["500", "700"],
  variable: "--font-zenkaku-gothic-new",
  display: "swap",
  preload: true,
});

const OutfitFont = Outfit({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.kaze-develop.com/"),
  title: {
    default: "Kaze Portfolio | フロントエンドエンジニアを目指して",
    template: "%s | Kaze Portfolio",
  },
  description:
    "コーダーからフロントエンドエンジニアへ。3年間のコーディング経験を活かし、React/Next.jsでモダンなWeb開発に挑戦するKazeのポートフォリオサイトです。",
  keywords: [
    "Kaze",
    "かぜ",
    "ポートフォリオ",
    "未経験フロントエンドエンジニア",
    "コーダー",
    "React",
    "Next.js",
    "Web制作",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Kaze" }],
  openGraph: {
    type: "website",
    siteName: "Kaze Portfolio",
    title: "Kaze Portfolio | フロントエンドエンジニアを目指して",
    description: "コーダーからフロントエンドエンジニアへ。3年間のコーディング経験を活かし、React/Next.jsでモダンなWeb開発に挑戦するKazeのポートフォリオサイトです。",
    images: [
      {
        url: "/ogp_image.jpg",
        width: 1200,
        height: 630,
        alt: "Kaze Portfolio OGP画像",
      },
    ],
    url: "https://portfolio.kaze-develop.com/"
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaze Portfolio | フロントエンドエンジニアを目指して",
    description: "コーダーからフロントエンドエンジニアへ。3年間のコーディング経験を活かし、React/Next.jsでモダンなWeb開発に挑戦するKazeのポートフォリオサイトです。",
    images: ["/ogp_image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={clsx(ZenKakuGothicNewFont.variable, OutfitFont.variable)}
    >
      <body>
        <div className="global-container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
