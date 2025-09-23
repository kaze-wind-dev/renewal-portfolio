import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Contact",
  description: "ご意見やご感想、気になることなどございましたら、以下のフォームよりお問い合わせください。",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageLayout
      hero={{
        heading: "Contact",
        subTitle: "お問い合わせ",
        pageDescription:"ご意見やご感想、気になることなどございましたら、以下のフォームよりお問い合わせください。"
        
      }}
    >
      {children}
    </PageLayout>
  );
}
