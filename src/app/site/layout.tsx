import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Site Map",
  description: "サイトマップコンテンツのページです",
};

export default function SteMapLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageLayout
      hero={{
        heading: "Site Map",
        subTitle: "サイトマップコンテンツ",
      }}
    >
      {children}
    </PageLayout>
  );
}
