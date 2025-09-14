import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries } from "microcms-js-sdk";
import type { Works, WorksCategory, Category } from "@/types/microcms";

// 環境変数のMICROCMS_SERVICE_DOMAINの設定確認
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

// 環境変数のMICROCMS_API_KEYの設定確認
if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

//　初期化
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// 作品紹介一覧
export const getWorksList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Works>({
    endpoint: "works",
    queries,
    customRequestInit: {
      next: {
        revalidate: 600,
      },
    },
  });
  return listData;
};

// 作品紹介すべての記事
export const getAllWorksList = async () => {
  const listData = await client.getAllContents<Works>({
    endpoint: "works",
  });
  return listData;
};

// 作品紹介詳細
export const getWorksDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const singleData = await client.getListDetail<Works>({
    endpoint: "works",
    contentId,
    queries,
    customRequestInit: {
      next: {
        revalidate: queries?.draftKey === undefined ? 600 : 0,
        tags: ["works"],
      },
    },
  });

  return singleData;
};

// 作品紹介カテゴリー
export const getWorksCategoryList = async (queries?: MicroCMSQueries) => {
  const worksCategoryList = await client.getList<WorksCategory>({
    endpoint: "works-category",
    queries,
    customRequestInit: {
      next: { revalidate: 600, tags: ["works-category"] },
    },
  });
  return worksCategoryList;
};

// 作品紹介すべてのカテゴリー
export const getAllWorksCategoryList = async () => {
  const worksCategoryList = await client.getAllContents<WorksCategory>({
    endpoint: "works-category",
  });
  return worksCategoryList;
};

export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Category>({
    endpoint: "works-category",
    contentId,
    queries,
    customRequestInit: {
      next: { revalidate: 600, tags: ["works-category"] },
    },
  });
  return detailData;
};
