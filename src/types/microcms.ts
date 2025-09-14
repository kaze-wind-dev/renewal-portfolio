import type { MicroCMSListContent, MicroCMSImage } from "microcms-js-sdk";

export type Works = {
  title: string;
  description: string;
  site_url: string;
  github_url: string;
  design_url: string;
  period: string;
  background: string;
  technical: string;
  learned: string;
  time: string;
  time_detail: string;
  thumbnail?: MicroCMSImage;
  images?: MicroCMSImage[];
  category: {
    id: string;
    name: string;
  };
  technology_stack: string[];
} & MicroCMSListContent;

export type Category = {
  name: string;
} & MicroCMSListContent;

export type WorksCategory = Category;
