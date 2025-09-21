import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "Articles",
  description: "Zenn記事にて学んだことをまとめ、公開しています。",
};

export default function ArticlesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageLayout
      hero={{
        heading: "Articles",
        subTitle: "記事一覧",
        pageDescription: (
          <>
            Zennにて記事を公開しています。
            <br />
            実装したことや学習したことを中心に、定期的にアウトプットとして記事を書くように心がけています。
          </>
        ),
      }}
    >
      {children}
    </PageLayout>
  );
}
