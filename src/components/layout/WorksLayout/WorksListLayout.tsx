import PageLayout from "../PageLayout";
import React from "react";
type WorksListLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const WorksListLayout = ({ children, className }: WorksListLayoutProps) => {
  return (
    <PageLayout
      hero={{
        heading: "Works",
        subTitle: "作品紹介",
        pageDescription: (
          <>
            現在のスキルを使用して作成した作品たちです。
            <br />
            デザイン的な見た目よりも、コードの美しさや保守性を意識して作成いたしました。
          </>
        ),
      }}
      className={className}
    >
      {children}
    </PageLayout>
  );
};

export default WorksListLayout;
