import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Kaze Portfolioサイトのプライバシーポリシーページです",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageLayout
      hero={{
        heading: "Privacy Policy",
        subTitle: "プライバシーポリシー",
        pageDescription:"当サイトでは、お客様の個人情報を以下の通り取り扱います。"
        
      }}
    >
      {children}
    </PageLayout>
  );
}
