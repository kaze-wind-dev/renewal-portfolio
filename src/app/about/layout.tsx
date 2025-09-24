import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "About",
  description: "コーダーとして3年間、200件以上のWebサイト構築に携わってきました。HTML/CSS/SCSS/PHPでの確実な実装を得意とし、現在はNext.js/React/TypeScriptを学習してフロントエンドエンジニアへのキャリアチェンジを目指しています。",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageLayout
      hero={{
        heading: "About",
        subTitle: "私について",
      }}
    >
      {children}
    </PageLayout>
  );
}
