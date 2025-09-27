// 外部リンク
export const ZENN_LINK = 'https://zenn.dev/kaze_wind';
export const GITHUB_LINK = 'https://github.com/kaze-wind-dev';

//microcms limit
export const WORKS_LIST_LIMIT = 12;
export const TOP_WORKS_LIST_LIMIT = 6;

// zenn
export const ZENN_LIST_LIMIT = 12;
export const TOP_ZENN_LIST_LIMIT = 6;

// navigation
export type NavigationItem = {
    href: string;
    name: string;
    label: string;
}

export const MAIN_NAVIGATION_LIST: NavigationItem[] = [
  { href: "/",name: "Top", label:"トップページ" },
  { href: "/works",name: "Works", label: "作品一覧" },
  { href: "/articles",name: "Articles", label: "記事一覧" },
  { href: "/about",name: "About", label: "私について" },
  { href: "/contact",name: "Contact", label:"お問い合わせ" },
];

export const SUB_NAVIGATION_LIST: NavigationItem[] = [
  { href: "/site",name: "Site Map", label:"サイトマップ" },
  { href: "/privacy",name: "Privacy Policy", label:"プライバシーポリシー" },
];

export const ALL_NAVIGATION_LIST: NavigationItem[] = [
    ...MAIN_NAVIGATION_LIST,
    ...SUB_NAVIGATION_LIST,
];