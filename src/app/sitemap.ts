import { MetadataRoute } from "next";
import { getAllWorksCategoryList, getAllWorksList } from "@/lib/api/microcms";

const buildUrl = (path?: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return `${baseUrl}${path ?? ""}`;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const WorksList = await getAllWorksList();
  const WorksCategoryList = await getAllWorksCategoryList();
  const now = new Date();
  const worksUrls: MetadataRoute.Sitemap = WorksList.map((content) => {
    return {
      url: buildUrl(`/works/${content.id}`),
      lastModified: now,
    };
  });
  const worksCategoryUrls: MetadataRoute.Sitemap = WorksCategoryList.map(
    (content) => {
      return {
        url: buildUrl(`/works/category/${content.id}`),
        lastModified: now,
      };
    }
  );
  return [
    {
      url: buildUrl(),
      lastModified: now,
    },
    {
      url: buildUrl("/works"),
      lastModified: now,
    },
    ...worksCategoryUrls,
    ...worksUrls,
    {
      url: buildUrl("/articles"),
      lastModified: now,
    },
    {
      url: buildUrl("/about"),
      lastModified: now,
    },
    {
      url: buildUrl("/contact"),
      lastModified: now,
    },
    {
      url: buildUrl("/site"),
      lastModified: now,
    },
    {
      url: buildUrl("/privacy"),
      lastModified: now,
    },
  ];
}
