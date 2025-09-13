import clsx from "clsx";
import { Zen_Kaku_Gothic_New, Outfit } from "next/font/google";
import "@/styles/global.scss";

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
      <body>{children}</body>
    </html>
  );
}
